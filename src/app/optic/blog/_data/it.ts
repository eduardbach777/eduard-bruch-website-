import type { ArticleSet } from "./index";

export const itArticles: ArticleSet = {
  "copy-text-from-image-mac": {
    slug: "copy-text-from-image-mac",
    title: "Come copiare testo da un'immagine su Mac",
    description: "Hai del testo bloccato dentro un'immagine — una foto di una lavagna, un documento scansionato, un meme — e nessun modo di selezionarlo. Ecco come estrarlo istantaneamente.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>Someone sends you a photo of a whiteboard covered in meeting notes. Or you screenshot a recipe from an Instagram story. The text is right there on your screen, but you can't select it, can't copy it, can't paste it anywhere useful. Your only option is to retype every word manually — and hope you don't introduce typos along the way.</p>

<h2>Why You Can't Just Select Text in an Image</h2>
<p>Images are pixels, not characters. Your Mac sees a JPEG or PNG as a grid of colored dots, not as words and sentences. Preview lets you annotate images but won't extract their text. Quick Look shows you the image but offers no copy functionality for the words inside it. Even dragging the image into Notes or Pages just embeds the picture — the text stays locked behind pixels.</p>
<p>Apple's Live Text feature works in some contexts, but it requires compatible apps, specific image formats, and doesn't cover every scenario. If the text sits inside a browser tab, a design mockup, or a video frame, Live Text often can't reach it.</p>

<h2>Drag to Select, Copy Instantly with Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lives in your menu bar and lets you draw a selection rectangle over any part of your screen. It reads the characters inside that rectangle instantly — no matter whether the source is an image file, a web page, a PDF, or anything else visible on your display.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic menu bar OCR tool for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Photos and Screenshots</h3>
<p>Open the image in any app — Preview, Photos, a browser, Slack — and drag a selection over the text. Optic recognizes the characters and copies them to your clipboard. Works with handwritten notes, printed documents, signs in photographs, and text overlaid on graphics.</p>

<h3>Design Files and Mockups</h3>
<p>Reviewing a Figma export or a flat design comp? Drag over the text elements to extract copy without asking the designer to send it separately. Useful for QA, translation workflows, and content audits.</p>

<h3>Capture History</h3>
<p>Every capture is saved in the menu bar, so you can go back and grab text you extracted earlier without re-scanning. No need to paste into a scratch document just to hold onto it.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "screen-ocr-mac": {
    slug: "screen-ocr-mac",
    title: "OCR dello schermo per Mac — Seleziona e copia qualsiasi testo",
    description: "Testo sullo schermo che non puoi selezionare o copiare — all'interno di immagini, video, dialoghi o interfacce bloccate. Uno strumento OCR a livello di schermo risolve questo.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You're staring at text on your Mac screen that refuses to be selected. Maybe it's baked into a video tutorial, rendered inside a canvas element on a web page, or locked behind a non-interactive UI. The words are right there, clearly legible, but your cursor treats them like they don't exist.</p>

<h2>The Gap Between Seeing and Selecting</h2>
<p>macOS provides text selection in native apps and standard web content, but the modern screen is full of exceptions. Text rendered as graphics in web apps, subtitles burned into video players, code displayed in image-based documentation, terminal output in a remote desktop session — none of these respond to a normal click-and-drag. You end up retyping what's already in front of you, which is slow and error-prone.</p>
<p>Traditional OCR tools require you to save a file first, then import it, then process it. That workflow breaks the moment your text source is a live screen — a video call, a streaming dashboard, or an app with no export option.</p>

<h2>Screen-Level OCR with Optic</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> performs OCR directly on your screen. It sits in the menu bar, and when you activate it, you draw a rectangle over any visible text. The characters are recognized instantly and placed on your clipboard — no file saving, no importing, no waiting.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic performing screen OCR on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Any Source, One Gesture</h3>
<p>It doesn't matter what app the text lives in. A Zoom call with a shared slide, a YouTube tutorial showing terminal commands, a Retool dashboard with non-selectable labels — if you can see it, Optic can read it. One shortcut, one drag, and the text is yours.</p>

<h3>Built-In History</h3>
<p>Every OCR capture is logged in the menu bar dropdown. Scroll back through previous captures to retrieve text you grabbed minutes or hours ago without scanning again.</p>

<h3>Text-to-Speech</h3>
<p>Need to hear the captured text rather than read it? Optic includes text-to-speech for any capture, which is useful for proofreading extracted content or for accessibility.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "extract-text-from-screenshot-mac": {
    slug: "extract-text-from-screenshot-mac",
    title: "Come estrarre testo da uno screenshot su Mac",
    description: "Hai acquisito uno screenshot per salvare del testo, ma ora hai bisogno di quel testo come caratteri effettivi che puoi modificare e cercare. Riscriverlo annulla lo scopo.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>The screenshot was supposed to be a shortcut. You grabbed a quick capture of an important email, a shipping confirmation, a set of instructions — thinking you'd saved the information. But now you need to paste that tracking number into a form, or search for a phrase from those instructions, and the screenshot is just a flat image. The text inside it might as well be a drawing.</p>

<h2>Screenshots Capture Pixels, Not Text</h2>
<p>When you press Cmd+Shift+4 on your Mac, you get a pixel-perfect image of what was on screen. But the text in that image loses all its structure. You can't select individual words, can't copy a paragraph, can't even search for a phrase. The screenshot is a visual record, not a textual one.</p>
<p>You could open the screenshot in Preview and try Apple's markup tools, but those are for annotation — drawing on top of the image — not for extracting the text within it. Some users try pasting screenshots into Google Docs hoping for automatic OCR, but that only works for uploaded images in Drive, not for pasted screenshots, and results are inconsistent.</p>

<h2>Extract Text Directly from the Screen</h2>
<p>Instead of screenshotting first and then struggling to extract text from the image, <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lets you skip the screenshot entirely. Activate it from the menu bar, drag a selection over the text you need, and the recognized characters go straight to your clipboard.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Already Have the Screenshot?</h3>
<p>If you already took the screenshot, open it in any viewer — Preview, Quick Look, even a browser — and drag Optic's selection over the text in the displayed image. It reads characters from anything visible on your screen, including images you already have open.</p>

<h3>Capture History Replaces Screenshot Hoarding</h3>
<p>Many people take screenshots specifically to remember text — confirmation numbers, addresses, error codes. Optic's capture history stores every text extraction in the menu bar, giving you a searchable log of captured text. No more scrolling through a folder of screenshots to find one string.</p>

<h3>Bulk Extraction</h3>
<p>Need text from multiple areas of a long screenshot? Make several quick selections in a row. Each one is saved to your history, so you can grab everything you need and paste the pieces wherever they belong.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-text-non-selectable-pdf-mac": {
    slug: "copy-text-non-selectable-pdf-mac",
    title: "Come copiare testo da un PDF non selezionabile su Mac",
    description: "Alcuni PDF sembrano documenti normali ma non ti permettono di selezionare una sola parola. Il testo è lì visivamente, ma è intrappolato come uno strato di immagine piatta.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You open a PDF expecting to copy a paragraph, but when you click and drag, nothing highlights. The cursor slides across the page as if the text isn't there. You try Cmd+A to select all — nothing. The document looks perfectly readable, but it's effectively a picture of text, not actual text.</p>

<h2>Why Some PDFs Won't Let You Select Text</h2>
<p>This happens with scanned documents, government forms, older academic papers, and PDFs exported from certain design tools. The pages were created from images — either scanned from paper or flattened during export — so the PDF contains raster layers rather than text layers. Preview, Adobe Reader, and every other PDF viewer see the same thing: pixels arranged to look like letters, with no underlying character data to select.</p>
<p>Some PDFs also have copy protection enabled. The creator set a permission flag that prevents text selection, even though the text layer exists. Standard PDF readers respect this flag, leaving you unable to copy anything.</p>

<h2>Read the Text Right Off the Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> sidesteps both problems. Because it reads characters from your screen rather than from the file's internal structure, it doesn't matter whether the PDF has a text layer, is a scanned image, or has copy restrictions. If you can see the text on your display, Optic can read it.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a non-selectable PDF on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Scanned Documents</h3>
<p>Open the scanned PDF in Preview, zoom to a comfortable reading size, activate Optic, and drag over the text you need. It recognizes printed characters from the scan and copies them as editable text. Works with old typewritten documents, scanned receipts, and photographed pages.</p>

<h3>Protected PDFs</h3>
<p>For PDFs where the text layer exists but selection is locked, Optic reads the rendered output on screen. You get the same text without fighting permission flags or hunting for PDF-unlocking tools.</p>

<h3>Multi-Page Extraction</h3>
<p>Scroll through the document and make selections on each page. Every capture is saved in Optic's menu bar history, so you can work through a long scanned document page by page and collect all the text you need.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "qr-code-reader-mac": {
    slug: "qr-code-reader-mac",
    title: "Lettore di codici QR per Mac — Scansiona dallo schermo",
    description: "Un codice QR appare sullo schermo del tuo Mac — in un'email, un documento, una pagina web — e il tuo unico scanner è il telefono in tasca. C'è un modo più veloce.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>Someone shares a QR code in a Slack message. Or a PDF includes one linking to a resource. Or a web page displays a QR code for app download. The code is right there on your Mac screen, but to scan it, you're expected to pull out your phone, open the camera, point it at your monitor, wait for it to focus, and then tap the link — which opens on your phone instead of the computer where you actually need it.</p>

<h2>Phones Scan the Real World, Not Screens</h2>
<p>QR code scanning was designed for phone cameras pointed at physical objects. Using a phone camera to scan your own computer screen is a clumsy workaround: you deal with screen glare, the camera struggles to focus at close range, and the resulting link opens on the wrong device. If you want the URL on your Mac, you then have to AirDrop it or send yourself a message — all to open a link that was already on your Mac.</p>
<p>macOS has no built-in QR code reader for on-screen content. You can't right-click a QR code in Safari and choose "read code." Preview won't decode one from an open image. There's simply no native path from QR code on screen to decoded content on the same machine.</p>

<h2>Scan QR Codes Directly from Your Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> includes a QR code reader that works on anything visible on your display. Activate it from the menu bar, drag a selection around the QR code, and the decoded content — URL, text, contact info, Wi-Fi credentials — is immediately available on your Mac.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from the Mac screen" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>QR Codes in Documents and Emails</h3>
<p>Event tickets, boarding passes, payment confirmations, and setup guides frequently include QR codes. Drag a selection over the code in your email client or PDF viewer and get the decoded content without switching devices.</p>

<h3>Developer and IT Use Cases</h3>
<p>Two-factor authentication setup pages show QR codes for TOTP apps. API documentation sometimes encodes endpoints or keys in QR format. Optic lets you decode these directly, keeping your workflow on one screen.</p>

<h3>Everything Stays in History</h3>
<p>Decoded QR content is saved alongside your text captures in the menu bar history. Need that Wi-Fi password from a QR code you scanned yesterday? Scroll back through your captures instead of scanning again.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "ocr-text-from-video-mac": {
    slug: "ocr-text-from-video-mac",
    title: "Come eseguire OCR del testo da un video o stream su Mac",
    description: "Un tutorial mostra un comando di terminale, uno stream lampeggia un URL, una lezione mostra una formula — e non puoi mettere in pausa abbastanza velocemente per digitare tutto.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You're watching a coding tutorial and the instructor pastes a long terminal command on screen. Or a live stream briefly shows a discount code. Or a recorded lecture displays a complex equation. The text is clearly visible for a few seconds, but there's no way to select it from the video player. You pause, squint, and start typing — hoping you catch every character before the content moves on.</p>

<h2>Video Players Don't Expose Text</h2>
<p>Whether you're watching in Safari, Chrome, VLC, QuickTime, or any streaming app, the video frame is a rendered image. There's no text layer to interact with. Subtitles might be selectable in some players, but on-screen text that's part of the video content — code, URLs, titles, data — is permanently baked into the pixel stream.</p>
<p>Pausing helps, but you still have to manually transcribe what you see. For long commands, URLs with query parameters, or technical content with special characters, manual transcription is slow and unreliable. One wrong character in a terminal command or URL and it fails silently.</p>

<h2>Capture Text from Any Video Frame</h2>
<p>With <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a>, you pause the video (or don't — it works on moving content too), activate the tool from your menu bar, and drag a selection over the text visible in the video frame. The characters are recognized and copied to your clipboard instantly.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text from a video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Coding Tutorials</h3>
<p>Terminal commands, configuration snippets, file paths, and package names shown in video tutorials — grab them with one selection instead of pausing and retyping. Especially valuable for long install commands or multi-line configs.</p>

<h3>Live Streams and Webinars</h3>
<p>Presenters often flash URLs, promo codes, or contact details on screen for just a few seconds. Optic captures whatever's visible at the moment you select it, so you don't need lightning-fast typing to catch ephemeral information.</p>

<h3>Lectures and Presentations</h3>
<p>Recorded lectures display formulas, citations, and references that would take significant effort to retype. Drag over the relevant section and paste the extracted text directly into your notes.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-error-message-from-dialog-mac": {
    slug: "copy-error-message-from-dialog-mac",
    title: "Come copiare i messaggi di errore dai dialoghi su Mac",
    description: "Una finestra di dialogo di errore appare con un messaggio tecnico e nessun pulsante di copia. Ti ritrovi a riscrivere codici di errore senza senso solo per cercare una soluzione.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>An app crashes and a dialog appears with a cryptic error message: a code, a file path, maybe a stack trace reference. You need to Google that exact string to find a fix. But the dialog has two buttons — OK and Cancel — and no way to select or copy the text. So you grab your phone, take a photo of the screen, and squint at it while retyping the error into a search bar. Or you start scribbling it on a sticky note, character by character.</p>

<h2>macOS Dialogs Rarely Let You Copy Text</h2>
<p>Most error dialogs, alert windows, and system prompts on macOS render their text as static labels. You can't click into them, can't highlight a portion, can't right-click for a copy option. This is true for native macOS alerts, third-party app dialogs, installer error windows, and crash reporters. The more technical and important the error text, the more likely it is trapped in a non-selectable label.</p>
<p>This is especially frustrating for IT support and troubleshooting. You need the exact error text to search for solutions, file a bug report, or communicate with support teams. Paraphrasing an error code — or mistyping one character — leads you to irrelevant results.</p>

<h2>Select the Error Text Right from the Dialog</h2>
<p>When the error dialog appears, keep it open and activate <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> from the menu bar. Drag a selection over the error message text in the dialog. Optic reads the characters and copies them to your clipboard — exact string, exact punctuation, exact capitalization.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an error message from a dialog on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Search for Solutions Instantly</h3>
<p>Paste the exact error string into Google, Stack Overflow, or an Apple support forum. Exact-match searches surface relevant results far more reliably than paraphrased descriptions of what the error said.</p>

<h3>Bug Reports and Support Tickets</h3>
<p>Include the precise error text in bug reports or support emails. Developers and support agents can identify issues much faster with the actual error string instead of a user's interpretation of it.</p>

<h3>Recurring Errors</h3>
<p>Optic saves every capture to its menu bar history. If the same error keeps appearing, you have a timestamped record of each occurrence without needing to screenshot every dialog.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "mac-live-text-limitations": {
    slug: "mac-live-text-limitations",
    title: "Limitazioni di Live Text su Mac — Cosa non può fare",
    description: "Live Text di Apple funziona in pochi posti ma fallisce silenziosamente in molti altri. Se fai affidamento su di esso per OCR dello schermo, colpirai muri velocemente.",
    date: "2026-09-06",
    readTime: "5 min di lettura",
    content: `
<p>Apple introduced Live Text as a system-level feature that recognizes text in images. In theory, it sounds like it solves the "can't select text in images" problem. In practice, it works in a narrow set of scenarios and silently does nothing in many situations where you actually need it.</p>

<h2>Where Live Text Falls Short</h2>
<p>Live Text works inside Photos, Preview, Safari (on some images), and Quick Look. That's roughly where its reach ends. Here are the common situations where it can't help:</p>
<p><strong>Video frames.</strong> Live Text does not operate on video content. If text appears in a YouTube video, a Zoom screen share, a QuickTime recording, or any streaming player, Live Text won't recognize it. You're back to manual transcription.</p>
<p><strong>App interfaces and dialogs.</strong> Text rendered as labels in app UIs, error dialogs, menu items, and custom controls is invisible to Live Text. It only activates on embedded images, not on arbitrary screen content.</p>
<p><strong>Web apps with canvas or SVG text.</strong> Many modern web apps render text using canvas elements or SVG — dashboards, data tools, design apps. Live Text doesn't reach into these rendering contexts.</p>
<p><strong>Non-selectable PDFs.</strong> While Preview can sometimes recognize text in image-based PDFs, the results are inconsistent and depend on scan quality, page complexity, and PDF structure. Many scanned documents simply show no Live Text interaction at all.</p>
<p><strong>Copy-protected content.</strong> Live Text respects DRM and copy restrictions. If an app or document has disabled text selection, Live Text follows suit.</p>
<p><strong>No capture history.</strong> Live Text has no memory. Every recognition is ephemeral. If you close the image or navigate away, the recognized text is gone. There's no log or history of what you've extracted.</p>

<h2>Screen-Level OCR Without These Limits</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> works at the screen level rather than the file or image level. It reads characters from whatever is visible on your display — any app, any source, any context. Video frames, dialog boxes, web app canvases, locked PDFs, remote desktop sessions — if you can see text, Optic can read it.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Live Text limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>History and Text-to-Speech</h3>
<p>Unlike Live Text, Optic saves every capture in a persistent history accessible from the menu bar. It also includes text-to-speech, letting you hear captured text read aloud — useful for proofreading or accessibility.</p>

<h3>QR Code Scanning</h3>
<p>Live Text can read QR codes in some image contexts, but not from video, screen shares, or arbitrary app windows. Optic scans QR codes from anywhere on your screen and decodes them instantly.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "textsniper-alternative-mac": {
    slug: "textsniper-alternative-mac",
    title: "Alternativa TextSniper per Mac",
    description: "Stai cercando uno strumento OCR dello schermo che vada oltre la cattura di testo di base — con scansione di codici QR, cronologia di cattura e sintesi vocale integrata.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>TextSniper popularized the idea of screen-level OCR on Mac: draw a rectangle, grab the text. It's a simple concept that solves a real problem. But if you've used it and found yourself wanting more — a history of past captures, QR code support, or the ability to hear extracted text read aloud — you've likely looked for alternatives.</p>

<h2>What's Missing in Basic Screen OCR</h2>
<p>Most screen OCR tools handle the core capture well: activate a shortcut, drag a region, get text on your clipboard. But the workflow around that single action matters just as much.</p>
<p><strong>No capture history.</strong> You extract text, paste it somewhere, and the capture is gone. Ten minutes later you need that same text again, and you have to re-scan. If you forgot to paste immediately, the next thing you copy overwrites it.</p>
<p><strong>No QR code reading.</strong> QR codes on your screen — in emails, documents, web pages — require a separate tool or your phone's camera. A screen capture tool that can decode QR codes saves you from juggling devices.</p>
<p><strong>No text-to-speech.</strong> Sometimes you need to hear text rather than read it — for proofreading, accessibility, or multitasking. Basic OCR tools stop at clipboard output.</p>

<h2>Optic: Screen OCR with the Full Workflow</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> handles the same core OCR capture — drag to select any text on screen from any source — and adds the features that make screen OCR actually useful day to day.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic as a TextSniper alternative for Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Capture History in the Menu Bar</h3>
<p>Every text extraction and QR scan is saved and accessible from the menu bar. Scroll back through previous captures, re-copy something from an hour ago, or review a series of extractions from a research session. No more losing text because you copied something else.</p>

<h3>Built-In QR Code Scanner</h3>
<p>Draw a selection around any QR code visible on your screen and Optic decodes it. URLs, Wi-Fi credentials, contact cards, plain text — whatever the code contains appears immediately, no phone required.</p>

<h3>Text-to-Speech</h3>
<p>Any captured text can be read aloud. Useful for catching OCR errors by ear, for accessibility needs, or for listening to extracted content while you work on something else.</p>

<h3>Menu Bar Native</h3>
<p>Optic lives in the menu bar and stays out of your way until you need it. No dock icon, no main window to manage — just a lightweight tool that's always one click or shortcut away.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-code-from-screenshot-mac": {
    slug: "copy-code-from-screenshot-mac",
    title: "Come copiare il codice da uno screenshot su Mac",
    description: "Un tutorial, un tweet o una documentazione mostra il codice come immagine. Riscriverlo introduce bug. Ecco come estrarlo come testo selezionabile.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>A developer shares a code snippet as a screenshot on Twitter. A tutorial blog post renders its examples as images instead of code blocks. Documentation for an internal tool exists only as screenshots of a terminal. The code is perfectly readable, but it's trapped inside an image — and retyping code from a picture is one of the most reliable ways to introduce invisible bugs.</p>

<h2>Why Retyping Code from Images Fails</h2>
<p>Code is unforgiving about precision. A missing semicolon, a lowercase L confused with the digit 1, a curly brace versus a parenthesis, an en-dash instead of a hyphen — any of these will break your code silently. When you retype from a screenshot, you're doing character-by-character visual parsing at a pace that invites exactly these mistakes.</p>
<p>The problem is widespread. Social media platforms convert code to images for prettier rendering. Older documentation was never migrated from screenshots. Slack and Teams messages with code often get screenshotted and forwarded. Internal wikis accumulate years of pasted terminal screenshots that no one has transcribed.</p>

<h2>Extract Code Directly from the Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> reads the code characters right off your screen. Open the screenshot or the page containing the code image, activate Optic from the menu bar, and drag a selection over the code. The extracted text goes to your clipboard, ready to paste into your editor or terminal.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminal Commands</h3>
<p>Long install commands, Docker run statements, curl requests with multiple flags — these are commonly shared as screenshots. One drag with Optic extracts the entire command, preserving special characters, flags, and paths that are easy to mistype.</p>

<h3>Code Snippets from Social Media</h3>
<p>Twitter, LinkedIn, and Instagram posts often render code as images using tools like Carbon or Ray.so. Optic extracts the code from these styled screenshots just as easily as from plain terminal output.</p>

<h3>Multi-Line Extraction</h3>
<p>Select a block of code spanning multiple lines and Optic preserves the line structure. Paste it into your editor and the code maintains its shape — no manual reformatting needed. Each capture is saved in your menu bar history, so you can extract several snippets from a tutorial and paste them one by one.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "read-text-aloud-from-screen-mac": {
    slug: "read-text-aloud-from-screen-mac",
    title: "Leggi il testo ad alta voce da qualsiasi contenuto dello schermo su Mac",
    description: "Vuoi ascoltare il testo sullo schermo letto ad alta voce — da un'immagine, un documento bloccato, un fotogramma video — ma il discorso incorporato del tuo Mac funziona solo su testo selezionabile.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>macOS has a built-in "Speak Selection" feature: highlight text, right-click, and choose "Speech." It works well — when the text is selectable. But the moment you need text read aloud from an image, a scanned PDF, a video frame, or a non-interactive UI element, the speech feature has nothing to work with. You can't speak what you can't select.</p>

<h2>The Gap Between Screen Content and Speech</h2>
<p>Many situations call for having screen text read aloud. Proofreading catches errors your eyes skip. Multitasking benefits from audio — you can listen to extracted content while working on something else. Accessibility needs extend to content that isn't natively selectable. Language learners benefit from hearing unfamiliar text pronounced.</p>
<p>But the built-in speech tools only operate on standard text selections. If the text is in an image, rendered as a graphic in a web app, displayed in a video, or locked inside a scanned document, macOS offers no path from "visible on screen" to "read aloud." You'd need to manually transcribe the text first, which defeats the purpose.</p>

<h2>Select Any Text, Hear It Spoken</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> combines screen-level OCR with text-to-speech. Activate it from the menu bar, drag over any visible text — regardless of its source — and you can have the captured text read aloud. No manual transcription, no dependency on the text being natively selectable.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic reading text aloud from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Proofreading OCR Results</h3>
<p>After extracting text from a scan or image, hearing it read aloud helps you catch OCR errors that look correct on screen. A misread letter or a garbled word becomes obvious when spoken but might slip past visual review.</p>

<h3>Accessibility</h3>
<p>For users who rely on screen readers, content trapped in images and non-selectable formats creates barriers. Optic bridges that gap by converting any visible text into both clipboard text and spoken audio, making previously inaccessible content available.</p>

<h3>Multitasking and Language Learning</h3>
<p>Extract a passage from a document or web page and listen to it while you cook, commute, or exercise. Language learners can hear unfamiliar words pronounced correctly by selecting text in a foreign language and using the speech output.</p>

<h3>Capture History with Speech</h3>
<p>Since every capture is saved in the menu bar history, you can return to a previous extraction and have it read aloud again — useful for reviewing notes or revisiting content from earlier in your session.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "ocr-receipts-mac": {
    slug: "ocr-receipts-mac",
    title: "OCR ricevute su Mac — Estrai il testo da foto di ricevute",
    description: "Hai fotografato una ricevuta per la segnalazione delle spese, ma ora hai bisogno del nome del fornitore, del totale e della data come testo copiabile — non una foto da cui devi riscrivere.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You snap a photo of a lunch receipt because you'll need it for expenses later. Or you receive a scanned receipt via email. The information you need — vendor name, date, itemized totals, tax amounts — is all there in the image, but when it's time to fill out the expense report, you're squinting at a photo and manually typing every line. One transposed digit in the total and your report gets flagged.</p>

<h2>Why Receipt Photos Are So Hard to Work With</h2>
<p>Receipts are among the worst candidates for manual transcription. They use small fonts, inconsistent spacing, and abbreviations. Thermal paper fades quickly, making older receipts even harder to read. And every expense system wants structured data — vendor, date, amount — not a JPEG attachment.</p>
<p>macOS has no built-in tool that extracts text from a receipt photo and puts it on your clipboard. Preview shows you the image. Photos organizes it. Neither of them lets you select the printed text and copy it. Third-party expense scanners exist, but they're heavyweight apps designed for enterprise workflows, not for quickly grabbing a total from a photo.</p>

<h2>Drag Over the Receipt, Get the Text</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> reads text directly from your screen. Open the receipt photo in any viewer — Preview, Quick Look, a browser, even your email client — activate Optic from the menu bar, and drag a selection over the portion of the receipt you need. The recognized characters land on your clipboard, ready to paste into a spreadsheet or expense form.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a receipt photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Expense Reports</h3>
<p>Select the vendor name and total from a receipt image and paste them directly into your expense tracking tool. No retyping, no transposition errors. Grab individual line items or the entire receipt — each capture is saved in your menu bar history for reference.</p>

<h3>Tax and Bookkeeping</h3>
<p>Freelancers and small business owners accumulate receipt photos throughout the year. When tax season arrives, open each receipt image and extract the relevant figures with a single drag. Build your deduction spreadsheet in minutes instead of hours of manual entry.</p>

<h3>Reimbursement Requests</h3>
<p>Need to include exact amounts in a reimbursement email? Extract the total, tax, and date from the receipt photo and paste them into your message. The precise figures from the receipt carry more weight than approximate numbers typed from memory.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-text-from-zoom-screenshare-mac": {
    slug: "copy-text-from-zoom-screenshare-mac",
    title: "Come copiare il testo da una condivisione dello schermo Zoom su Mac",
    description: "Un collega condivide il suo schermo su Zoom mostrando un URL, una configurazione o dati — ma puoi solo guardare, non selezionare o copiare nessuno dei testi che vedi.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You're in a Zoom meeting and a colleague shares their screen. They're walking through a dashboard, showing a configuration file, or demoing an app. On their shared screen you can clearly see URLs, credentials, terminal commands, and data — but the Zoom viewer gives you zero ability to interact with any of it. You can watch, but you can't select. You ask them to paste the link in the chat, they forget, and the meeting moves on.</p>

<h2>Screen Shares Are View-Only by Design</h2>
<p>When someone shares their screen over Zoom, Google Meet, or Microsoft Teams, what you see is a video feed of their display. Your cursor doesn't interact with their content. You can't click into their text editor, can't highlight their terminal output, can't right-click their browser tabs. Everything rendered on the shared screen is a moving image from your Mac's perspective.</p>
<p>This is especially painful in technical meetings. A DevOps engineer shows a Kubernetes config. A PM walks through analytics. A designer presents copy on mockups. The text scrolls past, and your options are: ask them to slow down and dictate, furiously type what you can see, or hope the recording captures it clearly enough to revisit later.</p>

<h2>Capture Text from Any Shared Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> treats the Zoom window like any other part of your screen. Activate it from the menu bar, drag a selection over the text visible in the shared screen, and the recognized characters are copied to your clipboard. It works whether the presenter is showing a browser, a terminal, a spreadsheet, or a slide deck.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic capturing text from a Zoom screen share on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Technical Meetings</h3>
<p>Grab terminal commands, file paths, API endpoints, and config values the moment they appear on the shared screen. No asking the presenter to pause and paste into chat. No retyping from memory after the meeting ends.</p>

<h3>Data and Dashboards</h3>
<p>When a shared screen shows metrics, KPIs, or tabular data, select the numbers directly. Paste them into your own notes or spreadsheet with the exact values that were displayed.</p>

<h3>Capture History as Meeting Notes</h3>
<p>Every extraction is saved in Optic's menu bar history. Make multiple captures throughout the meeting and you'll have a timestamped log of every piece of text you grabbed — functioning as precise meeting notes for the content that mattered most.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "mac-screenshot-to-text": {
    slug: "mac-screenshot-to-text",
    title: "Screenshot di Mac in testo — Estrai parole da qualsiasi cattura",
    description: "Fai screenshot costantemente, ma trasformare quelle catture in testo modificabile e ricercabile richiede ancora di riscrivere tutto quello che vedi.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>Screenshots are the fastest way to capture what's on screen, but they're the slowest way to use the information later. You Cmd+Shift+4 a confirmation number, a recipe, a set of Wi-Fi credentials, or an address — and the moment you need that text in a form, an email, or a document, you're staring at an image and retyping character by character.</p>

<h2>The Screenshot-to-Text Gap</h2>
<p>macOS makes taking screenshots effortless. The keyboard shortcuts are built in, the captures are high quality, and they auto-save to your Desktop or clipboard. But macOS provides no built-in way to turn a screenshot's visible text into actual editable text. The screenshot workflow ends at the image. Everything after that — extracting, copying, pasting the words inside — is entirely manual.</p>
<p>Users who take screenshots as a way to "save text" quickly accumulate a Desktop full of images they can't search, can't index, and can't easily reference. Finding that one confirmation number means scrolling through dozens of captures and visually scanning each one.</p>

<h2>Skip the Screenshot, Capture the Text Directly</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> replaces the screenshot-then-retype workflow with a single action. Instead of capturing an image of the text, activate Optic from the menu bar and drag a selection over the words you need. The OCR engine reads the characters and copies them to your clipboard as editable text — no image saved, no retyping needed.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic converting screen content to text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Already Took the Screenshot?</h3>
<p>No problem. Open your existing screenshot in any viewer and drag Optic's selection over the text inside it. It reads characters from any image displayed on your screen, so your existing screenshot library isn't wasted — it just becomes accessible.</p>

<h3>Searchable Capture History</h3>
<p>Every text extraction is logged in Optic's menu bar history. Instead of a folder of unsearchable images, you get a scrollable list of captured text strings. Need that confirmation number from two days ago? Scroll through your history instead of hunting through screenshot files.</p>

<h3>Faster Than Cmd+Shift+4</h3>
<p>The gesture is nearly identical — activate, drag a rectangle — but the output is immediately useful text instead of a flat image. For anyone who screenshots primarily to save text, this eliminates the entire conversion step.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-serial-number-from-image-mac": {
    slug: "copy-serial-number-from-image-mac",
    title: "Come copiare un numero di serie da un'immagine su Mac",
    description: "Un numero di serie si trova in una foto o scansione — lungo, alfanumerico, impossibile da riscrivere senza errori. Ne hai bisogno come testo copiabile, non pixel.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You need to register a product, file a warranty claim, or contact support — and they want the serial number. The problem: the serial number is on a sticker you photographed, in a PDF invoice, on a screenshot of a settings page, or in an email confirmation with an embedded image. It's a long string of letters and numbers — sometimes 15 or 20 characters — with no pattern to help you remember it. Retyping it means a near-certain chance of getting at least one character wrong.</p>

<h2>Serial Numbers Are Built to Foil Manual Entry</h2>
<p>Serial numbers combine uppercase letters, lowercase letters, and digits in sequences deliberately designed to be unique, not memorable. Characters like O and 0, l and 1, S and 5 look nearly identical in most fonts. A single wrong character means the serial doesn't validate, and you're left wondering which of the 20 characters you misread.</p>
<p>macOS gives you no shortcut here. If the serial number is in a photo or scanned document, you can't select it. If it's in an image embedded in an email, you can't highlight it. You're stuck either retyping carefully and hoping, or zooming in character by character and double-checking each one.</p>

<h2>Drag Over the Serial Number, Copy It Perfectly</h2>
<p>Open the image, scan, or screenshot containing the serial number in any app, then activate <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> from the menu bar. Drag a tight selection around just the serial number string. The OCR engine reads each character and copies the exact text to your clipboard. Paste it into the registration form, the support chat, or your records.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying a serial number from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Product Registration</h3>
<p>New hardware often requires entering a serial number during setup or warranty registration. Photo the label, open it on your Mac, and extract the string with one drag. No squinting, no guessing between O and 0.</p>

<h3>Support and Warranty Claims</h3>
<p>Support agents ask for serial numbers to look up your device or product. Having the exact string on your clipboard means you can paste it into the support chat or email instantly, avoiding back-and-forth over mistyped identifiers.</p>

<h3>Asset Tracking</h3>
<p>IT departments photograph asset tags and serial labels on company hardware. Optic turns those photos into copyable text, making it straightforward to populate inventory spreadsheets without manual transcription of hundreds of serial numbers.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "ocr-handwriting-mac": {
    slug: "ocr-handwriting-mac",
    title: "OCR della grafia su Mac — Converti note scritte a mano in testo",
    description: "Hai fotografato note scritte a mano — da una lavagna, un taccuino o una nota adesiva — e hai bisogno delle parole come testo digitale modificabile.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>The meeting ended twenty minutes ago and you snapped a photo of the whiteboard before someone erased it. Or you've been taking notes by hand in a notebook and now need to email those notes to your team. The words are in the photo, written clearly enough to read, but there's no way to select handwritten text from an image and paste it into a document. So you sit down and start transcribing your own handwriting, word by word.</p>

<h2>Handwriting Lives Outside the Digital Text World</h2>
<p>macOS treats images of handwriting the same as any other image — as pixels with no text layer. Preview can display your whiteboard photo but won't extract words from it. Apple's Live Text can sometimes recognize neat handwriting in Photos, but performance varies wildly with handwriting style, image quality, and angle. Messy but legible handwriting often produces no results at all.</p>
<p>Dedicated handwriting OCR apps exist, but most are iOS-focused or require uploading images to cloud services. If you want to stay on your Mac and work with a photo that's already on your screen, the options are thin.</p>

<h2>Select Handwritten Text from Any Photo</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> performs OCR on whatever is visible on your screen, including handwritten text in photos. Open the photo of your notes in any viewer, activate Optic from the menu bar, and drag a selection over the handwritten area. The recognized text is copied to your clipboard for pasting into emails, documents, or note-taking apps.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing handwriting from a photo on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Whiteboard Captures</h3>
<p>Meeting whiteboards are temporary by nature — someone always needs the space next. Photograph the board, open the photo on your Mac, and extract the written content with Optic. Turn brainstorming sessions, diagrams with labels, and to-do lists into digital text before the whiteboard gets wiped.</p>

<h3>Notebook Pages</h3>
<p>Many people still prefer pen-and-paper for initial thinking but need digital text for sharing and searching. Photograph your notebook page and extract key sections. No need to transcribe an entire page — select just the paragraphs or bullet points you need.</p>

<h3>Sticky Notes and Labels</h3>
<p>Handwritten sticky notes on a monitor, labels on storage boxes, annotations on printed documents — photograph them and extract the text. Especially useful when someone else's handwriting is involved and you'd rather let OCR attempt it than decipher it character by character.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "mac-text-recognition-menu-bar": {
    slug: "mac-text-recognition-menu-bar",
    title: "Riconoscimento del testo dalla barra dei menu di Mac",
    description: "Hai bisogno di un riconoscimento rapido del testo senza aprire un'app completa, importare file o interrompere il tuo flusso di lavoro — solo una presa veloce da qualunque cosa sia sullo schermo.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You're in the middle of something — writing an email, coding, browsing research — and you spot text on your screen that you need to capture. Maybe it's in an image, a video frame, or a non-selectable UI element. The last thing you want is to break your flow by opening a separate OCR application, importing a file, waiting for processing, and then copying the result. You need the text now, without leaving what you're doing.</p>

<h2>Traditional OCR Disrupts Your Workflow</h2>
<p>Most OCR tools are standalone applications with their own windows, file browsers, and processing pipelines. To use them, you save or screenshot the content, switch to the OCR app, import the file, wait for recognition, copy the result, switch back to your original app, and paste. That's six context switches for a task that should take one second.</p>
<p>Even lighter-weight tools often require their own window or panel. They sit in the Dock, demand screen real estate, and pull your attention away from the task at hand. For quick, frequent text captures throughout a workday, this overhead adds up fast.</p>

<h2>One Click, One Drag, Back to Work</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> lives in the Mac menu bar — the least intrusive location possible. Click the menu bar icon or press a keyboard shortcut, drag a rectangle over the text you need, and the recognized characters are on your clipboard. The entire interaction takes under two seconds, and you never leave the app you're working in.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text recognition from the Mac menu bar" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Always Available, Never in the Way</h3>
<p>No Dock icon, no main window, no app to manage. Optic sits quietly in the menu bar until you need it. It launches at login and stays ready without consuming your attention or screen space.</p>

<h3>Keyboard Shortcut Access</h3>
<p>For even faster activation, use the keyboard shortcut to trigger a capture without touching the menu bar. Your hands stay on the keyboard, you drag the selection, and the text is captured — all without a single click on the menu bar icon.</p>

<h3>History Without a Separate Window</h3>
<p>Every capture is logged in the menu bar dropdown. Click the Optic icon to see your recent captures, re-copy a previous extraction, or review what you've grabbed during the session. The history lives where the tool lives — in the menu bar, out of your way until you want it.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-text-from-youtube-video-mac": {
    slug: "copy-text-from-youtube-video-mac",
    title: "Come copiare il testo da un video YouTube su Mac",
    description: "Un video YouTube visualizza un comando, un link o un'informazione di cui hai bisogno — ma il lettore video non ti permette di selezionare alcun testo dal fotogramma video.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You're following a YouTube tutorial and the instructor types a long terminal command. Or a video review briefly shows a product comparison table. Or a tech walkthrough displays settings you need to replicate. The text is perfectly visible on screen, but YouTube's video player is just rendering frames — there's nothing to click, highlight, or copy. You pause the video and start typing what you see, hoping you don't miss a flag or misspell a path.</p>

<h2>YouTube Text Is Baked Into the Video</h2>
<p>Everything you see in a YouTube video frame is a decoded image. Whether it's a slide, a terminal session, a code editor, or on-screen graphics, the text is part of the pixel data. YouTube provides no mechanism to extract text from the video content itself. Subtitles and descriptions are separate — they cover what's being said, not what's being shown on screen.</p>
<p>Some creators put commands and links in the video description or pinned comments, but many don't. And for content like comparison tables, settings pages, or data displayed in the video, there's typically no text equivalent provided at all.</p>

<h2>Grab Text Straight from the Video Frame</h2>
<p>Pause the video at the right moment (or don't — it works on playing content too), activate <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> from the menu bar, and drag a selection over the text visible in the YouTube player. Optic reads the characters from the rendered frame and copies them to your clipboard. Works in any browser — Safari, Chrome, Firefox, Arc.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying text from a YouTube video on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Tutorial Commands and Code</h3>
<p>Programming tutorials constantly display terminal commands, code snippets, and configuration examples. A single drag extracts the exact text — preserving special characters, flags, and syntax that are easy to mistype manually.</p>

<h3>On-Screen Data and Tables</h3>
<p>Product reviews, benchmark comparisons, and educational content often show tables or lists on screen. Select the data region and paste the extracted text into your notes or a spreadsheet. No more pausing and transcribing row by row.</p>

<h3>URLs and References</h3>
<p>When a video flashes a URL, a book title, or a resource name, capture it before it disappears. Optic's capture history saves every extraction, so even if you grab text while the video is playing, you can retrieve it later from the menu bar dropdown.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "scan-qr-code-from-screenshot-mac": {
    slug: "scan-qr-code-from-screenshot-mac",
    title: "Come scansionare un codice QR da uno screenshot su Mac",
    description: "Hai uno screenshot di un codice QR sul tuo Mac, ma nessun modo di scansionarlo — la fotocamera del tuo telefono non può leggere uno schermo e macOS non offre alcun decodificatore incorporato.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>Someone texts you a screenshot containing a QR code. Or you saved a QR code from a website for later. Or a PDF attachment includes one linking to a signup page. The QR code is sitting on your Mac screen as an image, and the natural instinct is to "scan" it — but how? Pointing your phone camera at your computer monitor is awkward, produces glare, and opens the link on the wrong device. macOS provides no built-in way to decode a QR code from an image or screenshot.</p>

<h2>No Native QR Decoder on macOS</h2>
<p>iPhones have QR scanning built into the Camera app. macOS has nothing equivalent. You can't right-click a QR code image in Finder and choose "Decode." Preview won't extract a URL from a QR code. Safari doesn't recognize QR codes in web pages. If the QR code is already on your Mac screen, Apple's ecosystem expects you to use a different device to read it — which makes no sense when you want the result on the same computer.</p>
<p>Online QR decoders exist, but they require uploading your image to a third-party server. For QR codes containing sensitive information — Wi-Fi passwords, authentication tokens, private URLs — uploading to a random website is a non-starter.</p>

<h2>Decode QR Codes Right on Your Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> includes a QR code scanner that works on anything visible on your display. Open the screenshot or image containing the QR code, activate Optic from the menu bar, and drag a selection around the code. The decoded content — URL, text, credentials, whatever the code encodes — appears on your Mac immediately.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic scanning a QR code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Event Tickets and Boarding Passes</h3>
<p>QR codes on email confirmations, forwarded tickets, and saved boarding passes are common. Decode them on your Mac to verify the content, open the linked page, or save the encoded information — all without switching to your phone.</p>

<h3>Wi-Fi and Authentication Codes</h3>
<p>QR codes encoding Wi-Fi credentials or two-factor setup URIs contain sensitive data. Optic decodes them locally on your device — no upload to external servers, no exposure of your credentials to third-party services.</p>

<h3>Saved in Capture History</h3>
<p>Every decoded QR code is saved in Optic's menu bar history alongside your text captures. Need the Wi-Fi password from a QR code you scanned last week? Scroll back through your captures instead of finding and re-scanning the original image.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "ocr-foreign-language-mac": {
    slug: "ocr-foreign-language-mac",
    title: "OCR del testo in lingua straniera su Mac",
    description: "Del testo in una lingua straniera appare sullo schermo — in un'immagine, un documento o un video — e hai bisogno di copiarlo anche se non puoi digitare quei caratteri da solo.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You're looking at a Japanese product label in a photo, a French legal document someone scanned, or Chinese text in a video tutorial. You need that text — to paste into a translator, to send to a colleague, to include in a report. But you can't type those characters. You don't have the keyboard layout installed, you don't know the input method, and even if you did, looking at a character and reproducing it keystroke by keystroke would take forever. The text is right there on screen, readable by anyone who knows the language, but impossible for you to copy.</p>

<h2>Foreign Characters Without the Right Keyboard Are Unreachable</h2>
<p>macOS supports many keyboard layouts, but switching to one and learning its input method just to copy a few characters from an image is impractical. Character-by-character lookup in a Unicode table or an IME tool is painfully slow. Drawing input methods exist for some languages but are awkward for anything more than a single character.</p>
<p>The problem compounds when the text is inside an image, a scanned document, or a video frame — contexts where you can't select text even in your own language. Foreign language text in these formats is doubly inaccessible: you can't select it because it's an image, and you couldn't type it even if you could see each character clearly.</p>

<h2>Select Foreign Text Visually, Copy It Digitally</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> recognizes characters from your screen regardless of language. Activate it from the menu bar, drag over the foreign language text visible in any image, document, or video frame, and the recognized characters are copied to your clipboard — in the correct script, with the correct Unicode characters. Paste them into Google Translate, DeepL, or any application.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic recognizing foreign language text on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Translation Workflows</h3>
<p>The fastest path from foreign text in an image to a translation is: select with Optic, paste into a translator. No manual transcription, no keyboard switching, no character lookup. Works with Latin, Cyrillic, CJK, Arabic, and other scripts.</p>

<h3>International Documents</h3>
<p>Scanned contracts, invoices, and forms in other languages contain names, addresses, and figures you may need to extract. Drag over the relevant section and paste the characters into your own documents, preserving the original script accurately.</p>

<h3>Language Study</h3>
<p>Encountering new vocabulary in images or videos? Select the text and paste it into a flashcard app or dictionary. Having the exact characters — rather than a guess at romanization — ensures accurate lookups and study.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-text-from-slack-image-mac": {
    slug: "copy-text-from-slack-image-mac",
    title: "Come copiare il testo da un'immagine in Slack su Mac",
    description: "Un collega condivide uno screenshot in Slack — un registro errori, una configurazione, un dashboard — e il testo al suo interno è solo pixel che non puoi copiare o cercare.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>It happens multiple times a day. A teammate pastes a screenshot in a Slack channel: a terminal error, a dashboard showing metrics, a code snippet from their editor, or a configuration panel. You need the text in that screenshot — an error message to search for, a metric to quote in a report, or a code block to test locally. But the Slack image viewer shows you the picture and nothing else. The text inside it might as well be a watercolor painting as far as your clipboard is concerned.</p>

<h2>Slack Treats Images as Images</h2>
<p>When someone shares a screenshot in Slack, it's rendered as an inline image or opens in Slack's image viewer. There's no OCR layer, no text extraction option, no "copy text from image" in the right-click menu. You can download the image, but that just gives you the same pixels as a file on disk — still no selectable text.</p>
<p>This is a daily friction point in engineering, support, and operations teams. Screenshots are the fastest way to share visual information in chat, but every screenshot containing text becomes a dead end for the recipient. The sender assumes the information is shared; the recipient has to manually transcribe it or ask the sender to paste it as text — a request that often goes unanswered for hours.</p>

<h2>Read Text Directly from Slack Images</h2>
<p>When you see a screenshot in Slack that contains text you need, open it in Slack's image viewer or just look at the inline preview, then activate <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> from the menu bar and drag a selection over the text. The characters are recognized and copied to your clipboard in seconds — no downloading, no switching apps, no waiting for the sender to re-share as text.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting text from a Slack image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Error Messages and Logs</h3>
<p>Screenshots of errors and stack traces are shared constantly in engineering channels. Extract the exact error string and paste it into your search engine or log aggregator for an instant lookup, instead of retyping a 200-character error message.</p>

<h3>Code Snippets</h3>
<p>When someone screenshots their code instead of pasting it as a snippet, Optic lets you extract it as text anyway. Copy the code, paste it into your editor, and test it locally — far faster than retyping someone else's code from an image.</p>

<h3>Metrics and Data</h3>
<p>Dashboard screenshots shared in Slack channels contain numbers, labels, and trends. Select the specific figures you need and paste them into your own reports or spreadsheets without manual transcription errors.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "mac-preview-ocr-limitations": {
    slug: "mac-preview-ocr-limitations",
    title: "Limitazioni di OCR di Anteprima su Mac — Cosa perde",
    description: "Anteprima gestisce immagini e PDF ma non può estrarre testo dalla maggior parte di essi. Se hai provato a copiare testo da un PDF scansionato o da una foto in Anteprima e non hai ottenuto nulla, ecco perché.",
    date: "2026-09-06",
    readTime: "5 min di lettura",
    content: `
<p>Preview is the default image and PDF viewer on macOS, and many users assume it can handle OCR — recognizing and extracting text from images and scanned documents. In limited situations it can, thanks to Live Text integration. But for many common scenarios, Preview either silently fails to recognize text or provides no extraction capability at all. If you've tried to select text from a scanned PDF or a photo of a document in Preview and your cursor just draws a selection rectangle with no text highlight, you've hit Preview's OCR wall.</p>

<h2>Where Preview's Text Recognition Breaks Down</h2>
<p><strong>Scanned PDFs with complex layouts.</strong> Preview can sometimes recognize text in clean, well-scanned single-column documents. But multi-column layouts, tables, headers and footers, and documents with mixed graphics and text often produce no selectable text at all. The Live Text engine in Preview doesn't handle complex document structures reliably.</p>
<p><strong>Low-contrast or small text.</strong> Receipt scans, faded documents, and images with low contrast between text and background frequently defeat Preview's recognition. The text might be perfectly readable to human eyes but invisible to Preview's detection.</p>
<p><strong>Handwritten text.</strong> Preview's text recognition is tuned for printed fonts. Handwritten notes, whiteboard photos, and annotated documents are rarely recognized, even when the handwriting is clean and legible.</p>
<p><strong>Non-Latin scripts.</strong> Support for non-Latin languages is inconsistent. CJK, Arabic, and Cyrillic text in images may or may not be detected depending on font style, image quality, and document complexity.</p>
<p><strong>No capture from screen.</strong> Preview only processes files you've opened. If the text you need is in a video frame, a web app interface, an error dialog, or another app's window, Preview has no way to reach it.</p>

<h2>OCR That Works Across Everything on Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> bypasses Preview's limitations entirely by working at the screen level. Instead of asking a file viewer to recognize text inside a file, Optic reads characters from whatever is visible on your display. Open the problematic document in Preview — or any other app — and drag Optic's selection over the text you need.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic overcoming Preview OCR limitations on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Complex Document Layouts</h3>
<p>Tables, multi-column text, and mixed content that stumps Preview are readable by Optic because you control exactly which region to scan. Select just the column or table cell you need — no full-page parsing required.</p>

<h3>Beyond Files</h3>
<p>Optic isn't limited to opened files. Video frames, dialogs, web apps, remote desktop sessions — anything rendered on screen is fair game. Preview can never reach these sources; Optic reads them as naturally as any image.</p>

<h3>Persistent History</h3>
<p>Preview has no memory of past text recognition attempts. Optic saves every extraction in the menu bar, building a log of captured text you can scroll through and re-copy at any time.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "batch-ocr-screenshots-mac": {
    slug: "batch-ocr-screenshots-mac",
    title: "OCR batch di screenshot su Mac — Elabora cronologia di cattura",
    description: "Hai una collezione di screenshot contenenti testo di cui hai bisogno — ma elaborarli uno per uno attraverso uno strumento OCR tradizionale è tedioso e lento.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You took a dozen screenshots during a research session — pricing tables, feature comparisons, settings panels, reference material. Now you need the text from all of them. With traditional OCR tools, that means opening each file individually, running recognition, copying the output, pasting it somewhere, and repeating. Twelve screenshots means twelve cycles of file-open-process-copy-paste. It's not hard — just tediously slow.</p>

<h2>macOS Offers No Batch Text Extraction</h2>
<p>There's no built-in macOS feature that lets you select multiple images and extract text from all of them. Preview can open multiple files but has no "extract all text" function. Automator and Shortcuts can chain some actions together but lack reliable OCR capabilities for screen captures. You're either processing each image manually or installing heavy-duty document processing software meant for enterprise scanning workflows.</p>
<p>The irony is that you captured these screenshots quickly — Cmd+Shift+4, click, done — but extracting the text from them takes ten times longer than capturing them did.</p>

<h2>Rapid-Fire Screen OCR with Built-In History</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> turns batch extraction into a fast, linear workflow. Open your screenshots in Quick Look or any viewer, then make rapid selections — drag over the text in one image, move to the next, drag again. Each extraction is instantly saved to Optic's capture history in the menu bar. No file management, no save dialogs, no copy-paste juggling between windows.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic batch processing screenshots on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Research Sessions</h3>
<p>Captured screenshots from competitor websites, pricing pages, or documentation? Open them in sequence and fire off extractions. Your capture history becomes a clean text log of everything you gathered — searchable and re-copyable without reopening any images.</p>

<h3>Capture History as Your Text Archive</h3>
<p>Every extraction is timestamped and stored in the menu bar dropdown. After processing a batch of screenshots, scroll through the history to review, re-copy, or verify individual captures. The history functions as a lightweight text archive of your extracted content.</p>

<h3>Selective Extraction</h3>
<p>Unlike automated batch OCR that processes entire images, you control exactly which portion of each screenshot to extract. Need just the price from a pricing table? Just the error code from a log screenshot? Select precisely what matters and skip the rest.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "copy-address-from-image-mac": {
    slug: "copy-address-from-image-mac",
    title: "Come copiare un indirizzo da un'immagine su Mac",
    description: "Un'etichetta di consegna, una foto di biglietto da visita o una lettera scansionata contiene un indirizzo di cui hai bisogno — ma è intrappolato in un'immagine senza modo di selezionarlo.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>You need to copy an address from a photo of a business card, a scanned envelope, a screenshot of a contact page, or a delivery confirmation image. The address is clearly printed — street, city, state, ZIP — but because it's in an image, you can't click on it, can't select it, can't copy it. You have to read each line and type it into your map app, your contacts, or your shipping form. One mistyped digit in a ZIP code and the package goes to the wrong place.</p>

<h2>Addresses in Images Require Perfect Manual Transcription</h2>
<p>Addresses are particularly risky to retype. They contain a mix of numbers, street name abbreviations, unit numbers, and postal codes — all of which must be exact. Transposing two digits in a ZIP code or misspelling an apartment number means failed delivery or misdirected mail. And unlike most text, you can't easily verify an address by reading it back — you need to compare character by character.</p>
<p>macOS provides no built-in workflow for extracting an address from an image. Live Text might highlight addresses in some Photos images and offer to open them in Maps, but this only works in specific Apple apps, with clean images, and it extracts to Maps — not to your clipboard for pasting elsewhere.</p>

<h2>Drag Over the Address, Paste It Anywhere</h2>
<p>Open the image containing the address in any app — Preview, Mail, a browser, Slack — then activate <a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> from the menu bar and drag a selection around the address. The complete text — every line, every number, every abbreviation — is copied to your clipboard. Paste it into Google Maps, a shipping form, your contacts, or an email.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic copying an address from an image on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Business Cards</h3>
<p>Photos of business cards from networking events are notorious for sitting in your camera roll without their addresses ever making it into your contacts. Open the photo, select the address with Optic, and paste it directly into the contact entry. Works for phone numbers and email addresses visible on the card too.</p>

<h3>Shipping and Returns</h3>
<p>Return shipping labels, delivery confirmations, and packaging photos often contain addresses you need to reference or reuse. Extract the address from the image and paste it into your shipping platform without retyping.</p>

<h3>Real Estate and Directions</h3>
<p>Listing photos, property flyers, and scanned documents in the real estate process are full of addresses. Grab any address from these images and paste it into your maps app for directions or into a spreadsheet for tracking.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "ocr-code-snippets-mac": {
    slug: "ocr-code-snippets-mac",
    title: "Frammenti di codice OCR su Mac — Copia codice da tutorial e screenshot",
    description: "Il codice appare come immagine in un tutorial, documentazione o screenshot condiviso — e riscriverlo significa introdurre bug un carattere fuori posto alla volta.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>A blog post renders its code examples as styled images. A coworker pastes a screenshot of their IDE into a pull request comment. Documentation for a legacy tool only exists as terminal screenshots on a wiki. Stack Overflow answers include code embedded in images because the formatter mangled the original. In each case, the code is visible and readable, but it's an image — and copying code from an image by retyping it is how you spend thirty minutes debugging a semicolon you thought was a colon.</p>

<h2>Code Demands Character-Perfect Extraction</h2>
<p>Unlike prose, code has zero tolerance for approximation. A hyphen instead of an underscore breaks an import. A single misplaced bracket makes a function invalid. A lowercase letter where uppercase was needed changes a variable reference entirely. When you retype code from an image, every character is a potential point of failure — and the bugs you introduce are invisible because they look correct at a glance.</p>
<p>The problem is magnified with long commands, multi-line snippets, or unfamiliar syntax. A Docker run command with ten flags, a regex pattern, or a shell pipeline with pipes and redirects — these are exactly the kind of content that gets shared as images and is nearly impossible to retype accurately.</p>

<h2>Extract Code from Any Image on Screen</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> reads the code characters directly from your screen. Open the image, tutorial page, or screenshot containing the code, activate Optic from the menu bar, and drag a selection over the snippet. The recognized text — preserving indentation, special characters, and line structure — goes straight to your clipboard.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic extracting code from a screenshot on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Terminal Commands</h3>
<p>Install scripts, build commands, and deployment pipelines displayed as terminal screenshots are common in documentation and tutorials. Select the command block and paste it into your terminal with confidence that the flags, paths, and arguments are exactly right.</p>

<h3>IDE Screenshots</h3>
<p>When a colleague shares a screenshot of their code — in Slack, in a GitHub comment, in an email — extract the code and paste it into your own editor. Test it, modify it, or review it properly instead of squinting at an image.</p>

<h3>Multi-Snippet Extraction</h3>
<p>Tutorials often show multiple code blocks across a page. Extract each one in sequence. Optic's capture history saves every extraction, so you can work through an entire tutorial and paste each snippet into your project one by one from the history dropdown.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
  "text-to-speech-from-screen-mac": {
    slug: "text-to-speech-from-screen-mac",
    title: "Sintesi vocale da qualsiasi contenuto dello schermo su Mac",
    description: "Vuoi ascoltare il testo che è sullo schermo — in un'immagine, un PDF scansionato, un fotogramma video — ma gli strumenti vocali del tuo Mac funzionano solo su testo che puoi evidenziare.",
    date: "2026-09-06",
    readTime: "4 min di lettura",
    content: `
<p>macOS includes a spoken content feature that reads selected text aloud. Highlight a paragraph in Safari, right-click, and your Mac speaks it. The feature works well — until you need to hear text that can't be highlighted. An infographic with key statistics. A scanned document with no text layer. Subtitles baked into a video frame. Text rendered as a graphic on a web app. In all these cases, macOS spoken content has nothing to work with because there's no selectable text to feed it.</p>

<h2>Most Screen Text Isn't Selectable</h2>
<p>The amount of non-selectable text on a modern Mac screen is larger than most people realize. Images with text overlays, canvas-rendered web apps, PDF scans, video frames, remote desktop sessions, dialog boxes, app interfaces with custom-rendered labels — all of these display readable text that macOS treats as part of an image. You can see it, you can read it with your eyes, but you can't select it, so you can't send it to the speech engine.</p>
<p>For users who rely on audio output for accessibility, proofreading, multitasking, or language learning, this gap is a real barrier. The text is on screen, the speech engine is on the same machine, but there's no bridge between them for non-selectable content.</p>

<h2>Select Anything on Screen, Hear It Aloud</h2>
<p><a href="https://apps.apple.com/app/optic/id6806597766">Optic</a> closes this gap by combining screen-level OCR with text-to-speech. Activate it from the menu bar, drag a selection over any visible text — regardless of source — and Optic recognizes the characters. You can then have the captured text read aloud, turning any visible screen content into audio.</p>

<a href="https://apps.apple.com/app/optic/id6806597766" target="_blank" rel="noopener" style="display:block"><img src="/apps/optic.png" alt="Optic text-to-speech from screen content on Mac" style="max-width:100%;border-radius:12px;margin:24px 0;" /></a>

<h3>Accessibility</h3>
<p>Screen readers like VoiceOver work well with native UI elements and standard text, but stumble on text inside images and non-standard rendering. Optic fills this gap by making any visible text available as both clipboard text and spoken audio. Content that was previously inaccessible becomes hearable.</p>

<h3>Proofreading</h3>
<p>Hearing text read aloud catches errors that visual scanning misses. After extracting text from a scanned document or image, use text-to-speech to verify the OCR output. A garbled word or misrecognized character is immediately obvious when spoken but might pass unnoticed on screen.</p>

<h3>Multitasking and Comprehension</h3>
<p>Extract a long passage from a document, article, or scanned page and listen to it while doing other work. Audio processing engages different cognitive channels than reading, which can aid comprehension and retention — especially for dense or unfamiliar material. Every capture stays in your menu bar history, so you can revisit and replay any previous extraction.</p>

<p><a href="https://apps.apple.com/app/optic/id6806597766">Get Optic on the Mac App Store</a></p>
`,
  },
};
