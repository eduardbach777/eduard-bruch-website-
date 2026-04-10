// Standalone English-only SEO articles aggregated on /blog.
// These are general guides not tied to any single product — they live here
// rather than under /pdfcreator/blog, /vault/blog, etc. so the main blog
// hub has editorial content alongside the per-app documentation.

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string; // HTML
}

export const articles: Record<string, Article> = {
  "how-to-scan-documents-on-iphone": {
    slug: "how-to-scan-documents-on-iphone",
    title: "How to Scan Documents on iPhone: The Complete 2026 Guide",
    description:
      "Four ways to scan paper documents into crisp, searchable PDFs using your iPhone — no printer, no scanner, no desk required.",
    date: "2026-04-11",
    readTime: "7 min read",
    content: `
<p>Your iPhone is the best document scanner you already own. In the time it takes to find a physical scanner, plug it in, and wait for drivers to update, you can turn a stack of paper into perfectly-aligned, searchable PDFs — and have them in iCloud, email, or a client folder within seconds.</p>

<p>This guide walks through the four methods that actually work in 2026, when to use each, and the small settings that separate a blurry phone photo from a professional-looking PDF.</p>

<h2>Method 1: The built-in Notes app (free, surprisingly good)</h2>

<p>Apple quietly turned Notes into a competent scanner a few years ago and most people still don't know it's there. It's the fastest way to scan one or two pages when you don't want to install anything.</p>

<ol>
  <li>Open <strong>Notes</strong> and create a new note.</li>
  <li>Tap the <strong>camera icon</strong> above the keyboard and choose <strong>Scan Documents</strong>.</li>
  <li>Point your phone at the page. Notes auto-detects the edges and captures when the page is flat and in focus.</li>
  <li>Drag the corners if the auto-crop missed anything, then tap <strong>Keep Scan</strong>.</li>
  <li>Repeat for each page, then tap <strong>Save</strong>.</li>
</ol>

<p>You can share the result as a PDF from the note. It even runs OCR in the background so the text inside the scan becomes searchable from Spotlight.</p>

<p><strong>When to use it:</strong> single-page documents, receipts, a page from a book. Anything where you won't need to re-scan it later.</p>

<h3>What it's missing</h3>

<ul>
  <li>No batch rename — every scan is just "Scanned Document".</li>
  <li>No compression options, so multi-page PDFs get big fast.</li>
  <li>No watermarking, signing, or page reordering once the scan is saved.</li>
  <li>The OCR layer isn't exported with the PDF — only Spotlight can see it.</li>
</ul>

<h2>Method 2: The Files app scanner (hidden but powerful)</h2>

<p>The same scanner lives inside the Files app and a lot of people miss it. The advantage here is that the PDF lands directly in iCloud Drive or any other location you've linked — no extra share-sheet dance.</p>

<ol>
  <li>Open <strong>Files</strong> and navigate to the folder where you want the scan to live.</li>
  <li>Tap the <strong>three-dot menu</strong> in the top-right corner.</li>
  <li>Choose <strong>Scan Documents</strong>.</li>
  <li>Capture pages exactly like in Notes, then tap <strong>Save</strong>. You'll be prompted to name the file.</li>
</ol>

<p><strong>When to use it:</strong> when you want the scan filed away immediately instead of living inside a note.</p>

<h2>Method 3: A dedicated scanner app</h2>

<p>Both of the built-in options hit their ceiling the moment you need to scan a multi-page contract, merge two scans together, add a signature, compress the file for email, or batch a pile of receipts. That's what dedicated scanner apps are for.</p>

<p>A good scanner app will give you:</p>

<ul>
  <li><strong>Real OCR</strong> that lives inside the PDF, so the text stays searchable and copy-pasteable in any reader.</li>
  <li><strong>Compression presets</strong> (small / medium / original) so a 12-page scan doesn't turn into a 40&nbsp;MB file you can't attach to an email.</li>
  <li><strong>Edit tools</strong> like reorder, rotate, delete pages, insert blank pages, or merge two PDFs.</li>
  <li><strong>Annotations and signatures</strong> so contracts can be signed and sent without ever printing.</li>
  <li><strong>Export paths</strong> to WhatsApp, email, iCloud, Google Drive, Dropbox — all from one sheet.</li>
</ul>

<p>If you scan more than a few documents a month, a dedicated app pays for itself the first time you sign a contract without printing it.</p>

<h2>Method 4: Shortcuts automation (for power users)</h2>

<p>If you scan the same kind of document regularly — expense receipts, invoices, delivery notes — you can cut the whole process to one tap with the Shortcuts app.</p>

<p>A typical receipt-scanning shortcut looks like this:</p>

<ol>
  <li><strong>Scan Document</strong> action.</li>
  <li><strong>Rename</strong> the result with the current date and a prefix (e.g. <code>Receipt_2026-04-11</code>).</li>
  <li><strong>Save File</strong> to a specific iCloud Drive folder.</li>
  <li>Optionally <strong>email</strong> it to your bookkeeper.</li>
</ol>

<p>Add the shortcut to your home screen or the lock screen and every future receipt becomes a two-tap operation.</p>

<h2>Pro tips for scans that don't look like phone photos</h2>

<h3>Light the page from the side, not above</h3>
<p>Overhead light casts your phone's shadow across the page. Angle the light source from the side — a window works perfectly — and the auto-crop has an easier time finding the edges.</p>

<h3>Use a dark background</h3>
<p>The edge detector works by looking for contrast. A white document on a white table is invisible to it. A white document on a wooden table or dark countertop is detected instantly.</p>

<h3>Let the camera focus before you hold still</h3>
<p>Most scanner apps wait for a sharp, stable frame before capturing. Hold the phone a couple of inches higher than feels right, wait for the focus indicator, then lower it slightly. The capture happens automatically.</p>

<h3>Scan in color, save in black & white</h3>
<p>Always capture in color (the sensor is noisier in mono mode), then apply a "document" filter in post. You get sharper text and can always fall back to the color version.</p>

<h2>Which method should you pick?</h2>

<p>For a one-off scan: <strong>Notes or Files</strong>. Fastest possible path, no install.</p>
<p>For anything recurring, multi-page, or that needs to look professional: <strong>a dedicated scanner app</strong>. Real OCR, compression, and editing are worth the few euros a year.</p>
<p>For a workflow you run daily: <strong>Shortcuts</strong> on top of a scanner app. One-tap scanning with automatic naming and filing is a genuinely life-changing amount of saved friction.</p>

<h2>Our iPhone scanner</h2>

<p>I built <a href="/pdfcreator/blog">PDF Creator &amp; Scanner</a> specifically because the built-in tools stopped being enough as soon as I had to sign contracts and file receipts at volume. It has 29 PDF tools in one app: scan with OCR, merge, split, compress, watermark, sign, and convert — all on device, no account required. Free to try.</p>
`,
  },

  "how-to-hide-photos-on-iphone": {
    slug: "how-to-hide-photos-on-iphone",
    title: "How to Hide Photos on iPhone: 5 Privacy Methods That Actually Work",
    description:
      "From the built-in Hidden album to Face ID-locked vaults — here's what each method really protects against, and where the gaps are.",
    date: "2026-04-11",
    readTime: "8 min read",
    content: `
<p>There's a gap between "hidden" and "private" that almost nobody thinks about until it's too late. The Hidden album on your iPhone is not the same as an encrypted vault, and passing your phone to a friend so they can look at a photo still exposes every image you've ever taken.</p>

<p>This guide walks through the five real options for hiding photos on iPhone in 2026, what each one actually protects against, and where each one leaks.</p>

<h2>Method 1: The Hidden album (built-in, basic)</h2>

<p>Since iOS 14 Apple has shipped a dedicated Hidden album inside Photos. It's quick, free, and already on your phone.</p>

<ol>
  <li>Open <strong>Photos</strong> and select the photo or video.</li>
  <li>Tap the <strong>share icon</strong> and scroll down the action list.</li>
  <li>Tap <strong>Hide</strong> and confirm.</li>
</ol>

<p>The photo disappears from the main library and the Hidden album itself can be locked behind Face ID from <strong>Settings → Photos → Use Face ID</strong>.</p>

<h3>What it actually protects against</h3>
<ul>
  <li>Someone scrolling your camera roll while looking at a photo you just shared.</li>
  <li>Awkward previews when you plug into AirPlay or screen-share.</li>
</ul>

<h3>Where it leaks</h3>
<ul>
  <li>The photos are still in your main photo library — they show up in <strong>Memories, Widgets, Search</strong> results, and any app with Photos permission.</li>
  <li>They sync to iCloud and appear on every signed-in device, including your Mac.</li>
  <li>Anyone who unlocks your phone (with Face ID or your passcode) sees them instantly.</li>
</ul>

<p><strong>Verdict:</strong> fine for hiding birthday surprises, not fine for anything sensitive.</p>

<h2>Method 2: Lock screen Photos access limit</h2>

<p>A lot of "accidental exposure" happens because iOS will happily offer up your most recent photo from the share sheet of any app. You can tighten that down in one setting.</p>

<p>Go to <strong>Settings → Apps → Photos</strong> and toggle off <strong>Show in Share Sheet</strong>. Photos will still work everywhere, but they won't volunteer previews in the share sheet of other apps.</p>

<p>While you're there, check which apps have full library access (<strong>Settings → Privacy &amp; Security → Photos</strong>) and downgrade anything you don't fully trust to <strong>Limited Access</strong>.</p>

<h2>Method 3: A dedicated photo vault app</h2>

<p>This is the jump from "hidden" to "private". A photo vault is a separate app with its own Face ID / passcode lock and its own storage. Photos moved into a vault are removed from the main library — they don't show up in Memories, Widgets, Search, or any third-party app.</p>

<p>A good vault will give you:</p>

<ul>
  <li><strong>Face ID + passcode lock</strong> on the app itself, not just the album.</li>
  <li><strong>On-device storage</strong> so photos don't sync to iCloud by default.</li>
  <li><strong>Decoy / fake-passcode modes</strong> that show an empty vault if someone forces you to unlock it.</li>
  <li><strong>Auto-lock</strong> when the app goes to background, so a quick app-switch doesn't re-expose everything.</li>
  <li>A way to <strong>import and then delete</strong> the original from the main library in one step — without that, the photo just lives in both places.</li>
</ul>

<h2>Method 4: Encrypted notes (works in a pinch)</h2>

<p>If you only need to hide one or two photos right now and don't want to install anything, the Notes app has a built-in lock.</p>

<ol>
  <li>Create a new note and paste the photo into it.</li>
  <li>Tap the <strong>three-dot menu</strong> and choose <strong>Lock Note</strong>.</li>
  <li>Set a password different from your device passcode.</li>
  <li><strong>Delete the original</strong> from Photos, then empty the Recently Deleted album.</li>
</ol>

<p>That last step is critical. Until the photo is gone from Recently Deleted, it's still accessible. The lock on the note is real — Apple encrypts the note content with a key derived from your password — but it only protects what's <em>inside</em> the note.</p>

<h3>Where it leaks</h3>
<ul>
  <li>Locked notes are still visible in the notes list with their title and timestamp.</li>
  <li>If you forget the password, there is no recovery. This cuts both ways.</li>
  <li>Works for a handful of photos — gets painful past about ten.</li>
</ul>

<h2>Method 5: Don't store them on your phone at all</h2>

<p>The best way to hide a sensitive photo is to not have it on your device in the first place. For photos you need to keep but don't need to look at often, the right answer is an encrypted external drive at home or an end-to-end encrypted cloud (iCloud Advanced Data Protection, Proton Drive, Cryptomator on top of Dropbox).</p>

<p>Take the photo, transfer it, delete it from the phone, empty Recently Deleted. Your phone stops being the attack surface entirely.</p>

<h2>The thing nobody tells you about "Recently Deleted"</h2>

<p>Every method in this guide has the same failure mode: you "delete" the original and forget that iOS keeps it in <strong>Recently Deleted</strong> for 30 days. That folder is also Face ID-locked, but if you lend your phone to someone who knows your passcode, it's trivially accessible.</p>

<p>After moving a photo into a vault or locked note, always:</p>
<ol>
  <li>Open Photos → <strong>Albums</strong> → <strong>Recently Deleted</strong>.</li>
  <li>Tap <strong>Select</strong>, then <strong>Delete All</strong>.</li>
</ol>

<p>Otherwise you've just moved the photo, not hidden it.</p>

<h2>Which method should you use?</h2>

<p><strong>Birthday surprise / gift ideas:</strong> the built-in Hidden album is fine.</p>
<p><strong>Private photos you don't want a friend to stumble on:</strong> a dedicated vault app. The isolation from the main library is the whole point.</p>
<p><strong>Sensitive documents (IDs, passports, forms):</strong> a vault <em>plus</em> encrypted cloud backup. Losing the phone shouldn't mean losing the photos.</p>
<p><strong>Photos you really never want on the device:</strong> move them to an encrypted drive or end-to-end encrypted cloud and wipe them from the phone entirely.</p>

<h2>Our photo vault</h2>

<p>I built <a href="/vault/blog">Stash — Secret File Vault</a> to be the boring, honest version of a photo vault: Face ID lock, on-device storage, no account, no analytics, no ads. It looks like a calculator on your home screen and stays out of your way until you need it.</p>
`,
  },

  "how-to-check-cpu-usage-on-mac": {
    slug: "how-to-check-cpu-usage-on-mac",
    title: "How to Check CPU Usage on Mac: Every Method, Ranked",
    description:
      "Activity Monitor, Terminal, Stats bars, and menu-bar monitors — here's how to see what's actually eating your CPU on macOS.",
    date: "2026-04-11",
    readTime: "6 min read",
    content: `
<p>Your Mac's fans are spinning, the battery is draining, and everything feels slow. The only useful question at that moment is: <em>what process is doing this?</em> Here are the five methods macOS gives you for answering that, from the one everybody knows to the ones that are actually worth a shortcut on your menu bar.</p>

<h2>Method 1: Activity Monitor (the default)</h2>

<p>Press <strong>⌘ Space</strong>, type "activity", open Activity Monitor, and click the <strong>CPU</strong> tab. Sort by <strong>% CPU</strong> and you'll see exactly which process is running hot.</p>

<p>This is the right first stop for occasional debugging. It shows CPU, memory, energy, disk, and network, and it lets you force-quit anything misbehaving with the X button in the toolbar.</p>

<h3>What Activity Monitor is bad at</h3>

<ul>
  <li>It's a whole application you have to open, and it only tells you what's happening <em>right now</em>. There's no history.</li>
  <li>It doesn't live in your menu bar. The built-in dock icon CPU graph is tiny and stops at 4 cores.</li>
  <li>The "Energy" tab's numbers are smoothed over a long window, so they don't react fast enough to catch short spikes.</li>
  <li>It won't tell you the CPU <em>temperature</em>, which is often what you actually want to know when the fans are loud.</li>
</ul>

<h2>Method 2: The <code>top</code> command (fast, everywhere)</h2>

<p>If you already live in Terminal, <code>top</code> is the fastest way to see what's eating CPU. Open Terminal and run:</p>

<pre><code>top -o cpu</code></pre>

<p>That sorts processes by CPU usage in real time. Press <strong>q</strong> to quit. Add <code>-n 20</code> to cap the list at 20 entries, or <code>-s 2</code> to update every 2 seconds instead of every 1.</p>

<p>For a nicer display, <code>htop</code> is a free install via Homebrew:</p>

<pre><code>brew install htop
htop</code></pre>

<p><code>htop</code> gives you per-core bars, a scrollable process tree, and F-key shortcuts for kill / nice / filter. Still terminal-only, but a huge quality-of-life upgrade over <code>top</code>.</p>

<h2>Method 3: <code>ps</code> for scripting</h2>

<p>If you want to capture CPU usage in a script — for logging, for a cron job, for debugging a background daemon — <code>ps</code> is the right tool because it gives you a single snapshot you can pipe.</p>

<pre><code>ps -Ao pid,comm,%cpu,%mem -r | head -10</code></pre>

<p>That prints the top 10 processes by CPU as plain text. Drop it into a shell script and append it to a log file every minute, and you've built your own lightweight CPU history for free.</p>

<h2>Method 4: The dock icon trick</h2>

<p>Activity Monitor has one feature almost nobody knows: right-click its dock icon, go to <strong>Dock Icon</strong>, and choose <strong>Show CPU History</strong>. You now have a tiny real-time CPU graph sitting in your dock as long as Activity Monitor is running.</p>

<p>This works, but it's ugly and it only lives in the dock, which is usually hidden on a notch Mac. It also doesn't show memory, disk, network, or temperature.</p>

<h2>Method 5: A dedicated menu-bar monitor</h2>

<p>For anything you want to glance at constantly — CPU, memory, network, disk, temperature, battery health — the right place is the menu bar, not a separate window. A menu-bar monitor gives you:</p>

<ul>
  <li><strong>Always-visible CPU</strong> numbers, a bar, or a graph. No cmd-tabbing to a window.</li>
  <li><strong>Per-core or all-core</strong> breakdowns, depending on how detailed you want to go.</li>
  <li><strong>Memory pressure</strong>, which is more useful than raw memory usage for understanding why your Mac feels slow.</li>
  <li><strong>Network up/down</strong> live, so you can spot when something is saturating your connection.</li>
  <li><strong>CPU and GPU temperature</strong>, which Activity Monitor won't show you at all.</li>
  <li><strong>Click-through panels</strong> with process lists, so you can go from "the menu bar looks hot" to "Chrome Helper is at 400%" in one click.</li>
</ul>

<p>The reason this ends up on the menu bar and not on a dashboard is immediacy: you don't notice your Mac is struggling until you're already in the middle of something. If the status is always visible, you catch issues before they turn into a 15-minute debugging session.</p>

<h2>What to do once you've found the culprit</h2>

<h3>A single process at 200% CPU</h3>
<p>Quit it and see if the problem returns. If it does, check for updates to that app — in 2026, chronic high CPU from a single process is almost always a known bug that's been fixed in a later release. If no update exists, file a feedback report to the developer with a screenshot of the CPU usage.</p>

<h3>kernel_task at 100%+</h3>
<p>This is macOS throttling the CPU because it thinks the machine is running too hot. The fix is almost never a process — it's thermal. Unplug the charger for a few minutes, make sure the vents aren't blocked, and check whether you have something heat-producing (external display, bus-powered drive, or a failing battery) connected. If kernel_task is constantly pegged, it's a hardware signal, not a software one.</p>

<h3>WindowServer at 50%+</h3>
<p>WindowServer drives your entire UI and spikes when you have too many windows, too many displays, or a browser rendering heavy animations. Close unused windows, turn off reduce transparency / motion, and check whether a specific browser tab is running an animation loop.</p>

<h3>Spotlight's <code>mds_stores</code> at 100%</h3>
<p>Spotlight is reindexing. Let it finish — it'll calm down within 10–20 minutes. If it's been pegged for more than an hour, you can force a reindex in <strong>Settings → Siri &amp; Spotlight → Spotlight Privacy</strong> by adding and removing your disk.</p>

<h2>Which method should you pick?</h2>

<p>For one-off debugging: <strong>Activity Monitor</strong>. It's already installed and it tells you everything you need.</p>
<p>For scripting and automation: <strong><code>ps</code> or <code>htop</code></strong>. Plain text is your friend.</p>
<p>For constant awareness so issues don't sneak up on you: <strong>a menu-bar monitor</strong>. The entire point of the menu bar is to surface state you need to see passively, and CPU/memory/temperature belong there.</p>

<h2>Our system monitor</h2>

<p>I built <a href="/pulse/blog">Pulse — System Monitor</a> after years of using the alternatives and bouncing off each one for a different reason. It lives in the menu bar, shows everything you'd expect (CPU, memory, network, disk, temperature, battery health, per-process breakdowns) and nothing you wouldn't. No account, no analytics, no subscription. It just shows you what your Mac is doing.</p>
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
