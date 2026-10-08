// Entity hub JSON-LD: the developer (Person/Organization), this site, and every product.
// Canonical sentences and sameAs come from seo-toolbox/IDENTITY.md; keep them verbatim.
// No offers, prices or ratings on purpose.

const HUB = "https://www.eduardbruch.com";
const PERSON = { "@id": `${HUB}/#person` };

const SAME_AS = [
  "https://github.com/eduardbach777",
  "https://themacexpert.substack.com",
  "https://www.youtube.com/channel/UCwPzbLm2QbhrJxLK6YLc73Q",
  "https://medium.com/@eduardbruch3",
  "https://www.linkedin.com/in/eduard-bruch-qrs2e/",
];

const APPS = [
  {
    "@type": "SoftwareApplication",
    "@id": "https://sounddial.eu/#app",
    name: "SoundDial",
    description:
      "SoundDial is a menu-bar volume mixer for Mac that gives every app its own volume, mute, EQ and output device, as a one-time purchase on the Mac App Store.",
    url: "https://sounddial.eu",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "macOS",
    author: PERSON,
    sameAs: ["https://apps.apple.com/app/id6772792641"],
  },
  {
    "@type": "SoftwareApplication",
    "@id": "https://stashphotovault.com/#app",
    name: "Stash: Calculator Photo Vault",
    description:
      "Stash: Calculator Photo Vault is an iPhone app that hides photos, videos and files behind a working calculator and encrypts them on the device.",
    url: "https://stashphotovault.com",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    author: PERSON,
    sameAs: ["https://apps.apple.com/app/id6759871587"],
  },
  {
    "@type": "SoftwareApplication",
    "@id": "https://gazecue.com/#app",
    name: "Gazecue: Teleprompter",
    description:
      "Gazecue: Teleprompter is a teleprompter and camera app for iPhone and iPad that scrolls your script close to the lens while you record, so you can read every line and still look at your viewer.",
    url: "https://gazecue.com",
    applicationCategory: "MultimediaApplication",
    operatingSystem: "iOS, iPadOS",
    author: PERSON,
    sameAs: ["https://apps.apple.com/app/id6771087312"],
  },
  {
    "@type": "SoftwareApplication",
    "@id": "https://pdfopus.com/#app",
    name: "PDF Opus",
    description:
      "PDF Opus is a PDF editor for Mac, iPhone and iPad that is being built by Eduard Bruch; it is not available yet and has a waitlist.",
    url: "https://pdfopus.com",
    applicationCategory: "BusinessApplication",
    operatingSystem: "macOS, iOS, iPadOS",
    author: PERSON,
    creativeWorkStatus: "In development",
  },
];

const GRAPH = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${HUB}/#person`,
      name: "Eduard Bruch",
      url: HUB,
      jobTitle: "Independent software developer",
      address: { "@type": "PostalAddress", addressLocality: "Hamburg", addressCountry: "DE" },
      sameAs: SAME_AS,
    },
    {
      "@type": "Organization",
      "@id": `${HUB}/#org`,
      name: "Eduard Bruch",
      url: HUB,
      founder: PERSON,
      sameAs: SAME_AS,
    },
    {
      "@type": "WebSite",
      "@id": `${HUB}/#website`,
      name: "Eduard Bruch",
      url: HUB,
      publisher: { "@id": `${HUB}/#org` },
    },
    {
      "@type": "ItemList",
      "@id": `${HUB}/#apps`,
      name: "Apps by Eduard Bruch",
      itemListElement: APPS.map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
    },
  ],
};

export default function EntityGraph() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(GRAPH).replace(/</g, "\\u003c") }}
    />
  );
}
