import Link from "next/link";

export const metadata = {
  title: "Tome — SQLite Browser for Mac",
  description:
    "A native macOS SQLite browser. Open any .sqlite, .db, or .sqlite3 file — browse tables, edit data inline, run SQL with syntax highlighting, and export to CSV, JSON, or SQL. One-time purchase.",
};

const FEATURES = [
  {
    title: "Open any SQLite file",
    body: "Drop a .sqlite, .db, or .sqlite3 file and you are browsing — tables in the sidebar, data in the grid, schema at a glance.",
  },
  {
    title: "SQL editor with syntax highlighting",
    body: "Write queries with keyword highlighting, autocomplete for table and column names, and instant results below the editor.",
  },
  {
    title: "Edit data inline",
    body: "Click any cell in the grid to edit it. Insert rows, duplicate them, or delete — changes write directly to the database.",
  },
  {
    title: "Export to CSV, JSON, or SQL",
    body: "Export any table or query result. CSV opens in Excel and Numbers, JSON gives you objects keyed by column name, SQL recreates the table anywhere.",
  },
  {
    title: "Schema browser & ER diagrams",
    body: "Tables, views, indices, and triggers in the sidebar. An ER diagram shows relationships between tables at a glance.",
  },
  {
    title: "Native and lightweight",
    body: "SwiftUI and the sqlite3 C API — no Electron, no web wrapper. Opens instantly, uses minimal memory.",
  },
];

export default function TomeLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-neutral-200">
      <p className="mb-3 text-sm font-medium uppercase tracking-wider text-indigo-400">
        macOS
      </p>
      <h1 className="mb-4 text-4xl font-bold text-white">Tome</h1>
      <p className="mb-8 text-xl text-neutral-300">
        A SQLite browser that opens your database and gets out of the way.
      </p>

      <p className="mb-10 text-neutral-400">
        Most SQLite tools are either bloated database IDEs or bare command-line
        utilities. Tome sits between the two — a native Mac app that opens any
        SQLite file, shows you the data, and lets you query, edit, and export
        without setup.
      </p>

      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        {FEATURES.map((f) => (
          <div key={f.title}>
            <h2 className="mb-1 font-semibold text-white">{f.title}</h2>
            <p className="text-sm leading-relaxed text-neutral-400">{f.body}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 rounded-lg border border-neutral-800 bg-neutral-900/50 p-5">
        <p className="mb-1 font-semibold text-white">
          Pay once. Every update included.
        </p>
        <p className="text-sm text-neutral-400">
          No subscription and no account. One purchase on the Mac App Store
          covers every future version.
        </p>
      </div>

      <h2 className="mb-3 text-lg font-semibold text-white">Requirements</h2>
      <p className="mb-10 text-sm text-neutral-400">
        macOS 14.0 (Sonoma) or later. Tome only accesses files you open
        yourself — no network, no telemetry.
      </p>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-800 pt-8 text-sm">
        <a
          href="https://apps.apple.com/app/id6806639875"
          className="text-indigo-400 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          App Store
        </a>
        <Link href="/tome/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </Link>
        <Link href="/tome/terms" className="text-indigo-400 underline">
          Terms of Service
        </Link>
        <Link href="/support" className="text-indigo-400 underline">
          Support
        </Link>
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </div>
    </main>
  );
}
