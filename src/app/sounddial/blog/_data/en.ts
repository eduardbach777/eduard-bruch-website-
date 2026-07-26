import type { ArticleSet } from "./index";

export const enArticles: ArticleSet = {
  "mac-audio-podcasting-setup": {
    slug: "mac-audio-podcasting-setup",
    title: "Mac Audio for Podcasting: Control What You Hear While Recording",
    description:
      "Recording a podcast while monitoring levels, hearing your guest, and managing notifications — all competing for one volume slider. Here's a better setup.",
    date: "2026-03-05",
    readTime: "5 min read",
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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "3 min read",
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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "6 min read",
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
    readTime: "4 min read",
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
    readTime: "12 min read",
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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "6 min read",
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
    readTime: "7 min read",
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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "7 min read",
    content: `
<p>You updated macOS. Everything seemed fine — until you noticed there's no sound. Or sound is crackling. Or the volume is stuck. Or your audio output device is gone. Post-update audio issues happen with nearly every macOS release, and they range from mildly annoying to completely silent.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Sound Not Working After Update? Complete Fix Guide" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "6 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
    content: `
<p>One AirPod sounds fine. The other is noticeably quieter. Music feels off-center. Voices sound like they're coming from one side. This is one of the most common AirPods complaints, and it usually has a simple fix.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — One AirPod Louder Than the Other? Every Fix Explained" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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
    readTime: "5 min read",
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
    readTime: "8 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "8 min read",
    content: `
<p>You're listening to music and hear a pop. Then a crackle. Then a stutter where the audio cuts out for a fraction of a second and comes back. It's not the song — it's your Mac. Audio crackling on macOS is maddeningly common, and it has at least six different causes.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Fix Audio Crackling and Popping on Mac: Complete Guide" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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
    readTime: "7 min read",
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
    readTime: "7 min read",
    content: `
<p>You're on a video call. Slack keeps dinging. Music is playing in the background. You reach for the volume key and — everything gets quieter. The call, the music, the notifications. macOS has exactly one volume slider, and it controls everything at once.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Control Per-App Volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "6 min read",
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
    readTime: "4 min read",
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
    readTime: "4 min read",
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
    readTime: "5 min read",
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
    readTime: "6 min read",
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
    readTime: "10 min read",
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
    readTime: "5 min read",
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
    readTime: "5 min read",
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
    readTime: "6 min read",
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
    readTime: "7 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
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
    readTime: "6 min read",
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
    readTime: "8 min read",
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
    readTime: "7 min read",
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
    readTime: "6 min read",
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
    readTime: "9 min read",
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
    title: "The Best Background Music Alternative for Mac (2026)",
    description: "Background Music breaking on newer macOS? The most reliable per-app volume mixer alternative is SoundDial — a sandboxed Mac App Store app with boost and profiles.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>If Background Music has stopped working after a macOS update, the most reliable alternative is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> — a menu-bar per-app volume mixer from the Mac App Store. It gives every app its own volume slider, adds mute, boost, volume profiles, and auto-ducking, and it's fully sandboxed and Apple-reviewed, so there are no audio drivers to break on the next macOS release.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — The Best Background Music Alternative for Mac (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why Background Music breaks on newer macOS</h2>

<p>Background Music is a genuinely clever free, open-source project. It gave Mac users something Apple never has: a per-app volume mixer, the kind Windows has had for years. But its design is also the reason it keeps failing.</p>

<p>To route and control audio, Background Music installs a virtual audio device — a system-level driver that intercepts your Mac's sound. That approach worked well on older macOS, but every major release tightens security around kernel and audio extensions. The common symptoms users report:</p>

<ul>
<li>No sound at all after installing or after an OS update.</li>
<li>The virtual device fails to load, so audio routing silently stops.</li>
<li>The app needs a reinstall, a reboot, or manual driver removal to recover.</li>
<li>Development is community-driven and volunteer-paced, so fixes for a new macOS can lag.</li>
</ul>

<p>None of this makes Background Music "bad." It just means a free driver-based tool is fragile by nature, and if you rely on per-app volume every day, that fragility gets old fast.</p>

<h2>What to look for in a replacement</h2>

<p>Before picking any alternative, decide what you actually need:</p>

<ul>
<li><strong>Reliability across macOS updates.</strong> If it installs a kernel or audio extension, expect occasional breakage.</li>
<li><strong>Real per-app control.</strong> Independent volume and mute for each app is the baseline.</li>
<li><strong>Boost.</strong> Some apps (quiet meeting tools, certain browsers) are simply too quiet — you want to push past 100%.</li>
<li><strong>Convenience features.</strong> Profiles and auto-ducking are what turn a utility into something you keep open all day.</li>
<li><strong>Safe install.</strong> A sandboxed Mac App Store app can't touch system internals, so uninstalling is clean and updates are automatic.</li>
</ul>

<h2>Why SoundDial is the reliable pick</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> was built to solve exactly the problem Background Music users run into: they want per-app volume, but they don't want to babysit a driver. It lives in your menu bar and does the core job well:</p>

<ul>
<li><strong>Independent volume for every app</strong>, with per-app mute in the same panel.</li>
<li><strong>Per-app boost</strong> to make quiet apps loud enough to actually hear.</li>
<li><strong>Volume profiles</strong> — save a mix (say, "meeting" or "gaming") and switch instantly instead of dragging sliders every time.</li>
<li><strong>Auto-ducking</strong>, so background audio dips automatically when it should.</li>
<li><strong>Quick output switching</strong> between speakers, headphones, and other devices.</li>
</ul>

<p>The bigger difference is how it installs. SoundDial ships through the Mac App Store, which means it's Apple-reviewed and sandboxed. There's no DMG to drag, no audio driver or system extension, and no kernel access. That's the single most important reason it won't break the way Background Music does when a new macOS arrives — it isn't wired into the parts of the system that Apple keeps locking down.</p>

<p>It costs <strong>€14.99 one-time</strong>. Not free, but there's no subscription, and you're paying for something maintained and safe to install.</p>

<h2>SoundDial vs. Background Music vs. the free tools</h2>

<p>Background Music isn't your only free option, so here's an honest lay of the land:</p>

<ul>
<li><strong>Background Music (free, open-source):</strong> per-app volume, but driver-based, prone to breaking on newer macOS, and it lacks boost, profiles, and auto-ducking.</li>
<li><strong>FineTune (free, open-source):</strong> a lightweight menu-bar per-app volume app. Good if free is your only requirement, but thin on the extras.</li>
<li><strong>eqMac (free):</strong> primarily a system EQ and booster, not a true per-app mixer.</li>
<li><strong>SoundSource by Rogue Amoeba (~$39):</strong> the pro-grade option, with per-app EQ and full output routing. Excellent, but it's more than double SoundDial's price and still requires a download plus an audio capture driver.</li>
<li><strong>SoundDial (€14.99, Mac App Store):</strong> the middle ground — real per-app volume, mute, boost, profiles, and ducking, delivered as a clean sandboxed install with no drivers.</li>
</ul>

<p>If you need per-app EQ or complex studio routing, SoundSource is worth the extra money. If you want a free tinkerer's tool and can tolerate the occasional breakage, FineTune or Background Music will do. But if your goal is "give every app its own volume and stop having it break every macOS update," SoundDial hits that target for the least hassle.</p>

<h2>The macOS context that makes this necessary</h2>

<p>It's worth saying plainly: macOS has no built-in per-app volume mixer. Windows has had one for years in its volume flyout, but on a Mac the system slider controls everything at once. That gap is the entire reason tools like Background Music and SoundDial exist. Since Apple isn't filling it, the practical question is just which third-party approach you trust — a free driver that fights the OS, or a sandboxed app that works with it.</p>

<p>Ready to stop fighting broken audio drivers? Get <a href="https://apps.apple.com/app/id6772792641">SoundDial on the Mac App Store</a> for €14.99 and control every app's volume the reliable way.</p>
`,
  },
  "soundsource-vs-sounddial-mac": {
    slug: "soundsource-vs-sounddial-mac",
    title: "SoundSource vs SoundDial: Which Mac Volume App Wins?",
    description: "SoundSource ($39, pro-grade) vs SoundDial (€14.99, App Store). Compare per-app volume, boost, profiles, and auto-ducking to pick the right Mac mixer for you.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `
<p>If you just want per-app volume control that installs cleanly and costs less, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is the better buy for most people: €14.99 one-time, from the Mac App Store, with per-app volume, mute, boost, profiles, and auto-ducking. Pick Rogue Amoeba's SoundSource (~$39) only if you specifically need per-app EQ and advanced output routing.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundSource vs SoundDial: Which Mac Volume App Wins?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>The short version</h2>
<p>macOS still has no built-in per-app volume mixer. Windows has had one for years, but on a Mac the system volume slider moves everything at once. Both SoundSource and SoundDial exist to fix that gap. They just aim at different buyers.</p>
<ul>
<li><strong>SoundDial</strong> — €14.99 one-time, Mac App Store, menu-bar app. Independent volume per app, per-app mute, per-app boost, saved profiles, auto-ducking, and quick output switching. Sandboxed and Apple-reviewed, so no driver install.</li>
<li><strong>SoundSource</strong> — ~$39, direct download from Rogue Amoeba. Everything above plus per-app EQ, advanced output routing, and audio effects. Requires a small audio-capture driver to be installed.</li>
</ul>

<h2>Price and how you buy it</h2>
<p>This is the clearest split. SoundSource is roughly $39 and sold directly by Rogue Amoeba. SoundDial is €14.99 as a one-time purchase on the Mac App Store — a little over a third of the price.</p>
<p>Because <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ships through the App Store, it's sandboxed, notarized, and Apple-reviewed. You click Get, it installs, and it's done. There's no DMG to mount, no permissions to grant to a kernel-adjacent component, and no audio driver or system extension. It also rides along with your normal App Store update flow and syncs to your other Macs on the same Apple ID.</p>
<p>SoundSource downloads outside the App Store and installs an audio-capture driver so it can intercept and process each app's audio. That's what unlocks its pro features, but it also means an extra install step and a component that lives deeper in the system.</p>

<h2>What SoundSource does that SoundDial doesn't</h2>
<p>SoundSource earns its price for a specific kind of user. If any of these describe you, it's worth the extra money:</p>
<ul>
<li><strong>Per-app EQ.</strong> You want a 10-band equalizer on, say, Spotify while leaving Zoom flat. SoundDial does volume, not EQ.</li>
<li><strong>Advanced output routing.</strong> Sending one app to your speakers and another to headphones or a specific interface, with fine control.</li>
<li><strong>Audio effects and plugins.</strong> SoundSource can host effects on a per-app basis — genuinely pro territory.</li>
</ul>
<p>Rogue Amoeba has a long, trusted track record. SoundSource is a serious tool and it's priced like one. If you're an audio pro or a heavy multi-output user, it's the right call.</p>

<h2>What SoundDial does better for everyday use</h2>
<p>Most people who search for a "Mac volume mixer" don't need an EQ. They need one app quieter than another, and they don't want to fight an installer to get it. SoundDial covers that cleanly, and adds a couple of things worth calling out:</p>
<ul>
<li><strong>Per-app boost.</strong> Some apps and videos are just too quiet even at 100%. SoundDial can push a single app above its normal ceiling so a quiet meeting or podcast is finally audible.</li>
<li><strong>Volume profiles.</strong> Save a full setup — music low, browser muted, call app loud — and recall it instantly. Great for switching between "focus," "meeting," and "gaming" without dragging five sliders.</li>
<li><strong>Auto-ducking.</strong> Automatically dip background audio (like music) when another source starts, so notifications, calls, or video don't get buried.</li>
<li><strong>Quick output switching.</strong> Jump between speakers, headphones, and other devices from the menu bar.</li>
</ul>
<p>All of that runs from a menu-bar dropdown, so it's a click away and out of your face the rest of the time.</p>

<h2>The free alternatives, briefly</h2>
<p>You'll see a few free options mentioned in the same searches. They're worth knowing about:</p>
<ul>
<li><strong>Background Music</strong> — free and open-source, gives you basic per-app volume. But it can break on newer macOS releases, and it has no boost, profiles, or auto-ducking.</li>
<li><strong>FineTune</strong> — a free open-source menu-bar volume app. Simple, but limited in scope.</li>
<li><strong>eqMac</strong> — free EQ and system booster, more of a system-wide EQ tool than a true per-app mixer.</li>
</ul>
<p>Free is great if it works for you. The tradeoff is compatibility and support: open-source audio tools can lag behind macOS updates, and features like profiles and ducking generally aren't there. If your setup matters to your workday, paying once for something reviewed and maintained is usually the calmer path.</p>

<h2>Which one should you buy?</h2>
<p>Answer one question: do you need per-app EQ or advanced output routing?</p>
<ul>
<li><strong>Yes</strong> — buy SoundSource. It's built for that, and the ~$39 is fair for a pro tool with a driver-level engine.</li>
<li><strong>No, I just want per-app volume, boost, and a clean install</strong> — buy SoundDial. You get the mixing that actually matters day to day, plus profiles and auto-ducking, for €14.99 and zero driver hassle.</li>
</ul>
<p>For the large majority of Mac users, that second bucket is the honest answer. You're paying for control over volume, not for a studio.</p>

<p><strong>Ready to fix Mac volume the easy way?</strong> Get <a href="https://apps.apple.com/app/id6772792641">SoundDial on the Mac App Store</a> — €14.99 one-time, no drivers, no DMG. Per-app volume, boost, profiles, and auto-ducking in one click.</p>
`,
  },
  "cheaper-soundsource-alternative-mac": {
    slug: "cheaper-soundsource-alternative-mac",
    title: "A Cheaper SoundSource Alternative for Per-App Volume on Mac",
    description: "Want SoundSource-style per-app volume without the $39 price? SoundDial is a €14.99 Mac App Store menu-bar mixer with boost, profiles, and auto-ducking.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>If you want SoundSource-style per-app volume control on your Mac but $39 feels steep, the fastest reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. It's a €14.99 one-time menu-bar mixer from the Mac App Store that gives every app its own volume slider, mute, and boost — plus profiles and auto-ducking — with no download or audio driver to install.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A Cheaper SoundSource Alternative for Per-App Volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why people look for a SoundSource alternative</h2>
<p>SoundSource by Rogue Amoeba is excellent software. It's genuinely pro-grade: per-app equalizers, audio effects, and output routing that lets you send one app to your headphones and another to your speakers. But that power comes with two friction points. First, the price — around $39. Second, it installs a system-level audio capture driver outside the App Store, which some people are cautious about on a work machine or simply don't want to manage across macOS updates.</p>
<p>For most people, the real need is much simpler: turn Spotify down without touching a Zoom call, mute a noisy browser tab's app, or boost a quiet video player past 100%. If that's you, you're paying pro money for features you'll never open.</p>

<h2>What SoundDial does — and what it costs</h2>
<p>SoundDial focuses on the per-app volume job and does it cleanly. Open the menu bar and you get a live list of everything making sound, each with its own control:</p>
<ul>
<li><strong>Independent volume per app</strong> — one slider per application, adjusted in real time.</li>
<li><strong>Per-app mute</strong> — silence one app instantly without pausing anything else.</li>
<li><strong>Per-app volume boost</strong> — push quiet apps above their normal maximum when a video or call is too soft.</li>
<li><strong>Volume profiles</strong> — save a mix (e.g. "Focus," "Gaming," "Meeting") and switch in one click.</li>
<li><strong>Auto-ducking</strong> — automatically dip other apps when something more important starts playing.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other devices from the same menu.</li>
</ul>
<p>The price is <strong>€14.99, paid once</strong> — no subscription. That's roughly a third of SoundSource's cost, for the volume features most users actually reach for.</p>

<h2>The App Store difference</h2>
<p>Because SoundDial ships through the <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, it's Apple-reviewed and sandboxed. There's no DMG to drag, no kernel extension or audio capture driver to approve, and no separate updater. You install it like any other App Store app and it works. When macOS updates, you're not left wondering whether a low-level audio component still functions.</p>
<blockquote>macOS still has no built-in per-app volume mixer. Windows has had one for years, but on a Mac the system volume is all-or-nothing — which is exactly the gap these tools fill.</blockquote>

<h2>How it compares to the free options</h2>
<p>SoundSource isn't your only alternative. There are free tools, and being honest about them matters:</p>
<ul>
<li><strong>Background Music</strong> is a free, open-source per-app volume app. It works for many people, but it can break on newer macOS releases, updates are irregular, and it has no boost, no profiles, and no auto-ducking.</li>
<li><strong>FineTune</strong> is a free, open-source menu-bar volume app — lightweight and handy, but again lacks the profile and ducking features.</li>
<li><strong>eqMac</strong> is a free EQ and system booster. It's more of an equalizer/boost tool than a true per-app mixer, and it isn't focused on individual app sliders.</li>
</ul>
<p>Free is a legitimate choice. The tradeoff is reliability and features: open-source audio tools depend on volunteer maintenance and can lag behind macOS changes, and none of the free options bundle profiles plus auto-ducking the way SoundDial does. If your setup is simple and you don't mind occasional breakage, a free app may be enough. If you want something that's maintained, sandboxed, and just works, the €14.99 is buying you exactly that.</p>

<h2>Quick decision guide</h2>
<ul>
<li><strong>You need per-app EQ, audio effects, and routing one app to a different output device</strong> → SoundSource is worth its price. Nothing here fully replaces that.</li>
<li><strong>You mainly need per-app volume, mute, boost, profiles, and ducking — without drivers</strong> → SoundDial at €14.99 is the better-value pick.</li>
<li><strong>You want free and don't mind maintenance risk</strong> → try Background Music, FineTune, or eqMac first.</li>
</ul>

<h2>Setting it up</h2>
<p>Getting started takes about a minute:</p>
<ul>
<li>Install SoundDial from the Mac App Store — no external download.</li>
<li>Grant the audio permission macOS prompts for on first launch.</li>
<li>Play sound in a couple of apps and open the menu-bar icon; you'll see each one with its own slider.</li>
<li>Drag to set levels, tap to mute, or push past 100% to boost.</li>
<li>Save your setup as a profile, and turn on auto-ducking if you want other apps to quiet down during calls or media.</li>
</ul>
<p>That's the whole workflow — no configuration files, no restart, no system extension to bless.</p>

<h2>The bottom line</h2>
<p>SoundSource is the more powerful tool, but most people looking for it just want per-app volume that behaves. SoundDial delivers that for about a third of the price, ships safely through the App Store, and adds profiles and auto-ducking on top — without a single driver to install.</p>

<p>Ready to control every app's volume independently? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for €14.99, one time.</p>
`,
  },
  "finetune-alternative-mac": {
    slug: "finetune-alternative-mac",
    title: "FineTune Alternative for Mac: A Supported Per-App Volume Mixer",
    description: "Tried the free FineTune menu-bar app and want something maintained and App Store-safe? Here is the best FineTune alternative for per-app volume on Mac.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>If you liked FineTune but want something actively maintained and installed from a trusted source, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is the fastest reliable fix. It is a Mac App Store menu-bar per-app volume mixer with independent volume, per-app mute, volume boost, saved profiles, and auto-ducking. Apple-reviewed and sandboxed, it costs €14.99 once with no drivers to install.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune Alternative for Mac: A Supported Per-App Volume Mixer" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why look for a FineTune alternative at all?</h2>

<p>FineTune is a nice idea: a free, open-source menu-bar app that gives you per-app volume control on macOS, something Apple still refuses to build in (Windows has had a per-app mixer for years). For a lot of people it does the basic job. But there are real reasons users go looking for something else.</p>

<ul>
<li><strong>Maintenance is uncertain.</strong> Open-source hobby projects live and die on a single maintainer's free time. When macOS ships a major update, audio-related apps are often the first to break, and you are left waiting for a volunteer fix that may never come.</li>
<li><strong>Feature ceiling.</strong> FineTune covers per-app volume and little else. If you want boost above 100%, saved profiles, or automatic ducking, you have to bolt on other tools.</li>
<li><strong>Trust and updates.</strong> Installing a raw build outside the App Store means no automatic review, no sandbox guarantees, and manual updates you have to track yourself.</li>
</ul>

<p>None of this makes FineTune bad. It just means that if you rely on per-app audio every day, you probably want something with a support model behind it.</p>

<h2>What SoundDial does differently</h2>

<p>SoundDial starts from the same core idea, a menu-bar mixer with a slider for every running app, then goes further with the features power users actually ask for.</p>

<ul>
<li><strong>Independent volume per app.</strong> Turn Spotify down, keep your call at full volume, mute a noisy browser tab's app entirely, all from one menu.</li>
<li><strong>Per-app volume boost.</strong> Push a quiet app above its normal ceiling when a podcast or video was mastered too low. FineTune does not do this.</li>
<li><strong>Volume profiles.</strong> Save a mix, "focus", "gaming", "meetings", and switch your whole setup in one click instead of nudging five sliders.</li>
<li><strong>Auto-ducking.</strong> Automatically lower background audio when something more important starts playing, so music dips when a call comes in.</li>
<li><strong>Quick output switching.</strong> Jump between speakers, headphones, and other outputs without diving into System Settings.</li>
</ul>

<p>Because <a href="https://apps.apple.com/app/id6772792641">SoundDial ships through the Mac App Store</a>, it is Apple-reviewed and sandboxed, installs cleanly, and updates through the same mechanism as every other App Store app. There is no DMG to drag, no audio driver or system extension, and no security prompt asking you to allow a kernel-level component.</p>

<h2>SoundDial vs. FineTune and the other free tools</h2>

<p>FineTune is not the only free option, and it helps to see the whole landscape honestly.</p>

<ul>
<li><strong>FineTune</strong> — Free, open-source, menu-bar per-app volume. Simple and lightweight, but no boost, no profiles, no ducking, and maintenance depends on the community.</li>
<li><strong>Background Music</strong> — Free and open-source, routes and adjusts per-app audio. Genuinely useful, but it can break on newer macOS releases and lacks boost, profiles, and ducking.</li>
<li><strong>eqMac</strong> — Free EQ and system booster. Great if you mainly want an equalizer, but it is not a per-app mixer.</li>
<li><strong>SoundSource (Rogue Amoeba)</strong> — The pro-grade option at around $39, with per-app EQ and output routing. Excellent, but it needs a download plus an audio-capture driver, and it costs more than twice as much.</li>
<li><strong>SoundDial</strong> — €14.99 one-time, App Store-safe, no drivers. Adds boost, profiles, and auto-ducking on top of the per-app volume basics.</li>
</ul>

<p>The honest summary: if you want the absolute cheapest thing and only need basic per-app volume, the free tools can work. If you want per-app EQ and routing and do not mind paying and installing a driver, SoundSource is the heavyweight. SoundDial sits in the sweet spot, more capable than the free apps, dramatically cheaper than SoundSource, and safer to install than either because Apple reviews and sandboxes it.</p>

<h2>Moving over from FineTune</h2>

<p>Switching takes a couple of minutes and there is no cleanup ritual.</p>

<ul>
<li>Install SoundDial from the Mac App Store. No installer, no driver approval, no restart.</li>
<li>Click the SoundDial icon in your menu bar to see a slider for each running app.</li>
<li>Set your everyday mix, then save it as a profile so you can recall it instantly.</li>
<li>Optionally turn on auto-ducking so background audio steps aside for calls and alerts.</li>
<li>When you are happy, quit FineTune. Since neither app installs system drivers, there is nothing lingering to uninstall.</li>
</ul>

<p>You keep the thing you liked about FineTune, a clean menu-bar mixer that Apple never gave you, and you gain the boost, profiles, ducking, and long-term support that a maintained App Store app provides.</p>

<h2>The bottom line</h2>

<p>FineTune proves the concept: per-app volume belongs in the menu bar. SoundDial is what that concept looks like with a real support model, more features, and App Store safety, for a one-time €14.99 instead of a bet on volunteer upkeep.</p>

<p>Ready for a per-app mixer that stays maintained? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and control every app's volume in seconds.</p>
`,
  },
  "eqmac-alternative-per-app-volume-mac": {
    slug: "eqmac-alternative-per-app-volume-mac",
    title: "eqMac Alternative for Real Per-App Volume on Mac",
    description: "Loved eqMac's boost but need proper per-app volume, mute, and profiles? SoundDial is the fastest Mac App Store fix — €14.99, sandboxed, no drivers.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>If you used eqMac for its EQ and volume booster but really want independent volume for each app — plus mute, boost, and saved profiles — the fastest reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>. It's a Mac App Store menu-bar mixer: set a level per app, boost quiet ones, and switch profiles instantly. €14.99 one-time, sandboxed, no drivers to install.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — eqMac Alternative for Real Per-App Volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>eqMac vs. what you actually need</h2>

<p>eqMac is a solid free tool, and its system-wide equalizer and volume booster are genuinely useful. But eqMac is built around one master EQ and one master output. It doesn't give you a real per-app volume mixer — the thing Windows has had for years and macOS still doesn't ship natively.</p>

<p>So if your real problem is "Spotify is too loud while I'm on a call" or "this one game blows out my ears but everything else is fine," eqMac isn't the right shape for the job. You end up riding a single master slider or fiddling with each app's internal volume. That's the gap SoundDial fills.</p>

<h2>What SoundDial does that eqMac doesn't</h2>

<ul>
<li><strong>Independent volume per app</strong> — Music at 40%, a browser at 100%, a video call at 70%, all at once, all remembered.</li>
<li><strong>Per-app mute</strong> — silence one noisy app instantly without touching anything else.</li>
<li><strong>Per-app boost</strong> — push a quiet app past its normal ceiling, the way eqMac's booster does, but targeted at a single app instead of the whole system.</li>
<li><strong>Volume profiles</strong> — save setups like "Focus," "Gaming," or "Meeting" and switch the whole mix in one click.</li>
<li><strong>Auto-ducking</strong> — automatically drop background audio when something more important starts, so you don't scramble for a slider mid-call.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other outputs from the menu bar.</li>
</ul>

<p>The overlap with eqMac is basically the boost. Everything else — the mixer, mute, profiles, ducking — is territory eqMac was never designed to cover.</p>

<h2>Do you still want EQ?</h2>

<p>Be honest about which problem you're solving. If you genuinely need frequency EQ — cutting bass, taming harsh highs, shaping your whole system's tone — then eqMac still has a place, and it's free. SoundDial is a volume mixer, not an equalizer.</p>

<p>But most people reach for eqMac's booster not because they want to shape frequencies, they want one app louder or the mix balanced. If that's you, a dedicated mixer is the cleaner answer. You can even run both: keep eqMac for a system-wide EQ curve and use SoundDial for per-app levels. They don't fight over the same job.</p>

<h2>How it compares to the other Mac audio tools</h2>

<p>Since you're already tool-hunting, here's the honest landscape:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — the pro-grade option at around $39, with per-app EQ and full output routing. Powerful, but it needs a direct download and installs an audio capture driver. Overkill and pricier if all you want is per-app volume with profiles.</li>
<li><strong>Background Music</strong> — free and open source, but it can break on newer macOS releases and has no boost, no profiles, and no auto-ducking. Great when it works, frustrating when it doesn't.</li>
<li><strong>FineTune</strong> — a free open-source menu-bar app. Worth a look if $0 is the hard requirement, though it's lighter on features and polish.</li>
<li><strong>eqMac</strong> — free EQ plus booster, but no true per-app mixer, as covered above.</li>
</ul>

<p>SoundDial sits in the sweet spot: more focused and cheaper than SoundSource, more capable and more reliable than the free options, and it does the per-app job eqMac doesn't.</p>

<h2>Why the Mac App Store matters here</h2>

<p>Several of these tools require a direct download and a kernel-level or capture audio driver. Those work, but they're the kind of thing that can snag on a macOS update or trip up on a locked-down work Mac.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ships through the Mac App Store instead. That means it's Apple-reviewed and sandboxed, it installs cleanly with no DMG to drag, and there are no audio drivers or system extensions to approve. Updates arrive through the App Store like any other app, and uninstalling is a normal delete. For a menu-bar utility that touches your audio, that lower-friction, lower-risk path is worth a lot.</p>

<h2>The quick setup</h2>

<ul>
<li>Install SoundDial from the Mac App Store — no restart, no driver prompt.</li>
<li>Open the menu-bar icon; every app currently making sound shows up with its own slider.</li>
<li>Set levels, mute what you don't need, and boost anything too quiet.</li>
<li>Save the arrangement as a profile, then create more for gaming, calls, or focus.</li>
<li>Turn on auto-ducking so background audio steps aside automatically.</li>
</ul>

<p>That's the whole loop. Within a couple of minutes you have the per-app control eqMac's booster only hinted at.</p>

<p><strong>Ready for real per-app volume on your Mac?</strong> <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 one-time, sandboxed, no drivers, and it does exactly what a menu-bar mixer should.</p>
`,
  },
  "cheapest-volume-mixer-mac-2026": {
    slug: "cheapest-volume-mixer-mac-2026",
    title: "The Cheapest Good Volume Mixer for Mac in 2026",
    description: "Looking for the cheapest good per-app volume mixer for Mac in 2026? Compare SoundDial, SoundSource, Background Music, FineTune and eqMac on price, safety and features.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `
<p>The best value per-app volume mixer for Mac in 2026 is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a menu-bar app on the Mac App Store for a one-time €14.99. It gives every app its own volume slider, plus mute, boost, profiles and auto-ducking — no drivers, no subscription, and no risky downloads. It's the cheapest paid option that actually works reliably.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — The Cheapest Good Volume Mixer for Mac in 2026" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why "cheapest" needs a definition</h2>
<p>There are free volume tools for Mac, so if the only goal is spending zero, you have options. But free usually costs you somewhere else: fragility on new macOS versions, missing features like boost or profiles, or an install process that involves an audio-capture driver you have to trust. "Cheapest good" means the lowest price that still gets you a stable, full-featured mixer you'll keep using. That's the lens we'll use here.</p>

<h2>First, the thing macOS doesn't do</h2>
<p>Windows has had a per-app volume mixer for years — right-click the speaker icon and set each app independently. macOS still has nothing equivalent built in. You get one master volume and whatever internal slider an app happens to ship (Music, some browsers). There's no system-wide way to make Slack quieter than Spotify, or to boost a quiet video call above everything else. Every option below exists to fill that gap.</p>

<h2>The contenders, priced honestly</h2>

<h2>SoundDial — €14.99, one-time</h2>
<p>SoundDial lives in your menu bar and gives each running app an independent volume slider. Beyond the basics, it adds the features people actually reach for:</p>
<ul>
<li><strong>Per-app boost</strong> — push a too-quiet app above 100% instead of straining to hear it.</li>
<li><strong>Per-app mute</strong> — silence one app without touching the rest.</li>
<li><strong>Volume profiles</strong> — save a "work call" or "movie night" mix and recall it instantly.</li>
<li><strong>Auto-ducking</strong> — automatically drop background audio when something more important plays.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones and other devices from the same menu.</li>
</ul>
<p>Because it's on the Mac App Store, it's sandboxed, Apple-reviewed and installs cleanly — no DMG, no kernel extension, no audio driver to approve. You pay <a href="https://apps.apple.com/app/id6772792641">€14.99 once</a> and own it. For most people, this is the sweet spot: cheap enough to be an easy yes, complete enough that you won't outgrow it.</p>

<h2>SoundSource — ~$39, the pro option</h2>
<p>Rogue Amoeba's SoundSource is the gold standard for power users. It does per-app volume and mute like SoundDial, but goes further with per-app equalizers and full output routing (send one app to headphones, another to speakers). It's genuinely excellent — but it's roughly $39, and it installs outside the App Store with an audio-capture component you have to grant permission to. If you need per-app EQ or complex routing, it's worth the money. If you just want a clean, cheap mixer, you're paying for capabilities you may never touch.</p>

<h2>Background Music — free, open-source</h2>
<p>Background Music is a well-known free, open-source app that offers per-app volume and auto-pause. The catch: it hooks deep into Core Audio via a virtual driver, and it has a long history of breaking on new macOS releases, sometimes needing manual fixes or a reinstall after updates. It also lacks boost, saved profiles and auto-ducking. Great for tinkerers who don't mind maintenance; frustrating if you just want it to work.</p>

<h2>FineTune — free, menu-bar</h2>
<p>FineTune is a free, open-source menu-bar volume app. It's lightweight and pleasant, and for simple per-app adjustment it can be enough. But being a small free project, it doesn't match the feature depth — no profiles, no auto-ducking, and boost/output handling are limited. Zero cost, fewer guarantees on longevity and support.</p>

<h2>eqMac — free, EQ + booster</h2>
<p>eqMac is a free system-wide equalizer with a volume booster. It's more about shaping tone and loudness across your whole Mac than mixing individual apps, so it's a different tool for a different job. If you specifically want per-app control, eqMac isn't really the answer, though it's a fine free EQ.</p>

<h2>Price vs. value: the honest table</h2>
<ul>
<li><strong>Truly free, but with tradeoffs:</strong> Background Music (fragile, driver-based), FineTune (thin features), eqMac (EQ, not a mixer).</li>
<li><strong>Cheapest complete paid app:</strong> SoundDial at €14.99 — boost, profiles, ducking, App Store safety.</li>
<li><strong>Premium/pro:</strong> SoundSource at ~$39 — EQ and routing, non-App-Store install.</li>
</ul>
<p>Put another way: SoundDial costs roughly a third of SoundSource while covering the features 90% of people actually want. And unlike the free options, it won't quietly break after a macOS update, because it doesn't rely on a fragile system-level audio driver.</p>

<h2>Which should you pick?</h2>
<p>If you're a pro who needs per-app EQ and to route apps to different outputs, buy SoundSource — it earns its price. If you love open-source and don't mind occasional breakage, try Background Music or FineTune for free. But if you want the cheapest option that just works — independent volume, boost, mute, saveable profiles and auto-ducking, installed safely from the App Store — SoundDial is the clear value winner in 2026.</p>

<blockquote>The best mixer isn't the one with the most features or the lowest price — it's the one you set up once and forget about. At €14.99, SoundDial makes that an easy call.</blockquote>

<p>Ready to give every app its own volume? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for a one-time €14.99 — no subscription, no drivers, no risk.</p>
`,
  },
  "windows-volume-mixer-for-mac": {
    slug: "windows-volume-mixer-for-mac",
    title: "Windows Volume Mixer for Mac: Get Per-App Volume Control",
    description: "Missing the Windows Volume Mixer on your Mac? macOS has no built-in per-app volume control. Here's the fastest way to get it: SoundDial, a €14.99 menu-bar mixer.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>macOS has no built-in Volume Mixer like Windows, so you can't set per-app volume from System Settings. The fastest, reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a €14.99 menu-bar app from the Mac App Store. It gives every app its own volume slider, mute, and boost — no drivers, no DMG, no risky installs.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Windows Volume Mixer for Mac: Get Per-App Volume Control" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why the Windows Volume Mixer has no Mac equivalent</h2>

<p>If you switched from Windows, one of the first things you'll miss is the Volume Mixer: right-click the speaker icon, and every running app gets its own slider. Turn Chrome down, keep Discord loud, mute Spotify — all in one place.</p>

<p>macOS simply doesn't ship this. Apple's volume control is a single system-wide slider. Whatever level you set applies to everything at once. There's no per-app option hidden in System Settings, no Terminal command, no accessibility toggle. It's a genuine gap, and it's been that way for years.</p>

<p>The reason is architectural: apps route audio through Core Audio to your output device, and the OS doesn't expose a user-facing mixer for the individual streams. To recreate the Windows experience, you need a third-party app that sits in that audio path and gives you the controls Apple left out.</p>

<h2>The closest match: SoundDial</h2>

<p>SoundDial is a menu-bar per-app volume mixer built specifically for this. Click its icon and you get a clean list of everything playing audio, each with its own slider. It's the most direct "Windows Volume Mixer for Mac" you can install, and it does a few things the Windows mixer never could:</p>

<ul>
<li><strong>Independent volume per app</strong> — the core feature. Set Chrome to 40%, Zoom to 100%, music to 20%.</li>
<li><strong>Per-app mute</strong> — silence one app without touching the rest.</li>
<li><strong>Per-app volume boost</strong> — push a quiet app <em>above</em> 100% when its own audio is too low.</li>
<li><strong>Volume profiles</strong> — save a mix (e.g. "work call" or "gaming") and recall it instantly instead of re-dragging sliders.</li>
<li><strong>Auto-ducking</strong> — automatically lower background audio when something more important starts, like a call.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other devices from the same menu.</li>
</ul>

<p>Because it's on the <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a>, it's Apple-reviewed and sandboxed. It installs cleanly with one click — no DMG to drag, no audio driver or system extension to approve, no security prompts. At €14.99 one-time (no subscription), it's the simplest way to close the gap.</p>

<h2>How to set up per-app volume on your Mac</h2>

<ol>
<li>Install SoundDial from the Mac App Store.</li>
<li>Grant the one-time audio permission it requests on first launch.</li>
<li>Click the SoundDial icon in your menu bar.</li>
<li>Drag the slider next to any app to set its volume, or hit mute/boost.</li>
<li>Optionally, save the current mix as a profile so you can restore it later.</li>
</ol>

<p>That's the whole workflow. It behaves like the Windows mixer you already know, just from the menu bar instead of a right-click on the taskbar.</p>

<h2>How SoundDial compares to other options</h2>

<p>SoundDial isn't the only tool in this space, so here's an honest look at the alternatives.</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba)</strong> — around $39, and genuinely pro-grade: per-app EQ, output routing per app, effects. But it requires a direct download plus an audio capture driver, and it's overkill (and pricier) if you just want per-app volume. Choose it if you need EQ and routing; choose SoundDial if you want the mixer without the complexity or the driver.</li>
<li><strong>Background Music</strong> — free and open-source, which is great. The catch: it can break on newer macOS versions, and it lacks boost, saved profiles, and auto-ducking. Fine if you're comfortable troubleshooting open-source audio drivers; less ideal if you want something that just works.</li>
<li><strong>FineTune</strong> — a free open-source menu-bar app. Lightweight and worth a look if budget is the priority, but you're trading polish, profiles, and App Store safety for free.</li>
<li><strong>eqMac</strong> — a free EQ and system-wide booster. It's an equalizer first, not a per-app mixer, so it solves a different problem.</li>
</ul>

<p>The trade-off is simple. Free tools cost nothing but can be fragile or feature-thin. SoundSource is powerful but expensive and driver-based. SoundDial sits in the sweet spot: a one-time €14.99, App Store safety and sandboxing, and the profiles + auto-ducking that the free options skip.</p>

<blockquote>If all you want is the Windows Volume Mixer experience — per-app sliders, mute, and boost, installed safely in seconds — SoundDial is the most direct match.</blockquote>

<h2>The bottom line</h2>

<p>macOS won't give you a Volume Mixer, and it probably never will. But you don't have to live with one system-wide slider. A dedicated menu-bar mixer restores the per-app control you had on Windows, and adds boost, profiles, and auto-ducking on top.</p>

<p>Ready to get per-app volume the easy way? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for €14.99 — one-time, sandboxed, and installs in seconds.</p>
`,
  },
  "app-volume-like-windows-on-mac": {
    slug: "app-volume-like-windows-on-mac",
    title: "Set App Volume Like Windows Does — on Your Mac",
    description: "Windows has a per-app volume mixer, but macOS doesn't. Here's how to set independent volume for every app on your Mac — fast, safely, and without drivers.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>macOS has no built-in per-app volume mixer like the one in Windows, so the fastest reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a Mac App Store menu-bar app that gives every app its own volume slider, per-app mute, and volume boost. It's sandboxed, Apple-reviewed, installs with no drivers, and costs €14.99 once.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Set App Volume Like Windows Does — on Your Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why Windows can do this and macOS can't</h2>
<p>If you've used Windows, you know the drill: right-click the speaker icon, open Volume Mixer, and drag a separate slider for Chrome, Spotify, Discord, and anything else making noise. It's simple and it just works.</p>
<p>macOS never shipped an equivalent. Apple's audio controls are global — one master volume for the whole system. You can mute an app by muting the source inside that app (if it even has a control), but there's no unified place to say "keep my music at 40% while my meeting stays at 100%." That gap is exactly why third-party mixers exist.</p>

<h2>The fastest fix: a menu-bar mixer</h2>
<p>The closest match to the Windows experience is a menu-bar app that lists your running audio apps and gives each one a slider. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> does precisely this. Click its icon in the menu bar and you get:</p>
<ul>
<li><strong>Independent volume for every app</strong> — drag Spotify down without touching your call.</li>
<li><strong>Per-app mute</strong> — silence one noisy app instantly, leave the rest playing.</li>
<li><strong>Per-app volume boost</strong> — push a too-quiet app <em>above</em> 100% when its own max is still too soft.</li>
<li><strong>Volume profiles</strong> — save a "Work" or "Gaming" mix and recall it in one click.</li>
<li><strong>Auto-ducking</strong> — automatically lower background audio when something more important starts.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other outputs from the same menu.</li>
</ul>
<p>Because it's on the Mac App Store, it's sandboxed and reviewed by Apple, it installs cleanly, and there's no DMG to drag, no kernel extension, and no audio driver to approve in System Settings. That last part matters more than it sounds — driver-based tools are the ones that tend to break after macOS updates.</p>

<h2>How to set it up (about two minutes)</h2>
<ul>
<li><strong>1.</strong> Install SoundDial from the Mac App Store and launch it.</li>
<li><strong>2.</strong> Grant the audio permission macOS prompts for — this is what lets the app see per-app streams.</li>
<li><strong>3.</strong> Click the SoundDial icon in your menu bar. Every app currently playing audio shows up with its own slider.</li>
<li><strong>4.</strong> Drag any app's slider to set its level, or hit mute. Boost past 100% when an app is too quiet.</li>
<li><strong>5.</strong> (Optional) Save your current mix as a profile so you can restore it later, and turn on auto-ducking if you want background audio to drop automatically.</li>
</ul>
<p>That's the whole workflow. It behaves like the Windows Volume Mixer you already know, minus the setup friction.</p>

<h2>What about the free and pro alternatives?</h2>
<p>There are other ways to get per-app volume on a Mac. They're worth knowing so you can choose honestly.</p>
<blockquote>Free tools trade money for reliability and features; pro tools trade money and setup for depth you may not need.</blockquote>
<p><strong>Background Music</strong> is free and open-source, and it does provide per-app volume. The catch: it hooks deep into the audio system and has a history of breaking on newer macOS releases, and it lacks boost, profiles, and auto-ducking. If it works on your setup, great — but it's a gamble across upgrades.</p>
<p><strong>FineTune</strong> is a free, open-source menu-bar app in the same spirit as SoundDial. It's a fine starting point if budget is the only concern, though it's a community project without the profiles and ducking polish.</p>
<p><strong>eqMac</strong> is a free system-wide EQ and booster. It's great for shaping overall sound, but it isn't a true per-app mixer — you're adjusting the whole output, not individual apps.</p>
<p><strong>SoundSource</strong> by Rogue Amoeba (around $39) is the pro-grade option: per-app EQ, output routing per app, and serious audio-engineer features. It's excellent — but it needs a direct download and installs an audio capture component, and it costs more than double what SoundDial does. If you want studio-level routing and EQ, it's the pick. If you just want the Windows-style mixer, it's overkill.</p>

<h2>Which one should you get?</h2>
<p>If your goal is "make my Mac work like the Windows Volume Mixer" without downloads, drivers, or risk, SoundDial is the cleanest answer. You get per-app volume, mute, boost, profiles, and auto-ducking, all App Store-safe, for a one-time €14.99 — no subscription. Choose SoundSource instead only if you specifically need per-app EQ and output routing, and try the free options if you're comfortable troubleshooting them across macOS updates.</p>

<p><strong>Ready to give every app its own volume?</strong> <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and set up your first mix in about two minutes.</p>
`,
  },
  "make-mac-louder-for-hard-of-hearing": {
    slug: "make-mac-louder-for-hard-of-hearing",
    title: "How to Make Your Mac Louder for Hard-of-Hearing Listening",
    description: "Struggling to hear your Mac even at max volume? Learn how to boost and clarify audio per app for hard-of-hearing listening, including SoundDial and built-in tips.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `
<p>If your Mac isn't loud enough even at maximum volume, the fastest reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a Mac App Store menu-bar mixer that lets you boost any single app past 100% and mute everything else. That means louder, clearer speech from FaceTime, video, or a movie player without cranking your whole system. It's €14.99, one-time.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Make Your Mac Louder for Hard-of-Hearing Listening" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why maxing the volume slider still isn't enough</h2>
<p>For hard-of-hearing listeners, the macOS volume slider has two frustrating limits. First, it caps at 100% of what the app itself outputs. If a podcast, video, or call was recorded quietly, "full volume" is still too soft. Second, macOS has no built-in per-app volume mixer. Windows has had one for years, but on a Mac every app shares a single master level. So when you turn everything up to hear a soft voice, background music and notification sounds get uncomfortably loud too.</p>
<p>What you actually need is the ability to make <em>one</em> app louder than the rest, push it beyond its normal ceiling, and cut competing sounds so speech stands out. That's exactly the gap these tools fill.</p>

<h2>First, use the free macOS accessibility settings</h2>
<p>Before adding any app, it's worth setting up what macOS already offers. These help clarity, though they don't add raw loudness:</p>
<ul>
<li><strong>Mono audio:</strong> System Settings &rarr; Accessibility &rarr; Audio, turn on "Play stereo audio as mono." If your hearing is stronger in one ear, this sends the full signal to both, so you don't lose half the dialogue.</li>
<li><strong>Balance adjustment:</strong> In System Settings &rarr; Sound, drag the left/right balance toward your stronger ear.</li>
<li><strong>Reduce background sounds:</strong> Lower music and ambience in apps that allow it, so voices aren't fighting a soundtrack.</li>
<li><strong>Headphone accommodations:</strong> If you use AirPods or Beats, System Settings &rarr; Accessibility &rarr; Audio &rarr; Headphone Accommodations can amplify soft sounds and tune for speech.</li>
</ul>
<p>These are genuinely useful and cost nothing. But none of them make a single quiet app <em>louder than 100%</em>, and that's usually the real problem.</p>

<h2>How to boost one app past 100% with SoundDial</h2>
<p>SoundDial lives in your menu bar and shows a slider for every app currently playing sound. Here's the workflow that helps most for hard-of-hearing listening:</p>
<ul>
<li><strong>Boost the app you're listening to.</strong> Drag its slider above 100% to amplify a quiet video call or podcast beyond what the app allows on its own.</li>
<li><strong>Mute or lower everything else.</strong> Pull down music, browser tabs, or notification sounds so nothing competes with the voice you're trying to follow.</li>
<li><strong>Turn on auto-ducking.</strong> When you start speaking on a call, SoundDial automatically dips other audio so the person you're talking to comes through clearly, then restores it after.</li>
<li><strong>Save a volume profile.</strong> Create a "video calls" profile where your conferencing app is boosted and everything else is quiet, then switch to it instantly instead of re-adjusting every time.</li>
<li><strong>Switch output quickly.</strong> Jump between speakers, a headset, or a hearing-aid-connected device from the same menu, without digging through System Settings.</li>
</ul>
<p>The boost feature is the key one here. Because it raises the app's output above its native maximum, a whisper-quiet recording becomes something you can actually hear, while the rest of your system stays at a comfortable level.</p>

<h2>A quick word on distortion</h2>
<p>Any software boost amplifies whatever is in the signal, so pushing far past 100% on already-loud audio can introduce clipping. In practice, boosting <em>quiet</em> content up to a comfortable, intelligible level sounds clean. Start modestly, raise until speech is clear, and back off if it starts to sound harsh. Protecting your remaining hearing matters, so aim for clarity rather than maximum loudness.</p>

<h2>How SoundDial compares to the alternatives</h2>
<p>You have a few options, and honesty helps you choose the right one:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39):</strong> Genuinely pro-grade, with per-app EQ and output routing. If you want to sculpt frequencies for hearing loss, it's powerful. But it costs more than twice as much, requires a direct download, and installs an audio-capture driver. That's more setup and system access than many people want.</li>
<li><strong>Background Music (free, open-source):</strong> Offers per-app volume for free, but it lacks boost, profiles, and auto-ducking, and it can break on newer macOS versions since it hooks deep into the audio system.</li>
<li><strong>FineTune (free, open-source):</strong> A lightweight menu-bar volume app. Fine for basics, but without the boost, profiles, and ducking that hard-of-hearing listeners lean on.</li>
<li><strong>eqMac (free):</strong> An equalizer with a booster. Useful for shaping sound, but it's built around EQ rather than clean per-app mixing and profiles.</li>
</ul>
<p>Where <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> stands out is the balance of price, safety, and the specific features that matter here. Because it's on the Mac App Store, it's Apple-reviewed and sandboxed, installs cleanly with no DMG, and needs no audio drivers or system extensions. You get per-app boost, mute, volume profiles, and auto-ducking in one €14.99 one-time purchase, with nothing digging into the macOS audio stack.</p>

<h2>The bottom line</h2>
<p>Set up the free macOS accessibility options first, they're worth having. But if the real issue is that one app is simply too quiet, you need a tool that can push a single app past 100% and quiet the rest. That's the whole point of a per-app boost, and macOS doesn't do it on its own.</p>

<p>Ready to actually hear your Mac? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for €14.99, boost the app you need, and let auto-ducking and profiles keep speech clear.</p>
`,
  },
  "boost-quiet-apps-mac": {
    slug: "boost-quiet-apps-mac",
    title: "How to Boost a Quiet App on Mac (Past Max Volume)",
    description: "One app too quiet even at 100%? Boost just that app past its max on Mac with SoundDial, a per-app volume mixer. Here's the fastest fix plus alternatives.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `
<p>If one app is too quiet even at max volume, the fastest reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a menu-bar per-app volume mixer for macOS. It gives every app its own slider plus a volume <strong>boost</strong> that pushes a single app past 100%, so a whisper-quiet video call or browser tab gets louder without touching your system volume. It's a one-time €14.99 app on the Mac App Store.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Boost a Quiet App on Mac (Past Max Volume)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why one app is quiet even at 100%</h2>
<p>macOS only has one master volume. When you raise it, everything gets louder together. But each app also outputs sound at its own internal level, and that level varies wildly. A quietly mastered YouTube clip, a Zoom caller with a bad mic, a game with low dialogue mixing, or a browser tab with a soft stream can all sit far below everything else, even with your Mac at full blast.</p>
<p>The real problem: macOS has <strong>no built-in per-app volume mixer</strong>. Windows has had one for years (the Volume Mixer, right-click the speaker icon). On a Mac, there's no native way to turn one app up while leaving the rest alone, and definitely no way to amplify a single app <em>above</em> its normal maximum. That's the gap you're hitting.</p>

<h2>The fastest fix: boost just that one app</h2>
<p>A per-app mixer solves this by inserting itself between your apps and your output, so it can raise or lower each stream independently, and boost one beyond 100%. With <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, the flow is short:</p>
<ul>
<li>Install from the Mac App Store and open it. It lives in your menu bar, not a floating window.</li>
<li>Click the menu-bar icon to see a slider for every app currently playing audio.</li>
<li>Find the quiet app and drag its slider past 100% to apply boost. It amplifies that app only.</li>
<li>Leave everything else where it is. Your system volume and other apps stay untouched.</li>
</ul>
<p>Because the boost is per app, you can push a soft video call up to a comfortable level while keeping music or notifications from becoming ear-splitting. That's the core thing the built-in macOS controls simply can't do.</p>

<h2>A note on boost and clipping</h2>
<p>Boost is genuinely useful, but it's amplification, not magic. If an app's original audio is very quiet or already distorted, cranking it hard can introduce clipping or make background hiss more obvious. In practice, a moderate boost fixes the vast majority of "this call is too quiet" situations cleanly. Nudge it up until the app is comfortable rather than slamming it to the ceiling, and you'll keep the sound clean.</p>

<h2>Beyond boosting: what else helps</h2>
<p>Once you have per-app control, a few features make the quiet-app problem disappear for good:</p>
<ul>
<li><strong>Volume profiles</strong> — save a setup (e.g. "boost Zoom, lower Spotify, mute Slack") and recall it in one click instead of re-dragging sliders every meeting.</li>
<li><strong>Auto-ducking</strong> — automatically dip other apps when a chosen app plays, so a boosted call is heard clearly over background audio.</li>
<li><strong>Per-app mute</strong> — silence one noisy app without pausing anything else.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, or an external interface from the same menu.</li>
</ul>

<h2>What about the free and pro alternatives?</h2>
<p>You have options, and honesty matters here, so here's the real landscape.</p>
<p><strong>SoundSource</strong> (Rogue Amoeba) is the pro-grade choice at around $39. It does per-app volume plus per-app EQ and full output routing, more power than most people need. The trade-offs: it costs more than double, it's a direct download rather than App Store, and it installs an audio-capture driver to do its work. If you want an audio engineer's toolkit, it's excellent. If you just want one app louder, it's overkill.</p>
<p><strong>Background Music</strong> is free and open-source, and it can do basic per-app volume. But it's a community project that has a history of breaking on newer macOS versions, and it lacks boost past 100%, profiles, and auto-ducking. Great if free is the only requirement and you don't mind occasional breakage.</p>
<p><strong>FineTune</strong> is a free open-source menu-bar app, and <strong>eqMac</strong> is a free EQ and system booster. Both are worth trying if your budget is zero. Just know they're community-maintained, EQ-focused or lighter on per-app management, and don't bundle profiles plus ducking in one polished package.</p>
<p>Where <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lands: it's the middle path. Cheaper than SoundSource, more capable and more reliable than the free tools, and it's on the <strong>Mac App Store</strong>, which means Apple-reviewed, sandboxed, and it installs cleanly with <strong>no DMG and no audio drivers or extensions</strong> to bolt onto your system. For most people the honest recommendation is simple: if you want the least-hassle fix that also gives you boost, profiles, and auto-ducking, it's the best value at €14.99 one-time.</p>

<h2>Quick answer, restated</h2>
<blockquote>To make one Mac app louder than its maximum, use a per-app volume mixer with boost. Open SoundDial from the menu bar, find the quiet app's slider, and drag it past 100%. Only that app gets louder.</blockquote>

<p>Stop fighting a single volume slider for your whole Mac. Get <a href="https://apps.apple.com/app/id6772792641">SoundDial on the Mac App Store</a> for €14.99 once, boost that quiet app past its limit in seconds, and save a profile so you never have to think about it again.</p>
`,
  },
  "amplify-quiet-video-podcast-audio-mac": {
    slug: "amplify-quiet-video-podcast-audio-mac",
    title: "How to Amplify Quiet Videos & Podcasts on Your Mac",
    description: "Some YouTube videos, podcasts, and lectures are just too quiet even at 100%. Here's how to boost per-app volume past the max on macOS with SoundDial.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `
<p>The fastest, reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a Mac App Store menu-bar mixer that gives every app its own volume slider and a real <strong>boost</strong> that pushes past 100%. Open your browser or podcast player, drag its slider above max, and a quiet video or lecture instantly gets louder — no drivers, no restart.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Amplify Quiet Videos & Podcasts on Your Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why some videos and podcasts are just too quiet</h2>
<p>You crank your Mac to 100%, and the interview is still a whisper. This isn't your imagination. Audio is mastered at wildly different loudness levels — a webinar recorded on a laptop mic, a quiet indie podcast, or an old lecture upload can sit 15–20 dB below a professionally produced YouTube video. Your system volume is already maxed, so there's no headroom left to give.</p>
<p>Here's the catch: macOS has <strong>no built-in per-app volume mixer</strong>. Windows has had one for years (the Volume Mixer in the system tray), but on a Mac, the volume keys move one global level for everything. There's no native way to say "make only this browser tab louder" — let alone push a single app past 100%.</p>

<h2>The real fix: per-app volume boost</h2>
<p>To make a quiet source louder than your speakers normally allow, you need software that applies gain to <em>that app specifically</em> and can amplify beyond the 100% ceiling. That's exactly what a per-app mixer with a boost feature does.</p>
<p>With <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, every running app shows up in a menu-bar list with its own slider. Slide a quiet app up to 150% or 200% and the audio is amplified in real time. Because the boost is per-app, everything else — your music, notifications, a call in another window — stays at a normal level. You're not blasting your whole system to hear one soft podcast.</p>
<blockquote>Global volume asks "how loud is the Mac?" A per-app mixer asks "how loud is <em>this</em> app?" — which is the question that actually matters when one video is quiet and the rest are fine.</blockquote>

<h2>How to boost a quiet video or podcast, step by step</h2>
<ul>
<li><strong>Install SoundDial</strong> from the Mac App Store. It's sandboxed and Apple-reviewed, so it installs cleanly like any other app — no separate download, no audio driver, no permission gauntlet.</li>
<li><strong>Start playing</strong> the quiet video, podcast episode, or lecture in whatever app you use — Safari, Chrome, a podcast client, VLC.</li>
<li><strong>Click the SoundDial icon</strong> in your menu bar. You'll see a slider for each app currently making sound.</li>
<li><strong>Drag that app's slider above 100%</strong> — try 150% first, then push higher if it's still too soft. The change is instant.</li>
<li><strong>Leave everything else alone.</strong> Only the app you boosted gets louder; your system stays balanced.</li>
</ul>
<p>If you find yourself boosting the same apps every day — say, a podcast player and your browser — you can save that setup as a <strong>volume profile</strong> and recall it in one click instead of re-adjusting each time.</p>

<h2>A word of caution on boosting</h2>
<p>Amplifying past 100% adds gain, and gain has limits. Push a very quiet, low-quality recording hard enough and you may hear clipping or distortion — that's the source running out of clean signal, not a flaw in the app. Boost until it's comfortably audible, then back off if it starts sounding harsh. On built-in laptop speakers, extreme boost can also strain the drivers, so go easier there than with good headphones or external speakers.</p>

<h2>What about free or built-in options?</h2>
<p>You have alternatives, and it's worth being honest about them:</p>
<ul>
<li><strong>System volume + app-level sliders.</strong> Some players (VLC, a few browsers via extensions) let you boost their own audio. Fine if you only ever need it in one app — but you're stuck configuring each app separately, with no unified control and no profiles.</li>
<li><strong>eqMac</strong> is a free EQ and booster. It can raise system-wide loudness, but it's a global tool, not a clean per-app mixer, and it works at the whole-output level.</li>
<li><strong>Background Music</strong> is free and open source and does offer per-app volume. But it relies on an audio-capture setup that can break on newer versions of macOS, and it lacks a dedicated boost, profiles, and auto-ducking.</li>
<li><strong>FineTune</strong> is a free open-source menu-bar app — a lightweight option if you want the basics and don't mind community-maintained software.</li>
<li><strong>SoundSource</strong> by Rogue Amoeba (~$39) is the pro-grade heavyweight: per-app EQ, output routing, the works. It also requires a download and an audio-capture driver, and it costs more than double SoundDial. Overkill if all you want is to make quiet audio louder.</li>
</ul>

<h2>Why SoundDial is the practical choice</h2>
<p>SoundDial sits in the sweet spot for this exact problem. It's <strong>€14.99 one-time</strong> — no subscription — and it lives on the <strong>Mac App Store</strong>, which means it's sandboxed, reviewed by Apple, and installs without any DMG or system extension to trust. You get the per-app boost you actually came for, plus profiles, per-app mute, quick output switching, and <strong>auto-ducking</strong> that dips other apps when you need to focus on one. It does the loud thing simply, and does the rest well.</p>

<p><strong>Tired of straining to hear quiet videos and podcasts?</strong> <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for €14.99 and give every app its own volume — with the boost to hear anything clearly.</p>
`,
  },
  "set-different-volume-for-each-app-mac": {
    slug: "set-different-volume-for-each-app-mac",
    title: "How to Set a Different Volume for Each App on Mac",
    description: "macOS has no built-in per-app volume mixer. Here's how to set independent, persistent volume levels for each app on Mac using SoundDial and the alternatives.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>macOS has no built-in way to set a different volume for each app, so you need a menu-bar volume mixer. The fastest, most reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a Mac App Store app that gives every application its own volume slider, per-app mute, and a boost that pushes quiet apps past 100%. Set your levels once and they stick.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Set a Different Volume for Each App on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why Mac has no per-app volume control</h2>
<p>If you've switched from Windows, you've probably gone looking for the equivalent of the Windows Volume Mixer, that little panel where each app has its own slider. It isn't there. macOS only offers one global system volume. Whether it's a YouTube video, a Zoom call, Spotify, or a game, they all share the same master level.</p>
<p>That's fine until it isn't. Discord chat drowns out your music. A browser ad blasts at full volume while your podcast plays quietly underneath. Your game is deafening but the voice call in the background is too soft. The only "solution" Apple gives you is to open each app and adjust its internal volume manually, if the app even has one, and redo it every session.</p>
<p>To get real per-app control, you need a small utility that sits between your apps and your output device. Below is how to do it properly, plus honest notes on the alternatives.</p>

<h2>The fastest way: SoundDial (Mac App Store)</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lives in your menu bar and lists every app that is currently playing audio. Each one gets an independent slider. Here's the whole workflow:</p>
<ul>
<li><strong>Install from the Mac App Store.</strong> It's Apple-reviewed and sandboxed, so there's no DMG, no audio driver, and no kernel or system extension to approve. It installs like any normal app and can be removed the same way.</li>
<li><strong>Click the menu-bar icon.</strong> You'll see a slider for each active app, plus a master control.</li>
<li><strong>Drag to set levels.</strong> Turn Discord down, nudge Spotify up, mute a noisy browser tab's app entirely with one click.</li>
<li><strong>Boost quiet apps.</strong> If an app is too soft even at 100%, push it above 100% with per-app boost.</li>
<li><strong>Save a profile.</strong> Store your "gaming," "work call," or "music" mix and switch between them instantly instead of re-dragging sliders every day.</li>
</ul>
<p>Two features are worth calling out because they solve the most annoying scenarios:</p>
<ul>
<li><strong>Auto-ducking</strong> automatically lowers other apps when a chosen app plays, so your music dips when a call comes in and returns afterward, no manual fiddling.</li>
<li><strong>Quick output switching</strong> lets you jump between headphones and speakers from the same menu without diving into System Settings.</li>
</ul>
<p>Because levels are remembered per app and saved into profiles, this is the part most people actually want: you set it once and it <em>stays</em> set.</p>

<h2>The free and paid alternatives, honestly compared</h2>
<p>SoundDial isn't the only option, and depending on your needs, a free tool might be enough. Here's a fair rundown.</p>

<h2>SoundSource (Rogue Amoeba)</h2>
<p>SoundSource is the pro-grade heavyweight. Alongside per-app volume it does per-app EQ and full output routing, so you can send one app to headphones and another to speakers. It's genuinely excellent. The tradeoffs: it costs around $39, and it isn't a clean App Store install, it's a direct download that requires an audio-capture driver to be added to your system. If you're an audio professional who needs EQ and routing, it's worth it. If you just want each app at the right volume, it's more tool and more setup than you need.</p>

<h2>Background Music (open-source, free)</h2>
<p>Background Music is a free, open-source app that offers per-app volume and auto-pause. The catch is reliability: it installs a virtual audio device and has a history of breaking on newer macOS releases, sometimes requiring reinstalls or fixes after updates. It also lacks boost, saved profiles, and true auto-ducking. Great if you want free and don't mind occasional maintenance.</p>

<h2>FineTune and eqMac</h2>
<p>FineTune is a free, open-source menu-bar app, a lightweight starting point. eqMac is a free equalizer with a system-wide booster, aimed more at EQ and overall gain than at giving each app its own persistent slider. Both are worth trying if your need is narrow, but neither centers on the "different volume per app, saved as profiles" workflow.</p>

<h2>Which should you choose?</h2>
<ul>
<li><strong>Want it to just work, cleanly, with profiles and auto-ducking?</strong> SoundDial at €14.99 one-time, from the App Store, with no drivers to install.</li>
<li><strong>Need per-app EQ and audio routing and don't mind the price or the driver?</strong> SoundSource.</li>
<li><strong>Want free and are okay tinkering when macOS updates?</strong> Background Music, FineTune, or eqMac.</li>
</ul>
<p>The real advantage of SoundDial is the combination: independent volume, mute, and boost for every app, saved into switchable profiles, with automatic ducking, all inside a sandboxed App Store download you can trust and uninstall in a click, for a one-time €14.99 rather than a subscription.</p>

<blockquote>No driver, no extension, no DMG. Set each app's volume once, save it as a profile, and let auto-ducking handle the rest.</blockquote>

<p>Ready to give every app its own volume? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and set your perfect mix in about a minute.</p>
`,
  },
  "make-one-app-quieter-than-the-rest-mac": {
    slug: "make-one-app-quieter-than-the-rest-mac",
    title: "Make One App Quieter Than Everything Else on Mac",
    description: "One loud app drowning out the rest on your Mac? Here's the fastest, reliable way to turn down a single app's volume without touching the others.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `
<p>To turn one app down while everything else stays put, use <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a menu-bar per-app volume mixer for macOS. Open it, find the loud app in the list, and drag its slider down. That app gets quieter instantly while your music, calls, and other audio keep their own levels. It's the fastest, most reliable fix.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Make One App Quieter Than Everything Else on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why macOS makes this so hard</h2>

<p>Here's the frustrating truth: macOS has no built-in per-app volume mixer. Windows has had one for years (right-click the volume icon, open the Volume Mixer, done), but on a Mac the volume keys and the menu-bar slider only control one thing: the master output. Turn it down and everything goes quieter together. Turn it up and the loud app is still loud, just louder along with the rest.</p>

<p>So when a game's sound effects are blasting, a browser tab is auto-playing an ad, or notification dings keep spiking over your podcast, your only native options are clumsy: mute the whole system, dig into each app's own volume setting (if it even has one), or quit the offender entirely. None of that lets you simply say "make this one app quieter and leave everything else alone."</p>

<h2>The fast fix: a per-app volume mixer</h2>

<p>A per-app volume mixer gives every running app its own independent slider. That's exactly the control you're missing. With <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> it looks like this:</p>

<ul>
<li><strong>Open the menu-bar mixer.</strong> Click the SoundDial icon and you'll see a live list of every app currently playing audio.</li>
<li><strong>Find the loud one.</strong> The game, the browser, the video call, the notification sounds, whatever is drowning the rest.</li>
<li><strong>Drag its slider down.</strong> Set it to 40%, 20%, wherever it feels balanced. The change is instant and it only affects that app.</li>
<li><strong>Leave everything else alone.</strong> Your music player, your call, your other tabs, they all keep the volume you set for them.</li>
</ul>

<p>You can also fully mute a single app with one click while others keep playing, or boost a quiet app above 100% if it's too soft. No restarting the app, no menu-diving.</p>

<h2>Common cases where this saves you</h2>

<ul>
<li><strong>A loud game over background music.</strong> Drop the game to a comfortable level and keep your playlist at full volume underneath it.</li>
<li><strong>Browser ads and video that spike.</strong> Pin your browser lower so a surprise autoplay never blasts you.</li>
<li><strong>Notification dings over a call or podcast.</strong> Turn down the notification-heavy app without silencing the audio you actually care about.</li>
<li><strong>A quiet video call under loud media.</strong> Instead of turning the loud app down, boost the call above 100% so you can hear people clearly.</li>
</ul>

<h2>Set it once with volume profiles and auto-ducking</h2>

<p>Fixing one loud app is nice, but you probably want it to stay fixed. SoundDial has two features that make this permanent:</p>

<p><strong>Volume profiles</strong> let you save a set of per-app levels and recall them in a click. Build a "Gaming" profile where the game sits at 30% and music at 100%, and a "Work" profile where calls are boosted and everything else is toned down. Switch contexts without re-dragging sliders every time.</p>

<p><strong>Auto-ducking</strong> automatically lowers other apps when a chosen app plays, then brings them back afterward, so a loud app never fully hijacks your audio in the first place. Between profiles, ducking, and quick output switching (jump between speakers and headphones without opening System Settings), you set your balance once and stop babysitting the volume.</p>

<h2>How SoundDial compares to the alternatives</h2>

<p>There are other ways to get per-app volume on a Mac. Here's an honest look:</p>

<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> is genuinely pro-grade: per-app EQ and full output routing on top of volume control. But it costs more than double, and it needs a separate download plus an audio-capture driver. If you want a studio-level toolkit, it's excellent. If you just want to turn one app down, it's more than you need.</li>
<li><strong>Background Music</strong> is free and open-source, which is great, but it can break on newer macOS versions, and it lacks volume boost, profiles, and auto-ducking.</li>
<li><strong>FineTune</strong> is a free open-source menu-bar app, and <strong>eqMac</strong> is a free EQ with a booster. Both are worth trying if free is your priority, but you're trading polish, reliability, and features for the price.</li>
</ul>

<p>SoundDial sits in the sweet spot: €14.99 one-time, no subscription. Because it's on the Mac App Store, it's Apple-reviewed and sandboxed, and it installs cleanly with no DMG, no audio drivers, and no system extensions to approve. You get the features that actually matter for this problem, per-app volume, mute, boost, profiles, and auto-ducking, without a $39 price tag or a fragile free tool.</p>

<h2>The bottom line</h2>

<p>macOS won't let you turn down a single app on its own, but that's a gap you can close in seconds. Install a per-app mixer, drag the loud app's slider down, and the rest of your audio stays exactly where you want it. Save a profile and you'll never fight this again.</p>

<p><strong>Ready to silence the one app that keeps drowning the rest?</strong> Get <a href="https://apps.apple.com/app/id6772792641">SoundDial on the Mac App Store</a> for €14.99, one payment, no drivers, no subscription.</p>
`,
  },
  "streaming-audio-mixer-mac-mic-game-music": {
    slug: "streaming-audio-mixer-mac-mic-game-music",
    title: "Mac Audio Mixer for Streamers: Balance Mic, Game & Music",
    description: "The fastest way to balance mic, game audio, music and alerts while streaming on Mac. SoundDial gives you a per-app volume mixer with profiles and ducking.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `
<p>To balance your mic, game, music and alerts while streaming on a Mac, the fastest reliable fix is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a menu-bar per-app volume mixer. macOS has no built-in mixer, so SoundDial lets you set independent levels per app, boost quiet sources, save streaming profiles, and auto-duck music when you talk.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Audio Mixer for Streamers: Balance Mic, Game & Music" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>The problem: macOS has no per-app volume control</h2>
<p>Windows has had the Volume Mixer for years. macOS still does not ship one. Your system volume slider moves everything at once, which is useless when you're live. During a stream you're juggling at least four sources that all fight for the same output:</p>
<ul>
<li><strong>Your voice / mic monitoring</strong> — needs to sit above everything.</li>
<li><strong>Game audio</strong> — loud, dynamic, and prone to spiking during action.</li>
<li><strong>Background music</strong> — should stay quiet under your commentary.</li>
<li><strong>Alerts and chat sounds</strong> — Discord, Stream Deck, follower alerts, notifications.</li>
</ul>
<p>Without per-app control you end up riding the game's in-app slider, muting Spotify by hand, and praying a loud cutscene doesn't blow out your viewers. That's not a mix, it's damage control.</p>

<h2>What a proper streaming mixer needs to do</h2>
<p>A creator-focused audio setup on Mac should give you four things: independent per-app levels, the ability to boost a source that's too quiet, saved configurations you can recall instantly, and automatic ducking so music drops the moment you speak. SoundDial covers all four from the menu bar.</p>

<h3>1. Independent volume for every app</h3>
<p>Set the game to 60%, music to 25%, Discord to 80%, and your browser to 40% — each app has its own slider. Nothing bleeds into anything else. You can also per-app mute instantly when a source misbehaves mid-stream, without touching the app itself.</p>

<h3>2. Volume boost for quiet sources</h3>
<p>Some apps and games are simply too quiet even at 100%. SoundDial's per-app boost pushes a source past its normal ceiling so a mumbly game or a low-volume video sits where you need it in the mix — no re-encoding, no plugins.</p>

<h3>3. Volume profiles for different scenes</h3>
<p>This is the feature that saves streamers the most time. Your "Just Chatting" mix (music up, game down) is different from your "Boss Fight" mix (game up, music near-silent), which is different from your "BRB" mix. Save each as a profile and switch with one click instead of dragging four sliders live.</p>

<h3>4. Auto-ducking so music ducks under your voice</h3>
<p>Auto-ducking automatically lowers background audio when you talk and brings it back when you stop. For solo streamers this is the difference between commentary that's clear and music that constantly buries your voice — handled automatically instead of manually.</p>

<h2>Where OBS fits in</h2>
<p>OBS is your broadcast tool, not your desktop volume mixer. OBS controls what levels go into the stream via its Audio Mixer panel and filters, but it works from the audio sources it captures — it doesn't reach into individual macOS apps and turn them down at the system level. On Mac, getting clean per-app desktop audio into OBS has always been the painful part.</p>
<p>The practical workflow: use SoundDial to set the actual per-app levels on your Mac so what comes out is already balanced, then let OBS capture and fine-tune the broadcast levels. Set the mix once at the source and OBS has far less to fight with. Quick output switching in SoundDial also lets you jump between headphones and speakers without diving into System Settings between scenes.</p>

<h2>SoundDial vs. the alternatives</h2>
<p>You have options, and honesty matters here:</p>
<ul>
<li><strong>SoundSource (Rogue Amoeba, ~$39)</strong> — pro-grade with per-app EQ and full output routing. It's excellent, but it costs more than double, requires a direct download, and installs an audio-capture driver. Overkill if you mainly need clean per-app levels, boost, and ducking.</li>
<li><strong>Background Music (free, open-source)</strong> — genuinely useful and free, but it can break on newer macOS versions, and it has no boost, no profiles, and no auto-ducking — the exact features streamers lean on.</li>
<li><strong>FineTune (free, open-source menu-bar app)</strong> — lightweight per-app control, but a community project without the profiles-plus-ducking combo built for live streaming.</li>
<li><strong>eqMac (free EQ + booster)</strong> — good for tone-shaping and boosting, but it's an equalizer, not a per-app streaming mixer.</li>
</ul>
<p>SoundDial's angle: it's a <strong>€14.99 one-time</strong> purchase on the <a href="https://apps.apple.com/app/id6772792641">Mac App Store</a> — Apple-reviewed, sandboxed, and it installs cleanly with no DMG and no audio drivers or system extensions. That last part matters for streamers: fewer kernel-level components means fewer surprise breakages when macOS updates the night before your stream.</p>

<h2>The honest trade-off</h2>
<p>If you need broadcast-grade EQ and complex routing chains, SoundSource earns its price. If you want a free tinkerer's tool and don't mind occasional breakage, Background Music or FineTune will do. But if you want the mix that streaming actually demands — per-app levels, boost, saved scene profiles, and auto-ducking — from a safe App Store install that survives macOS updates, SoundDial is the most direct path for the money.</p>

<p><strong>Ready to fix your stream audio?</strong> Get <a href="https://apps.apple.com/app/id6772792641">SoundDial on the Mac App Store</a> for €14.99 — set your mic, game, music and alert levels once, save them as profiles, and let auto-ducking keep your voice on top.</p>
`,
  },
  "macos-tahoe-audio-crackling-popping-fix": {
    slug: "macos-tahoe-audio-crackling-popping-fix",
    title: "How to Fix Audio Crackling and Popping on macOS Tahoe",
    description: "Crackling or popping audio after updating to macOS Tahoe 26? Fix it by matching the sample rate, resetting CoreAudio, checking your Bluetooth codec, and clearing plug-in conflicts. Here's the full troubleshooting order.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>Crackling and popping after updating to macOS Tahoe 26 is almost always a sample-rate mismatch, a flaky Bluetooth codec negotiation, or a stuck CoreAudio process. Fix it by matching the output sample rate in Audio MIDI Setup, resetting <code>coreaudiod</code>, forgetting and re-pairing Bluetooth headphones, and quitting audio plug-in hosts. Work through them in order below.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Fix Audio Crackling and Popping on macOS Tahoe" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Start with the cheap fixes</h2>

<p>Before you touch anything technical, rule out the two things that resolve most cases in under a minute:</p>

<ul>
<li><strong>Restart the Mac.</strong> A Tahoe update leaves audio daemons in a half-migrated state surprisingly often. A clean reboot reloads CoreAudio from scratch and clears the majority of post-update crackling.</li>
<li><strong>Unplug and replug the output device.</strong> If it's a USB DAC, dock, or audio interface, disconnect it, wait a few seconds, and reconnect. Try a different USB port too, ideally one directly on the Mac rather than through a hub. Hubs and displays that pass audio are a common source of pops.</li>
</ul>

<p>If the noise survives a reboot, it's a configuration problem, not a glitch. Keep going.</p>

<h2>Match the sample rate (the most common cause)</h2>

<p>The classic Tahoe crackle comes from a sample-rate mismatch between what your device wants and what macOS is sending. When an app plays 44.1 kHz audio and the system is locked to 48 kHz (or vice versa), the resampling can stutter or pop.</p>

<ul>
<li>Open <strong>Audio MIDI Setup</strong> (in Applications → Utilities, or search Spotlight).</li>
<li>Select your output device in the left sidebar.</li>
<li>Look at the <strong>Format</strong> dropdown. Try setting it to <strong>48000.0 Hz, 2ch-24bit Integer</strong> and test.</li>
<li>If popping continues, switch to <strong>44100.0 Hz</strong> and test again.</li>
<li>For interfaces, make sure the sample rate matches your DAW's project rate.</li>
</ul>

<p>Toggling the format also forces CoreAudio to renegotiate the connection, which alone fixes many cases even when you land back on the same value.</p>

<h2>Reset CoreAudio</h2>

<p>CoreAudio runs as a background daemon called <code>coreaudiod</code>. After a major macOS update it can hold onto stale device state. Restarting it is safe and takes effect instantly, without a reboot.</p>

<p>Open Terminal and run:</p>

<blockquote><p><code>sudo killall coreaudiod</code></p></blockquote>

<p>Enter your password when prompted. Your audio will cut out for a second, then the daemon relaunches automatically with a clean slate. This is the single most effective fix for crackling that appears out of nowhere on a machine that was fine before the update.</p>

<h2>Check your Bluetooth headphones and codec</h2>

<p>If the crackling only happens on AirPods or other Bluetooth headphones, the problem is usually codec negotiation, not your speakers. Wireless audio quality degrades when the connection is congested or when macOS drops into a low-bandwidth call mode.</p>

<ul>
<li><strong>Forget and re-pair the device.</strong> Go to System Settings → Bluetooth, remove the headphones, then pair them again. This resets the negotiated codec.</li>
<li><strong>Watch for the call-mode drop.</strong> When an app opens the microphone, macOS switches Bluetooth headsets to a low-quality two-way profile, which sounds crunchy. Quit conferencing and voice apps you aren't using and the fidelity returns.</li>
<li><strong>Reduce interference.</strong> Move away from crowded 2.4 GHz environments and disconnect Bluetooth devices you don't need. A busy radio band produces intermittent pops.</li>
<li><strong>Turn off the mic input</strong> in an app's settings if you only need to listen, so macOS keeps the high-quality playback profile.</li>
</ul>

<h2>Quit audio plug-in hosts and virtual drivers</h2>

<p>Third-party audio software that installs a system extension or virtual device is a frequent offender after an OS jump, because kernel and audio extensions often need updating for a new macOS version. Suspects include virtual audio routers, equalizer apps, loopback tools, and older driver-based utilities.</p>

<ul>
<li>Quit any equalizer, audio-router, or loopback app and test whether the crackling stops.</li>
<li>Check System Settings → General → Login Items &amp; Extensions for audio extensions that may need an update or removal.</li>
<li>Update those apps to their Tahoe-compatible releases, or uninstall the ones you no longer use. Stacked audio drivers frequently conflict with each other after a major update.</li>
</ul>

<p>If quitting one of these apps silences the pops, you've found your culprit. Reinstall the current version or leave it off.</p>

<h2>Narrow it down: system-wide or one app?</h2>

<p>Figure out whether the noise happens everywhere or only in specific software. Play a local audio file, then a browser video, then a music app. If only one app crackles, the fix is that app's own audio settings or an update, not macOS. If it's system-wide, the steps above are where the answer lives.</p>

<p>When you're still stuck, boot into Safe Mode (hold the power button on Apple silicon, then choose your startup disk while holding Shift). Safe Mode loads no third-party extensions. If the audio is clean there, a login item or driver is the cause, and you can re-enable them one at a time to find it.</p>

<h2>Once your audio is clean</h2>

<p>Crackling is a driver and sample-rate problem, so the fixes above are what actually resolve it. But once playback is stable, you may notice a different limitation: macOS still has no built-in per-app volume mixer, the way Windows does. You can't turn a loud app down without turning everything down.</p>

<p>That's the gap <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> fills. It's a menu-bar mixer that gives each app its own volume slider, per-app mute, and even a volume boost for quiet apps, plus quick output switching. It won't fix crackling, but once your audio is healthy it makes daily control far easier.</p>

<p>Work through the steps above in order, and start with the reboot and the sample-rate check. If you later want real per-app control on your clean audio setup, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a €14.99 one-time purchase on the Mac App Store, sandboxed with no drivers or DMG to install.</p>`,
  },
  "airpods-stuttering-cutting-out-mac-tahoe": {
    slug: "airpods-stuttering-cutting-out-mac-tahoe",
    title: "AirPods Stuttering or Cutting Out on Mac (Tahoe Fix)",
    description: "AirPods stuttering, cutting out, or dropping audio on macOS Tahoe is almost always Bluetooth interference or auto-switch churn. Here's how to re-pair, cut 2.4GHz congestion, and stop the hand-offs that break playback.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>AirPods stuttering or cutting out on macOS Tahoe is almost always Bluetooth interference, not a broken headset. The usual culprits are 2.4GHz Wi-Fi and router congestion, aggressive automatic device switching, and a stale pairing. Re-pair the AirPods, turn off auto-switch, and move away from crowded 2.4GHz channels to fix most cases.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Stuttering or Cutting Out on Mac (Tahoe Fix)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why AirPods drop on Mac specifically</h2>

<p>AirPods use Bluetooth, which shares the crowded 2.4GHz radio band with Wi-Fi, microwaves, USB 3 devices, and just about every smart plug in your home. Your Mac is a busy radio: it juggles Wi-Fi, Bluetooth, AirDrop, and Continuity features on overlapping antennas. When that band gets congested, Bluetooth audio is the first thing to stutter, because it can't tolerate dropped packets the way a file transfer can.</p>

<p>Tahoe didn't magically make your AirPods worse, but a fresh macOS install often resets radio behavior, re-enables Continuity hand-offs, and re-negotiates codecs. That's why problems seem to appear right after an update. The good news: the fixes are well understood and mostly free.</p>

<h2>Fix 1: Re-pair the AirPods (do this first)</h2>

<p>A stale or corrupted pairing survives reboots and causes intermittent drops that look random. Fully remove and re-add the connection:</p>

<ul>
<li>Open <strong>System Settings, Bluetooth</strong>.</li>
<li>Click the info (i) button next to your AirPods and choose <strong>Forget This Device</strong>.</li>
<li>Put the AirPods in their case, close the lid, wait 15 seconds, then open it.</li>
<li>Hold the button on the back of the case until the light blinks white.</li>
<li>Re-pair from the Bluetooth list.</li>
</ul>

<p>While you're there, make sure the AirPods firmware is current. There's no manual updater, but leaving them in the case near a connected iPhone or Mac for a while lets them update in the background.</p>

<h2>Fix 2: Turn off automatic switching</h2>

<p>This is the single biggest cause of "cutting out" for people in the Apple ecosystem. Your AirPods try to follow you between your Mac, iPhone, and iPad. Every time your phone thinks it should grab audio, the connection hiccups on your Mac, producing a half-second dropout mid-podcast.</p>

<ul>
<li>On the Mac: Bluetooth, click (i) next to the AirPods, set <strong>Connect to This Mac</strong> to <strong>When Last Connected to This Mac</strong> instead of Automatically.</li>
<li>On the iPhone: Settings, tap your AirPods, <strong>Connect to This iPhone</strong>, choose <strong>When Last Connected to This iPhone</strong>.</li>
</ul>

<p>This stops the tug-of-war between devices. You'll manually pick where audio goes, which is a small price for stable playback.</p>

<h2>Fix 3: Cut 2.4GHz congestion</h2>

<p>If drops happen during video calls, downloads, or when other people are streaming, your radio band is saturated. A few practical moves:</p>

<ul>
<li><strong>Use the 5GHz Wi-Fi band</strong> on your Mac. In your router settings, give the 5GHz network a distinct name and connect to it. This frees the 2.4GHz band for Bluetooth.</li>
<li><strong>Move USB 3 and Thunderbolt hubs away</strong> from your Mac and AirPods. USB 3 is a notorious 2.4GHz noise source; a hub sitting next to your laptop can wreck Bluetooth from inches away.</li>
<li><strong>Change your router's 2.4GHz channel</strong> to 1, 6, or 11 (the non-overlapping options) and avoid crowded channels your neighbors are on.</li>
<li><strong>Keep line of sight.</strong> Bodies and walls absorb 2.4GHz. If your Mac is behind you or in a bag, drops get worse.</li>
</ul>

<blockquote>Wi-Fi 6E and Wi-Fi 7 routers can help indirectly: pushing your devices onto 6GHz clears the 2.4GHz band that Bluetooth depends on. But a poorly configured mesh that keeps steering you back to 2.4GHz can make things worse. Check which band you're actually on.</blockquote>

<h2>Fix 4: Reset the Bluetooth and Continuity stack</h2>

<p>If re-pairing didn't hold, reset the radios themselves:</p>

<ul>
<li>Toggle Bluetooth off and on from the menu bar, then reboot the Mac. A reboot clears a surprising number of transient audio glitches.</li>
<li>Reset the SMC/NVRAM on Intel Macs, or simply shut down fully (not restart) for 30 seconds on Apple Silicon.</li>
<li>If you don't use AirDrop or Handoff, disabling Handoff in System Settings, General, AirDrop &amp; Handoff reduces background radio chatter.</li>
</ul>

<h2>What won't fix it (and what a volume mixer actually does)</h2>

<p>To be clear about scope: none of this is a software-volume problem, and no volume app can repair a Bluetooth link. If your audio is <em>dropping</em>, chase the radio issue above. Apps like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> control per-app volume, mute, and output switching, they don't touch the Bluetooth stack, so they won't stop stuttering. Where a mixer genuinely helps is the adjacent annoyance many AirPods users conflate with dropouts: one app blasting while another is too quiet, or needing to jump outputs quickly. That's a volume-balance problem, not a connection one.</p>

<p>Diagnose honestly. If audio cuts out for a beat and returns, it's interference or auto-switch. If levels are just uneven between apps, that's a mixing problem you can actually solve with software.</p>

<h2>Quick checklist</h2>

<ul>
<li>Forget and re-pair the AirPods.</li>
<li>Set both Mac and iPhone to <strong>When Last Connected</strong>, not Automatically.</li>
<li>Move your Mac to 5GHz Wi-Fi; keep USB 3 hubs away.</li>
<li>Set 2.4GHz to channel 1, 6, or 11.</li>
<li>Reboot after toggling Bluetooth.</li>
</ul>

<p>Once the dropouts are gone and you just want cleaner control over how loud each app plays, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adds a proper per-app volume mixer, mute, boost, and quick output switching that macOS still doesn't include. It's a €14.99 one-time purchase on the Mac App Store, sandboxed, with no drivers to install.</p>`,
  },
  "mac-right-speaker-not-working-after-tahoe": {
    slug: "mac-right-speaker-not-working-after-tahoe",
    title: "Right Speaker Dead on Mac After the Tahoe Update? How to Fix It",
    description: "One speaker or channel stopped working after updating to macOS Tahoe? Start with the audio balance slider, then reset Core Audio, try safe mode, and rule out hardware. A clear troubleshooting guide.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>If your right speaker went silent after updating to macOS Tahoe, check the audio <strong>balance slider</strong> first — it can shift during an update. Go to System Settings &gt; Sound &gt; Output and make sure Balance sits dead center. If that's fine, restart Core Audio, boot into safe mode, and then rule out hardware. Most cases are software.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Right Speaker Dead on Mac After the Tahoe Update? How to Fix It" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>First: the balance slider (fixes this more often than you'd think)</h2>

<p>A stuck or shifted balance slider is the single most common reason one channel goes quiet — and macOS updates occasionally nudge it. Before you assume the worst:</p>

<ul>
<li>Open <strong>System Settings &gt; Sound</strong>.</li>
<li>Click the <strong>Output</strong> tab and select your speakers (built-in, or your external device).</li>
<li>Find the <strong>Balance</strong> slider and drag it to the exact center. If it was pulled left, your right channel would sound dead.</li>
</ul>

<p>Do this <em>per output device</em>. The balance setting is remembered separately for built-in speakers, headphones, and each external interface — so a centered built-in balance won't help if the problem is on your USB DAC.</p>

<h2>Test whether it's actually a hardware channel</h2>

<p>Rule the hardware in or out quickly. Play a stereo track you know well, then plug in a pair of wired headphones. If both channels work in headphones but not through the speakers, the issue is downstream of the audio engine (speaker hardware or the output path). If the same channel is dead in headphones too, it's more likely software or the logic board's audio codec.</p>

<p>You can also open <strong>Music</strong> or QuickTime, play something, and toggle the balance hard left, then hard right. If audio moves cleanly between channels, both speakers are alive and this is purely a settings problem.</p>

<h2>Restart Core Audio</h2>

<p>macOS routes all sound through the <strong>coreaudiod</strong> process. After a major update, its state can get wedged — outputs disappear, channels drop, or volume behaves oddly. Restarting it is safe and forces macOS to rebuild the audio graph:</p>

<ul>
<li>Open <strong>Terminal</strong> (Applications &gt; Utilities).</li>
<li>Run: <code>sudo killall coreaudiod</code></li>
<li>Enter your password. The audio daemon relaunches automatically within a second or two.</li>
</ul>

<p>Nothing is deleted — this just reboots the audio subsystem. Test your right speaker again immediately afterward.</p>

<h2>Reboot properly, then try safe mode</h2>

<p>A full restart clears transient audio glitches that a killall won't. If the channel is still dead, boot into <strong>safe mode</strong>, which loads a minimal system and skips third-party audio extensions and login items:</p>

<ul>
<li><strong>Apple Silicon:</strong> Shut down. Hold the power button until "Loading startup options" appears. Select your disk, then hold <strong>Shift</strong> and click "Continue in Safe Mode."</li>
<li><strong>Intel:</strong> Restart and hold <strong>Shift</strong> until the login window appears.</li>
</ul>

<p>If both speakers work in safe mode, a third-party audio driver, virtual device, or menu-bar utility installed before the update is conflicting with Tahoe's new audio stack. Boot back to normal and remove or update recently installed audio software (screen recorders, meeting apps, and audio-routing kexts are common culprits).</p>

<h2>Reset NVRAM (Intel Macs only)</h2>

<p>On Intel Macs, sound and speaker settings live in NVRAM/PRAM, and a stale value can survive an update. Reset it: shut down, then power on and immediately hold <strong>Option + Command + P + R</strong> for about 20 seconds, letting the Mac restart once. This is not applicable to Apple Silicon Macs — they manage this automatically, so skip it if you're on an M-series machine.</p>

<h2>Update again — and check for a point release</h2>

<p>Early releases of any major macOS version ship with audio driver bugs that later get patched. Head to <strong>System Settings &gt; General &gt; Software Update</strong> and install any pending Tahoe point release (14.x.1, 14.x.2, etc.). If a supplemental update exists, it often addresses exactly these post-update audio regressions.</p>

<h2>When it's genuinely hardware</h2>

<p>If safe mode, a Core Audio restart, and a clean reinstall all fail — and the same channel is dead in headphones — you may be looking at a hardware fault. The timing with an update can be coincidental; speaker amplifiers and audio codecs do fail. Run <strong>Apple Diagnostics</strong> (shut down, then hold the power button on Apple Silicon and choose Diagnostics, or hold <strong>D</strong> on Intel at startup). If it flags an audio component, contact <strong>Apple Support</strong> or an authorized service provider. Don't spend money on software for a blown speaker.</p>

<blockquote>Quick rule of thumb: if audio pans correctly with the balance slider, both speakers are physically fine and your fix is in software. If it never moves to the dead side, suspect hardware.</blockquote>

<h2>Where volume software fits (and where it doesn't)</h2>

<p>To be clear: a dead speaker channel is not something a volume app fixes — the checks above are your path. That said, once your audio is healthy again, macOS still lacks something Windows has had for years: a real per-app volume mixer. If you found yourself digging through Sound settings because one app was blasting while another was too quiet, a menu-bar mixer like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lets you set independent volume, mute, and even boost per application without touching your system balance. It's a convenience tool for everyday mixing, not a repair for the problem in this article.</p>

<h2>The short version</h2>

<ul>
<li>Center the <strong>Balance</strong> slider — per output device.</li>
<li>Test with headphones to isolate hardware.</li>
<li>Run <code>sudo killall coreaudiod</code>, then restart.</li>
<li>Try <strong>safe mode</strong> to catch driver conflicts.</li>
<li>Reset NVRAM on Intel; install any Tahoe point release.</li>
<li>Still dead in headphones? Run Apple Diagnostics and call Apple.</li>
</ul>

<p>Once your speakers are back to normal, if juggling per-app volume is a daily annoyance, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adds the mixer macOS has always been missing — €14.99, one-time, sandboxed, no drivers.</p>`,
  },
  "airpods-stuck-at-half-volume-mac-fix": {
    slug: "airpods-stuck-at-half-volume-mac-fix",
    title: "AirPods Stuck at Half Volume on Your Mac? Here's the Fix",
    description: "Why AirPods connect to your Mac at half volume — usually a Bluetooth codec switch to the hands-free mic profile — plus the re-pair fixes and how to boost the level back up for good.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>AirPods usually drop to half volume on a Mac because macOS switched them from the high-quality A2DP audio profile to the low-quality hands-free (HFP) profile — the one built for phone-call microphone use. That mode caps output and quality. Fix it by forcing the Mac back to headphone-only audio, then boost the level to keep it there.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — AirPods Stuck at Half Volume on Your Mac? Here's the Fix" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why this happens: the codec switch</h2>

<p>Bluetooth audio devices like AirPods run in one of two modes. When you're just listening, macOS uses A2DP — full stereo, full loudness, clean quality. But the moment an app wants your microphone, macOS switches the whole connection to HFP (Hands-Free Profile). HFP is a two-way telephony codec. It sounds thin, mono-ish, and noticeably quieter, because it was designed for voice calls, not music.</p>

<p>The problem is that macOS often stays stuck in HFP even after the app that grabbed the mic is done — or switches into it the instant you open Zoom, FaceTime, Teams, Discord, or a browser tab with mic permission. So your AirPods sound like they're at "half volume" not because the volume slider moved, but because the entire audio profile downgraded underneath you.</p>

<p>You'll recognize it: audio suddenly gets quiet and muffled, the AirPods show up twice in your sound settings (once as output, once as a microphone), and turning the system volume all the way up barely helps.</p>

<h2>The re-pair and codec workarounds</h2>

<p>These are the honest first steps. Work through them in order — one of the early ones usually clears it.</p>

<ul>
<li><strong>Change your input device.</strong> Open System Settings → Sound → Input and pick your Mac's built-in microphone instead of the AirPods. This stops macOS from holding the AirPods in HFP mode, so output can climb back to full A2DP quality. This is the single most effective fix.</li>
<li><strong>Toggle Bluetooth off and on.</strong> A quick reset of the connection often re-negotiates A2DP cleanly, especially if the AirPods got stuck after a call ended.</li>
<li><strong>Reconnect the AirPods.</strong> Close the case, wait a few seconds, reopen it near the Mac, and reselect them as the output device.</li>
<li><strong>Quit the app that grabbed the mic.</strong> Fully quit Zoom, Teams, Discord, or that browser tab. Some apps hold the mic session open in the background and pin HFP until they're gone.</li>
<li><strong>Re-pair from scratch.</strong> Remove the AirPods under System Settings → Bluetooth (click the info button → Forget This Device), then pair again. This clears a corrupted profile negotiation that toggling alone won't fix.</li>
<li><strong>Reset the AirPods.</strong> With them in the case lid open, hold the setup button on the back until the light flashes amber then white. Re-pair afterward. This is the nuclear option for firmware-level weirdness.</li>
<li><strong>Update macOS and AirPods firmware.</strong> Apple has shipped Bluetooth audio fixes in point releases. AirPods firmware updates silently when they're charging near a connected device — so leave them in the case near your Mac overnight.</li>
</ul>

<blockquote><p>The pattern to watch: if the volume drops the instant you join a call and recovers when the call ends, it's the HFP switch — not a broken speaker or a settings glitch.</p></blockquote>

<h2>Why the fixes don't always stick</h2>

<p>Here's the frustrating part. Even after re-pairing, macOS will happily switch your AirPods back into the quiet hands-free mode the next time any app touches the mic. You can't permanently disable that behavior in system settings — Apple treats it as automatic. So you end up re-doing the input-device trick several times a day, and any moment your AirPods are in a call or a mic-hungry app, they're capped at that lower level again.</p>

<p>There's also a second, separate issue people conflate with this one: some apps are just quieter than others at max system volume. A podcast player or a browser tab can sit well below what your ears want, even when the AirPods are running clean A2DP. macOS gives you one volume slider for everything and no per-app control, so there's no native way to push a single quiet app back up.</p>

<h2>Boost the level back up — and keep it there</h2>

<p>This is where a per-app volume mixer earns its place. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a menu-bar app for macOS that gives every running app its own independent volume slider — including a boost above 100%. So when your AirPods come back from a call at a lower effective level, or a specific app is simply too quiet, you drag that app past the normal ceiling and it stays there.</p>

<p>Concretely, that means:</p>

<ul>
<li><strong>Per-app volume BOOST.</strong> Push a quiet app above the standard maximum instead of straining to hear it at "full" system volume.</li>
<li><strong>Volume profiles.</strong> Save a set of levels — boosted browser, softer music, loud video calls — and switch the whole arrangement in one click so you're not re-adjusting after every reconnect.</li>
<li><strong>Quick output switching.</strong> Jump between AirPods, laptop speakers, and an external DAC from the menu bar without digging through System Settings, which helps when you're forcing a fresh profile negotiation.</li>
<li><strong>Per-app mute and auto-ducking.</strong> Silence one app without touching the rest, and let media dip automatically when something more important plays.</li>
</ul>

<p>It's worth being clear about what this does and doesn't do. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> won't force macOS to stay in A2DP — the input-device trick above is still your tool for the codec itself. What it does is give you back the loudness the downgrade stole, per app, so a quiet AirPods session or a stubbornly soft app is a one-drag fix instead of a lost cause. And because it's a sandboxed Mac App Store app, there's no audio driver to install, no DMG, no kernel extension — it just runs.</p>

<h2>The short version</h2>

<p>If your AirPods sound quiet and muffled on your Mac, switch your input device off the AirPods to force them out of hands-free mode, and re-pair if that fails. When the level still won't reach where you want it — or a single app is just too soft — reach for per-app boost so you set it once and move on.</p>

<p>Tired of fighting the volume slider every time you take a call? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> — a one-time €14.99, no subscription, no drivers — and give every app its own volume.</p>`,
  },
  "mac-volume-resets-itself-tahoe-bug": {
    slug: "mac-volume-resets-itself-tahoe-bug",
    title: "Mac Volume Keeps Resetting Itself on Tahoe? How to Lock It for Good",
    description: "Since macOS Tahoe, many Macs suddenly change or reset their volume on their own. Here's why it happens, how to stop the built-in causes, and how to lock a fixed volume per app so it stays put.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>If your Mac volume keeps resetting itself since macOS Tahoe, the fix is to eliminate the automatic adjusters: disable audio ducking and "Play sound on startup," reset the sound settings, and reconnect any Bluetooth output cleanly. For per-app levels that jump around, lock a fixed volume per app with a mixer so it never drifts again.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Mac Volume Keeps Resetting Itself on Tahoe? How to Lock It for Good" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why your volume changes on its own after Tahoe</h2>

<p>A volume that moves without you touching it feels like a hardware fault, but it's almost always software deciding your level for you. macOS has several automatic behaviors that quietly nudge or reset output, and Tahoe's audio-stack changes made a few of them more noticeable. Before you assume the app or the Mac is broken, it helps to know exactly which system is grabbing the slider.</p>

<ul>
<li><strong>Audio ducking:</strong> macOS lowers other audio when it thinks something more important is playing (Siri, accessibility announcements, notifications). After the trigger ends, the level sometimes doesn't come all the way back.</li>
<li><strong>Bluetooth handshake resets:</strong> AirPods and other Bluetooth devices renegotiate volume on connect. Reconnecting mid-session can snap output to a default or to a much louder/quieter level.</li>
<li><strong>Output device switching:</strong> When you unplug headphones, dock, or switch to a monitor's speakers, each output remembers its own volume. Switching back and forth looks like "random" resets.</li>
<li><strong>Per-app defaults:</strong> Some apps (browsers, video players, conferencing tools) set their own gain on launch or when a new stream starts, overriding whatever you had.</li>
<li><strong>Startup sound and login state:</strong> The boot chime and login can push system volume back toward a default level you didn't choose.</li>
</ul>

<h2>Fix the built-in causes first</h2>

<p>Work through these in order. Most "resets itself" complaints disappear once ducking and Bluetooth are ruled out.</p>

<ul>
<li><strong>Turn off the startup sound.</strong> System Settings → Sound → uncheck <em>Play sound on startup</em>. This stops the boot chime from resetting your baseline level.</li>
<li><strong>Reduce or disable ducking triggers.</strong> In System Settings → Accessibility → Spoken Content and Siri, turn off spoken announcements you don't need. Fewer triggers means fewer moments where macOS lowers audio and forgets to restore it.</li>
<li><strong>Re-pair problem Bluetooth devices.</strong> Remove AirPods or headphones from Bluetooth settings and pair them fresh. A stale profile is a common cause of volume snapping on connect.</li>
<li><strong>Set each output device deliberately.</strong> Connect each output you use (built-in, monitor, headphones) and set its volume once. macOS stores volume per device, so setting them all removes the surprise when you switch.</li>
<li><strong>Reset Core Audio if it's stuck.</strong> Open Terminal and run <code>sudo killall coreaudiod</code>. This restarts the audio daemon without a reboot and clears a hung state that can cause erratic levels.</li>
<li><strong>Update, then restart.</strong> Early Tahoe point releases shipped audio fixes. Make sure you're on the latest build and reboot once after updating.</li>
</ul>

<p>If the resets stop, one of the above was your culprit. If your <em>system</em> volume is stable but individual apps keep drifting louder or quieter than everything else, you've hit the limit of what the built-in controls can do.</p>

<h2>The real gap: macOS can't lock volume per app</h2>

<p>Here's the frustrating part. Windows has had a per-app volume mixer for years — you open it, drag one app's slider, and it stays there. macOS has never shipped one. There is exactly one system volume slider, and every app fights over it. So when a browser tab blasts an autoplay ad or a video call comes in twice as loud as your music, your only option is to ride the master volume manually — which is the very "why does this keep changing" loop you're trying to escape.</p>

<blockquote>The system slider is a single shared dial. Without a per-app mixer, "set it and forget it" is impossible on stock macOS — something will always override you.</blockquote>

<h2>Lock a fixed volume per app with SoundDial</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> adds the per-app mixer macOS is missing. It lives in your menu bar and gives every running app its own volume slider, independent of the master. Because it remembers the level you set for each app, it directly solves the "resets itself" problem: you decide once, and that app opens at that volume every time.</p>

<ul>
<li><strong>Independent volume per app:</strong> keep music at 40% and a video call at 80% at the same time, with no master-slider juggling.</li>
<li><strong>Per-app mute and boost:</strong> silence a noisy app instantly, or push a too-quiet app past 100% when its own audio is weak.</li>
<li><strong>Volume profiles:</strong> save setups for "work," "gaming," or "focus" and switch the whole mix in one click.</li>
<li><strong>Auto-ducking on your terms:</strong> lower background apps automatically when you speak or when a chosen app is active — instead of macOS deciding.</li>
<li><strong>Quick output switching:</strong> jump between speakers, headphones, and monitor audio from the menu bar without diving into settings.</li>
</ul>

<p>It's a €14.99 one-time purchase from the Mac App Store — no subscription, no drivers, no DMG, and no kernel extensions. Because it's fully sandboxed and App Store-distributed, you're not installing a legacy audio kext that Tahoe might block on the next update. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> sets your levels using supported APIs, so your remembered volumes survive updates and reboots.</p>

<h2>Which approach do you actually need?</h2>

<p>If your whole system volume jumps, start with the built-in fixes above — ducking, Bluetooth, and the startup sound account for most cases. If instead the problem is that one app is always the odd one out, or you're tired of the master slider being a compromise, a per-app mixer is the only real answer. macOS won't add one, so a menu-bar tool is the practical route to a mix that genuinely stays where you put it.</p>

<p>Tired of chasing the volume slider on Tahoe? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and lock a remembered volume for every app — €14.99 once, no subscriptions, no drivers.</p>`,
  },
  "control-daw-and-system-volume-separately-mac": {
    slug: "control-daw-and-system-volume-separately-mac",
    title: "Control Your DAW Monitor Volume Separately From System Audio on Mac",
    description: "macOS has no built-in per-app volume mixer, so your DAW and system sounds share one level. Here's how to control Logic, Ableton, or GarageBand monitor volume independently from your browser and notifications.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>macOS has no built-in per-app volume mixer, so your DAW and everything else share one system slider. To set your monitor level independently from browsers, Slack, and notifications, you need per-app volume control. A menu-bar mixer like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> gives Logic, Ableton, and GarageBand their own volume, separate from system audio.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Control Your DAW Monitor Volume Separately From System Audio on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why one volume slider ruins your monitoring</h2>

<p>When you're producing, your DAW is only one of many things making sound. A reference track plays in a browser tab. Slack pings arrive. A YouTube tutorial runs on a second monitor. On Windows, the Volume Mixer lets you balance all of these independently. On macOS, Apple never shipped an equivalent — the volume keys and menu-bar slider move <em>everything</em> at once.</p>

<p>That creates a real problem for anyone mixing by ear. You dial in a comfortable monitoring level in Logic, then a notification blasts through at the same level and blows out your ears. Or you turn the system down to protect your hearing during a loud passage, and now your reference track is too quiet to compare against. Your monitoring reference is no longer stable, and stable reference is the whole point of mixing.</p>

<blockquote>Monitoring at a consistent level is one of the few habits that measurably improves your mixes. If system sounds keep forcing you to move the master slider, you lose that consistency.</blockquote>

<h2>What "separate DAW volume" actually means</h2>

<p>There are two different things producers conflate here, and it's worth separating them:</p>

<ul>
<li><strong>Interface / master output level</strong> — the hardware knob on your audio interface or your monitor controller. This sets your absolute listening loudness and should stay put once calibrated.</li>
<li><strong>Per-app software volume</strong> — how loud each application is <em>before</em> it reaches that output. This is what macOS is missing. It lets you keep the DAW at unity while turning Chrome, Music, or notification sounds down to a bed level underneath it.</li>
</ul>

<p>You want the second one. The goal isn't to turn your DAW down — it's to turn everything else down relative to it, so the DAW stays your loudest, most consistent source and distractions sit quietly in the background.</p>

<h2>How to do it with a per-app mixer</h2>

<p>A menu-bar mixer such as <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lists every app currently playing audio and gives each its own slider. The workflow for a producer looks like this:</p>

<ul>
<li><strong>Calibrate your interface once.</strong> Set your audio interface or monitor controller to a comfortable, repeatable reference level and leave it. This is your fixed anchor.</li>
<li><strong>Set your DAW to 100%.</strong> In the mixer, leave Logic, Ableton, or GarageBand at full software volume so it passes through at unity. Your DAW's own master fader still does the fine mixing.</li>
<li><strong>Pull everything else down.</strong> Drop Chrome, Safari, Music, and Slack to a lower level — say 40–60% — so reference tracks and messages sit under your mix instead of competing with it.</li>
<li><strong>Mute the noisy stuff.</strong> Per-app mute lets you silence a browser or a chat app entirely without touching your monitoring chain. One click, and your DAW keeps playing untouched.</li>
</ul>

<p>Because the DAW's slider never moves, your monitoring reference stays rock solid across a whole session. You can crank a reference track for a quick A/B, then mute it, and your mix level hasn't shifted a decibel.</p>

<h2>Boosting a quiet app instead of turning others down</h2>

<p>Sometimes the problem runs the other way. A rough demo bounce, a voice memo, or a quiet reference plays back far below your session level. Turning your interface up to hear it means everything else is now too loud. Per-app <strong>volume boost</strong> lets you push a single quiet application above 100% so it matches your working level — without touching your calibrated output. It's the piece Windows' mixer never had and one of the more useful tools when you're auditioning material from outside your DAW.</p>

<h2>Profiles for different session types</h2>

<p>Your ideal balance isn't the same for every task. Tracking, mixing, and casual listening each want a different mix of app levels. Volume profiles let you save a setup and recall it instantly:</p>

<ul>
<li><strong>Mixing:</strong> DAW at 100%, browser and Music low, chat muted.</li>
<li><strong>Reference listening:</strong> Music or streaming app up, DAW down.</li>
<li><strong>Calls / collaboration:</strong> conferencing app up, DAW pulled back so it doesn't bleed into the call.</li>
</ul>

<p>Switching profiles beats hand-adjusting five sliders every time you change gears.</p>

<h2>Auto-ducking and fast output switching</h2>

<p>Two more things matter in a studio. <strong>Auto-ducking</strong> can automatically dip background apps when a priority source speaks or plays, so a call or important audio always cuts through. And <strong>quick output switching</strong> from the menu bar lets you jump between your interface, your monitors, and headphones without digging into System Settings — a constant task when you're checking a mix on different systems.</p>

<h2>Why not a virtual audio driver?</h2>

<p>Some routing tools solve this by installing a kernel-level virtual audio driver. Those are powerful but heavy: they can break after macOS updates, add latency, and require deep system permissions. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is sandboxed and ships through the Mac App Store — no drivers, no DMG, no aggregate-device setup. For per-app level control specifically, that's a far simpler path than re-architecting your audio routing.</p>

<p>Ready to keep your monitoring level stable while everything else stays in its place? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for a one-time €14.99 and give your DAW its own volume.</p>`,
  },
  "audio-hijack-alternative-simple-volume-mac": {
    slug: "audio-hijack-alternative-simple-volume-mac",
    title: "A Simpler Audio Hijack Alternative for Per-App Volume on Mac",
    description: "If you only want independent volume per app on macOS, Audio Hijack is overkill. Here's a lighter, cheaper menu-bar alternative that does per-app volume, mute, and boost without audio routing.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>If all you want is independent volume per app on macOS, Audio Hijack is more tool than you need. It's a pro audio-routing and recording suite (around $79) built for capture, effects, and session graphs. For simply turning one app down and another up, a lightweight menu-bar mixer like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is faster, cheaper, and always ready.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — A Simpler Audio Hijack Alternative for Per-App Volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why people reach for Audio Hijack in the first place</h2>

<p>macOS has no built-in per-app volume mixer. Windows has had one for years in its Volume Mixer, but on a Mac the volume keys and the menu-bar slider only move one thing: the system master. There's no first-party way to say "keep Spotify at 40% but leave my video call at 100%."</p>

<p>So people search for a workaround and land on Audio Hijack. It <em>can</em> do per-app volume, because it can intercept and process the audio from any single application. But that capability is a side effect of what it's actually designed for: recording audio from apps and hardware, chaining effects, routing between virtual devices, and building reusable session pipelines. It's genuinely excellent at that. It's just a heavy answer to a light question.</p>

<h2>Where Audio Hijack becomes overkill</h2>

<p>A few things tend to frustrate people who only wanted a volume slider:</p>

<ul>
<li><strong>Price.</strong> Audio Hijack sits around $79. That's fair for a recording studio in an app; it's a lot for turning down a browser tab.</li>
<li><strong>It has to keep running.</strong> Its per-app processing only works while the app is open and the relevant session is active. Quit it, and your volumes revert. You're keeping a full audio workstation resident just to hold a slider in place.</li>
<li><strong>Session-based thinking.</strong> You build sessions with blocks and connections. Powerful for capture, but it's a lot of conceptual overhead when your goal is "this app quieter, that app louder."</li>
<li><strong>The interface is deep.</strong> Effects, routing, meters, block wiring — a rich surface area you'll mostly ignore if you never record anything.</li>
</ul>

<blockquote>Rule of thumb: if you want to <em>record or route</em> audio, Audio Hijack earns its price. If you only want to <em>balance</em> audio between apps, you're paying for a workshop when you needed a knob.</blockquote>

<h2>The simpler alternative: a menu-bar volume mixer</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> takes the one job most people actually came for and does only that. It lives in your menu bar. Click the icon and you get a live list of every app currently playing audio, each with its own slider. Drag Spotify to 30%, leave your call at 100%, mute Slack entirely — done, no session to build.</p>

<p>What it covers:</p>

<ul>
<li><strong>Independent volume per app</strong> — every audio source gets its own slider, adjustable in real time.</li>
<li><strong>Per-app mute</strong> — silence one noisy app with a click without touching anything else.</li>
<li><strong>Per-app volume boost</strong> — push a quiet app <em>above</em> 100% when its own max is still too soft. This is the piece the system slider can never do.</li>
<li><strong>Volume profiles</strong> — save a whole mix (music low, calls loud, notifications muted) and recall it in one click for a given context.</li>
<li><strong>Auto-ducking</strong> — automatically dip background audio when something more important starts, so a call or a video isn't buried under your playlist.</li>
<li><strong>Quick output switching</strong> — jump between headphones, speakers, and other outputs from the same menu.</li>
</ul>

<h2>Practical: getting per-app control in under a minute</h2>

<p>The setup difference is the whole point. With a routing tool you'd create a session, add a source block, wire it, and keep the app running. Here it's essentially:</p>

<ul>
<li>Install <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> from the Mac App Store.</li>
<li>Play audio in a couple of apps so they appear in the list.</li>
<li>Click the menu-bar icon and drag each app's slider to taste.</li>
<li>Optionally save that mix as a profile, or boost a too-quiet app past 100%.</li>
</ul>

<p>Because it's distributed through the Mac App Store, it's sandboxed and installs like any normal app — no <code>.dmg</code> to drag, no kernel extension, no audio driver to approve in Security settings, and nothing that needs re-approving after a macOS update. That last point matters: driver-based mixers historically break on OS upgrades and require reinstalling a system-level component. A sandboxed App Store app avoids that entire category of maintenance.</p>

<h2>Which one should you pick?</h2>

<p>Be honest about the job. Choose <strong>Audio Hijack</strong> if you need to record app or hardware audio, apply real-time effects, or build routing graphs between virtual devices. That's its home turf and it's worth every dollar there.</p>

<p>Choose a dedicated menu-bar mixer if your actual need is "let me set the volume of each app independently." You'll spend €14.99 once instead of ~$79, skip the session-building, and get boost, mute, profiles, and ducking in a panel you open from the menu bar. No recording features you'll never touch, no workstation running in the background to hold a slider in place.</p>

<p>Most people who tried Audio Hijack for volume balancing were solving a small problem with a big tool. If that's you, the small tool fits better — and costs a fraction as much.</p>

<p><a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for €14.99, one-time — per-app volume, boost, mute, profiles, and auto-ducking, right from your menu bar.</p>`,
  },
  "boom-3d-alternative-per-app-volume-mac": {
    slug: "boom-3d-alternative-per-app-volume-mac",
    title: "Boom 3D Alternative: Per-App Volume Without the Bloat (Mac)",
    description: "If you used Boom 3D mainly to boost audio but really wanted per-app volume control, SoundDial is the leaner Mac alternative: independent volume per app, per-app mute and boost, one-time price, no system-wide EQ or drivers.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>If you reached for Boom 3D to boost volume but actually wanted to control each app separately, you want a different tool. Boom 3D is a system-wide volume booster and EQ. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a focused per-app volume mixer: independent volume, mute, and boost for each app, one-time €14.99, no EQ, no drivers.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 3D Alternative: Per-App Volume Without the Bloat (Mac)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>What Boom 3D actually does (and doesn't)</h2>
<p>Boom 3D is built around three things: a system-wide volume boost, a 31-band equalizer, and 3D "surround" effects. It applies those to <em>everything</em> your Mac plays at once. That is genuinely useful if your goal is a louder laptop or a bass curve you like across the board.</p>
<p>What Boom 3D is not built for is treating apps as independent channels. There's no clean way to say "Spotify at 40%, my video call at 100%, and this browser tab muted." Its slider moves the whole mix. And because it installs an audio driver to sit in the signal path, it touches your system at a lower level than a sandboxed utility does. It's also positioned as a paid product with upgrade cycles rather than a small one-time tool.</p>
<blockquote><p>The common story: people install Boom 3D to make one quiet app louder, then realize the real problem was that macOS has no per-app volume mixer at all.</p></blockquote>

<h2>The gap: macOS has no volume mixer</h2>
<p>This surprises people coming from Windows. Windows has had a per-app Volume Mixer for years — right-click the speaker, set each app's level individually. macOS simply doesn't ship this. You get one master volume and whatever internal slider each app happens to expose. There is no OS-level way to balance Slack against a YouTube tab against a game.</p>
<p>So when a music app is drowning out your call, your only native options are crude: turn the master down (which quiets everything) or dig through each app's own settings hoping it has a volume control. Boom 3D doesn't close that gap either — it makes the whole mix louder, not each app.</p>

<h2>Where SoundDial fits</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is the missing mixer. It lives in your menu bar and gives every running app its own row with its own slider. That's the core difference from Boom 3D: instead of one global effect, you get per-source control.</p>
<ul>
<li><strong>Independent volume per app</strong> — set Spotify to 30% while your video call stays at 100%.</li>
<li><strong>Per-app mute</strong> — silence one noisy app instantly without touching anything else.</li>
<li><strong>Per-app boost</strong> — if you liked Boom 3D's louder-than-100% trick, SoundDial keeps that, but targeted at a single app instead of the whole system. Quiet apps get pushed past their normal ceiling on their own.</li>
<li><strong>Volume profiles</strong> — save a mixer layout (e.g. "gaming," "meeting," "music") and recall it in one click instead of re-balancing sliders every time.</li>
<li><strong>Auto-ducking</strong> — automatically dip background audio when something important starts, so a call or a game cue isn't buried under music.</li>
<li><strong>Quick output switching</strong> — jump between headphones, speakers, and other outputs from the same menu.</li>
</ul>
<p>What SoundDial deliberately doesn't do is the rest of the Boom 3D feature sprawl. There's no 31-band EQ, no faux-surround processing, no system-wide effect chain. If you want a mastering-grade EQ, Boom 3D or a dedicated audio suite is the right pick. If what you actually kept opening Boom 3D for was <em>volume</em>, that surface area is bloat you're paying to carry.</p>

<h2>Boost, without the driver</h2>
<p>The "boost" question deserves a direct answer, because it's usually why Boom 3D users shop for alternatives. Boom 3D's boost is global and driver-based. SoundDial's boost is per-app and runs inside Apple's app-sandbox model — it's distributed through the Mac App Store, so there's no separate installer, no kernel-level driver, and no leftover system components to uninstall later. You get the "make this one quiet app louder" outcome without handing a driver control of your entire audio path.</p>

<h2>Price: one-time vs. ongoing</h2>
<p>Boom 3D is a paid app with its own upgrade and licensing model, and pricing varies by platform and version. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a single one-time purchase at €14.99 — buy it once, keep it, no subscription and no per-version repurchase to keep the mixer working. For a utility you'll leave running in the menu bar every day, a flat price tends to age better than a product you have to keep re-buying into.</p>

<h2>Which one should you pick?</h2>
<ul>
<li><strong>Choose Boom 3D</strong> if your real need is a serious equalizer and system-wide audio effects, and you don't mind an audio driver in the mix.</li>
<li><strong>Choose SoundDial</strong> if you want what Windows users take for granted — a real per-app volume mixer — plus targeted boost, profiles, and auto-ducking, at a one-time price and with no drivers to install.</li>
</ul>
<p>Most people who bounce off Boom 3D fall into the second group. They didn't want to tune frequencies; they wanted the browser quieter than the call. That's exactly the job SoundDial is built for.</p>

<p><strong>Want per-app volume control on your Mac without the EQ bloat or a subscription?</strong> <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> — €14.99 once, sandboxed, no drivers, and every app gets its own slider.</p>`,
  },
  "mute-everything-except-one-app-mac": {
    slug: "mute-everything-except-one-app-mac",
    title: "How to Mute Everything Except One App on Your Mac",
    description: "macOS has no per-app volume mixer, so silencing every app except one takes a helper. Here is how to hear only your call, stream, or game while everything else stays muted.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>macOS has no built-in way to mute individual apps, so to hear only one app you need a per-app volume mixer. Install <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, open its menu-bar mixer, mute every app except the one you want to hear, and that app keeps playing while the rest go silent instantly.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — How to Mute Everything Except One App on Your Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why macOS can't do this on its own</h2>
<p>Windows has had the Volume Mixer for over a decade: right-click the speaker icon, and every running app gets its own slider. macOS has never shipped this. The volume keys on your Mac control one thing only, the master output level. When you turn the system down, everything goes down together. When you mute, everything mutes.</p>
<p>That is fine until you have five things making noise at once. You are on a video call, but a browser tab is autoplaying an ad, Spotify is still running, a game is pinging in the background, and Slack is chiming. Your only native options are to quit apps, mute them one by one inside each app's own settings (if it even has that option), or yank your headphones. None of that lets you say "keep this one, silence the rest."</p>

<h2>The straightforward way: mute the rest with a mixer</h2>
<p>A per-app mixer sits between your apps and your output device and gives each app its own volume and mute control. Once you have one running, isolating a single app takes seconds:</p>
<ul>
<li>Open the mixer from your menu bar. You'll see a live list of every app currently producing audio.</li>
<li>Find the one app you want to hear, your call, your stream, your game.</li>
<li>Mute everything else. Tap the mute toggle next to each other app, or pull its slider to zero.</li>
<li>That's it. The one app you left alone keeps playing at full volume while the rest stay silent.</li>
</ul>
<p>With <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, each app in the list has its own slider and its own mute button, so this is a handful of clicks. New apps that start playing later show up automatically, so if a notification sound tries to sneak in, you can silence it on the spot without touching your focused app.</p>

<blockquote>The trick is that muting "everything except one" is just the inverse of muting one app. You're not silencing your Mac, you're silencing the noise around the thing you actually care about.</blockquote>

<h2>Save it as a profile so you don't redo it</h2>
<p>If this is a setup you reach for often, doing it by hand every time gets old. Say you always want your call app loud and everything else off during meetings, or you want your stream front and center while games and browsers stay quiet. A volume profile stores those exact per-app settings and reapplies them in one click.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lets you save profiles like "Meeting" or "Stream Only," then switch to them the instant you need them. Set it up once, and isolating your one app becomes a single menu-bar action instead of a five-slider chore.</p>

<h2>The smarter version: auto-duck instead of hard-mute</h2>
<p>Sometimes you don't want the other apps fully gone, you just want them to get out of the way when something more important starts. That's auto-ducking. When your priority app plays, background apps automatically drop to a low level, then rise back up when it stops.</p>
<p>This is ideal for calls and streams. When someone starts talking, your music dips so you can hear them, and when the call ends, the music comes back up on its own. You get the "hear one app clearly" outcome without manually muting and unmuting every time the situation changes. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> includes auto-ducking alongside the manual mixer, so you can choose hard mute for total silence or ducking for a softer background.</p>

<h2>Boosting the one app you kept</h2>
<p>There's a bonus to isolating a single app: you can also make it louder than your Mac normally allows. Some apps, especially quiet video calls or poorly mastered streams, are barely audible even at max volume. A per-app boost pushes an individual app above 100% without cranking your system output, which would just amplify the apps you already muted.</p>
<p>So the full move is: mute the noise, keep your one app, and if that app is too quiet, boost it. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> handles all three in the same mixer window.</p>

<h2>What you're not signing up for</h2>
<p>A common worry with Mac audio tools is that they require kernel extensions, virtual audio drivers, or shady installers downloaded from a random website. That's a legitimate concern, and it's why some people avoid these apps entirely.</p>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is on the Mac App Store, sandboxed, and installs like any normal app, no drivers, no DMG, no system extensions to approve. It's a one-time €14.99 purchase rather than a subscription, so you pay once and keep it. That matters for something you'll leave running in your menu bar all day.</p>

<h2>Quick recap</h2>
<ul>
<li>macOS has no native per-app volume control, so you need a mixer to do this.</li>
<li>Open the mixer, keep your one app, mute or zero out everything else.</li>
<li>Save it as a profile for calls or streams you do often.</li>
<li>Use auto-ducking if you want background apps quieted rather than killed.</li>
<li>Boost your kept app if it's too quiet on its own.</li>
</ul>

<p>Want to hear only what matters and silence the rest? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and set up your first mute-everything-else profile in under a minute.</p>`,
  },
  "different-volume-per-output-device-mac": {
    slug: "different-volume-per-output-device-mac",
    title: "Keep a Different Volume for Speakers vs Headphones on Mac",
    description: "macOS forgets your app-level volume mix when you switch between speakers and headphones. Here's why it happens, the manual limits, and how per-app volume memory fixes it.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>macOS actually remembers a separate system volume for each output device, but it forgets your app-level balance every time you switch. So headphones and speakers keep their own overall level, yet the moment you unplug, one app blasts and another vanishes. The fix is per-app volume memory that survives device switches, which macOS has no native tool for.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Keep a Different Volume for Speakers vs Headphones on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>What macOS remembers and what it doesn't</h2>

<p>There's a common belief that macOS treats every output device identically. It doesn't. Each output device stores its own system volume. Set your MacBook speakers to 30% and your AirPods to 80%, and macOS keeps those two numbers separate. Plug in, unplug, reconnect, and each device returns to where you left it.</p>

<p>So why does the experience still feel broken? Because that memory stops at the single, global slider. macOS has exactly one volume control for everything playing on a given device. It does not remember how loud individual apps were. When you switch from speakers to headphones, the balance between Spotify, a Zoom call, and a YouTube tab is not preserved, because that balance never existed. Every app shares the same slider.</p>

<p>The result is the frustration people describe as "different volume for speakers vs headphones." What they usually want is not just a different master level per device, but a remembered mix: quiet music, loud calls, notifications turned down, and that mix intact whether they're on desk speakers or headphones.</p>

<h2>The manual workarounds and where they fall short</h2>

<p>You can get partway there with built-in tools, and it's worth knowing the ceiling before reaching for anything else.</p>

<ul>
<li><strong>Set each device's system volume once.</strong> Play audio through your speakers, set the level, then switch output to headphones and set that level. macOS retains both. This handles master volume per device but nothing per app.</li>
<li><strong>Use per-app volume where the app offers it.</strong> Spotify, VLC, and most browsers have their own internal volume. You can trim a loud app inside the app itself. The catch: this setting lives in the app, not the device, so it doesn't change when you switch to headphones, and most apps (Slack, Zoom, system notifications, Mail) have no such control at all.</li>
<li><strong>Switch output from Control Center or the menu bar.</strong> Option-click the volume icon in the menu bar to jump between devices quickly. Fast, but it only moves the master level around, it doesn't restore a per-app mix.</li>
</ul>

<p>These get you a per-device master volume. What none of them give you is a remembered, per-app balance that follows you across devices. That gap is exactly where the annoyance lives, and it's structural: the OS simply has no per-app mixer, unlike Windows, which has shipped one for years.</p>

<h2>Per-app volume memory, and why device switching is the real problem</h2>

<p>The deeper fix is to give each app its own volume and have those settings persist. That's what a per-app mixer like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is built for. It sits in your menu bar, lists every app currently producing sound, and gives each one an independent slider, a mute toggle, and even a boost past 100% for quiet apps.</p>

<p>The part that matters for the speakers-vs-headphones problem: those levels are remembered. Set your music to 40%, your calls to 90%, and a chatty app to muted, and <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> keeps that mix. When you unplug your headphones and fall back to speakers, you're not re-balancing three apps by hand every time.</p>

<p>Volume profiles take this further. You can save a named set of per-app levels and recall it in one click, so a "headphones, focused work" mix and a "speakers, meetings" mix are each a single selection rather than a manual reset.</p>

<blockquote><p>The mental shift: stop thinking about one master slider you keep dragging, and start thinking about a saved mix per situation. Device switching stops being a re-balancing chore.</p></blockquote>

<h2>Quick output switching without losing your mix</h2>

<p>Switching devices should be fast and non-destructive. From the same menu-bar panel you can change your output device, so moving from speakers to headphones is one click, and your per-app levels come along instead of collapsing back to a single global number.</p>

<p>A related feature worth mentioning is auto-ducking: when audio comes in on your microphone (you start talking, or a call begins), other apps automatically dip so you can be heard, then return to their set level afterward. It's the same principle applied to attention rather than devices, another thing macOS won't do on its own.</p>

<h2>How to set it up</h2>

<ul>
<li>Install <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> from the Mac App Store. It's sandboxed, so there's no driver, no DMG, and no kernel extension to approve.</li>
<li>Play audio in the apps you use most so they appear in the mixer.</li>
<li>Set each app's level, mute anything you don't want, and boost anything too quiet.</li>
<li>Save that arrangement as a profile, for example one tuned for headphones and one for speakers.</li>
<li>When you switch devices, recall the matching profile, or just let your saved per-app levels carry over.</li>
</ul>

<p>The honest summary: macOS does remember volume per output device at the master level, but it will never remember your per-app mix, because it has no per-app mixer. If your real goal is a consistent balance between music, calls, and notifications that survives every switch between speakers and headphones, you need per-app memory on top of the OS.</p>

<p>Want speakers and headphones to keep their own mix without re-adjusting every app? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> for a one-time €14.99, no subscription, no drivers.</p>`,
  },
  "sound-control-alternative-mac": {
    slug: "sound-control-alternative-mac",
    title: "Sound Control Discontinued? The Best Mac Per-App Volume Replacement (2026)",
    description: "Sound Control by Static Z Software is discontinued and breaks on modern macOS. Here is why it stopped working, what it did, and the best per-app volume mixer to switch to in 2026.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>Sound Control by Static Z Software is discontinued and no longer sold or updated, and it increasingly fails on modern macOS because it relied on a kernel-level audio driver that Apple has locked down. If you need per-app volume today, the cleanest replacement is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a sandboxed Mac App Store mixer with no drivers.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Sound Control Discontinued? The Best Mac Per-App Volume Replacement (2026)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>What Sound Control actually did</h2>
<p>Sound Control was, for years, the go-to answer to a genuine macOS gap: there is still no built-in per-app volume mixer on the Mac. Windows has had one in its Volume Mixer since Vista, but macOS only gives you a single master slider. Sound Control filled that hole with a tidy menu-bar panel that let you:</p>
<ul>
<li>Set an independent volume level for each running app.</li>
<li>Mute individual apps without touching the rest of your system audio.</li>
<li>Boost quiet apps above 100 percent.</li>
<li>Apply per-app equalizer and balance adjustments.</li>
<li>Route audio and pin apps to specific output devices.</li>
</ul>
<p>For anyone who has ever had a Zoom call blasting while a background YouTube tab whispers, that per-app control was transformative. It became a quiet staple on a lot of Mac power users' machines.</p>

<h2>Why it stopped working</h2>
<p>The honest technical story matters here, because it explains why this is not a bug someone can simply patch. Sound Control worked by installing a system audio driver — a kernel extension (kext) that inserted itself into the macOS audio pipeline so it could intercept and reshape each app's output. That deep hook is exactly what made the EQ and boost features possible.</p>
<p>Starting with macOS 10.15 Catalina and accelerating through Big Sur and the Apple Silicon transition, Apple began deprecating kernel extensions in favor of user-space alternatives. On Apple Silicon Macs, loading third-party kexts requires lowering system security in Recovery Mode, and Apple has made it clear that legacy audio kexts are on borrowed time. Static Z Software ultimately stopped selling and developing Sound Control. The result: on recent macOS versions, installs fail, audio glitches out, or the driver simply refuses to load without security downgrades most people rightly do not want to make.</p>
<blockquote>This is not neglect on the developer's part. It is a platform-level shift. Apple closed the door on the kind of low-level audio driver Sound Control was built around, and no update can fully reopen it.</blockquote>

<h2>What changed on modern macOS</h2>
<p>Apple did add one relevant thing: Core Audio now offers a Tap API (introduced in macOS 14.2 Sonoma) that lets apps capture and process per-process audio from user space — no kext, no security downgrade, no reboot into Recovery. This is the sanctioned modern path for per-app audio, and it is what a current mixer should be built on. The tradeoff is honest: user-space taps are more constrained than an old kernel driver, so you should expect clean per-app volume, mute, and boost rather than the full per-app parametric EQ Sound Control offered.</p>

<h2>The best replacement: SoundDial</h2>
<p>If you want the core of what Sound Control did — independent volume per app — on a Mac you can actually keep secure and up to date, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is the closest clean-migration option in 2026. It is a menu-bar per-app volume mixer built for the modern macOS audio stack. What carries over from the Sound Control workflow:</p>
<ul>
<li><strong>Independent volume per app</strong> — one slider per running application, right in the menu bar.</li>
<li><strong>Per-app mute</strong> — silence one app while everything else keeps playing.</li>
<li><strong>Per-app volume boost</strong> — push a quiet app above its normal ceiling.</li>
<li><strong>Volume profiles</strong> — save mixer setups for different contexts (calls, music, gaming) and switch between them.</li>
<li><strong>Auto-ducking</strong> — automatically lower background app volume, useful when you start talking or a call comes in.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other devices without diving into System Settings.</li>
</ul>
<p>The practical differences that matter for a migration: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> ships through the Mac App Store, is sandboxed, and installs no drivers and no DMG. That means no kernel extension to approve, no Recovery Mode, and no lowering your Mac's security posture — the exact pain points that killed Sound Control. It is a one-time purchase of €14.99, not a subscription.</p>

<h2>How to switch, step by step</h2>
<ul>
<li><strong>Uninstall Sound Control cleanly.</strong> Because it installed a driver, use its own uninstaller if it still runs, or remove its audio driver components before installing anything new. Two competing audio hooks can cause glitches.</li>
<li><strong>Install SoundDial from the App Store.</strong> No reboot or security changes required.</li>
<li><strong>Grant the audio permission it requests.</strong> This is what lets it read and control per-app output on modern macOS.</li>
<li><strong>Open the menu-bar panel and set levels.</strong> Your running apps appear with individual sliders; adjust, mute, or boost as needed.</li>
<li><strong>Save a profile.</strong> If you had favorite Sound Control setups, recreate them as profiles so you can switch in one click.</li>
</ul>

<h2>Honest expectations</h2>
<p>If your only reason for using Sound Control was per-app volume, mute, and boost, a modern sandboxed mixer covers you fully. If you leaned heavily on its per-app equalizer, be aware that deep EQ was tied to the old driver model and is the hardest feature to reproduce cleanly under Apple's current rules. Set expectations accordingly, and you will not be surprised.</p>

<p>Ready to get per-app volume back without the driver headaches? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> — a one-time €14.99, sandboxed, no subscription, no drivers.</p>`,
  },
  "soundbunny-alternative-mac": {
    slug: "soundbunny-alternative-mac",
    title: "SoundBunny Is Gone — the Modern Mac Per-App Volume App to Replace It",
    description: "SoundBunny by Prosoft is discontinued. Here's the current, actively maintained macOS per-app volume mixer to replace it — plus how to migrate your per-app audio setup without kernel drivers.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>If SoundBunny stopped working or is no longer sold, the modern replacement is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a menu-bar per-app volume mixer built for current macOS. It gives you the same core job — independent volume, mute, and boost per application — as a €14.99 one-time Mac App Store purchase, with no kernel driver, DMG, or subscription to manage.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — SoundBunny Is Gone — the Modern Mac Per-App Volume App to Replace It" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>What happened to SoundBunny?</h2>
<p>SoundBunny was Prosoft Engineering's per-app volume utility for macOS. It let you set a different volume level for each running app right from the menu bar — Music quiet, a call loud, a browser somewhere in between. For years it was one of the few tools filling a gap Apple never closed.</p>
<p>The problem is that SoundBunny is legacy software. It hasn't kept pace with the deep changes Apple made to macOS audio and security — Apple Silicon, the hardened runtime, tightened system-extension rules, and the removal of older audio hooks. When a utility like this stops receiving updates, it eventually breaks: it fails to launch, loses control of app streams after an OS update, or simply can't be installed cleanly on a modern Mac. If that's where you are, you're not doing anything wrong. The app is behind, not you.</p>

<h2>Why macOS still needs a third-party mixer at all</h2>
<p>Here's the honest part: this is a genuine gap in macOS, not a bug you can fix in Settings. Windows has shipped a per-app Volume Mixer for well over a decade. macOS has never had one. The system volume slider and Sound settings control your <em>output device</em> as a whole — every app rides the same master level. There is no built-in way to say "keep Safari at 40% but Zoom at 100%."</p>
<p>That's why tools like SoundBunny existed, and why a replacement is still necessary today. The need didn't go away when the app did — Apple just still hasn't addressed it.</p>

<h2>The modern replacement: SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a per-app volume mixer that lives in your menu bar and does the things SoundBunny users relied on, built against today's macOS instead of yesterday's. The feature overlap covers the essentials:</p>
<ul>
<li><strong>Independent volume per app</strong> — one slider per running application, exactly the SoundBunny mental model.</li>
<li><strong>Per-app mute</strong> — silence a single noisy app without touching everything else.</li>
<li><strong>Per-app volume boost</strong> — push a quiet app <em>above</em> 100% when a video or call is recorded too low. SoundBunny couldn't reliably amplify past system max on modern macOS; boost is a real upgrade here.</li>
<li><strong>Volume profiles</strong> — save a set of per-app levels (a "work" mix, a "gaming" mix) and switch between them instead of nudging sliders one at a time.</li>
<li><strong>Auto-ducking</strong> — automatically lower background app volume when another audio source (like your mic on a call) becomes active.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other outputs from the same menu.</li>
</ul>

<h2>What migrating actually looks like</h2>
<p>There's no import step — per-app volume levels aren't a file you carry over — but the switch is quick:</p>
<ul>
<li><strong>Remove SoundBunny properly.</strong> Quit it, then delete the app. If it installed any helper or login item, remove that too so two utilities aren't fighting over the same audio streams.</li>
<li><strong>Install SoundDial from the Mac App Store.</strong> It's sandboxed and distributed through the store, so there's no DMG to mount and no "unidentified developer" warning. One purchase, tied to your Apple ID.</li>
<li><strong>Grant audio access on first launch.</strong> macOS will ask permission for SoundDial to see app audio. This is the modern, sanctioned path Apple provides — no kernel extension, no reboot, no lowering system security. Grant it and your running apps appear as sliders.</li>
<li><strong>Rebuild your mix.</strong> Set your common apps, then save that arrangement as a profile so you never have to redo it.</li>
</ul>

<h2>The practical differences from SoundBunny</h2>
<p>The most important difference is that <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is current software. It runs natively on Apple Silicon, uses Apple's supported audio APIs, and is a Mac App Store app — which means updates arrive through the store and it's built to survive OS upgrades rather than break on them. Being sandboxed also means it can't reach outside its lane, which is reassuring for something that sits between your apps and your speakers.</p>
<p>A couple of honest caveats so expectations are right. Because SoundDial works within Apple's audio framework, control is best for standard apps that route through the normal system output. Some software plays audio through its own path or an exclusive device, and no menu-bar mixer — SoundBunny included — can fully govern those. And per-app volume is inherently a software layer on top of macOS; it's not a hardware mixer. Within those real limits, it does the job SoundBunny used to do.</p>

<blockquote>If you switched to a Mac from Windows expecting a per-app Volume Mixer, this is the tool that fills that gap — and now it's one that's actually being maintained.</blockquote>

<p>SoundBunny had a good run, but it's legacy. If you need per-app volume, mute, and boost on a modern Mac, <a href="https://apps.apple.com/app/id6772792641">get SoundDial on the Mac App Store</a> — €14.99 once, no subscription, no drivers.</p>`,
  },
  "boom-2-alternative-per-app-volume-mac": {
    slug: "boom-2-alternative-per-app-volume-mac",
    title: "Boom 2 Alternative for Mac: Per-App Volume Without the Boom 3D Upsell",
    description: "Boom 2 is legacy and keeps pushing you to Boom 3D. If you just want per-app volume and a simple boost on modern macOS, here's a focused alternative and how it works.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>If you liked Boom 2 for system-wide boost but want simple <strong>per-app</strong> volume on a current Mac, the honest answer is that Boom 2 is legacy and no longer the right tool. A focused alternative is <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, a menu-bar mixer that gives each app its own volume slider, mute, and boost, for €14.99 once, with no push to a bigger bundle.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Boom 2 Alternative for Mac: Per-App Volume Without the Boom 3D Upsell" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why Boom 2 no longer fits</h2>
<p>Boom 2 was a well-loved app for a specific reason: it boosted your Mac's overall volume beyond the system maximum and added an equalizer. It did that system-wide, not per app. That was fine in 2015. In 2026 it has two problems.</p>
<p>First, it's legacy. Global Delight has clearly moved its energy to Boom 3D, and if you open the Boom 2 product page you'll find yourself nudged toward the newer, pricier app almost immediately. Boom 2 still exists, but it's a stepping stone the vendor uses to sell Boom 3D, not a product getting active love.</p>
<p>Second, and more important: Boom 2 was never a per-app volume mixer. It raises and shapes one master output. If your actual pain is that a Slack ping is louder than your music, or a browser tab is drowning out a call, Boom 2 doesn't solve that. It makes everything louder together. That's a different job.</p>

<h2>What "per-app volume" actually means on macOS</h2>
<p>Here's the honest context that most alternative round-ups skip: macOS has no built-in per-app volume mixer at all. Windows has had one for years — right-click the speaker, open the Volume Mixer, and set Chrome to 40% and Spotify to 80%. Apple never shipped that. The macOS volume key only moves one master level.</p>
<p>So when you look for a "Boom 2 alternative," what you're often really looking for isn't a louder Mac — it's the per-app control Windows users take for granted. That's a genuine gap in the operating system, not something Boom 2 or any single app forgot to build.</p>

<h2>Where SoundDial fits</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is built for that gap specifically. It lives in the menu bar and lists the apps currently playing audio, each with its own slider. You set levels per app instead of nudging one master control and hoping for the best.</p>
<p>What it does:</p>
<ul>
<li><strong>Independent volume per app</strong> — quiet the browser, keep music where you want it, no global compromise.</li>
<li><strong>Per-app mute</strong> — silence one noisy app without touching anything else.</li>
<li><strong>Per-app boost</strong> — push an individual app past its normal ceiling when a video or call is recorded too quietly. This is the piece Boom 2 fans usually miss, except here it's targeted at one app rather than the whole system.</li>
<li><strong>Volume profiles</strong> — save layouts like "focus," "meeting," or "gaming" and switch in one click.</li>
<li><strong>Auto-ducking</strong> — automatically lower other apps when you start talking, useful for calls and recording.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other outputs from the same menu.</li>
</ul>

<h2>How to set it up</h2>
<p>The workflow is short:</p>
<ul>
<li>Install <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> from the Mac App Store — no DMG, no driver, no reboot.</li>
<li>Click the menu-bar icon to see every app currently producing sound.</li>
<li>Drag each app's slider to the level you want; mute or boost individually as needed.</li>
<li>Save the arrangement as a profile if you want to reuse it later.</li>
</ul>
<p>Because it ships through the App Store, it's sandboxed and installs cleanly. That's worth calling out, because some older audio tools relied on kernel extensions or virtual audio drivers — the kind of thing modern macOS increasingly resists. SoundDial doesn't ask you to install a driver or lower any security setting.</p>

<h2>An honest limitation</h2>
<p>Per-app boost is real but not magic. If an app's source audio is genuinely quiet or badly recorded, boosting it raises the noise floor along with the signal, so very quiet material can sound hissy when pushed hard. That's a physics limit of amplification, not a flaw in any particular app — Boom 2's system boost had the same tradeoff. Treat boost as headroom for practical cases, not a rescue for broken audio.</p>

<h2>Boom 2 vs. a focused mixer</h2>
<p>If what you loved about Boom 2 was system-wide loudness plus an EQ, and you don't care about per-app control, Boom 3D is the vendor's intended successor — that's a fair path, and we won't pretend otherwise. But if you tried Boom 2 and realized the thing you actually wanted was to turn one app down or up without moving everything, an EQ-and-boost bundle is the wrong shape of tool.</p>
<blockquote>Boom 2 makes the whole Mac louder. A per-app mixer lets you decide which app is louder. Those solve different problems.</blockquote>
<p>The pricing difference is also worth naming plainly. SoundDial is €14.99 once. There's no subscription, no trial that lapses into a bigger plan, and no in-app path steering you to a more expensive tier. You buy the mixer, you own the mixer.</p>

<p>If per-app volume — not a system-wide EQ — is what you were really after, <a href="https://apps.apple.com/app/id6772792641">try SoundDial on the Mac App Store</a> and set your levels the way macOS should have let you all along.</p>`,
  },
  "finetune-vs-sounddial-mac": {
    slug: "finetune-vs-sounddial-mac",
    title: "FineTune vs SoundDial: Free Open-Source vs Paid Per-App Volume on Mac",
    description: "FineTune is a free, open-source per-app volume app for Mac; SoundDial is a paid, sandboxed App Store app with boost, profiles, and support. Here's an honest comparison to help you choose.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>FineTune is a free, open-source per-app volume mixer for macOS, so if price is your only concern it's a genuine option. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a paid (€14.99, one-time) Mac App Store app that adds per-app volume boost, saved profiles, auto-ducking, and vendor support. The real choice is free-and-DIY versus sandboxed-and-supported.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — FineTune vs SoundDial: Free Open-Source vs Paid Per-App Volume on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>The problem both apps solve</h2>

<p>macOS still has no built-in per-app volume mixer. Windows has had one for years — right-click the speaker icon, open the Volume Mixer, and every app gets its own slider. On a Mac, you get exactly one system volume slider for everything: your music, a video call, YouTube, notification dings, and a game all share it. If your call is too quiet and Spotify is too loud, your only "fix" is muting Spotify entirely.</p>

<p>Both FineTune and SoundDial exist to fill that gap. They give each running app its own volume control so you can, say, keep a meeting at 100% while pulling background music down to 20% — without touching the master slider.</p>

<h2>What FineTune gets right</h2>

<p>FineTune is a newer, free, open-source app in the spirit of SoundSource. Let's be fair about its strengths, because they're real:</p>

<ul>
  <li><strong>It costs nothing.</strong> No license, no trial, no upgrade nag.</li>
  <li><strong>The source is open.</strong> You can read exactly what it does, audit it for privacy, and — if you know Swift — modify or fork it.</li>
  <li><strong>It's community-driven.</strong> Bugs can be fixed by anyone, and the code outlives any single company.</li>
  <li><strong>It covers the core need.</strong> Independent per-app volume, which is the feature 90% of people are actually searching for.</li>
</ul>

<p>If your only requirement is "let me turn one app down without turning everything down," and you're comfortable with software that comes with no formal support desk, FineTune is a legitimate answer. Recommending it here isn't a concession — it's honest.</p>

<h2>The honest trade-offs of the DIY route</h2>

<p>Free and open-source carries real costs that don't show up on a price tag. These aren't knocks on FineTune specifically — they're the nature of the approach:</p>

<ul>
  <li><strong>Installation is manual.</strong> Open-source audio tools are typically distributed as a downloaded build or a Homebrew formula, not through the App Store. You install outside Apple's review, and you're on the hook to keep it updated.</li>
  <li><strong>Per-app audio interception is fragile by nature.</strong> Routing another app's audio is deep-system work. When Apple ships a macOS update that changes the audio stack, these tools can break until someone patches them. With a volunteer project, "someone" may be busy that month.</li>
  <li><strong>Support is best-effort.</strong> If something breaks, your recourse is a GitHub issue and a wait. There's no guaranteed response and no one obligated to fix it.</li>
  <li><strong>Feature scope is whatever the maintainers ship.</strong> Core volume control is likely covered; extras depend entirely on contributor time.</li>
</ul>

<blockquote>The honest framing: FineTune trades money for maintenance responsibility. You save €14.99 and take on the risk that an OS update leaves it broken until the community catches up.</blockquote>

<h2>Where SoundDial is different</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> takes the opposite trade. You pay once, and in return you get an App Store product with a vendor behind it and a wider feature set built on top of per-app volume:</p>

<ul>
  <li><strong>Per-app volume and mute</strong> — the shared baseline both apps deliver.</li>
  <li><strong>Per-app volume BOOST</strong> — push a too-quiet app past 100%. Useful for apps with weak audio output where turning others down still isn't enough.</li>
  <li><strong>Volume profiles</strong> — save whole mixes ("Meeting," "Focus," "Gaming") and switch in one click instead of resetting sliders each time.</li>
  <li><strong>Auto-ducking</strong> — automatically lower background apps when you speak or when a chosen app becomes active, so calls cut through without manual fiddling.</li>
  <li><strong>Quick output switching</strong> — jump between speakers, headphones, and other outputs from the menu bar.</li>
</ul>

<p>Just as important is <em>how</em> it ships. SoundDial is sandboxed and distributed through the Mac App Store — no separate DMG, no kernel drivers, no audio driver install. Updates come through the App Store like any other app, and there's a real developer to email when something's wrong. That's the concrete value of the €14.99: not just more features, but someone accountable for keeping them working across macOS releases.</p>

<h2>An honest caveat that applies to both</h2>

<p>No third-party app can make macOS's audio system into Windows' Volume Mixer, because Apple doesn't expose a clean public API for per-app audio. Every tool in this category — free or paid, open or closed — works around that limitation using system-level audio techniques. That means both FineTune and SoundDial can be affected by major macOS audio changes. The difference is who's responsible for the fix afterward: a volunteer community, or a paid vendor whose product depends on it.</p>

<h2>Which should you pick?</h2>

<ul>
  <li><strong>Choose FineTune if</strong> you want zero cost, value open-source transparency, only need basic per-app volume, and are comfortable installing outside the App Store and self-supporting when things break.</li>
  <li><strong>Choose SoundDial if</strong> you want a one-click App Store install, extras like boost, profiles, and auto-ducking, and the reassurance of updates and support from a vendor with skin in the game.</li>
</ul>

<p>Both are valid. It genuinely comes down to whether you'd rather spend money or spend attention. If you'd rather buy a supported, sandboxed app and never think about it again, <a href="https://apps.apple.com/app/id6772792641">get SoundDial on the Mac App Store</a> for a one-time €14.99 — no subscription, no drivers, no DMG.</p>`,
  },
  "background-music-vs-sounddial-mac": {
    slug: "background-music-vs-sounddial-mac",
    title: "Background Music vs SoundDial: Is the Free Mac Volume Mixer Enough?",
    description: "A fair head-to-head between the free Background Music app and paid SoundDial. Where the free virtual-driver approach works, where it breaks, and when a €14.99 native mixer is worth it.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>Background Music is free and genuinely good at the basics: it gives each app its own volume slider and can auto-pause music when another app plays. If that is all you need, use it. But it relies on a virtual audio driver that can break after macOS updates and lacks per-app boost, profiles, and output switching. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> trades money for a driver-free, sandboxed, supported alternative.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Background Music vs SoundDial: Is the Free Mac Volume Mixer Enough?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>First, the honest truth about macOS</h2>
<p>macOS has no built-in per-app volume mixer. Windows has had one for over a decade in its Volume Mixer, but on the Mac the system slider moves everything at once. There is no Apple-supported API that lets a third-party app cleanly intercept and rebalance individual application streams. That single gap is why tools like Background Music and SoundDial exist at all, and it is the root cause of most of the trade-offs below.</p>

<h2>What Background Music does well</h2>
<p>Background Music is an open-source menu-bar app that has been around for years and has a loyal following for good reason. It gives you:</p>
<ul>
<li><strong>Independent volume per app</strong> — the core feature. Turn Spotify down while keeping a call loud.</li>
<li><strong>Auto-pause</strong> — it can pause your music player when audio starts elsewhere, which is a nice touch for meetings.</li>
<li><strong>A device volume that follows you</strong> and a simple, no-nonsense interface.</li>
<li><strong>Zero cost</strong> — it is free and the code is public.</li>
</ul>
<p>For a lot of people that is enough. If your entire wish list is "make one noisy app quieter without touching the rest," Background Music covers it, and you should not pay for something you do not need. Being fair here matters: this is a legitimately useful tool.</p>

<h2>Where the free approach shows its seams</h2>
<p>The catch is <em>how</em> Background Music achieves per-app volume. Because macOS gives no official path, it installs a virtual audio driver (a modified version of the old Soundflower approach) that routes your system audio through itself. That architecture is clever, but it carries real costs:</p>
<ul>
<li><strong>It breaks after macOS updates.</strong> Virtual audio drivers sit deep in the system, and major macOS releases have historically disabled or destabilised them. Users routinely report silence, distortion, or the need to reinstall after upgrading. When it breaks, you are often on your own.</li>
<li><strong>Installation is heavier.</strong> You are adding a kernel-adjacent audio device to your Mac, not just an app. Uninstalling cleanly can be fiddly.</li>
<li><strong>It becomes your default output device.</strong> Because everything is routed through the virtual device, some pro-audio, conferencing, or game apps can behave oddly, and switching your real output is an extra step.</li>
<li><strong>Development is community-paced.</strong> There is no support desk. Fixes arrive when a volunteer has time, which for an audio tool that can suddenly go silent is a meaningful risk.</li>
</ul>
<p>None of this makes Background Music bad. It makes it a free tool with a free tool's trade-offs.</p>

<h2>What you actually pay for with SoundDial</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a Mac App Store app, which shapes what it is. Because App Store apps are sandboxed and cannot ship the kind of low-level virtual driver Background Music uses, SoundDial is built to run without installing a separate audio device or DMG. That means:</p>
<ul>
<li><strong>No virtual-driver quirks.</strong> There is no extra output device hijacking your audio chain, and nothing to reinstall when the system changes.</li>
<li><strong>It survives macOS updates far more gracefully.</strong> App Store distribution and sandboxing mean it is built against supported paths and gets updated through the store, so an OS upgrade is far less likely to leave you silent.</li>
<li><strong>Per-app volume boost.</strong> This is a real feature difference: SoundDial can push an app <em>above</em> 100% for quiet sources — a podcast recorded too low, a muffled video call. Background Music only attenuates.</li>
<li><strong>Volume profiles.</strong> Save a set of per-app levels ("Meeting," "Music," "Gaming") and switch in one click instead of dragging sliders every time.</li>
<li><strong>Auto-ducking.</strong> Automatically drop other apps' volume when a chosen source plays — a more configurable take on the auto-pause idea.</li>
<li><strong>Quick output switching</strong> baked into the menu bar, plus per-app mute.</li>
<li><strong>Real support.</strong> It is a paid product with someone accountable when something goes wrong.</li>
</ul>

<h2>The honest decision</h2>
<blockquote>If you want free and only need basic per-app volume, and you are comfortable troubleshooting after macOS updates, Background Music is a solid choice. If you want boost, profiles, ducking, output switching, no virtual-driver fragility, and someone to email when it breaks, SoundDial is worth €14.99.</blockquote>
<p>A few concrete tiebreakers. If you regularly deal with too-quiet sources, boost alone justifies the price — Background Music simply cannot make audio louder than the source. If you dread the annual "will my audio survive the update" gamble, the sandboxed store app removes that anxiety. If you like set-and-forget scenes, profiles save real friction. And it is a one-time €14.99, not a subscription, so the comparison is a single purchase versus your time spent maintaining a free driver.</p>
<p>Conversely, if you are a tinkerer who enjoys open source, wants to read the code, and mostly just turns one app down — save your money. Both tools solve the same core problem; they differ in robustness, feature depth, and who catches you when macOS changes underneath them.</p>

<p>Want per-app volume without the virtual-driver gamble? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> — a one-time €14.99, sandboxed, no drivers, with boost, profiles, and auto-ducking built in.</p>`,
  },
  "is-soundsource-worth-it-mac": {
    slug: "is-soundsource-worth-it-mac",
    title: "Is SoundSource Worth $39? A Cheaper One-Time Mac Alternative",
    description: "SoundSource is a powerful Mac audio tool at ~$39, but it's overkill if you only need per-app volume and boost. Here's an honest comparison and a €14.99 one-time alternative.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>SoundSource is worth it if you need its full toolkit: per-app volume, a 10-band EQ per app, audio routing between devices, and system-wide effects. But at around $39 it's overkill if you mainly want per-app volume, per-app mute, and a volume boost. For that narrower job, <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> costs €14.99 once.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Is SoundSource Worth $39? A Cheaper One-Time Mac Alternative" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>What SoundSource actually does</h2>
<p>Rogue Amoeba's SoundSource is a genuinely excellent piece of software, and it's important to be fair about that. It's not just a volume mixer. It gives you:</p>
<ul>
<li><strong>Per-app volume control</strong> from the menu bar, the feature most people come for.</li>
<li><strong>A full 10-band equalizer</strong> you can apply per app or system-wide, plus other audio effects (via Audio Unit plugins).</li>
<li><strong>Output/input routing</strong>, including sending a single app to a different output device than the rest of the system.</li>
<li><strong>Quick device switching</strong> and headphone-specific EQ presets.</li>
</ul>
<p>If you're a podcaster, streamer, or audio nerd who wants to tune the EQ on your headphones, redirect one app's sound to a separate speaker, or stack Audio Unit effects, SoundSource earns its price. Nothing here is a knock on it.</p>

<h2>The price question</h2>
<p>SoundSource is a paid, one-time license around $39 (pricing varies by version and promotions). It's not a recurring subscription in the Netflix sense, but it follows the classic paid-app pattern: you buy a major version, and future major upgrades are typically discounted paid upgrades rather than free forever. Over several years, that's more than a single purchase. For a lot of Mac users, the honest question is: am I paying $39 for a routing-and-EQ suite when all I really touch is the per-app volume sliders?</p>

<blockquote>If you've opened SoundSource and only ever used the volume sliders and the mute buttons, you're paying for a suite to use one drawer of it.</blockquote>

<h2>Why the problem exists at all</h2>
<p>Here's the honest root cause: macOS has no built-in per-app volume mixer. Windows has had one for years, but on the Mac, the system volume is all-or-nothing. There's no Apple-provided way to keep Spotify quiet while a video call stays loud, or to mute one app without touching everything else. That gap is exactly why tools like SoundSource and <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> exist. It's a real OS limitation, not something either app invented a problem to solve.</p>

<h2>Where a lighter, cheaper option fits</h2>
<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a menu-bar per-app volume mixer built for the common case rather than the pro-audio case. It covers:</p>
<ul>
<li><strong>Independent volume per app</strong> — drop your music while a meeting stays at full level.</li>
<li><strong>Per-app mute</strong> — silence one app without muting the Mac.</li>
<li><strong>Per-app volume boost</strong> — push a quiet app above its normal 100% when the source is just too soft.</li>
<li><strong>Volume profiles</strong> — save a set of per-app levels (e.g. a "focus" or "call" layout) and switch in one click.</li>
<li><strong>Auto-ducking</strong> — automatically lower other apps when you start talking or when a chosen app plays.</li>
<li><strong>Quick output switching</strong> — jump between speakers, headphones, and other devices from the menu bar.</li>
</ul>
<p>It's <strong>€14.99 one-time</strong>, sold through the Mac App Store, so it's sandboxed and there's no separate DMG, no kernel extension, and no audio driver to install. You download it like any App Store app and it updates through the store.</p>

<h2>An honest comparison</h2>
<p>Be clear-eyed about the trade-off. SoundSource does more than SoundDial, and if any of the following matter to you, SoundSource is the better buy:</p>
<ul>
<li>You want a real per-app or system <strong>equalizer</strong> and Audio Unit effects.</li>
<li>You need to <strong>route a single app to a different output device</strong> than everything else.</li>
<li>You rely on <strong>headphone-specific EQ presets</strong> and fine-grained audio processing.</li>
</ul>
<p>SoundDial doesn't do EQ or per-app device routing. It's deliberately narrower. What it gives you in return is a lower price, a lighter footprint, and a focused menu-bar interface for the thing most people actually wanted: keeping each app at the level you choose, with boost and profiles on top.</p>

<h2>So, is SoundSource worth it?</h2>
<p>Yes, if you'll use the EQ and routing. It's mature, well-supported software from a respected developer, and the price reflects real capability. But "worth it" depends on what you'll touch. If you open the app and only ever adjust volume sliders, mute an app, or wish one quiet app were louder, you're paying premium-suite money for basic-mixer needs. In that case a one-time €14.99 tool is the more sensible fit, and you can always move up to SoundSource later if your needs grow into EQ and routing.</p>

<p>If per-app volume, boost, mute, profiles, and auto-ducking are all you're after, <a href="https://apps.apple.com/app/id6772792641">get SoundDial on the Mac App Store</a> — €14.99 once, no subscription, no drivers.</p>`,
  },
  "chrome-too-loud-mac": {
    slug: "chrome-too-loud-mac",
    title: "Chrome Too Loud on Mac? Turn Down One Browser Without Muting Everything",
    description: "Chrome blasting louder than your other apps on Mac? Learn the built-in fixes (per-tab mute, site sound settings) and how to set a true per-app volume for Chrome so it stays quieter than everything else.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>macOS has no built-in per-app volume, so you can't natively turn Chrome down while leaving other apps at full volume. Your fastest free fixes are muting noisy tabs, lowering the volume inside each video player, or blocking sound per-site in Chrome's settings. For a real, persistent Chrome-only volume level, you need a per-app mixer.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Chrome Too Loud on Mac? Turn Down One Browser Without Muting Everything" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why Chrome sounds louder than everything else</h2>
<p>Chrome isn't necessarily "louder" by design — it's that Chrome routes audio from many independent sources: YouTube, autoplaying ads, video calls, background music tabs, and web apps that each ship their own loudness. Some sites are mastered hot, ads are notoriously loud, and Chrome plays all of them at your system's full output level. Meanwhile your music app or a call might be quieter, so Chrome dominates the mix.</p>
<p>On Windows, you'd just open the Volume Mixer and drag the Chrome slider down. macOS simply doesn't include that feature. The system volume key controls everything at once, so turning Chrome down also turns your music, notifications, and calls down. That's the core limitation — and it's an OS gap, not something you're doing wrong.</p>

<h2>Built-in fixes that cost nothing</h2>
<p>Before installing anything, try these. They won't give you a single Chrome volume dial, but they solve most "one loud tab" problems.</p>
<ul>
<li><strong>Mute a noisy tab.</strong> Right-click the tab and choose "Mute site," or click the small speaker icon that appears on a tab playing audio. This silences that tab completely without touching the rest of Chrome.</li>
<li><strong>Lower the volume inside the player.</strong> The most reliable trick: drag the volume slider down inside YouTube, Netflix, or whatever's playing. Web players remember their own level per site, so a quieter YouTube stays quiet next time.</li>
<li><strong>Block sound per site.</strong> Go to <em>chrome://settings/content/sound</em>. You can flip sites between "allowed" and "muted," and add specific domains to a mute list. Great for permanently silencing sites that autoplay.</li>
<li><strong>Kill autoplay ads.</strong> Ad audio is often the real culprit. A content blocker or muting the tab until you're ready to watch removes most surprise loudness.</li>
</ul>
<blockquote>These are genuinely useful and free. But notice what they can't do: they mute or manage individual tabs. None of them let you say "keep all of Chrome at 40% while my music stays at 100%."</blockquote>

<h2>The honest limitation: no per-app volume in macOS</h2>
<p>If your actual goal is "Chrome should always be quieter than my other apps," the built-in tools fall short. Per-tab muting is all-or-nothing. Player sliders reset when a site doesn't remember them and have to be redone constantly. And the system volume moves everything together.</p>
<p>This is a real macOS limitation, not a bug you can configure away. Apple has never shipped a Windows-style volume mixer. The only way to get a persistent, independent volume level for Chrome specifically is a third-party app that sits between your apps and your output device and applies per-app gain.</p>

<h2>Set a real per-app volume for Chrome</h2>
<p>A menu-bar mixer like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> gives macOS the per-app volume control it's missing. It lists every app currently playing audio and gives each one its own slider — so you can pull Chrome down to a comfortable level and leave Spotify, your calls, and system sounds exactly where they are.</p>
<p>Here's how you'd tame a loud Chrome with it:</p>
<ul>
<li>Open the menu-bar mixer and find Chrome in the list of active apps.</li>
<li>Drag Chrome's slider down to, say, 40 to 50 percent. Other apps stay untouched.</li>
<li>If a specific app is too <em>quiet</em> instead — a call app that whispers — use <a href="https://apps.apple.com/app/id6772792641">per-app volume boost</a> to push it above 100 percent, while keeping Chrome low.</li>
<li>Mute Chrome instantly with a per-app mute when you need silence without closing tabs.</li>
</ul>
<p>Because the level is tied to the app, it sticks. Chrome stays at your chosen volume across tabs, sites, and restarts — no re-dragging player sliders every time you open a new video.</p>

<h2>Going further: profiles, ducking, and output switching</h2>
<p>Once you have per-app control, a few extras make it worth keeping around. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> lets you save volume <strong>profiles</strong> — for example a "focus" profile where Chrome is quiet and music is loud, and a "watching" profile where Chrome dominates — and switch between them in one click. Auto-ducking can dip other apps automatically when a chosen source starts (handy so a call is never buried under a loud browser tab). And quick output switching lets you jump between speakers, headphones, and other devices without diving into System Settings.</p>
<p>It's a €14.99 one-time purchase on the Mac App Store — no subscription, no drivers to install, no DMG or kernel extension. Because it's sandboxed and distributed through the App Store, it doesn't require the sketchy audio-driver installs older mixer tools relied on.</p>

<h2>Which fix should you use?</h2>
<p>If you just have one obnoxious tab now and then, use Chrome's built-in mute and the site sound settings — they're free and they work. If you constantly find yourself wishing Chrome could simply be turned down while everything else stays put, that's the exact gap macOS leaves open, and a per-app mixer is the clean fix.</p>

<p>Want Chrome permanently quieter without muting your music or calls? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and give every app its own volume slider.</p>`,
  },
  "whatsapp-telegram-notifications-too-loud-mac": {
    slug: "whatsapp-telegram-notifications-too-loud-mac",
    title: "WhatsApp & Telegram Notification Sounds Too Loud on Mac? Turn Them Down",
    description: "Fix WhatsApp and Telegram desktop notification sounds that are too loud on your Mac. Start with each app's built-in settings, then lower or mute the whole app when macOS gives you no per-app control.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>Start inside each app: WhatsApp and Telegram both let you mute or change notification sounds in their own settings, which is the cleanest fix. But macOS has no per-app notification volume slider, so if the app's own sound is still too loud, your only real lever is to lower or mute that entire app's audio with a per-app volume tool.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — WhatsApp & Telegram Notification Sounds Too Loud on Mac? Turn Them Down" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>First, use the app's own notification settings</h2>

<p>Both WhatsApp and Telegram ship their own sound controls, and this is where you should always start. It's the most precise fix and it doesn't touch anything else on your Mac.</p>

<p><strong>WhatsApp Desktop:</strong> Open WhatsApp, click <em>Settings</em> (the gear icon), then <em>Notifications</em>. You can toggle off <em>Sounds</em> entirely while keeping banners, or disable notification previews. WhatsApp doesn't offer a volume slider, so it's essentially on or off for the sound itself.</p>

<p><strong>Telegram Desktop:</strong> Open <em>Settings → Notifications and Sounds</em>. Telegram is more flexible here. You can turn off the notification sound globally, mute individual chats, or set custom (quieter) tones. You can also silence a single noisy group by opening it and choosing <em>Mute</em>. For most people, muting the loudest chats fixes the problem without going silent everywhere.</p>

<p>If the sound is fine but too frequent, mute the specific chats or channels that fire most often rather than killing sound app-wide. That keeps important alerts audible.</p>

<h2>Turn off notification sounds in macOS System Settings</h2>

<p>macOS has a second layer of control that overrides the app in some cases. Go to <em>System Settings → Notifications</em>, select WhatsApp or Telegram in the list, and turn off <em>Play sound for notifications</em>. This silences the alert chime for that app while still showing banners.</p>

<p>This is a genuinely good fix if you only want the app to be quiet on notifications and don't care about its other audio (calls, video). Combined with the app's own settings, it covers most "the ping is jarring" complaints.</p>

<h2>The real limitation: macOS has no per-app volume</h2>

<p>Here's the honest part. The steps above are on/off switches. What they can't do is turn WhatsApp or Telegram <em>down</em> to, say, 40% while keeping everything else at full volume. Windows has had a per-app volume mixer for years. macOS simply doesn't include one, and there's no hidden setting or Terminal command that adds it.</p>

<p>This matters when the problem isn't the notification chime specifically, but the whole app being too loud:</p>

<ul>
<li>WhatsApp or Telegram <strong>voice and video calls</strong> that blast at full volume relative to your music or a meeting</li>
<li>A notification sound you want to keep but at a lower level, not off entirely</li>
<li>Ringtones that spike far above whatever else you're listening to</li>
<li>Wanting the app audible but quietly in the background while you focus on something else</li>
</ul>

<p>None of that is solvable with the built-in tools, because they only offer mute, not a level. That gap is a real macOS limitation, not something you're missing.</p>

<h2>Set a per-app volume with SoundDial</h2>

<p>To actually turn a single app down instead of off, you need a per-app volume mixer. <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a menu-bar app that gives macOS the per-app volume control it never shipped with. It lists every app currently playing audio and gives each one its own slider.</p>

<p>For this specific problem:</p>

<ul>
<li>Open <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> from the menu bar and find WhatsApp or Telegram in the list.</li>
<li>Drag its slider down to a comfortable level, for example 30–40%, while leaving your music, browser, or video call untouched.</li>
<li>Use the per-app <strong>mute</strong> button to silence just that app instantly during a call or a meeting, then unmute later without digging through settings.</li>
<li>If you ever need the opposite, a quiet app that's too soft, the per-app <strong>boost</strong> can push it above 100%.</li>
</ul>

<p>Because it sets a level per app, SoundDial keeps notification chimes and call audio audible but proportionate, instead of the all-or-nothing choice the built-in options force on you. You can also save <strong>volume profiles</strong>, so a "focus" setup that keeps chat apps low is one click away.</p>

<blockquote>One honest caveat: lowering an app's overall volume in SoundDial also lowers its notification chimes, since to macOS they're the same app's audio. If you want notifications completely off but calls at full volume, use the app's own mute plus System Settings for the chime, and reserve SoundDial for setting the general level.</blockquote>

<p>SoundDial is a one-time €14.99 purchase on the Mac App Store, sandboxed, with no subscription, no kernel drivers, and no DMG to sideload. It's the practical answer when the fix you actually want, turning one app down rather than off, isn't something macOS itself can do.</p>

<h2>Which fix should you use?</h2>

<p>Work top to bottom. Try the app's own notification settings first, then macOS System Settings to kill the chime. If what you really want is to lower WhatsApp or Telegram to a specific volume, or mute just that app on the fly during calls, that's where a per-app mixer earns its place.</p>

<p>Tired of choosing between full blast and total silence for your chat apps? <a href="https://apps.apple.com/app/id6772792641">Get SoundDial on the Mac App Store</a> and give every app its own volume dial.</p>`,
  },
  "game-too-loud-vs-voice-chat-mac": {
    slug: "game-too-loud-vs-voice-chat-mac",
    title: "Game Audio Louder Than Discord on Mac? How to Balance Game vs Voice Volume",
    description: "Your game is drowning out Discord voice chat on Mac and there's no built-in volume mixer. Here's why macOS lacks Windows-style per-app volume, and how to turn the game down while keeping voice up.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>macOS has no built-in per-app volume mixer, so you can't natively cap your game while keeping Discord loud. The fix is a menu-bar app that sets independent volume per application. Turn the game down to 40-50%, leave voice chat at 100%, and both stay balanced without touching in-game sliders.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Game Audio Louder Than Discord on Mac? How to Balance Game vs Voice Volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why this happens on Mac (and not on Windows)</h2>

<p>If you've gamed on Windows, you know the Volume Mixer: right-click the speaker icon, and every running app gets its own slider. You drop the game, raise Discord, done. macOS simply never shipped that feature. There is one master output volume and a handful of app-level toggles buried in system settings, but no per-application level control for arbitrary apps.</p>

<p>So when a game's mix is mastered hot, its explosions, music, and gunfire come through at the same output level as your friends' voices. Some games expose a master volume slider, but plenty don't go low enough, and many launchers, browsers, and standalone titles offer no useful control at all. Discord itself only lets you adjust incoming users' volume, not the game competing with them.</p>

<p>To be honest, this is an OS-level gap, not a bug you can toggle away. Apple's audio stack routes everything to a single output stream, and there's no first-party UI to split it per app. That's why you need a third-party tool that sits between your apps and the output device.</p>

<h2>The manual workarounds (and why they fall short)</h2>

<p>Before reaching for software, it's worth knowing the free options and their limits:</p>

<ul>
<li><strong>Lower the game's in-app volume.</strong> Works if the game has a master slider with fine enough steps. Many stop at 10% increments or bundle music and effects together, so you can't tame just the loud parts.</li>
<li><strong>Raise your friends in Discord.</strong> Right-click each user and boost their volume. This helps a little but tops out, and it doesn't touch the game that's actually the problem.</li>
<li><strong>Use headphones with a hardware volume knob.</strong> Only changes the overall level, not the balance between game and voice.</li>
<li><strong>Route audio through a virtual device.</strong> Tools like Loopback or BlackHole can split streams, but they're aimed at pros, take real setup, and are overkill for "make the game quieter."</li>
</ul>

<p>None of these give you the one thing Windows users take for granted: a quick slider per app. That's the gap <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is built to fill.</p>

<h2>The direct fix: independent volume per app</h2>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a menu-bar per-app volume mixer for macOS. It shows every app currently playing sound and gives each one its own slider, exactly like the Windows Volume Mixer. For the game-versus-voice problem, the workflow is short:</p>

<ul>
<li>Click the SoundDial icon in your menu bar while the game and Discord are both running.</li>
<li>Find the game in the list and pull its slider down to roughly 40-50%.</li>
<li>Leave Discord (or Slack, Zoom, or your voice app) at 100%.</li>
<li>Adjust on the fly during play — nudge the game down further in a loud firefight, back up during quiet exploration.</li>
</ul>

<p>Because the levels are per app, you set them once and they hold. The game stays capped no matter how hot its own mix runs, and your friends stay clearly audible over it.</p>

<h2>Boost, mute, and profiles for the rest of your setup</h2>

<p>The same tool covers the adjacent annoyances that come with voice gaming:</p>

<ul>
<li><strong>Per-app boost.</strong> If a teammate's mic is quiet even at Discord's max, you can push the voice app <em>above</em> 100% so it cuts through the game rather than getting buried.</li>
<li><strong>Per-app mute.</strong> Silence a background browser tab or a music app instantly without alt-tabbing or killing playback.</li>
<li><strong>Volume profiles.</strong> Save a "gaming" profile with the game at 45% and Discord boosted, then switch back to a "normal" profile for everyday use in one click — no re-dragging sliders each session.</li>
<li><strong>Auto-ducking.</strong> Have the game automatically dip when someone talks, so callouts always land on top of the action.</li>
<li><strong>Quick output switching.</strong> Jump between headphones and speakers from the same menu without diving into System Settings.</li>
</ul>

<blockquote><p>The mental model is simple: one slider per app, the way Windows has done it for years. macOS just never provided it, so a small utility restores parity.</p></blockquote>

<h2>What to expect honestly</h2>

<p>A per-app mixer solves the balance problem cleanly, but set expectations correctly. It controls software output levels — it can't fix a game whose own audio is badly mastered, and it can't raise a signal that was never captured (a genuinely broken mic still needs a hardware fix). Boost adds real gain, so pushing a quiet source far past 100% can introduce distortion, exactly like turning any amp up too high. Used sensibly, though, a modest game cap plus a small voice boost is all most setups need.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is sandboxed and installs straight from the Mac App Store — no drivers, no kernel extensions, no DMG to trust. It's a one-time €14.99 with no subscription, and it supports macOS volume control across 28 languages.</p>

<p>Stop fighting your in-game sliders. Grab <a href="https://apps.apple.com/app/id6772792641">SoundDial on the Mac App Store</a>, turn the game down, keep your squad loud, and finally get the Windows-style volume mixer macOS forgot to ship.</p>`,
  },
  "external-monitor-speaker-volume-too-loud-mac": {
    slug: "external-monitor-speaker-volume-too-loud-mac",
    title: "External Monitor Speakers Too Loud or Stuck on Mac? Fix HDMI/DisplayPort Volume",
    description: "Why your Mac's volume keys don't control HDMI or DisplayPort monitor speakers, and how to fix audio that's too loud, stuck, or unadjustable using the monitor OSD, Audio MIDI Setup, and better output routing.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>If your Mac's volume keys are greyed out or do nothing for a monitor connected over HDMI or DisplayPort, that's usually not a bug. Digital display audio is often sent at a fixed level, and the monitor's own hardware controls the volume. The fix is to adjust the display, reroute output, or use a different audio device.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — External Monitor Speakers Too Loud or Stuck on Mac? Fix HDMI/DisplayPort Volume" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why the Mac volume keys stop working over HDMI/DisplayPort</h2>

<p>HDMI and DisplayPort carry audio as a digital stream. Many monitors receive that stream at a fixed output level and expect you to control loudness on the display itself, not on the source device. When macOS detects this, it disables the on-screen volume slider and greys out the F11/F12 keys, showing a "no entry" symbol when you press them.</p>

<p>This is a hardware and protocol limitation, not something software on the Mac can override. The audio never passes through a stage where macOS is allowed to attenuate it. No app, driver, or setting can inject volume control into a stream the display insists on receiving at full level. Being honest about that saves you hours of chasing the wrong fix.</p>

<h2>Fix 1: Use the monitor's own controls (OSD)</h2>

<p>This is the real solution for most people. Nearly every monitor with built-in speakers has an on-screen display menu driven by physical buttons or a joystick on the back or underside of the panel.</p>

<ul>
<li>Press the OSD/menu button to open the monitor's settings.</li>
<li>Look for an Audio or Volume section.</li>
<li>Lower the level there — this is the control that actually works over HDMI/DP.</li>
</ul>

<p>Some monitors also expose a companion app or DDC/CI support so you can drive the OSD from macOS. Third-party utilities that speak DDC can map your Mac's volume keys to the monitor's hardware volume, which is worth trying if you hate reaching for the panel buttons.</p>

<h2>Fix 2: Check Audio MIDI Setup</h2>

<p>Open <strong>Audio MIDI Setup</strong> (in /Applications/Utilities). Select your monitor in the device list. If a volume slider appears on the right, drag it down — sometimes the display exposes a software-controllable level even when the menu-bar keys are disabled. If the slider is missing or greyed out, the display is confirming it only accepts fixed-level audio, and you should fall back to the OSD.</p>

<p>While you're here, confirm the correct output device is selected. It's common to have audio silently routed to a monitor you forgot was connected, which explains sudden loud or absent sound.</p>

<h2>Fix 3: Route audio somewhere you can actually control</h2>

<p>If your monitor's speakers are mediocre anyway (most are) and its volume control is clumsy, the cleanest fix is to stop using them:</p>

<ul>
<li>Plug speakers or headphones into the monitor's headphone-out jack if it has one — that analog output is usually volume-controllable from the display.</li>
<li>Use a USB DAC, USB speakers, or a Bluetooth output. USB and analog outputs give macOS full software volume control, so your keys work normally again.</li>
<li>Select your Mac's built-in speakers for quick sounds and keep the monitor for video only.</li>
</ul>

<p>Once you're on an output that macOS can actually attenuate, the system volume keys behave, and you regain fine control instead of jumping between the monitor's coarse OSD steps.</p>

<h2>Once output works, control volume per app</h2>

<p>Getting a controllable output back solves the "too loud / stuck" problem. But macOS still gives you only one master volume for everything. There's no built-in per-app mixer on the Mac — Windows has had one for years, but Apple never shipped an equivalent. So a loud video, a game, and a quiet call all share the same slider.</p>

<p>That's the gap <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> fills. It's a menu-bar mixer that gives each app its own independent volume, so you can turn a browser tab down without touching your music, mute one app instantly, or boost a quiet app above its normal ceiling. You can save volume profiles for different setups and switch outputs quickly from the menu bar.</p>

<p>To be clear about scope: <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> controls software volume for audio flowing through macOS. It cannot override a monitor that's ignoring system volume over HDMI — that's the display's fixed-level behavior, and only the OSD or a different output fixes it. Once you're on a controllable output, per-app control is where the app shines.</p>

<h2>Quick checklist</h2>

<ul>
<li>Keys greyed out over HDMI/DP? Use the monitor's OSD volume — that's expected behavior.</li>
<li>Check Audio MIDI Setup for a hidden software slider.</li>
<li>Confirm the right output device is selected.</li>
<li>For real control, route audio to headphone-out, USB, or Bluetooth.</li>
<li>Then use a per-app mixer to balance individual apps.</li>
</ul>

<p>Once your output is under control, give <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> a look. It's a €14.99 one-time purchase from the Mac App Store — no subscription, no drivers, no DMG — and it finally brings a real per-app volume mixer to macOS.</p>`,
  },
  "usb-dac-volume-control-not-working-mac": {
    slug: "usb-dac-volume-control-not-working-mac",
    title: "USB DAC Volume Won't Adjust on Mac? Get Software Volume Control Back",
    description: "Why macOS greys out the volume slider for many USB DACs, what it means, and how to get working software volume control back on your Mac without hurting audio quality.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>If your USB DAC's volume slider is greyed out on Mac, it's usually not a bug. macOS disables its software volume when a DAC reports that it has no controllable volume, expecting you to use the DAC's own hardware knob. To get software volume back, use an app-level attenuator like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — USB DAC Volume Won't Adjust on Mac? Get Software Volume Control Back" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why macOS greys out the volume for some USB DACs</h2>

<p>When you plug in a USB audio device, macOS asks it what it can do over the USB Audio Class (UAC) protocol. Part of that handshake is a set of "feature unit" controls, including a volume control. If the DAC declares a volume control, macOS wires it to your keyboard volume keys and the menu-bar slider. If the DAC declares that it has no host-adjustable volume, macOS greys the slider out completely.</p>

<p>Many high-quality DACs and amps do exactly the latter, on purpose. The designer's assumption is that you'll feed the DAC a full-scale, bit-perfect digital signal and control loudness with the analog volume knob on the unit itself. That analog attenuation happens after the digital-to-analog conversion, so it avoids throwing away bits and is genuinely the audiophile-preferred path. It's a feature, not a fault.</p>

<blockquote>Rule of thumb: if your DAC has a physical volume knob and the Mac slider is greyed out, the manufacturer wants you to use the knob. The signal is being sent at 100% by design.</blockquote>

<h2>When the greyed-out slider is actually a problem</h2>

<p>The "just use the knob" answer breaks down in real setups:</p>

<ul>
<li><strong>The DAC has no knob.</strong> Plenty of compact USB DACs, dongles, and pro interfaces expose no volume control and no host control either. You're stuck at whatever level the downstream amp or powered speakers are set to.</li>
<li><strong>The knob is out of reach.</strong> A desktop DAC behind your monitor, or a unit feeding a fixed-gain amp, means adjusting volume becomes a physical chore instead of a keypress.</li>
<li><strong>You need per-app balance, not just a master level.</strong> Even a perfect hardware knob is a single global control. It can't make a Zoom call quieter than your music, or duck a game when a notification fires.</li>
</ul>

<p>None of these are fixed by macOS, because from the OS's perspective the device is behaving correctly. This is the honest limitation: it's a device-reported capability, and there is no toggle in System Settings to override it.</p>

<h2>Honest workarounds before you install anything</h2>

<p>Try these first, because they cost nothing:</p>

<ul>
<li><strong>Use the hardware knob or downstream volume.</strong> If your DAC or your powered speakers/amp have a control, that's the cleanest option and preserves full digital resolution.</li>
<li><strong>Check the DAC's own app or firmware.</strong> Some DACs (and gaming-oriented units) ship a control panel or a firmware setting that enables host volume. If a "USB volume" or "software volume" option exists, turning it on makes the macOS slider work again.</li>
<li><strong>Try a different USB mode.</strong> A few devices report different capabilities in "class-compliant" vs. a proprietary driver mode. Installing or removing the vendor driver can change whether macOS sees a volume control.</li>
<li><strong>Look in Audio MIDI Setup.</strong> Open Audio MIDI Setup, select the device, and check whether a master or per-channel volume appears there. Occasionally a slider is available in that panel even when the menu bar one is greyed out.</li>
</ul>

<p>If none of those apply, you need software attenuation on the Mac side.</p>

<h2>Software volume control with per-app attenuation</h2>

<p>When the hardware won't accept a volume command, the remaining option is to attenuate the audio in software before it reaches the DAC. This is exactly what <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> does. It sits in your menu bar and gives every running app its own independent volume, mute, and even a boost, regardless of whether your DAC exposes a hardware control.</p>

<p>To use it for a greyed-out DAC:</p>

<ul>
<li>Install <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> from the Mac App Store and open it from the menu bar.</li>
<li>Keep your DAC selected as the system output; you can also use SoundDial's quick output switching to move between the DAC, speakers, and headphones without diving into System Settings.</li>
<li>Set per-app levels: drop the browser, raise the music player, mute whatever you don't want. Each app streams at the volume you choose, and the mixed result goes to the DAC.</li>
<li>Save volume profiles for different scenarios (calls vs. listening), and let auto-ducking lower background apps when something more important starts playing.</li>
</ul>

<h2>The honest tradeoff on audio quality</h2>

<p>Software attenuation reduces the digital level before conversion, so in theory it discards a small amount of resolution compared with analog volume on the DAC itself. In practice, on modern 24-bit and higher paths at normal listening levels, the reduction is well below anything audible, and you keep the DAC's full dynamic range for anything played near full scale. If you're a purist with a good analog knob within reach, use the knob. If you have no usable hardware control, or you need per-app balance macOS simply can't provide, software volume is the right tradeoff, and it beats a slider that does nothing.</p>

<p>SoundDial is a €14.99 one-time purchase, sandboxed, with no drivers, kernel extensions, or DMG installers. If your USB DAC's volume is greyed out and reaching for a knob isn't an option, <a href="https://apps.apple.com/app/id6772792641">get SoundDial on the Mac App Store</a> and put working volume control back in your menu bar.</p>`,
  },
  "cap-max-volume-of-one-app-mac": {
    slug: "cap-max-volume-of-one-app-mac",
    title: "Cap the Maximum Volume of One Loud App on Mac (Protect Your Hearing)",
    description: "macOS has no per-app volume cap, so one loud app can blast you at full system volume. Here's how to set a maximum-volume ceiling for a single app on Mac with a per-app mixer, and why hardware limits matter.",
    date: "2026-07-23",
    readTime: "5 min read",
    content: `<p>macOS has no built-in way to cap the maximum volume of one app, so a loud program plays at whatever your system slider is set to. To set a ceiling for a single app, use a menu-bar per-app mixer like <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>: hold that app at, say, 40 percent while your system volume stays higher for everything else.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Cap the Maximum Volume of One Loud App on Mac (Protect Your Hearing)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Why one app can suddenly blast you on a Mac</h2>

<p>On macOS, the volume slider in the menu bar or Control Center is a single system-wide control. Every app pours into the same output at the same level. There is no per-app volume mixer built into the operating system the way Windows has had one for years with its Volume Mixer panel.</p>

<p>That design has a real consequence for your ears. If you set your system volume high so you can hear a quiet podcast or a soft video call, then switch to a game, a Discord notification, an ad-heavy website, or a video that was mastered far louder, that app plays at the full system level too. The result is the classic jump-scare: a sudden wall of sound at a volume you never intended for that specific app.</p>

<p>For anyone with tinnitus, sound sensitivity, or who simply values their hearing, that unpredictability is the problem. You are not trying to make everything quieter. You are trying to guarantee that one specific loud app can never exceed a level you have decided is safe.</p>

<h2>What macOS can and cannot do here</h2>

<p>Let me be honest about the limits before recommending anything.</p>

<ul>
<li><strong>System volume</strong> lowers everything at once. Turn it down to tame one app and your quiet apps become inaudible.</li>
<li><strong>In-app volume sliders</strong> exist in some apps (media players, some browsers per-tab) but not most. A game, a video call, or a native app often has no independent volume control at all.</li>
<li><strong>The hardware ceiling is real.</strong> No software can push a signal louder than your output device's maximum. Conversely, an app's own loudness mastering, plus your DAC and headphones, set how loud "100 percent" actually feels. Software can lower a per-app level reliably, but it cannot rewrite the physics of your headphones.</li>
</ul>

<p>So the honest goal is not magic loudness limiting at the driver level. It is a practical, reliable per-app attenuation: hold a chosen app at a fixed fraction of the system output so it can never surprise you.</p>

<h2>How to cap a single app's volume with a per-app mixer</h2>

<p>A per-app volume mixer intercepts each app's audio and lets you set its level independently. Here is the workflow with <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>, which lives in the menu bar:</p>

<ul>
<li><strong>Open the mixer.</strong> Click the SoundDial menu-bar icon. You'll see a list of every app currently playing audio, each with its own slider.</li>
<li><strong>Find the loud app.</strong> Locate the app you want to cap, for example a game, a browser, or a video-conferencing tool.</li>
<li><strong>Set its ceiling.</strong> Drag that app's slider down to your safe level, say 35 to 50 percent. That app now plays at that fraction of the system output while every other app stays where it was.</li>
<li><strong>Leave your system volume where you need it.</strong> Keep the system slider high enough for your quiet apps. The capped app stays reined in regardless.</li>
</ul>

<p>Because the level is per-app, you are effectively setting a maximum for that one program. Even when it tries to play its loudest content, its loudest is now your chosen fraction of full.</p>

<h2>Make the cap stick with profiles</h2>

<p>A single manual adjustment helps, but app levels can reset when you quit and relaunch. To make a hearing-safe setup that survives restarts, use <a href="https://apps.apple.com/app/id6772792641">SoundDial</a>'s volume profiles. Save a profile with your preferred per-app levels, for example "quiet game night" with the game at 40 percent, your music app at 70 percent, and your call app at 90 percent. Recall it in one click whenever you sit down. Your ceiling for the loud app comes back exactly as you set it.</p>

<p>Two more features are worth knowing for hearing protection:</p>

<ul>
<li><strong>Per-app mute</strong> lets you instantly silence a single offender without touching anything else, useful for an app that spams loud notifications.</li>
<li><strong>Auto-ducking</strong> automatically dips background audio when something more important starts, so you are not caught between two loud sources at once.</li>
</ul>

<blockquote><p>Software attenuation is genuinely effective for capping an app, but it is one layer of protection, not a medical safeguard. If you have tinnitus or sound sensitivity, pair a per-app ceiling with sensible overall listening levels and breaks. No app replaces careful volume habits.</p></blockquote>

<h2>A note on boost, and why it's separate</h2>

<p>The same per-app mixer that caps a loud app can also boost a too-quiet one above 100 percent, which is handy for an app whose own volume is mastered too low. These are two sides of the same control: you decide each app's level, up or down. For hearing protection you are simply choosing the "down" direction and holding it there.</p>

<h2>The short version</h2>

<p>macOS won't let you cap a single app's volume on its own, and that is a genuine OS gap, not user error. A menu-bar per-app mixer closes it: set the loud app to a fixed fraction, save it in a profile, and it can never blast you again while your other apps stay audible.</p>

<p><a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a one-time €14.99 purchase on the Mac App Store, sandboxed with no drivers or DMG to install. If protecting your ears from one unpredictable app is the goal, it's the simplest way to set that ceiling and keep it.</p>`,
  },
  "set-left-right-balance-per-app-mac": {
    slug: "set-left-right-balance-per-app-mac",
    title: "Different Left/Right Balance Per App on Mac — Is It Possible?",
    description: "Can you set a different left/right stereo balance for each app on macOS? Honestly, no — not natively, and not with most tools. Here's what's actually possible and where the real limits are.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>Honestly, no — macOS does not let you set a different left/right stereo balance per application, and almost no third-party tool exposes true per-app panning either. You can set one global balance for your output device, and you can control per-app <em>volume</em>, but independent per-app <em>pan</em> is not a feature macOS makes available.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Different Left/Right Balance Per App on Mac — Is It Possible?" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>Balance vs. volume — they're not the same thing</h2>

<p>It's worth separating two ideas that often get confused:</p>
<ul>
  <li><strong>Volume</strong> — how loud an app is overall. This is a single level applied to both channels.</li>
  <li><strong>Balance (pan)</strong> — how audio is distributed between the left and right speakers. A balance of "full left" sends everything to the left channel and silences the right.</li>
</ul>

<p>People asking for "different balance per app" usually want one of two things: to push one app's sound to one ear (say, a call in your left ear, music in your right), or to correct for a hearing difference or a bad speaker on one side — but only for certain apps. Those are legitimate goals. The problem is where the control lives.</p>

<h2>Why macOS can't do this natively</h2>

<p>macOS has exactly one balance control, and it lives at the output-device level. You'll find it under <strong>System Settings → Sound → Output</strong>, where a <em>Balance</em> slider shifts the entire mix left or right. Whatever that slider is set to applies to <em>everything</em> routed to that device — every app, every system sound, all at once.</p>

<p>There is no API in the standard macOS audio stack that says "render this app's audio to the left, that app's to the right." Apps hand their audio to the system already mixed down, and the system applies one master balance on the way to the speakers. So the layer where you'd want per-app pan simply isn't exposed by the operating system. This is a genuine OS limitation, not something a menu-bar utility can politely work around.</p>

<blockquote>Unlike per-app <em>volume</em> — which macOS also lacks natively but which apps can implement by tapping the audio stream — per-app <em>balance</em> would require re-panning each app's stream independently, and that hook isn't available to sandboxed apps.</blockquote>

<h2>What SoundDial does — and honestly, what it doesn't</h2>

<p><a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> gives you the per-app control macOS is missing: independent <strong>volume</strong> for each running app, per-app <strong>mute</strong>, a per-app volume <strong>boost</strong> above 100%, savable volume <strong>profiles</strong>, auto-ducking, and quick output switching from the menu bar.</p>

<p>To be straight with you: <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">SoundDial</a> controls per-app <em>loudness and muting</em>, not per-app stereo <em>panning</em>. It won't send Safari to your left ear and Spotify to your right. If someone tells you a menu-bar mixer does true per-app L/R balance on macOS, be skeptical — that's not a control the OS hands out. What SoundDial genuinely solves is the far more common frustration: one app being too loud or too quiet relative to another.</p>

<h2>The real workarounds for per-app balance</h2>

<p>If you truly need audio split by side, here are the honest options, roughly from simplest to most involved:</p>

<ul>
  <li><strong>Global balance (all apps):</strong> Use System Settings → Sound → Output → Balance. This is your only built-in option, and it affects every app. Useful for correcting a room or a hearing asymmetry, useless for isolating one app.</li>
  <li><strong>Separate output devices:</strong> This is the closest thing to real per-app balance. Route App A to one output device and App B to another, then set each device's balance independently. macOS lets you pick an output device inside some apps (and browsers/communication apps often expose their own output picker). If App A points to a device panned left and App B to a device panned right, you effectively get per-app balance — as long as both apps let you choose their output.</li>
  <li><strong>Virtual audio routing tools:</strong> Utilities that create virtual devices and an internal mixer can, in some configurations, route specific apps to specific channels. This is powerful but fiddly, adds a driver-style component, and is overkill for most people. It's the domain of streamers and audio engineers, not a casual "call in one ear" fix.</li>
  <li><strong>Hardware split:</strong> If it's about physical speakers or a hearing difference, a hardware mixer or an audio interface with per-channel control sidesteps the software problem entirely.</li>
</ul>

<h2>When per-app volume is actually what you needed</h2>

<p>A lot of "I want different balance per app" requests are really "one app is drowning out another." If the goal is a video call you can hear over your music, or a game that's too loud next to a Discord chat, balance isn't the tool — independent volume is. That's exactly what a per-app mixer handles cleanly, without virtual drivers or routing gymnastics.</p>

<p>So the honest summary: true per-app left/right balance isn't a macOS feature, and no mixer app fakes it convincingly. Your real routes are the global balance slider or per-app output routing to separately-panned devices. But if the underlying pain is relative loudness, that's a solved problem.</p>

<p>Want independent volume, mute, and boost for every app on your Mac, with savable profiles and no drivers? <a href="https://apps.apple.com/app/id6772792641" target="_blank" rel="noopener">Get SoundDial on the Mac App Store</a> — €14.99, one-time, sandboxed.</p>`,
  },
  "why-are-some-apps-louder-than-others-mac": {
    slug: "why-are-some-apps-louder-than-others-mac",
    title: "Why Are Some Apps So Much Louder Than Others on Mac? (And How to Even Them Out)",
    description: "Apps sound wildly different on Mac because each one is mastered to its own loudness target and macOS has no built-in per-app volume control. Here's why it happens and how to level your apps.",
    date: "2026-07-23",
    readTime: "6 min read",
    content: `<p>Apps sound wildly different on your Mac because each one is authored, mastered, and normalized to its own loudness target, and macOS has no built-in per-app volume control to reconcile them. Spotify, YouTube, Zoom, and system alerts all pass through the same master slider, so you're stuck riding it up and down constantly.</p>

<a href="https://apps.apple.com/app/sounddial/id6772792641" target="_blank" rel="noopener" style="display:block"><img src="/apps/sounddial.png" alt="SoundDial — Why Are Some Apps So Much Louder Than Others on Mac? (And How to Even Them Out)" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>


<h2>It's not your Mac — it's the audio itself</h2>

<p>The single system volume slider on macOS controls the final output level for everything. It does not touch the relative loudness baked into each app's audio stream. That baseline is set long before the sound reaches your speakers, and it varies enormously from source to source.</p>

<p>Three things drive those differences:</p>

<ul>
<li><strong>Mastering levels.</strong> A punchy pop track is mastered far hotter than a quiet acoustic recording or a spoken-word podcast. A movie mixed for a cinema keeps whispers quiet and explosions loud on purpose — that's dynamic range, and it means the average level is low.</li>
<li><strong>Loudness normalization targets.</strong> Streaming platforms adjust playback to a target measured in LUFS (Loudness Units relative to Full Scale). Spotify aims around -14 LUFS, YouTube roughly -14 LUFS, Apple Music around -16 LUFS. A video conferencing app or a game applies its own gain entirely. Two apps "normalized" to different targets will never match each other.</li>
<li><strong>No cross-app leveling.</strong> Each app normalizes only its own content. Nothing coordinates Spotify against Zoom against a browser game. macOS just sums them and sends the mix out.</li>
</ul>

<h2>Why LUFS matters (in plain terms)</h2>

<p>Peak level tells you the single loudest instant in a signal. LUFS tells you how loud something actually <em>feels</em> over time, weighted for how human hearing works. This distinction is why a podcast and a dance track can hit the same peak yet feel worlds apart in loudness — the track spends far more time near its ceiling.</p>

<blockquote>A quieter LUFS target means more headroom and more dynamic range. A louder target means a more consistent, "always full" wall of sound. Neither is wrong — but when apps target different numbers, you feel it as one app screaming and another mumbling.</blockquote>

<p>That's the honest root cause. It is not a bug you can patch. It's the physics of how audio is produced and delivered, multiplied across a dozen apps that were never designed to agree with each other.</p>

<h2>The gap macOS leaves open</h2>

<p>Here's the part that genuinely frustrates people: Windows has shipped a per-app Volume Mixer for years. You can pull one app down and push another up, right from the taskbar. macOS has never included this. Sound preferences only give you the master slider and output device selection.</p>

<p>So on a Mac your options have traditionally been limited:</p>

<ul>
<li>Adjust each app's own internal volume slider — if it even has one. Many apps (Zoom, most games, system chimes) do not expose a usable one.</li>
<li>Ride the master slider manually every time you switch context.</li>
<li>Mute one thing entirely, which is a blunt fix that doesn't actually balance anything.</li>
</ul>

<p>None of these remember your preference. Quit and relaunch the app and you're back to square one.</p>

<h2>The practical fix: a remembered volume per app</h2>

<p>Since you can't force every service to re-master its catalog, the workable solution is to add the missing layer macOS never shipped: independent, remembered volume for each app. That's exactly what <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> does. It lives in your menu bar and gives every running app its own slider, so you can pull the loud one down and nudge the quiet one up until they sit at a level that feels even to you.</p>

<p>To even out your apps in practice:</p>

<ul>
<li>Open <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> from the menu bar and you'll see each active app with its own control.</li>
<li>Turn down whatever is blasting — usually a music or video app mastered hot — to something like 60-70%.</li>
<li>Leave your quiet reference app (often a call app or podcast) at 100%, and use per-app <strong>boost</strong> to push it past 100% if it's still too soft.</li>
<li>Set the levels once. SoundDial remembers each app's volume, so the balance holds the next time you open it.</li>
</ul>

<p>Two features do most of the leveling work here. <strong>Boost</strong> matters because plenty of apps are simply too quiet even at maximum — a per-app slider that only cuts volume can't rescue them, but one that can amplify past 100% can. And <strong>volume profiles</strong> let you save a whole set of levels — say, a "focus music low, calls loud" profile for work versus a different mix for gaming — and switch between them instantly instead of re-adjusting app by app.</p>

<h2>Where this helps most</h2>

<p>The most common relief is the music-versus-meeting jump: streaming music mastered loud, then a call app that sounds faint by comparison. Set the call app higher (or boosted), pull the music down, and the startling volume swing disappears. The same applies to a quiet browser game against a loud video player, or system alerts that jump out over everything.</p>

<p>To be clear about the limits: SoundDial balances what your apps output. It won't re-master a badly produced track, and it can't invent detail in audio that was mixed with very wide dynamic range. What it does is give you the one control macOS left out — steady, per-app levels that stay put.</p>

<p>Tired of riding the master slider every time you switch apps? <a href="https://apps.apple.com/app/id6772792641">SoundDial</a> is a one-time €14.99 on the Mac App Store — sandboxed, no drivers, no DMG — and it finally gives every app its own remembered volume.</p>`,
  },
};
