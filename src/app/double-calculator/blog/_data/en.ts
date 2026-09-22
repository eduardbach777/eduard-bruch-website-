export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  content: string;
}

export interface ArticleSet {
  [slug: string]: Article;
}

export const enArticles: ArticleSet = {
  "how-to-calculate-vat-quickly": {
    slug: "how-to-calculate-vat-quickly",
    title: "How to Calculate VAT Quickly Without a Spreadsheet",
    description:
      "VAT math is simple in theory and error-prone in practice. Here's the fastest way to add or remove VAT from a price without opening Excel.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Adding VAT to a price, or working backward from a VAT-inclusive total to find the net amount, is one of those calculations everyone thinks they remember and almost nobody gets right on the first try. The formulas aren't hard. The problem is doing them reliably, on your phone, in the middle of a client call or while standing at a supplier's counter.</p>

<h2>The two VAT formulas you actually need</h2>
<p>To add VAT to a net price: multiply by (1 + VAT rate). A €100 item at 20% VAT becomes €120.</p>
<p>To remove VAT from a gross price: divide by (1 + VAT rate). A €120 gross price at 20% VAT has a net value of €100 — not €96, which is the mistake most people make when they just subtract 20% from the gross figure instead of dividing.</p>
<p>That second formula is where spreadsheet math quietly goes wrong. Subtracting a percentage from a VAT-inclusive price gives you the wrong net amount every time, because the percentage was calculated on the smaller number to begin with.</p>

<h2>Why a spreadsheet is overkill for this</h2>
<p>Opening a spreadsheet, finding the right cell, remembering the formula syntax, and re-entering it for every new rate is a lot of friction for a calculation that takes one line of arithmetic. It also means your VAT math lives buried in a file instead of being something you can do standing up, between meetings, without a laptop.</p>

<h2>A dedicated tool removes the guesswork</h2>
<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Double Calculator</a> is built around exactly this problem: enter a price, pick add or remove VAT, choose or type the rate, and get the net, VAT amount, and gross figure at once — no formula to remember, no spreadsheet to open.</p>

<h2>When this actually matters</h2>
<p>Freelancers quoting a client a VAT-inclusive price. Small business owners checking a supplier invoice. Anyone traveling who wants to know what a price actually costs before the local sales tax gets added. The calculation is the same in every case — the only thing that changes is the rate.</p>

<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Get Double Calculator on the App Store</a> and stop reaching for a spreadsheet for a two-number problem.</p>
`,
  },
  "vat-inclusive-vs-exclusive-price": {
    slug: "vat-inclusive-vs-exclusive-price",
    title: "VAT-Inclusive vs VAT-Exclusive Prices: What's the Difference?",
    description:
      "Net, gross, VAT-inclusive, VAT-exclusive — the terminology alone trips people up. Here's what each term actually means and how to convert between them.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Every invoice, receipt, and price tag involving VAT uses one of two conventions, and mixing them up is one of the most common billing mistakes small businesses make.</p>

<h2>VAT-exclusive (net) price</h2>
<p>This is the price before VAT is added — what the seller actually keeps before tax. B2B invoices between VAT-registered businesses are almost always quoted net, because the buyer will reclaim the VAT anyway, so showing it separately is more useful than baking it in.</p>

<h2>VAT-inclusive (gross) price</h2>
<p>This is the final price the customer actually pays — net plus VAT, all in one number. Consumer-facing prices are legally required to be VAT-inclusive in most countries, because a shopper shouldn't have to do tax math to know what something costs at the till.</p>

<h2>Where people get it wrong</h2>
<p>The most common error is treating a gross price like a net price when calculating VAT backward — subtracting the VAT percentage directly from the gross total instead of dividing by (1 + rate). A €120 gross price at 20% VAT is not €96 net; it's €100 net. The rate has to be applied relative to the net amount, not the gross one, which is exactly the part that's easy to get backward under time pressure.</p>

<h2>Converting between the two instantly</h2>
<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Double Calculator</a> handles both directions without asking you to remember which formula goes which way — enter a net price and see the gross, or enter a gross price and see the net, with the VAT amount broken out clearly either way.</p>

<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Download Double Calculator</a> and never second-guess a VAT conversion again.</p>
`,
  },
  "best-tax-calculator-app-freelancers": {
    slug: "best-tax-calculator-app-freelancers",
    title: "Best Tax and VAT Calculator App for Freelancers",
    description:
      "Freelancers deal with VAT and tax math more than almost anyone — quoting clients, invoicing, checking margins. Here's what to look for in a calculator built for that.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Freelancing means doing tax and VAT math constantly, and doing it in places a full accounting suite doesn't fit — on a call with a prospective client, at a coffee shop finalizing an invoice, or double-checking a number someone just quoted you over the phone.</p>

<h2>What freelancers actually need from a calculator</h2>
<p>Not a full accounting package. Not a spreadsheet template. Just fast, accurate VAT and tax math that works in both directions — net to gross, gross to net — with rates you can adjust per country or per client, because freelance work rarely stays inside one tax jurisdiction for long.</p>

<h2>The three moments this comes up most</h2>
<p>Quoting a price: deciding whether to state a rate net or gross, and knowing exactly what the other number is before you send it. Checking an incoming invoice: confirming a supplier or contractor charged the VAT rate they should have. Reconciling your own numbers before a filing deadline, without waiting until everything is due at once.</p>

<h2>Why a dedicated app beats mental math or a spreadsheet</h2>
<p>Mental math is fast until the rate isn't a round number, or you're going gross-to-net instead of net-to-gross, which is exactly when people trip. A spreadsheet is accurate but slow to open for a single number, and it's not something you'd pull out mid-conversation.</p>
<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Double Calculator</a> sits in between: purpose-built for exactly this math, fast enough to use live, on your phone, without breaking a client conversation to go find a laptop.</p>

<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Get Double Calculator</a> and keep your VAT math as fast as the rest of your freelance workflow.</p>
`,
  },
  "how-to-add-tax-to-a-price": {
    slug: "how-to-add-tax-to-a-price",
    title: "How to Add Sales Tax to a Price (Without Getting It Wrong)",
    description:
      "Adding sales tax sounds simple until the rate has decimals or you're working backward from a total. Here's the reliable way to do it.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>Adding sales tax to a price is one line of math — multiply the price by (1 + tax rate) — but two things make it trickier in practice than it sounds: tax rates are rarely round numbers, and sometimes you're handed the final total and need to work backward to find the pre-tax price instead.</p>

<h2>Adding tax forward</h2>
<p>A $50 item with an 8.25% sales tax rate becomes $50 × 1.0825 = $54.125, which rounds to $54.13. The extra decimal in the rate is exactly where doing this in your head tends to go wrong — it's easy to round the rate itself before multiplying, which compounds into a wrong final number.</p>

<h2>Working backward from a total</h2>
<p>If you're handed a receipt total and need to know the pre-tax price, divide by (1 + tax rate) instead of subtracting the tax percentage directly. A $54.13 total at 8.25% tax works back to roughly $50.00 — subtracting 8.25% from $54.13 directly gives you the wrong number, for the same reason it does with VAT: the rate was calculated on the smaller figure, not the larger one.</p>

<h2>Where this comes up outside accounting</h2>
<p>Splitting a bill and figuring out what each person's pre-tax share actually was. Budgeting a purchase and wanting to know the real cost before tax gets added at checkout. Comparing prices across two receipts with different tax rates baked in.</p>

<h2>Skip the mental math</h2>
<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Double Calculator</a> does both directions instantly — enter a price and a rate to add tax forward, or enter a total and the same rate to work backward to the pre-tax amount.</p>

<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Download Double Calculator on the App Store</a> and get the exact number every time, decimals included.</p>
`,
  },
  "vat-rates-by-country-quick-reference": {
    slug: "vat-rates-by-country-quick-reference",
    title: "Common VAT and Sales Tax Rates — A Quick Reference",
    description:
      "VAT and sales tax rates vary widely by country and even by region. Here's a practical overview of common rates and why keeping a calculator handy beats memorizing them.",
    date: "2026-09-22",
    readTime: "3 min read",
    content: `
<p>VAT and sales tax rates differ enough between countries — and sometimes between regions inside the same country — that memorizing them isn't practical if you do business or travel across more than one jurisdiction.</p>

<h2>Standard VAT rates vary widely</h2>
<p>Within the EU alone, standard VAT rates range from around 17% to 27% depending on the country, with many nations also applying reduced rates for specific categories like food, books, or hospitality. Outside the EU, some countries use VAT, others use GST, and the US uses state and local sales tax instead — which varies not just by state but often by city and county too.</p>

<h2>Why memorizing rates doesn't scale</h2>
<p>The moment you work with clients or suppliers in more than one country, or travel for work, keeping every applicable rate in your head becomes unreliable. Rates also change — governments adjust VAT and sales tax rates periodically, sometimes with little notice, which makes a memorized number a liability rather than a shortcut.</p>

<h2>The practical approach</h2>
<p>Rather than memorizing rates, know where to look one up quickly and have a fast way to apply it. Most invoices and receipts already state the rate that was used — what you actually need is a reliable way to add or remove that rate from a price on the spot.</p>
<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Double Calculator</a> lets you type in whatever rate applies — 19%, 21%, 8.25%, or anything else — and get the net, tax amount, and gross instantly, so the actual rate never has to live in your memory.</p>

<p><a href="https://apps.apple.com/app/double-calculator-tax-vat/id6760940001">Get Double Calculator</a> and handle any VAT or sales tax rate without needing to know it in advance.</p>
`,
  },
};
