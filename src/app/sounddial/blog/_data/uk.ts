import type { ArticleSet } from "./index";

export const ukArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Audio for Podcasting: Control What You Hear While Recording",
    description:
      "Recording a podcast while monitoring levels, hearing your guest, and managing notifications — all competing for one volume slider. Here's a better setup.",
    date: "2026-03-05",
    readTime: "5 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "3 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "12 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "8 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "8 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "4 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "10 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "5 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "8 хв читання",
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
    readTime: "7 хв читання",
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
    readTime: "6 хв читання",
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
    readTime: "9 хв читання",
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
    title: "Найкраща альтернатива Background Music для Mac (2026)",
    description: "Background Music зламався на новішому macOS? Найнадійнішою альтернативою мікшера гучності для кожної програми є SoundDial — програма Mac App Store із пісочним програмним середовищем із посиленням і профілями.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо Background Music перестав працювати після оновлення macOS, найнадійнішою альтернативою є <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — мікшер гучності панелі меню для кожної програми від Mac App Store. Він надає кожній програмі власний повзунок гучності, додає профілі вимкнення звуку, підсилення, гучності та автоматичного приглушення, а також повністю ізольоване та перевірене Apple, тому немає аудіодрайверів, які можна було б порушити в наступному випуску macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — найкраща альтернатива Background Music для Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому Background Music ламається на новішому macOS</h2>

<p>Background Music — це справді розумний безкоштовний проект із відкритим кодом. Це дало користувачам Mac те, чого ніколи не було в Apple: мікшер гучності для кожного додатка, який Windows мав роками. Але його дизайн також є причиною того, що він продовжує виходити з ладу.</p>

<p>Для маршрутизації та керування звуком Background Music встановлює віртуальний аудіопристрій — драйвер системного рівня, який перехоплює звук вашого Mac. Цей підхід добре працював на старіших версіях macOS, але кожен великий випуск посилює безпеку ядра та аудіорозширень. Поширені симптоми, про які повідомляють користувачі:</p>

<ul>
<li>Зовсім немає звуку після встановлення або оновлення ОС.</li>
<li>Віртуальний пристрій не завантажується, тому маршрутизація аудіо безшумно припиняється.</li>
<li>Для відновлення програми потрібно перевстановити, перезавантажити або видалити драйвер вручну.</li>
<li>Розробка здійснюється спільнотою та здійснюється волонтерами, тому виправлення для нового macOS можуть затримуватися.</li>
</ul>

<p>Ніщо з цього не робить Background Music "поганим". Це просто означає, що безкоштовний інструмент на основі драйверів є крихким за своєю природою, і якщо ви покладаєтеся на обсяг кожного додатка щодня, ця крихкість швидко старіє.</p>

<h2>Що шукати в якості заміни</h2>

<p>Перш ніж вибрати будь-який варіант, визначте, що вам насправді потрібно:</p>

<ul>
<li><strong>Надійність оновлень macOS.</strong> Якщо він інсталює ядро або аудіорозширення, очікуйте випадкових поломок.</li>
<li><strong>Справжній контроль за додатком.</strong> Незалежні гучність і вимкнення звуку для кожної програми є базовим.</li>
<li><strong>Підвищення.</strong> Деякі додатки (інструменти для тихих зустрічей, певні браузери) просто надто тихі — ви хочете перевищити 100%.</li>
<li><strong>Функції зручності.</strong> Профілі та автоматичне притуплення перетворюють утиліту на те, що ви залишаєте відкритим цілий день.</li>
<li><strong>Безпечне встановлення.</strong> Додаток Mac App Store із ізольованим програмним середовищем не може торкатися внутрішніх елементів системи, тому видалення є чистим, а оновлення відбуваються автоматично.</li>
</ul>

<h2>Чому SoundDial є надійним вибором</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> було створено, щоб вирішити саме ту проблему, з якою стикаються користувачі Background Music: вони хочуть об’єм для кожної програми, але вони не хочуть няньчити водія. Він розташований у панелі меню та добре виконує основну роботу:</p>

<ul>
<li><strong>Незалежний обсяг для кожного додатка</strong>, із відключенням звуку для кожної програми на тій же панелі.</li>
<li><strong>Прискорення для кожної програми</strong> щоб зробити тихі додатки достатньо гучними, щоб справді чути.</li>
<li><strong>Об'ємні профілі</strong> — збережіть мікс (скажімо, «зустріч» або «гра») і миттєво перемикайтеся замість того, щоб щоразу перетягувати повзунки.</li>
<li><strong>Автоматичне пригнічення</strong>, тому фоновий звук автоматично вимикається, коли потрібно.</li>
<li><strong>Швидке перемикання виходу</strong> між колонками, навушниками та іншими пристроями.</li>
</ul>

<p>Більша різниця полягає в тому, як його встановити. SoundDial постачається через Mac App Store, що означає, що його переглянуто Apple і в пісочниці. Немає DMG для перетягування, немає аудіодрайвера чи системного розширення та немає доступу до ядра. Це єдина найважливіша причина, чому він не порушить роботу Background Music, коли з’явиться новий macOS — він не підключений до частин системи, які Apple постійно блокує.</p>

<p>Це коштує <strong>14,99 євро одноразово</strong>. Не безкоштовно, але немає підписки, і ви платите за щось підтримуване та безпечне для встановлення.</p>

<h2>SoundDial проти Background Music проти безкоштовних інструментів</h2>

<p>Background Music — не єдиний безкоштовний варіант, тож ось чесний огляд землі:</p>

<ul>
<li><strong>Background Music (безкоштовно, з відкритим кодом):</strong> об’єм для кожної програми, але на основі драйвера, схильний до зламів на новіших macOS, і йому не вистачає посилення, профілів і автоматичного притуплення.</li>
<li><strong>FineTune (безкоштовно, з відкритим кодом):</strong> легка панель меню для кожного додатка. Добре, якщо безкоштовність є вашою єдиною вимогою, але мало додаткових.</li>
<li><strong>eqMac (безкоштовно):</strong> передусім системний еквалайзер і підсилювач, а не справжній мікшер для кожної програми.</li>
<li><strong>SoundSource від Rogue Amoeba (~$39):</strong> опція професійного рівня з еквалайзером для кожної програми та повною маршрутизацією вихідного сигналу. Чудово, але це більш ніж удвічі дорожче, ніж SoundDial, і все ще вимагає завантаження та драйвера запису звуку.</li>
<li><strong>SoundDial (14,99 євро, Mac App Store):</strong> золота середина — реальний обсяг для кожної програми, вимкнення звуку, підсилення, профілі та притуплення, що поставляється як чисте встановлення в ізольованому програмному середовищі без драйверів.</li>
</ul>

<p>Якщо вам потрібен еквалайзер для кожного додатка або складна студійна маршрутизація, SoundSource вартий додаткових грошей. Якщо вам потрібен безкоштовний інструмент для майстра та ви можете терпіти випадкові поломки, підійдуть FineTune або Background Music. Але якщо ваша мета — «надати кожній програмі власний обсяг і припинити роботу кожного оновлення macOS», SoundDial досягає цієї мети з найменшими труднощами.</p>

<h2>Контекст macOS, який робить це необхідним</h2>

<p>Варто сказати прямо: macOS не має вбудованого мікшера гучності для кожної програми. Windows вже багато років має такий у розкривному меню гучності, але на Mac системний повзунок керує всім одночасно. Ця прогалина є причиною існування таких інструментів, як Background Music і SoundDial. Оскільки Apple не заповнює його, практичне питання полягає в тому, якому підходу третьої сторони ви довіряєте — безкоштовному драйверу, який бореться з ОС, чи програмі ізольованого програмного середовища, яка з нею працює.</p>

<p>Готові припинити боротьбу зі зламаними аудіодрайверами? отримати <a href="https://apps.apple.com/app/id6772792641">SoundDial на Mac App Store</a> за 14,99 євро та надійно контролюйте гучність кожної програми.</p>`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource проти SoundDial: який додаток Mac Volume перемагає?",
    description: "SoundSource ($39, професійний рівень) проти SoundDial (€14,99, App Store). Порівняйте гучність, посилення, профілі та автоматичне приглушення для кожної програми, щоб вибрати правильний мікшер Mac для себе.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо ви просто хочете контролювати гучність для кожної програми, яка встановлюється чисто та коштує дешевше, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це найкраща покупка для більшості людей: 14,99 євро одноразово від Mac App Store, з гучністю для кожної програми, вимкненням звуку, посиленням, профілями та автоматичним приглушенням. Вибирайте SoundSource від Rogue Amoeba (~$39), лише якщо вам потрібен еквалайзер для кожної програми та розширена маршрутизація виходу.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource проти SoundDial: який додаток Mac Volume перемагає?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Коротка версія</h2>
<p>macOS досі не має вбудованого мікшера гучності для кожної програми. Windows має такий уже багато років, але на Mac системний повзунок гучності переміщує все одночасно. І SoundSource, і SoundDial існують, щоб виправити цю прогалину. Вони просто націлені на різних покупців.</p>
<ul>
<li><strong>SoundDial</strong> — 14,99 євро одноразово, Mac App Store, програма на панелі меню. Незалежний рівень гучності для кожної програми, вимкнення звуку для кожної програми, посилення для кожної програми, збережені профілі, автоматичне приглушення та швидке перемикання виходу. Переглянуто в ізольованому програмному середовищі та Apple, тому драйвер не встановлюється.</li>
<li><strong>SoundSource</strong> — ~$39, пряме завантаження з Rogue Amoeba. Усе вище, плюс еквалайзер для кожного додатка, розширена маршрутизація вихідного сигналу та звукові ефекти. Потрібен невеликий драйвер для захоплення звуку.</li>
</ul>

<h2>Ціна та спосіб покупки</h2>
<p>Це найчіткіший розкол. SoundSource коштує приблизно 39 доларів і продається безпосередньо Rogue Amoeba. SoundDial коштує 14,99 євро як одноразова покупка на Mac App Store — трохи більше третини ціни.</p>
<p>Тому що <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> поставляється через App Store, він пройшов перевірку в пісочниці, нотаріально та перевірений Apple. Ви натискаєте «Отримати», він встановлюється, і готово. Немає жодного DMG для монтування, жодних дозволів для надання компоненту, суміжному з ядром, а також аудіодрайвера чи системного розширення. Він також працює разом із вашим звичайним потоком оновлень App Store і синхронізується з іншими вашими Mac на тому ж Apple ID.</p>
<p>SoundSource завантажується за межі App Store і встановлює драйвер захоплення аудіо, щоб він міг перехоплювати та обробляти аудіо кожної програми. Це те, що відкриває його професійні функції, але це також означає додатковий крок встановлення та компонент, який знаходиться глибше в системі.</p>

<h2>Що робить SoundSource, чого не робить SoundDial</h2>
<p>SoundSource заробляє свою ціну для певного типу користувачів. Якщо щось із цього описує вас, це варте додаткових грошей:</p>
<ul>
<li><strong>Еквалайзер для кожної програми.</strong> Вам потрібен 10-смуговий еквалайзер, скажімо, на Spotify, залишаючи Zoom рівним. SoundDial створює гучність, а не еквалайзер.</li>
<li><strong>Розширена вихідна маршрутизація.</strong> Надсилання однієї програми на динаміки, а іншої – на навушники чи певний інтерфейс із точним керуванням.</li>
<li><strong>Аудіоефекти та плагіни.</strong> SoundSource може розміщувати ефекти на основі окремого додатка — справді профі.</li>
</ul>
<p>Rogue Amoeba має довгий, надійний послужний список. SoundSource — серйозний інструмент, і його ціна така ж. Якщо ви аудіо-професіонал або активний користувач кількох виходів, це правильний вибір.</p>

<h2>Що SoundDial робить краще для щоденного використання</h2>
<p>Більшість людей, які шукають "мікшер гучності Mac", не потребують еквалайзера. Їм потрібна одна програма тихіше, ніж інша, і вони не хочуть боротися з інсталятором, щоб її отримати. SoundDial це чітко висвітлює та додає пару речей, які варто згадати:</p>
<ul>
<li><strong>Прискорення для кожної програми.</strong> Деякі програми та відео просто надто тихі навіть на 100%. SoundDial може підняти одну програму вище звичайної межі, щоб нарешті було чутно тиху зустріч або подкаст.</li>
<li><strong>Об'ємні профілі.</strong> Збережіть повне налаштування — низька музика, вимкнено звук у браузері, гучний виклик програми — і миттєво викличте це. Чудово підходить для перемикання між режимами «фокус», «зустріч» і «ігри», не перетягуючи п’ять повзунків.</li>
<li><strong>Автоматичне пригнічення.</strong> Автоматично вимикайте фоновий звук (наприклад, музику), коли запускається інше джерело, щоб сповіщення, дзвінки чи відео не закривалися.</li>
<li><strong>Швидке перемикання виходу.</strong> Перемикайтеся між колонками, навушниками та іншими пристроями з панелі меню.</li>
</ul>
<p>Усе це запускається зі спадного меню на панелі меню, тож решту часу це можна зробити за один клік.</p>

<h2>Безкоштовні альтернативи, коротко</h2>
<p>Ви побачите кілька безкоштовних варіантів, згаданих у тих самих пошукових запитах. Про них варто знати:</p>
<ul>
<li><strong>Background Music</strong> — безкоштовний і з відкритим вихідним кодом, надає базовий обсяг для кожної програми. Але він може зламатися на нових версіях macOS, і він не має підсилення, профілів або автоматичного притуплення.</li>
<li><strong>FineTune</strong> — безкоштовна програма для гучності панелі меню з відкритим кодом. Простий, але обмежений за обсягом.</li>
<li><strong>eqMac</strong> — безкоштовний еквалайзер і підсилювач системи, скоріше загальносистемний інструмент еквалайзера, ніж справжній мікшер для кожної програми.</li>
</ul>
<p>Безкоштовно – це чудово, якщо воно вам підходить. Компроміс полягає в сумісності та підтримці: аудіоінструменти з відкритим вихідним кодом можуть відставати від оновлень macOS, а таких функцій, як профілі та притуплення, взагалі немає. Якщо ваші налаштування важливі для вашого робочого дня, одноразова оплата за те, що перевірено та підтримується, зазвичай є більш спокійним шляхом.</p>

<h2>Який з них купити?</h2>
<p>Дайте відповідь на одне запитання: чи потрібен еквалайзер для кожної програми чи розширена маршрутизація виходу?</p>
<ul>
<li><strong>так</strong> — купити SoundSource. Він створений для цього, і ~39 доларів США є справедливими для професійного інструменту з механізмом рівня драйверів.</li>
<li><strong>Ні, я просто хочу об’єм для кожного додатка, прискорення та чисте встановлення</strong> — купити SoundDial. Ви отримуєте мікшування, яке справді має значення щодня, а також профілі та автоматичне приглушення за 14,99 євро та жодного клопоту водія.</li>
</ul>
<p>Для переважної більшості користувачів Mac це друге відро є чесною відповіддю. Ви платите за контроль гучності, а не за студію.</p>

<p><strong>Готові виправити гучність Mac простим способом?</strong> отримати <a href="https://apps.apple.com/app/id6772792641">SoundDial на Mac App Store</a> — €14,99 одноразово, без драйверів, без DMG. Обсяг для кожної програми, посилення, профілі та автоматичне притуплення в один клік.</p>`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "Дешевша альтернатива SoundSource для обсягу кожного додатка на Mac",
    description: "Хочете об’єм на додаток у стилі SoundSource без ціни в 39 доларів? SoundDial — це Mac App Store мікшер на панелі меню вартістю 14,99 євро з посиленням, профілями та автоматичним приглушенням.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо ви хочете контролювати гучність у стилі SoundSource для кожного додатка на своєму Mac, але 39 доларів вам здаються крутими, найшвидше надійне рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Це одноразовий мікшер панелі меню вартістю 14,99 євро від Mac App Store, який надає кожній програмі власний повзунок гучності, вимкнення звуку та посилення — плюс профілі та автоматичне приглушення — без завантаження чи встановлення аудіодрайвера.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — дешевша альтернатива SoundSource для обсягу кожного додатка на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому люди шукають альтернативу SoundSource</h2>
<p>SoundSource від Rogue Amoeba — чудове програмне забезпечення. Він справді професійний: еквалайзери для кожної програми, аудіоефекти та маршрутизація вихідного сигналу, що дозволяє надсилати одну програму на навушники, а іншу — на динаміки. Але ця сила має дві точки тертя. По-перше, ціна — близько 39 доларів. По-друге, він встановлює системний драйвер захоплення звуку за межами App Store, до якого деякі люди ставляться обережно на робочій машині або просто не хочуть керувати оновленнями macOS.</p>
<p>Для більшості людей справжня потреба набагато простіша: зменшити Spotify, не торкаючись виклику Zoom, вимкнути шумну програму вкладки браузера або збільшити тихий відеоплеєр на 100%. Якщо це ви, ви платите професійні гроші за функції, які ніколи не відкриєте.</p>

<h2>Що робить SoundDial і скільки це коштує</h2>
<p>SoundDial зосереджується на обсязі кожного додатка й виконує це чітко. Відкрийте рядок меню, і ви отримаєте живий список усього, що видає звук, кожен із власним контролем:</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — один слайдер на програму, настроюється в режимі реального часу.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — миттєво вимкнути одну програму, не призупиняючи нічого іншого.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — підштовхувати тихі додатки вище звичайного максимуму, коли відео або дзвінок надто тихий.</li>
<li><strong>Об'ємні профілі</strong> — зберегти мікс (наприклад, «Фокус», «Ігри», «Зустріч») і перемикатися в один клік.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично занурює інші додатки, коли починає грати щось важливіше.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між колонками, навушниками та іншими пристроями з одного меню.</li>
</ul>
<p>Ціна така <strong>14,99 євро, сплачено один раз</strong> — без передплати. Це приблизно третина вартості SoundSource, для тих функцій гучності, до яких насправді прагнуть більшість користувачів.</p>

<h2>Різниця App Store</h2>
<p>Оскільки SoundDial доставляється через <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, його переглянуто Apple і в пісочниці. Немає DMG для перетягування, немає розширення ядра чи драйвера запису аудіо, який потрібно затверджувати, і немає окремого оновлення. Ви встановлюєте його, як і будь-який інший додаток App Store, і він працює. Коли macOS оновлюється, вам не залишається сумніватися, чи все ще працює низькорівневий аудіокомпонент.</p>
<blockquote>macOS досі не має вбудованого мікшера гучності для кожної програми. Windows має такий протягом багатьох років, але на Mac гучність системи є все або нічого — саме цю прогалину заповнюють ці інструменти.</blockquote>

<h2>Як це порівнюється з безкоштовними варіантами</h2>
<p>SoundSource — не єдина альтернатива. Є безкоштовні інструменти, і чесність щодо них має значення:</p>
<ul>
<li><strong>Background Music</strong> це безкоштовна програма з відкритим кодом для кожного додатка. Він працює для багатьох людей, але він може зламатися в новіших випусках macOS, оновлення нерегулярні, і він не має посилення, профілів і автоматичного приглушення.</li>
<li><strong>FineTune</strong> це безкоштовна програма для гучності панелі меню з відкритим вихідним кодом — легка та зручна, але знову ж таки не має функцій профілю та прихильності.</li>
<li><strong>eqMac</strong> це безкоштовний еквалайзер і підсилювач системи. Це більше інструмент еквалайзера/підсилення, ніж справжній мікшер для кожної програми, і він не зосереджений на повзунках окремих програм.</li>
</ul>
<p>Безкоштовність – законний вибір. Компроміс полягає в надійності та функціях: аудіоінструменти з відкритим вихідним кодом залежать від волонтерського обслуговування та можуть відставати від змін macOS, і жоден із безкоштовних профілів комплекту опцій плюс автоматичне приглушення, як це робить SoundDial. Якщо ваше налаштування просте і ви не проти випадкових поломок, безкоштовного додатка може бути достатньо. Якщо вам потрібен щось, що обслуговується, працює в ізольованому програмному середовищі та просто працює, ціна в 14,99 євро — це саме те.</p>

<h2>Керівництво по швидкому прийняттю рішення</h2>
<ul>
<li><strong>Вам потрібен еквалайзер для кожної програми, звукові ефекти та маршрутизація однієї програми на інший вихідний пристрій</strong> → SoundSource вартий своєї ціни. Ніщо тут повністю не замінить це.</li>
<li><strong>Вам, головним чином, потрібна гучність для кожної програми, вимкнення звуку, посилення, профілі та зниження — без драйверів</strong> → SoundDial за 14,99 євро є найкращим варіантом.</li>
<li><strong>Ви хочете безкоштовно та не заперечуєте ризик обслуговування</strong> → спочатку спробуйте Background Music, FineTune або eqMac.</li>
</ul>

<h2>Налаштування</h2>
<p>Початок роботи займає близько хвилини:</p>
<ul>
<li>Встановіть SoundDial із Mac App Store — без зовнішнього завантаження.</li>
<li>Надайте дозвіл на звук, який macOS запитує під час першого запуску.</li>
<li>Відтворіть звук у кількох програмах і відкрийте значок панелі меню; ви побачите кожен із власним повзунком.</li>
<li>Перетягніть, щоб встановити рівні, торкніться, щоб вимкнути звук, або перевищіть 100%, щоб посилити.</li>
<li>Збережіть налаштування як профіль і ввімкніть автоматичне приглушення, якщо хочете, щоб інші додатки замовкали під час дзвінків або медіа.</li>
</ul>
<p>Ось і весь робочий процес — жодних конфігураційних файлів, жодного перезапуску, жодного системного розширення.</p>

<h2>Підсумок</h2>
<p>SoundSource є потужнішим інструментом, але більшість людей, які шукають його, просто хочуть працювати з обсягом для кожної програми. SoundDial забезпечує це приблизно за третину ціни, безпечно доставляється через App Store, а також додає профілі та автоматичне притуплення — без жодного встановлення драйвера.</p>

<p>Готові окремо контролювати гучність кожної програми? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за €14,99 одноразово.</p>`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Альтернатива для Mac: підтримуваний мікшер гучності для кожної програми",
    description: "Спробували безкоштовну програму панелі меню FineTune і хочете щось підтримувати та безпечно для App Store? Ось найкраща альтернатива FineTune для обсягу кожного додатка на Mac.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо вам сподобався FineTune, але ви хочете щось підтримувати та встановлювати з надійного джерела, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це найшвидше надійне рішення. Це панель меню Mac App Store для кожної програми з мікшером гучності з незалежною гучністю, вимкненням звуку для кожної програми, збільшенням гучності, збереженими профілями та автоматичним приглушенням. Переглянуто Apple і встановлено в ізольованому програмному середовищі, він коштує 14,99 євро без встановлення драйверів.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune, альтернатива Mac: підтримуваний мікшер гучності для кожної програми" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Навіщо взагалі шукати альтернативу FineTune?</h2>

<p>FineTune — гарна ідея: безкоштовна програма з панеллю меню з відкритим кодом, яка дає вам можливість контролювати гучність для кожної програми на macOS, яку Apple досі відмовляється вбудовувати (у Windows роками був мікшер для кожної програми). Для багатьох людей це виконує основну роботу. Але є реальні причини, чому користувачі шукають щось інше.</p>

<ul>
<li><strong>Технічне обслуговування невизначене.</strong> Хобі-проекти з відкритим кодом живуть і вмирають у вільний час одного супроводжуючого. Коли macOS надсилає велике оновлення, програми, пов’язані з аудіосистемою, часто виходять з ладу першими, і вам залишається чекати виправлення від волонтерів, яке може ніколи не з’явитися.</li>
<li><strong>Особливість стелі.</strong> FineTune охоплює обсяги для кожної програми та мало що інше. Якщо ви хочете посилити вище 100%, збережені профілі або автоматичне пригнічення, вам доведеться використовувати інші інструменти.</li>
<li><strong>Довіра та оновлення.</strong> Встановлення необробленої збірки за межами App Store означає відсутність автоматичного перегляду, відсутність гарантій ізольованого програмного середовища та оновлення вручну, які ви повинні стежити самостійно.</li>
</ul>

<p>Усе це не робить FineTune поганим. Це просто означає, що якщо ви щодня покладаєтеся на аудіо для кожної програми, ви, ймовірно, хочете щось із моделлю підтримки.</p>

<h2>Що SoundDial робить інакше</h2>

<p>SoundDial починає з тієї самої основної ідеї, мікшер панелі меню з повзунком для кожної запущеної програми, а потім йде далі з функціями, які дійсно потрібні досвідченим користувачам.</p>

<ul>
<li><strong>Незалежний обсяг на додаток.</strong> Вимкніть Spotify, увімкніть дзвінок на повній гучності, повністю вимкніть шумну програму вкладки веб-переглядача – усе це з одного меню.</li>
<li><strong>Збільшення обсягу для кожної програми.</strong> Підніміть тиху програму вище звичайної межі, коли подкаст або відео було освоєно занадто низько. FineTune цього не робить.</li>
<li><strong>Об'ємні профілі.</strong> Зберігайте мікс, «фокус», «ігри», «зустрічі» та змінюйте всі налаштування одним клацанням миші замість того, щоб штовхати п’ять повзунків.</li>
<li><strong>Автоматичне пригнічення.</strong> Автоматично зменшуйте фоновий звук, коли починає відтворюватися щось більш важливе, щоб музика припинялася під час вхідного дзвінка.</li>
<li><strong>Швидке перемикання виходу.</strong> Перемикайтеся між динаміками, навушниками та іншими виходами, не занурюючись у налаштування системи.</li>
</ul>

<p>Тому що <a href="https://apps.apple.com/app/id6772792641">SoundDial поставляється через Mac App Store</a>, його переглянуто Apple і встановлюється в ізольованому програмному середовищі, встановлюється чисто та оновлюється за допомогою того самого механізму, що й будь-яка інша програма App Store. Немає DMG для перетягування, немає аудіодрайвера чи системного розширення, а також немає підказки системи безпеки, яка б запитувала вас дозволити компонент на рівні ядра.</p>

<h2>SoundDial проти FineTune та інші безкоштовні інструменти</h2>

<p>FineTune — не єдиний безкоштовний варіант, і він допомагає чесно побачити весь ландшафт.</p>

<ul>
<li><strong>FineTune</strong> — Безкоштовний обсяг панелі меню з відкритим кодом для кожної програми. Простий і легкий, але без посилення, без профілів, без прихильності, а обслуговування залежить від спільноти.</li>
<li><strong>Background Music</strong> — Безкоштовний і відкритий код, маршрутизує та налаштовує аудіо для кожної програми. Справді корисний, але він може зламатися на новіших версіях macOS і не має підсилення, профілів і пригнічення.</li>
<li><strong>eqMac</strong> — Безкоштовний еквалайзер і підсилювач системи. Чудово, якщо вам головним чином потрібен еквалайзер, але це не мікшер для окремої програми.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — Варіант професійного класу приблизно за 39 доларів США з еквалайзером для кожного додатка та маршрутизацією вихідного сигналу. Чудово, але його потрібно завантажити та драйвер захоплення аудіо, і він коштує вдвічі дорожче.</li>
<li><strong>SoundDial</strong> — €14,99 одноразово, App Store-безпечно, без драйверів. Додає посилення, профілі та автоматичне приглушення на додаток до основ гучності для кожної програми.</li>
</ul>

<p>Чесне резюме: якщо вам потрібна найдешевша річ і потрібен лише базовий обсяг для кожної програми, безкоштовні інструменти можуть працювати. Якщо вам потрібен еквалайзер і маршрутизація для кожного додатка, і ви не проти заплатити та встановити драйвер, SoundSource — це важка вага. SoundDial знаходиться в найкращому місці, він потужніший, ніж безкоштовні програми, значно дешевший, ніж SoundSource, і безпечніший у встановленні, ніж будь-який з них, тому що Apple перевіряє та використовує його в пісочниці.</p>

<h2>Перехід від FineTune</h2>

<p>Перемикання займає пару хвилин, і ритуалу очищення немає.</p>

<ul>
<li>Встановіть SoundDial з Mac App Store. Ні інсталятора, ні схвалення драйвера, ні перезапуску.</li>
<li>Натисніть піктограму SoundDial на панелі меню, щоб побачити повзунок для кожної запущеної програми.</li>
<li>Встановіть свій щоденний мікс, а потім збережіть його як профіль, щоб миттєво викликати його.</li>
<li>За бажанням увімкніть автоматичне приглушення, щоб фоновий звук відключався для дзвінків і сповіщень.</li>
<li>Коли ви щасливі, вийдіть з FineTune. Оскільки жодна програма не встановлює системні драйвери, немає нічого, що потрібно видалити.</li>
</ul>

<p>Ви зберігаєте те, що вам подобалося в FineTune, чистий мікшер панелі меню, якого Apple ніколи не давала вам, і ви отримуєте посилення, профілі, прихильність і довгострокову підтримку, яку надає програма App Store.</p>

<h2>Підсумок</h2>

<p>FineTune підтверджує концепцію: обсяг для кожної програми належить до панелі меню. SoundDial – це те, як виглядає ця концепція з реальною моделлю підтримки, додатковими функціями та безпекою App Store за разові 14,99 євро замість ставки на утримання волонтерів.</p>

<p>Готові до мікшера для кожної програми, який постійно підтримується? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і контролюйте гучність кожної програми за лічені секунди.</p>`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Альтернатива для реального обсягу кожного додатка на Mac",
    description: "Сподобалося посилення eqMac, але потрібна належна гучність для кожної програми, вимкнення звуку та профілі? SoundDial — це найшвидше виправлення Mac App Store — 14,99 євро, ізольоване програмне середовище, без драйверів.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо ви використовували eqMac для його еквалайзера та підсилювача гучності, але справді хочете окрему гучність для кожної програми — плюс вимкнення звуку, посилення та збережені профілі — найшвидше надійне рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. Це мікшер панелі меню Mac App Store: встановлюйте рівень для кожної програми, посилюйте тихі та миттєво перемикайте профілі. 14,99 євро одноразово, ізольоване програмне середовище, без встановлення драйверів.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — альтернатива eqMac для реального обсягу кожного додатка на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac проти того, що вам насправді потрібно</h2>

<p>eqMac — надійний безкоштовний інструмент, а його загальносистемний еквалайзер і підсилювач гучності справді корисні. Але eqMac побудований на одному головному еквалайзері та одному головному виході. Він не дає вам справжнього мікшера гучності для кожного додатка — те, що Windows має протягом багатьох років, а macOS досі не постачається оригінально.</p>

<p>Отже, якщо ваша справжня проблема полягає в тому, що «Spotify надто гучний, коли я розмовляю» або «одна гра продуває мої вуха, але все інше добре», eqMac не підходить для цієї роботи. Ви закінчуєте їздити на одному головному повзунку або возитися з внутрішнім обсягом кожної програми. Це прогалина, яку заповнює SoundDial.</p>

<h2>Що робить SoundDial, чого не робить eqMac</h2>

<ul>
<li><strong>Незалежний обсяг на додаток</strong> — Музика на 40%, браузер на 100%, відеодзвінок на 70%, все відразу, все запам'ятовується.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — миттєво вимкніть звук однієї шумної програми, не торкаючись нічого іншого.</li>
<li><strong>Прискорення для кожної програми</strong> — просунути тиху програму за звичайну межу, як це робить бустер eqMac, але націлений на одну програму, а не на всю систему.</li>
<li><strong>Об'ємні профілі</strong> — зберігайте такі налаштування, як «Фокус», «Ігри» або «Зустріч» і перемикайте весь мікс одним клацанням миші.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично вимикає фоновий звук, коли починається щось більш важливе, щоб ви не намагалися вибрати повзунок під час розмови.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між динаміками, навушниками та іншими виходами з панелі меню.</li>
</ul>

<p>Перекриття з eqMac в основному є стимулом. Усе інше — мікшер, відключення звуку, профілі, пірнання — це територія, на яку eqMac ніколи не розроблявся.</p>

<h2>Ви все ще хочете EQ?</h2>

<p>Будьте чесними щодо того, яку проблему ви вирішуєте. Якщо вам справді потрібен частотний еквалайзер — урізання низьких частот, приборкання різких високих частот, формування тону всієї вашої системи — тоді eqMac все ще знайде своє місце, і це безкоштовно. SoundDial — це мікшер гучності, а не еквалайзер.</p>

<p>Але більшість людей тягнуться до підсилювача eqMac не тому, що вони хочуть формувати частоти, вони хочуть, щоб одна програма стала голоснішою або мікс збалансований. Якщо це ви, то чистішою відповіддю буде спеціальний міксер. Ви навіть можете запустити обидва: зберегти eqMac для загальносистемної кривої еквалайзера та використовувати SoundDial для рівнів окремої програми. Вони не сваряться за ту саму роботу.</p>

<h2>Як це порівнюється з іншими аудіоінструментами Mac</h2>

<p>Оскільки ви вже шукаєте інструменти, ось чесний пейзаж:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — опція професійного класу приблизно за 39 доларів США, з еквалайзером для кожної програми та повною маршрутизацією вихідного сигналу. Потужний, але потребує прямого завантаження та встановлення драйвера захоплення звуку. Надлишок і дорожче, якщо все, що вам потрібно, це обсяг на додаток із профілями.</li>
<li><strong>Background Music</strong> — безкоштовний і з відкритим вихідним кодом, але він може зламатися на нових версіях macOS і не має посилення, профілів і автоматичного притуплення. Чудово, коли це працює, і розчаровує, коли ні.</li>
<li><strong>FineTune</strong> — безкоштовний додаток із панеллю меню з відкритим кодом. Варто подивитись, якщо 0 доларів США є жорсткою вимогою, хоча це легше за функціями та досконалістю.</li>
<li><strong>eqMac</strong> — безкоштовний еквалайзер плюс підсилювач, але без справжнього мікшера для кожної програми, як зазначено вище.</li>
</ul>

