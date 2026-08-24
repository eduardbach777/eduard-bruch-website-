// Landing pages for the jobs people search for before they know an app exists.
//
// Scoped under /bellows/tools rather than a top-level /tools, so they inherit
// topical relevance from the product page instead of competing with the other
// apps on this site for the same slugs.
//
// Written as structured data rather than HTML strings: the renderer stays
// simple, nothing needs dangerouslySetInnerHTML, and a malformed tag cannot
// break a page.

export interface Section {
  h: string;
  body?: string[];
  list?: string[];
  code?: string;
  codeCaption?: string;
}

export interface ToolPage {
  slug: string;
  /** The <h1>. Written as the question or the job, not as a product name. */
  title: string;
  /** <title>. Kept under ~60 characters so it is not truncated in results. */
  metaTitle: string;
  description: string;
  /** Shown under the h1. One sentence that answers the query immediately. */
  lede: string;
  /** The tool inside Bellows this page is about. */
  tool: string;
  sections: Section[];
  faqs: { q: string; a: string }[];
  related: string[];
  updated: string;
}

const VERIFY: Section = {
  h: "How to check the claim rather than trust it",
  body: [
    "Bellows is signed without a network entitlement. That is not a policy someone wrote down — it is a permission the binary does not have, and macOS enforces it whether the app wants to connect or not. You can read the entitlements it was signed with:",
  ],
  code: "codesign -d --entitlements - /Applications/Bellows.app",
  codeCaption:
    "Neither com.apple.security.network.client nor com.apple.security.network.server appears in the output. Without them the sandbox refuses to open a socket.",
};

