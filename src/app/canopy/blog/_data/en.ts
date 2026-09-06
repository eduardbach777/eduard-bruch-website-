import type { ArticleSet } from "./index";

export const enArticles: ArticleSet = {
  "what-is-taking-up-space-mac": {
    slug: "what-is-taking-up-space-mac",
    title: "What's Taking Up Space on My Mac? How to Find Out",
    description:
      "Your Mac says storage is almost full, but you can't figure out what's eating all the space. Finder doesn't make it easy to see where the gigabytes went.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>You get the dreaded "Your disk is almost full" warning. You open About This Mac and see the storage bar — maybe 20 GB of "System Data," a mysterious chunk of "Other," and no clear way to drill into what's actually using all that space. You know something is hogging gigabytes, but what?</p>

<p>This is one of the most common Mac frustrations. You didn't download anything huge recently, yet somehow your drive is packed.</p>

<h2>Why macOS doesn't make this easy</h2>

<p>The built-in storage breakdown in System Settings groups files into broad categories like "Applications," "Documents," and "System Data." These labels tell you almost nothing actionable. You can't click into them to see individual files. You can't sort by size. You can't figure out that one forgotten 14 GB Xcode archive or a bloated Parallels VM image is the actual culprit.</p>

<p>Finder lets you sort by size in list view, but only within a single folder. If the space hog is buried three levels deep in <code>~/Library</code>, you'll never find it by browsing manually.</p>

<h2>A visual approach: see everything at once</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your drive and draws an interactive treemap — a color-coded rectangle map where every file and folder is sized proportionally to the space it uses. The biggest space hogs are immediately visible as the largest blocks on screen.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing disk usage on macOS with color-coded files and folders" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Spot the biggest offenders instantly</h3>
<p>No digging through folders. The treemap immediately highlights the largest files and directories. A 12 GB old iOS backup stands out as a massive rectangle. A forgotten 8 GB Docker image is right there. You see proportions at a glance — something a file list can never convey as quickly.</p>

<h3>Click to explore, zoom to drill down</h3>
<p>Click any block to see its path and size. Double-click a folder to zoom in and explore its contents. Navigate your entire drive visually, moving in and out of directories without ever opening Finder.</p>

<h3>Delete what you don't need</h3>
<p>Found a 6 GB cache folder or an old VM snapshot? Delete it directly from the treemap. No switching between apps — identify and remove space hogs in one workflow.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-storage-full-what-to-delete": {
    slug: "mac-storage-full-what-to-delete",
    title: "Mac Storage Full — What to Delete",
    description:
      "Your Mac is out of space and you need to free up gigabytes fast, but you have no idea what's safe to remove and what isn't.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>Your Mac just refused to save a file because the disk is full. Maybe Xcode won't build, or Final Cut can't export, or macOS itself is sluggish because it has no room for swap. You need space back — now — but you're staring at a storage bar that says "System Data: 45 GB" with no way to see what's inside.</p>

<p>Deleting random files is risky. You might trash something important. You need to see exactly what's large and what's disposable.</p>

<h2>Common space hogs most people forget about</h2>

<p>Before reaching for any tool, here are the usual suspects:</p>
<ul>
  <li><strong>Old iOS/iPadOS backups</strong> — stored in <code>~/Library/Application Support/MobileSync/Backup/</code>, often 10-30 GB each</li>
  <li><strong>Xcode derived data and archives</strong> — can accumulate 20+ GB in <code>~/Library/Developer/</code></li>
  <li><strong>Docker images and volumes</strong> — the Docker.raw file can balloon to 60+ GB</li>
  <li><strong>Application caches</strong> — Slack, Spotify, Chrome caches in <code>~/Library/Caches/</code></li>
  <li><strong>Old .dmg installers</strong> — sitting in Downloads, often 1-5 GB each</li>
  <li><strong>Time Machine local snapshots</strong> — macOS keeps these when your backup drive is disconnected</li>
</ul>

<p>The problem is knowing which of these applies to your Mac specifically, and finding the items that are actually large on your drive.</p>

<h2>See what to delete with a disk map</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your drive and builds an interactive treemap that shows every file proportional to its size. Instead of guessing, you see your actual disk laid out visually — the largest items dominate the view.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy disk map highlighting large files ready for deletion on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Triage by size</h3>
<p>The treemap makes triage effortless. The biggest rectangles are your biggest wins. Often you'll find one or two items — an old backup, a forgotten VM, a bloated cache — that account for 30+ GB. Delete those and you're breathing again.</p>

<h3>Delete directly from the map</h3>
<p>Once you identify a file you don't need, delete it right from the treemap. No switching to Finder, no hunting for the path. Identify, confirm, delete — all in one place.</p>

<h3>Verify you reclaimed enough</h3>
<p>After deleting, rescan to confirm the freed space. The updated treemap shows your new disk layout instantly, so you know exactly how much room you recovered.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "disk-space-visualizer-mac": {
    slug: "disk-space-visualizer-mac",
    title: "Best Disk Space Visualizer for Mac",
    description:
      "Looking for a way to visually explore what's using your Mac's storage. A treemap makes disk usage intuitive in a way that file lists never can.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>File lists are terrible at showing you where your disk space went. You can sort by size in Finder, but that only works within a single folder. You can check System Settings, but it lumps everything into vague categories. What you really need is a visual map — something that shows your entire drive at a glance, with the biggest items immediately obvious.</p>

<p>That's what a disk space visualizer does. It scans your drive and draws a proportional map of every file and folder, so you can see the shape of your storage usage instantly.</p>

<h2>What makes a good disk space visualizer</h2>

<p>A disk space visualizer should do three things well:</p>
<ul>
  <li><strong>Scan fast</strong> — you shouldn't wait minutes for it to index your drive</li>
  <li><strong>Show proportions clearly</strong> — the visual should make large items obviously large</li>
  <li><strong>Let you act on what you find</strong> — ideally delete or reveal files without switching apps</li>
</ul>

<p>Bonus points if it's native to macOS (not an Electron app eating 500 MB of RAM while telling you about disk waste) and if it handles Apple Silicon natively for fast scans.</p>

<h2>Canopy: a native treemap for macOS</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> is a native Swift app built for macOS. It scans your drive and renders an interactive treemap — a color-coded rectangular map where each block represents a file or folder, sized proportionally to the space it occupies.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy disk space visualizer for macOS showing an interactive treemap of file sizes" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Interactive exploration</h3>
<p>Click any block to see its full path and size. Double-click a folder to zoom into it and explore its contents. Navigate your drive visually — in and out of directories — without opening Finder. Color coding helps you distinguish file types at a glance.</p>

<h3>Delete and export</h3>
<p>Found something you don't need? Delete it directly from the map. Need a record of what's on your drive? Export the treemap as a PNG image or the file list as CSV for documentation or auditing.</p>

<h3>Fast on Apple Silicon</h3>
<p>Built natively in Swift, Canopy takes advantage of Apple Silicon for fast scans. No Electron overhead, no web views — just a responsive macOS app that does one thing well.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "grandperspective-alternative-mac": {
    slug: "grandperspective-alternative-mac",
    title: "GrandPerspective Alternative for Mac",
    description:
      "GrandPerspective is a classic treemap tool, but it's showing its age. If you want a modern, maintained disk visualizer for macOS, here are your options.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>GrandPerspective has been around since the early days of macOS. It's free, open source, and it does the basic job — scan a folder and show a treemap of file sizes. But if you've used it recently, you've probably noticed the rough edges: the interface looks like it was designed for Mac OS X Tiger, navigation feels clunky, and it lacks modern conveniences like deleting files from the map or exporting results.</p>

<p>If you're looking for a GrandPerspective alternative that feels like a modern Mac app, there are a few things worth upgrading to.</p>

<h2>Where GrandPerspective falls short</h2>

<ul>
  <li><strong>Dated interface</strong> — the UI hasn't kept up with modern macOS design conventions</li>
  <li><strong>Limited interaction</strong> — you can view the treemap but acting on findings means switching to Finder</li>
  <li><strong>No file deletion</strong> — you can't remove files directly from the visualization</li>
  <li><strong>No export options</strong> — can't save the treemap as an image or export file lists</li>
  <li><strong>Slow on large drives</strong> — scanning performance hasn't benefited from Apple Silicon optimizations</li>
</ul>

<p>GrandPerspective is still a solid free option if you just need a quick look at a folder. But for regular use or larger drives, a more polished tool saves real time.</p>

<h2>Canopy: a modern treemap for macOS</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> takes the same core concept — scan a drive, show a proportional treemap — and wraps it in a modern, native macOS experience. Built in Swift for Apple Silicon, it scans fast and feels like it belongs on a current Mac.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap disk visualizer — a modern GrandPerspective alternative for macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>What Canopy adds over GrandPerspective</h3>
<ul>
  <li><strong>Delete files from the map</strong> — right-click any block to delete it without opening Finder</li>
  <li><strong>Export as PNG or CSV</strong> — save the treemap image or export file size data</li>
  <li><strong>Click-to-zoom navigation</strong> — double-click any folder to dive in, navigate back out smoothly</li>
  <li><strong>Color-coded file types</strong> — instantly distinguish images, videos, archives, code, and more</li>
  <li><strong>Native Apple Silicon performance</strong> — fast scans even on large drives</li>
</ul>

<h3>Same concept, better execution</h3>
<p>If you liked GrandPerspective's treemap approach to disk visualization, Canopy is the same idea done with modern tools and a modern interface. Everything you could do in GrandPerspective, plus deletion, export, and a UI that matches the rest of your Mac.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "find-large-files-mac": {
    slug: "find-large-files-mac",
    title: "How to Find Large Files on Mac",
    description:
      "You know something huge is eating your disk space, but Finder's search makes it surprisingly hard to track down the biggest files across your entire drive.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>You need to free up space on your Mac, and the fastest way is to find the largest files and decide which ones can go. Simple enough in theory — but macOS doesn't make this as straightforward as it should be.</p>

<p>You'd think Finder search with a size filter would solve this. It kind of does, but it misses files in Library folders, skips hidden directories, and doesn't give you a sense of proportions. You end up with a flat list and no context for where these files live or how they relate to each other.</p>

<h2>Methods that partially work</h2>

<h3>Finder search with size filter</h3>
<p>Open Finder, press Cmd+F, add a "File Size is greater than" filter. This finds large files in user-accessible locations, but it won't surface items in <code>~/Library</code>, application support folders, or system directories — which is often where the biggest space hogs hide.</p>

<h3>Terminal with find or du</h3>
<p>Running <code>find / -size +1G</code> or <code>du -sh * | sort -rh</code> in Terminal gives you raw data, but it's hard to interpret. You get a wall of text with no visual context. For technical users it works; for everyone else, it's impractical.</p>

<h3>Storage Management (System Settings)</h3>
<p>The built-in storage management tool in System Settings shows broad categories and lets you review large files in Documents. But it only covers a subset of your drive and doesn't show you application caches, developer files, or container data.</p>

<h2>The visual approach: see large files instantly</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your drive and shows every file as a proportionally sized block in an interactive treemap. Large files are literally the biggest things on screen — you don't need to search or sort, they're just visually obvious.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap highlighting large files across the entire Mac drive" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Nothing hidden</h3>
<p>Unlike Finder search, the treemap includes Library folders, caches, developer directories, and application containers. If a file takes space, it shows up — proportionally sized so you immediately know how significant it is.</p>

<h3>Context matters</h3>
<p>A large file in a flat list means nothing without context. In a treemap, you see that the 8 GB file is inside a Docker container, or that five 2 GB files are all old Xcode archives in the same folder. Context turns "large file" into "thing I can safely delete."</p>

<h3>Act immediately</h3>
<p>Click a block to see its full path. Delete it from the map if you don't need it. No copying paths to Finder, no Terminal commands — find it and remove it in one place.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-system-data-taking-too-much-space": {
    slug: "mac-system-data-taking-too-much-space",
    title: "Mac System Data Taking Too Much Space? Here's How to Investigate",
    description:
      "System Data on your Mac is using 30, 50, even 80 GB and macOS won't tell you what's in it. Here's how to actually see what's inside that category.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>You open System Settings, click Storage, and there it is: "System Data" — 47 GB. Maybe more. You have no idea what it contains. macOS doesn't let you click into it. There's no breakdown, no file list, no explanation. Just a big purple bar consuming a quarter of your drive with no way to investigate.</p>

<p>This is genuinely one of the most frustrating things about macOS storage management. The system knows what's there, but it won't show you.</p>

<h2>What actually lives in "System Data"</h2>

<p>The System Data category is a catch-all for files that don't fit neatly into Applications, Documents, Photos, or other named categories. It typically includes:</p>
<ul>
  <li><strong>Application caches</strong> — browser caches, Slack data, Spotify offline files</li>
  <li><strong>System caches and logs</strong> — macOS logs, diagnostic reports, update files</li>
  <li><strong>Time Machine local snapshots</strong> — can be 10-30+ GB when your backup drive is disconnected</li>
  <li><strong>Spotlight index</strong> — usually 1-3 GB</li>
  <li><strong>Virtual machine files</strong> — Parallels, UTM, and Docker images</li>
  <li><strong>iOS device backups</strong> — stored in Application Support, categorized as system data</li>
  <li><strong>Developer data</strong> — Xcode derived data, simulators, archives</li>
</ul>

<p>The reason it can balloon to 50+ GB is that many of these grow silently. A Docker.raw file can hit 64 GB without you noticing. Old iOS backups accumulate. Xcode derived data piles up with every build.</p>

<h2>How to see what's actually inside</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> doesn't care about macOS storage categories. It scans the raw filesystem and shows you every file and folder proportionally in a treemap. The files that macOS lumps into "System Data" show up in their actual locations — <code>~/Library/Caches/</code>, <code>~/Library/Application Support/</code>, <code>~/Library/Developer/</code> — with their real sizes.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap revealing what's inside macOS System Data" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Find the actual culprits</h3>
<p>Zoom into <code>~/Library</code> and immediately see which application caches, support files, or containers are the largest. That mystery 47 GB breaks down into specific, identifiable items you can evaluate one by one.</p>

<h3>Safely clean up</h3>
<p>Once you can see the specific files — a 12 GB Slack cache, 8 GB of old Xcode archives, a 15 GB iOS backup from two phones ago — you can make informed decisions about what to delete. Remove items directly from the treemap, then rescan to confirm you freed the expected space.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "clean-mac-storage-without-cleaner-apps": {
    slug: "clean-mac-storage-without-cleaner-apps",
    title: "How to Clean Mac Storage Without Sketchy Cleaner Apps",
    description:
      "Most Mac cleaner apps are bloated, subscription-heavy, and delete things you didn't ask them to. There's a better way to reclaim space without handing control to an automated tool.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>Search "clean Mac storage" and you'll find a dozen apps promising to "reclaim gigabytes instantly" with one click. CleanMyMac, MacCleaner Pro, CCleaner — they all promise automated cleanup. But here's the thing: these tools make decisions for you. They scan, flag files as "junk," and offer to delete them in bulk. Sometimes they're right. Sometimes they delete browser data you needed, caches that apps will just rebuild, or files that break applications.</p>

<p>If you're uncomfortable trusting an automated cleaner with your files, you're not wrong to be cautious.</p>

<h2>The problem with automated cleaners</h2>

<ul>
  <li><strong>Aggressive upselling</strong> — most are subscription-based and constantly push you to upgrade</li>
  <li><strong>Black-box decisions</strong> — they flag files as "junk" without explaining why or what happens if you delete them</li>
  <li><strong>Cache deletion is often pointless</strong> — apps rebuild caches after deletion, so you briefly free space then lose it again</li>
  <li><strong>Overreach</strong> — some request Full Disk Access and run background processes you didn't ask for</li>
  <li><strong>False urgency</strong> — "23 GB of junk found!" notifications designed to keep you paying</li>
</ul>

<p>The alternative isn't to ignore your storage — it's to see what's there and make your own decisions.</p>

<h2>See your disk, decide for yourself</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> is a disk space visualizer, not a cleaner. It doesn't flag files as junk. It doesn't make recommendations. It doesn't run in the background or nag you with notifications. It shows you a color-coded treemap of your entire drive and lets you decide what to do.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy disk visualizer — see your storage and decide what to clean yourself" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>You stay in control</h3>
<p>The treemap shows you what's large. You look at it. You decide if that 8 GB Docker image is something you still use. You decide if those old iOS backups matter. No algorithm making that call for you.</p>

<h3>No subscription, no background processes</h3>
<p>Canopy is a tool you open when you need it. It scans, shows you the map, and lets you delete what you choose. It doesn't install a menu bar agent, doesn't run scheduled scans, doesn't send you "your Mac needs cleaning" notifications.</p>

<h3>Delete from the map</h3>
<p>When you find something you want to remove, delete it directly from the treemap. No switching to Finder, no copying file paths. See it, evaluate it, remove it — all in one place.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-other-storage-what-is-it": {
    slug: "mac-other-storage-what-is-it",
    title: "What Is 'Other' Storage on Mac and How to Reduce It",
    description:
      "The 'Other' category in Mac storage can be massive and macOS gives you zero detail about what's inside. Here's what it actually contains and how to deal with it.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>You check your Mac's storage and there's a category called "Other" (on older macOS versions) or "System Data" (on newer ones) eating 30, 40, sometimes 60+ GB. You can't click into it. macOS won't tell you what it is. It just sits there, consuming space, completely opaque.</p>

<p>This drives people to Google "what is Other storage on Mac" more than almost any other macOS question. The answer is unsatisfying but simple: it's everything macOS doesn't know how to categorize.</p>

<h2>What "Other" actually contains</h2>

<p>The "Other" / "System Data" category is a grab bag:</p>
<ul>
  <li><strong>App caches</strong> — Chrome, Slack, Discord, Spotify can each store 1-5 GB in cache</li>
  <li><strong>System logs and diagnostics</strong> — usually small, but they accumulate</li>
  <li><strong>Fonts, plugins, extensions</strong> — rarely large individually but they add up</li>
  <li><strong>Archives and disk images</strong> — .zip, .dmg, .tar files that don't fit other categories</li>
  <li><strong>VM and container data</strong> — Docker images, Parallels VMs, UTM virtual machines</li>
  <li><strong>Mail attachments and downloads</strong> — cached in Mail's support directory</li>
  <li><strong>Spotlight and search indexes</strong> — typically 1-4 GB</li>
</ul>

<p>The frustration isn't that these files exist — it's that macOS hides them behind a label and gives you no way to inspect them.</p>

<h2>Inspect "Other" with a treemap</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> bypasses macOS storage categories entirely. It reads the filesystem directly and shows every file proportionally in an interactive treemap. The files macOS calls "Other" appear in their real locations with their actual sizes.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing what macOS calls Other storage in actual file locations" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>From mystery to specifics</h3>
<p>"Other: 42 GB" becomes "Slack cache: 4 GB, Docker.raw: 16 GB, old iOS backup: 12 GB, Xcode derived data: 8 GB, misc: 2 GB." Suddenly you know exactly what you're dealing with and can make informed decisions.</p>

<h3>Reduce it strategically</h3>
<p>Once you see the actual files, reducing "Other" is straightforward. Delete the old iOS backup you don't need. Clear the Slack cache (it rebuilds at a fraction of the size). Remove the Docker images for projects you finished months ago. Each deletion is a conscious choice, not a blind cleanup.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "delete-files-directly-from-disk-map-mac": {
    slug: "delete-files-directly-from-disk-map-mac",
    title: "Delete Files Directly from a Disk Map on Mac",
    description:
      "Most disk visualization tools show you what's using space but make you switch to Finder to actually delete anything. That workflow breaks your momentum.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>You open a disk visualizer. It scans your drive. You see the treemap. There it is — a 9 GB folder full of old project files you'll never touch again. Now what? In most disk visualizers, you note the file path, open Finder, navigate to the location, find the file, and delete it there. Then you go back to the visualizer, rescan, and repeat.</p>

<p>This two-app workflow is tedious. Every time you switch to Finder, you lose context. You forget which blocks you already checked. The whole process takes three times longer than it should.</p>

<h2>Why most visualizers don't include deletion</h2>

<p>Deleting files is a destructive action, and many disk visualization tools were built as read-only viewers. GrandPerspective, for example, shows you the treemap but makes you act in Finder. This is safe but inconvenient — especially when you're cleaning up a full disk and need to evaluate and remove dozens of items.</p>

<p>The ideal workflow is: see it, evaluate it, delete it — all in one place, without context switching.</p>

<h2>Canopy: visualize and delete in one workflow</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> lets you delete files and folders directly from the treemap. Find a space hog, confirm it's something you don't need, and remove it without leaving the app.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy disk map with direct file deletion on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>The cleanup workflow</h3>
<ol>
  <li><strong>Scan</strong> — Canopy reads your drive and builds the treemap</li>
  <li><strong>Identify</strong> — spot the largest blocks (they're visually obvious)</li>
  <li><strong>Inspect</strong> — click a block to see its path, size, and type</li>
  <li><strong>Delete</strong> — remove it directly from the map if you don't need it</li>
  <li><strong>Repeat</strong> — the treemap updates, showing you the next biggest items</li>
</ol>

<p>No Finder. No Terminal. No copying paths. One continuous workflow from discovery to deletion.</p>

<h3>Safe by design</h3>
<p>Deletion sends files to the Trash, not permanent removal. If you change your mind, retrieve them from Trash before emptying it. You get the convenience of in-app deletion with the safety net of macOS Trash.</p>

<h3>Export before you clean</h3>
<p>If you want a record of what was on your drive before cleanup, export the treemap as a PNG image or the file list as CSV. Useful for auditing or just keeping a snapshot of your disk state before a big purge.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "daisydisk-alternative-mac": {
    slug: "daisydisk-alternative-mac",
    title: "DaisyDisk Alternative for Mac",
    description:
      "DaisyDisk is a popular disk visualizer but its sunburst chart isn't the only way to see your storage. A treemap layout can show more detail in the same space.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>DaisyDisk has been a go-to disk space tool on macOS for years. Its colorful sunburst chart is distinctive and polished. But if you've used it for serious disk cleanup, you may have noticed some limitations: the circular layout wastes screen real estate, deeply nested folders are hard to read in the outer rings, and comparing sizes between non-adjacent segments isn't intuitive.</p>

<p>If you're looking for a DaisyDisk alternative, the main question is: what visualization layout works better for actually finding and removing large files?</p>

<h2>Sunburst vs. treemap</h2>

<p>DaisyDisk uses a <strong>sunburst chart</strong> — concentric rings radiating from the center. It looks great, but has practical limitations:</p>
<ul>
  <li><strong>Outer rings are thin</strong> — deeply nested folders become tiny slivers that are hard to click or read</li>
  <li><strong>Wasted space</strong> — the circular layout leaves the corners of the window empty</li>
  <li><strong>Comparison is difficult</strong> — comparing the size of two segments on opposite sides of the circle requires mental math on arc lengths</li>
</ul>

<p>A <strong>treemap</strong> uses the entire rectangular window. Every pixel represents disk space. Files and folders are drawn as rectangles proportional to their size. Large items are large rectangles — the comparison is immediate and intuitive.</p>

<h2>Canopy: treemap-based disk visualization</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> uses a treemap layout instead of a sunburst. The result is a denser, more information-rich visualization that uses your full screen to show disk contents.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap disk visualizer — a DaisyDisk alternative using rectangular layout" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>More detail, same screen</h3>
<p>Because treemaps tile rectangles without wasted space, you see more files at once. Deeply nested folders get the same proportional treatment as top-level ones — no tiny unreadable slivers in an outer ring.</p>

<h3>Direct deletion</h3>
<p>Like DaisyDisk, Canopy lets you delete files from the visualization. Identify a space hog and remove it without switching to Finder.</p>

<h3>Export options</h3>
<p>Canopy can export the treemap as a PNG screenshot or the underlying data as CSV — useful for IT documentation, auditing, or just keeping a record of your disk state before cleanup.</p>

<h3>Native performance</h3>
<p>Built in Swift for Apple Silicon, Canopy scans fast and stays responsive even on large drives. No Electron, no web views — a native macOS app that feels right at home alongside your other tools.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "visualize-hard-drive-usage-mac": {
    slug: "visualize-hard-drive-usage-mac",
    title: "How to Visualize Hard Drive Usage on Mac",
    description:
      "Numbers and file lists don't convey disk usage well. A visual map of your drive makes it immediately clear where the space went — no digging required.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>Your Mac's 256 GB or 512 GB drive is filling up. You know you need to free space, but where do you start? You could open Finder and browse folders, but disk usage is spread across hundreds of directories. You could run <code>du -sh</code> in Terminal, but a wall of numbers doesn't give you an intuitive sense of proportions. What you need is a picture — a visual map that shows your entire drive at a glance.</p>

<p>Humans process visual proportions far faster than number lists. A 14 GB file in a list of hundreds is easy to miss. A 14 GB rectangle dominating the screen is impossible to ignore.</p>

<h2>Built-in tools fall short</h2>

<p>macOS offers two ways to understand your storage, and neither gives you the visual clarity you need:</p>

<h3>Storage bar in System Settings</h3>
<p>The colored bar in System Settings > General > Storage shows broad categories (Apps, Documents, System Data) but you can't drill into them. "Documents: 48 GB" tells you almost nothing about which documents or where they are.</p>

<h3>Finder column/list view</h3>
<p>You can sort by size in Finder, but only within one folder at a time. To understand your whole drive, you'd need to open every folder, check sizes, and mentally aggregate — that's what computers are supposed to do for you.</p>

<h2>Treemap visualization with Canopy</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your drive and renders an interactive treemap — a rectangular map where every file and folder is drawn proportional to its size. Large items are large rectangles. Small items are small. The visual hierarchy is immediate.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy interactive treemap showing hard drive usage on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Color-coded file types</h3>
<p>Files are color-coded by type — images, videos, archives, code, documents — so you can see at a glance whether your space is going to media files, development assets, or cached data. Patterns emerge immediately: "oh, it's mostly video files in three folders."</p>

<h3>Interactive exploration</h3>
<p>Click any block to see its path and size. Double-click a folder to zoom in and see its contents in detail. Navigate your entire drive visually — zoom in, zoom out, explore any directory — without ever opening Finder.</p>

<h3>From visualization to action</h3>
<p>Seeing your disk usage is only useful if you can act on it. Canopy lets you delete files directly from the treemap and export the map as PNG or CSV. Visualize, decide, clean up — one workflow, one app.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-startup-disk-full": {
    slug: "mac-startup-disk-full",
    title: "Mac Startup Disk Full — How to Free Space Fast",
    description:
      "Your Mac is throwing a startup disk warning and apps are starting to misbehave. Here's how to actually find what's filling your drive and clear it quickly.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>You get a system alert: "Your startup disk is almost full." Then apps start crashing on launch, Photos refuses to sync, and Spotlight stops indexing new files. This isn't a cosmetic warning — macOS actively needs free space on your startup disk for virtual memory, temp files, and updates. When it runs out, things break.</p>

<p>The urgency makes people panic-delete things, which is the wrong move. You need to know what's actually large before you start removing anything.</p>

<h2>Why the startup disk fills up faster than you'd expect</h2>

<p>A few things eat startup disk space quietly over months:</p>
<ul>
  <li><strong>macOS update installers</strong> — downloaded update files can sit around at several GB each</li>
  <li><strong>Time Machine local snapshots</strong> — created automatically, especially if your backup drive isn't always connected</li>
  <li><strong>Application caches and logs</strong> — accumulate silently in the background</li>
  <li><strong>Old backups and disk images</strong> — forgotten .dmg or .ipsw files in Downloads</li>
  <li><strong>Development artifacts</strong> — Xcode derived data, simulators, node_modules folders</li>
</ul>

<p>None of these show up clearly in System Settings' storage bar. You need to see the actual filesystem to know what to remove.</p>

<h2>Find the exact files taking up your startup disk</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your entire startup disk and draws it as a color-coded treemap, with every file and folder sized proportionally to the space it uses. The largest items on your drive are immediately the largest blocks on screen — no digging, no guessing.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing a full macOS startup disk broken down by file size" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Free space in minutes, not hours</h3>
<p>Instead of manually checking folder after folder, scan once and see the whole disk at a glance. Most people find that two or three items — an old backup, a bloated cache, a forgotten VM — account for the bulk of the problem.</p>

<h3>Delete without leaving the app</h3>
<p>Click a block, confirm it's safe to remove, and delete it directly from the treemap. Files go to Trash, so nothing is permanently lost if you change your mind.</p>

<h3>Confirm the fix worked</h3>
<p>Rescan after deleting to see your updated disk layout and confirm the startup disk warning is resolved before you need to reboot or update macOS.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "treemap-disk-usage-mac": {
    slug: "treemap-disk-usage-mac",
    title: "Treemap Disk Usage Viewer for Mac",
    description:
      "A treemap turns disk usage into a picture you can read in seconds. Here's how the layout works and why it beats lists and pie charts for finding space hogs.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>If you've ever searched for a way to see your Mac's storage visually, you've probably run into the term "treemap." It's a specific kind of chart — and it happens to be the best way to represent disk usage, better than lists, pie charts, or sunbursts.</p>

<h2>How a treemap works</h2>

<p>A treemap divides a rectangle into smaller rectangles, where each one's area is proportional to the value it represents. Applied to disk usage, that means every file and folder on your drive becomes a block sized exactly to the space it occupies. A 20 GB folder is a big rectangle. A 200 KB file is a tiny sliver. Nested folders subdivide into their own child rectangles, so you can see structure and size at the same time.</p>

<p>This matters because your brain processes area far faster than it processes numbers in a list. Scrolling through a file list sorted by size still requires you to read and compare digits. A treemap lets you just look — the biggest block is the biggest space user, full stop.</p>

<h2>Why treemaps beat other disk chart styles</h2>

<ul>
  <li><strong>vs. pie/sunburst charts</strong> — treemaps use the full rectangular window with no wasted space, and deeply nested items don't shrink into unreadable slivers the way outer rings do</li>
  <li><strong>vs. bar charts</strong> — treemaps show hierarchy (folder → subfolder → file) in one view instead of requiring separate charts per level</li>
  <li><strong>vs. plain file lists</strong> — treemaps convey proportion instantly instead of requiring you to read and compare numbers</li>
</ul>

<h2>Canopy: a native treemap for macOS</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> is built specifically around this layout. It scans your Mac's drive and renders an interactive, color-coded treemap where file type determines color and size determines area.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap disk usage viewer for macOS with color-coded rectangles" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zoom through the hierarchy</h3>
<p>Double-click any folder to zoom into it, seeing its own treemap of contents. Zoom back out to return to the full-drive view. Navigation stays entirely visual — no path-typing required.</p>

<h3>From viewing to cleaning</h3>
<p>Once a block catches your eye, click it for details, then delete it right there if you don't need it. The treemap updates immediately, so you can keep working through your drive block by block.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-storage-management-not-working": {
    slug: "mac-storage-management-not-working",
    title: "Mac Storage Management Not Showing Enough Detail",
    description:
      "The built-in storage tool on macOS groups everything into vague buckets and won't let you drill down. Here's why it's limited and what to use instead.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>You open System Settings > General > Storage, hoping to find out what's eating your disk. You see a colored bar and a handful of categories: Apps, Documents, Photos, System Data. You click "Manage" hoping for a breakdown. What you get instead is a short list of vague recommendations — "Store in iCloud," "Optimize Storage," "Reduce Clutter" — and maybe a list of large files in Documents. That's it. No way to see what's inside System Data. No way to sort your whole drive by size. No way to inspect Library folders, caches, or developer files.</p>

<h2>Why the built-in tool stops short</h2>

<p>macOS's storage management was designed to nudge you toward iCloud and Apple's own optimization features, not to give you a full audit of your filesystem. It's genuinely useful for finding old messages with large attachments or clearing your Trash, but it was never built as a general-purpose disk analysis tool. A few specific gaps:</p>

<ul>
  <li><strong>System Data is a black box</strong> — no click-through, no file list, just a number</li>
  <li><strong>Only scans certain locations</strong> — Library, Application Support, and hidden folders are mostly invisible</li>
  <li><strong>No sorting across your whole drive</strong> — recommendations are scoped to specific categories, not a unified view</li>
  <li><strong>No proportional visualization</strong> — you get numbers, not a sense of scale</li>
</ul>

<h2>Getting the detail macOS won't show you</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> reads your filesystem directly instead of relying on macOS's storage categories. It builds an interactive treemap showing every file and folder on your drive, proportionally sized, including everything hidden behind "System Data."</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy showing detailed disk breakdown beyond what macOS Storage Management provides" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>See everything, not a subset</h3>
<p>Library folders, developer caches, VM images, application containers — all visible and sized correctly, not hidden behind a vague label.</p>

<h3>Sort by looking, not scrolling</h3>
<p>Because the treemap is proportional, the largest items are visually obvious the moment the scan finishes. No sorting menus, no drilling through category after category.</p>

<h3>Act on what you find</h3>
<p>Delete files directly from the map once you've identified them, and rescan to verify the freed space — a complete loop the built-in tool simply doesn't offer.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "find-duplicate-files-mac": {
    slug: "find-duplicate-files-mac",
    title: "How to Find Duplicate Files Eating Disk Space on Mac",
    description:
      "Duplicate photos, downloads, and documents pile up quietly over years of Mac use. Here's how to track down where the copies are hiding and reclaim the space.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>Duplicate files accumulate in ways you rarely notice at the time: you download the same PDF twice, Photos keeps an edited copy alongside the original, a project folder gets copy-pasted "just in case" and never deleted, or a backup script saves the same files to two locations. Individually these duplicates seem harmless. Over years, they can add up to tens of gigabytes.</p>

<h2>Where duplicates typically hide</h2>

<ul>
  <li><strong>Downloads folder</strong> — installers, PDFs, and images downloaded more than once, often named "file (1).pdf," "file (2).pdf"</li>
  <li><strong>Photos Library</strong> — edited versions kept alongside originals, or duplicate imports from multiple devices</li>
  <li><strong>Desktop and Documents</strong> — "Copy of" files from drag-and-duplicate habits</li>
  <li><strong>Old project folders</strong> — entire directories duplicated as backups and forgotten</li>
  <li><strong>Cloud sync conflicts</strong> — Dropbox or iCloud creating "(conflicted copy)" versions</li>
</ul>

<p>Dedicated duplicate-finder apps that hash every file to find exact matches exist, but they can take a long time to scan a full drive and often flag things you'd rather review yourself, like near-identical photo edits.</p>

<h2>Spot duplicates visually, then decide</h2>

<p>A different approach: instead of automated hashing, use a visual disk map to spot suspicious patterns yourself. <a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your drive and shows every folder as a proportional block in a treemap, which makes duplicated folder structures easy to notice — two similarly sized blocks with matching subfolder patterns are a strong signal of a duplicated project or backup.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap helping spot duplicated folders taking up space on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Compare folder sizes at a glance</h3>
<p>If you suspect you have two copies of a project or a photo import, zoom into both locations and compare their treemap footprints directly. Matching sizes and structures confirm the duplication.</p>

<h3>Review before deleting</h3>
<p>Click into either folder to check the actual contents and confirm they're truly redundant before removing anything — safer than trusting an automated hash-match that can't tell you which copy is the one you actually want to keep.</p>

<h3>Delete the redundant copy</h3>
<p>Once you've confirmed which folder is disposable, delete it directly from the treemap and rescan to see the space returned.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "xcode-cache-taking-space-mac": {
    slug: "xcode-cache-taking-space-mac",
    title: "Xcode Caches Taking Up Space on Mac — How to Find Them",
    description:
      "If you develop for Apple platforms, Xcode is probably one of the biggest hidden consumers of disk space on your Mac. Here's where it hides its files and how to clean up safely.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>If you're a developer, Xcode is quietly one of the biggest disk hogs on your Mac. Every build generates derived data. Every simulator you've ever run takes up its own disk image. Every archive you've created for App Store submission sticks around indefinitely unless you manually delete it. None of this shows up clearly anywhere in System Settings.</p>

<h2>Where Xcode's disk usage actually lives</h2>

<ul>
  <li><strong>DerivedData</strong> — <code>~/Library/Developer/Xcode/DerivedData/</code> — build artifacts and indexes that regenerate automatically, often 5-20 GB across projects</li>
  <li><strong>Archives</strong> — <code>~/Library/Developer/Xcode/Archives/</code> — every App Store build you've ever archived, often 500 MB to 2 GB each, kept forever by default</li>
  <li><strong>iOS Device Support</strong> — symbol files for every iOS version you've ever debugged on a physical device, adding up over years</li>
  <li><strong>Simulator devices</strong> — <code>~/Library/Developer/CoreSimulator/Devices/</code> — every simulator you've created, each with its own disk image that can be several GB</li>
  <li><strong>Simulator caches</strong> — old runtime downloads that Xcode doesn't always clean up after updates</li>

</ul>

<p>It's common for these combined to reach 30-80 GB on a Mac used for active development, and almost none of it shows up as a distinct, actionable item in macOS's storage view.</p>

<h2>Seeing exactly what Xcode has accumulated</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans <code>~/Library/Developer</code> along with the rest of your drive and shows every folder proportionally in a treemap, so DerivedData, Archives, and simulator devices show up as clearly sized, clickable blocks instead of being buried three folders deep.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap revealing Xcode DerivedData, Archives, and simulator disk usage on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Safe to clean, mostly</h3>
<p>DerivedData is always safe to delete — Xcode rebuilds it automatically on your next build. Old simulator devices you no longer test on are also safe to remove via Xcode's Devices window or directly. Archives are the one category to review carefully, since they're your only record of past App Store submissions if you need to re-export a dSYM.</p>

<h3>Zoom into Developer folder specifically</h3>
<p>Double-click into <code>Library/Developer</code> from the treemap to see exactly how much each subfolder is contributing, then decide what's worth keeping.</p>

<h3>Delete and reclaim instantly</h3>
<p>Remove stale DerivedData or old archives directly from the map, then rescan to confirm the gigabytes are actually back.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "docker-images-filling-disk-mac": {
    slug: "docker-images-filling-disk-mac",
    title: "Docker Images Filling Your Mac Disk — Where to Find Them",
    description:
      "Docker Desktop on Mac can silently consume dozens of gigabytes through its virtual disk file. Here's why it grows so large and how to see exactly what's inside it.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>Docker Desktop on macOS runs containers inside a lightweight virtual machine, and that VM stores everything — images, containers, volumes, build cache — in a single large file, typically <code>Docker.raw</code> or a qcow2 disk image. This file can grow to 40, 60, even 100+ GB over months of active use, and it rarely shrinks back down on its own even after you delete images and containers inside Docker.</p>

<h2>Why the Docker disk file keeps growing</h2>

<ul>
  <li><strong>Layer caching</strong> — every image build leaves intermediate layers cached for faster rebuilds</li>
  <li><strong>Unused images</strong> — pulled images for projects you finished months ago rarely get manually removed</li>
  <li><strong>Dangling volumes</strong> — data volumes from removed containers can persist indefinitely</li>
  <li><strong>Build cache</strong> — <code>docker build</code> cache accumulates with every iteration during development</li>
  <li><strong>Sparse file behavior</strong> — the virtual disk file can grow but doesn't automatically shrink when you free space inside it</li>
</ul>

<p>You can run <code>docker system prune -a</code> to clean up unused images and cache, but that only helps if you know Docker is the actual culprit. On a Mac with several dev tools competing for disk space, it's easy to overlook.</p>

<h2>Confirming Docker is the space hog</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your entire drive and shows Docker's virtual disk file as a single large, clearly sized block in the treemap — usually located under <code>~/Library/Containers/com.docker.docker/</code>. If it's the biggest thing on your Mac, you'll see it immediately rather than suspecting it based on gut feeling.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing Docker Desktop's virtual disk file size on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Confirm before you clean</h3>
<p>Once you can see exactly how large the Docker.raw file is relative to everything else on your drive, you know whether running <code>docker system prune</code> or lowering Docker Desktop's disk size limit in Settings is worth doing.</p>

<h3>Check the rest of your dev tools too</h3>
<p>While you're at it, the same treemap will show whether Xcode, npm caches, or old VMs are also contributing — useful context before you commit to cleaning any single tool.</p>

<h3>Verify the reclaim worked</h3>
<p>After running Docker's cleanup commands or compacting the virtual disk, rescan with Canopy to confirm the file actually shrank and the space came back.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "time-machine-local-snapshots-space-mac": {
    slug: "time-machine-local-snapshots-space-mac",
    title: "Time Machine Local Snapshots Taking Space on Mac",
    description:
      "Your Mac keeps hidden backup snapshots on the internal drive even when your Time Machine disk isn't connected, and they can eat far more space than expected.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>Time Machine doesn't just back up to your external drive — it also keeps local snapshots directly on your Mac's internal storage, especially when the backup drive is disconnected for a while. These are meant to be temporary and self-managing, automatically purged as your disk fills up. In practice, they can sit around consuming double-digit gigabytes, and they're invisible in Finder and mostly invisible in System Settings too.</p>

<h2>How local snapshots work</h2>

<p>When Time Machine is enabled, macOS periodically creates a local snapshot — essentially a point-in-time copy-on-write reference to your files — even without your backup drive connected. These snapshots let you restore recent versions of files even if you haven't plugged in your backup disk in days. The catch is that macOS is supposed to delete the oldest ones automatically once your disk gets low on space, but that process doesn't always keep up, especially if your drive fills up quickly.</p>

<h2>Why they're hard to see and manage</h2>

<ul>
  <li>They don't appear as regular files in Finder</li>
  <li>System Settings' Storage view lumps them into "System Data" with no breakdown</li>
  <li>The only reliable way to inspect them directly is Terminal (<code>tmutil listlocalsnapshots /</code>), which most people won't use</li>
</ul>

<h2>Seeing their real impact on your disk</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> won't show snapshots as individual files (they're a filesystem-level construct, not regular files), but it does show you your actual free space and used space accurately after a full scan, which helps you notice when the numbers don't add up — a strong sign that local snapshots or another hidden system process is holding space macOS hasn't released yet.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy disk scan helping identify hidden space consumption from Time Machine snapshots on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Rule out the obvious first</h3>
<p>Before assuming snapshots are the issue, scan your drive with Canopy to confirm there isn't a large, identifiable file — an old backup, a VM, a cache — that's actually the real cause. Snapshots are often blamed when the true culprit is something visible and deletable.</p>

<h3>Free up space, snapshots included</h3>
<p>Once genuine large files are cleared out, macOS typically reclaims local snapshot space automatically as the disk pressure eases. Rescanning afterward confirms your free space has actually increased.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-photos-library-too-big": {
    slug: "mac-photos-library-too-big",
    title: "Mac Photos Library Too Big — What's Inside?",
    description:
      "Your Photos library package can quietly balloon to 100+ GB on your Mac, and the app itself gives you very little insight into why. Here's what's actually taking up the space.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>The Photos app stores your entire library in a single package file — <code>Photos Library.photoslibrary</code> — that can grow to well over 100 GB if you've been shooting photos and video for years, especially 4K video from an iPhone. macOS treats this package as a single opaque item in Finder (right-click and "Show Package Contents" to peek inside), and Photos itself gives you almost no tools to understand its own storage footprint beyond a vague iCloud optimization toggle.</p>

<h2>What's actually inside the library package</h2>

<ul>
  <li><strong>Originals</strong> — your full-resolution photos and videos, the largest component by far</li>
  <li><strong>Masters and derivatives</strong> — edited versions kept alongside originals so edits stay non-destructive</li>
  <li><strong>Thumbnails and previews</strong> — cached smaller versions generated for fast browsing</li>
  <li><strong>Database files</strong> — the index that powers search, faces, and memories</li>
  <li><strong>Shared library data</strong> — content synced from iCloud Shared Photo Library, if enabled</li>
</ul>

<p>4K and ProRes video from recent iPhones is usually the single biggest driver of library size — a few minutes of 4K60 footage can be several hundred MB, and it adds up fast across hundreds of clips.</p>

<h2>Seeing the size without breaking your library</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> can scan the Photos Library package like any other folder, showing you its total size relative to the rest of your disk and letting you see the internal structure — Originals, Masters, resources — as proportional blocks, without you needing to manually dig through package contents in Finder.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing the size breakdown of a macOS Photos library package" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Understand scale before you act</h3>
<p>Seeing that your library is, say, 180 GB out of a 512 GB drive puts the "Optimize Mac Storage" toggle in Photos (which offloads originals to iCloud and keeps lightweight previews locally) into context — you'll know exactly how much you stand to reclaim.</p>

<h3>Don't manually edit the package</h3>
<p>It's worth noting: never delete files directly from inside the Photos Library package structure — that can corrupt your library. Use Photos' own tools (or iCloud optimization) for actual cleanup; use the treemap purely to understand size.</p>

<h3>Check the rest of your disk too</h3>
<p>While you're investigating, scan your whole drive to see how Photos compares to other space consumers like old backups or caches — sometimes the real quick win is elsewhere.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "npm-node-modules-disk-space-mac": {
    slug: "npm-node-modules-disk-space-mac",
    title: "node_modules Eating Disk Space on Mac — Find and Clean Them",
    description:
      "Every JavaScript project leaves behind a node_modules folder, and years of old projects can quietly consume tens of gigabytes across your Mac.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>If you've done any JavaScript or Node.js development, you know the joke: node_modules is the heaviest object in the universe. Every project you've ever cloned or created has its own node_modules folder, often 200-500 MB, sometimes over a gigabyte for projects with heavy build tooling. Multiply that across dozens of old side projects, tutorials you followed once, and cloned repos you never deleted, and you can easily have 20-50 GB locked up in dependency folders you'll never run again.</p>

<h2>Why node_modules folders pile up unnoticed</h2>

<ul>
  <li><strong>They're hidden in plain sight</strong> — buried inside project folders, not flagged as "cache" or "temp" anywhere</li>
  <li><strong>Every project has its own copy</strong> — npm and yarn don't share dependencies across projects by default the way pnpm does</li>
  <li><strong>They regenerate instantly</strong> — running <code>npm install</code> rebuilds the folder in seconds, so there's rarely a reason to keep an old one around</li>
  <li><strong>Old projects are easy to forget</strong> — a tutorial repo from two years ago still has its full node_modules sitting there</li>
</ul>

<h2>Finding every node_modules folder on your drive</h2>

<p>Developers often use a Terminal one-liner like <code>find ~ -name "node_modules" -type d -prune -exec du -sh {} \\;</code> to list them, but that produces a flat, hard-to-scan text output with no sense of which ones are actually worth deleting first.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> gives you a visual alternative: scan your Projects or home folder and the treemap will show every node_modules directory as a proportionally sized block, so the biggest ones — often in projects with heavy frameworks or bundlers — stand out immediately.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap highlighting large node_modules folders across Mac development projects" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Zoom into your dev folder</h3>
<p>Double-click into your projects directory to see each project's footprint, including its node_modules subfolder, sized relative to the rest.</p>

<h3>Safe to delete, almost always</h3>
<p>Unless you plan to run a project again without internet access, node_modules can be deleted freely — <code>npm install</code> or <code>yarn</code> rebuilds it from <code>package.json</code> in moments.</p>

<h3>Clean up directly from the map</h3>
<p>Delete old node_modules folders right from the treemap, project by project, and rescan to see the gigabytes come back.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-mail-attachments-storage": {
    slug: "mac-mail-attachments-storage",
    title: "Mac Mail Attachments Quietly Eating Storage",
    description:
      "Every attachment you've ever opened in Apple Mail gets cached locally on your Mac, and years of email attachments can add up to a surprisingly large amount of storage.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>Apple Mail downloads and caches every attachment you open — PDFs, images, videos, presentations — into a local support folder, and it keeps them there indefinitely by default, even for emails you've long since archived or forgotten about. Over years of use, especially with a heavy work inbox where people constantly email large files, this cache can quietly grow to 10, 20, even 40+ GB.</p>

<h2>Where Mail actually stores this data</h2>

<p>Mail's downloaded attachments and message data live in <code>~/Library/Mail/</code>, organized by account and mailbox. This folder isn't something Mail's own interface lets you browse or manage directly — there's no "clear attachment cache" button, no size indicator per mailbox, nothing. The only built-in hint is in System Settings' Storage > Mail category, which shows a size but, like most storage categories on macOS, gives you no breakdown of what's actually inside.</p>

<h2>Why it's easy to overlook</h2>

<ul>
  <li>You never see the local cache directly — Mail just shows you the message and attachment as if it's always available</li>
  <li>It grows continuously with normal email use, with no natural point where you'd think to check it</li>
  <li>Deleting an email doesn't necessarily immediately clear its cached attachment data</li>
</ul>

<h2>Seeing exactly how much Mail has accumulated</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> can scan <code>~/Library/Mail</code> alongside the rest of your drive, showing the size of Mail's data proportionally in the treemap so you can see at a glance whether it's a meaningful contributor to your storage problem or a non-issue.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing Mail attachment cache size on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Decide if it's worth addressing</h3>
<p>If Mail's folder turns out to be a small fraction of your used space, you can stop worrying about it and focus on bigger items elsewhere in the treemap. If it's genuinely large, that's useful information before you go digging into account settings.</p>

<h3>Use Mail's own settings for cleanup</h3>
<p>Rather than manually deleting files inside <code>~/Library/Mail</code> (which can corrupt your mailbox), adjust each account's attachment download settings or use Mail > Preferences to manage cache behavior, then rescan with Canopy to confirm the change actually reduced disk usage.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "omnidisksweeper-alternative-mac": {
    slug: "omnidisksweeper-alternative-mac",
    title: "OmniDiskSweeper Alternative for Mac",
    description:
      "OmniDiskSweeper has been a free go-to disk tool for years, but its plain list view and dated interface leave a lot to be desired for modern Macs.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>OmniDiskSweeper is one of the oldest free disk utilities for macOS, and it's stuck around because it's simple and it works: it scans a folder or drive and shows a sortable list of files and folders by size, letting you delete directly from the list. For a quick, no-frills look at what's large, it does the job. But the experience feels distinctly dated, and it lacks almost every modern convenience you'd expect from a disk tool in 2026.</p>

<h2>Where OmniDiskSweeper shows its age</h2>

<ul>
  <li><strong>List-only view</strong> — no visual proportion, just rows of names and sizes you have to read and compare manually</li>
  <li><strong>No color coding by file type</strong> — everything looks the same regardless of whether it's a video, an archive, or a code project</li>
  <li><strong>Dated interface</strong> — hasn't been meaningfully redesigned to match modern macOS visual conventions</li>
  <li><strong>No export options</strong> — no way to save a report of what you found</li>
  <li><strong>Slower scans on modern large drives</strong> — not optimized for Apple Silicon</li>
</ul>

<p>It's free and it still works, which is exactly why so many people default to it. But if you're doing this regularly, a visual tool saves real time over reading list after list.</p>

<h2>A visual, modern alternative</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> takes the same core idea — scan, show sizes, delete what you don't need — and replaces the list with an interactive treemap where every block is sized and color-coded by file type, so patterns and outliers jump out visually instead of requiring you to scan text.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap disk tool — a visual OmniDiskSweeper alternative for modern macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>What carries over</h3>
<p>Like OmniDiskSweeper, you can delete files directly from the results — no switching to Finder. Scanning and cleanup remain a single workflow.</p>

<h3>What's new</h3>
<p>Proportional visualization means you don't need to read every row to find the big items — they're just visually the largest. Export the treemap as PNG or the data as CSV, something OmniDiskSweeper never offered. And native Apple Silicon performance means scans of large modern drives finish quickly.</p>

<h3>Built for how Macs work today</h3>
<p>Canopy handles modern file structures — app bundles, containers, developer folders — with the same clarity, giving you a tool that fits current macOS rather than one frozen in an earlier era.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-disk-usage-by-file-type": {
    slug: "mac-disk-usage-by-file-type",
    title: "Mac Disk Usage by File Type — Find What's Taking Space",
    description:
      "Knowing whether your storage is dominated by videos, code, archives, or documents changes what cleanup strategy actually makes sense. Here's how to break it down.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>Not all disk space problems are the same. If your storage is dominated by video files, the fix is usually offloading a few large clips to an external drive or cloud storage. If it's dominated by thousands of small cache files, the fix is clearing app caches. If it's development artifacts, the fix is cleaning derived data and node_modules folders. Before you can pick the right strategy, you need to know which category is actually the problem — and macOS doesn't break this down for you anywhere obvious.</p>

<h2>Why file-type breakdown matters more than a total number</h2>

<p>"You have 380 GB used" tells you nothing actionable. "You have 220 GB of video, 60 GB of archives, 40 GB of code projects, and 60 GB of everything else" tells you exactly where to focus. The type breakdown turns an overwhelming number into a short list of specific things to check.</p>

<h2>Ways to check by file type</h2>

<h3>Spotlight smart searches</h3>
<p>You can build a Finder smart folder filtering by "Kind" and sort by size, but this only searches indexed, user-visible locations — it misses caches, hidden folders, and system directories entirely.</p>

<h3>Terminal with find</h3>
<p>Commands like <code>find ~ -name "*.mov" -exec du -ch {} +</code> can total up a specific extension, but you'd need to run it separately for every file type you're curious about, and it ignores anything outside your home folder.</p>

<h2>A visual, color-coded breakdown</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> color-codes every block in its treemap by file type, so as soon as a scan finishes, you can see at a glance whether your disk usage skews toward video, images, archives, code, or documents — patterns emerge visually without running a single command.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap color-coded by file type showing Mac disk usage breakdown" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Spot dominant categories instantly</h3>
<p>If one color dominates the treemap, that's your answer — a sea of one color pointing to video files, for instance, tells you exactly where to focus cleanup efforts.</p>

<h3>Drill into a category</h3>
<p>Click into the folders contributing most to a dominant color to see the specific files, then decide what to archive, move, or delete.</p>

<h3>Export the breakdown</h3>
<p>Export the file list as CSV if you want to analyze the type breakdown further or keep a record for reference.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "clean-old-ios-backups-mac": {
    slug: "clean-old-ios-backups-mac",
    title: "Clean Old iOS Backups from Your Mac",
    description:
      "Local iPhone and iPad backups can silently pile up on your Mac over the years, with old device backups you no longer need still taking up tens of gigabytes.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>If you've ever backed up an iPhone or iPad to your Mac using Finder (or iTunes on older macOS), that backup lives locally in <code>~/Library/Application Support/MobileSync/Backup/</code>. Each backup can be 5-30 GB depending on how much is on the device, and macOS doesn't automatically delete old ones when you get a new phone or stop using a device. It's common to find backups for iPhones you sold or recycled years ago, still sitting there, still full-sized.</p>

<h2>Why these backups are easy to forget</h2>

<ul>
  <li><strong>They're not visible in Finder's normal browsing</strong> — buried inside a Library subfolder most people never open</li>
  <li><strong>Each backup is named by device identifier</strong>, not device name, so you can't tell which is which without opening Finder's device management screen</li>
  <li><strong>New backups don't overwrite old ones</strong> from a different device — each device gets its own backup, kept indefinitely</li>
  <li><strong>Once you switch to iCloud backup, local backups don't get cleaned up automatically</strong></li>
</ul>

<h2>The built-in way to manage them (and its limits)</h2>

<p>You can go to Finder, select your currently connected device, and click "Manage Backups" to see a list and delete old ones. This works, but only shows backups Finder recognizes as associated with connected or previously managed devices — it doesn't give you a broader sense of how much total space backups are consuming relative to everything else on your drive.</p>

<h2>Seeing backups in context</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans the MobileSync/Backup folder along with your entire drive, showing each backup as a proportionally sized block so you can see exactly how large they are compared to other space consumers — useful for deciding whether backups are actually your biggest issue or a secondary concern.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap showing old iOS device backups taking space on a Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Identify old, unneeded backups</h3>
<p>If you can confirm a backup belongs to a device you no longer own or have since backed up to iCloud instead, it's generally safe to remove.</p>

<h3>Delete directly, or via Finder</h3>
<p>You can delete a backup folder directly from the Canopy treemap, or use Finder's Manage Backups screen if you want device names rather than folder identifiers — either way, rescanning afterward confirms the space was freed.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "mac-ssd-running-low-what-to-do": {
    slug: "mac-ssd-running-low-what-to-do",
    title: "Mac SSD Running Low — What to Do Before It Slows Down",
    description:
      "A nearly full SSD doesn't just risk running out of space — it can measurably slow your Mac down. Here's why, and how to get ahead of it.",
    date: "2026-09-06",
    readTime: "5 min read",
    content: `
<p>An SSD running low on free space isn't just a storage inconvenience — it can genuinely slow your Mac down. SSD controllers need free blocks to write new data efficiently, and macOS itself needs headroom for virtual memory swap files, temporary files during app operations, and Spotlight indexing. When free space drops below roughly 10-15% of total capacity, you may start noticing slower app launches, laggy file operations, and occasional beachballs — even on a Mac that was fast a few months ago.</p>

<h2>Warning signs it's time to act</h2>

<ul>
  <li>Apps take noticeably longer to launch or save files</li>
  <li>Spotlight search results feel slow or incomplete</li>
  <li>You get "disk almost full" alerts</li>
  <li>Video editing or large file exports fail partway through</li>
  <li>System updates fail because there isn't room to download and install them</li>
</ul>

<p>The fix isn't complicated, but it requires knowing what's actually filling the drive rather than guessing.</p>

<h2>Get ahead of it with a full picture</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> scans your SSD and shows the entire contents as a proportional treemap, so you can see immediately whether your space problem is a few huge files, thousands of small cache files, or something in between — each of which calls for a different cleanup approach.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy treemap helping free up space on a Mac SSD before performance suffers" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Aim for meaningful headroom</h3>
<p>Rather than freeing just enough space to dismiss the warning, aim to get back to at least 15-20% free capacity, which gives macOS enough room to operate efficiently and gives you a buffer before the next warning shows up.</p>

<h3>Find your biggest wins first</h3>
<p>The treemap makes it obvious where the fastest gains are — usually one or two large items rather than dozens of small deletions. Tackle those first for the best return on time spent.</p>

<h3>Delete and confirm</h3>
<p>Remove what you don't need directly from the map, then rescan to confirm both the freed space and, if you were already noticing slowdowns, check whether performance improves as your SSD gets breathing room back.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
  "export-disk-usage-report-mac": {
    slug: "export-disk-usage-report-mac",
    title: "Export a Disk Usage Report on Mac — PNG or CSV",
    description:
      "Whether you're documenting storage for IT purposes, auditing a shared machine, or just want a record before a big cleanup, here's how to get a proper disk usage export.",
    date: "2026-09-06",
    readTime: "4 min read",
    content: `
<p>Sometimes seeing your disk usage on screen isn't enough — you need a record of it. Maybe you're documenting storage for an IT audit, handing off a shared Mac and want to note its state beforehand, tracking down what's changed between two points in time, or just want a snapshot before a big cleanup so you have something to reference if you delete the wrong thing. macOS itself offers essentially nothing here — there's no built-in way to export a storage report of any kind.</p>

<h2>Why you might need a disk usage export</h2>

<ul>
  <li><strong>IT documentation</strong> — recording storage state on managed or shared machines</li>
  <li><strong>Before/after comparisons</strong> — proving a cleanup actually reclaimed the space it should have</li>
  <li><strong>Handoff records</strong> — documenting a Mac's contents before reassigning or reselling it</li>
  <li><strong>Personal reference</strong> — a visual snapshot of your drive to look back on, or a spreadsheet of file sizes for your own records</li>
</ul>

<p>Terminal commands like <code>du</code> can technically produce a text file, but formatting it into something readable or presentable takes extra work, and it gives you no visual component at all.</p>

<h2>Two export formats, two purposes</h2>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Canopy</a> can export your disk scan in two ways: as a PNG image of the treemap itself, or as a CSV file listing files and their sizes — covering both the visual and the data-driven use case.</p>

<a href="https://apps.apple.com/app/canopy/id6806640970" target="_blank" rel="noopener" style="display:block"><img src="/apps/canopy.png" alt="Canopy exporting a disk usage report as PNG treemap or CSV file list on macOS" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>PNG for visual documentation</h3>
<p>Exporting the treemap as an image gives you a shareable, at-a-glance record of your disk's state — useful for a quick visual comparison later, or for including in a report where a picture communicates faster than a spreadsheet.</p>

<h3>CSV for data and analysis</h3>
<p>Exporting as CSV gives you the underlying file and folder data in a format you can open in Numbers, Excel, or any spreadsheet tool — sort it, filter it, or archive it for future reference.</p>

<h3>Use both together</h3>
<p>Export a PNG before a big cleanup as a visual "before" snapshot, then export a CSV afterward to confirm exactly which files were removed and how much space each one accounted for.</p>

<p><a href="https://apps.apple.com/app/canopy/id6806640970">Get Canopy on the Mac App Store</a></p>
`,
  },
};