<p>SoundDial найкраще: цілеспрямованіший і дешевший, ніж SoundSource, потужніший і надійніший, ніж безкоштовні варіанти, і він виконує завдання для кожного додатка, яких не виконує eqMac.</p>

<h2>Чому Mac App Store тут має значення</h2>

<p>Декілька з цих інструментів вимагають прямого завантаження та драйвера на рівні ядра чи запису звуку. Вони працюють, але це те, що може зачепити оновлення macOS або спіткнутися з заблокованим робочим Mac.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> натомість поставляється через Mac App Store. Це означає, що його перевірено Apple і встановлено в ізольованому програмному середовищі, він встановлюється чисто без DMG для перетягування, і немає аудіодрайверів або системних розширень, які потрібно затверджувати. Оновлення надходять через App Store, як і будь-який інший додаток, і видалення є звичайним видаленням. Для утиліти панелі меню, яка торкається вашого аудіо, цей шлях із меншим тертям і меншим ризиком багато вартий.</p>

<h2>Швидке налаштування</h2>

<ul>
<li>Встановіть SoundDial із Mac App Store — без перезапуску та підказки драйвера.</li>
<li>Відкрийте значок панелі меню; кожна програма, яка зараз створює звук, відображається власним повзунком.</li>
<li>Встановіть рівні, вимкніть те, що вам не потрібно, і підсилюйте все, що занадто тихо.</li>
<li>Збережіть домовленість як профіль, а потім створіть більше для ігор, дзвінків або зосередженості.</li>
<li>Увімкніть автоматичне приглушення, щоб фоновий звук автоматично відходив убік.</li>
</ul>

<p>Ось і вся петля. Через пару хвилин ви отримуєте лише натякнуте прискорювач eqMac для кожного додатка.</p>

<p><strong>Готові до реального обсягу кожного додатка на вашому Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> — 14,99 євро одноразово, ізольоване програмне середовище, без драйверів, і він робить саме те, що має мікшер панелі меню.</p>`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "Найдешевший хороший мікшер гучності для Mac у 2026 році",
    description: "Шукаєте найдешевший хороший мікшер гучності для кожної програми для Mac у 2026 році? Порівняйте SoundDial, SoundSource, Background Music, FineTune і eqMac за ціною, безпекою та функціями.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Найкращий мікшер гучності для кожної програми для Mac у 2026 році <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, додаток із панеллю меню на Mac App Store за одноразову вартість 14,99 євро. Він надає кожній програмі власний повзунок гучності, а також вимкнення звуку, посилення, профілі та автоматичне приглушення — без драйверів, без підписки та без ризикованих завантажень. Це найдешевший платний варіант, який насправді працює надійно.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — найдешевший хороший мікшер гучності для Mac у 2026 році" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому «найдешевший» потребує визначення</h2>
<p>Існують безкоштовні інструменти для обсягу для Mac, тож якщо єдиною метою є нульові витрати, у вас є варіанти. Але безкоштовність зазвичай коштує десь в іншому місці: крихкість нових версій macOS, відсутність функцій, як-от підсилення чи профілі, або процес встановлення, який включає драйвер захоплення звуку, якому варто довіряти. «Найдешевший товар» означає найнижчу ціну, за яку ви отримаєте стабільний, повнофункціональний міксер, яким ви продовжите користуватися. Це лінза, яку ми тут використаємо.</p>

<h2>По-перше, те, чого не робить macOS</h2>
<p>Windows багато років має мікшер гучності для кожної програми — клацніть правою кнопкою миші піктограму динаміка та налаштуйте кожну програму окремо. macOS все ще не має вбудованого еквівалента. Ви отримуєте один основний гучність і будь-який внутрішній слайдер, який програма постачає (Музика, деякі браузери). Немає загальносистемного способу зробити Slack тихішим, ніж Spotify, або підвищити тихий відеодзвінок понад усе. Кожен наведений нижче варіант існує, щоб заповнити цю прогалину.</p>

<h2>Претенденти, оцінені чесно</h2>

<h2>SoundDial — €14,99, одноразово</h2>
<p>SoundDial живе у панелі меню та надає кожній запущеній програмі незалежний повзунок гучності. Окрім основ, він додає функції, до яких люди насправді прагнуть:</p>
<ul>
<li><strong>Прискорення для кожної програми</strong> — підніміть занадто тиху програму вище 100% замість того, щоб напружуватися, щоб її почути.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї програми, не торкаючись решти.</li>
<li><strong>Об'ємні профілі</strong> — збережіть мікс «робочий дзвінок» або «вечір кіно» та миттєво викликайте його.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично вимикає фоновий звук, коли грає щось важливіше.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між колонками, навушниками та іншими пристроями з одного меню.</li>
</ul>
<p>Оскільки він знаходиться на Mac App Store, він ізольований, перевірений Apple і встановлюється чітко — без DMG, без розширення ядра, без аудіодрайвера для затвердження. Ви платите <a href="https://apps.apple.com/app/id6772792641">14,99 євро одноразово</a> і володіти ним. Для більшості людей це приємне місце: достатньо дешево, щоб бути легким, так, достатньо повно, щоб ви не переросли його.</p>

<h2>SoundSource — ~$39, професійний варіант</h2>
<p>SoundSource від Rogue Amoeba є золотим стандартом для досвідчених користувачів. Він виконує гучність і вимикає звук для кожної програми, як SoundDial, але йде далі з еквалайзерами для кожної програми та повною маршрутизацією вихідного сигналу (надсилає одну програму на навушники, іншу на динаміки). Це справді чудово — але це приблизно 39 доларів, і він встановлюється за межами App Store разом із компонентом аудіозапису, на який вам потрібно надати дозвіл. Якщо вам потрібен еквалайзер для кожної програми або складна маршрутизація, це варте грошей. Якщо вам просто потрібен чистий, дешевий міксер, ви платите за можливості, до яких можете ніколи не доторкнутися.</p>

<h2>Background Music — безкоштовний, з відкритим кодом</h2>
<p>Background Music — добре відома безкоштовна програма з відкритим кодом, яка пропонує гучність для кожної програми та автоматичну паузу. Заковика: він глибоко підключається до Core Audio через віртуальний драйвер, і він має довгу історію поломок у нових версіях macOS, іноді потребуючи ручних виправлень або перевстановлення після оновлень. У ньому також відсутні посилення, збережені профілі та автоматичне притуплення. Чудово підходить для майстрів, які не проти обслуговування; розчарування, якщо ви просто хочете, щоб це працювало.</p>

<h2>FineTune — безкоштовно, панель меню</h2>
<p>FineTune — це безкоштовна програма для гучності в панелі меню з відкритим кодом. Він легкий і приємний, і його може бути достатньо для простого налаштування окремої програми. Але будучи невеликим безкоштовним проектом, він не відповідає глибині функцій — немає профілів, немає автоматичного притуплення та обмежено обробку посилення/виведення. Нульова вартість, менше гарантій на довговічність і підтримку.</p>

<h2>eqMac — безкоштовно, еквалайзер + бустер</h2>
<p>eqMac — безкоштовний загальносистемний еквалайзер із підсилювачем гучності. Це більше стосується формування тону та гучності для всього Mac, ніж змішування окремих програм, тому це інший інструмент для іншої роботи. Якщо вам потрібен контроль окремої програми, eqMac насправді не є відповіддю, хоча це чудовий безкоштовний еквалайзер.</p>

<h2>Ціна проти вартості: чесна таблиця</h2>
<ul>
<li><strong>Справді безкоштовно, але з компромісами:</strong> Background Music (тендітний, на основі драйвера), FineTune (тонкі функції), eqMac (еквалайзер, а не мікшер).</li>
<li><strong>Найдешевший повний платний додаток:</strong> SoundDial за 14,99 євро — наддув, профілі, пригнічування, безпека App Store.</li>
<li><strong>Premium/pro:</strong> SoundSource за ~$39 — еквалайзер і маршрутизація, встановлення не з App Store.</li>
</ul>
<p>Іншими словами: SoundDial коштує приблизно третину SoundSource, але охоплює функції, які насправді потрібні 90% людей. І на відміну від безкоштовних варіантів, він не вийде з ладу після оновлення macOS, оскільки він не покладається на крихкий аудіодрайвер системного рівня.</p>

<h2>Який обрати?</h2>
<p>Якщо ви професіонал, якому потрібен еквалайзер для кожної програми та маршрутизація програм на різні виходи, придбайте SoundSource — він заслужить свою ціну. Якщо ви любите відкритий вихідний код і не проти випадкових поломок, спробуйте Background Music або FineTune безкоштовно. Але якщо вам потрібен найдешевший варіант, який просто працює — незалежний рівень гучності, підсилення, вимкнення звуку, профілі, які можна зберегти, і автоматичне приглушення, безпечно встановлене з App Store — SoundDial стане безсумнівним переможцем у 2026 році.</p>

<blockquote>Найкращий мікшер — це не той, який має найбільшу кількість функцій або найнижчу ціну — це той, який ви налаштували один раз і про нього забули. За 14,99 євро SoundDial робить це легким дзвінком.</blockquote>

<p>Готові надати кожному додатку власний обсяг? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за одноразові 14,99 євро — без підписки, без драйверів, без ризику.</p>`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows Volume Mixer для Mac: отримайте контроль гучності для кожної програми",
    description: "Не вистачає мікшера гучності Windows на Mac? macOS не має вбудованого регулятора гучності для кожної програми. Ось найшвидший спосіб отримати його: SoundDial, мікшер на панелі меню за 14,99 євро.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованого мікшера гучності, як Windows, тому ви не можете встановити гучність окремої програми в системних налаштуваннях. Найшвидше та надійне рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, програма з панеллю меню за 14,99 євро від Mac App Store. Він надає кожній програмі власний повзунок гучності, вимкнення звуку та посилення — без драйверів, без DMG, без ризикованих установок.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows Мікшер гучності для Mac: отримайте контроль гучності для кожної програми" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому Windows Volume Mixer не має еквівалента Mac</h2>

<p>Якщо ви перейшли з Windows, одна з перших речей, яку ви пропустите, це мікшер гучності: клацніть правою кнопкою миші піктограму динаміка, і кожна запущена програма отримає власний повзунок. Зменшіть Chrome, увімкніть Discord, вимкніть Spotify — усе в одному місці.</p>

<p>macOS просто не доставляє це. Регулятор гучності Apple — це єдиний повзунок для всієї системи. Будь-який рівень, який ви встановите, стосується всього й одразу. У налаштуваннях системи немає жодних опцій для окремої програми, немає команди Terminal, немає перемикача доступності. Це справжній розрив, і так було роками.</p>

<p>Причина криється в архітектурі: програми направляють аудіо через Core Audio на ваш вихідний пристрій, а ОС не надає користувацький мікшер для окремих потоків. Щоб відтворити досвід Windows, вам знадобиться програма стороннього розробника, яка знаходиться в цьому аудіошляху та надає вам елементи керування, пропущені Apple.</p>

<h2>Найближчий збіг: SoundDial</h2>

<p>SoundDial — це мікшер гучності на панелі меню для кожної програми, створений спеціально для цього. Клацніть його піктограму, і ви отримаєте чистий список усього, що відтворює аудіо, кожен із власним повзунком. Це найпростіший «Змішувач гучності Windows для Mac», який ви можете встановити, і він робить кілька речей, яких мікшер Windows ніколи не міг:</p>

<ul>
<li><strong>Незалежний обсяг на додаток</strong> — основна особливість. Встановіть Chrome на 40%, Zoom на 100%, музику на 20%.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї програми, не торкаючись решти.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — натисніть тихий додаток <em>вище</em> 100%, коли власний звук занадто низький.</li>
<li><strong>Об'ємні профілі</strong> — збережіть мікс (наприклад, «робочий дзвінок» або «гра») і миттєво викликайте його замість повторного перетягування повзунків.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично знижувати фоновий звук, коли починається щось важливіше, наприклад дзвінок.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між колонками, навушниками та іншими пристроями з одного меню.</li>
</ul>

<p>Тому що це на <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, його переглянуто Apple і в пісочниці. Він встановлюється одним клацанням миші — не потрібно перетягувати DMG, не потрібно затверджувати аудіодрайвер чи системне розширення, а також запити безпеки. Ціна 14,99 євро одноразово (без підписки) — це найпростіший спосіб закрити розрив.</p>

<h2>Як налаштувати гучність для кожної програми на Mac</h2>

<ol>
<li>Встановіть SoundDial з Mac App Store.</li>
<li>Надайте одноразовий дозвіл на звук, який він запитує під час першого запуску.</li>
<li>Натисніть піктограму SoundDial на панелі меню.</li>
<li>Перетягніть повзунок поруч із будь-якою програмою, щоб установити її гучність, або натисніть «Вимкнути/збільшити звук».</li>
<li>За бажанням збережіть поточну суміш як профіль, щоб потім відновити її.</li>
</ol>

<p>Ось і весь робочий процес. Він поводиться як мікшер Windows, який ви вже знаєте, просто з панелі меню замість клацання правою кнопкою миші на панелі завдань.</p>

<h2>Порівняння SoundDial з іншими варіантами</h2>

<p>SoundDial — не єдиний інструмент у цьому просторі, тому ось чесний погляд на альтернативи.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — близько 39 доларів, і справді професійний: еквалайзер для кожної програми, маршрутизація вихідного сигналу для кожної програми, ефекти. Але для цього потрібне пряме завантаження та драйвер захоплення аудіо, і це надмірно (і дорожче), якщо вам просто потрібен обсяг для кожної програми. Виберіть його, якщо вам потрібні еквалайзер і маршрутизація; виберіть SoundDial, якщо вам потрібен мікшер без складності чи драйвера.</li>
<li><strong>Background Music</strong> — безкоштовно та з відкритим кодом, що чудово. Заковика: він може зламатися на новіших версіях macOS, і йому не вистачає посилення, збережених профілів і автоматичного приглушення. Добре, якщо вам зручно вирішувати проблеми з аудіодрайверами з відкритим кодом; менш ідеальний, якщо ви хочете щось, що просто працює.</li>
<li><strong>FineTune</strong> — безкоштовний додаток із панеллю меню з відкритим кодом. Легкий і вартий уваги, якщо бюджет є пріоритетом, але ви обмінюєте полірування, профілі та безпеку App Store безкоштовно.</li>
<li><strong>eqMac</strong> — безкоштовний еквалайзер і загальносистемний бустер. По-перше, це еквалайзер, а не мікшер для окремої програми, тому він вирішує іншу проблему.</li>
</ul>

<p>Компроміс простий. Безкоштовні інструменти не коштують нічого, але можуть бути крихкими або тонкими. SoundSource потужний, але дорогий і базується на драйвері. SoundDial найкраще: одноразова плата в розмірі 14,99 євро, безпека App Store і пісочниця, а також профілі + автоматичне притуплення, які пропускають безкоштовні опції.</p>

<blockquote>Якщо все, що вам потрібно, це Windows Volume Mixer — повзунки для кожного додатка, вимкнення звуку та підсилення, які безпечно встановлюються за лічені секунди — SoundDial є найбільш прямим відповідником.</blockquote>

<h2>Підсумок</h2>

<p>macOS не дасть вам мікшер гучності, і, ймовірно, ніколи не дасть. Але вам не потрібно жити з одним повзунком для всієї системи. Спеціальний мікшер панелі меню відновлює контроль за програмою, який ви мали на Windows, і додає посилення, профілі та автоматичне притуплення.</p>

<p>Готові простим способом отримувати обсяги для кожної програми? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за 14,99 євро — одноразово, ізольоване програмне середовище та встановлюється за лічені секунди.</p>`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Налаштуйте гучність програми, як це робить Windows — на своєму Mac",
    description: "Windows має мікшер гучності для кожної програми, а macOS — ні. Ось як налаштувати незалежну гучність для кожної програми на Mac — швидко, безпечно та без драйверів.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованого мікшера гучності для кожної програми, як у Windows, тому найшвидше надійне виправлення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, програма на панелі меню Mac App Store, яка надає кожній програмі власний повзунок гучності, вимкнення звуку для кожної програми та збільшення гучності. Він знаходиться в пісочниці, перевірений Apple, встановлюється без драйверів і коштує 14,99 євро.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — налаштуйте гучність програми, як це робить Windows — на вашому Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому Windows може це зробити, а macOS ні</h2>
<p>Якщо ви користувалися Windows, ви знаєте вправу: клацніть правою кнопкою миші піктограму динаміка, відкрийте мікшер гучності та перетягніть окремий повзунок для Chrome, Spotify, Discord та будь-чого іншого, що створює шум. Це просто і просто працює.</p>
<p>macOS ніколи не поставляв еквівалент. Елементи керування аудіосистемою Apple є глобальними — одна основна гучність для всієї системи. Ви можете вимкнути програму, вимкнувши звук джерела в цій програмі (якщо вона навіть має контроль), але немає єдиного місця, щоб сказати «залишати мою музику на 40%, а моя нарада — на 100%». Саме через цю прогалину існують сторонні міксери.</p>

<h2>Найшвидше рішення: мікшер панелі меню</h2>
<p>Найближчим до досвіду Windows є програма на панелі меню, яка містить список запущених аудіопрограм і містить повзунок для кожної з них. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> робить саме це. Клацніть його значок на панелі меню, і ви отримаєте:</p>
<ul>
<li><strong>Незалежний обсяг для кожного додатка</strong> — перетягніть Spotify вниз, не торкаючись свого виклику.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — миттєво вимкніть звук однієї шумної програми, решту залиште працювати.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — натисніть надто тиху програму <em>вище</em> 100%, коли його власний максимум все ще занадто м’який.</li>
<li><strong>Об'ємні профілі</strong> — збережіть мікс «Робота» або «Ігровий» і відкликайте його в один клік.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично знижувати фоновий звук, коли починається щось важливіше.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між динаміками, навушниками та іншими виходами з одного меню.</li>
</ul>
<p>Оскільки він знаходиться на Mac App Store, він перебуває в ізольованому програмному середовищі та перевірений Apple, він встановлюється чисто, і немає DMG для перетягування, немає розширення ядра та аудіодрайвера, який потрібно затверджувати в налаштуваннях системи. Ця остання частина важливіша, ніж здається — інструменти на основі драйверів зазвичай виходять з ладу після оновлення macOS.</p>

<h2>Як це налаштувати (близько двох хвилин)</h2>
<ul>
<li><strong>1.</strong> Встановіть SoundDial із Mac App Store і запустіть його.</li>
<li><strong>2.</strong> Надайте дозвіл на аудіо, який запитує macOS — це те, що дозволяє програмі бачити потоки для кожної програми.</li>
<li><strong>3.</strong> Натисніть піктограму SoundDial на панелі меню. Кожна програма, яка зараз відтворює аудіо, відображається власним повзунком.</li>
<li><strong>4.</strong> Перетягніть повзунок будь-якої програми, щоб установити її рівень, або натисніть «Без звуку». Підвищення понад 100%, коли програма надто тиха.</li>
<li><strong>5.</strong> (Необов’язково) Збережіть свій поточний мікс як профіль, щоб потім відновити його, і ввімкніть автоматичне приглушення, якщо хочете, щоб фоновий звук автоматично вимикався.</li>
</ul>
<p>Ось і весь робочий процес. Він поводиться як мікшер гучності Windows, який ви вже знаєте, за винятком труднощів налаштування.</p>

<h2>А як щодо безкоштовних і професійних альтернатив?</h2>
<p>Існують інші способи отримати обсяг для кожної програми на Mac. Їх варто знати, щоб ви могли чесно обирати.</p>
<blockquote>Безкоштовні інструменти обмінюють гроші на надійність і функції; професійні інструменти для торгівлі грошима та налаштування на глибину, яка вам може не знадобитися.</blockquote>
<p><strong>Background Music</strong> є безкоштовним із відкритим вихідним кодом і забезпечує обсяг для кожної програми. Заковика: він підключається глибоко до аудіосистеми та має історію поломок у нових версіях macOS, і йому не вистачає підсилення, профілів і автоматичного приглушення. Якщо це працює у ваших налаштуваннях, чудово, але це непросте оновлення.</p>
<p><strong>FineTune</strong> це безкоштовна програма з панеллю меню з відкритим кодом у тому ж дусі, що й SoundDial. Це чудова відправна точка, якщо бюджет є єдиною турботою, хоча це громадський проект без профілів і гіркого лаку.</p>
<p><strong>eqMac</strong> це безкоштовний загальносистемний еквалайзер і підсилювач. Він чудово підходить для формування загального звуку, але це не справжній мікшер для окремої програми — ви налаштовуєте весь вихід, а не окремі програми.</p>
<p><strong>SoundSource</strong> від Rogue Amoeba (близько 39 доларів США) — це варіант професійного рівня: еквалайзер для кожної програми, маршрутизація вихідного сигналу для кожної програми та серйозні функції аудіоінженера. Це чудово, але його потребує прямого завантаження та встановлення компонента захоплення аудіо, а коштує вдвічі більше, ніж SoundDial. Якщо вам потрібна маршрутизація та еквалайзер студійного рівня, це вибір. Якщо вам просто потрібен мікшер у стилі Windows, це надмірно.</p>

<h2>Який з них ви повинні отримати?</h2>
<p>Якщо ваша мета — «змусити мій Mac працювати як мікшер гучності Windows» без завантажень, драйверів або ризику, SoundDial — найчистіша відповідь. Ви отримуєте гучність для кожної програми, вимкнення звуку, підсилення, профілі та автоматичне приглушення, все це безпечно для App Store, за одноразову суму 14,99 євро — без підписки. Натомість виберіть SoundSource, лише якщо вам потрібен еквалайзер і маршрутизація вихідного сигналу для кожної програми, і спробуйте безкоштовні параметри, якщо вам зручно вирішувати їх проблеми в оновленнях macOS.</p>

<p><strong>Готові надати кожному додатку власний обсяг?</strong> <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і налаштуйте свій перший мікс приблизно за дві хвилини.</p>`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "Як зробити ваш Mac голоснішим для людей із вадами слуху",
    description: "Вам важко почути Mac навіть на максимальній гучності? Дізнайтеся, як підвищити й очистити аудіо для кожної програми для людей із вадами слуху, зокрема SoundDial і вбудовані підказки.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо ваш Mac недостатньо гучний навіть на максимальній гучності, найшвидшим надійним рішенням є <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер панелі меню Mac App Store, який дозволяє посилити будь-яку окрему програму на 100% і вимкнути звук для всіх інших. Це означає голоснішу та чіткішу мову від FaceTime, відео чи кінопрогравача без запуску всієї системи. Це 14,99 євро одноразово.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Як зробити ваш Mac голоснішим для людей із вадами слуху" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому збільшення повзунка гучності все одно недостатньо</h2>
<p>Для слухачів із вадами слуху повзунок гучності macOS має два неприємних обмеження. По-перше, він обмежує 100% того, що видає сама програма. Якщо подкаст, відео або дзвінок були записані тихо, «повна гучність» усе ще занадто тиха. По-друге, macOS не має вбудованого мікшера гучності для кожної програми. Windows має такий протягом багатьох років, але на Mac кожна програма має один головний рівень. Отже, коли ви вмикаєте все, щоб почути тихий голос, фонова музика та звуки сповіщень також стають неприємно гучними.</p>
<p>Що вам насправді потрібно, так це вміння робити <em>один</em> гучніше, ніж інші, висуньте його за межі звичайної стелі та урізайте конкуруючі звуки, щоб мова виділялася. Саме цю прогалину заповнюють ці інструменти.</p>

<h2>По-перше, скористайтеся безкоштовними налаштуваннями доступності macOS</h2>
<p>Перш ніж додавати будь-яку програму, варто налаштувати те, що вже пропонує macOS. Це сприяє чіткості, хоча і не додає сирої гучності:</p>
<ul>
<li><strong>Моно аудіо:</strong> Системні налаштування &rarr; Спеціальні можливості &rarr; Аудіо, увімкніть «Відтворювати стереоаудіо як моно». Якщо ваш слух сильніший на одне вухо, це надсилає повний сигнал на обидва, тому ви не втратите половину діалогу.</li>
<li><strong>Регулювання балансу:</strong> У системних налаштуваннях &rarr; Sound перетягніть баланс ліворуч/праворуч у бік свого сильнішого вуха.</li>
<li><strong>Зменшити фонові звуки:</strong> Тишіть музику та атмосферу в додатках, які це дозволяють, щоб голоси не перешкоджали звуковій доріжці.</li>
<li><strong>Приміщення для навушників:</strong> Якщо ви використовуєте AirPods або Beats, Системні параметри &rarr; Доступність &rarr; Аудіо &rarr; Навушники можуть підсилювати тихі звуки та налаштовуватися на мову.</li>
</ul>
<p>Вони справді корисні та нічого не коштують. Але жоден із них не створює жодного тихого додатка <em>голосніше 100%</em>, і це зазвичай справжня проблема.</p>

<h2>Як збільшити продуктивність однієї програми на 100% за допомогою SoundDial</h2>
<p>SoundDial живе у панелі меню та показує повзунок для кожної програми, яка зараз відтворює звук. Ось робочий процес, який найбільше допомагає особам із вадами слуху:</p>
<ul>
<li><strong>Покращуйте додаток, який ви слухаєте.</strong> Перетягніть його повзунок вище 100%, щоб посилити тихий відеодзвінок або подкаст понад те, що дозволяє програма сама по собі.</li>
<li><strong>Вимкніть звук або зменшіть усе інше.</strong> Витягніть вниз музику, вкладки веб-переглядача або звуки сповіщень, щоб ніщо не конкурувало з голосом, за яким ви намагаєтесь стежити.</li>
<li><strong>Увімкніть автоматичне притуплення.</strong> Коли ви починаєте говорити під час дзвінка, SoundDial автоматично приглушує інше аудіо, щоб людина, з якою ви розмовляєте, чув чітко, а потім відновлює його.</li>
<li><strong>Збережіть профіль гучності.</strong> Створіть профіль «відеодзвінки», у якому ваш додаток для конференц-зв’язку буде активовано, а все інше тихо, а потім миттєво перемикайтеся на нього замість того, щоб щоразу переналаштовувати.</li>
<li><strong>Швидко перемикайте вихід.</strong> Перемикайтеся між динаміками, гарнітурою чи пристроєм, підключеним до слухового апарату, з одного меню, не копаючись у налаштуваннях системи.</li>
</ul>
<p>Функція посилення тут є ключовою. Оскільки це підвищує продуктивність програми вище рідного максимуму, тихий запис стає тим, що ви можете почути, тоді як решта вашої системи залишається на комфортному рівні.</p>

<h2>Коротко про спотворення</h2>
<p>Будь-яке програмне підсилення підсилює будь-який сигнал, тому перевищення 100% і без того гучного аудіо може призвести до зрізання. На практиці форсування <em>тихий</em> вміст до комфортного, зрозумілого рівня звучить чисто. Почніть скромно, підвищуйте, поки мова не стане чіткою, і відступайте, якщо вона починає звучати різко. Захист вашого слуху має значення, тому прагніть до чіткості, а не до максимальної гучності.</p>

<h2>Як SoundDial порівнює з альтернативами</h2>
<p>У вас є кілька варіантів, і чесність допоможе вам вибрати правильний:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> Справді професійний, з еквалайзером для кожного додатка та маршрутизацією вихідного сигналу. Якщо ви хочете виліпити частоти для втрати слуху, це потужно. Але він коштує більш ніж удвічі дорожче, вимагає прямого завантаження та встановлення драйвера аудіозапису. Це більше налаштувань і доступу до системи, ніж багато хто хоче.</li>
<li><strong>Background Music (безкоштовно, з відкритим кодом):</strong> Пропонує гучність для кожного додатка безкоштовно, але в ньому немає підсилення, профілів і автоматичного приглушення, і він може зламатися на новіших версіях macOS, оскільки він підключається глибоко до аудіосистеми.</li>
<li><strong>FineTune (безкоштовно, з відкритим кодом):</strong> Легкий додаток для гучності панелі меню. Добре для основ, але без підсилення, профілів і прихилиння, на які спираються слухачі з вадами слуху.</li>
<li><strong>eqMac (безкоштовно):</strong> Еквалайзер з підсилювачем. Корисно для формування звуку, але воно побудовано навколо еквалайзера, а не чистого мікшування та профілів для кожної програми.</li>
</ul>
<p>Де <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> виділяється баланс ціни, безпеки та особливостей, які тут важливі. Оскільки він знаходиться на Mac App Store, він перевірений Apple і в ізольованому програмному середовищі, встановлюється чисто без DMG і не потребує аудіодрайверів чи системних розширень. Ви отримуєте підсилення, вимкнення звуку, профілі гучності та автоматичне приглушення для кожної програми за одну разову покупку за 14,99 євро без жодних копій у стеку аудіо macOS.</p>

<h2>Підсумок</h2>
<p>Спочатку налаштуйте безкоштовні параметри доступності macOS, їх варто мати. Але якщо справжня проблема полягає в тому, що одна програма просто надто тиха, вам потрібен інструмент, який може перевищити 100% роботу однієї програми та заглушити решту. У цьому вся суть посилення для кожної програми, і macOS не робить це самостійно.</p>

<p>Готові почути ваш Mac? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за 14,99 євро розширте програму, яка вам потрібна, і дозвольте автоматичному приглушенню та профілям підтримувати чіткість мови.</p>`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "Як збільшити тихий додаток на Mac (попередня максимальна гучність)",
    description: "Одна програма занадто тиха навіть на 100%? Збільште лише цю програму до максимуму на Mac за допомогою SoundDial, мікшера гучності для кожної програми. Ось найшвидше вирішення та альтернативи.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо одна програма працює надто тихо навіть на максимальній гучності, це найшвидше надійне рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер гучності панелі меню для кожної програми для macOS. Це надає кожній програмі власний повзунок і гучність <strong>підвищення</strong> який виштовхує одну програму понад 100%, тому тихий відеодзвінок або вкладка браузера стають голоснішими, не торкаючись гучності вашої системи. Це одноразова програма за 14,99 євро на Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Як збільшити тихий додаток на Mac (попередня максимальна гучність)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому одна програма тиха навіть на 100%</h2>
<p>macOS має лише один головний том. Коли піднімаєш, все разом стає голосніше. Але кожна програма також виводить звук на своєму внутрішньому рівні, і цей рівень дуже різниться. Тихенько освоєний кліп YouTube, абонент Zoom із поганим мікрофоном, гра з низьким мікшуванням діалогів або вкладка браузера з м’яким потоком — все це може бути набагато нижче всього іншого, навіть якщо ваш Mac працює на повну потужність.</p>
<p>Справжня проблема: macOS має <strong>немає вбудованого мікшера гучності для кожної програми</strong>. Windows має такий протягом багатьох років (мікшер гучності, клацніть правою кнопкою миші значок динаміка). На Mac немає рідного способу включити одну програму, залишивши решту в спокої, і точно немає способу розширити одну програму <em>вище</em> його нормальний максимум. Це прогалина, яку ви досягаєте.</p>

<h2>Найшвидше рішення: покращити лише одну програму</h2>
<p>Змішувач для кожного додатка вирішує цю проблему, вставляючи себе між вашими додатками та вашим виходом, тож він може підвищувати або знижувати кожен потік незалежно, а також посилювати один понад 100%. с <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, потік короткий:</p>
<ul>
<li>Встановіть із Mac App Store і відкрийте його. Він розташований у панелі меню, а не у плаваючому вікні.</li>
<li>Натисніть піктограму панелі меню, щоб побачити повзунок для кожної програми, яка зараз відтворює аудіо.</li>
<li>Знайдіть безшумну програму та перетягніть повзунок вище 100%, щоб застосувати посилення. Це лише посилює цю програму.</li>
<li>Залиште все інше там, де є. Ваш системний том та інші програми залишаються недоторканими.</li>
</ul>
<p>Оскільки посилення залежить від програми, ви можете збільшити м’який відеодзвінок до комфортного рівня, не даючи музиці чи сповіщенням різати вуха. Це основна річ, яку просто не можуть зробити вбудовані елементи керування macOS.</p>

<h2>Примітка щодо посилення та відсікання</h2>
<p>Посилення дійсно корисне, але це посилення, а не магія. Якщо вихідний звук програми дуже тихий або вже спотворений, посилення його може призвести до відсікання або зробити фонове шипіння більш очевидним. На практиці помірне посилення чітко виправляє переважну більшість ситуацій «цей дзвінок занадто тихий». Піднімайте його, доки додаток не стане зручним, а не стукайте до стелі, і ви збережете звук чистим.</p>

<h2>Крім посилення: що ще допомагає</h2>
<p>Після того, як ви отримаєте контроль над додатком, кілька функцій допоможуть назавжди зникнути проблему тихої програми:</p>
<ul>
<li><strong>Об'ємні профілі</strong> — збережіть налаштування (наприклад, «підвищити Zoom, знизити Spotify, вимкнути звук Slack») і викликати їх одним клацанням миші замість того, щоб перетягувати повзунки під час кожної зустрічі.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично вимикає інші програми, коли вибрана програма відтворюється, тому посилений виклик чітко чутний у фоновому режимі.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї шумної програми, не зупиняючи нічого іншого.</li>
<li><strong>Швидке перемикання виходу</strong> — переходити між динаміками, навушниками або зовнішнім інтерфейсом з того самого меню.</li>
</ul>

<h2>А як щодо безкоштовних і професійних альтернатив?</h2>
<p>У вас є варіанти, і тут важлива чесність, тож ось справжній пейзаж.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) є вибором професійного класу приблизно за 39 доларів США. Він забезпечує гучність для кожної програми, еквалайзер для кожної програми та повну маршрутизацію вихідного сигналу, більше потужності, ніж потрібно більшості людей. Компроміси: це коштує більше ніж удвічі, це пряме завантаження, а не App Store, і він встановлює драйвер захоплення звуку, щоб виконувати свою роботу. Якщо вам потрібен інструментарій аудіоінженера, це чудово. Якщо вам потрібна лише одна програма голосніше, це надмірно.</p>
<p><strong>Background Music</strong> є безкоштовним із відкритим вихідним кодом і може виконувати базовий обсяг для кожної програми. Але це проект спільноти, який має історію зламів на нових версіях macOS, і йому не вистачає прискорення понад 100%, профілів і автоматичного притуплення. Чудово, якщо безкоштовність є єдиною вимогою, і ви не проти випадкових поломок.</p>
<p><strong>FineTune</strong> це безкоштовна програма з відкритим вихідним кодом на панелі меню та <strong>eqMac</strong> це безкоштовний еквалайзер і підсилювач системи. Обидва варіанти варто спробувати, якщо ваш бюджет дорівнює нулю. Просто знайте, що вони обслуговуються спільнотою, зосереджені на еквалайзері або легше керують окремими програмами, і не об’єднуйте профілі та приховані в один вишуканий пакет.</p>
<p>Де <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> землі: це середній шлях. Дешевше, ніж SoundSource, потужніший і надійніший, ніж безкоштовні інструменти, і це на <strong>Mac App Store</strong>, що означає перевірку Apple, пісочницю та інсталяцію без проблем <strong>без DMG і без звукових драйверів або розширень</strong> щоб приєднатися до вашої системи. Для більшості людей чесна рекомендація проста: якщо вам потрібне виправлення з найменшими труднощами, яке також дає вам посилення, профілі та автоматичне притуплення, це найкраща ціна за 14,99 євро одноразово.</p>

<h2>Швидка відповідь, переформатована</h2>
<blockquote>Щоб зробити одну програму Mac голоснішою за максимальну, використовуйте мікшер гучності для кожної програми з підсиленням. Відкрийте SoundDial на панелі меню, знайдіть повзунок тихої програми та перетягніть його на 100%. Тільки цей додаток стає голоснішим.</blockquote>

<p>Припиніть боротьбу з одним повзунком гучності для всього Mac. отримати <a href="https://apps.apple.com/app/id6772792641">SoundDial на Mac App Store</a> за 14,99 євро один раз, перевищте ліміт цієї тихої програми за секунди та збережіть профіль, щоб ніколи більше не думати про це.</p>`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "Як посилити тихі відео та подкасти на Mac",
    description: "Деякі відео YouTube, подкасти та лекції надто тихі навіть на 100%. Ось як збільшити обсяг для кожної програми понад максимум на macOS за допомогою SoundDial.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Найшвидше та надійне рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер панелі меню Mac App Store, який надає кожній програмі власний повзунок гучності та справжній <strong>підвищення</strong> що перевищує 100%. Відкрийте браузер або програвач подкастів, перетягніть його повзунок вище максимуму, і тихе відео чи лекція миттєво стане гучнішим — без драйверів, без перезавантаження.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Як посилити тихі відео та подкасти на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому деякі відео та подкасти надто тихі</h2>