export const TOOL_PAGES: ToolPage[] = [
  {
    slug: "decode-jwt-offline",
    title: "How to decode a JWT without pasting it into a website",
    metaTitle: "Decode a JWT Offline on Mac — No Website",
    description:
      "A JWT is a live credential. Decode and inspect one locally on macOS instead of pasting it into an online decoder, and learn which claims actually matter.",
    lede: "A JSON Web Token is a bearer credential: whoever holds it can act as you until it expires. Pasting one into a web decoder hands that credential to a third party.",
    tool: "JWT Decoder",
    sections: [
      {
        h: "Why the usual advice is wrong",
        body: [
          "Every guide to reading a JWT says the same thing: paste it into a decoder site. The token is only base64, the reasoning goes, so nothing secret is being revealed.",
          "That reasoning confuses encoding with protection. The payload is indeed only base64url — but the token as a whole is the credential. A JWT from a staging or production system will typically authenticate as a real user for as long as its expiry allows, which is often an hour and sometimes very much longer. Anyone who receives it can replay it.",
          "The site may be honest, and most are. The risk is not that a decoder is malicious; it is that you have copied a working key into a system you do not control, whose logs you cannot read, whose retention you do not set, and whose breach you would never hear about.",
        ],
      },
      {
        h: "What a JWT is actually made of",
        body: [
          "Three base64url segments joined by dots: header, payload, signature. The first two are readable by anyone. The third proves the first two were not altered, and verifying it requires the signing key — which is why decoding and verifying are different operations.",
        ],
        code:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\n  .eyJzdWIiOiIxMjM0NTY3ODkwIiwiZXhwIjoxNzAwMDAwMDAwfQ\n  .SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        codeCaption:
          "header.payload.signature — split on the dots, and the first two segments decode to JSON.",
      },
      {
        h: "The claims worth reading",
        list: [
          "exp — expiry, as a Unix timestamp. The single most common reason to open a token at all.",
          "iat — issued at. Together with exp it tells you the token's intended lifetime.",
          "nbf — not before. A token can be valid-looking and still be rejected because this is in the future.",
          "sub — the subject, usually the user id the token authenticates as.",
          "aud — the audience. A token minted for one service is often rejected by another purely because of this.",
          "iss — the issuer. Useful when several identity providers are in play.",
          "alg — in the header, not the payload. If it reads \"none\", the token is unsigned and any system that accepts it has a serious problem.",
        ],
      },
      {
        h: "Reading expiry without doing arithmetic",
        body: [
          "The reason a token is opened is nearly always to answer one question: has it expired? But exp is stored as seconds since 1970, so a decoder that prints 1700000000 has handed the question back to you.",
          "Bellows converts the timestamps and states the answer — issued at, not before, expires, and whether that is in the past, expressed in units you can read rather than a raw number of days.",
        ],
      },
      {
        h: "Decoding is not verifying",
        body: [
          "Bellows decodes and inspects; it does not check the signature. Nothing that runs entirely on your machine can, unless you give it the signing key, and a tool that quietly accepted your key would defeat the purpose of using it.",
          "This matters when reading the output: a decoded token tells you what it claims, not that the claims are true. Signature verification belongs in the service that accepts the token.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "Is it safe to decode a JWT online?",
        a: "The decoding itself is harmless, but sending the token is not. A JWT is a bearer credential — anyone holding it can use it until it expires. If the token is from a live system, treat pasting it into any website the same way you would treat pasting a password.",
      },
      {
        q: "Can a JWT be decoded without the secret key?",
        a: "Yes. The header and payload are base64url-encoded, not encrypted, so anyone can read them. The secret is needed only to verify the signature or to mint a new token.",
      },
      {
        q: "How do I tell if a JWT has expired?",
        a: "Read the exp claim, which is a Unix timestamp in seconds. If it is earlier than now, the token has expired. Bellows converts it to a date and says how long ago that was.",
      },
      {
        q: "What does alg: none mean in a JWT header?",
        a: "It means the token is unsigned. It is a legitimate part of the specification but a well-known attack vector, because a server that accepts alg: none will trust a token anyone can forge. Seeing it on a real token is worth investigating.",
      },
    ],
    related: ["base64-decode-mac", "json-formatter-mac", "unix-timestamp-converter"],
    updated: "2026-08-23",
  },

  {
    slug: "json-formatter-mac",
    title: "A JSON formatter for Mac that leaves your key order alone",
    metaTitle: "JSON Formatter for Mac — Offline, Native",
    description:
      "Format, minify and validate JSON on macOS without uploading it. Choose two spaces, four or tabs, and keep the original key order instead of having it sorted for you.",
    lede: "Most online formatters silently reorder your keys and re-encode your strings. On a config file or an API response you are about to diff, that is not a formatting change — it is a content change.",
    tool: "JSON Formatter",
    sections: [
      {
        h: "What usually goes wrong",
        list: [
          "Key order is sorted alphabetically, so the result no longer diffs cleanly against the original.",
          "Unicode is re-escaped, turning readable text into \\u sequences, or the reverse.",
          "Large numbers lose precision after a round trip through a JavaScript parser.",
          "Trailing commas and comments produce a generic \"invalid JSON\" with no line number.",
        ],
      },
      {
        h: "Formatting choices that are actually choices",
        body: [
          "Indentation is a project decision, not a universal one. Bellows offers two spaces, four spaces or tabs, and sorting keys is an option you turn on rather than something done to you.",
          "Minifying is the same operation in reverse: strip every byte that is not needed, for when you have to fit a payload into a query parameter or an environment variable.",
        ],
      },
      {
        h: "Validation that points at the problem",
        body: [
          "An error that says only \"invalid JSON\" makes you find the fault yourself. A useful validator names the position, and the common causes are a short list: a trailing comma before a closing brace, a single quote where JSON requires a double, an unescaped newline inside a string, or a stray BOM at the start of a file that came from Windows.",
        ],
      },
      {
        h: "Why do it locally",
        body: [
          "JSON is where the sensitive things live. An API response holds customer records; a config file holds hostnames and sometimes credentials; a webhook body holds whatever the sending system thought was fine to send. Formatting is a trivial operation to perform on your own machine, and there is no reason for any of that to leave it.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "Does formatting JSON change its meaning?",
        a: "Whitespace does not, but sorting keys can. JSON objects are formally unordered, yet plenty of real systems and every text diff treat order as significant. A formatter that sorts by default will make a file look changed when it is not.",
      },
      {
        q: "How do I minify JSON on a Mac?",
        a: "Bellows has a minify option that removes all insignificant whitespace. macOS also ships Python, so python3 -m json.tool --compact works in a pinch.",
      },
      {
        q: "Why does my JSON fail to validate when it looks correct?",
        a: "The usual causes are a trailing comma, single quotes instead of double, an unescaped control character inside a string, or a byte order mark at the start of the file. The last one is invisible in most editors.",
      },
    ],
    related: ["decode-jwt-offline", "yaml-to-json", "text-diff-mac"],
    updated: "2026-08-23",
  },

  {
    slug: "base64-decode-mac",
    title: "Encode and decode Base64 on a Mac",
    metaTitle: "Base64 Encode & Decode on Mac — Offline",
    description:
      "Decode Base64 locally on macOS, including the URL-safe variant used in JWTs, and understand why the built-in Terminal command sometimes fails on valid input.",
    lede: "Base64 is an encoding, not encryption. Anything encoded in it is readable by anyone who bothers, which is exactly why it should not be handed to a website.",
    tool: "Base64 Encode/Decode",
    sections: [
      {
        h: "The variant that breaks decoders",
        body: [
          "Standard Base64 uses + and / as its last two characters and = for padding. That is unsafe inside a URL, so RFC 4648 defines a URL-safe alphabet using - and _ instead, usually with the padding stripped.",
          "JWTs use the URL-safe variant. So do many signed URLs and session cookies. A decoder that only understands the standard alphabet reports valid input as corrupt, which sends people looking for a problem in their data that is really a problem in their tool.",
        ],
      },
      {
        h: "Why base64 in Terminal sometimes refuses",
        body: [
          "macOS ships the base64 command, and it works well for the standard alphabet. It does not translate - and _, and it is strict about padding, so URL-safe input has to be repaired first:",
        ],
        code:
          "# URL-safe input, padding restored, then decoded\necho \"$T\" | tr '_-' '/+' | base64 -D",
        codeCaption:
          "Even this fails when the length is not a multiple of four, because the padding was stripped and has to be added back.",
      },
      {
        h: "What Base64 is for, and what it is not for",
        list: [
          "It exists to carry binary data through channels that only handle text — email attachments, JSON strings, data URIs.",
          "It adds roughly a third to the size of whatever it encodes.",
          "It provides no confidentiality whatsoever. A credential in a Base64 string is a credential in plain text with an extra step.",
        ],
      },
      {
        h: "Detecting which way to go",
        body: [
          "Most of the time the direction is obvious from the input, and Bellows detects it: paste something that decodes cleanly to text and it decodes; paste anything else and it encodes. Both directions remain available explicitly for the cases where the guess is wrong — such as text that happens to be valid Base64.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "Is Base64 encryption?",
        a: "No. It is a reversible encoding with no key. Anyone can decode it, so it protects nothing and should never be used to hide a secret.",
      },
      {
        q: "Why does my Base64 string fail to decode?",
        a: "Usually because it is the URL-safe variant, which uses - and _ in place of + and /, and often has its = padding stripped. A decoder expecting the standard alphabet will reject it.",
      },
      {
        q: "How do I decode Base64 in macOS Terminal?",
        a: "echo 'aGVsbG8=' | base64 -D works for standard Base64. For the URL-safe variant you have to translate the characters and restore the padding first.",
      },
    ],
    related: ["decode-jwt-offline", "hash-generator-mac", "hex-to-text"],
    updated: "2026-08-23",
  },

  {
    slug: "regex-tester-mac",
    title: "A regex tester that reports named groups by name",
    metaTitle: "Regex Tester for Mac — Offline, Named Groups",
    description:
      "Test regular expressions on macOS without pasting your sample text into a website. Every match with its line, offset and captured groups, not just a green tick.",
    lede: "A green tick tells you the pattern matched something. It does not tell you what, where, or whether the group you care about captured what you think.",
    tool: "Regex Tester",
    sections: [
      {
        h: "The sample text is the sensitive part",
        body: [
          "People rarely worry about a regex tester, because the pattern itself is harmless. But you do not test a pattern against nothing — you test it against a log excerpt, a customer export, a batch of email addresses, a page of production output. That sample is the payload, and it is what gets uploaded.",
        ],
      },
      {
        h: "What a result should tell you",
        list: [
          "The matched text, and the line and offset where it was found.",
          "Every capture group, numbered, with its own contents.",
          "Named groups reported under their names rather than as index 3.",
          "The count, so you can tell one match from forty.",
        ],
      },
      {
        h: "Named groups",
        body: [
          "Once a pattern has more than two groups, positional indexes stop being readable. Named groups fix that, and a tester that reports them by name keeps the benefit:",
        ],
        code: "(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})",
        codeCaption:
          "Bellows lists year, month and day by name in the results rather than as groups 1, 2 and 3.",
      },
      {
        h: "The flags that change everything",
        list: [
          "Case insensitive — the most common reason a pattern silently fails.",
          "Multiline — makes ^ and $ match at each line rather than only at the start and end of the whole input.",
          "Dot matches newline — without it, . stops at a line break, which is why patterns spanning lines return nothing.",
        ],
      },
      {
        h: "A note on the flavour",
        body: [
          "Regular expression syntax is not one language. Bellows uses ICU regular expressions, which is what Swift and macOS use natively, and which is close to PCRE for everyday patterns. Lookbehind, named groups and Unicode properties all work; a few exotic PCRE constructs do not. If a pattern is destined for a different engine, test it there before shipping.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "What regex flavour does Bellows use?",
        a: "ICU regular expressions, the engine built into macOS and used by Swift. It is close enough to PCRE that ordinary patterns behave identically, including named groups and lookbehind.",
      },
      {
        q: "Why does my regex not match across lines?",
        a: "By default the dot does not match a newline. Turn on the dot-matches-newline flag, or use multiline mode if what you want is for ^ and $ to anchor at each line.",
      },
      {
        q: "How do I use named capture groups?",
        a: "Write (?<name>...) around the part you want to capture. Bellows reports each named group under its name in the results.",
      },
    ],
    related: ["text-diff-mac", "json-formatter-mac", "string-inspector"],
    updated: "2026-08-23",
  },

  {
    slug: "text-diff-mac",
    title: "Compare two blocks of text on a Mac",
    metaTitle: "Text Diff on Mac — Compare Two Texts Offline",
    description:
      "Diff two pieces of text locally on macOS, line by line and word by word, with the option to ignore whitespace and case.",
    lede: "Two config files that look identical usually differ by something invisible — a tab against four spaces, a trailing space, or a line ending from another operating system.",
    tool: "Text Diff",
    sections: [
      {
        h: "What people are usually comparing",
        body: [
          "Rarely prose. Almost always a config file against the one that works, an API response before and after a change, an environment file against its example, or a certificate against the one the server is actually serving. All four are things you would not upload to a comparison site if you thought about it for a moment.",
        ],
      },
      {
        h: "Line diff and word diff",
        body: [
          "A line diff shows which lines changed, which is what you want for code and configuration. A word diff shows what changed inside a line, which is what you want when a long line differs by one token and the line diff simply marks the whole thing as changed.",
        ],
      },
      {
        h: "Ignoring what does not matter",
        list: [
          "Ignore whitespace — for comparing files that passed through different editors or formatters.",
          "Ignore case — for comparing hostnames, header names, hex digests and anything else where case is not significant.",
        ],
      },
      {
        h: "The invisible causes",
        body: [
          "When two files look the same and diff says otherwise, the cause is nearly always one of a short list: a mix of tabs and spaces, trailing whitespace, CRLF line endings against LF, a missing newline at the end of the file, or a byte order mark. The String Inspector in Bellows shows the actual code points when you need to see exactly which.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "How do I compare two files on a Mac?",
        a: "Terminal has diff built in, and FileMerge ships with Xcode. For pasted text rather than files, Bellows compares two blocks side by side with whitespace and case handling.",
      },
      {
        q: "Why does diff report changes I cannot see?",
        a: "Almost always trailing whitespace, tabs against spaces, or CRLF line endings from Windows. Turning on ignore-whitespace confirms the cause quickly.",
      },
    ],
    related: ["json-formatter-mac", "string-inspector", "regex-tester-mac"],
    updated: "2026-08-23",
  },

  {
    slug: "unix-timestamp-converter",
    title: "Convert a Unix timestamp to a date",
    metaTitle: "Unix Timestamp Converter for Mac — Offline",
    description:
      "Turn epoch seconds or milliseconds into a readable date on macOS, in your own time zone or UTC, and avoid the off-by-a-thousand mistake.",
    lede: "1700000000 is a moment in November 2023. Nobody reads that at a glance, which is why the conversion is one of the most-searched developer tasks there is.",
    tool: "Unix Timestamp Converter",
    sections: [
      {
        h: "Seconds or milliseconds",
        body: [
          "Unix time is defined in seconds, but JavaScript's Date.now() returns milliseconds, and so do many APIs and log formats built on it. The two are told apart by length: a ten-digit number is seconds, a thirteen-digit number is milliseconds.",
          "Feeding milliseconds to a seconds parser produces a date tens of thousands of years in the future, which at least announces the mistake. The reverse is quieter: seconds parsed as milliseconds land in January 1970 and look like a zero value or an uninitialised field.",
        ],
      },
      {
        h: "Time zones are where the real errors are",
        body: [
          "A Unix timestamp has no time zone. It is an absolute instant, and every conversion to a human-readable date applies one. Two people reading the same log line in different countries will legitimately see different local times.",
          "That is why incident timelines should be written in UTC, and why a converter should show both — your local time for reading, UTC for anything you are going to share.",
        ],
      },
      {
        h: "The 2038 problem, briefly",
        body: [
          "A signed 32-bit timestamp overflows on 19 January 2038. Modern systems use 64-bit values and are unaffected, but the limit still appears in old embedded systems, some database columns, and file formats that were fixed decades ago. A date near 1901 in the output usually means an overflow rather than a real value.",
        ],
        code: "2147483647  →  2038-01-19 03:14:07 UTC",
        codeCaption: "The largest value a signed 32-bit timestamp can hold.",
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "How do I convert a Unix timestamp in macOS Terminal?",
        a: "date -r 1700000000 prints the local time for a timestamp in seconds. Add -u for UTC. For milliseconds, divide by a thousand first.",
      },
      {
        q: "Is a Unix timestamp in seconds or milliseconds?",
        a: "The standard is seconds, and those are ten digits for current dates. Thirteen digits means milliseconds, which is what JavaScript and many APIs built on it produce.",
      },
      {
        q: "What time zone is a Unix timestamp in?",
        a: "None. It counts seconds since 1970-01-01 UTC and represents an absolute instant. A time zone is applied only when converting it to a readable date.",
      },
    ],
    related: ["decode-jwt-offline", "cron-expression-builder", "json-formatter-mac"],
    updated: "2026-08-23",
  },

  {
    slug: "hash-generator-mac",
    title: "Generate SHA-256 and MD5 hashes on a Mac",
    metaTitle: "SHA-256 & MD5 Hash Generator for Mac — Offline",
    description:
      "Produce MD5, SHA-1, SHA-256 and SHA-512 hashes locally on macOS, and understand which of them still mean anything for security.",
    lede: "A hash generator that runs on a website is asking you to send it the thing you are hashing. That is often a password, a token, or a file you are checking precisely because you do not trust its origin.",
    tool: "Hash Generator",
    sections: [
      {
        h: "Which algorithm still means something",
        list: [
          "MD5 — broken for security since 2004. Collisions are trivial to produce. Still fine as a non-adversarial checksum, and still what many vendors publish.",
          "SHA-1 — broken in practice since 2017. Git uses it for object naming, which is not a security claim. Do not use it for signatures.",
          "SHA-256 — the current default for integrity and signing. Use this unless something requires otherwise.",
          "SHA-512 — same family, longer digest, and often faster on 64-bit hardware.",
        ],
      },
      {
        h: "Hashing is not encryption",
        body: [
          "A hash is one-way: there is no key and no way back. Encryption is reversible by design and requires a key. Confusing the two leads to the common mistake of hashing something that needs to be recovered later, and to the equally common one of storing passwords with a plain fast hash.",
        ],
      },
      {
        h: "Why passwords need a different tool",
        body: [
          "SHA-256 is designed to be fast, which is exactly wrong for passwords: fast means an attacker with a stolen database can try billions of candidates per second. Password storage needs a deliberately slow, salted algorithm — bcrypt, scrypt or Argon2 — not a general-purpose hash.",
          "A hash tool is the right instrument for verifying a download or fingerprinting content, and the wrong one for building authentication.",
        ],
      },
      {
        h: "Verifying a download",
        body: [
          "The usual reason to reach for this: a vendor publishes a checksum, and you want to know the file you received is the file they released. Compare the two strings — and be aware that if an attacker can replace the file, they can often replace the published checksum on the same page too. The check is worth most when the checksum comes from somewhere the file did not.",
        ],
        code: "shasum -a 256 ~/Downloads/some-installer.dmg",
        codeCaption: "macOS ships shasum, so a file on disk needs no extra tool at all.",
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "Is MD5 still safe to use?",
        a: "Not for anything security-related — collisions can be produced on a laptop. It remains acceptable as a checksum against accidental corruption, which is why vendors still publish MD5 sums.",
      },
      {
        q: "Should I hash passwords with SHA-256?",
        a: "No. SHA-256 is fast by design, which helps an attacker brute-force a stolen database. Use bcrypt, scrypt or Argon2, all of which are deliberately slow and salted.",
      },
      {
        q: "How do I get the SHA-256 of a file on a Mac?",
        a: "shasum -a 256 filename in Terminal. Bellows hashes pasted text, which is the case Terminal handles less conveniently.",
      },
    ],
    related: ["base64-decode-mac", "uuid-generator-mac", "decode-jwt-offline"],
    updated: "2026-08-23",
  },

  {
    slug: "uuid-generator-mac",
    title: "Generate a UUID on a Mac",
    metaTitle: "UUID Generator for Mac — v4, Offline",
    description:
      "Generate version 4 UUIDs locally on macOS, in bulk, and understand when a random identifier is the wrong choice for a database key.",
    lede: "A UUID from a website is generated on someone else's machine, which is a strange place to source an identifier you are about to treat as unique and unguessable.",
    tool: "UUID Generator",
    sections: [
      {
        h: "Version 4, and why it is the default",
        body: [
          "A version 4 UUID is 122 random bits with six bits reserved to mark the version and variant. No timestamp, no MAC address, no coordination between machines — which is the entire point: two systems that have never communicated can generate identifiers without colliding.",
          "The collision probability is small enough to ignore. You would need to generate billions of them before a duplicate became likely.",
        ],
      },
      {
        h: "When random is the wrong shape",
        body: [
          "Random UUIDs make poor clustered primary keys. Because each new value lands in an arbitrary position, inserts scatter across the index instead of appending to the end, which fragments pages and hurts write performance on large tables.",
          "Where that matters, a time-ordered identifier — UUIDv7, ULID, or a database-native sequence — keeps the uniqueness while restoring locality. UUIDv4 remains the right default for anything that is not a hot clustered index.",
        ],
      },
      {
        h: "Formatting details that cause bugs",
        list: [
          "The canonical form is 36 characters: 8-4-4-4-12 hexadecimal digits with hyphens.",
          "Case is not significant, but comparisons often are — normalise before comparing, or you will get false mismatches.",
          "Some systems store them as a 16-byte binary value and others as a 36-character string; conversions between the two are a routine source of confusion.",
          "Braces around the value are a Microsoft convention and are not part of the canonical form.",
        ],
      },
      {
        h: "Without any tool at all",
        body: ["macOS has a generator built in, which is enough when you need exactly one:"],
        code: "uuidgen",
        codeCaption:
          "Prints an uppercase v4 UUID. Bellows generates them in bulk and in the case you want.",
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "Are UUIDs guaranteed unique?",
        a: "Not guaranteed, but the probability of a collision among version 4 UUIDs is so small it is not a practical concern. You would need to generate on the order of a billion per second for decades before it became likely.",
      },
      {
        q: "Is a UUID secure enough to use as a token?",
        a: "A version 4 UUID has 122 bits of randomness, which is plenty of entropy — provided it came from a cryptographic random source. The greater risk is treating an identifier that appears in URLs and logs as if it were a secret.",
      },
      {
        q: "How do I generate a UUID in macOS Terminal?",
        a: "Run uuidgen. It produces an uppercase version 4 UUID.",
      },
    ],
    related: ["hash-generator-mac", "base64-decode-mac", "json-formatter-mac"],
    updated: "2026-08-23",
  },

  {
    slug: "ip-subnet-calculator",
    title: "Work out a subnet from CIDR notation",
    metaTitle: "IP Subnet Calculator for Mac — CIDR, Offline",
    description:
      "Turn CIDR notation into a netmask, address range, usable host count and RFC 1918 status on macOS, without doing binary arithmetic in your head.",
    lede: "192.168.1.10/24 contains everything you need to know about the network — but only after arithmetic that nobody should be doing mentally at the point they need the answer.",
    tool: "IP / Subnet",
    sections: [
      {
        h: "What the slash actually means",
        body: [
          "The number after the slash is how many leading bits are the network. A /24 fixes the first 24 bits and leaves 8 for hosts, giving 256 addresses of which 254 are usable — the first is the network address and the last is broadcast.",
          "Every step down the prefix doubles the size: /25 is 128 addresses, /23 is 512. The pattern is regular, which is why it feels like it should be easy, and error-prone, which is why it is worth checking.",
        ],
      },
      {
        h: "The sizes worth memorising",
        list: [
          "/30 — 4 addresses, 2 usable. Point-to-point links.",
          "/29 — 8 addresses, 6 usable.",
          "/24 — 256 addresses, 254 usable. The classic small network.",
          "/16 — 65,536 addresses. 10.0.0.0/16 and similar.",
          "/8 — 16,777,216 addresses. The whole of 10.0.0.0/8.",
        ],
      },
      {
        h: "Private ranges under RFC 1918",
        body: [
          "Three ranges are reserved for private use and are never routed on the public internet:",
        ],
        code:
          "10.0.0.0/8         10.0.0.0     – 10.255.255.255\n172.16.0.0/12      172.16.0.0   – 172.31.255.255\n192.168.0.0/16     192.168.0.0  – 192.168.255.255",
        codeCaption:
          "The middle one is the one people get wrong: 172.16 to 172.31, not all of 172.",
      },
      {
        h: "The other reserved ranges",
        list: [
          "127.0.0.0/8 — loopback. The whole range, not just 127.0.0.1.",
          "169.254.0.0/16 — link-local. An address here usually means DHCP failed.",
          "100.64.0.0/10 — carrier-grade NAT, which is why it appears in some ISP and VPN setups.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "How many usable hosts are in a /24?",
        a: "254. A /24 holds 256 addresses; the first is the network address and the last is the broadcast address, so neither can be assigned to a host.",
      },
      {
        q: "Is 172.20.0.1 a private address?",
        a: "Yes. RFC 1918 reserves 172.16.0.0/12, which covers 172.16.0.0 through 172.31.255.255. Only that span of the 172 range is private.",
      },
      {
        q: "What does a 169.254 address mean?",
        a: "It is a link-local address, self-assigned when a device cannot reach a DHCP server. It almost always indicates a network configuration failure rather than a working setup.",
      },
    ],
    related: ["port-number-lookup", "http-status-codes", "unix-timestamp-converter"],
    updated: "2026-08-23",
  },

  {
    slug: "cron-expression-builder",
    title: "Read and write a cron expression",
    metaTitle: "Cron Expression Builder for Mac — Offline",
    description:
      "Build and check cron schedules on macOS, see the next run times, and avoid the day-of-week and day-of-month trap that fires jobs far more often than intended.",
    lede: "Five fields with no labels, and one of them counts from a different starting number than the rest. Cron is read wrongly more often than almost any other syntax in common use.",
    tool: "Cron Builder",
    sections: [
      {
        h: "The five fields",
        code:
          "*  *  *  *  *\n│  │  │  │  └── day of week   (0-7, both 0 and 7 mean Sunday)\n│  │  │  └───── month        (1-12)\n│  │  └──────── day of month (1-31)\n│  └─────────── hour         (0-23)\n└────────────── minute       (0-59)",
        codeCaption:
          "Minutes and hours start at zero; days and months start at one. That inconsistency is the source of a great many mistakes.",
      },
      {
        h: "The trap that actually bites",
        body: [
          "When both day-of-month and day-of-week are restricted, cron treats them as OR, not AND. So 0 0 1 * 1 does not mean \"the first of the month, if it is a Monday\" — it means \"the first of the month, and also every Monday\".",
          "This is the single most common cron bug, because the wrong reading is the intuitive one and the job appears to work. It simply runs far more often than intended.",
        ],
      },
      {
        h: "The syntax worth knowing",
        list: [
          "* — every value.",
          "*/15 — every fifteenth, so at 0, 15, 30 and 45 minutes past.",
          "1-5 — an inclusive range. In the day-of-week field, Monday through Friday.",
          "1,15 — a list of specific values.",
          "0 9 * * 1-5 — nine in the morning, on weekdays.",
        ],
      },
      {
        h: "Which time zone it runs in",
        body: [
          "Traditional cron uses the system time zone of the machine it runs on, which means a job scheduled for 02:30 may run twice or not at all on the days that clocks change. Scheduling in UTC avoids it entirely; if that is not possible, avoid the hour around the transition.",
          "Not every scheduler agrees on the syntax either. Quartz, used by many Java schedulers, takes six or seven fields with seconds at the front, so an expression copied between the two will be silently misread.",
        ],
      },
      {
        h: "Seeing the next runs",
        body: [
          "The only reliable way to check a schedule is to look at when it would actually fire. Bellows lists the next run times for an expression, which turns a guess into a fact — and makes the day-of-week trap obvious the moment it appears.",
        ],
      },
      VERIFY,
    ],
    faqs: [
      {
        q: "What does */15 mean in cron?",
        a: "Every fifteenth unit of that field. In the minute field it fires at 0, 15, 30 and 45 minutes past the hour.",
      },
      {
        q: "Does 0 0 1 * 1 run only on a Monday the 1st?",
        a: "No. When both day-of-month and day-of-week are restricted, cron combines them with OR. That expression runs on the first of every month and on every Monday.",
      },
      {
        q: "What time zone does cron use?",
        a: "The system time zone of the machine running it, unless the scheduler supports setting one explicitly. Jobs scheduled during a daylight-saving transition can run twice or be skipped.",
      },
    ],
    related: ["unix-timestamp-converter", "ip-subnet-calculator", "json-formatter-mac"],
    updated: "2026-08-23",
  },
];

export const BY_SLUG: Record<string, ToolPage> = Object.fromEntries(
  TOOL_PAGES.map((p) => [p.slug, p]),
);

export function getToolPage(slug: string): ToolPage | undefined {
  return BY_SLUG[slug];
}
