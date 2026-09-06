import type { ArticleSet } from "./index";

export const govPrivacyArticles: ArticleSet = {
  "hide-photos-from-government-iphone": {
    slug: "hide-photos-from-government-iphone",
    title: "How to Hide Photos from Government Access on iPhone",
    description:
      "Your iCloud photos can be subpoenaed, scanned, or handed over without you ever knowing. Here is how to keep your private images off any system a government agency can reach.",
    date: "2026-09-06",
    content: `
<p>Most people assume the photos on their iPhone are theirs alone. In practice, if those photos are backed up to iCloud, they exist on Apple's servers, and Apple can be legally compelled to produce them. The Fourth Amendment protects you against unreasonable searches, but it does not protect data that is voluntarily stored with a third party — a legal principle known as the third-party doctrine, and it has been used for decades to justify subpoenas for cloud-stored content.</p>
<p>You do not need to be doing anything wrong for this to matter. Government requests for cloud data have grown every year, and Apple's own transparency reports show tens of thousands of device and account requests annually in the United States alone.</p>

<h2>Where Your Photos Are Actually Exposed</h2>
<p>Understanding the exposure points is the first step to closing them:</p>
<ul>
  <li><strong>iCloud Photo Library:</strong> Every photo you take can sync to Apple's servers within seconds, unless you have disabled it.</li>
  <li><strong>Apple's CSAM scanning debate:</strong> Apple proposed on-device scanning of photos in 2021, paused it after backlash, and continues to face pressure from governments to build detection systems into consumer devices — systems that privacy researchers warn could be repurposed for broader surveillance.</li>
  <li><strong>Legal process:</strong> A subpoena, search warrant, or National Security Letter can compel Apple to turn over iCloud content, often with a gag order that prevents you from ever being notified.</li>
  <li><strong>Device seizure:</strong> If your phone is physically taken, anything visible in the standard Photos app — including the "Hidden" album — is reachable with basic device passcodes or forensic tools like Cellebrite and GrayKey.</li>
</ul>

<h2>The Fix: Keep Photos Off Any System a Subpoena Can Reach</h2>
<p><a href="https://apps.apple.com/app/id6759871587">Stash</a> stores your photos with AES-256 encryption entirely on your device. There is no cloud sync, no server, and no company in the middle that could be legally compelled to hand over your files — because there is nothing on any server to hand over. A subpoena addressed to a developer with zero-knowledge, zero-server architecture has nothing to produce.</p>
<p>Stash also disguises itself as a calculator, fitness tracker, or music player, so the vault does not visibly exist on your home screen in the first place.</p>

<h3>Photos That Never Touch iCloud</h3>
<p>Importing a photo into Stash keeps it inside the encrypted vault. It is never uploaded, synced, or backed up externally. Once you delete the original from your camera roll and empty Recently Deleted, the only copy that exists is the encrypted one on your device.</p>

<h3>Protection If Your Phone Is Seized</h3>
<p>Even in the worst case — your device is physically taken and unlocked — files inside Stash remain encrypted and are not visible through the standard Photos or Files apps. A decoy vault can also be opened with a separate passcode, showing only harmless content if you are pressured to unlock something.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "protect-phone-border-crossing": {
    slug: "protect-phone-border-crossing",
    title: "How to Protect Your Phone at a Border Crossing",
    description:
      "Border agents can search your phone without a warrant under the border search exception, no probable cause required. Here is what that means for your files and how to prepare before you travel.",
    date: "2026-09-06",
    content: `
<p>You clear customs, and an officer asks you to unlock your phone. In the United States, this request falls under the "border search exception," a doctrine that allows warrantless searches of devices at international borders and ports of entry — no probable cause, no warrant, and in most circuits, minimal suspicion required. Similar rules exist in the UK, Canada, Australia, and across the EU, each with its own thresholds and appeal processes.</p>
<p>CBP data shows device searches at U.S. borders have risen sharply over the past decade, from a few thousand a year to tens of thousands. Journalists, researchers, lawyers, and ordinary travelers carrying nothing illegal have all reported having phones searched, copied, or held for weeks.</p>

<h2>What Border Agents Can Actually Do</h2>
<ul>
  <li><strong>Basic search:</strong> Manually browsing your phone's visible apps, photos, and messages.</li>
  <li><strong>Advanced search:</strong> Connecting your device to forensic extraction tools that copy data, sometimes retaining a copy indefinitely.</li>
  <li><strong>Detainment:</strong> Refusing to unlock your device can result in the device being confiscated, and in some jurisdictions, delayed entry.</li>
  <li><strong>No warrant requirement:</strong> Unlike a police search inside the country, none of this requires a judge's approval.</li>
</ul>

<h2>Build a Layer They Can't See Past</h2>
<p>The goal is not to refuse a search — that has its own consequences — but to control what is actually visible. <a href="https://apps.apple.com/app/id6759871587">Stash</a> stores sensitive files inside an AES-256 encrypted vault disguised as a calculator, fitness tracker, or music player app. An agent scrolling through your home screen and apps sees nothing that reads as a vault.</p>

<h3>Before You Travel</h3>
<p>Move sensitive photos, documents, and files into Stash well before your trip, not at the airport. Delete the unencrypted originals from your camera roll and Files app, and empty Recently Deleted so no unencrypted trace remains outside the vault.</p>

<h3>If You're Asked to Unlock Your Phone</h3>
<p>Because Stash is disguised, unlocking your phone reveals only what a normal phone reveals — nothing that points to a hidden vault. A decoy vault, opened with a separate passcode, can be shown if you are specifically asked to prove there is nothing sensitive stored, without ever exposing your real files.</p>

<h3>Know the Legal Landscape Where You're Traveling</h3>
<p>Rules differ by country and by citizenship status. U.S. citizens cannot be denied entry for refusing to unlock a device, but the device can still be held. Non-citizens and visa holders generally have far less leverage. Research the specific policy for your destination before you go.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "government-cant-access-on-device-encryption": {
    slug: "government-cant-access-on-device-encryption",
    title: "Why the Government Can't Access On-Device Encrypted Files",
    description:
      "Not all encryption is equal. Understand the difference between cloud encryption a company holds the keys to and true on-device encryption that makes files unreadable to anyone, including the government.",
    date: "2026-09-06",
    content: `
<p>"Encrypted" is one of the most misused words in consumer tech. Plenty of apps advertise encryption while still holding the decryption keys themselves — which means a subpoena, court order, or internal policy change can unlock your data without your involvement. Real protection depends entirely on where the keys live, not just whether encryption exists.</p>

<h2>The Difference Between Server-Side and On-Device Encryption</h2>
<ul>
  <li><strong>Server-side (custodial) encryption:</strong> A company encrypts your data but stores the keys on its own servers. This is how most cloud storage, including standard iCloud backups, has historically worked. The company technically can decrypt your data if legally compelled to.</li>
  <li><strong>On-device (zero-knowledge) encryption:</strong> Your files are encrypted using a key derived from your own passcode, generated and stored only on your device. The app developer never has access to the key and cannot decrypt your files even if ordered to.</li>
</ul>
<p>This distinction is why the 2016 Apple–FBI standoff over the San Bernardino shooter's iPhone became a landmark case: Apple could not simply hand over the contents because the device's encryption keys were never in Apple's possession. The FBI ultimately paid a third party for an exploit rather than compel Apple to break its own encryption.</p>

<h2>How This Applies to Everyday File Storage</h2>
<p><a href="https://apps.apple.com/app/id6759871587">Stash</a> uses AES-256 encryption — the same standard used by banks and government agencies for classified data — applied entirely on-device. There is no server component at all, meaning there is no key custodian to subpoena, no company database to breach, and no backdoor to request.</p>

<h3>What "No Backdoor" Actually Means</h3>
<p>Governments have repeatedly proposed mandatory backdoors in encryption, from the 1990s "Clipper Chip" to more recent proposals in the UK's Investigatory Powers Act and EU "Chat Control" discussions. Security researchers consistently point out the same flaw: a backdoor built for law enforcement is a backdoor that can be found and used by anyone else too. Stash has no such mechanism because there is no remote access point to build one into.</p>

<h3>What Happens If Your Device Is Forensically Examined</h3>
<p>Tools like Cellebrite and GrayKey can extract raw data from a phone's storage, but extraction is not the same as readability. Data encrypted with a key derived from a strong, unique passcode remains unreadable without that passcode — forensic tools cannot brute-force AES-256 in any practical timeframe.</p>

<h3>Why This Matters Even If You Trust the Government</h3>
<p>Encryption protecting your files isn't only about wrongdoing — it protects against data breaches, insider misuse, policy changes at the company storing your data, and future administrations with different priorities than today's.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "icloud-photos-government-subpoena": {
    slug: "icloud-photos-government-subpoena",
    title: "Can the Government Subpoena Your iCloud Photos?",
    description:
      "Apple complies with the vast majority of valid U.S. government data requests. If your photos are in iCloud, understand exactly what can be requested and what you can do about it.",
    date: "2026-09-06",
    content: `
<p>Apple publishes a biannual transparency report, and the numbers are worth reading closely. In recent reporting periods, Apple has received tens of thousands of device and account requests from U.S. law enforcement alone, and it has complied with the substantial majority of legally valid ones. iCloud content — including photos — is explicitly listed among the data types Apple can and does produce in response to a search warrant.</p>

<h2>How the Subpoena Process Actually Works</h2>
<ul>
  <li><strong>Subpoena:</strong> Can compel basic subscriber information, but generally not content like photos, without a warrant.</li>
  <li><strong>Search warrant:</strong> Backed by a judge's finding of probable cause, this can compel Apple to produce iCloud content, including your full photo library, iCloud backups, and even deleted items still on Apple's servers.</li>
  <li><strong>Gag orders:</strong> Warrants are frequently accompanied by non-disclosure orders that legally prevent Apple from telling you your data was requested — sometimes for years.</li>
  <li><strong>International requests:</strong> Mutual Legal Assistance Treaties allow foreign governments to request the same data through U.S. courts.</li>
</ul>

<h2>The Only Way to Make This Moot</h2>
<p>A subpoena can only produce data that exists somewhere to be produced. <a href="https://apps.apple.com/app/id6759871587">Stash</a> keeps your photos and videos entirely off iCloud and off any server. There is nothing stored with Apple, nothing stored with the developer, and nothing for any legal process to reach.</p>

<h3>Auditing What's Already in iCloud</h3>
<p>Before relying on any vault app, check what's already synced. Go to Settings, tap your name, then iCloud, then Photos, and review whether iCloud Photos is enabled. Anything already uploaded may remain on Apple's servers even after local deletion, depending on your settings and backup history.</p>

<h3>Moving Forward Without the Exposure</h3>
<p>Import sensitive photos into Stash, confirm they display correctly inside the encrypted vault, then delete the originals from your camera roll and disable iCloud sync for anything you don't want mirrored to Apple's infrastructure going forward.</p>

<h3>What a Zero-Server App Cannot Be Compelled to Produce</h3>
<p>Because Stash has no backend, no account system, and no data transmission, there is no company that receives your files and no server logs that reveal your activity. A subpoena addressed to the developer has nothing to point to.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "best-encrypted-vault-app-no-cloud": {
    slug: "best-encrypted-vault-app-no-cloud",
    title: "Best Encrypted Vault App with No Cloud — Zero Server Access",
    description:
      "Cloud sync is convenient, but it means a third party can access your files or be legally compelled to hand them over. Here's what to look for in a vault app that never touches a server at all.",
    date: "2026-09-06",
    content: `
<p>Every cloud-based storage service, no matter how well encrypted, introduces a third party into your privacy equation: the company running the servers. That company can be breached, subpoenaed, sold, or simply change its policies. For anyone who wants files that genuinely belong to no one but them, the only real answer is an app that never sends data anywhere.</p>

<h2>The Problem with "Encrypted Cloud Storage"</h2>
<ul>
  <li><strong>Key custody:</strong> Most cloud vaults, including standard iCloud, hold the decryption keys themselves, meaning they technically can access your files.</li>
  <li><strong>Legal exposure:</strong> Any server-based company can receive a subpoena, warrant, or National Security Letter compelling data disclosure — sometimes under a gag order.</li>
  <li><strong>Breach risk:</strong> Centralized storage is a centralized target. Cloud storage breaches have exposed millions of users' private photos and files over the years.</li>
  <li><strong>Policy drift:</strong> Terms of service and data-sharing practices can change after you've already trusted a company with years of files.</li>
</ul>

<h2>What Zero-Cloud Architecture Actually Looks Like</h2>
<p><a href="https://apps.apple.com/app/id6759871587">Stash</a> was built with a simple rule: nothing leaves the device. Every file is encrypted with AES-256 and stored locally, with no account creation, no server, and no sync of any kind.</p>

<h3>No Account Means No Identity Link</h3>
<p>Because Stash doesn't require sign-up or an email address, there is no account record tying your identity to your vault contents. Compare that to cloud services that require an account, which creates an identifiable link between you and everything stored under it.</p>

<h3>Disguise Modes Add a Layer Encryption Alone Doesn't</h3>
<p>Encryption protects data that someone already knows to look for. Stash's three disguise modes — calculator, fitness tracker, and music player — mean the vault doesn't announce itself as a vault in the first place, on your home screen or in your app switcher.</p>

<h3>What You Give Up (and Why It's Worth It)</h3>
<p>Zero-cloud storage means no automatic backup across devices — if you lose your phone without a manual backup, the files are gone. For most privacy-conscious users, that tradeoff is intentional: the same isolation that prevents third-party access also prevents third-party recovery.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "protect-protest-photos-phone": {
    slug: "protect-protest-photos-phone",
    title: "How to Protect Protest Photos on Your Phone",
    description:
      "Documenting a protest can put your own footage at risk of seizure, subpoena, or forced disclosure. Here's how to protect what you record before, during, and after you're there.",
    date: "2026-09-06",
    content: `
<p>Recording police conduct, crowd size, or civil rights violations at a protest is protected First Amendment activity in the United States, affirmed by federal courts in multiple circuits. But protection to record is not the same as protection of what you've already recorded. Phones have been seized during mass arrests, and prosecutors have subpoenaed protesters' devices and cloud accounts as part of investigations into unrelated incidents that occurred nearby.</p>

<h2>The Real Risks to Protest Footage</h2>
<ul>
  <li><strong>Mass arrest seizure:</strong> During kettling or mass-arrest situations, phones are sometimes confiscated as a matter of course, searched later, or held for extended evidence processing.</li>
  <li><strong>Metadata exposure:</strong> Photos and videos carry embedded location and timestamp data that can identify exactly where you were standing and when, potentially placing you at a scene you didn't intend to be tied to.</li>
  <li><strong>Compelled disclosure:</strong> Law enforcement has issued subpoenas and geofence warrants seeking footage or location data from everyone present in an area during a specific window, not just people under individual suspicion.</li>
  <li><strong>Facial recognition matching:</strong> Footage that ends up in evidence databases can be run against facial recognition systems, identifying bystanders as well as participants.</li>
</ul>

<h2>Separate What You Record from What's Visible</h2>
<p><a href="https://apps.apple.com/app/id6759871587">Stash</a> lets you move protest footage into an AES-256 encrypted vault immediately after recording, disguised behind a calculator, fitness tracker, or music player interface. If your phone is checked or seized, the footage is not visible through the standard camera roll.</p>

<h3>During the Protest</h3>
<p>Import recordings into the vault as soon as it's safe to do so, rather than leaving them in your camera roll where a quick phone check would reveal them immediately.</p>

<h3>If Your Phone Is Confiscated</h3>
<p>Encrypted vault files remain unreadable without your passcode, even if the device itself is unlocked by other means. A decoy vault can also present harmless content if you're pressured to demonstrate there's "nothing on your phone."</p>

<h3>After the Fact: Preserving Evidence Safely</h3>
<p>If your footage documents police misconduct that you may need later, keeping it encrypted and on-device — rather than posted publicly right away — protects it from both deletion pressure and premature exposure while you decide how and when to share it, including with legal counsel or civil liberties organizations.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "journalist-source-protection-iphone": {
    slug: "journalist-source-protection-iphone",
    title: "Journalist Source Protection on iPhone — Keep Files Off the Grid",
    description:
      "Reporter's privilege doesn't stop the government from subpoenaing your devices or cloud accounts. Here's how journalists can keep source documents and communications off any server that can be reached by legal process.",
    date: "2026-09-06",
    content: `
<p>Reporter's privilege — the legal principle that journalists can protect confidential sources — varies enormously by jurisdiction and offers far less protection than most reporters assume. The U.S. has no federal shield law, and Department of Justice guidelines restricting subpoenas of journalists have been tightened and loosened by different administrations. Cases involving the seizure of reporters' phone records and emails, including well-documented incidents at major news organizations, show that the government has repeatedly gone directly to third-party providers rather than the journalist, sidestepping privilege arguments entirely.</p>

<h2>Where Source Protection Actually Breaks Down</h2>
<ul>
  <li><strong>Third-party records:</strong> Subpoenas to cloud providers, telecom carriers, or email hosts don't require notifying the journalist first, and can be filed under seal.</li>
  <li><strong>Device seizure at borders:</strong> International reporting trips carry the added exposure of warrantless border device searches, which can capture source documents stored on the device.</li>
  <li><strong>Metadata over content:</strong> Even without reading message content, call and location metadata alone can reveal a source relationship — this has been the basis of several documented leak investigations.</li>
  <li><strong>Newsroom cloud backups:</strong> Shared drives and cloud-synced note-taking apps used across a newsroom widen the number of accounts a subpoena could realistically reach.</li>
</ul>

<h2>Building a File Layer with No Legal Reach</h2>
<p><a href="https://apps.apple.com/app/id6759871587">Stash</a> stores documents, recordings, and notes with AES-256 encryption entirely on-device, with zero cloud sync. There is no server-side copy for a subpoena to target, because nothing is ever transmitted off the phone.</p>

<h3>Source Documents and Leaked Materials</h3>
<p>Import sensitive documents directly into the vault rather than leaving them in Files or Photos, where they'd sync to iCloud by default and become discoverable through a warrant served on Apple rather than on you.</p>

<h3>Interview Recordings and Notes</h3>
<p>Voice memos and typed notes containing source-identifying details can be stored inside the vault instead of the default Voice Memos or Notes apps, both of which sync to iCloud unless specifically configured not to.</p>

<h3>A Disguised Interface for Field Reporting</h3>
<p>When working in hostile press environments or crossing borders for a story, Stash's calculator, fitness, or music player disguise means the vault doesn't visibly exist to anyone doing a casual phone check.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "phone-seized-by-police-protect-files": {
    slug: "phone-seized-by-police-protect-files",
    title: "What Happens If Police Seize Your Phone? How to Protect Your Files",
    description:
      "Under Riley v. California, police generally need a warrant to search your phone's contents. Here's what actually happens after a seizure, and how to make sure your private files stay unreadable either way.",
    date: "2026-09-06",
    content: `
<p>The 2014 Supreme Court decision Riley v. California established that police generally need a warrant to search the digital contents of a phone seized during an arrest — a landmark recognition that phones contain "the privacies of life" in a way a wallet or bag does not. But a warrant requirement is not the same as no search. Once a warrant is obtained, or in exigent circumstances where courts have allowed warrantless searches, the device can be forensically examined using tools like Cellebrite or GrayKey that extract data far beyond what's visible on the lock screen.</p>

<h2>What Actually Happens After Seizure</h2>
<ul>
  <li><strong>Immediate lockdown:</strong> Once in police custody, a phone is typically placed in a Faraday bag to prevent remote wipe and preserve evidence.</li>
  <li><strong>Warrant application:</strong> Officers request a warrant specifically authorizing a device search, though timelines for this vary widely and devices are sometimes held for weeks.</li>
  <li><strong>Forensic extraction:</strong> Specialized hardware can attempt to bypass lock screens and pull data directly from storage, including deleted files in some cases.</li>
  <li><strong>What's typically recoverable:</strong> Anything visible in standard apps — Photos, Messages, Notes, Files — is the first target, along with app data that isn't independently encrypted.</li>
</ul>

<h2>The Layer That Survives Extraction</h2>
<p>Forensic tools can often bypass a lock screen, but they cannot break properly implemented AES-256 encryption without the correct key. <a href="https://apps.apple.com/app/id6759871587">Stash</a> encrypts every file with a key derived from its own separate passcode — distinct from your device passcode — so even a successfully unlocked phone does not expose vault contents.</p>

<h3>Files That Never Appear in a Standard Extraction</h3>
<p>Because Stash stores files in its own encrypted container rather than through the Photos or Files app, a forensic scan of your visible media libraries will not surface anything stored in the vault.</p>

<h3>Disguise as a First Line of Defense</h3>
<p>An officer manually reviewing app icons sees a calculator, fitness tracker, or music player — nothing that reads as a vault requiring further investigation, reducing the chance the app is even flagged for deeper extraction attempts.</p>

<h3>A Decoy Vault for High-Pressure Moments</h3>
<p>If you are asked directly to unlock a specific app, a separate decoy passcode opens a vault populated with only harmless content, keeping your real files inaccessible without lying about the app's existence.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "hide-notes-documents-from-surveillance": {
    slug: "hide-notes-documents-from-surveillance",
    title: "How to Hide Notes and Documents from Surveillance",
    description:
      "Notes and Files sync quietly to iCloud by default, making personal writing and sensitive documents reachable through the same legal process as photos. Here's how to keep text-based files genuinely private.",
    date: "2026-09-06",
    content: `
<p>Photos get most of the privacy attention, but notes, PDFs, and documents are just as exposed — and often more revealing. A journal entry, a legal document, a financial record, or a set of personal writings can say more about you than a photo ever could, and by default, the Notes and Files apps on iPhone sync everything to iCloud the same way Photos does.</p>

<h2>Why Text-Based Files Are Just as Exposed</h2>
<ul>
  <li><strong>iCloud sync by default:</strong> Notes and Files both sync automatically unless you've specifically disabled it in Settings, mirroring content to Apple's servers.</li>
  <li><strong>Locked Notes isn't real encryption at rest for sync:</strong> Apple's "Lock Note" feature adds a password prompt, but locked notes still sync through iCloud and remain within the same legal reach as unlocked ones.</li>
  <li><strong>Search indexing:</strong> Spotlight and Siri Suggestions can surface note content in ways users don't expect, even from notes intended to be private.</li>
  <li><strong>Same subpoena exposure as photos:</strong> A warrant served on Apple for iCloud content typically covers the full range of synced data, not just images.</li>
</ul>

<h2>An Encrypted Container Built for Any File Type</h2>
<p><a href="https://apps.apple.com/app/id6759871587">Stash</a> isn't limited to photos and videos — it stores any file type, including PDFs, Word documents, spreadsheets, and plain text, all with AES-256 encryption and zero cloud sync.</p>

<h3>Journaling and Personal Writing</h3>
<p>Rather than using the default Notes app, sensitive journal entries can be written as text files and imported directly into Stash, keeping them off iCloud entirely from the moment they're created.</p>

<h3>Legal, Medical, and Financial Documents</h3>
<p>Documents that could be individually damaging if disclosed — legal filings, medical records, immigration paperwork — can be scanned or imported directly into the vault rather than stored in the default Files app, where iCloud Drive sync would otherwise mirror them externally.</p>

<h3>A Private Space That Doesn't Look Like One</h3>
<p>Because Stash disguises itself as a calculator, fitness tracker, or music player, the fact that you're storing documents at all isn't visible from your home screen, unlike a labeled "Secure Notes" or "Private Documents" app icon.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "apple-scans-photos-privacy-risk": {
    slug: "apple-scans-photos-privacy-risk",
    title: "Apple Scans Your Photos — What That Means for Privacy",
    description:
      "Apple has repeatedly proposed and paused on-device scanning of your photo library. Here's what's actually being scanned today, what was proposed, and how to keep your library outside any scanning system entirely.",
    date: "2026-09-06",
    content: `
<p>In 2021, Apple announced plans for on-device CSAM (child sexual abuse material) detection that would scan photos before they uploaded to iCloud, comparing them against a hashed database. After sustained criticism from security researchers, the Electronic Frontier Foundation, and its own employees, Apple paused the rollout — but the underlying tension it exposed hasn't gone away. Governments in the UK, EU, and elsewhere have continued pushing for mandatory scanning obligations, and Apple has separately faced a lawsuit alleging it failed to implement adequate CSAM protections at all, showing the pressure runs in both directions.</p>

<h2>What Is and Isn't Being Scanned Today</h2>
<ul>
  <li><strong>iCloud Mail:</strong> Apple has scanned iCloud Mail attachments for known CSAM hashes for years, a practice common across major email providers.</li>
  <li><strong>The paused on-device proposal:</strong> The 2021 plan would have scanned photos before iCloud upload using on-device hash matching, a technical approach privacy researchers warned could be expanded to scan for other content categories entirely, not just CSAM.</li>
  <li><strong>Communication Safety features:</strong> A separate, opt-in feature for child accounts scans for nudity in Messages — different from the paused library-wide scanning proposal, but part of the same broader trend toward on-device content analysis.</li>
  <li><strong>The "slippery slope" concern:</strong> Security researchers, including those at Princeton, published research demonstrating that CSAM-style scanning infrastructure could be repurposed by governments to scan for other content — political material, protest documentation, or anything else a government decides to add to the hash list.</li>
</ul>

<h2>The Only Way to Guarantee You're Not in Any Scanning Pipeline</h2>
<p>Any scanning system, whether server-side or on-device, requires your content to pass through it at some point — typically at upload to a cloud service. <a href="https://apps.apple.com/app/id6759871587">Stash</a> removes that pathway entirely: files stay encrypted on your device and are never uploaded anywhere, meaning they never enter a pipeline that could be scanned, hashed, or matched against any database.</p>

<h3>Photos That Never Reach iCloud</h3>
<p>Because scanning proposals have historically been tied to the iCloud upload process, keeping photos entirely local and out of iCloud sidesteps that pipeline by design, not as a workaround.</p>

<h3>An Architecture With No Scanning Point to Add</h3>
<p>Stash has no server component where a scanning feature could be introduced later, by policy change or legal mandate. There's no upload step for a scan to attach to.</p>

<h3>Why This Matters Regardless of Your Opinion on CSAM Detection</h3>
<p>Whatever you think about the specific goal of CSAM scanning, the infrastructure question is separate: once a device has scanning capability built in, expanding what it scans for is a policy decision, not a technical one. Keeping personal files off any synced system avoids that question altogether.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "encrypted-file-vault-no-backdoor": {
    slug: "encrypted-file-vault-no-backdoor",
    title: "Encrypted File Vault with No Backdoor — Why It Matters",
    description:
      "Governments have pushed for encryption backdoors for decades, from the Clipper Chip to the UK's Investigatory Powers Act. Here's why a backdoor for law enforcement is a backdoor for everyone, and how to avoid apps that have one.",
    date: "2026-09-06",
    content: `
<p>The debate over encryption backdoors is one of the longest-running fights in tech policy. The U.S. government's 1993 "Clipper Chip" proposal, which would have required a government-held key for all encrypted communications, was defeated by public backlash and cryptographic research demonstrating it was insecure. The same argument resurfaces in nearly identical form every few years — most recently in the UK's Investigatory Powers Act, which has been used to demand that Apple build a backdoor into iCloud's Advanced Data Protection, and in ongoing EU "Chat Control" proposals targeting encrypted messaging.</p>

<h2>Why Security Experts Say a Backdoor Can't Be Selective</h2>
<ul>
  <li><strong>Math doesn't discriminate:</strong> An encryption weakness built for "authorized" law enforcement access is mathematically the same weakness a hacker, foreign intelligence service, or corrupt insider could exploit.</li>
  <li><strong>Real-world precedent:</strong> The 2016 Apple–FBI case ended without Apple building a backdoor, largely because security researchers, and Apple itself, argued that any bypass mechanism could not be limited to a single device or a single request.</li>
  <li><strong>Apple's actual response to the UK order:</strong> Rather than build a backdoor, Apple withdrew Advanced Data Protection (its opt-in end-to-end iCloud encryption) for UK users entirely in 2025, illustrating that "compromise" solutions to backdoor demands are rarely partial.</li>
  <li><strong>Global reach of local laws:</strong> A backdoor mandated by one country's law can end up affecting users worldwide if it's built into a global product.</li>
</ul>

<h2>An App With No Door to Put a Backdoor In</h2>
<p>The strongest version of "no backdoor" isn't a promise — it's an architecture that makes one structurally impossible. <a href="https://apps.apple.com/app/id6759871587">Stash</a> has no server, no remote access mechanism, and no key-escrow system of any kind. Files are encrypted with AES-256 using a key derived from your own passcode, generated and used entirely on your device.</p>

<h3>What "No Remote Access" Actually Means</h3>
<p>There is no admin panel, no account recovery system that could double as an access point, and no support mechanism that involves the developer touching your files. If you lose your passcode, there is no backdoor for Stash to use to recover it either — the same design that keeps a government out keeps everyone out, including the developer.</p>

<h3>Auditing Any App's Backdoor Risk</h3>
<p>Before trusting any vault app, check whether it requires an account, whether it has a "forgot password" recovery flow that doesn't require your original passcode, and whether its privacy policy mentions any conditions under which the company can access your data. Each of those is a potential access point a true zero-knowledge design would not have.</p>

<h3>Why This Protects You Even If You Trust Current Law</h3>
<p>Laws change, administrations change, and a backdoor built for today's stated purpose remains available for tomorrow's different purpose. An architecture with no backdoor at all removes that uncertainty permanently.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },

  "digital-privacy-rights-what-you-can-do": {
    slug: "digital-privacy-rights-what-you-can-do",
    title: "Your Digital Privacy Rights — What You Can Actually Do",
    description:
      "The Fourth Amendment, Riley v. California, and the border search exception define very different rules depending on where you are. Here's a practical breakdown of what protections you actually have, and where they end.",
    date: "2026-09-06",
    content: `
<p>Digital privacy law in the United States is a patchwork of court decisions, each addressing a narrow slice of technology, often years behind the technology itself. Knowing which rule applies in which situation is the difference between assuming you're protected and actually being protected.</p>

<h2>What the Law Currently Protects</h2>
<ul>
  <li><strong>Riley v. California (2014):</strong> Police generally need a warrant to search the digital contents of a phone seized during an arrest, recognizing phones as fundamentally different from physical containers.</li>
  <li><strong>Carpenter v. United States (2018):</strong> Extended Fourth Amendment protection to historical cell-site location data, requiring a warrant for law enforcement to obtain records of your movements from your carrier.</li>
  <li><strong>Fifth Amendment and passcodes:</strong> Courts remain split on whether you can be compelled to provide a passcode versus a biometric unlock (Face ID or Touch ID), with several rulings treating biometrics as less protected than a memorized passcode.</li>
</ul>

<h2>Where Those Protections Stop</h2>
<ul>
  <li><strong>The border search exception:</strong> None of the above protections apply at international borders and ports of entry, where device searches can occur without a warrant or individualized suspicion.</li>
  <li><strong>The third-party doctrine:</strong> Data voluntarily stored with a company — including iCloud backups — has historically received weaker protection than data on your device, since the doctrine holds you've already shared it with a third party.</li>
  <li><strong>National security process:</strong> National Security Letters and FISA court orders operate under different, often secret standards, frequently paired with gag orders preventing disclosure.</li>
  <li><strong>Jurisdiction matters enormously:</strong> Protections described above are U.S.-specific; other countries have entirely different frameworks, and some offer far less protection for device searches or cloud data requests.</li>
</ul>

<h2>What You Can Actually Control</h2>
<p>Law defines what the government can compel from a third party or seize from your device. It has no bearing on data that was never created in a reachable form in the first place. <a href="https://apps.apple.com/app/id6759871587">Stash</a> gives you that control directly: AES-256 encryption applied entirely on-device, with no cloud sync, no account system, and no server for any legal process to target.</p>

<h3>A Practical Starting Point</h3>
<p>Review what's currently syncing to iCloud in Settings, move anything genuinely sensitive into an on-device encrypted vault, and disable iCloud sync for that content going forward. This single change closes the most common exposure point — the one that doesn't require a warrant against you personally, just a request to a company you've already trusted with the data.</p>

<h3>Disguise as a Practical, Not Just Legal, Layer</h3>
<p>Legal rights are enforced after the fact, often in court, often after your data has already been seen. Stash's disguise modes — calculator, fitness tracker, music player — combined with a decoy vault, add a practical layer that prevents the situation from arising in the first place.</p>

<h3>Know Your Rights, but Don't Rely on Them Alone</h3>
<p>Organizations like the Electronic Frontier Foundation and the ACLU publish detailed, regularly updated guides on device search rights for specific situations — protests, border crossings, traffic stops. Pairing that legal knowledge with genuine technical protection is more resilient than either alone.</p>

<p><a href="https://apps.apple.com/app/id6759871587">Download Stash</a> from the App Store</p>
`,
  },
};