<p>Ви запускаєте свій Mac на 100%, а інтерв’ю все ще звучить пошепки. Це не ваша уява. Аудіо освоюється на дуже різних рівнях гучності — вебінар, записаний на мікрофон ноутбука, тихий інді-подкаст або завантажена стара лекція можуть бути на 15–20 дБ нижче професійно створеного відео YouTube. Обсяг вашої системи вже максимальний, тож не залишилося вільного простору.</p>
<p>Ось у чому заковика: macOS має <strong>немає вбудованого мікшера гучності для кожної програми</strong>. Windows має один протягом багатьох років (мікшер гучності в системному треї), але на Mac клавіші гучності переміщуються на один глобальний рівень для всього. Немає рідного способу сказати «зробіть голоснішою лише цю вкладку браузера» — не кажучи вже про те, щоб проштовхнути один додаток на 100%.</p>

<h2>Справжнє виправлення: збільшення обсягу для кожної програми</h2>
<p>Щоб зробити тихе джерело гучнішим, ніж зазвичай дозволяють динаміки, потрібне програмне забезпечення, яке застосовує посилення <em>конкретно цей додаток</em> і може посилюватися за 100% стелю. Це саме те, що робить мікшер для кожної програми з функцією посилення.</p>
<p>с <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, кожна запущена програма відображається у списку панелі меню з власним повзунком. Пересуньте тиху програму до 150% або 200%, і звук посилиться в реальному часі. Оскільки посилення залежить від програми, усе інше — ваша музика, сповіщення, дзвінок в іншому вікні — залишається на нормальному рівні. Ви не підірвете всю свою систему, щоб почути один тихий подкаст.</p>
<blockquote>Глобальна гучність запитує "наскільки гучний Mac?" Мікшер для кожної програми запитує «наскільки голосно <em>це</em> додаток?" — це питання, яке насправді має значення, коли одне відео тихе, а решта в порядку.</blockquote>

<h2>Як покращити тихе відео або подкаст, крок за кроком</h2>
<ul>
<li><strong>Встановіть SoundDial</strong> від Mac App Store. Він ізольований і перевірений Apple, тому встановлюється точно, як і будь-який інший додаток — без окремого завантаження, без аудіодрайвера, без дозволу.</li>
<li><strong>Почніть грати</strong> тихе відео, епізод подкасту чи лекцію в будь-якому додатку, який ви використовуєте — Safari, Chrome, клієнт подкасту, VLC.</li>
<li><strong>Натисніть піктограму SoundDial</strong> у панелі меню. Ви побачите повзунок для кожної програми, яка зараз видає звук.</li>
<li><strong>Перетягніть повзунок цієї програми вище 100%</strong> — спробуйте спочатку 150%, а потім натисніть вище, якщо воно все ще занадто м’яке. Зміна миттєва.</li>
<li><strong>Залиште все інше.</strong> Лише програма, яку ви посилили, стає голоснішою; ваша система залишається збалансованою.</li>
</ul>
<p>Якщо ви щодня запускаєте одні й ті самі програми — скажімо, програвач подкастів і веб-переглядач — ви можете зберегти це налаштування як <strong>об'ємний профіль</strong> і викликати його одним клацанням миші, а не коригувати щоразу.</p>

<h2>Застереження щодо посилення</h2>
<p>Посилення понад 100% додає посилення, а посилення має обмеження. Досить сильно натисніть на дуже тихий запис низької якості, і ви можете почути обрізки або спотворення — це джерело, що закінчується чистим сигналом, а не недолік програми. Підсилюйте, доки його не буде комфортно чути, а потім відступіть, якщо він починає звучати різко. На вбудованих динаміках ноутбука екстремальне посилення також може напружувати драйвери, тому працювати там легше, ніж із хорошими навушниками чи зовнішніми динаміками.</p>

<h2>А як щодо безкоштовних або вбудованих опцій?</h2>
<p>У вас є альтернативи, і варто бути чесним щодо них:</p>
<ul>
<li><strong>Системна гучність + повзунки на рівні програми.</strong> Деякі програвачі (VLC, кілька браузерів за допомогою розширень) дозволяють покращувати власний звук. Добре, якщо вам знадобиться лише в одній програмі, але вам доводиться налаштовувати кожну програму окремо, без уніфікованого контролю та профілів.</li>
<li><strong>eqMac</strong> це безкоштовний еквалайзер і підсилювач. Він може підвищити гучність у всій системі, але це глобальний інструмент, а не чистий мікшер для окремої програми, і він працює на рівні всього виходу.</li>
<li><strong>Background Music</strong> є безкоштовним із відкритим вихідним кодом і пропонує обсяг для кожної програми. Але він покладається на налаштування захоплення аудіо, які можуть зламатися на нових версіях macOS, і йому не вистачає спеціального посилення, профілів і автоматичного приглушення.</li>
<li><strong>FineTune</strong> це безкоштовна програма з панеллю меню з відкритим вихідним кодом — легкий варіант, якщо вам потрібні основи та не проти програмного забезпечення, яке підтримується спільнотою.</li>
<li><strong>SoundSource</strong> від Rogue Amoeba (~39 доларів США) — це важка вага професійного класу: еквалайзер для кожного додатка, вихідна маршрутизація, працює. Він також потребує завантаження та драйвера аудіозапису, і він коштує вдвічі більше, ніж SoundDial. Перебір, якщо все, що ви хочете, це зробити тихий звук голоснішим.</li>
</ul>

<h2>Чому SoundDial є практичним вибором</h2>
<p>SoundDial сидить у солодкому місці для цієї точної проблеми. Це <strong>14,99 євро одноразово</strong> — немає підписки — і живе на <strong>Mac App Store</strong>, що означає, що він перебуває в ізольованому програмному середовищі, перевірений Apple і встановлюється без жодного DMG або системного розширення, якому можна довіряти. Ви отримуєте посилення для кожної програми, за якою ви насправді прийшли, а також профілі, вимкнення звуку для кожної програми, швидке перемикання виходу та <strong>автоматичне пригнічення</strong> що занурює інші програми, коли вам потрібно зосередитися на одній. Він просто робить гучні речі, а все інше робить добре.</p>

<p><strong>Втомилися від напруження, щоб слухати тихі відео та подкасти?</strong> <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за 14,99 євро та надайте кожній програмі власну гучність — із покращенням, щоб чітко чути будь-що.</p>`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "Як встановити різну гучність для кожної програми на Mac",
    description: "macOS не має вбудованого мікшера гучності для кожної програми. Ось як встановити незалежні, постійні рівні гучності для кожної програми на Mac за допомогою SoundDial та альтернатив.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованого способу встановлення різної гучності для кожної програми, тому вам потрібен мікшер гучності на панелі меню. Найшвидше та найнадійніше рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, програма Mac App Store, яка надає кожній програмі власний повзунок гучності, вимкнення звуку для кожної програми та посилення, яке перевищує 100% тихих програм. Встановіть свої рівні один раз, і вони залишаться.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Як встановити різну гучність для кожної програми на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому Mac не має контролю гучності для кожної програми</h2>
<p>Якщо ви перейшли з Windows, ви, ймовірно, шукали еквівалент Windows Volume Mixer, ту маленьку панель, де кожна програма має власний повзунок. Його там немає. macOS пропонує лише один глобальний системний том. Незалежно від того, чи це відео YouTube, дзвінок Zoom, Spotify або гра, усі вони мають однаковий майстерний рівень.</p>
<p>Це добре, поки це не так. Discord чат заглушає вашу музику. Реклама у веб-переглядачі лунає на повну гучність, а під нею тихо відтворюється ваш подкаст. Ваша гра оглушлива, але голосовий дзвінок у фоновому режимі занадто тихий. Єдине «рішення», яке пропонує вам Apple, це відкривати кожну програму та регулювати її внутрішню гучність вручну, якщо вона взагалі є в програмі, і повторювати це кожного сеансу.</p>
<p>Щоб отримати реальний контроль за програмою, вам потрібна невелика утиліта, яка знаходиться між вашими програмами та пристроєм виведення. Нижче описано, як це зробити належним чином, а також чесні примітки щодо альтернатив.</p>

<h2>Найшвидший спосіб: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> знаходиться на панелі меню та містить список усіх програм, які зараз відтворюють аудіо. Кожен отримує окремий слайдер. Ось весь робочий процес:</p>
<ul>
<li><strong>Встановити з Mac App Store.</strong> Його переглянуто Apple і встановлено в ізольованому програмному середовищі, тому немає DMG, аудіодрайвера, ядра чи системного розширення, яке потрібно затвердити. Він встановлюється як будь-який звичайний додаток і може бути видалений таким же чином.</li>
<li><strong>Натисніть значок панелі меню.</strong> Ви побачите повзунок для кожної активної програми, а також основний елемент керування.</li>
<li><strong>Перетягніть, щоб встановити рівні.</strong> Зменшіть Discord, підштовхніть Spotify вгору, повністю вимкніть шумну програму вкладки браузера одним клацанням миші.</li>
<li><strong>Покращуйте тихі програми.</strong> Якщо програма занадто м’яка навіть на 100%, підвищте її вище 100% за допомогою посилення для кожної програми.</li>
<li><strong>Зберегти профіль.</strong> Зберігайте свій мікс «ігор», «дзвінків на роботу» або «музики» та миттєво перемикайтеся між ними замість того, щоб щодня перетягувати повзунки.</li>
</ul>
<p>Варто звернути увагу на дві функції, оскільки вони вирішують найнеприємніші сценарії:</p>
<ul>
<li><strong>Автоматичне пригнічення</strong> автоматично знижує роботу інших програм, коли вибрана програма відтворюється, тож ваша музика припиняється, коли надходить дзвінок, і повертається після цього, без ручних маніпуляцій.</li>
<li><strong>Швидке перемикання виходу</strong> дає змогу переходити між навушниками та динаміками з одного меню, не занурюючись у налаштування системи.</li>
</ul>
<p>Оскільки рівні запам’ятовуються для кожної програми та зберігаються в профілях, більшість людей насправді хоче цього: ви встановлюєте один раз і <em>залишається</em> встановити.</p>

<h2>Чесно порівняйте безкоштовні та платні альтернативи</h2>
<p>SoundDial — не єдиний варіант, і залежно від ваших потреб може бути достатньо безкоштовного інструменту. Ось справедливий виклад.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource — суперважковаговик професійного рівня. Окрім гучності для кожного додатка, він виконує еквалайзер для кожного додатка та повну маршрутизацію вихідного сигналу, тому ви можете надсилати одну програму на навушники, а іншу — на колонки. Це справді чудово. Компроміси: він коштує близько 39 доларів США, і це не чиста інсталяція App Store, це пряме завантаження, яке вимагає додавання драйвера аудіозапису до вашої системи. Якщо ви аудіопрофесіонал, якому потрібен еквалайзер і маршрутизація, воно того варте. Якщо ви просто хочете, щоб кожна програма була на потрібній гучності, це більше інструментів і більше налаштувань, ніж вам потрібно.</p>

<h2>Background Music (з відкритим кодом, безкоштовно)</h2>
<p>Background Music — це безкоштовна програма з відкритим кодом, яка пропонує гучність і автоматичну паузу для кожної програми. Заковика полягає в надійності: він встановлює віртуальний аудіопристрій і має історію поломок у нових версіях macOS, іноді потребуючи перевстановлення або виправлення після оновлень. Він також не має підсилення, збережених профілів і справжнього автоматичного притуплення. Чудово, якщо ви хочете безкоштовно та не проти періодичного обслуговування.</p>

<h2>FineTune і eqMac</h2>
<p>FineTune — це безкоштовна програма з панеллю меню з відкритим кодом, легка відправна точка. eqMac — це безкоштовний еквалайзер із загальносистемним підсилювачем, який більше спрямований на еквалайзер і загальне посилення, ніж на надання кожній програмі власного постійного повзунка. Варто спробувати обидва, якщо ваша потреба вузька, але жоден не зосереджується на робочому процесі «різний обсяг для кожної програми, збережений як профілі».</p>

<h2>Який вибрати?</h2>
<ul>
<li><strong>Хочете, щоб він просто працював, чисто, з профілями та автоматичним притупленням?</strong> SoundDial за 14,99 євро одноразово від App Store, без встановлення драйверів.</li>
<li><strong>Потрібен еквалайзер і маршрутизація аудіо для кожної програми, і вас не хвилює ціна чи драйвер?</strong> SoundSource.</li>
<li><strong>Хочете безкоштовно і чи можете працювати, коли macOS оновлюється?</strong> Background Music, FineTune або eqMac.</li>
</ul>
<p>Справжньою перевагою SoundDial є поєднання: незалежна гучність, вимкнення звуку та посилення для кожної програми, збережені в профілях, що перемикаються, з автоматичним приглушенням, усе це всередині завантаження App Store в ізольованому програмному середовищі, якому можна довіряти та видалити одним клацанням миші, за одноразові 14,99 євро, а не за підписку.</p>

<blockquote>Ні драйвера, ні розширення, ні DMG. Встановіть один раз гучність для кожної програми, збережіть її як профіль і дозвольте автоматичному зниженню гучності виконувати решту.</blockquote>

<p>Готові надати кожному додатку власний обсяг? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і створіть свій ідеальний мікс приблизно за хвилину.</p>`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Зробіть одну програму тихішою за всі інші на Mac",
    description: "Одна гучна програма заглушає решту на вашому Mac? Ось найшвидший і надійний спосіб зменшити гучність однієї програми, не торкаючись інших.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Щоб вимкнути одну програму, а всі інші залишаться на місці, використовуйте <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер гучності панелі меню для кожної програми для macOS. Відкрийте його, знайдіть гучний додаток у списку та перетягніть повзунок вниз. Ця програма миттєво стає тихішою, а ваша музика, дзвінки та інший звук залишаються на своєму рівні. Це найшвидше та найнадійніше рішення.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Зробіть одну програму тихішою за всі інші на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому macOS робить це так важко</h2>

<p>Ось неприємна правда: macOS не має вбудованого мікшера гучності для кожної програми. У Windows був такий протягом багатьох років (клацніть правою кнопкою миші значок гучності, відкрийте мікшер гучності, готово), але на Mac клавіші регулювання гучності та повзунок панелі меню керують лише одним: головним виходом. Зменшіть, і все разом стане тихіше. Увімкніть його, і гучний додаток усе ще буде гучним, просто голосніше разом з іншими.</p>

<p>Отже, коли звукові ефекти гри вибухають, на вкладці веб-переглядача автоматично відтворюється реклама або над вашим подкастом постійно лунають звуки сповіщень, ваші єдині рідні варіанти незграбні: вимкнути звук усієї системи, дослідити власне налаштування гучності кожної програми (якщо вона взагалі є) або повністю закрити порушника. Ніщо з цього не дає вам просто сказати «зробіть цю програму тихішою, а все інше залиште».</p>

<h2>Швидке рішення: мікшер гучності для кожної програми</h2>

<p>Мікшер гучності для кожної програми надає кожній запущеній програмі окремий незалежний повзунок. Це саме той контроль, якого вам не вистачає. с <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це виглядає так:</p>

<ul>
<li><strong>Відкрийте мікшер панелі меню.</strong> Натисніть піктограму SoundDial, і ви побачите живий список усіх програм, які зараз відтворюють аудіо.</li>
<li><strong>Знайди гучного.</strong> Гра, браузер, відеодзвінок, звуки сповіщень, все, що заглушає все інше.</li>
<li><strong>Перетягніть повзунок вниз.</strong> Встановіть його на 40%, 20% усюди, де це збалансовано. Зміни відбуваються миттєво й стосуються лише цієї програми.</li>
<li><strong>Залиште все інше.</strong> Ваш музичний плеєр, ваш дзвінок, інші ваші вкладки, усі вони зберігають гучність, яку ви для них налаштували.</li>
</ul>

<p>Ви також можете повністю вимкнути звук однієї програми одним клацанням миші, поки інші продовжують грати, або збільшити тиху програму вище 100%, якщо вона надто м’яка. Немає перезапуску програми та перегляду меню.</p>

<h2>Типові випадки, коли це вас рятує</h2>

<ul>
<li><strong>Гучна гра під фонову музику.</strong> Переведіть гру на комфортний рівень і тримайте свій список відтворення на повній гучності під ним.</li>
<li><strong>Реклама та відео у веб-переглядачі різко зростають.</strong> Закріпіть веб-переглядач нижче, щоб несподіване автозапуск ніколи не вразило вас.</li>
<li><strong>Дзвінки сповіщень під час виклику або подкасту.</strong> Вимкніть програму, яка потребує сповіщень, не вимикаючи аудіо, яке вам дійсно важливо.</li>
<li><strong>Тихий відеодзвінок під гучний медіа.</strong> Замість того, щоб зменшувати гучність програми, підвищте гучність дзвінка вище 100%, щоб чітко чути людей.</li>
</ul>

<h2>Встановіть його один раз за допомогою профілів гучності та автоматичного приглушення</h2>

<p>Виправити одну гучну програму – це добре, але ви, ймовірно, хочете, щоб вона залишалася виправленою. SoundDial має дві особливості, які роблять це постійним:</p>

<p><strong>Об'ємні профілі</strong> дозволяють зберегти набір рівнів для кожної програми та викликати їх одним клацанням миші. Створіть «Ігровий» профіль, де гра буде на 30%, а музика — на 100%, і «Робочий» профіль, де дзвінки підвищуватимуться, а все інше пом’якшено. Перемикайте контексти, не перетягуючи щоразу повзунки.</p>

<p><strong>Автоматичне пригнічення</strong> автоматично знижує рівень інших додатків під час відтворення вибраного додатка, а потім повертає їх назад, тож гучний додаток ніколи не переймає ваш звук повністю. Між профілями, пригніченням і швидким перемиканням вихідного сигналу (перехід між динаміками та навушниками, не відкриваючи параметри системи), ви встановлюєте баланс один раз і перестаєте піклуватися про гучність.</p>

<h2>Як SoundDial порівнює з альтернативами</h2>

<p>Існують інші способи отримати обсяг для кожної програми на Mac. Ось чесний погляд:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> є справді професійним: еквалайзер для кожної програми та повна маршрутизація вихідного сигналу на додаток до регулювання гучності. Але це коштує удвічі більше, і його потрібно окремо завантажити, а також драйвер для запису звуку. Якщо вам потрібен набір інструментів студійного рівня, це чудово. Якщо ви просто хочете відмовитися від однієї програми, це більше, ніж вам потрібно.</li>
<li><strong>Background Music</strong> є безкоштовним і має відкритий вихідний код, що чудово, але він може зламатися на новіших версіях macOS, і йому не вистачає збільшення гучності, профілів і автоматичного приглушення.</li>
<li><strong>FineTune</strong> це безкоштовна програма з відкритим вихідним кодом на панелі меню та <strong>eqMac</strong> це безкоштовний еквалайзер із підсилювачем. Варто спробувати обидва, якщо для вас безкоштовність, але ви обмінюєте досконалість, надійність і функції на ціну.</li>
</ul>

<p>SoundDial найкраще: 14,99 євро одноразово, без підписки. Оскільки його встановлено на Mac App Store, його перевірено Apple і встановлено в ізольованому програмному середовищі, і він встановлюється чисто без DMG, аудіодрайверів і системних розширень, які потрібно затвердити. Ви отримуєте функції, які справді важливі для вирішення цієї проблеми, — гучність для кожної програми, вимкнення звуку, підсилення, профілі та автоматичне приглушення — без ціни в 39 доларів або крихкого безкоштовного інструменту.</p>

<h2>Підсумок</h2>

<p>macOS не дозволить вам відмовитися від жодної програми самостійно, але цю прогалину ви можете усунути за лічені секунди. Встановіть мікшер для кожної програми, перетягніть повзунок гучної програми вниз, і решта аудіо залишиться там, де ви хочете. Збережіть профіль, і ви більше ніколи не сперечатиметеся з цим.</p>

<p><strong>Готові змусити замовкнути одну програму, яка заглушає решту?</strong> отримати <a href="https://apps.apple.com/app/id6772792641">SoundDial на Mac App Store</a> за 14,99 євро, один платіж, без драйверів, без підписки.</p>`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac Аудіомікшер для стримерів: балансний мікрофон, гра та музика",
    description: "Найшвидший спосіб збалансувати мікрофон, звук гри, музику та сповіщення під час трансляції на Mac. SoundDial надає вам мікшер гучності для кожного додатка з профілями та зниженням гучності.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Щоб збалансувати мікрофон, гру, музику та сповіщення під час трансляції на Mac, найшвидше надійне рішення <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер гучності панелі меню для кожної програми. macOS не має вбудованого мікшера, тому SoundDial дозволяє встановлювати незалежні рівні для кожної програми, посилювати тихі джерела, зберігати профілі потокового передавання та автоматично приглушувати музику під час розмови.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Аудіо мікшер для стримерів: балансний мікрофон, гра та музика" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Проблема: у macOS немає контролю гучності для кожної програми</h2>
<p>Windows вже багато років має мікшер гучності. macOS все ще не поставляє. Ваш системний повзунок гучності переміщує все одночасно, що марно під час прямого ефіру. Під час трансляції ви жонглюєте принаймні чотирма джерелами, які борються за однаковий результат:</p>
<ul>
<li><strong>Моніторинг вашого голосу / мікрофона</strong> — потрібно сидіти над усім.</li>
<li><strong>Аудіо гри</strong> — гучний, динамічний, схильний до спайків під час дії.</li>
<li><strong>Фонова музика</strong> — повинен мовчати під вашим коментарем.</li>
<li><strong>Сповіщення та звуки чату</strong> — Discord, Stream Deck, сповіщення підписників, сповіщення.</li>
</ul>
<p>Без контролю за додатком ви врешті-решт катаєтеся повзунком у додатку, вручну вимикаєте звук Spotify і молитеся, щоб гучна катсцена не розгубила ваших глядачів. Це не суміш, це контроль пошкоджень.</p>

<h2>Що повинен робити правильний потоковий мікшер</h2>
<p>Налаштування аудіо на Mac, орієнтоване на творця, повинно дати вам чотири речі: незалежні рівні для кожної програми, можливість посилити надто тихе джерело, збережені конфігурації, які можна миттєво викликати, і автоматичне приглушення, щоб музика припинялася, коли ви говорите. SoundDial охоплює всі чотири з панелі меню.</p>

<h3>1. Незалежний обсяг для кожного додатка</h3>
<p>Встановіть гру на 60%, музику на 25%, Discord на 80%, а ваш браузер на 40% — кожна програма має свій повзунок. Ніщо не переливається ні в що інше. Ви також можете миттєво вимкнути звук для кожної програми, якщо джерело поводиться неправильно під час потоку, не торкаючись самої програми.</p>

<h3>2. Збільшення гучності для тихих джерел</h3>
<p>Деякі програми та ігри просто занадто тихі навіть на 100%. Функція SoundDial для кожного додатка виводить джерело за звичайну межу, тож гра з мультфільмом або малооб’ємне відео залишаються там, де вам потрібно — без перекодування та плагінів.</p>

<h3>3. Профілі гучності для різних сцен</h3>
<p>Це функція, яка економить стримерам найбільше часу. Ваш мікс «Just Chatting» (музика вгору, гра вимкнута) відрізняється від вашого міксу «Boss Fight» (гра вгору, музика майже безшумна), який відрізняється від вашого міксу «BRB». Збережіть кожен як профіль і перемикайтеся одним клацанням миші замість того, щоб перетягувати чотири повзунки.</p>

<h3>4. Автоматичне притихання, щоб музика притихла під ваш голос</h3>
<p>Автоматичне приглушення автоматично знижує фоновий звук під час розмови та повертає його, коли ви зупиняєтеся. Для сольних стримерів це різниця між чіткими коментарями та музикою, яка постійно ховає ваш голос — обробляється автоматично, а не вручну.</p>

<h2>Куди підходить OBS</h2>
<p>OBS — це ваш інструмент для трансляції, а не мікшер гучності на робочому столі. OBS контролює, які рівні потрапляють у потік, за допомогою панелі аудіомікшера та фільтрів, але він працює з аудіоджерелами, які захоплює — він не досягає окремих програм macOS і не вимикає їх на системному рівні. У Mac передача чистого аудіо на робочому столі для кожної програми в OBS завжди була болючою частиною.</p>
<p>Практичний робочий процес: використовуйте SoundDial, щоб установити фактичні рівні для кожної програми на вашому Mac, щоб те, що виходить, було вже збалансованим, а потім дозвольте OBS захоплювати та точно налаштовувати рівні трансляції. Встановіть мікс один раз біля джерела, і OBS матиме набагато менше проблем. Швидке перемикання вихідного сигналу в SoundDial також дозволяє переходити між навушниками та динаміками, не занурюючись у налаштування системи між сценами.</p>

<h2>SoundDial проти альтернатив</h2>
<p>У вас є варіанти, і тут важлива чесність:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> — Pro-grade з еквалайзером для кожної програми та повною маршрутизацією вихідного сигналу. Це чудово, але коштує удвічі дорожче, вимагає прямого завантаження та встановлення драйвера аудіозапису. Надлишок, якщо вам головним чином потрібні чисті рівні для кожного додатка, посилення та зниження.</li>
<li><strong>Background Music (безкоштовно, з відкритим кодом)</strong> — справді корисний і безкоштовний, але він може зламатися на новіших версіях macOS, і він не має посилення, профілів і автоматичного приглушення — саме ті функції, на які спираються стримери.</li>
<li><strong>FineTune (безкоштовна програма з панеллю меню з відкритим кодом)</strong> — спрощене керування окремою програмою, але спільнотний проект без комбінації профілів і прихилення, створений для прямої трансляції.</li>
<li><strong>eqMac (безкоштовний еквалайзер + бустер)</strong> — добре для формування тону та посилення, але це еквалайзер, а не потоковий мікшер для окремої програми.</li>
</ul>
<p>Кут SoundDial: це a <strong>14,99 євро одноразово</strong> покупка на <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Переглянуто Apple, ізольоване програмне середовище та встановлюється чисто без DMG, аудіодрайверів чи системних розширень. Ця остання важлива для стримерів: менше компонентів на рівні ядра означає менше несподіваних поломок, коли macOS оновлюється ввечері перед вашою трансляцією.</p>

<h2>Чесний компроміс</h2>
<p>Якщо вам потрібен еквалайзер рівня трансляції та складні ланцюжки маршрутизації, SoundSource заслужить свою ціну. Якщо вам потрібен безкоштовний інструмент для майстра і ви не проти випадкових поломок, підійдуть Background Music або FineTune. Але якщо вам потрібна комбінація, яка насправді вимагає потокового передавання — рівні для кожної програми, посилення, збережені профілі сцен і автоматичне приглушення — від безпечної інсталяції App Store, яка витримує оновлення macOS, SoundDial — це найпряміший спосіб отримати гроші.</p>

<p><strong>Готові виправити аудіо потоку?</strong> отримати <a href="https://apps.apple.com/app/id6772792641">SoundDial на Mac App Store</a> за 14,99 євро — один раз установіть рівень мікрофона, гри, музики та оповіщення, збережіть їх як профілі та дозвольте автоматичному приглушенню голосу залишатися на висоті.</p>`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "Як виправити потріскування та тріск звуку на macOS Tahoe",
    description: "Тріск або тріск звуку після оновлення до macOS Tahoe 26? Виправте це, зіставивши частоту дискретизації, скинувши CoreAudio, перевіривши кодек Bluetooth і усунувши конфлікти плагінів. Ось повний порядок усунення несправностей.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Тріск і тріск після оновлення до macOS Tahoe 26 майже завжди є невідповідністю частоти дискретизації, нестабільним узгодженням кодека Bluetooth або завислим процесом CoreAudio. Виправте це, зіставивши вихідну частоту дискретизації в Audio MIDI Setup, скинувши налаштування <code>coreaudiod</code>, забути та повторно підключити навушники Bluetooth, а також вийти з хостів аудіоплагінів. Опрацюйте їх у наведеному нижче порядку.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Як виправити потріскування та вибухання звуку на macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Почніть із дешевих виправлень</h2>

<p>Перш ніж торкатися чогось технічного, виключіть дві речі, які вирішують більшість випадків менш ніж за хвилину:</p>

<ul>
<li><strong>Перезапустіть Mac.</strong> Оновлення Tahoe дивно часто залишає аудіомони в напівперенесеному стані. Чисте перезавантаження перезавантажує CoreAudio з нуля та усуває більшість потрісків після оновлення.</li>
<li><strong>Від’єднайте та під’єднайте вихідний пристрій.</strong> Якщо це USB-ЦАП, док-станція або аудіоінтерфейс, від’єднайте його, зачекайте кілька секунд і знову підключіть. Спробуйте також інший USB-порт, в ідеалі – безпосередньо на Mac, а не через концентратор. Концентратори та дисплеї, які передають звук, є звичайним джерелом хлопків.</li>
</ul>

<p>Якщо шум зберігається після перезавантаження, це проблема конфігурації, а не збій. Продовжуйте.</p>

<h2>Відповідність частоті дискретизації (найчастіша причина)</h2>

<p>Класичний тріск Tahoe виникає через невідповідність частоти дискретизації між тим, що хоче ваш пристрій, і тим, що надсилає macOS. Коли програма відтворює аудіо 44,1 кГц, а система заблокована на 48 кГц (або навпаки), повторна дискретизація може затримуватися або тріскатися.</p>

<ul>
<li>відкритий <strong>Налаштування аудіо MIDI</strong> (у «Програми» → «Утиліти» або виконайте пошук у Spotlight).</li>
<li>Виберіть вихідний пристрій на лівій бічній панелі.</li>
<li>Подивіться на <strong>Формат</strong> спадний список. Спробуйте встановити його <strong>48000,0 Гц, 2 канали-24 біт ціле число</strong> і тест.</li>
<li>Якщо вискакування продовжується, перейдіть на <strong>44100,0 Гц</strong> і перевірити ще раз.</li>
<li>Для інтерфейсів переконайтеся, що частота дискретизації відповідає частоті проекту вашого DAW.</li>
</ul>

<p>Перемикання формату також змушує CoreAudio повторно погоджувати з’єднання, яке виправляє багато випадків, навіть коли ви повертаєтеся до того самого значення.</p>

<h2>Скинути CoreAudio</h2>

<p>CoreAudio працює як фоновий демон <code>coreaudiod</code>. Після великого оновлення macOS він може зберігатися на застарілому стані пристрою. Перезапуск безпечний і набуває чинності миттєво, без перезавантаження.</p>

<p>Відкрийте Terminal і запустіть:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Коли буде запропоновано, введіть свій пароль. Ваш аудіо вимкнеться на секунду, а потім демон автоматично перезапуститься з чистого аркуша. Це єдине найефективніше рішення для потріскування, яке з’являється нізвідки на машині, яка була в порядку до оновлення.</p>

<h2>Перевірте свої навушники та кодек Bluetooth</h2>

