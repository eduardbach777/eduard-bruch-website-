// NotchPal blog. English-only for now — structured the same way as the
// per-app blogs so more languages can be layered in later without a
// rewrite.

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string; // HTML
}

export const articles: Record<string, Article> = {
  "how-to-make-macbook-notch-useful": {
    slug: "how-to-make-macbook-notch-useful",
    title: "How to Make Your MacBook Notch Actually Useful",
    description:
      "The notch on your MacBook Pro or Air isn't just a camera housing — with the right app it becomes the most useful square centimeter on your Mac. Here's how.",
    date: "2026-04-11",
    readTime: "8 min read",
    content: `
<p>For most people the MacBook notch is a thing they tolerate. It takes up a strip of menu bar real estate, occasionally eats the end of an app menu, and otherwise sits there doing nothing. But that little black cutout is actually a free piece of UI that Apple handed you — you just have to decide what to put in it.</p>

<p>This guide walks through what the notch is, what macOS does with it by default, and how to turn it into the most useful square centimeter on your Mac.</p>

<h2>Wait — what is the notch for?</h2>

<p>The notch showed up on the MacBook Pro in late 2021 and on the Air in 2022. It houses the <strong>1080p FaceTime camera</strong>, the ambient light sensor, and the microphone array. Apple's design argument was that by pushing the camera <em>into</em> the display area, they could give you a taller usable screen without making the laptop taller overall. The menu bar now lives in the extra strip around the notch instead of below it.</p>

<p>That's the pitch, and it mostly holds up — you get about 74 extra pixels of vertical space compared to a hypothetical notch-less design. But the notch itself is just dead space. Nothing lives there. That's what this guide is about.</p>

<h2>What macOS does with the notch by default</h2>

<p>Honestly? Almost nothing. macOS treats the notch as a visual hole in the menu bar and quietly hides menu items that would collide with it. If you have more menu bar icons than fit, the overflow just disappears behind the notch silently — which is the single most common complaint about notch Macs.</p>

<p>There's exactly one system feature that uses the notch on purpose: when you take a screenshot or copy a file, you briefly see a notification badge around the notch area. That's it. The rest of the time it's wasted real estate.</p>

<h2>Three things you can do natively</h2>

<h3>1. Hide the notch entirely (app by app)</h3>
<p>If a specific app's menu bar is getting clipped by the notch, you can tell macOS to letterbox it:</p>
<ol>
  <li>Quit the app.</li>
  <li>Find it in Finder → <strong>Applications</strong>.</li>
  <li>Right-click → <strong>Get Info</strong>.</li>
  <li>Check <strong>Scale to fit below built-in camera</strong>.</li>
  <li>Relaunch.</li>
</ol>
<p>The whole app now runs at 16:10 and the notch sits in a black bar above it. Works fine for one or two problem apps. Not a solution if you want to keep the extra vertical space macOS just gave you.</p>

<h3>2. Manually reorder menu bar icons</h3>
<p>Holding <strong>Command</strong> and dragging menu bar icons lets you reorder them. Put the ones you need first <em>before</em> the notch and push the rest toward the right edge. It's a crude fix but it stops the overflow-behind-the-notch problem for day-to-day icons.</p>

<h3>3. Cull menu bar icons</h3>
<p>The real reason icons disappear behind the notch is that you have too many. Go through them and quit / hide every icon that doesn't earn its place. Most apps that insist on a menu bar icon have a "Hide menu bar icon" checkbox buried in their preferences. A clean menu bar stops colliding with the notch entirely.</p>

<h2>Why notch utilities exist</h2>

<p>Reordering icons and hiding apps solves the <em>collision</em> problem. It doesn't make the notch itself do anything. That's where a dedicated notch utility comes in.</p>

<p>The big idea is simple: if the notch already has your attention every time you look at the top of the screen, make it a surface for the things you glance at constantly. When you hover, tap, or drag near it, it expands into a small panel. Hand back to the edge and it collapses into the notch shape again — no window to manage, no dock space, no lost focus from the thing you were doing.</p>

<p>A good notch utility turns that one square centimeter into three separate tools that share one piece of UI:</p>

<h3>A "nook" of widgets</h3>
<p>Pull the notch down and it opens into a small panel with your now-playing track, a calendar peek, a live camera mirror, quick shortcuts — whatever you need to see often but not all the time. The key feature is that it doesn't take up a spot on your desktop. You use it, then it disappears back into the notch.</p>

<h3>An always-available clipboard tray</h3>
<p>The macOS clipboard holds exactly one thing at a time, which is wrong if you actually copy more than once a day. A good notch utility includes a small tray (Ablage, in German) where you can drag files, images, and text snippets temporarily. They live there for the rest of the session and you can drag them out into any app. Think of it as a physical desk corner where you put things mid-task.</p>

<h3>A drop zone of quick file actions</h3>
<p>Drag a file toward the notch and it expands into a drop zone — AirDrop, zip, compress images, convert to PDF, send to a specific folder, whatever actions you've configured. The whole flow is "grab file, flick upward, release". Compared to right-clicking through three context menus, it's massively faster.</p>

<h3>Live activities</h3>
<p>The one thing the iPhone's Dynamic Island nails that the Mac still mostly misses: tiny, contextual status overlays. A good notch utility should surface the currently playing track, a volume change, a brightness change, a keyboard backlight change, a countdown timer, a Face ID unlock — anything short-lived you'd otherwise need to tab over to the right app for.</p>

<h2>How to pick one</h2>

<p>A few things separate a notch utility that you'll keep using from one that ends up in your "uninstalled last week" pile:</p>

<ul>
  <li><strong>It should not slow down the menu bar.</strong> Every animation has to be spring-based and 120Hz-smooth. If the notch stutters when you open it, you'll stop opening it.</li>
  <li><strong>Auto-hide on click-outside.</strong> You should never have to "close" the notch manually. It's a temporary overlay, not a window.</li>
  <li><strong>Keyboard shortcut.</strong> Reaching for the trackpad every time is friction. A global hotkey to toggle the notch is essential.</li>
  <li><strong>Respects privacy.</strong> A camera mirror widget should run locally. A notes widget should write to a local file. A notch utility has no business touching the network for any of its core features.</li>
  <li><strong>Works on non-notch Macs too.</strong> If you plug into an external monitor or use an older Mac, a good notch utility should gracefully fall back to a small floating handle at the top of the screen — same features, no notch required.</li>
  <li><strong>One-time purchase option.</strong> A subscription for a menu bar helper is a hard sell. Look for a lifetime license with a small optional subscription for cloud-sync features if you need them.</li>
</ul>

<h2>The case for taking the notch seriously</h2>

<p>Here's the thing most people miss: you already look at the top of your screen dozens of times a day. You check the time, the date, the wifi, the battery. Every one of those glances passes over the notch. If that same glance could also tell you what track is playing, what's on your calendar in the next hour, your CPU temperature, the time left on a Pomodoro, <em>and</em> act as a drop target for files — that's an enormous amount of utility from a piece of hardware you already paid for.</p>

<p>The alternative is continuing to let the notch sit there doing nothing, which is the computing equivalent of leaving an entire room of your house unused. The utility is free. The only cost is deciding what to put in it.</p>

<h2>NotchPal</h2>

<p>I'm building <strong>NotchPal</strong> to be exactly the notch utility I wanted and couldn't find: a Nook for widgets, a tray for temporary clipboard items, a drop zone for file actions, and live activities on top of everything. Spring-animated, keyboard-shortcut-first, one-time purchase, macOS 14.6+. It works on Macs without a notch too, using a small floating handle.</p>

<p>It's not out yet — I'm finishing the last round of polish now. If you want to know when it ships, check back on this page or keep an eye on the software list on this site.</p>
`,
  },
};

export function getArticle(slug: string): Article | undefined {
  return articles[slug];
}

export function getAllArticles(): Article[] {
  return Object.values(articles).sort((a, b) => b.date.localeCompare(a.date));
}

export function getAllSlugs(): string[] {
  return Object.keys(articles);
}