<p>Якщо потріскування виникає лише в навушниках AirPods або інших Bluetooth, зазвичай проблема полягає в узгодженні кодека, а не в динаміках. Якість бездротового звуку погіршується, коли з’єднання перевантажене або коли macOS переходить у режим виклику з низькою пропускною здатністю.</p>

<ul>
<li><strong>Забудьте та повторно сполучіть пристрій.</strong> Перейдіть до системних налаштувань → Bluetooth, вийміть навушники, а потім сполучіть їх знову. Це скидає узгоджений кодек.</li>
<li><strong>Слідкуйте за падінням режиму виклику.</strong> Коли програма відкриває мікрофон, macOS перемикає гарнітури Bluetooth на низькоякісний двосторонній профіль, який звучить хрустко. Вийдіть із програм для конференцій і голосових зв’язків, якими ви не користуєтеся, і точність відновиться.</li>
<li><strong>Зменшити перешкоди.</strong> Відійдіть від переповненого середовища 2,4 ГГц і від’єднайте непотрібні пристрої Bluetooth. Завантажений радіодіапазон виробляє переривчасті хлопки.</li>
<li><strong>Вимкніть мікрофонний вхід</strong> у налаштуваннях програми, якщо вам потрібно лише слухати, тож macOS зберігає високоякісний профіль відтворення.</li>
</ul>

<h2>Закрийте хости плагінів аудіо та віртуальні драйвери</h2>

<p>Стороннє аудіопрограмне забезпечення, яке встановлює системне розширення або віртуальний пристрій, є частим порушником після стрибка ОС, оскільки ядро та аудіорозширення часто потребують оновлення для нової версії macOS. Підозрювані включають віртуальні аудіо-маршрутизатори, програми еквалайзера, інструменти зворотного зв’язку та старі утиліти на основі драйверів.</p>

<ul>
<li>Закрийте будь-який еквалайзер, аудіо-маршрутизатор або програму loopback і перевірте, чи припиняється тріск.</li>
<li>Перевірте Системні параметри → Загальні → Елементи входу &amp; Extensions на наявність аудіорозширень, які, можливо, потребують оновлення або видалення.</li>
<li>Оновіть ці програми до випусків, сумісних із Tahoe, або видаліть ті, якими ви більше не користуєтеся. Аудіодрайвери зі стеком часто конфліктують один з одним після великого оновлення.</li>
</ul>

<p>Якщо вихід із однієї з цих програм вимикає вискакування, ви знайшли винуватця. Перевстановіть поточну версію або залиште її.</p>

<h2>Звузити його: для всієї системи чи для однієї програми?</h2>

<p>Визначте, чи виникає шум всюди чи лише в певному програмному забезпеченні. Відтворіть локальний аудіофайл, потім відео в браузері, а потім музичну програму. Якщо тріщить лише одна програма, виправлення полягає у власних налаштуваннях звуку цієї програми або в оновленні, а не macOS. Якщо це стосується всієї системи, відповіді живуть у наведених вище кроках.</p>

<p>Якщо ви все ще застрягли, завантажтеся в безпечному режимі (утримуйте кнопку живлення на Apple silicon, потім виберіть свій завантажувальний диск, утримуючи Shift). Безпечний режим не завантажує сторонні розширення. Якщо там звук чистий, причиною є елемент входу або драйвер, і ви можете повторно ввімкнути їх по одному, щоб знайти це.</p>

<h2>Коли ваш звук буде чистим</h2>

<p>Потріскування — це проблема драйвера та частоти дискретизації, тому наведені вище виправлення — це те, що насправді її вирішує. Але як тільки відтворення стане стабільним, ви можете помітити інше обмеження: macOS досі не має вбудованого мікшера гучності для кожної програми, як у Windows. Ви не можете вимкнути гучний додаток, не вимкнувши все.</p>

<p>Ось і розрив <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> заповнює. Це мікшер на панелі меню, який надає кожній програмі власний повзунок гучності, вимкнення звуку для кожної програми та навіть збільшення гучності для тихих програм, а також швидке перемикання вихідного сигналу. Це не виправить потріскування, але як тільки ваш звук стане здоровим, щоденний контроль стане набагато легшим.</p>

<p>Виконайте наведені вище дії по порядку та почніть із перезавантаження та перевірки частоти дискретизації. Якщо згодом вам захочеться реальний контроль кожного додатка над вашим чистим налаштуванням звуку, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> – це одноразова покупка за 14,99 євро на Mac App Store, ізольованому середовищі без драйверів або DMG для встановлення.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Заїкання або вирізання на Mac (Tahoe Fix)",
    description: "Заїкання AirPods, переривання або пропадання звуку на macOS Tahoe майже завжди є перешкодами Bluetooth або автоматичним перемиканням. Ось як виконати повторне підключення, зменшити перевантаження на частоті 2,4 ГГц і зупинити передачі, які порушують відтворення.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>AirPods заїкання або переривання на macOS Tahoe майже завжди є перешкодою Bluetooth, а не зламаною гарнітурою. Зазвичай винуватцями є Wi-Fi 2,4 ГГц і перевантаженість маршрутизатора, агресивне автоматичне перемикання пристроїв і застаріле сполучення. Повторно підключіть AirPods, вимкніть автоматичне перемикання та відійдіть від переповнених каналів 2,4 ГГц, щоб виправити більшість випадків.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Заїкання або переривання на Mac (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому AirPods зупиняється саме на Mac</h2>

<p>AirPods використовує Bluetooth, який ділиться переповненим радіодіапазоном 2,4 ГГц з Wi-Fi, мікрохвильовими печами, пристроями USB 3 і майже кожною розумною розеткою у вашому домі. Ваш Mac — це завантажене радіо: він жонглює функціями Wi-Fi, Bluetooth, AirDrop і Continuity на антенах, що перекриваються. Коли ця смуга стає перевантаженою, аудіо Bluetooth є першим, що запинається, оскільки воно не може терпіти відкинуті пакети так, як передача файлів.</p>

<p>Tahoe не зробив чарівним чином ваш AirPods гіршим, але нова інсталяція macOS часто скидає поведінку радіо, знову вмикає передачу безперервності та повторно узгоджує кодеки. Ось чому проблеми з’являються одразу після оновлення. Гарна новина: виправлення добре зрозумілі та здебільшого безкоштовні.</p>

<h2>Виправлення 1: повторно підключіть AirPods (зробіть це спочатку)</h2>

<p>Застаріле або пошкоджене сполучення витримує перезавантаження та спричиняє періодичні падіння, які виглядають випадковими. Повністю видаліть і знову додайте підключення:</p>

<ul>
<li>відкритий <strong>Системні налаштування, Bluetooth</strong>.</li>
<li>Натисніть кнопку інформації (i) поруч із вашим AirPods і виберіть <strong>Забудьте про цей пристрій</strong>.</li>
<li>Помістіть AirPods у футляр, закрийте кришку, зачекайте 15 секунд, а потім відкрийте її.</li>
<li>Утримуйте кнопку на задній частині корпусу, доки індикатор не почне блимати білим.</li>
<li>Повторне з’єднання зі списку Bluetooth.</li>
</ul>

<p>Поки ви там, переконайтеся, що мікропрограма AirPods актуальна. Немає ручного оновлення, але якщо залишити їх у футлярі біля підключеного iPhone або Mac на деякий час, вони зможуть оновлюватися у фоновому режимі.</p>

<h2>Виправлення 2: Вимкніть автоматичне перемикання</h2>

<p>Це найбільша причина «вирізання» людей в екосистемі Apple. Ваш AirPods намагається стежити за вами між Mac, iPhone та iPad. Кожного разу, коли ваш телефон думає, що він повинен захопити аудіо, з’єднання на вашому Mac ламається, що призводить до переривання на півсекунди під час подкасту.</p>

<ul>
<li>На Mac: Bluetooth натисніть (i) поруч із AirPods, установіть <strong>Підключіться до цього Mac</strong> до <strong>Під час останнього підключення до цього Mac</strong> замість Автоматично.</li>
<li>На iPhone: Налаштування, торкніться AirPods, <strong>Підключіться до цього iPhone</strong>, вибрати <strong>Під час останнього підключення до цього iPhone</strong>.</li>
</ul>

<p>Це припиняє перетягування канату між пристроями. Ви вручну виберете, куди йде звук, що є невеликою ціною за стабільне відтворення.</p>

<h2>Виправлення 3: зменшення перевантажень на частоті 2,4 ГГц</h2>

<p>Якщо падіння відбуваються під час відеодзвінків, завантажень або коли інші люди транслюють потокове передавання, ваш радіосмуга насичена. Кілька практичних прийомів:</p>

<ul>
<li><strong>Використовуйте діапазон Wi-Fi 5 ГГц</strong> на вашому Mac. У налаштуваннях маршрутизатора дайте мережі 5 ГГц окрему назву та підключіться до неї. Це звільняє діапазон 2,4 ГГц для Bluetooth.</li>
<li><strong>Відсуньте концентратори USB 3 і Thunderbolt</strong> від ваших Mac і AirPods. USB 3 є сумнозвісним джерелом шуму 2,4 ГГц; концентратор, розташований поруч із вашим ноутбуком, може зруйнувати Bluetooth за декілька дюймів.</li>
<li><strong>Змініть канал маршрутизатора 2,4 ГГц</strong> на 1, 6 або 11 (варіанти, що не перекриваються) і уникайте переповнених каналів, на яких працюють ваші сусіди.</li>
<li><strong>Тримайте лінію видимості.</strong> Тіла та стінки поглинають 2,4 ГГц. Якщо ваш Mac позаду вас або в сумці, падіння погіршуються.</li>
</ul>

<blockquote>Маршрутизатори Wi-Fi 6E та Wi-Fi 7 можуть допомогти опосередковано: переведення пристроїв на частоту 6 ГГц очищає діапазон 2,4 ГГц, від якого залежить Bluetooth. Але погано налаштована сітка, яка повертає вас до 2,4 ГГц, може погіршити ситуацію. Перевірте, на якому діапазоні ви насправді.</blockquote>

<h2>Виправлення 4: скидання стека Bluetooth і Continuity</h2>

<p>Якщо повторне підключення не вдалось, скиньте самі радіостанції:</p>

<ul>
<li>Вимкніть і ввімкніть Bluetooth на панелі меню, а потім перезавантажте Mac. Перезавантаження усуває надзвичайну кількість тимчасових звукових збоїв.</li>
<li>Скиньте SMC/NVRAM на Intel Mac або просто повністю вимкніть (не перезавантажте) на 30 секунд на Apple Silicon.</li>
<li>Якщо ви не використовуєте AirDrop або Handoff, вимкніть Handoff у системних параметрах, Загальні, AirDrop &amp; Handoff зменшує фонові радіобалачки.</li>
</ul>

<h2>Що не виправить (і що насправді робить мікшер гучності)</h2>

<p>Щоб було зрозуміло щодо обсягу: жодна з них не є проблемою тома програмного забезпечення, і жодна програма тома не може відновити посилання Bluetooth. Якщо ваш аудіо є <em>падіння</em>, переслідуйте проблему радіо вище. Такі додатки <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> контролюючи гучність для кожної програми, вимкнення звуку та перемикання виходу, вони не торкаються стека Bluetooth, тому вони не перестануть заїкатися. Те, де мікшер справді допомагає, так це суміжне роздратування, яке багато користувачів AirPods пов’язують із випаданням: одна програма працює, а інша працює надто тихо, або потрібно швидко перемикати вихідні дані. Це проблема балансу гучності, а не проблема підключення.</p>

<p>Поставте діагноз чесно. Якщо звук припиняється на певний ритм і повертається, це перешкода або автоматичне перемикання. Якщо рівні між програмами просто нерівномірні, це проблема змішування, яку ви можете вирішити за допомогою програмного забезпечення.</p>

<h2>Швидкий контрольний список</h2>

<ul>
<li>Забудьте та повторно підключіть AirPods.</li>
<li>Установіть як для Mac, так і для iPhone <strong>Коли останнє підключення</strong>, а не автоматично.</li>
<li>Перемістіть Mac на 5 ГГц Wi-Fi; тримайте концентратори USB 3 подалі.</li>
<li>Встановіть 2,4 ГГц на канал 1, 6 або 11.</li>
<li>Перезавантажте після перемикання Bluetooth.</li>
</ul>

<p>Коли випадання зникнуть і ви просто захочете чіткіше контролювати, наскільки голосно відтворюється кожна програма, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> додає відповідний мікшер гучності для кожної програми, вимкнення звуку, посилення та швидке перемикання виходу, чого досі не містить macOS. Це одноразова покупка за 14,99 євро на Mac App Store, ізольоване програмне середовище, без драйверів для встановлення.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Правий динамік помер на Mac після оновлення Tahoe? Як це виправити",
    description: "Один динамік або канал перестав працювати після оновлення до macOS Tahoe? Почніть із повзунка балансу звуку, потім скиньте Core Audio, спробуйте безпечний режим і виключіть апаратне забезпечення. Чітке керівництво з усунення несправностей.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо ваш правий динамік замовк після оновлення до macOS Tahoe, перевірте звук <strong>повзунок балансу</strong> перше — воно може зміщуватися під час оновлення. Перейдіть до системних налаштувань &gt; Звук &gt; Вихід і переконайтеся, що баланс знаходиться в центрі. Якщо це нормально, перезапустіть Core Audio, завантажте безпечний режим, а потім виключіть апаратне забезпечення. Більшість випадків є програмними.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Правий динамік не працює на Mac після оновлення Tahoe? Як це виправити" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>По-перше: повзунок балансу (виправляє це частіше, ніж ви думаєте)</h2>

<p>Завислий або зміщений повзунок балансу є найпоширенішою причиною, чому один канал замовкає, і оновлення macOS час від часу підштовхують його. Перш ніж припустити найгірше:</p>

<ul>
<li>відкритий <strong>Системні налаштування &gt; Звук</strong>.</li>
<li>Натисніть на <strong>Вихід</strong> і виберіть динаміки (вбудовані або зовнішній пристрій).</li>
<li>Знайдіть <strong>Баланс</strong> повзунок і перетягніть його точно до центру. Якщо його потягнути ліворуч, ваш правий канал звучатиме мертвим.</li>
</ul>

<p>Зробіть це <em>на пристрій виведення</em>. Налаштування балансу запам’ятовується окремо для вбудованих динаміків, навушників і кожного зовнішнього інтерфейсу, тому центральний вбудований баланс не допоможе, якщо проблема у вашому ЦАП USB.</p>

<h2>Перевірте, чи справді це апаратний канал</h2>

<p>Швидко встановлюйте або знімайте обладнання. Увімкніть стереотрек, який ви добре знаєте, а потім підключіть дротові навушники. Якщо обидва канали працюють у навушниках, але не через динаміки, проблема полягає в нижній частині аудіосистеми (апаратне забезпечення динаміка чи вихідний шлях). Якщо той же канал не працює і в навушниках, швидше за все, це програмне забезпечення або аудіокодек логічної плати.</p>

<p>Ви також можете відкрити <strong>музика</strong> або QuickTime, відтворіть щось і перемикайте баланс різко вліво, а потім різко вправо. Якщо звук чітко переходить між каналами, обидва динаміки живі, і це суто проблема налаштувань.</p>

<h2>Перезапустіть Core Audio</h2>

<p>macOS направляє весь звук через <strong>coreaudiod</strong> процес. Після великого оновлення його стан може стати незручним — виходи зникають, канали падають або гучність поводиться дивно. Перезапуск є безпечним і змушує macOS перебудувати звуковий графік:</p>

<ul>
<li>відкритий <strong>Terminal</strong> (Програми &gt; Utilities).</li>
<li>запустити: <code>sudo killall coreaudiod</code></li>
<li>Введіть свій пароль. Аудіо демон автоматично перезапускається протягом секунди або двох.</li>
</ul>

<p>Нічого не видаляється — це лише перезавантажує аудіопідсистему. Одразу після цього знову перевірте правий динамік.</p>

<h2>Перезавантажте належним чином, а потім спробуйте безпечний режим</h2>

<p>Повний перезапуск усуває тимчасові звукові збої, яких killall не робить. Якщо канал все ще мертвий, завантажтеся <strong>безпечний режим</strong>, який завантажує мінімальну систему та пропускає сторонні аудіорозширення та елементи входу:</p>

<ul>
<li><strong>Apple Silicon:</strong> Вимкнути. Утримуйте кнопку живлення, доки не з’явиться напис «Завантаження параметрів запуску». Виберіть свій диск і утримуйте <strong>Shift</strong> і натисніть «Продовжити в безпечному режимі».</li>
<li><strong>Intel:</strong> Перезапустіть і утримуйте <strong>Shift</strong> до появи вікна входу.</li>
</ul>

<p>Якщо обидва динаміки працюють у безпечному режимі, сторонній аудіодрайвер, віртуальний пристрій або утиліта панелі меню, встановлена до оновлення, конфліктує з новим аудіостеком Tahoe. Поверніться до звичайного режиму та видаліть або оновіть нещодавно встановлене аудіопрограмне забезпечення (записувачі екрана, програми для зустрічей і kexts для маршрутизації аудіо є типовими причинами).</p>

<h2>Скидання NVRAM (лише для Intel Macs)</h2>

<p>На Intel Mac налаштування звуку та динаміків зберігаються в NVRAM/PRAM, а застаріле значення може пережити оновлення. Скиньте його: вимкніть, потім увімкніть і негайно утримуйте <strong>Option + Command + P + R</strong> протягом приблизно 20 секунд, дозволяючи Mac один раз перезапуститися. Це не стосується Apple Silicon Mac — вони керують цим автоматично, тому пропустіть це, якщо ви використовуєте машину серії M.</p>

<h2>Оновіть ще раз — і перевірте наявність точки випуску</h2>

<p>Ранні випуски будь-якої основної версії macOS постачаються з помилками звукового драйвера, які пізніше виправляються. Голова до <strong>Системні параметри &gt; Загальне оновлення програмного забезпечення &gt;</strong> і інсталюйте будь-який випуск Tahoe Point, що очікує на розгляд (14.x.1, 14.x.2 тощо). Якщо існує додаткове оновлення, воно часто вирішує саме ці регресії звуку після оновлення.</p>

<h2>Коли це справді апаратне забезпечення</h2>

<p>Якщо безпечний режим, перезапуск Core Audio та чиста перевстановлення не дають результатів — і той самий канал не працює в навушниках — можливо, ви шукаєте апаратну несправність. Час оновлення може бути випадковим; підсилювачі гучномовців і аудіокодеки виходять з ладу. бігти <strong>Діагностика Apple</strong> (вимкніть, потім утримуйте кнопку живлення на Apple Silicon і виберіть «Діагностика» або утримуйте <strong>Д</strong> на Intel під час запуску). Якщо він позначає аудіокомпонент, зв’яжіться з нами <strong>Підтримка Apple</strong> або авторизований постачальник послуг. Не витрачайте гроші на програмне забезпечення для перегорілого динаміка.</p>

<blockquote>Швидке емпіричне правило: якщо аудіо правильно панорамується за допомогою повзунка балансу, обидва динаміки фізично в порядку, і ваше виправлення полягає в програмному забезпеченні. Якщо він ніколи не рухається до мертвої сторони, підозрюйте апаратне забезпечення.</blockquote>

<h2>Де програмне забезпечення для об’єму підходить (а де ні)</h2>

<p>Щоб було зрозуміло: мертвий канал гучномовця не виправляє програма гучності — перевірки вище — це ваш шлях. Тим не менш, як тільки ваше аудіо знову стане здоровим, macOS все ще не має того, що Windows мав роками: справжнього мікшера гучності для кожної програми. Якщо ви почали копатися в налаштуваннях звуку, тому що одна програма вибухала, а інша надто тихо, мікшер панелі меню, як <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> дозволяє встановлювати незалежну гучність, вимкнення звуку та навіть посилення для кожної програми, не торкаючись балансу системи. Це зручний інструмент для щоденного змішування, а не ремонт проблеми, описаної в цій статті.</p>

<h2>Коротка версія</h2>

<ul>
<li>Центруйте <strong>Баланс</strong> повзунок — на пристрій виведення.</li>
<li>Перевірте в навушниках, щоб ізолювати обладнання.</li>
<li>бігти <code>sudo killall coreaudiod</code>, потім перезапустіть.</li>
<li>Спробуй <strong>безпечний режим</strong> ловити конфлікти драйверів.</li>
<li>Скидання NVRAM на Intel; встановити будь-який реліз точки Tahoe.</li>
<li>Все ще мертвий у навушниках? Запустіть Apple Diagnostics і зателефонуйте в Apple.</li>
</ul>

<p>Коли ваші динаміки повернуться до нормального стану, якщо жонглювання гучністю для кожної програми є щоденним роздратуванням, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> додає мікшер macOS, якого завжди бракувало — 14,99 євро, одноразово, ізольоване програмне середовище, без драйверів.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods застряг на половині гучності на вашому Mac? Ось виправлення",
    description: "Чому AirPods підключається до вашого Mac на половинній гучності — зазвичай кодек Bluetooth перемикається на профіль гучного зв’язку — плюс виправлення повторного з’єднання та те, як назавжди підвищити рівень.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>AirPods зазвичай знижується до половини гучності на Mac, тому що macOS перемкнув їх з високоякісного аудіопрофілю A2DP на низькоякісний профіль гучного зв’язку (HFP) — той, що створений для використання мікрофона телефонного дзвінка. Цей режим обмежує вихід і якість. Виправте це, примусово повернувши Mac до звуку лише через навушники, а потім підвищте рівень, щоб він залишився там.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Застряг на половині гучності на Mac? Ось виправлення" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому це відбувається: перемикач кодеків</h2>

<p>Аудіопристрої Bluetooth, такі як AirPods, працюють в одному з двох режимів. Коли ви просто слухаєте, macOS використовує A2DP — повне стерео, повна гучність, чиста якість. Але в той момент, коли програмі потрібен ваш мікрофон, macOS перемикає все з’єднання на HFP (профіль Hands-Free). HFP — кодек двосторонньої телефонії. Він звучить тонко, моно і помітно тихіше, оскільки був розроблений для голосових дзвінків, а не для музики.</p>

<p>Проблема полягає в тому, що macOS часто залишається в HFP навіть після того, як програма, яка захопила мікрофон, завершена — або перемикається в неї, коли ви відкриваєте Zoom, FaceTime, Teams, Discord або вкладку браузера з дозволом мікрофона. Тож ваші AirPods звучать так, ніби вони на «половині гучності» не тому, що повзунок гучності перемістився, а тому, що весь аудіопрофіль під вами знизився.</p>

<p>Ви це впізнаєте: звук раптово стає тихим і приглушеним, AirPods двічі з’являється у ваших налаштуваннях звуку (один раз як вихід, один раз як мікрофон), а збільшення системної гучності майже не допомагає.</p>

<h2>Обхідні шляхи повторного з’єднання та кодека</h2>

<p>Це чесні перші кроки. Опрацюйте їх по порядку — один із ранніх зазвичай очищає.</p>

<ul>
<li><strong>Змініть пристрій введення.</strong> Відкрийте Системні параметри → Звук → Вхід і виберіть вбудований мікрофон Mac замість AirPods. Це не дозволяє macOS утримувати AirPods у режимі HFP, тому вихід може повернутися до повної якості A2DP. Це єдине найефективніше рішення.</li>
<li><strong>Вимкніть і ввімкніть Bluetooth.</strong> Швидке скидання з’єднання часто повторно узгоджує A2DP, особливо якщо AirPods застряг після завершення виклику.</li>
<li><strong>Повторно підключіть AirPods.</strong> Закрийте корпус, зачекайте кілька секунд, знову відкрийте його біля Mac і знову виберіть їх як вихідний пристрій.</li>
<li><strong>Закрийте програму, яка захопила мікрофон.</strong> Повністю закрийте Zoom, Teams, Discord або цю вкладку браузера. Деякі програми утримують сеанс мікрофона відкритим у фоновому режимі та закріплюють HFP, доки вони не зникнуть.</li>
<li><strong>Повторна пара з нуля.</strong> Видаліть AirPods у розділі «Системні параметри» → Bluetooth (натисніть кнопку «Інформація» → «Забути цей пристрій»), а потім знову створіть пару. Це очищає пошкоджене узгодження профілю, яке не можна виправити одним перемиканням.</li>
<li><strong>Скинути AirPods.</strong> Коли вони знаходяться в відкритій кришці корпусу, утримуйте кнопку налаштування на задній панелі, доки індикатор не почне блимати жовтим, а потім білим. З’єднайте пару пізніше. Це ядерний варіант для дивацтва на рівні прошивки.</li>
<li><strong>Оновіть прошивку macOS і AirPods.</strong> Apple надіслала виправлення аудіо Bluetooth у точкових випусках. Прошивка AirPods оновлюється без звуку, коли вони заряджаються біля підключеного пристрою, тому залиште їх у футлярі біля свого Mac на ніч.</li>
</ul>

<blockquote><p>Зразок, на який варто звернути увагу: якщо гучність падає, коли ви приєднуєтеся до дзвінка, і відновлюється після завершення дзвінка, це означає перемикач HFP, а не зламаний динамік чи збій налаштувань.</p></blockquote>

<h2>Чому виправлення не завжди діють</h2>

<p>Ось що розчаровує. Навіть після повторного підключення macOS із задоволенням переведе ваш AirPods назад у тихий режим гучного зв’язку, коли наступного разу будь-яка програма торкнеться мікрофона. Ви не можете назавжди вимкнути таку поведінку в налаштуваннях системи — Apple розглядає це як автоматичне. Тож ви в кінцевому підсумку повторюєте трюк із пристроєм введення кілька разів на день, і щоразу, коли ваш AirPods перебуває у дзвінку чи програмі, що потребує мікрофона, вони знову обмежуються на нижчому рівні.</p>

<p>Існує також друга окрема проблема, яку люди пов’язують із цією: деякі програми просто тихіші за інші на максимальній системній гучності. Програвач подкастів або вкладка браузера можуть розміститися набагато нижче, ніж вам потрібно, навіть якщо AirPods працює з чистим A2DP. macOS дає вам один повзунок гучності для всього й не контролює окрему програму, тому немає рідного способу запустити одну безшумну програму.</p>

<h2>Знову підвищте рівень — і тримайте його там</h2>

<p>Ось де мікшер гучності для кожного додатка заслужить своє місце. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — це програма на панелі меню для macOS, яка надає кожній запущеній програмі власний незалежний повзунок гучності — включаючи збільшення вище 100%. Отже, коли ваш AirPods повертається після виклику на нижчому ефективному рівні або певна програма просто надто тиха, ви перетягуєте цю програму за межі звичайної стелі, і вона залишається там.</p>

<p>Конкретно це означає:</p>

<ul>
<li><strong>ЗБІЛЬШЕННЯ обсягу для кожної програми.</strong> Запустіть тиху програму вище стандартного максимуму замість того, щоб напружуватися, щоб почути її на «повній» системній гучності.</li>
<li><strong>Об'ємні профілі.</strong> Зберігайте набір рівнів — посилений браузер, тихіша музика, гучні відеодзвінки — і змінюйте все в один клік, щоб не налаштовувати заново після кожного повторного підключення.</li>
<li><strong>Швидке перемикання виходу.</strong> Перемикайтеся між AirPods, динаміками ноутбука та зовнішнім ЦАП із панелі меню, не копаючись у налаштуваннях системи, що допомагає, коли ви змушуєте нове узгодження профілю.</li>
<li><strong>Вимкнення звуку та автоматичне приглушення звуку для кожної програми.</strong> Вимкніть звук однієї програми, не торкаючись решти, і дозвольте медіафайлам автоматично вимикатися, коли відтворюється щось важливіше.</li>
</ul>

<p>Варто чітко визначити, що це робить, а що ні. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> не змусить macOS залишитися в A2DP — наведений вище трюк із пристроєм введення все ще є вашим інструментом для самого кодека. Що він робить, так це повертає вам гучність, вкрадену пониженням, для кожної програми, тому тиха сесія AirPods або вперта м’яка програма — це виправлення одним перетягуванням, а не втрачена справа. А оскільки це програма Mac App Store із ізольованим програмним середовищем, не потрібно встановлювати аудіодрайвер, ані DMG, ані розширення ядра — вона просто працює.</p>

<h2>Коротка версія</h2>

<p>Якщо ваш AirPods звучить тихо та приглушено на Mac, вимкніть пристрій введення AirPods, щоб примусово вийти з режиму гучного зв’язку, і повторіть з’єднання, якщо це не вдасться. Якщо рівень все одно не досягає бажаного — або окрема програма занадто м’яка — спробуйте прискорити програму, щоб установити її один раз і рухатися далі.</p>

<p>Втомилися від повзунка гучності кожного разу, коли ви приймаєте виклик? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> — одноразово 14,99 євро, без підписки, без драйверів — і надайте кожній програмі власний обсяг.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac Гучність постійно скидається на Tahoe? Як заблокувати це назавжди",
    description: "Починаючи з macOS Tahoe, багато Mac раптово змінюють або скидають свою гучність самостійно. Ось чому це відбувається, як усунути вбудовані причини та як заблокувати фіксований обсяг для кожної програми, щоб вона залишалася на місці.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо після macOS Tahoe гучність вашого Mac постійно скидається, виправлення полягає в тому, щоб усунути автоматичні регулятори: вимкнути приглушення аудіо та «Відтворювати звук під час запуску», скинути налаштування звуку та повторно під’єднати вихід Bluetooth. Для рівнів програми, які стрибають, зафіксуйте фіксовану гучність для кожної програми за допомогою мікшера, щоб вона більше ніколи не змінювалася.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Гучність постійно скидається на Tahoe? Як заблокувати це назавжди" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому ваша гучність змінюється сама по собі після Тахо</h2>

<p>Гучність, яка рухається, не торкаючись до неї, виглядає як апаратна несправність, але майже завжди програмне забезпечення вирішує рівень за вас. macOS має кілька автоматичних дій, які тихо підштовхують або скидають вихід, а зміни аудіостеку Tahoe зробили деякі з них більш помітними. Перш ніж припускати, що програма або Mac зламано, варто точно знати, яка система захоплює повзунок.</p>

<ul>
<li><strong>Приглушення звуку:</strong> macOS знижує рівень іншого звуку, коли вважає, що відтворюється щось важливіше (Siri, оголошення про доступність, сповіщення). Після завершення тригера рівень іноді не повертається повністю.</li>
<li><strong>Bluetooth скидання рукостискання:</strong> AirPods та інші пристрої Bluetooth повторно узгоджують гучність під час підключення. Повторне підключення в середині сеансу може призвести до налаштування за замовчуванням або значно гучнішого/тихшого рівня.</li>
<li><strong>Перемикання вихідного пристрою:</strong> Коли ви від’єднуєте навушники, док-станцію або перемикаєтеся на динаміки монітора, кожен вихід запам’ятовує свою гучність. Перемикання вперед і назад виглядає як "випадкове" скидання.</li>
<li><strong>Стандартні параметри для кожної програми:</strong> Деякі програми (браузери, відеопрогравачі, інструменти для конференцій) встановлюють власне посилення під час запуску або коли починається новий потік, замінюючи все, що було у вас.</li>
<li><strong>Звук запуску та стан входу:</strong> Звуковий сигнал завантаження та вхід можуть повернути гучність системи до рівня за замовчуванням, який ви не вибирали.</li>
</ul>

<h2>Спочатку усуньте вбудовані причини</h2>

<p>Опрацюйте їх по порядку. Більшість скарг на «самоперезавантаження» зникають, як тільки виключаються дакінг і Bluetooth.</p>

<ul>
<li><strong>Вимкніть звук запуску.</strong> Системні параметри → Звук → зніміть прапорець <em>Відтворення звуку під час запуску</em>. Це зупинить завантажувальний дзвінок від скидання базового рівня.</li>
<li><strong>Зменшіть або вимкніть тригери пригнічення.</strong> У системних налаштуваннях → Спеціальні можливості → Голосовий вміст і Siri вимкніть голосові сповіщення, які вам не потрібні. Менше тригерів означає менше моментів, коли macOS знижує звук і забуває його відновити.</li>
<li><strong>Повторно підключіть проблемні пристрої Bluetooth.</strong> Видаліть AirPods або навушники з налаштувань Bluetooth і об’єднайте їх заново. Застарілий профіль є поширеною причиною замикання гучності під час підключення.</li>
<li><strong>Уважно встановлюйте кожен вихідний пристрій.</strong> Підключіть кожен вихід, який ви використовуєте (вбудований, монітор, навушники), і один раз встановіть його гучність. macOS зберігає гучність для кожного пристрою, тому налаштування всіх усуває несподіванки під час перемикання.</li>
<li><strong>Скиньте Core Audio, якщо він застряг.</strong> Відкрийте Terminal і запустіть <code>sudo killall coreaudiod</code>. Це перезапускає демон аудіо без перезавантаження та очищає завислий стан, який може спричинити непостійні рівні.</li>
<li><strong>Оновіть, потім перезапустіть.</strong> Ранні випуски Tahoe point надіслали виправлення звуку. Переконайтеся, що ви використовуєте останню збірку та перезавантажте один раз після оновлення.</li>
</ul>

<p>Якщо скидання припиняється, один із перерахованих вище був вашим винуватцем. Якщо ваш <em>система</em> гучність стабільна, але окремі програми продовжують дрейфувати голосніше або тихіше, ніж усе інше, ви досягли межі можливостей вбудованих елементів керування.</p>

<h2>Справжня прогалина: macOS не може заблокувати гучність для кожної програми</h2>

<p>Ось що розчаровує. Windows роками мав мікшер гучності для кожної програми — ви відкриваєте його, перетягуєте повзунок однієї програми, і він залишається там. macOS ніколи не відправляв жодного. Існує лише один системний повзунок гучності, і кожна програма бореться за нього. Тож, коли на вкладці веб-переглядача відображається реклама з автоматичним відтворенням або відеодзвінок лунає вдвічі голосніше, ніж ваша музика, єдиним вибором є регулювати основну гучність вручну — це саме той цикл «чому це постійно змінюється», якого ви намагаєтеся уникнути.</p>

<blockquote>Системний повзунок — це один спільний диск. Без мікшера для кожного додатка «встановити й забути» неможливо на стандартному macOS — щось завжди перекриває вас.</blockquote>

<h2>Заблокуйте фіксований обсяг для кожної програми за допомогою SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> додає мікшер для кожної програми. macOS відсутній. Він розташований у панелі меню та надає кожній запущеній програмі власний повзунок гучності, незалежний від основного. Оскільки він запам’ятовує рівень, який ви встановили для кожної програми, він безпосередньо вирішує проблему «самоскидання»: ви вирішуєте один раз, і ця програма щоразу відкривається з такою гучністю.</p>

<ul>
<li><strong>Незалежний обсяг на додаток:</strong> тримайте музику на 40% і відеодзвінок на 80% одночасно, без жонглювання основним повзунком.</li>
<li><strong>Вимкнення та посилення звуку для кожної програми:</strong> миттєво вимкніть шумну програму або надто тиху програму перевищіть 100%, якщо її власний звук слабкий.</li>
<li><strong>Профілі обсягу:</strong> зберігайте налаштування для «роботи», «ігор» або «фокусу» та перемикайте весь мікс одним клацанням миші.</li>
<li><strong>Автоматичне притуплення на ваших умовах:</strong> автоматично знижувати фонові програми, коли ви говорите або коли вибрана програма активна — замість того, щоб macOS вирішував.</li>
<li><strong>Швидке перемикання виходу:</strong> перемикайтеся між динаміками, навушниками та відстежуйте аудіо з панелі меню, не занурюючись у налаштування.</li>
</ul>

<p>Це одноразова покупка на 14,99 євро в Mac App Store — без підписки, без драйверів, без DMG і без розширень ядра. Оскільки він повністю ізольований і поширений App Store, ви не встановлюєте застарілий аудіо kext, який Tahoe може заблокувати під час наступного оновлення. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> встановлює ваші рівні за допомогою підтримуваних API, щоб ваші запам’ятовані томи витримували оновлення та перезавантаження.</p>

<h2>Який підхід вам насправді потрібен?</h2>

<p>Якщо стрибає гучність усієї вашої системи, почніть із вбудованих виправлень, наведених вище — притихання, Bluetooth і обліковий запис звуку при запуску в більшості випадків. Якщо натомість проблема полягає в тому, що одна програма завжди є дивною, або ви втомилися від того, що основний повзунок є компромісом, мікшер для кожної програми є єдиною реальною порадою. macOS не додасть його, тому інструмент панелі меню є практичним шляхом до міксу, який справді залишається там, де ви його розмістили.</p>

<p>Втомилися ганятися за повзунком гучності на Tahoe? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і заблокуйте запам’ятований обсяг для кожної програми — 14,99 євро одноразово, без підписок і без драйверів.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Керуйте гучністю монітора DAW окремо від системного звуку на Mac",
    description: "macOS не має вбудованого мікшера гучності для кожної програми, тому ваш DAW і системні звуки мають один рівень. Ось як керувати гучністю монітора Logic, Ableton або GarageBand незалежно від браузера та сповіщень.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>macOS не має вбудованого мікшера гучності для кожної програми, тому ваш DAW і все інше мають один системний повзунок. Щоб налаштувати рівень монітора незалежно від браузерів, Slack і сповіщень, вам потрібен контроль гучності для кожної програми. Змішувач панелі меню <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> надає Logic, Ableton і GarageBand власну гучність, окрему від системного звуку.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Керуйте гучністю монітора DAW окремо від системного звуку на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому один повзунок гучності псує ваш моніторинг</h2>

<p>Коли ви продюсуєте, ваш DAW – лише одна з багатьох речей, які створюють звук. Довідковий трек відтворюється на вкладці браузера. Надходять піни Slack. Підручник YouTube працює на другому моніторі. На Windows мікшер гучності дозволяє балансувати все це незалежно. На macOS Apple ніколи не поставляла еквівалент — клавіші гучності та повзунок панелі меню рухаються <em>все</em> одразу.</p>

<p>Це створює справжню проблему для тих, хто мікшує на слух. Ви набираєте комфортний рівень моніторингу в Logic, а потім на тому ж рівні проривається сповіщення, яке розбиває вуха. Або ви вимикаєте систему, щоб захистити свій слух під час гучного пасажу, і тепер ваша еталонна доріжка надто тиха для порівняння. Ваш еталон моніторингу більше не є стабільним, а стабільний еталон — це суть змішування.</p>

<blockquote>Моніторинг на постійному рівні є однією з небагатьох звичок, яка відчутно покращує ваші мікси. Якщо системні звуки постійно змушують вас рухати головний повзунок, ви втрачаєте послідовність.</blockquote>

<h2>Що насправді означає «окремий том DAW».</h2>

<p>Тут виробники об’єднують дві різні речі, і їх варто розділяти:</p>

<ul>
<li><strong>Рівень інтерфейсу/основного виводу</strong> — апаратну ручку на аудіоінтерфейсі або контролер монітора. Це встановлює вашу абсолютну гучність прослуховування та має залишатися на місці після калібрування.</li>
<li><strong>Обсяг програмного забезпечення для кожної програми</strong> — наскільки голосна кожна програма <em>раніше</em> він досягає цього результату. Ось чого не вистачає macOS. Це дозволяє підтримувати DAW на одному рівні, вимикаючи звуки Chrome, музики або сповіщень до рівня ліжка під ним.</li>
</ul>

<p>Ти хочеш другий. Мета полягає не в тому, щоб знизити рівень звуку DAW, а в тому, щоб зменшити всі інші параметри відносно нього, щоб DAW залишався вашим найгучнішим і найстабільнішим джерелом, а відволікаючі фактори залишалися на задньому плані.</p>

<h2>Як це зробити за допомогою міксера для кожної програми</h2>

<p>Змішувач панелі меню, наприклад <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> перераховує кожну програму, яка зараз відтворює аудіо, і надає кожній власний повзунок. Робочий процес продюсера виглядає так:</p>

<ul>
<li><strong>Відкалібруйте інтерфейс один раз.</strong> Встановіть аудіоінтерфейс або контролер монітора на зручний, повторюваний контрольний рівень і залиште його. Це ваш фіксований якір.</li>
<li><strong>Встановіть для DAW значення 100%.</strong> У мікшері залиште Logic, Ableton або GarageBand на повній програмній гучності, щоб він проходив через одиницю. Власний головний фейдер вашого DAW все ще виконує точне мікшування.</li>
<li><strong>Потягніть все інше вниз.</strong> Знизьте Chrome, Safari, Music і Slack до нижчого рівня — скажімо, 40–60 % — щоб еталонні треки та повідомлення залишалися під вашим міксом, а не конкурували з ним.</li>
<li><strong>Вимкніть шумні речі.</strong> Вимкнення звуку для окремої програми дозволяє повністю вимкнути звук у веб-переглядачі чи програмі чату, не торкаючись ланцюжка моніторингу. Один клік, і ваш DAW продовжує грати без зворушень.</li>
</ul>

<p>Оскільки повзунок DAW ніколи не рухається, ваш еталон моніторингу залишається надійним протягом усього сеансу. Ви можете запустити еталонну доріжку для швидкого A/B, а потім відключити її, і рівень вашого міксу не зміниться ні на децибел.</p>

<h2>Підвищення тихої програми замість того, щоб відмовляти іншим</h2>

<p>Іноді проблема йде в інший бік. Грубий демонстраційний відскок, голосове нагадування або тихе посилання відтворюється набагато нижче рівня вашого сеансу. Увімкнення вашого інтерфейсу, щоб почути це, означає, що все інше тепер занадто голосно. За програму <strong>збільшення гучності</strong> дає змогу підштовхнути одну тиху програму вище 100%, щоб вона відповідала вашому робочому рівню, не торкаючись каліброваного виходу. Це твір, якого ніколи не було в мікшері Windows, і один із найбільш корисних інструментів, коли ви прослуховуєте матеріал за межами свого DAW.</p>

<h2>Профілі для різних типів сеансів</h2>

<p>Ваш ідеальний баланс не однаковий для кожного завдання. Відстеження, мікшування та випадкове прослуховування потребують різного поєднання рівнів програм. Профілі гучності дозволяють зберегти налаштування та миттєво викликати їх:</p>

<ul>
<li><strong>Змішування:</strong> DAW на 100%, браузер і музика низькі, звук чату вимкнено.</li>
<li><strong>Довідкове прослуховування:</strong> Додаток для музики або потокового передавання вгору, DAW вниз.</li>
<li><strong>Дзвінки / співпраця:</strong> програму для конференц-зв’язку, DAW відтягнуто, щоб вона не вливалася в дзвінок.</li>
</ul>

<p>Перемикання профілів краще ручного регулювання п’яти повзунків щоразу, коли ви змінюєте передачі.</p>

<h2>Автоматичне пригнічення та швидке перемикання виходу</h2>

<p>У студії важливі ще дві речі. <strong>Автоматичне пригнічення</strong> може автоматично вимикати фонові програми, коли пріоритетне джерело говорить або відтворює, тому дзвінок або важливий звук завжди перериваються. І <strong>швидке перемикання виходу</strong> на панелі меню дозволяє перемикатися між інтерфейсом, моніторами та навушниками, не заглиблюючись у налаштування системи — постійне завдання, коли ви перевіряєте мікс на різних системах.</p>

<h2>Чому б не віртуальний аудіодрайвер?</h2>

<p>Деякі інструменти маршрутизації вирішують цю проблему, встановлюючи віртуальний звуковий драйвер на рівні ядра. Вони потужні, але важкі: вони можуть зламатися після оновлення macOS, додати затримку та вимагати глибоких системних дозволів. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> знаходиться в пісочниці та поставляється через Mac App Store — без драйверів, без DMG, без налаштування агрегатного пристрою. Зокрема, це набагато простіший шлях, ніж зміна маршрутизації аудіо для кожного окремого додатка.</p>

<p>Готові підтримувати стабільний рівень моніторингу, а все інше залишається на своїх місцях? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за одноразові 14,99 євро та надайте своєму DAW власний об’єм.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "Простіша альтернатива Audio Hijack для обсягу кожного додатка на Mac",
    description: "Якщо вам потрібен лише незалежний обсяг для кожної програми на macOS, Audio Hijack — це надмірність. Ось легша та дешевша альтернатива панелі меню, яка налаштовує гучність, вимикає та посилює звук для кожної програми без маршрутизації звуку.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо все, що вам потрібно, — це незалежний обсяг для кожної програми на macOS, Audio Hijack — це більше, ніж вам потрібно. Це професійний набір для маршрутизації та запису аудіо (близько 79 доларів), створений для захоплення, ефектів і графіків сеансів. Щоб просто вимкнути одну програму та ввімкнути іншу, легкий мікшер на панелі меню <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> швидше, дешевше та завжди готовий.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — простіша альтернатива Audio Hijack для обсягу кожного додатка на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому люди в першу чергу прагнуть до Audio Hijack</h2>

<p>macOS не має вбудованого мікшера гучності для кожної програми. Windows вже багато років має такий у своєму мікшері гучності, але на Mac клавіші регулювання гучності та повзунок панелі меню переміщують лише одну річ: системний майстер. Немає прямого способу сказати: «Збережіть Spotify на 40%, але залиште мій відеодзвінок на 100%».</p>

<p>Тому люди шукають обхідний шлях і потрапляють на Audio Hijack. Це <em>може</em> робити гучність для кожної програми, оскільки вона може перехоплювати та обробляти аудіо з будь-якої окремої програми. Але ця можливість є побічним ефектом того, для чого вона насправді розроблена: запис аудіо з додатків і апаратного забезпечення, ефекти зв’язування, маршрутизація між віртуальними пристроями та створення багаторазових конвеєрів сеансів. Це справді чудово. Це просто важка відповідь на легке запитання.</p>

<h2>Де Audio Hijack стає надмірним</h2>

<p>Кілька речей, як правило, засмучують людей, які хотіли лише повзунок гучності:</p>

<ul>
<li><strong>Ціна.</strong> Audio Hijack коштує близько 79 доларів. Це справедливо для студії звукозапису в програмі; це багато для того, щоб закрити вкладку браузера.</li>
<li><strong>Він має продовжувати працювати.</strong> Його обробка окремої програми працює, лише коли програма відкрита та відповідний сеанс активний. Вийдіть, і ваші томи відновляться. Ви зберігаєте повноцінну аудіостанцію резидентом, щоб просто утримувати повзунок на місці.</li>
<li><strong>Сесійне мислення.</strong> Ви будуєте сесії за допомогою блоків і з’єднань. Потужний для зйомки, але це багато концептуальних накладних витрат, коли ваша мета — «цей додаток тихіше, той — голосніше».</li>
<li><strong>Інтерфейс глибокий.</strong> Ефекти, маршрутизація, лічильники, блочна проводка — багата поверхня, яку ви здебільшого проігноруєте, якщо ніколи нічого не записуватимете.</li>
</ul>

<blockquote>Емпіричне правило: якщо хочеш <em>запис або маршрут</em> аудіо, Audio Hijack заробляє свою ціну. Якщо ти тільки хочеш <em>баланс</em> аудіо між програмами, ви платите за семінар, коли вам потрібна ручка.</blockquote>

<h2>Простіша альтернатива: мікшер гучності на панелі меню</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> бере одну роботу, за якою більшість людей насправді прийшла, і робить тільки це. Він живе у вашому рядку меню. Натисніть піктограму, і ви отримаєте живий список усіх програм, які зараз відтворюють аудіо, кожна з яких має власний повзунок. Перетягніть Spotify на 30%, залиште свій дзвінок на 100%, повністю вимкніть звук Slack — готово, не потрібно будувати сеанс.</p>

<p>Що він охоплює:</p>

<ul>
<li><strong>Незалежний обсяг на додаток</strong> — кожне аудіоджерело отримує власний повзунок, який регулюється в реальному часі.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї шумної програми одним клацанням, не торкаючись нічого іншого.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — натисніть тихий додаток <em>вище</em> 100%, коли його власний максимум все ще занадто м’який. Це те, що системний слайдер ніколи не зможе зробити.</li>
<li><strong>Об'ємні профілі</strong> — зберегти цілий мікс (музика тиха, дзвінки голосні, звук сповіщень вимкнено) і викликати його одним клацанням миші для певного контексту.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично вимикає фоновий звук, коли починається щось більш важливе, щоб дзвінок або відео не були поховані під вашим списком відтворення.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між навушниками, колонками та іншими виходами з одного меню.</li>
</ul>

<h2>Практично: керування кожною програмою менш ніж за хвилину</h2>

<p>Вся суть різниці в налаштуваннях. За допомогою інструменту маршрутизації можна створити сеанс, додати вихідний блок, підключити його та підтримувати роботу програми. Ось по суті:</p>

<ul>
<li>встановити <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> від Mac App Store.</li>
<li>Відтворіть аудіо в кількох програмах, щоб вони з’явилися в списку.</li>
<li>Клацніть піктограму панелі меню та перетягніть повзунок кожної програми на смак.</li>
<li>За бажанням збережіть цей мікс як профіль або збільште надто тиху програму на 100%.</li>
</ul>

<p>Оскільки він поширюється через Mac App Store, він ізольований і встановлюється як будь-який звичайний додаток — ні <code>.dmg</code> для перетягування, без розширення ядра, без звукового драйвера, який потрібно затвердити в налаштуваннях безпеки, і нічого, що потребує повторного схвалення після оновлення macOS. Остання позиція має значення: мікшери на основі драйверів історично виходять з ладу під час оновлення ОС і вимагають перевстановлення компонента системного рівня. Додаток App Store із ізольованим програмним середовищем уникає всієї цієї категорії обслуговування.</p>

<h2>Який вибрати?</h2>

<p>Будьте чесними щодо роботи. Виберіть <strong>Audio Hijack</strong> якщо вам потрібно записати аудіо програми чи обладнання, застосувати ефекти в реальному часі або побудувати графіки маршрутизації між віртуальними пристроями. Це його домашня зона, і там він вартий кожного долара.</p>

<p>Виберіть спеціальний мікшер панелі меню, якщо вам дійсно потрібно «дозвольте мені встановити гучність кожної програми окремо». Ви витратите €14,99 один раз замість ~$79, пропустіть створення сеансу та отримаєте підсилення, вимкнення звуку, профілі та притуплення на панелі, яку ви відкриваєте з панелі меню. Немає функцій запису, до яких ви ніколи не торкатиметеся, жодної робочої станції, що працює у фоновому режимі, щоб утримувати повзунок на місці.</p>

<p>Більшість людей, які пробували Audio Hijack для балансування гучності, вирішували невелику проблему за допомогою великого інструменту. Якщо це ви, маленький інструмент підходить краще — і коштує трохи менше.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за 14,99 євро, одноразово — гучність для кожної програми, посилення, вимкнення звуку, профілі та автоматичне приглушення прямо з панелі меню.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Альтернатива Boom 3D: обсяг за програмою без роздування (Mac)",
    description: "Якщо ви використовували Boom 3D переважно для посилення аудіо, але насправді хотіли контролювати гучність окремо для кожної програми, SoundDial — це менша альтернатива Mac: незалежна гучність для кожної програми, вимкнення та посилення звуку для кожної програми, одноразова ціна, відсутність загальносистемного еквалайзера чи драйверів.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо ви використали Boom 3D, щоб збільшити гучність, але насправді хотіли керувати кожною програмою окремо, вам потрібен інший інструмент. Boom 3D — це загальносистемний підсилювач гучності та еквалайзер. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це спеціальний мікшер гучності для кожного додатка: окрема гучність, вимкнення звуку та посилення для кожного додатка, одноразова вартість 14,99 євро, без еквалайзера, без драйверів.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — альтернатива Boom 3D: обсяг за програмою без роздування (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Що Boom 3D насправді робить (і не робить)</h2>
<p>Boom 3D побудовано навколо трьох речей: загальносистемного посилення гучності, 31-смугового еквалайзера та 3D-ефектів «об’ємного звуку». Це стосується тих <em>все</em> ваш Mac грає одразу. Це справді корисно, якщо ваша мета — гучніший ноутбук або крива баса, яка вам подобається в усіх напрямках.</p>
<p>Boom 3D не створений для того, щоб розглядати програми як незалежні канали. Немає чіткого способу сказати: «Spotify на 40%, мій відеодзвінок на 100%, а на цій вкладці браузера звук вимкнено». Його повзунок переміщує весь мікс. І оскільки він встановлює аудіодрайвер, який знаходиться на шляху сигналу, він торкається вашої системи на нижчому рівні, ніж утиліта ізольованого програмного середовища. Він також позиціонується як платний продукт із циклами оновлення, а не як маленький одноразовий інструмент.</p>
<blockquote><p>Звичайна історія: люди встановлюють Boom 3D, щоб зробити одну тиху програму голоснішою, а потім розуміють, що справжня проблема полягає в тому, що macOS взагалі не має мікшера гучності для кожної програми.</p></blockquote>

<h2>Прогалина: macOS не має мікшера гучності</h2>
<p>Це дивує людей із Windows. Windows вже багато років має мікшер гучності для кожного додатка — клацніть правою кнопкою миші динамік і встановіть рівень кожного додатка окремо. macOS просто не доставляє це. Ви отримуєте один головний том і будь-який внутрішній повзунок, який відкриває кожна програма. Немає способу на рівні ОС збалансувати Slack і вкладку YouTube проти гри.</p>
<p>Отже, коли музична програма заглушає ваш дзвінок, ваші єдині рідні варіанти є грубими: вимкніть майстер (що заглушає все) або копіться у власних налаштуваннях кожної програми, сподіваючись, що вона має регулятор гучності. Boom 3D також не заповнює цю прогалину — він робить голоснішим весь мікс, а не кожну програму.</p>

<h2>Куди підходить SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це відсутній змішувач. Він розташований у панелі меню та надає кожній запущеній програмі окремий рядок із власним повзунком. Це основна відмінність від Boom 3D: замість одного глобального ефекту ви отримуєте контроль над джерелом.</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — встановіть Spotify на 30%, а ваш відеодзвінок залишиться на 100%.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — миттєво вимкніть звук однієї шумної програми, не торкаючись нічого іншого.</li>
<li><strong>Прискорення для кожної програми</strong> — якщо вам сподобався трюк Boom 3D гучніше, ніж 100%, SoundDial збереже це, але націлено на одну програму, а не на всю систему. Тихі додатки самі по собі перевищують звичайну межу.</li>
<li><strong>Об'ємні профілі</strong> — збережіть макет мікшера (наприклад, «ігри», «зустріч», «музика») і викликайте його одним клацанням миші замість того, щоб щоразу перебалансовувати повзунки.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично вимикає фоновий звук, коли починається щось важливе, щоб дзвінок або підказка до гри не були поховані під музикою.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між навушниками, колонками та іншими виходами з одного меню.</li>
</ul>
<p>Чого SoundDial навмисно не робить, так це решту функцій Boom 3D. Немає 31-смугового еквалайзера, обробки штучного об’ємного звучання, загальносистемного ланцюжка ефектів. Якщо вам потрібен еквалайзер рівня майстерності, Boom 3D або спеціальний аудіопакет — це правильний вибір. Якби те, заради чого ви насправді відкривали Boom 3D <em>обсяг</em>, ця площа - це роздуття, за яке ви платите.</p>

<h2>Буст, без драйвера</h2>
<p>Питання про «посилення» заслуговує прямої відповіді, оскільки зазвичай саме тому користувачі Boom 3D шукають альтернативи. Збільшення Boom 3D є глобальним і базується на драйверах. Збільшення SoundDial є окремим додатком і працює в моделі Apple ізольованого програмного середовища — воно поширюється через Mac App Store, тому немає окремого інсталятора, драйвера на рівні ядра та залишкових системних компонентів, які можна видалити пізніше. Ви отримуєте результат «зробіть цю тиху програму голоснішою», не передаючи водієві керування всім аудіошляхом.</p>

<h2>Ціна: одноразова або постійна</h2>
<p>Boom 3D — це платна програма з власною моделлю оновлення та ліцензування, а ціни залежать від платформи та версії. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це одноразова покупка за 14,99 євро — купіть один раз і збережіть, без підписки та повторної покупки для кожної версії, щоб мікшер працював. Для утиліти, яку ви залишатимете працювати на панелі меню щодня, фіксована ціна має тенденцію старіти краще, ніж продукт, який ви повинні постійно купувати знову.</p>

<h2>Який вибрати?</h2>
<ul>
<li><strong>Виберіть Boom 3D</strong> якщо вам справді потрібен серйозний еквалайзер і загальносистемні аудіоефекти, і ви не проти аудіодрайвера в міксі.</li>
<li><strong>Виберіть SoundDial</strong> якщо ви хочете те, що користувачі Windows сприймають як належне — справжній мікшер гучності для кожної програми — плюс цільове посилення, профілі та автоматичне приглушення за одноразовою ціною та без встановлення драйверів.</li>
</ul>
<p>Більшість людей, які відбиваються від Boom 3D, потрапляють у другу групу. Вони не хотіли налаштовувати частоти; вони хотіли, щоб браузер був тихішим, ніж дзвінок. Це саме те, для чого створено SoundDial.</p>

<p><strong>Хочете контролювати гучність окремо для кожного додатка на своєму Mac без роздування еквалайзера чи підписки?</strong> <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> — 14,99 євро один раз, ізольоване програмне середовище, без драйверів, кожна програма отримує власний слайдер.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "Як вимкнути звук усього, крім однієї програми, на вашому Mac",
    description: "macOS не має мікшера гучності для кожної програми, тому для вимикання кожної програми, крім однієї, потрібен помічник. Ось як почути лише ваш дзвінок, трансляцію чи гру, а звук усього іншого залишатиметься вимкненим.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованого способу вимкнення звуку окремих програм, тому, щоб слухати лише одну програму, потрібен мікшер гучності для кожної програми. встановити <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, відкрийте мікшер панелі меню, вимкніть усі програми, крім тієї, яку ви хочете почути, і ця програма продовжує грати, а решта миттєво замовкають.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Як вимкнути звук усього, крім однієї програми на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому macOS не може зробити це самостійно</h2>
<p>Windows має мікшер гучності вже більше десяти років: клацніть правою кнопкою миші значок динаміка, і кожна запущена програма отримає власний повзунок. macOS ніколи не відправляв це. Клавіші гучності на вашому Mac керують лише одним — основним рівнем вихідного сигналу. Коли ви вимикаєте систему, все разом виходить з ладу. Коли ви вимикаєте звук, усе вимикається.</p>
<p>Це добре, доки у вас не буде шуму п’яти речей одночасно. Ви розмовляєте по відеодзвінку, але на вкладці веб-переглядача автоматично відтворюється реклама, Spotify все ще працює, у фоновому режимі пінгується гра, а Slack лунає дзвінок. Ваші єдині рідні варіанти – це вийти з додатків, вимкнути їх один за одним у власних налаштуваннях кожного додатка (якщо він взагалі має таку опцію) або витягнути навушники. Нічого з цього не дає вам сказати «залиште це, заглушіть решту».</p>

<h2>Простий спосіб: заглушити решту за допомогою мікшера</h2>
<p>Мікшер для кожного додатка розташований між вашими додатками та пристроєм виведення та надає кожній програмі власний контроль гучності та вимкнення звуку. Після запуску одного додатка ізоляція одного додатка займає кілька секунд:</p>
<ul>
<li>Відкрийте мікшер із панелі меню. Ви побачите живий список усіх додатків, які наразі створюють аудіо.</li>
<li>Знайдіть єдину програму, яку ви хочете почути, свій дзвінок, свою трансляцію, свою гру.</li>
<li>Вимкніть усе інше. Торкніться перемикача вимкнення звуку поруч із програмою або перетягніть її повзунок до нуля.</li>
<li>Ось і все. Одна програма, яку ви залишили в спокої, продовжує грати на повній гучності, а решта мовчать.</li>
</ul>
<p>с <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, кожна програма у списку має власний повзунок і власну кнопку вимкнення звуку, тому це кілька кліків. Нові програми, які починають відтворюватися пізніше, з’являються автоматично, тому, якщо звук сповіщення намагається проникнути, ви можете вимкнути його на місці, не торкаючись програми, на якій ви вибрали фокус.</p>

<blockquote>Хитрість полягає в тому, що вимкнення звуку «всього, крім одного» є просто зворотним вимкненням звуку однієї програми. Ви не заглушаєте свій Mac, ви заглушаєте шум навколо того, що вам дійсно важливо.</blockquote>

<h2>Збережіть його як профіль, щоб не переробляти</h2>
<p>Якщо це налаштування, до якого ви часто тягнетеся, робити це вручну кожного разу застаріє. Скажімо, ви хочете, щоб ваша програма для викликів завжди була голосною, а все інше вимкнено під час зустрічей, або ви хочете, щоб ваш потік був у центрі, а ігри та браузери залишалися тихими. Профіль гучності зберігає ці точні налаштування для кожної програми та повторно застосовує їх одним клацанням миші.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> дає змогу зберігати такі профілі, як «Зустріч» або «Лише потік», а потім перемикатися на них, коли вони вам знадобляться. Налаштуйте його один раз, і ізоляція вашого єдиного додатка перетвориться на одну дію на панелі меню замість роботи з п’ятьма повзунками.</p>

<h2>Розумніша версія: автоматичне приглушення звуку замість жорсткого вимкнення звуку</h2>
<p>Іноді ви не хочете, щоб інші програми повністю зникли, ви просто хочете, щоб вони зникли, коли починається щось важливіше. Це автоматичне пригнічення. Коли ваша пріоритетна програма відтворюється, фонові програми автоматично опускаються до низького рівня, а потім повертаються, коли він зупиняється.</p>
<p>Це ідеальний варіант для дзвінків і потоків. Коли хтось починає говорити, ваша музика слабшає, щоб ви могли її почути, а коли розмова закінчується, музика відновлюється сама. Ви отримуєте результат «чути одну програму чітко» без ручного вимикання та вмикання звуку кожного разу, коли ситуація змінюється. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> включає автоматичне приглушення поряд з ручним мікшером, тож ви можете вибрати жорстке відключення звуку для повної тиші або приглушення для м’якшого фону.</p>

<h2>Підвищення єдиної програми, яку ви зберегли</h2>
<p>Існує бонус до ізоляції окремої програми: ви також можете зробити її гучнішою, ніж зазвичай дозволяє ваш Mac. Деякі програми, особливо тихі відеодзвінки або погано освоєні потоки, ледве чутні навіть на максимальній гучності. Прискорення для кожної програми підвищує окрему програму вище 100%, не запускаючи вихід системи, що лише посилить роботу програм, які ви вже вимкнули.</p>
<p>Отже, повний крок такий: вимкніть шум, залиште одну програму, а якщо ця програма надто тиха, посиліть її. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> обробляє всі три в одному вікні змішувача.</p>

<h2>Те, на що ти не підписуєшся</h2>
<p>Загальне занепокоєння щодо аудіоінструментів Mac полягає в тому, що для них потрібні розширення ядра, віртуальні аудіодрайвери або тіньові інсталятори, завантажені з випадкового веб-сайту. Це законне занепокоєння, і тому деякі люди повністю уникають цих програм.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> знаходиться на Mac App Store, в ізольованому програмному середовищі та встановлюється як будь-яка звичайна програма, без драйверів, без DMG, без системних розширень для затвердження. Це одноразова покупка на 14,99 євро, а не підписка, тому ви платите один раз і залишаєте її. Це важливо для того, що ви залишатимете працювати на панелі меню цілий день.</p>

<h2>Короткий підсумок</h2>
<ul>
<li>macOS не має вбудованого контролю гучності для кожної програми, тому для цього вам потрібен мікшер.</li>
<li>Відкрийте мікшер, залиште одну програму, вимкніть звук або обнулить усе інше.</li>
<li>Збережіть його як профіль для дзвінків або потоків, які ви часто робите.</li>
<li>Використовуйте автоматичне притуплення, якщо хочете, щоб фонові програми замовкли, а не припинили роботу.</li>
<li>Збільште свою збережену програму, якщо вона сама по собі занадто тиха.</li>
</ul>

<p>Хочете почути лише те, що має значення, і заглушити решту? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і налаштуйте свій перший профіль із вимкненням усього іншого менш ніж за хвилину.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Зберігайте різну гучність для динаміків і навушників на Mac",
    description: "macOS забуває мікс гучності на рівні програми, коли ви перемикаєтеся між динаміками та навушниками. Ось чому це відбувається, обмеження вручну та як це виправити обсяг пам’яті для кожної програми.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS фактично запам’ятовує окремий системний том для кожного пристрою виводу, але забуває ваш баланс на рівні програми щоразу, коли ви перемикаєтеся. Таким чином, навушники та динаміки зберігають власний загальний рівень, але в той момент, коли ви від’єднуєтеся, одна програма запускається, а інша зникає. Виправлення полягає в тому, що пам’ять для кожного додатка підтримує перемикання пристроїв, для чого macOS не має вбудованого інструменту.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Зберігайте різну гучність для динаміків і навушників на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Що macOS пам'ятає, а що ні</h2>

<p>Існує поширена думка, що macOS однаково обробляє кожен пристрій виведення. Це не так. Кожен пристрій виведення зберігає власний системний том. Встановіть динаміки MacBook на 30%, а AirPods на 80%, і macOS збереже ці два числа окремо. Підключіть, від’єднайте, підключіть знову, і кожен пристрій повернеться туди, де ви його залишили.</p>

<p>Отже, чому досвід все ще здається зламаним? Оскільки ця пам’ять зупиняється на єдиному глобальному повзунку. macOS має лише один регулятор гучності для всього, що відтворюється на певному пристрої. Він не пам’ятає, наскільки гучними були окремі програми. Коли ви перемикаєтеся з динаміків на навушники, баланс між Spotify, дзвінком Zoom і вкладкою YouTube не зберігається, оскільки такого балансу ніколи не існувало. Кожна програма має один повзунок.</p>

<p>Результатом є розчарування, яке люди описують як «різна гучність динаміків і навушників». Те, що вони зазвичай хочуть, — це не просто різний майстер-рівень для кожного пристрою, а мікс, який запам’ятовується: тиха музика, гучні дзвінки, сповіщення вимкнуто, і цей мікс залишається незмінним, незалежно від того, чи користуються вони динаміками чи навушниками.</p>

<h2>Обхідні шляхи вручну та їх недоліки</h2>

<p>Ви можете досягти цього частково за допомогою вбудованих інструментів, і варто знати стелю, перш ніж тягнутися до чогось іншого.</p>

<ul>
<li><strong>Встановіть гучність системи кожного пристрою один раз.</strong> Відтворіть аудіо через динаміки, установіть рівень, потім перемкніть вихід на навушники та встановіть цей рівень. macOS зберігає обидва. Це обробляє головний обсяг для кожного пристрою, але нічого для програми.</li>
<li><strong>Використовуйте обсяг для кожної програми, якщо програма пропонує це.</strong> Spotify, VLC і більшість браузерів мають власний внутрішній том. Ви можете обрізати гучну програму в самій програмі. Заковика: це налаштування живе в програмі, а не в пристрої, тому воно не змінюється, коли ви перемикаєтеся на навушники, і більшість програм (Slack, Zoom, системні сповіщення, пошта) взагалі не мають такого контролю.</li>
<li><strong>Перемкніть вихід із Центру керування або панелі меню.</strong> Клацніть піктограму гучності на панелі меню, утримуючи клавішу Option, щоб швидко переходити між пристроями. Швидко, але він лише переміщує головний рівень, не відновлює суміш для кожної програми.</li>
</ul>

<p>Вони дають вам головний обсяг для кожного пристрою. Жоден із них не дає вам запам’ятовуваного балансу для кожної програми, який стежить за вами на всіх пристроях. Саме ця прогалина є причиною роздратування, і вона є структурною: ОС просто не має мікшера для кожного додатка, на відміну від Windows, який постачав його протягом багатьох років.</p>

<h2>Обсяг пам’яті для кожної програми та чому перемикання пристроїв є справжньою проблемою</h2>

<p>Більш глибоке виправлення полягає в тому, щоб надати кожній програмі власний обсяг і зберегти ці налаштування. Ось що таке мікшер для кожного додатка <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> створено для. Він знаходиться на панелі меню, містить список усіх програм, які наразі відтворюють звук, і надає кожному з них окремий повзунок, перемикач звуку та навіть посилення понад 100% для тихих програм.</p>

<p>Частина, яка має значення для проблеми динаміки проти навушників: ці рівні запам’ятовуються. Встановіть свою музику на 40%, дзвінки на 90%, а програму для спілкування вимкніть <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> зберігає цю суміш. Коли ви від’єднуєте навушники та повертаєтеся до динаміків, ви не балансуєте три програми вручну щоразу.</p>

<p>Профілі об’єму сприяють цьому. Ви можете зберегти іменований набір рівнів для кожної програми та викликати його в один клік, тому мікс «навушники, зосереджена робота» та мікс «спікери, зустрічі» є окремим вибором, а не скиданням вручну.</p>

<blockquote><p>Ментальні зміни: перестаньте думати про один головний слайдер, який ви постійно перетягуєте, і почніть думати про збережену суміш для кожної ситуації. Перемикання пристроїв перестає бути проблемою відновлення балансу.</p></blockquote>

<h2>Швидке перемикання виходу без втрати міксу</h2>

<p>Комутаційні пристрої повинні бути швидкими і неруйнівними. На тій самій панелі панелі меню ви можете змінити вихідний пристрій, тож переходити від динаміків до навушників можна одним клацанням миші, а ваші рівні для кожної програми з’являються разом, а не згортаються до єдиного глобального числа.</p>

<p>Пов’язаною функцією, про яку варто згадати, є автоматичне приглушення: коли звук надходить на ваш мікрофон (ви починаєте говорити або починається дзвінок), інші програми автоматично вимикаються, щоб вас було почуто, а потім повертаються до встановленого рівня. Це той самий принцип, який застосовується до уваги, а не до пристроїв, ще одна річ, яку macOS не зробить сам по собі.</p>

<h2>Як це налаштувати</h2>

<ul>
<li>встановити <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> від Mac App Store. Це пісочниця, тому немає ні драйвера, ні DMG, ні розширення ядра, яке потрібно затверджувати.</li>
<li>Відтворюйте аудіо в програмах, якими ви найчастіше користуєтеся, щоб вони відображалися в мікшері.</li>
<li>Встановіть рівень кожного додатка, вимкніть усе, що вам не потрібно, і підвищте рівень тихості.</li>
<li>Збережіть це розташування як профіль, наприклад, один налаштований для навушників, а інший для динаміків.</li>
<li>Коли ви змінюєте пристрій, викличте відповідний профіль або просто дозвольте перенести збережені рівні для кожної програми.</li>
</ul>

<p>Чесне резюме: macOS запам’ятовує гучність на вихідний пристрій на головному рівні, але він ніколи не запам’ятає ваш мікс для кожного додатка, оскільки він не має мікшера для кожного додатка. Якщо вашою справжньою метою є стабільний баланс між музикою, дзвінками та сповіщеннями, який зберігається після кожного перемикання між динаміками та навушниками, вам потрібна пам’ять для кожної програми поверх ОС.</p>

<p>Хочете, щоб динаміки та навушники зберігали власний мікс без повторного налаштування кожної програми? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> за одноразову суму 14,99 євро, без підписки, без драйверів.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control Припинено? Найкраща заміна томів Mac для кожної програми (2026)",
    description: "Програмне забезпечення Sound Control від Static Z припинено та працює на сучасному macOS. Ось чому він перестав працювати, що він зробив і найкращий мікшер гучності для кожної програми, на який можна перейти у 2026 році.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Програмне забезпечення Sound Control від Static Z припинено та більше не продається чи оновлюється, і воно все частіше не працює на сучасному macOS, оскільки покладається на аудіодрайвер на рівні ядра, який Apple заблокувала. Якщо сьогодні вам потрібен обсяг для однієї програми, найчистіша заміна — це <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер Mac App Store у пісочниці без драйверів.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Знято з виробництва? Найкраща заміна томів Mac для кожної програми (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Що насправді зробив Sound Control</h2>
<p>Sound Control протягом багатьох років був відповіддю на справжню прогалину macOS: на Mac досі немає вбудованого мікшера гучності для кожної програми. Windows має один у своєму мікшері гучності ще з Vista, але macOS дає вам лише один головний повзунок. Sound Control заповнив цю діру охайною панеллю панелі меню, яка дозволила вам:</p>
<ul>
<li>Встановіть окремий рівень гучності для кожної запущеної програми.</li>
<li>Вимкніть звук окремих програм, не торкаючись решти звуку системи.</li>
<li>Збільште тихі програми вище 100 відсотків.</li>
<li>Застосуйте еквалайзер і баланс для кожної програми.</li>
<li>Направляйте аудіо та закріплюйте програми на певні пристрої виводу.</li>
</ul>
<p>Для всіх, у кого коли-небудь був виклик Zoom під час шепоту фонової вкладки YouTube, цей контроль за програмою був кардинальним. Він став основним продуктом на багатьох машинах досвідчених користувачів Mac.</p>

<h2>Чому він перестав працювати</h2>
<p>Тут має значення чесна технічна історія, оскільки вона пояснює, чому цю помилку не можна просто виправити. Sound Control працював шляхом встановлення системного аудіодрайвера — розширення ядра (kext), яке вставлялося в аудіоконвеєр macOS, щоб воно могло перехоплювати та змінювати вихід кожного додатка. Цей глибокий зачіп — це саме те, що зробило можливими функції еквалайзера та посилення.</p>
<p>Починаючи з macOS 10.15 Catalina та прискорюючись через Big Sur і перехід Apple Silicon, Apple почала припиняти розширення ядра на користь альтернатив простору користувача. На Apple Silicon Mac для завантаження kext сторонніх розробників потрібно знизити рівень безпеки системи в режимі відновлення, і Apple чітко повідомила, що застарілі аудіо kext знаходяться на запозиченому часі. Static Z Software зрештою припинила продаж і розробку Sound Control. Результат: в останніх версіях macOS інсталяції не вдаються, збої звуку або драйвер просто відмовляється завантажуватися без зниження рівня безпеки, якого більшість людей справедливо не бажають робити.</p>
<blockquote>Це не нехтування з боку розробника. Це зміна рівня платформи. Apple закрила двері перед низькорівневим аудіодрайвером Sound Control, навколо якого було створено Sound Control, і жодне оновлення не може повністю відкрити його.</blockquote>

<h2>Що змінилося на сучасному macOS</h2>
<p>Apple додала одну важливу річ: Core Audio тепер пропонує Tap API (введений у macOS 14.2 Sonoma), який дозволяє додаткам захоплювати та обробляти аудіо для кожного процесу з простору користувача — без kext, без зниження рівня безпеки, без перезавантаження в Recovery. Це санкціонований сучасний шлях для аудіо за програмою, і саме на цьому має бути побудований поточний мікшер. Компроміс чесний: натискання простору користувача більш обмежені, ніж старий драйвер ядра, тому вам слід очікувати чистої гучності для кожної програми, вимкнення звуку та посилення, а не повного параметричного еквалайзера Sound Control для кожної програми, який пропонується.</p>

<h2>Найкраща заміна: SoundDial</h2>
<p>Якщо ви бажаєте, щоб ядро того, що зробив Sound Control — незалежний обсяг для кожної програми — на Mac, ви могли підтримувати безпеку й оновлення, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це найближчий варіант чистої міграції у 2026 році. Це мікшер гучності на панелі меню для кожної програми, створений для сучасного аудіо стеку macOS. Що переходить із робочого процесу Sound Control:</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — один повзунок для кожної запущеної програми, прямо на панелі меню.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — заглушити одну програму, поки всі інші продовжують відтворюватися.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — перемістіть тиху програму вище звичайної стелі.</li>
<li><strong>Об'ємні профілі</strong> — зберігати налаштування мікшера для різних контекстів (дзвінки, музика, ігри) і перемикатися між ними.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично зменшує гучність фонової програми, корисно, коли ви починаєте говорити або надходить дзвінок.</li>
<li><strong>Швидке перемикання виходу</strong> — переходьте між колонками, навушниками та іншими пристроями, не занурюючись у налаштування системи.</li>
</ul>
<p>Практичні відмінності, важливі для міграції: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> поставляється через Mac App Store, знаходиться в ізольованому програмному середовищі та не встановлює ні драйверів, ні DMG. Це означає, що немає розширення ядра, яке потрібно затверджувати, немає режиму відновлення та немає зниження рівня безпеки вашого Mac — саме тих проблемних моментів, які вбили Sound Control. Це одноразова покупка на суму 14,99 євро, а не підписка.</p>

<h2>Як перемикатися, крок за кроком</h2>
<ul>
<li><strong>Видаліть Sound Control чисто.</strong> Оскільки він встановив драйвер, скористайтеся власною програмою видалення, якщо вона все ще працює, або видаліть компоненти аудіодрайвера, перш ніж інсталювати щось нове. Два конкуруючих аудіоперехоплення можуть викликати збої.</li>
<li><strong>Встановіть SoundDial з App Store.</strong> Перезавантаження чи зміни безпеки не потрібні.</li>
<li><strong>Надайте дозвіл на звук, який він запитує.</strong> Це те, що дозволяє читати та контролювати виведення для кожної програми на сучасному macOS.</li>
<li><strong>Відкрийте панель меню та встановіть рівні.</strong> Ваші запущені програми відображаються з окремими повзунками; відрегулюйте, вимкніть або посиліть за потреби.</li>
<li><strong>Зберегти профіль.</strong> Якщо у вас були улюблені налаштування Sound Control, відтворіть їх як профілі, щоб можна було перемикатися в один клік.</li>
</ul>

<h2>Чесні очікування</h2>
<p>Якщо вашою єдиною причиною використання Sound Control була гучність, вимкнення звуку та посилення для кожної програми, сучасний мікшер із ізольованим програмним середовищем покриває вас повністю. Якщо ви сильно покладалися на його еквалайзер для кожної програми, знайте, що глибокий еквалайзер був прив’язаний до старої моделі драйвера, і це функція, яку найважче відтворити чисто за поточними правилами Apple. Встановіть відповідні очікування, і ви не будете здивовані.</p>

<p>Готові відновити обсяг кожного додатка без головного болю драйверів? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> — одноразова 14,99 євро, пісочниця, без підписки, без драйверів.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny зник — сучасний Mac Volume App на заміну",
    description: "SoundBunny від Prosoft припинено. Ось поточний мікшер гучності macOS, який активно підтримується для кожної програми, щоб замінити його — а також те, як перенести налаштування аудіо для кожної програми без драйверів ядра.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо SoundBunny перестав працювати або більше не продається, це сучасна заміна <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер гучності панелі меню для кожної програми, створений для поточного macOS. Він дає вам ту саму основну роботу — незалежну гучність, вимкнення звуку та підсилення для кожної програми — як одноразова покупка Mac App Store за 14,99 євро без драйвера ядра, DMG або підписки для керування.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny зник — сучасний Mac Volume App на заміну" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Що сталося з SoundBunny?</h2>
<p>SoundBunny — це утиліта томів Prosoft Engineering для кожної програми для macOS. Це дозволяє встановлювати різний рівень гучності для кожної запущеної програми прямо з панелі меню — тиха музика, голосний дзвінок, браузер десь посередині. Протягом багатьох років це був один із небагатьох інструментів, які заповнювали прогалину, яку Apple ніколи не закривала.</p>
<p>Проблема в тому, що SoundBunny є застарілим програмним забезпеченням. Він не встигає за глибокими змінами, які Apple внесла в аудіо та безпеку macOS — Apple Silicon, посилене середовище виконання, жорсткіші правила розширення системи та видалення старіших аудіоперешкод. Коли така утиліта перестає отримувати оновлення, вона зрештою ламається: не запускається, втрачає контроль над потоками додатків після оновлення ОС або її просто неможливо встановити на сучасному Mac. Якщо ви знаходитесь саме там, ви не робите нічого поганого. Додаток позаду, а не ви.</p>

<h2>Навіщо macOS взагалі потрібен сторонній мікшер</h2>
<p>Ось чесна частина: це справжня прогалина в macOS, а не помилка, яку ви можете виправити в налаштуваннях. Windows постачає Volume Mixer для кожного додатка більше десяти років. У macOS такого ніколи не було. Системний повзунок гучності та налаштування звуку керують вашими <em>вихідний пристрій</em> загалом — кожна програма має однаковий майстерний рівень. Немає вбудованого способу сказати «тримати Safari на 40%, але Zoom на 100%».</p>
<p>Ось чому існували такі інструменти, як SoundBunny, і чому заміна все ще потрібна сьогодні. Потреба не зникла, коли з’явився додаток — просто Apple досі не вирішила її.</p>

<h2>Сучасна заміна: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це мікшер гучності для кожного додатка, який живе у вашому рядку меню та виконує те, на що покладалися користувачі SoundBunny, побудований на основі сьогоднішнього macOS замість учорашнього. Перекриття функцій охоплює основні елементи:</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — один повзунок на запущену програму, точно SoundBunny ментальна модель.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї шумної програми, не торкаючись усього іншого.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — натисніть тихий додаток <em>вище</em> 100%, коли відео або дзвінок записується занадто низько. SoundBunny не міг надійно посилити минулий системний максимум на сучасному macOS; Boost є справжнім оновленням.</li>
<li><strong>Об'ємні профілі</strong> — зберігайте набір рівнів для кожної програми (мікс «робочий», «ігровий» мікс) і перемикайтеся між ними замість того, щоб натискати повзунки по одному.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично зменшує гучність фонової програми, коли вмикається інше аудіоджерело (наприклад, ваш мікрофон під час виклику).</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між динаміками, навушниками та іншими виходами з одного меню.</li>
</ul>

<h2>Як насправді виглядає міграція</h2>
<p>Немає кроку імпорту — рівні гучності для кожної програми — це не файл, який ви переносите, — але перемикання відбувається швидко:</p>
<ul>
<li><strong>Видаліть SoundBunny належним чином.</strong> Закрийте програму, а потім видаліть її. Якщо він встановив будь-який допоміжний або елемент для входу, видаліть його також, щоб дві утиліти не сварилися за ті самі аудіопотоки.</li>
<li><strong>Встановіть SoundDial з Mac App Store.</strong> Він знаходиться в ізольованому програмному середовищі та поширюється через магазин, тому немає DMG для монтування та попередження «невідомий розробник». Одна покупка, прив’язана до вашого Apple ID.</li>
<li><strong>Надайте доступ до аудіо під час першого запуску.</strong> macOS попросить дозволу для SoundDial переглядати звук програми. Це сучасний, санкціонований шлях, який пропонує Apple — без розширення ядра, без перезавантаження, без зниження безпеки системи. Надайте це, і ваші запущені програми відображатимуться як повзунки.</li>
<li><strong>Перебудуйте свій мікс.</strong> Налаштуйте загальні програми, а потім збережіть це розташування як профіль, щоб вам ніколи не довелося його переробляти.</li>
</ul>

<h2>Практичні відмінності від SoundBunny</h2>
<p>Найважливіша відмінність полягає в тому, що <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це поточне програмне забезпечення. Він працює на Apple Silicon, використовує підтримувані аудіо API від Apple і є додатком Mac App Store, що означає, що оновлення надходять через магазин і створено таким чином, щоб витримувати оновлення ОС, а не ламатися. Перебування в пісочниці також означає, що він не може вийти за межі своєї смуги, що заспокоює те, що знаходиться між вашими програмами та динаміками.</p>
<p>Кілька чесних застережень, щоб очікування виправдалися. Оскільки SoundDial працює в аудіосистемі Apple, керування найкращим для стандартних програм, які направляють через звичайний системний вихід. Деяке програмне забезпечення відтворює аудіо через власний шлях або ексклюзивний пристрій, і жоден мікшер панелі меню (включно з SoundBunny) не може повністю керувати ними. А обсяг для кожної програми — це, за своєю суттю, програмний рівень поверх macOS; це не апаратний мікшер. У цих реальних межах він виконує роботу, яку раніше виконував SoundBunny.</p>

<blockquote>Якщо ви перейшли на Mac з Windows, очікуючи мікшера гучності для кожної програми, це інструмент, який заповнює цю прогалину — і тепер він фактично підтримується.</blockquote>

<p>SoundBunny добре пробіг, але це спадщина. Якщо вам потрібна гучність для кожної програми, вимкнення звуку та посилення на сучасному Mac, <a href="https://apps.apple.com/app/id6772792641">отримати SoundDial на Mac App Store</a> — €14,99 один раз, без підписки, без драйверів.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Альтернатива Boom 2 для Mac: обсяг за програму без збільшення продажів Boom 3D",
    description: "Boom 2 є застарілим і постійно підштовхує вас до Boom 3D. Якщо вам просто потрібен обсяг для кожної програми та просте збільшення на сучасному macOS, ось цілеспрямована альтернатива та те, як вона працює.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Якщо вам сподобався Boom 2 для посилення всієї системи, але ви хочете простого <strong>за програму</strong> том на поточному Mac, чесна відповідь полягає в тому, що Boom 2 є застарілим і більше не є правильним інструментом. Цілеспрямована альтернатива <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, мікшер панелі меню, який надає кожній програмі власний повзунок гучності, вимкнення звуку та посилення, за 14,99 євро один раз, без переходу на більший пакет.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — альтернатива Boom 2 для Mac: обсяг за програмою без збільшення продажів Boom 3D" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому Boom 2 більше не підходить</h2>
<p>Boom 2 був улюбленим додатком з певної причини: він збільшив загальну гучність вашого Mac понад системний максимум і додав еквалайзер. Він зробив це для всієї системи, а не для окремої програми. У 2015 році це було добре. У 2026 році виникли дві проблеми.</p>
<p>По-перше, це спадок. Global Delight чітко спрямував свою енергію на Boom 3D, і якщо ви відкриєте сторінку продукту Boom 2, то майже одразу побачите, що вас підштовхнуть до новішої та дорожчої програми. Boom 2 все ще існує, але це сходинка, яку постачальник використовує для продажу Boom 3D, а не продукт, який отримує активну любов.</p>
<p>По-друге, і ще важливіше: Boom 2 ніколи не був мікшером гучності для окремої програми. Він піднімає та формує один головний вихід. Якщо ваш справжній біль полягає в тому, що пінг Slack голосніший за вашу музику, або вкладка браузера заглушає виклик, Boom 2 не вирішить це. Це робить все разом голоснішим. Це інша робота.</p>

<h2>Що насправді означає «обсяг на додаток» на macOS</h2>
<p>Ось чесний контекст, який пропускають більшість альтернативних підсумків: macOS взагалі не має вбудованого мікшера гучності для кожної програми. У Windows був такий протягом багатьох років — клацніть правою кнопкою миші динамік, відкрийте мікшер гучності та встановіть для Chrome значення 40%, а для Spotify — 80%. Apple ніколи не поставляла це. Клавіша гучності macOS переміщує лише один головний рівень.</p>
<p>Тому, коли ви шукаєте «альтернативу Boom 2», ви часто насправді шукаєте не більш гучний Mac, а контроль за програмою Windows, який користувачі сприймають як належне. Це справжня прогалина в операційній системі, а не те, що Boom 2 чи будь-яка окрема програма забули створити.</p>

<h2>Куди підходить SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> створено спеціально для цього розриву. Він знаходиться на панелі меню та містить список програм, які зараз відтворюють аудіо, кожна з яких має власний повзунок. Ви встановлюєте рівні для кожної програми замість того, щоб штовхати один основний елемент керування й сподіватися на краще.</p>
<p>Що він робить:</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — тихий браузер, зберігайте музику там, де ви її хочете, без глобального компромісу.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї шумної програми, не торкаючись нічого іншого.</li>
<li><strong>Прискорення для кожної програми</strong> — підштовхнути окрему програму до звичайної межі, коли відео чи дзвінок записуються надто тихо. Це те, чого шанувальники Boom 2 зазвичай пропускають, за винятком того, що тут він спрямований на одну програму, а не на всю систему.</li>
<li><strong>Об'ємні профілі</strong> — зберігайте макети, як-от «фокус», «зустріч» або «гра» та перемикайтеся одним клацанням миші.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично опускає інші програми, коли ви починаєте говорити, корисно для дзвінків і запису.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між динаміками, навушниками та іншими виходами з одного меню.</li>
</ul>

<h2>Як це налаштувати</h2>
<p>Робочий процес короткий:</p>
<ul>
<li>встановити <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> від Mac App Store — ні DMG, ні драйвера, ні перезавантаження.</li>
<li>Клацніть піктограму панелі меню, щоб побачити кожну програму, яка наразі видає звук.</li>
<li>Перетягніть повзунок кожної програми на потрібний рівень; за потреби окремо вимкніть або посиліть звук.</li>
<li>Збережіть упорядкування як профіль, якщо ви захочете використати його пізніше.</li>
</ul>
<p>Оскільки він постачається через App Store, він ізольований і встановлюється чисто. Це варто згадати, тому що деякі старіші аудіоінструменти покладалися на розширення ядра або віртуальні аудіодрайвери — такі речі, яким сучасний macOS все більше протистоїть. SoundDial не просить вас встановити драйвер або знизити будь-які налаштування безпеки.</p>

<h2>Чесне обмеження</h2>
<p>Підвищення ефективності кожного додатка є реальним, але не магічним. Якщо вихідний звук програми справді тихий або погано записаний, його посилення підвищує рівень шуму разом із сигналом, тому дуже тихий матеріал може звучати шипляче, якщо натиснути сильно. Це фізичне обмеження підсилення, а не недолік будь-якої конкретної програми — прискорення системи Boom 2 мало такий самий компроміс. Розглядайте підсилення як запас для практичних випадків, а не як порятунок для зламаного звуку.</p>

<h2>Boom 2 проти сфокусованого міксера</h2>
<p>Якщо вам сподобалася в Boom 2 загальносистемна гучність плюс еквалайзер, і вам байдуже управління програмою, Boom 3D є передбачуваним наступником виробника — це справедливий шлях, і ми не будемо прикидатися іншим. Але якщо ви спробували Boom 2 і зрозуміли, що насправді хочете вимкнути або ввімкнути одну програму, не переміщуючи все, набір EQ-and-Boost — це інструмент неправильної форми.</p>
<blockquote>Boom 2 робить увесь Mac голоснішим. Мікшер для кожної програми дозволяє вирішувати, яка програма голосніша. Вони вирішують різні проблеми.</blockquote>
<p>Різницю в ціні також варто назвати прямо. SoundDial одноразово становить 14,99 євро. Немає ні підписки, ні пробної версії, яка переходить у більший план, ні шляху в додатку, який переведе вас на дорожчий рівень. Ви купуєте міксер, ви володієте міксером.</p>

<p>Якщо гучність для кожної програми, а не загальносистемного еквалайзера, це те, чого ви насправді шукали, <a href="https://apps.apple.com/app/id6772792641">спробуйте SoundDial на Mac App Store</a> і встановіть свої рівні так, як macOS мав дозволити вам весь час.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune проти SoundDial: безкоштовне програмне забезпечення з відкритим вихідним кодом чи платне на Mac",
    description: "FineTune — це безкоштовна програма з відкритим вихідним кодом для кожного додатка для Mac; SoundDial — це платна програма App Store із пісочним програмним середовищем із посиленням, профілями та підтримкою. Ось чесне порівняння, яке допоможе вам вибрати.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>FineTune — це безкоштовний мікшер гучності для кожного додатка з відкритим кодом для macOS, тож якщо вас хвилює лише ціна, це справжній варіант. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це платна (14,99 євро, одноразова) програма Mac App Store, яка додає збільшення гучності для кожної програми, збережені профілі, автоматичне притуплення та підтримку постачальників. Справжній вибір — безкоштовний і DIY проти пісочниці та підтримки.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune проти SoundDial: безкоштовне програмне забезпечення з відкритим вихідним кодом чи платне на Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Проблему вирішують обидва додатки</h2>

<p>macOS досі не має вбудованого мікшера гучності для кожної програми. У Windows є такий протягом багатьох років — клацніть правою кнопкою миші значок динаміка, відкрийте мікшер гучності, і кожна програма отримає власний повзунок. На Mac ви отримуєте лише один системний повзунок гучності для всього: для вашої музики, відеодзвінка, YouTube, звуків сповіщень і гри. Якщо ваш дзвінок надто тихий, а Spotify надто гучний, єдиним «виправленням» буде повне відключення Spotify.</p>

<p>І FineTune, і SoundDial існують, щоб заповнити цю прогалину. Вони надають кожній запущеній програмі власний контроль гучності, тож ви можете, скажімо, підтримувати нараду на 100%, зменшуючи фонову музику до 20% — не торкаючись головного повзунка.</p>

<h2>Що FineTune робить правильно</h2>

<p>FineTune — це новіша безкоштовна програма з відкритим кодом у дусі SoundSource. Давайте будемо чесними щодо його сильних сторін, тому що вони реальні:</p>

<ul>
  <li><strong>Це нічого не коштує.</strong> Без ліцензії, без пробної версії, без оновлення.</li>
  <li><strong>Джерело відкрите.</strong> Ви можете прочитати, що саме він робить, перевірити його конфіденційність і — якщо ви знаєте Swift — змінити або розгалужити його.</li>
  <li><strong>Це керується спільнотою.</strong> Помилки може виправити кожен, а код переживе будь-яку окрему компанію.</li>
  <li><strong>Він покриває основну потребу.</strong> Незалежний обсяг для кожного додатка, який насправді шукають 90% людей.</li>
</ul>

<p>Якщо ваша єдина вимога — «дозвольте мені вимкнути одну програму, не вимикаючи всі», і ви влаштовуєте програмне забезпечення, яке постачається без офіційної служби підтримки, FineTune — це законна відповідь. Рекомендувати його тут — це не поступка — це чесно.</p>

<h2>Чесні компроміси на шляху DIY</h2>

<p>Безкоштовний і відкритий вихідний код має реальні витрати, які не відображаються на ціннику. Це не недоліки конкретно в FineTune — це природа підходу:</p>

<ul>
  <li><strong>Монтаж ручний.</strong> Аудіоінструменти з відкритим вихідним кодом зазвичай поширюються як завантажена збірка або формула Homebrew, а не через App Store. Ви встановлюєте програму поза межами перевірки Apple, і ви постійно її оновлюєте.</li>
  <li><strong>Перехоплення аудіо в окремих програмах за своєю природою крихке.</strong> Маршрутизація аудіо іншої програми — це глибока системна робота. Коли Apple надсилає оновлення macOS, яке змінює стек аудіо, ці інструменти можуть не працювати, доки хтось не встановить їх. З волонтерським проектом «хтось» може бути зайнятий цього місяця.</li>
  <li><strong>Підтримка — це найкраще.</strong> Якщо щось зламається, ваш регрес – проблема GitHub і чекання. Немає гарантованої відповіді, і ніхто не зобов’язаний це виправляти.</li>
  <li><strong>Обсяг функцій — це те, що надають супроводжувачі.</strong> Основний регулятор гучності, ймовірно, охоплений; Додатки повністю залежать від часу учасника.</li>
</ul>

<blockquote>Чесне оформлення: FineTune обмінює гроші на відповідальність за обслуговування. Ви заощаджуєте 14,99 євро та ризикуєте, що оновлення ОС залишить її несправною, поки спільнота не наздожене.</blockquote>

<h2>Де SoundDial відрізняється</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> приймає протилежну торгівлю. Ви платите один раз, а натомість отримуєте продукт App Store із постачальником, який стоїть за ним, і ширший набір функцій, побудований на основі обсягу кожного додатка:</p>

<ul>
  <li><strong>Гучність і вимкнення звуку для кожної програми</strong> — спільна базова лінія, яку забезпечують обидві програми.</li>
  <li><strong>ЗБІЛЬШЕННЯ обсягу для кожної програми</strong> — перевищити 100% надто тихої програми Корисно для додатків зі слабким аудіовиходом, де недостатньо вимкнути інші.</li>
  <li><strong>Об'ємні профілі</strong> — зберігати цілі мікси («Зустріч», «Фокус», «Ігри») і перемикатися в один клік замість кожного разу скидати повзунки.</li>
  <li><strong>Автоматичне пригнічення</strong> — автоматично знижує фонові додатки, коли ви говорите або коли вибраний додаток стає активним, тому дзвінки перериваються без втручання вручну.</li>
  <li><strong>Швидке перемикання виходу</strong> — перемикатися між динаміками, навушниками та іншими виходами з панелі меню.</li>
</ul>

<p>Так само важливо <em>як</em> це кораблі. SoundDial знаходиться в ізольованому програмному середовищі та поширюється через Mac App Store — без окремого DMG, без драйверів ядра, без встановлення аудіодрайвера. Оновлення надходять через App Store, як і будь-яка інша програма, і є справжній розробник, якому надіслати електронний лист, коли щось не так. Це конкретна вартість 14,99 євро: не просто більше функцій, а хтось відповідальний за їхню роботу в усіх випусках macOS.</p>

<h2>Чесне застереження, яке стосується обох</h2>

<p>Жодна стороння програма не може перетворити аудіосистему macOS на мікшер гучності Windows, оскільки Apple не надає чистого загальнодоступного API для аудіо окремої програми. Кожен інструмент у цій категорії — безкоштовний чи платний, відкритий чи закритий — обходить це обмеження за допомогою аудіотехніки системного рівня. Це означає, що на FineTune і SoundDial можуть вплинути значні зміни звуку macOS. Різниця в тому, хто несе відповідальність за подальше виправлення: волонтерська спільнота чи платний постачальник, чий продукт залежить від цього.</p>

<h2>Який обрати?</h2>

<ul>
  <li><strong>Виберіть FineTune, якщо</strong> ви бажаєте нульових витрат, цінуєте прозорість відкритого вихідного коду, потребуєте лише основного обсягу для кожної програми, вам зручно встановлюватись за межами App Store і підтримувати себе, коли щось зламається.</li>
  <li><strong>Виберіть SoundDial, якщо</strong> вам потрібне встановлення App Store одним клацанням миші, такі додаткові функції, як посилення, профілі та автоматичне притуплення, а також гарантія оновлень і підтримки від постачальника зі скіном у грі.</li>
</ul>

<p>Обидва дійсні. Це справді зводиться до того, що ви віддаєте перевагу витрачати гроші чи приділяти увагу. Якщо ви бажаєте придбати підтримувану програму з ізольованим програмним середовищем і більше ніколи про неї не думати, <a href="https://apps.apple.com/app/id6772792641">отримати SoundDial на Mac App Store</a> за одноразові 14,99 євро — без підписки, без драйверів, без DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music проти SoundDial: чи достатньо безкоштовного мікшера гучності Mac?",
    description: "Чесна пряма боротьба між безкоштовним додатком Background Music і платним SoundDial. Де підхід безкоштовного віртуального драйвера працює, де він ламається, а коли рідний мікшер за 14,99 євро того вартий.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Background Music є безкоштовним і справді добре володіє основами: він надає кожній програмі власний повзунок гучності та може автоматично призупиняти музику, коли відтворюється інша програма. Якщо це все, що вам потрібно, використовуйте це. Але він покладається на віртуальний аудіодрайвер, який може вийти з ладу після оновлення macOS і не має посилення для кожної програми, профілів і перемикання виходу. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> обмінює гроші на підтримувану альтернативу без драйверів, ізольованим програмним середовищем.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music проти SoundDial: чи достатньо безкоштовного мікшера гучності Mac?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>По-перше, чесна правда про macOS</h2>
<p>macOS не має вбудованого мікшера гучності для кожної програми. Windows має один у своєму мікшері гучності вже більше десяти років, але на Mac системний повзунок переміщує все одночасно. Apple не підтримує API, який дозволяє програмі третьої сторони чітко перехоплювати та балансувати окремі потоки програми. Ця єдина прогалина є причиною, чому такі інструменти, як Background Music і SoundDial взагалі існують, і це основна причина більшості наведених нижче компромісів.</p>

<h2>Що Background Music робить добре</h2>
<p>Background Music — це програма з відкритим кодом, яка існує багато років і не дарма має вірних прихильників. Це дає вам:</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — основна особливість. Зменште Spotify, зберігаючи гучність дзвінка.</li>
<li><strong>Автопауза</strong> — він може призупинити ваш музичний плеєр, коли аудіо починається з іншого місця, що є приємним штрихом для зустрічей.</li>
<li><strong>Обсяг пристрою, який слідує за вами</strong> і простий, безглуздий інтерфейс.</li>
<li><strong>Нульова вартість</strong> — він безкоштовний, а код відкритий.</li>
</ul>
<p>Для багатьох людей цього достатньо. Якщо весь ваш список бажань полягає в тому, щоб «зробити одну гучну програму тихішою, не торкаючись решти», Background Music охоплює це, і ви не повинні платити за те, що вам не потрібно. Справедливість тут має значення: це законно корисний інструмент.</p>

<h2>Де вільний підхід показує свої шви</h2>
<p>Заковика в тому <em>як</em> Background Music досягає обсягу на додаток. Оскільки macOS не надає офіційного шляху, він встановлює віртуальний аудіодрайвер (модифіковану версію старого підходу Soundflower), який направляє ваш системний звук через себе. Ця архітектура є розумною, але вона несе реальні витрати:</p>
<ul>
<li><strong>Він ламається після оновлення macOS.</strong> Віртуальні аудіодрайвери знаходяться глибоко в системі, і основні випуски macOS історично відключали або дестабілізували їх. Користувачі регулярно повідомляють про мовчання, спотворення або необхідність перевстановити після оновлення. Коли він ламається, ти часто сам по собі.</li>
<li><strong>Монтаж важчий.</strong> Ви додаєте суміжний із ядром аудіопристрій до свого Mac, а не просто програму. Чисте видалення може бути складним.</li>
<li><strong>Він стає вашим пристроєм виведення за умовчанням.</strong> Оскільки все маршрутизується через віртуальний пристрій, деякі професійні аудіопрограми, програми для конференцій або ігор можуть поводитися дивно, і перемикання реального виводу є додатковим кроком.</li>
<li><strong>Розвиток відбувається за темпами розвитку громади.</strong> Немає служби підтримки. Виправлення надходять, коли у волонтера є час, що для аудіоінструмента, який може раптово замовкнути, є серйозним ризиком.</li>
</ul>
<p>Усе це не робить Background Music поганим. Це робить його безкоштовним інструментом із компромісами безкоштовного інструменту.</p>

<h2>Те, за що ви насправді платите з SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це програма Mac App Store, яка формує те, що вона є. Оскільки програми App Store знаходяться в ізольованому програмному середовищі та не можуть надавати низькорівневий віртуальний драйвер, який використовує Background Music, SoundDial створено для роботи без встановлення окремого аудіопристрою або DMG. Це означає:</p>
<ul>
<li><strong>Ніяких примх віртуального драйвера.</strong> Немає додаткового пристрою виводу, який захоплює ваш аудіоланцюг, і нічого не потрібно перевстановлювати, коли система змінюється.</li>
<li><strong>Він витримує оновлення macOS набагато витонченіше.</strong> Розповсюдження та пісочниця App Store означають, що він побудований на основі підтримуваних шляхів і оновлюється через магазин, тому оновлення ОС з набагато меншою ймовірністю змусить вас мовчати.</li>
<li><strong>Збільшення обсягу для кожної програми.</strong> Це справжня відмінність функції: SoundDial може просувати програму <em>вище</em> 100% для тихих джерел — подкаст, записаний занадто низько, приглушений відеодзвінок. Background Music лише послаблює.</li>
<li><strong>Об'ємні профілі.</strong> Зберігайте набір рівнів для кожної програми («Зустріч», «Музика», «Ігри») і перемикайтеся одним натисканням замість того, щоб щоразу перетягувати повзунки.</li>
<li><strong>Автоматичне пригнічення.</strong> Автоматично знижувати гучність інших програм, коли відтворюється вибране джерело — ідея автоматичної паузи, яку можна налаштувати.</li>
<li><strong>Швидке перемикання виходу</strong> запечений на панелі меню, а також вимкнення звуку для кожної програми.</li>
<li><strong>Справжня підтримка.</strong> Це платний продукт, за який хтось відповідає, коли щось піде не так.</li>
</ul>

<h2>Чесне рішення</h2>
<blockquote>Якщо вам потрібен безкоштовний обсяг і вам потрібен лише базовий обсяг для кожної програми, і вам зручно вирішувати проблеми після оновлень macOS, Background Music — надійний вибір. Якщо вам потрібні посилення, профілі, притуплення, перемикання виходу, відсутність крихкості віртуального драйвера та комусь надіслати електронний лист, коли він зламається, SoundDial коштує 14,99 євро.</blockquote>
<p>Кілька конкретних тай-брейків. Якщо ви регулярно маєте справу з надто тихими джерелами, лише підсилення виправдовує ціну — Background Music просто не може зробити аудіо голосніше джерела. Якщо ви боїтеся щорічної азартної гри «чи витримає мій аудіофайл після оновлення», програма магазину в ізольованому програмному середовищі зніме це занепокоєння. Якщо вам подобаються сцени «встановив і забув», профілі заощадять справжнє тертя. І це одноразова плата в розмірі 14,99 євро, а не підписка, тому порівняння — це одна покупка з часом, витраченим на підтримку безкоштовного драйвера.</p>
<p>І навпаки, якщо ви майструєте з відкритим вихідним кодом, хочете прочитати код і здебільшого просто відмовляєтеся від однієї програми — заощаджуйте гроші. Обидва інструменти вирішують ту саму основну проблему; вони відрізняються міцністю, глибиною функцій і тим, хто вас ловить, коли macOS змінюється під ними.</p>

<p>Хочете об’єм для кожної програми без ризику віртуального водія? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> — одноразово 14,99 євро, ізольоване програмне середовище, без драйверів, із вбудованим посиленням, профілями та автоматичним приглушенням.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Чи коштує SoundSource 39 доларів? Дешевша одноразова альтернатива Mac",
    description: "SoundSource — це потужний аудіоінструмент Mac за ~$39, але це надмірно, якщо вам потрібна лише гучність і посилення для кожної програми. Ось чесне порівняння та одноразова альтернатива 14,99 євро.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>SoundSource того вартий, якщо вам потрібен повний набір інструментів: гучність для кожної програми, 10-смуговий еквалайзер для кожної програми, маршрутизація звуку між пристроями та загальносистемні ефекти. Але приблизно в 39 доларів це надмірно, якщо вам потрібна головна гучність для кожної програми, вимкнення звуку для кожної програми та збільшення гучності. Для цієї вужчої роботи, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> одноразово коштує 14,99 євро.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Чи коштує SoundSource 39 доларів? Дешевша одноразова альтернатива Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Що насправді робить SoundSource</h2>
<p>SoundSource від Rogue Amoeba є справді чудовим програмним забезпеченням, і важливо бути справедливим щодо цього. Це не просто мікшер гучності. Це дає вам:</p>
<ul>
<li><strong>Регулювання гучності для кожної програми</strong> із панелі меню, функція, до якої звертаються більшість людей.</li>
<li><strong>Повноцінний 10-смуговий еквалайзер</strong> ви можете застосувати для кожної програми або всієї системи, а також інші звукові ефекти (через плагіни Audio Unit).</li>
<li><strong>Маршрутизація виходу/входу</strong>, включаючи надсилання однієї програми на пристрій виводу, відмінний від решти системи.</li>
<li><strong>Швидке перемикання пристроїв</strong> і спеціальні налаштування еквалайзера для навушників.</li>
</ul>
<p>Якщо ви подкастер, стример або аудіоботанік, який хоче налаштувати еквалайзер на своїх навушниках, перенаправити звук однієї програми на окремий динамік або зібрати ефекти Audio Unit, SoundSource заслужить свою ціну. Ніщо тут не стукає.</p>

<h2>Питання ціни</h2>
<p>SoundSource — це платна одноразова ліцензія приблизно за 39 доларів США (ціна залежить від версії та акцій). Це не повторювана підписка в розумінні Netflix, але вона дотримується класичної схеми платних програм: ви купуєте основну версію, і майбутні основні оновлення зазвичай є платними оновленнями зі знижкою, а не безкоштовними назавжди. За кілька років це більше, ніж одна покупка. Для багатьох користувачів Mac чесне запитання таке: чи плачу я 39 доларів за набір маршрутизації та еквалайзера, коли все, чого я насправді торкаюся, це повзунки гучності для кожної програми?</p>

<blockquote>Якщо ви відкривали SoundSource і користувалися лише повзунками гучності та кнопками вимкнення звуку, ви платите за набір, щоб використовувати одну його шухляду.</blockquote>

<h2>Чому проблема взагалі існує</h2>
<p>Ось чесна причина: macOS не має вбудованого мікшера гучності для кожного додатка. Windows має такий уже багато років, але на Mac системна гучність — «все або нічого». Немає способу, наданого Apple, щоб Spotify мовчав, поки відеодзвінок залишається гучним, або вимкнути звук однієї програми, не торкаючись усього іншого. Саме через цю прогалину такі інструменти, як SoundSource і <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> існують. Це справжнє обмеження ОС, а не те, що будь-яка програма винайшла проблему для вирішення.</p>

<h2>Де підійде більш легкий і дешевий варіант</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це мікшер гучності панелі меню для кожної програми, створений для звичайного випадку, а не для професійного аудіо випадку. Він охоплює:</p>
<ul>
<li><strong>Незалежний обсяг на додаток</strong> — відпустіть музику, поки зустріч залишається на повному рівні.</li>
<li><strong>Вимкнення звуку для кожної програми</strong> — вимкніть звук однієї програми, не вимикаючи Mac.</li>
<li><strong>Збільшення обсягу для кожної програми</strong> — підвищити тиху програму вище нормальних 100%, коли джерело занадто м’яке.</li>
<li><strong>Об'ємні профілі</strong> — збережіть набір рівнів для кожної програми (наприклад, макет «фокус» або «виклик») і перемикайтеся одним клацанням миші.</li>
<li><strong>Автоматичне пригнічення</strong> — автоматично опускає інші програми, коли ви починаєте говорити або коли вибрана програма грає.</li>
<li><strong>Швидке перемикання виходу</strong> — перемикатися між колонками, навушниками та іншими пристроями з панелі меню.</li>
</ul>
<p>Це <strong>14,99 євро одноразово</strong>, що продається через Mac App Store, тому він ізольований, і немає окремого DMG, розширення ядра та аудіодрайвера для встановлення. Ви завантажуєте його, як і будь-який додаток App Store, і він оновлюється через магазин.</p>

<h2>Чесне порівняння</h2>
<p>Будьте чіткими щодо компромісу. SoundSource робить більше, ніж SoundDial, і якщо щось із наведеного нижче для вас має значення, SoundSource є кращою покупкою:</p>
<ul>
<li>Вам потрібна справжня окрема програма чи система <strong>еквалайзер</strong> і ефекти Audio Unit.</li>
<li>Вам потрібно <strong>скерувати одну програму на інший пристрій виводу</strong> ніж усе інше.</li>
<li>Ви покладаєтеся на <strong>спеціальні налаштування еквалайзера для навушників</strong> і точну обробку звуку.</li>
</ul>
<p>SoundDial не виконує еквалайзер або маршрутизацію пристрою для кожного додатка. Він навмисно вужчий. Натомість це дає вам нижчу ціну, меншу площу та цілеспрямований інтерфейс панелі меню для того, чого насправді хотіли більшість: підтримувати кожну програму на тому рівні, який ви вибираєте, із посиленням і профілями на вершині.</p>

<h2>Отже, чи варто SoundSource?</h2>
<p>Так, якщо ви будете використовувати еквалайзер і маршрутизацію. Це зріле, добре підтримуване програмне забезпечення від шановного розробника, а ціна відображає реальні можливості. Але «варто того» залежить від того, до чого ви торкатиметеся. Якщо ви відкриваєте програму й лише регулюєте повзунки гучності, вимикаєте програму або бажаєте, щоб одна тиха програма була голоснішою, ви платите гроші преміум-класу за потреби базового мікшера. У такому випадку одноразовий інструмент за 14,99 євро є більш розумним, і ви завжди можете перейти до SoundSource пізніше, якщо ваші потреби переростуть у еквалайзер та маршрутизацію.</p>

<p>Якщо гучність для кожної програми, посилення, вимкнення звуку, профілі та автоматичне приглушення — це все, що вам потрібно, <a href="https://apps.apple.com/app/id6772792641">отримати SoundDial на Mac App Store</a> — €14,99 один раз, без підписки, без драйверів.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome занадто голосно на Mac? Вимкніть один браузер, не ігноруючи всі",
    description: "Chrome вибухає голосніше, ніж інші ваші програми на Mac? Дізнайтеся про вбудовані виправлення (вимкнення звуку для кожної вкладки, налаштування звуку сайту) і як налаштувати справжній рівень гучності для кожної програми для Chrome, щоб він залишався тихішим, ніж усе інше.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованої гучності для кожної програми, тому ви не можете вимкнути Chrome, залишаючи інші програми на повній гучності. Ваші найшвидші безкоштовні виправлення — це вимкнути шумні вкладки, зменшити гучність у кожному відеоплеєрі або заблокувати звук на кожному сайті в налаштуваннях Chrome. Для справжнього постійного рівня гучності лише для Chrome вам потрібен мікшер для кожної програми.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome занадто голосно на Mac? Вимкніть один браузер, не ігноруючи всі" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому Chrome звучить голосніше за все інше</h2>
<p>Chrome не обов’язково є «гучнішим» за своєю конструкцією — справа в тому, що Chrome направляє аудіо з багатьох незалежних джерел: YouTube, реклами, що автоматично відтворюється, відеодзвінків, вкладок фонової музики та веб-додатків, кожна з яких забезпечує власну гучність. Деякі сайти освоюються гаряче, реклама, як відомо, гучна, і Chrome відтворює їх усі на повному рівні продуктивності вашої системи. Тим часом ваш музичний додаток або дзвінок можуть бути тихішими, тому Chrome домінує в міксі.</p>
<p>На Windows просто відкрийте мікшер гучності та перетягніть повзунок Chrome вниз. macOS просто не включає цю функцію. Системна клавіша гучності керує всім одночасно, тому, зменшивши Chrome, також зменшиться музика, сповіщення та дзвінки. Це основне обмеження — і це недолік ОС, а не те, що ви робите неправильно.</p>

<h2>Вбудовані виправлення, які не коштують нічого</h2>
<p>Перш ніж щось встановлювати, спробуйте це. Вони не дадуть вам жодного регулятора гучності Chrome, але вони вирішують більшість проблем «однієї гучної вкладки».</p>
<ul>
<li><strong>Вимкнути шумну вкладку.</strong> Клацніть вкладку правою кнопкою миші та виберіть «Вимкнути звук на сайті» або клацніть маленький значок динаміка, який з’явиться на вкладці, яка відтворює звук. Це повністю вимикає цю вкладку, не торкаючись решти Chrome.</li>
<li><strong>Зменште гучність у плеєрі.</strong> Найнадійніший трюк: перетягніть повзунок гучності вниз усередині YouTube, Netflix або іншого, що відтворюється. Веб-програвачі запам’ятовують свій власний рівень для кожного сайту, тому тихіший YouTube наступного разу залишатиметься тихим.</li>
<li><strong>Блокувати звук для кожного сайту.</strong> Перейти до <em>chrome://settings/content/sound</em>. Ви можете перемикати сайти між «дозволеними» та «вимкненими», а також додавати певні домени до списку ігнорування. Чудово підходить для постійного вимикання сайтів, які автоматично відтворюються.</li>
<li><strong>Вимкніть автоматичне відтворення реклами.</strong> Аудіо оголошення часто є справжнім винуватцем. Блокувальник вмісту або вимкнення звуку вкладки, доки ви не будете готові до перегляду, усуває більшість несподіваної гучності.</li>
</ul>
<blockquote>Вони справді корисні та безкоштовні. Але зауважте, чого вони не можуть: вони вимикають звук або керують окремими вкладками. Жоден із них не дозволив вам сказати «залишайте весь Chrome на 40%, а мою музику — на 100%».</blockquote>

<h2>Чесне обмеження: у macOS немає обсягу для кожної програми</h2>
<p>Якщо ваша фактична мета: «Chrome завжди повинен бути тихішим, ніж інші мої програми», вбудовані інструменти не вистачають. Вимкнення звуку для кожної вкладки — це все або нічого. Повзунки програвача скидаються, якщо сайт їх не запам’ятовує і потрібно постійно переробляти. І гучність системи рухає все разом.</p>
<p>Це справжнє обмеження macOS, а не помилка, яку можна налаштувати. Apple ніколи не поставляла мікшер гучності у стилі Windows. Єдиний спосіб отримати постійний, незалежний рівень гучності саме для Chrome — стороння програма, яка розміщується між вашими програмами та пристроєм виведення та застосовує посилення для кожної програми.</p>

<h2>Установіть реальну гучність для кожної програми для Chrome</h2>
<p>Змішувач панелі меню <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> дає macOS регулятор гучності для кожної програми, якого йому бракує. У ньому перераховано кожну програму, яка зараз відтворює аудіо, і кожній із них надано окремий повзунок — тож ви можете опустити Chrome до комфортного рівня й залишити Spotify, свої дзвінки та системні звуки там, де вони є.</p>
<p>Ось як з ним можна приборкати гучний Chrome:</p>
<ul>
<li>Відкрийте мікшер панелі меню та знайдіть Chrome у списку активних програм.</li>
<li>Перетягніть повзунок Chrome вниз, скажімо, на 40–50 відсотків. Інші програми залишаються недоторканими.</li>
<li>Якщо певний додаток також <em>тихий</em> замість цього — додаток для викликів, який шепоче — використовуйте <a href="https://apps.apple.com/app/id6772792641">збільшення обсягу для кожної програми</a> щоб підняти його вище 100 відсотків, зберігаючи Chrome низьким.</li>
<li>Миттєво вимкніть Chrome за допомогою вимкнення звуку для кожної програми, коли вам потрібна тиша, не закриваючи вкладки.</li>
</ul>
<p>Оскільки рівень прив’язаний до програми, він залишається. Chrome залишається на вибраній вами гучності на вкладках, сайтах і перезапусках — жодного повторного перетягування повзунків програвача щоразу, коли ви відкриваєте нове відео.</p>

<h2>Далі: профілі, притуплення та перемикання виходу</h2>
<p>Після того, як ви отримаєте контроль за програмою, кілька додаткових можливостей допоможуть вам тримати її поруч. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> дозволяє економити гучність <strong>профілі</strong> — наприклад, профіль «фокус», де Chrome тихий, а музика гучна, і профіль «перегляд», де домінує Chrome — і перемикайтеся між ними в один клік. Автоматичне приглушення може автоматично припиняти роботу інших додатків, коли запускається вибране джерело (це зручно, щоб виклик ніколи не ховався під гучною вкладкою браузера). А швидке перемикання вихідного сигналу дає змогу переходити між колонками, навушниками та іншими пристроями, не занурюючись у налаштування системи.</p>
<p>Це одноразова покупка за 14,99 євро на Mac App Store — без підписки, без встановлення драйверів, без DMG чи розширення ядра. Оскільки він знаходиться в ізольованому програмному середовищі та поширюється через App Store, він не потребує схематичних аудіодрайверів, які встановлюють старі інструменти мікшера, на які покладаються.</p>

<h2>Яке виправлення слід використовувати?</h2>
<p>Якщо час від часу у вас є лише одна неприємна вкладка, скористайтеся вбудованою функцією вимкнення звуку Chrome і налаштуваннями звуку сайту — вони безкоштовні та працюють. Якщо ви постійно бажаєте, щоб Chrome можна було просто вимкнути, а все інше залишиться на місці, це саме той проміжок, який macOS залишає відкритим, і мікшер для кожного додатка є чистим виправленням.</p>

<p>Хочете, щоб Chrome назавжди тихіше, не вимикаючи музику чи дзвінки? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і надайте кожній програмі власний повзунок гучності.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "Сповіщення WhatsApp і Telegram звучать надто голосно на Mac? Відмовтеся від них",
    description: "Виправте надто гучні звуки сповіщень на робочому столі WhatsApp і Telegram на Mac. Почніть із вбудованих налаштувань кожної програми, а потім зменшіть або вимкніть звук усієї програми, якщо macOS не дає вам можливості керувати окремою програмою.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>Почніть із кожної програми: WhatsApp і Telegram дозволяють вимкнути або змінити звуки сповіщень у власних налаштуваннях, що є найчистішим виправленням. Але macOS не має повзунка гучності сповіщень для окремої програми, тож якщо власний звук програми все ще надто гучний, ваш єдиний реальний важіль — зменшити або вимкнути звук усієї програми за допомогою інструмента гучності для кожної програми.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Сповіщення WhatsApp і Telegram звучить надто голосно на Mac? Відмовтеся від них" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>По-перше, скористайтеся власними налаштуваннями сповіщень програми</h2>

<p>І WhatsApp, і Telegram постачають власні елементи керування звуком, і саме з цього вам завжди слід починати. Це найточніше виправлення, і воно не торкається нічого іншого на вашому Mac.</p>

<p><strong>WhatsApp Робочий стіл:</strong> Відкрийте WhatsApp, натисніть <em>Налаштування</em> (піктограма шестірні), потім <em>Сповіщення</em>. Ви можете вимкнути <em>Звуки</em> повністю, зберігаючи банери, або вимкнути попередній перегляд сповіщень. WhatsApp не пропонує повзунок гучності, тому його можна ввімкнути або вимкнути для самого звуку.</p>

<p><strong>Telegram Робочий стіл:</strong> відкритий <em>Налаштування → Сповіщення та звуки</em>. Telegram тут більш гнучкий. Ви можете вимкнути звук сповіщень глобально, вимкнути звук окремих чатів або встановити спеціальні (тихіші) звуки. Ви також можете вимкнути звук окремої шумної групи, відкривши її та вибравши <em>Вимкнути звук</em>. Для більшості людей вимкнення найгучніших чатів вирішує проблему, не замовкаючи всюди.</p>

<p>Якщо звук хороший, але надто частий, вимкніть певні чати чи канали, які запускаються найчастіше, замість того, щоб вимикати звук у всій програмі. Завдяки цьому важливі сповіщення залишаються звуковими.</p>

<h2>Вимкніть звуки сповіщень у налаштуваннях системи macOS</h2>

<p>macOS має другий рівень контролю, який у деяких випадках перекриває додаток. Перейти до <em>Системні параметри → Сповіщення</em>, виберіть у списку WhatsApp або Telegram і вимкніть <em>Відтворення звуку для сповіщень</em>. Це вимикає сигнал попередження для цієї програми, але показує банери.</p>

<p>Це справді гарне виправлення, якщо ви хочете, щоб програма мовчала лише під час сповіщень і не дбала про інші аудіо (дзвінки, відео). У поєднанні з власними налаштуваннями додатка це охоплює більшість скарг на те, що пінг стрімкий.</p>

<h2>Справжнє обмеження: macOS не має обсягу для кожного додатка</h2>

<p>Ось чесна частина. Наведені вище кроки – це перемикачі ввімкнення/вимкнення. Чого вони не можуть зробити, так це перетворити WhatsApp або Telegram <em>вниз</em> до, скажімо, 40%, зберігаючи все інше на повній гучності. Windows вже багато років має мікшер гучності для кожної програми. macOS просто не включає його, і немає прихованого налаштування або команди Terminal, яка його додає.</p>

<p>Це важливо, коли проблема полягає не в дзвінку сповіщень, а в тому, що вся програма надто гучна:</p>

<ul>
<li>WhatsApp або Telegram <strong>голосові та відеодзвінки</strong> які вибухають на повну гучність щодо вашої музики чи зустрічі</li>
<li>Звук сповіщення, який потрібно залишити, але на нижчому рівні, а не повністю</li>
<li>Рінгтони, які звучать набагато краще, ніж те, що ви слухаєте</li>
<li>Хочете, щоб додаток було чутно, але тихо у фоновому режимі, поки ви зосереджуєтесь на чомусь іншому</li>
</ul>

<p>Нічого з цього не можна вирішити за допомогою вбудованих інструментів, оскільки вони пропонують лише відключення звуку, а не рівень. Ця прогалина є справжнім обмеженням macOS, а не тим, чого вам не вистачає.</p>

<h2>Установіть гучність для кожної програми за допомогою SoundDial</h2>

<p>Щоб фактично вимкнути одну програму, а не вимкнути, потрібен мікшер гучності для кожної програми. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це програма на панелі меню, яка надає macOS можливість контролю гучності для кожної програми, з якою вона ніколи не постачалася. У ньому перераховано кожну програму, яка зараз відтворює аудіо, і кожному з них надано власний повзунок.</p>

<p>Для цієї конкретної проблеми:</p>

<ul>
<li>відкритий <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> на панелі меню та знайдіть WhatsApp або Telegram у списку.</li>
<li>Перетягніть повзунок вниз до зручного рівня, наприклад, на 30–40%, не торкаючись музики, браузера чи відеодзвінка.</li>
<li>Використовуйте окрему програму <strong>німий</strong> кнопку, щоб миттєво вимкнути лише цю програму під час дзвінка чи зустрічі, а потім увімкнути звук пізніше, не копаючись у налаштуваннях.</li>
<li>Якщо вам коли-небудь знадобиться навпаки, надто м’який тихий додаток, окремий додаток <strong>підвищення</strong> може підштовхнути його вище 100%.</li>
</ul>

<p>Завдяки тому, що SoundDial встановлює рівень для кожної програми, звукові сигнали сповіщень і звук дзвінка залишаються чутними, але пропорційними, замість вибору «все або нічого», який нав’язують вам вбудовані параметри. Ви також можете заощадити <strong>об'ємні профілі</strong>, тож налаштування «фокусу», яке зберігає низький рівень програм для чату, доступне одним клацанням миші.</p>

<blockquote>Одне чесне застереження: зменшення загальної гучності програми в SoundDial також зменшує її сигнали сповіщень, оскільки для macOS це аудіо тієї самої програми. Якщо ви хочете повністю вимкнути сповіщення, але дзвінки на повній гучності, скористайтеся власним вимкненням звуку програми та системними налаштуваннями для дзвінка та зарезервуйте SoundDial для встановлення загального рівня.</blockquote>

<p>SoundDial — це одноразова покупка за 14,99 євро на Mac App Store, ізольоване програмне середовище, без підписки, без драйверів ядра та без DMG для стороннього завантаження. Це практична відповідь, коли виправлення, яке ви справді бажаєте, тобто відключити одну програму, а не вимкнути, не може зробити сам macOS.</p>

<h2>Яке виправлення слід використовувати?</h2>

<p>Працюйте зверху вниз. Спершу спробуйте власні налаштування сповіщень програми, а потім macOS Системні налаштування, щоб вимкнути дзвінок. Якщо ви справді хочете знизити гучність WhatsApp або Telegram до певної гучності або вимкнути лише цю програму під час дзвінків, ось тут мікшер для кожної програми заслужить своє місце.</p>

<p>Втомилися вибирати між повною потужністю та повною тишею для програм чату? <a href="https://apps.apple.com/app/id6772792641">Отримайте SoundDial на Mac App Store</a> і надайте кожній програмі власний регулятор гучності.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Аудіо гри голосніше, ніж Discord на Mac? Як збалансувати гру та гучність голосу",
    description: "Ваша гра заглушає голосовий чат Discord на Mac, а вбудованого мікшера гучності немає. Ось чому в macOS не вистачає гучності в стилі Windows для кожного додатка та як зменшити гру, зберігаючи гучність.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованого мікшера гучності для кожного додатка, тому ви не можете нативно обмежити свою гру, утримуючи Discord гучним. Виправлення — це програма на панелі меню, яка встановлює незалежну гучність для кожної програми. Зменшіть гру до 40-50%, залиште голосовий чат на 100%, і обидва залишаться збалансованими, не торкаючись повзунків у грі.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — звук гри голосніше, ніж Discord на Mac? Як збалансувати гру та гучність голосу" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому це відбувається на Mac (а не на Windows)</h2>

<p>Якщо ви грали на Windows, ви знаєте мікшер гучності: клацніть правою кнопкою миші значок динаміка, і кожна запущена програма отримає власний повзунок. Ви кидаєте гру, підвищуєте Discord, готово. macOS просто ніколи не поставляв цю функцію. Існує один основний вихідний том і кілька перемикачів на рівні програми, похованих у налаштуваннях системи, але немає контролю рівня програми для довільних програм.</p>

<p>Отже, коли мікс гри освоєно гаряче, його вибухи, музика та постріли відтворюються на тому ж рівні, що й голоси ваших друзів. У деяких іграх є головний повзунок гучності, але в багатьох він не знижується достатньо, а багато програм запуску, браузерів і окремих ігор взагалі не пропонують корисного керування. Сама Discord дозволяє лише регулювати гучність вхідних користувачів, а не гру, яка з ними конкурує.</p>

<p>Чесно кажучи, це прогалина на рівні ОС, а не помилка, яку можна усунути. Аудіо стек Apple направляє все в єдиний вихідний потік, і немає основного інтерфейсу користувача, щоб розділити його на програму. Ось чому вам потрібен інструмент стороннього виробника, який знаходиться між вашими програмами та пристроєм виведення.</p>

<h2>Обхідні шляхи вручну (і чому вони не виконуються)</h2>

<p>Перш ніж шукати програмне забезпечення, варто дізнатися про безкоштовні опції та їх обмеження:</p>

<ul>
<li><strong>Зменште гучність гри в додатку.</strong> Працює, якщо в грі є основний повзунок із достатньо дрібними кроками. Багато зупиняються на 10% прирощеннях або об’єднують музику та ефекти разом, тому ви не можете приборкати лише гучні частини.</li>
<li><strong>Виховуйте своїх друзів у Discord.</strong> Клацніть правою кнопкою миші кожного користувача та збільште його гучність. Це трохи допомагає, але на вершині, і це не торкається гри, яка насправді є проблемою.</li>
<li><strong>Використовуйте навушники з апаратною ручкою гучності.</strong> Змінюється лише загальний рівень, а не баланс між грою та голосом.</li>
<li><strong>Проведіть аудіо через віртуальний пристрій.</strong> Такі інструменти, як Loopback або BlackHole, можуть розділяти потоки, але вони призначені для професіоналів, вимагають реальних налаштувань і є надмірними для того, щоб «зробити гру тихішою».</li>
</ul>

<p>Жоден із них не дає вам того, що користувачі Windows сприймають як належне: швидкого повзунка для кожної програми. Ось і розрив <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> побудований для заповнення.</p>

<h2>Пряме рішення: незалежний обсяг на додаток</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — це мікшер гучності панелі меню для кожної програми для macOS. Він показує кожну програму, яка зараз відтворює звук, і надає кожній із них окремий повзунок, як і мікшер гучності Windows. Для проблеми гри проти голосу робочий процес короткий:</p>

<ul>
<li>Клацніть піктограму SoundDial на панелі меню, коли гра та Discord запущені.</li>
<li>Знайдіть гру в списку та перетягніть її повзунок приблизно до 40-50%.</li>
<li>Залиште Discord (або Slack, Zoom або ваш голосовий додаток) на 100%.</li>
<li>Регулюйте на льоту під час гри — штовхайте гру ще нижче під час гучної перестрілки, відступайте під час тихого дослідження.</li>
</ul>

<p>Оскільки рівні залежать від програми, ви встановлюєте їх один раз, і вони зберігаються. Гра залишається закритою, незалежно від того, наскільки гарячою є її власна суміш, і ваших друзів чітко чути в ній.</p>

<h2>Підсилення, вимкнення звуку та профілі для решти ваших налаштувань</h2>

<p>Той самий інструмент охоплює суміжні неприємності, пов’язані з голосовими іграми:</p>

<ul>
<li><strong>Прискорення для кожної програми.</strong> Якщо мікрофон напарника тихий навіть на максимумі Discord, ви можете натиснути голосову програму <em>вище</em> 100%, тож він прорізає гру, а не похований.</li>
<li><strong>Вимкнення звуку для кожної програми.</strong> Миттєво вимкніть фонову вкладку веб-переглядача або музичну програму без натискання клавіші Alt таб або припинення відтворення.</li>
<li><strong>Об'ємні профілі.</strong> Збережіть «ігровий» профіль із розвитком гри на 45% і посиленим Discord, а потім поверніться до «звичайного» профілю для повсякденного використання в один клік — без перетягування повзунків кожного сеансу.</li>
<li><strong>Автоматичне пригнічення.</strong> Нехай гра автоматично припиняється, коли хтось говорить, щоб виноски завжди потрапляли на вершину дії.</li>
<li><strong>Швидке перемикання виходу.</strong> Перемикайтеся між навушниками та динаміками з одного меню, не занурюючись у налаштування системи.</li>
</ul>

<blockquote><p>Ментальна модель проста: один слайдер на програму, як це робив Windows роками. macOS просто ніколи його не надавав, тому невелика утиліта відновлює паритет.</p></blockquote>

<h2>Чого чекати чесно</h2>

<p>Мікшер для кожної програми чітко вирішує проблему балансу, але правильно встановлює очікування. Він контролює вихідні рівні програмного забезпечення — він не може виправити гру, власне аудіо якої погано освоєно, і не може підняти сигнал, який ніколи не був зафіксований (справді зламаний мікрофон все одно потребує апаратного ремонту). Підсилення додає реальне посилення, тому натискання тихого джерела далеко за 100% може викликати спотворення, точно так само, як підсилювач занадто високо. Однак при розумному використанні скромний ігровий ліміт плюс невелике посилення голосу — це все, що потрібно більшості налаштувань.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> знаходиться в пісочниці та встановлюється безпосередньо з Mac App Store — без драйверів, без розширень ядра, без DMG, якому можна довіряти. Це одноразова ціна 14,99 євро без передплати, і він підтримує керування гучністю macOS на 28 мовах.</p>

<p>Припиніть боротися зі своїми повзунками в грі. хапати <a href="https://apps.apple.com/app/id6772792641">SoundDial на Mac App Store</a>, зменшіть гру, тримайте свою команду гучною та, нарешті, отримайте мікшер гучності macOS у стилі Windows, який забули доставити.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "Динаміки зовнішнього монітора занадто гучні або зависли на Mac? Виправлення гучності HDMI/DisplayPort",
    description: "Чому клавіші регулювання гучності вашого Mac не керують динаміками монітора HDMI або DisplayPort і як виправити аудіо, яке надто гучне, зависає або не регулюється, використовуючи екранне меню монітора, налаштування аудіо MIDI та кращу маршрутизацію вихідного сигналу.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо клавіші регулювання гучності вашого Mac неактивні або не виконують жодних функцій для монітора, підключеного через HDMI або DisplayPort, зазвичай це не помилка. Звук цифрового дисплея часто надсилається на фіксованому рівні, а власне обладнання монітора контролює гучність. Виправлення полягає в тому, щоб налаштувати дисплей, перенаправити вихід або використати інший аудіопристрій.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — динаміки зовнішнього монітора занадто гучні або застрягли на Mac? Виправлення гучності HDMI/DisplayPort" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому клавіші гучності Mac перестають працювати через HDMI/DisplayPort</h2>

<p>HDMI і DisplayPort передають аудіо як цифровий потік. Багато моніторів отримують цей потік із фіксованим вихідним рівнем і очікують, що ви керуватимете гучністю на самому дисплеї, а не на пристрої-джерелі. Коли macOS виявляє це, він вимикає повзунок гучності на екрані та затінює клавіші F11/F12, показуючи символ «введення заборонено», коли ви їх натискаєте.</p>

<p>Це апаратне та протокольне обмеження, а не те, що програмне забезпечення на Mac може перевизначити. Аудіо ніколи не проходить через стадію, на якій macOS може послабити його. Жодна програма, драйвер чи налаштування не можуть контролювати гучність у потоці, яку дисплей наполягає отримати на повному рівні. Якщо ви будете чесними щодо цього, ви заощадите години на пошуки неправильного виправлення.</p>

<h2>Виправлення 1: використання власних елементів керування монітора (ЕМ)</h2>

<p>Це справжнє рішення для більшості людей. Майже кожен монітор із вбудованими динаміками має екранне меню, яке керується фізичними кнопками або джойстиком на задній чи нижній частині панелі.</p>

<ul>
<li>Натисніть кнопку екранного меню/меню, щоб відкрити налаштування монітора.</li>
<li>Знайдіть розділ «Аудіо» або «Гучність».</li>
<li>Знизьте рівень там — це керування, яке насправді працює через HDMI/DP.</li>
</ul>

<p>Деякі монітори також надають супутню програму або підтримку DDC/CI, щоб ви могли керувати екранним меню з macOS. Утиліти сторонніх виробників, які підтримують DDC, можуть зіставляти клавіші гучності вашого Mac з апаратною гучністю монітора, що варто спробувати, якщо ви ненавидите тягнутися до кнопок панелі.</p>

<h2>Виправлення 2: Перевірте налаштування Audio MIDI</h2>

<p>відкритий <strong>Налаштування аудіо MIDI</strong> (у /Applications/Utilities). Виберіть свій монітор у списку пристроїв. Якщо праворуч з’являється повзунок гучності, перетягніть його вниз — іноді на дисплеї відображається контрольований програмним забезпеченням рівень, навіть якщо клавіші панелі меню вимкнено. Якщо повзунок відсутній або неактивний, дисплей підтверджує, що приймає лише аудіо фіксованого рівня, і вам слід повернутися до екранного меню.</p>

<p>Поки ви тут, переконайтеся, що вибрано правильний пристрій виведення. Зазвичай аудіо безшумно направляється на монітор, про який ви забули підключити, що пояснює раптову гучність або відсутність звуку.</p>

<h2>Виправлення 3: Направте аудіо кудись, де ви можете контролювати</h2>

<p>Якщо динаміки вашого монітора все одно посередні (більшість із них), а регулятор гучності невмілий, найпростішим рішенням буде припинити їх використання:</p>

<ul>
<li>Під’єднайте динаміки або навушники до роз’єму для навушників монітора, якщо він є — цей аналоговий вихід зазвичай регулюється гучністю з дисплея.</li>
<li>Використовуйте USB DAC, USB-динаміки або вихід Bluetooth. USB та аналогові виходи дають macOS повний програмний контроль гучності, тому ваші клавіші знову працюють нормально.</li>
<li>Виберіть вбудовані динаміки вашого Mac для швидкого звуку та залиште монітор лише для відео.</li>
</ul>

<p>Коли ви перебуваєте на виході, який macOS може фактично послабити, системні клавіші гучності поводяться, і ви відновлюєте точне керування замість того, щоб переходити між грубими кроками екранного меню монітора.</p>

<h2>Коли вихід запрацює, керуйте гучністю для кожної програми</h2>

<p>Повернення контрольованого вихідного сигналу вирішує проблему "занадто гучного / завислого". Але macOS все ще дає вам лише один основний обсяг для всього. У Mac немає вбудованого мікшера для кожного додатка — Windows мав його протягом багатьох років, але Apple ніколи не поставляла еквівалент. Таким чином, гучне відео, гра та тихий дзвінок мають один повзунок.</p>

<p>Ось і розрив <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> заповнює. Це мікшер на панелі меню, який надає кожній програмі власний незалежний рівень гучності, тож ви можете зменшити вкладку веб-переглядача, не торкаючись музики, миттєво вимкнути звук однієї програми або збільшити тиху програму вище звичайного рівня. Ви можете зберігати профілі гучності для різних налаштувань і швидко перемикати виходи з панелі меню.</p>

<p>Щоб було зрозуміло щодо обсягу: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> контролює гучність програмного забезпечення для аудіо, що проходить через macOS. Він не може перевизначати монітор, який ігнорує системну гучність через HDMI — це поведінка дисплея на фіксованому рівні, і лише екранне меню або інший вихід виправляє це. Коли ви отримуєте контрольований вихід, програма сяє на очах у кожній програмі.</p>

<h2>Швидкий контрольний список</h2>

<ul>
<li>Клавіші неактивні через HDMI/DP? Використовуйте гучність екранного меню монітора — це очікувана поведінка.</li>
<li>Перевірте налаштування аудіо MIDI на наявність прихованого програмного повзунка.</li>
<li>Переконайтеся, що вибрано правильний вихідний пристрій.</li>
<li>Для реального контролю підключіть аудіо до виходу для навушників, USB або Bluetooth.</li>
<li>Потім використовуйте мікшер для кожної програми, щоб збалансувати окремі програми.</li>
</ul>

<p>Коли ваш результат буде під контролем, віддайте <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> погляд. Це одноразова покупка вартістю 14,99 євро в Mac App Store — без підписки, без драйверів, без DMG — і вона нарешті приносить реальний мікшер гучності для кожної програми в macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC Не регулюється гучність на Mac? Поверніть програмне керування гучністю",
    description: "Чому macOS робить повзунок гучності сірим для багатьох USB DAC, що це означає та як повернути робочий програмний регулятор гучності на Mac без шкоди для якості звуку.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Якщо повзунок гучності вашого USB DAC неактивний на Mac, зазвичай це не помилка. macOS вимикає програмну гучність, коли DAC повідомляє, що не має контрольованої гучності, очікуючи, що ви скористаєтеся власною апаратною ручкою DAC. Щоб відновити гучність програмного забезпечення, скористайтеся аттенюатором на рівні програми, наприклад <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Не регулюється гучність на Mac? Поверніть програмне керування гучністю" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому macOS виділяє сірий колір для деяких USB DAC</h2>

<p>Коли ви підключаєте аудіопристрій USB, macOS запитує, що він може робити через протокол USB Audio Class (UAC). Частиною цього рукостискання є набір елементів керування «блоком функцій», включаючи регулятор гучності. Якщо DAC оголошує регулятор гучності, macOS з’єднує його з клавішами регулювання гучності на клавіатурі та повзунком панелі меню. Якщо DAC заявляє, що він не має гучності, яка регулюється хостом, macOS повністю закриває повзунок сірим.</p>

<p>Багато високоякісних DAC і підсилювачів роблять саме останнє, навмисно. Розробники припускають, що ви подасте на DAC повномасштабний, ідеальний цифровий сигнал і регулювати гучність за допомогою аналогової ручки гучності на самому пристрої. Це аналогове затухання відбувається після цифро-аналогового перетворення, тому це дозволяє уникнути викидання бітів і є справді кращим шляхом для аудіофілів. Це особливість, а не недолік.</p>

<blockquote>Емпіричне правило: якщо ваш DAC має фізичну ручку гучності, а повзунок Mac неактивний, виробник хоче, щоб ви використовували цю ручку. За задумом сигнал надсилається на 100%.</blockquote>

<h2>Коли повзунок сірого кольору насправді є проблемою</h2>

<p>Відповідь «просто використовуйте ручку» руйнується в реальних налаштуваннях:</p>

<ul>
<li><strong>DAC не має ручки.</strong> Безліч компактних USB DAC, ключів і професійних інтерфейсів не надають жодного контролю гучності та керування хостом. Ви застрягли на будь-якому рівні, на якому встановлено вихідний підсилювач або активні колонки.</li>
<li><strong>Ручка поза досяжністю.</strong> Настільний DAC за вашим монітором або пристрій, що живить підсилювач із фіксованим посиленням, означає, що регулювання гучності стає фізичною роботою, а не натисканням клавіш.</li>
<li><strong>Вам потрібен баланс для кожної програми, а не лише майстерний рівень.</strong> Навіть ідеальна апаратна ручка є єдиним глобальним контролем. Він не може зробити дзвінок Zoom тихішим, ніж ваша музика, або вимкнути гру, коли з’являється сповіщення.</li>
</ul>

<p>macOS нічого з цього не виправляє, оскільки з точки зору ОС пристрій поводиться правильно. Це щире обмеження: це можливість, яку повідомляє пристрій, і в налаштуваннях системи немає перемикача, щоб її змінити.</p>

<h2>Чесні обхідні шляхи, перш ніж щось інсталювати</h2>

<p>Спершу спробуйте ці, тому що вони нічого не коштують:</p>

<ul>
<li><strong>Використовуйте апаратну ручку або нижню гучність.</strong> Якщо ваш DAC або ваші активні динаміки/підсилювачі мають керування, це найчистіший варіант із збереженням повної цифрової роздільної здатності.</li>
<li><strong>Перевірте власну програму чи мікропрограму DAC.</strong> Деякі DAC (та пристрої, орієнтовані на ігри) постачають панель керування або настройку мікропрограми, яка вмикає гучність хоста. Якщо існує опція «Гуч USB» або «Гуч програмного забезпечення», увімкнення повзунка macOS знову запрацює.</li>
<li><strong>Спробуйте інший режим USB.</strong> Кілька пристроїв повідомляють про різні можливості в режимі «сумісності з класом» і режимі пропрієтарного драйвера. Встановлення або видалення драйвера постачальника може змінити, чи бачить macOS регулятор гучності.</li>
<li><strong>Подивіться в налаштування Audio MIDI.</strong> Відкрийте налаштування аудіо MIDI, виберіть пристрій і перевірте, чи відображається там основний або канальний гучність. Іноді повзунок доступний на цій панелі, навіть якщо повзунок на панелі меню неактивний.</li>
</ul>

<p>Якщо жоден із них не підходить, вам потрібне програмне ослаблення на стороні Mac.</p>

<h2>Програмне керування гучністю з ослабленням для кожного додатка</h2>

<p>Якщо апаратне забезпечення не приймає команду гучності, залишається можливість програмно послабити аудіо до того, як воно досягне DAC. Це саме те, що <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> робить. Він розміщений у панелі меню та надає кожній запущеній програмі власну незалежну гучність, вимкнення звуку та навіть посилення, незалежно від того, чи надає ваш DAC апаратний контроль.</p>

<p>Щоб використовувати його для сірого DAC:</p>

<ul>
<li>встановити <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> із Mac App Store і відкрийте його з панелі меню.</li>
<li>Залиште ваш DAC вибраним як системний вихід; Ви також можете використовувати швидке перемикання вихідного сигналу SoundDial, щоб перемикатися між DAC, динаміками та навушниками, не занурюючись у налаштування системи.</li>
<li>Встановіть рівні для кожної програми: закрийте браузер, підніміть музичний плеєр, вимкніть все, що вам не потрібно. Кожна програма транслюється на вибраній вами гучності, а змішаний результат надходить до DAC.</li>
<li>Зберігайте профілі гучності для різних сценаріїв (дзвінки чи прослуховування) і дозвольте автоматично приглушувати фонові додатки, коли починає грати щось важливіше.</li>
</ul>

<h2>Чесний компроміс щодо якості звуку</h2>

<p>Програмне ослаблення зменшує цифровий рівень перед перетворенням, тому теоретично воно відкидає невелику роздільну здатність порівняно з аналоговою гучністю на самому DAC. На практиці, на сучасних 24-бітних і вищих каналах при нормальному рівні прослуховування, зниження значно нижче всього чутного, і ви зберігаєте повний динамічний діапазон DAC для всього, що відтворюється майже на повній шкалі. Якщо ви пурист із хорошою аналоговою ручкою під рукою, використовуйте ручку. Якщо у вас немає придатного апаратного контролю або вам потрібен баланс для кожної програми, який macOS просто не може забезпечити, програмний обсяг є правильним компромісом, і він перевершує повзунок, який нічого не робить.</p>

<p>SoundDial — це одноразова покупка за 14,99 євро, ізольоване програмне середовище, без драйверів, розширень ядра чи інсталяторів DMG. Якщо гучність вашого USB DAC неактивна, і дотягнутися до ручки неможливо, <a href="https://apps.apple.com/app/id6772792641">отримати SoundDial на Mac App Store</a> і повернути робочий регулятор гучності на панель меню.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Обмежте максимальну гучність однієї гучної програми на Mac (захистіть свій слух)",
    description: "macOS не має обмеження гучності для окремої програми, тому одна гучна програма може підірвати вас на повній гучності системи. Ось як встановити максимальну гучність для однієї програми на Mac за допомогою мікшера для кожної програми та чому апаратні обмеження важливі.",
    date: "2026-07-23",
    readTime: "5 хв читання",
    content: `<p>macOS не має вбудованого способу обмеження максимальної гучності однієї програми, тому гучна програма відтворюється незалежно від того, на що встановлено повзунок системи. Щоб установити межу для однієї програми, скористайтеся мікшером панелі меню для кожної програми, наприклад <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: тримайте цю програму на рівні, скажімо, 40 відсотків, тоді як гучність вашої системи залишається більшою для всього іншого.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — обмежте максимальну гучність однієї гучної програми на Mac (захистіть свій слух)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Чому одна програма може раптово підірвати вас на Mac</h2>

<p>На macOS повзунок гучності на панелі меню або в Центрі керування є єдиним загальносистемним елементом керування. Кожна програма виливається в той самий вихід на тому самому рівні. В операційній системі немає вбудованого мікшера гучності для кожного додатка, як у Windows протягом багатьох років із панеллю Volume Mixer.</p>

<p>Цей дизайн має реальні наслідки для ваших вух. Якщо ви встановлюєте гучність системи високою, щоб чути тихий подкаст або тихий відеодзвінок, а потім перемикаєтеся на гру, сповіщення Discord, веб-сайт із великою кількістю реклами чи відео, яке було освоєно набагато голосніше, ця програма також відтворюватиметься на повному системному рівні. У результаті виходить класичний переляк: раптова стіна звуку з гучністю, яку ви ніколи не передбачали для цієї програми.</p>

<p>Для тих, хто має шум у вухах, чутливість до звуку або просто цінує свій слух, ця непередбачуваність є проблемою. Ви не намагаєтеся зробити все тихіше. Ви намагаєтеся гарантувати, що одна конкретна гучна програма ніколи не зможе перевищити рівень, який ви вважаєте безпечним.</p>

<h2>Що macOS може і не може робити тут</h2>

<p>Дозвольте мені бути чесним щодо обмежень, перш ніж щось рекомендувати.</p>

<ul>
<li><strong>Системний обсяг</strong> опускає все і відразу. Зменшіть його, щоб приборкати одну програму, і тихі програми стануть нечутними.</li>
<li><strong>Повзунки гучності в додатку</strong> існують у деяких програмах (медійних програвачах, деяких браузерах на вкладках), але не в більшості. Гра, відеодзвінок або рідна програма часто взагалі не мають незалежного регулювання гучності.</li>
<li><strong>Стеля апаратна справжня.</strong> Жодне програмне забезпечення не може передати сигнал гучніше, ніж максимальна потужність пристрою виведення. І навпаки, власне оволодіння гучністю програми, а також ваш DAC і навушники встановлюють, наскільки гучним буде «100 відсотків». Програмне забезпечення може надійно знизити рівень для кожної програми, але воно не може переписати фізику ваших навушників.</li>
</ul>

<p>Отже, чесною метою є не магічне обмеження гучності на рівні драйвера. Це практичне, надійне ослаблення для кожної програми: утримуйте вибрану програму на фіксованій частці вихідного сигналу системи, щоб вона ніколи не здивувала вас.</p>

<h2>Як обмежити гучність однієї програми за допомогою мікшера для кожної програми</h2>

<p>Мікшер гучності для кожного додатка перехоплює аудіо кожного додатка та дозволяє встановлювати його рівень незалежно. Ось робочий процес з <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, який знаходиться в рядку меню:</p>

<ul>
<li><strong>Відкрийте міксер.</strong> Клацніть піктограму панелі меню SoundDial. Ви побачите список усіх програм, які зараз відтворюють аудіо, кожна з яких має власний повзунок.</li>
<li><strong>Знайдіть гучний додаток.</strong> Знайдіть програму, яку потрібно обмежити, наприклад гру, браузер або інструмент для відеоконференцій.</li>
<li><strong>Встановити його стелю.</strong> Перетягніть повзунок цієї програми до безпечного рівня, скажімо, від 35 до 50 відсотків. Ця програма тепер відтворює цю частину вихідного сигналу системи, тоді як усі інші програми залишаються на місці.</li>
<li><strong>Залиште гучність системи там, де вона вам потрібна.</strong> Тримайте системний повзунок достатньо високо для тихих програм. Обмежений додаток залишається під контролем незалежно від цього.</li>
</ul>

<p>Оскільки рівень залежить від програми, ви фактично встановлюєте максимум для однієї програми. Навіть коли він намагається відтворити найгучніший вміст, найгучнішим тепер є вибрана вами частка повного.</p>

<h2>Зробіть шапку-приклейку з профілями</h2>

<p>Одне налаштування вручну допомагає, але рівні додатків можна скинути, коли ви виходите з програми та перезапускаєте її. Щоб створити безпечне для слуху налаштування, яке витримає перезавантаження, використовуйте <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>профілі обсягу. Збережіть профіль із бажаними рівнями для кожного додатка, наприклад «тиха ігрова ніч» з грою на 40 відсотків, музичним додатком 70 відсотків і додатком для дзвінків 90 відсотками. Викликайте його в один клік щоразу, коли сідаєте. Ваша стеля для гучного додатка повертається саме так, як ви її встановили.</p>

<p>Для захисту слуху варто знати ще дві особливості:</p>

<ul>
<li><strong>Вимкнення звуку для кожної програми</strong> дозволяє миттєво змусити замовкнути одного порушника, не торкаючись нічого іншого, корисно для програми, яка розсилає гучні сповіщення.</li>
<li><strong>Автоматичне пригнічення</strong> автоматично вимикає фоновий звук, коли починається щось більш важливе, щоб ви не перебували між двома гучними джерелами одночасно.</li>
</ul>

<blockquote><p>Програмне ослаблення дійсно ефективно для обмеження програми, але це один рівень захисту, а не медичний захист. Якщо у вас шум у вухах або чутливість до звуку, поєднайте стелю для кожного додатка з розумними загальними рівнями прослуховування та перервами. Жоден додаток не замінить звички дбати про гучність.</p></blockquote>

<h2>Примітка про посилення та чому це окремо</h2>

<p>Той самий мікшер для кожної програми, який обмежує гучну програму, також може підвищити надто тиху програму вище 100 відсотків, що зручно для програми, власний рівень гучності якої надто низький. Це дві сторони одного контролю: ви вирішуєте рівень кожної програми, вище чи нижче. Для захисту слуху ви просто вибираєте напрямок «вниз» і тримаєте його там.</p>

<h2>Коротка версія</h2>

<p>macOS не дозволить обмежити обсяг однієї програми самостійно, і це справжня прогалина ОС, а не помилка користувача. Мікшер панелі меню для кожного додатка закриває його: встановіть для гучного додатка фіксовану частку, збережіть його в профілі, і він ніколи більше не зможе вас підірвати, поки ваші інші додатки залишаться чутними.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> це одноразова покупка за 14,99 євро на Mac App Store, ізольованому середовищі без драйверів або DMG для встановлення. Якщо метою є захист ваших вух від одного непередбачуваного додатка, це найпростіший спосіб встановити цю межу та зберегти її.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Різний баланс лівого/правого боку для кожної програми на Mac — чи можливо це?",
    description: "Чи можете ви встановити різний лівий/правий стереобаланс для кожної програми на macOS? Чесно кажучи, ні — не нативно, і не з більшістю інструментів. Ось що насправді можливо і де реальні межі.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Чесно кажучи, ні — macOS не дозволяє встановлювати різний стереобаланс ліворуч/праворуч для кожної програми, і майже жоден інструмент сторонніх розробників не відображає справжнього панорамування для кожної програми. Ви можете встановити один глобальний баланс для свого пристрою виводу та керувати окремою програмою <em>обсяг</em>, але незалежно від програми <em>каструля</em> не є доступною функцією macOS.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Різний баланс лівого/правого боку для кожної програми на Mac — чи можливо це?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Баланс чи обсяг — це не одне й те саме</h2>

<p>Варто розділити дві ідеї, які часто плутають:</p>
<ul>
  <li><strong>Обсяг</strong> — наскільки гучна програма в цілому. Це єдиний рівень, застосований до обох каналів.</li>
  <li><strong>Баланс (пан)</strong> — як звук розподіляється між лівим і правим динаміками. Баланс «повний лівий» посилає все в лівий канал і глушить правий.</li>
</ul>

<p>Люди, які просять «різний баланс для кожної програми», зазвичай хочуть одну з двох речей: передати звук однієї програми в одне вухо (скажімо, дзвінок у ліве вухо, музика — у праве) або виправити різницю в слуху чи поганий динамік з одного боку — але лише для певних програм. Це законні цілі. Проблема в тому, де живе контроль.</p>

<h2>Чому macOS не може зробити це оригінально</h2>

<p>macOS має тільки один регулятор балансу, і він знаходиться на рівні вихідного пристрою. Ви знайдете це під <strong>Системні параметри → Звук → Вихід</strong>, де a <em>Баланс</em> повзунок зсуває весь мікс ліворуч або праворуч. Незалежно від того, до чого налаштовано повзунок <em>все</em> направляється на цей пристрій — кожна програма, кожен системний звук, усе одночасно.</p>

<p>У стандартному стеку аудіо macOS немає API, який би сказав «відображати аудіо цієї програми ліворуч, тієї програми — праворуч». Програми передають своє аудіосистемі вже зведене, і система застосовує один головний баланс на шляху до динаміків. Таким чином, операційна система просто не розкриває шар, де ви бажаєте панорамування для кожної програми. Це справжнє обмеження ОС, а не те, що можна ввічливо обійти утилітою панелі меню.</p>

<blockquote>На відміну від окремого додатка <em>обсяг</em> — чого macOS також не має оригінально, але які програми можуть реалізувати, торкаючись аудіопотоку — для кожної програми <em>баланс</em> вимагатиме повторного панорамування потоку кожного додатка незалежно, і цей хук недоступний для програм із ізольованим програмним середовищем.</blockquote>

<h2>Що SoundDial робить — і, чесно кажучи, що він не робить</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> дає вам контроль за програмою. macOS відсутній: незалежний <strong>обсяг</strong> для кожної запущеної програми, для кожної програми <strong>німий</strong>, обсяг на програму <strong>підвищення</strong> вище 100%, збережений обсяг <strong>профілі</strong>, автоматичне притуплення та швидке перемикання виводу з панелі меню.</p>

<p>Щоб бути відвертим з вами: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> елементи керування для кожної програми <em>гучність і приглушення</em>, а не стерео для кожної програми <em>панорамування</em>. Він не надсилатиме Safari у ваше ліве вухо та Spotify у праве. Якщо хтось скаже вам, що мікшер панелі меню справляє справжній баланс L/R для кожної програми на macOS, будьте скептичними — це не контроль, який надає ОС. SoundDial справді вирішує набагато більш поширену проблему: одна програма надто гучна або надто тиха відносно іншої.</p>

<h2>Справжні обхідні шляхи балансу за програмою</h2>

<p>Якщо вам справді потрібен розділений аудіо, ось чесні варіанти, приблизно від найпростішого до найскладнішого:</p>

<ul>
  <li><strong>Глобальний баланс (усі програми):</strong> Використовуйте Системні параметри → Звук → Вихід → Баланс. Це ваша єдина вбудована опція, і вона впливає на кожну програму. Корисно для виправлення кімнати або асиметрії слуху, марно для ізоляції однієї програми.</li>
  <li><strong>Окремі пристрої виведення:</strong> Це найближче до реального балансу на додаток. Направте додаток A на один вихідний пристрій, а додаток B — на інший, а потім установіть баланс кожного пристрою окремо. macOS дозволяє вибрати пристрій виводу в деяких програмах (і браузери/програми для зв’язку часто надають власний засіб вибору). Якщо додаток A вказує на пристрій, панорамований ліворуч, а додаток B — на пристрій, панорамований праворуч, ви фактично отримуєте баланс для кожного додатка — за умови, що обидва додатки дозволяють вибирати їхній вихід.</li>
  <li><strong>Інструменти маршрутизації віртуального аудіо:</strong> Утиліти, які створюють віртуальні пристрої та внутрішній мікшер, у деяких конфігураціях можуть направляти певні програми на певні канали. Це потужно, але складно, додає компонент у стилі водія та є надмірним для більшості людей. Це сфера стримерів і аудіоінженерів, а не випадкове вирішення проблеми «дзвінка в одному вусі».</li>
  <li><strong>Поділ апаратного забезпечення:</strong> Якщо мова йде про фізичні динаміки або різницю в слуху, апаратний мікшер або аудіоінтерфейс із поканальним керуванням повністю усуває проблему програмного забезпечення.</li>
</ul>

<h2>Коли обсяг кожного додатка – це те, що вам потрібно</h2>

<p>Багато запитів «Я хочу інший баланс для кожної програми» насправді є «одна програма заглушає іншу». Якщо метою є відеодзвінок, який можна почути під музику, або надто гучна гра поруч із чатом Discord, баланс не є інструментом, а незалежна гучність. Це саме те, що мікшер для кожної програми обробляє чітко, без віртуальних драйверів чи гімнастики маршрутизації.</p>

<p>Отже, чесний підсумок: справжній баланс ліворуч/праворуч для кожної програми не є функцією macOS, і жодна програма мікшера не підробить його переконливо. Ваші справжні маршрути – це повзунок глобального балансу або маршрутизація вихідних даних для окремої програми на окремі пристрої. Але якщо причиною болю є відносна гучність, це проблема вирішена.</p>

<p>Бажаєте окрему гучність, вимкнення звуку та посилення для кожної програми на вашому Mac із профілями, які можна зберегти, і без драйверів? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Отримайте SoundDial на Mac App Store</a> — €14,99, одноразово, у пісочниці.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Чому деякі додатки на Mac набагато голосніші за інші? (І як їх вирівняти)",
    description: "Додатки звучать дуже по-різному на Mac, тому що кожен з них налаштовується відповідно до власної цільової гучності, а macOS не має вбудованого регулятора гучності для кожної програми. Ось чому це відбувається та як вирівняти свої програми.",
    date: "2026-07-23",
    readTime: "6 хв читання",
    content: `<p>Додатки звучать дуже по-різному на вашому Mac, тому що кожен з них створений, освоєний і нормалізований відповідно до власної цільової гучності, а macOS не має вбудованого регулятора гучності для кожного додатка, щоб узгодити їх. Spotify, YouTube, Zoom і системні сповіщення проходять через один і той самий головний повзунок, тож ви постійно рухаєтеся ним вгору та вниз.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Чому деякі програми на Mac настільки голосніші за інші? (І як їх вирівняти)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Це не ваш Mac — це сам звук</h2>

<p>Єдиний системний повзунок гучності на macOS контролює кінцевий вихідний рівень для всього. Це не торкається відносної гучності, вбудованої в аудіопотік кожної програми. Ця базова лінія встановлюється задовго до того, як звук досягне ваших динаміків, і вона значно відрізняється від джерела до джерела.</p>

<p>Три речі зумовлюють ці відмінності:</p>

<ul>
<li><strong>Освоєння рівнів.</strong> Енергійний поп-трек майстерується набагато гарячіше, ніж тихий акустичний запис чи розмовний подкаст. Фільм, зведений для кінотеатру, навмисно зберігає тихий шепіт і гучні вибухи — це динамічний діапазон, а це означає, що середній рівень низький.</li>
<li><strong>Цілі нормалізації гучності.</strong> Потокові платформи налаштовують відтворення відповідно до цілі, виміряної в LUFS (одиниці гучності відносно повної шкали). Spotify має на меті близько -14 LUFS, YouTube приблизно -14 LUFS, Apple Music близько -16 LUFS. Додаток для відеоконференцій або гра повністю застосовує власну перевагу. Дві програми, «нормалізовані» для різних цілей, ніколи не збігатимуться одна з одною.</li>
<li><strong>Немає вирівнювання між програмами.</strong> Кожна програма нормалізує лише свій власний вміст. Ніщо не координує Spotify проти Zoom проти браузерної гри. macOS просто підсумовує їх і надсилає мікс.</li>
</ul>

<h2>Чому LUFS має значення (простими словами)</h2>

<p>Піковий рівень повідомляє вам про один найгучніший момент у сигналі. LUFS повідомляє, наскільки голосно щось насправді <em>відчуває</em> з плином часу, зважені на те, як працює людський слух. Ця різниця є причиною того, чому подкаст і танцювальний трек можуть досягти одного піку, але відчувати, що вони відрізняються один від одного за гучністю — трек витрачає набагато більше часу на межі.</p>

<blockquote>Тиша мішень LUFS означає більше простору та більший динамічний діапазон. Голосніша ціль означає більш послідовну, «завжди повну» стіну звуку. Ні те, ні інше не є неправильним, але коли програми націлені на різні цифри, ви відчуваєте, що одна програма кричить, а інша бурмоче.</blockquote>

<p>Це чесна першопричина. Це не помилка, яку можна виправити. Це фізика того, як створюється та доставляється аудіо, помножена на десяток програм, які ніколи не створювалися для узгодження одна з одною.</p>

<h2>Розрив macOS залишає відкритим</h2>

<p>Ось та частина, яка щиро засмучує людей: Windows протягом багатьох років поставляв Volume Mixer для кожного додатка. Ви можете перетягнути одну програму вниз і підняти іншу прямо з панелі завдань. macOS ніколи не включав цього. Параметри звуку дають вам лише головний повзунок і вибір вихідного пристрою.</p>

<p>Отже, на Mac ваші можливості традиційно обмежені:</p>

<ul>
<li>Налаштуйте внутрішній повзунок гучності кожної програми — якщо вона взагалі є. Багато програм (Zoom, більшість ігор, системні дзвінки) не виставляють придатну для використання програму.</li>
<li>Перемикайте основний повзунок вручну щоразу, коли змінюєте контекст.</li>
<li>Повністю заглушити одну річ, що є грубим виправленням, яке насправді нічого не збалансує.</li>
</ul>

<p>Жоден із них не запам’ятовує ваші переваги. Вийдіть і перезапустіть програму, і ви повернетесь на круги своя.</p>

<h2>Практичне виправлення: запам’ятовується обсяг на додаток</h2>

<p>Оскільки ви не можете змусити кожну службу повторно опанувати свій каталог, ефективне рішення полягає в тому, щоб додати відсутній рівень macOS, який ніколи не постачався: незалежний том, що запам’ятовується для кожної програми. Ось що саме <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> робить. Він розміщений у панелі меню та надає кожній запущеній програмі власний повзунок, тож ви можете перетягнути гучну програму вниз і підштовхнути тиху вгору, доки вона не сяде на рівень, який ви навіть відчуваєте.</p>

<p>Щоб вирівняти свої програми на практиці:</p>

<ul>
<li>відкритий <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> на панелі меню, і ви побачите кожну активну програму з власним елементом керування.</li>
<li>Зменште все, що вибухає (як правило, музичні чи відеопрограми, освоєні на гарячому) приблизно до 60-70%.</li>
<li>Залиште свій безшумний довідковий додаток (часто додаток для дзвінків або подкаст) на 100% і використовуйте для кожного окремого додатка <strong>підвищення</strong> щоб перевищити 100%, якщо він все ще занадто м’який.</li>
<li>Встановіть рівні один раз. SoundDial запам’ятовує обсяг кожної програми, тому баланс зберігається, коли ви її наступного разу відкриєте.</li>
</ul>

<p>Дві функції виконують тут більшу частину роботи з вирівнювання. <strong>Підвищення</strong> має значення, тому що багато додатків просто надто тихі навіть на максимумі — повзунок для кожного додатка, який лише зменшує гучність, не може їх врятувати, але той, який може посилити більше ніж на 100%, може. І <strong>об'ємні профілі</strong> дозволяють зберегти цілий набір рівнів — скажімо, профіль «концентруватись на музиці на низькому рівні, голосно на дзвінках» для роботи проти іншого міксу для ігор — і миттєво перемикатися між ними замість того, щоб переналаштовувати програму за програмою.</p>

<h2>Де це найбільше допомагає</h2>

<p>Найпоширенішим полегшенням є стрибок між музикою та зустріччю: потокове передавання музики, освоєне голосно, потім програма для виклику, яка звучить слабко порівняно з цим. Встановіть програму для дзвінків вище (або посиліть), зменшіть музику, і різке коливання гучності зникне. Те саме стосується тихої браузерної гри проти гучного відеоплеєра або системних сповіщень, які вискакують над усім.</p>

<p>Щоб було зрозуміло щодо обмежень: SoundDial балансує те, що видають ваші програми. Він не зможе повторно опрацювати погано створений трек і не зможе винайти деталі в аудіо, яке було змішано з дуже широким динамічним діапазоном. Це дає вам єдиний контроль macOS, який залишився поза увагою — стабільні рівні для кожної програми, які залишаються на місці.</p>

<p>Втомилися їздити головним повзунком кожного разу, коли ви перемикаєте програми? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> становить одноразово 14,99 євро на Mac App Store — ізольоване програмне середовище, без драйверів, без DMG — і нарешті кожній програмі надається власний обсяг пам’яті.</p>`,
  },
};
