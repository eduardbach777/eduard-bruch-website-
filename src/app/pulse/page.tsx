import Link from "next/link";

export const metadata = {
  title: "Pulse - System Monitor for Mac | CPU, Memory, Network & More",
  description:
    "Monitor your Mac's CPU, memory, network speed, battery health, temperature, and disk usage from the menu bar. The modern alternative to iStat Menus.",
};

const features = [
  { icon: "CPU", label: "CPU Usage", desc: "Per-core load, system vs. user, load averages" },
  { icon: "RAM", label: "Memory", desc: "Pressure level, app memory, wired, compressed, swap" },
  { icon: "NET", label: "Network", desc: "Upload & download speed, local & public IP" },
  { icon: "BAT", label: "Battery", desc: "Health %, cycle count, wattage, time remaining" },
  { icon: "TMP", label: "Temperature", desc: "CPU & GPU thermals, per-sensor readings" },
  { icon: "DSK", label: "Disk", desc: "Volume usage, free space, SMART health status" },
];

export default function PulseLanding() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      {/* Hero */}
      <section className="mb-20 text-center">
        <h1 className="mb-4 text-4xl font-light tracking-[0.25em] text-white">
          PULSE
        </h1>
        <p className="mb-2 text-lg tracking-wide text-white/70">
          System Monitor for Mac
        </p>
        <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-neutral-400">
          CPU, memory, network, battery, temperature, disk, GPU, fans, and
          processes — all visible from your menu bar. Built with SwiftUI for
          macOS&nbsp;14+.
        </p>
        <a
          href="https://apps.apple.com/app/pulse-system-monitor/id6744194761"
          className="btn btn-primary"
        >
          DOWNLOAD ON THE MAC APP STORE
        </a>
      </section>

      {/* Features Grid */}
      <section className="mb-20">
        <h2 className="mb-8 text-center text-xl font-semibold tracking-[0.15em] text-white">
          What Pulse Monitors
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.label}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <span className="mb-2 block text-xs font-semibold tracking-widest text-indigo-400">
                {f.icon}
              </span>
              <p className="mb-1 text-sm font-medium text-white">{f.label}</p>
              <p className="text-xs leading-relaxed text-neutral-500">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Q&A Sections */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-xl font-semibold tracking-[0.15em] text-white">
          Frequently Asked Questions
        </h2>

        {/* Category 1: Choosing a Mac System Monitor */}
        <div className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-white">
            Choosing a Mac System Monitor
          </h2>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What&apos;s the best system monitor app for Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              The most popular paid option is iStat Menus ($14.99), which offers
              CPU, GPU, memory, network, disk, and temperature monitoring. Stats
              is the top free, open-source choice. Pulse is a modern SwiftUI
              alternative that combines comprehensive monitoring with a clean
              menu bar interface at a lower price point.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What are the best alternatives to iStat Menus?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Popular iStat Menus alternatives include Stats (free,
              open-source), MenuMeters (free), iStatistica Pro (with widgets and
              remote access), TG Pro (thermal-focused), and Pulse. Pulse offers
              real-time CPU, memory, network, battery, temperature, disk, and
              GPU monitoring from the menu bar with a native SwiftUI design.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              Is there a better alternative to Activity Monitor on Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Activity Monitor requires you to open a separate window each time.
              Menu bar monitors like Pulse, iStat Menus, or Stats give you
              instant access to CPU, memory, and network stats without
              interrupting your workflow. Pulse also adds battery health,
              temperature sensors, GPU utilization, and fan speeds — none of
              which are available in Activity Monitor.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What&apos;s the best menu bar system monitor for Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              For a comprehensive, paid solution, iStat Menus has long been the
              standard. For a free option, Stats is excellent. Pulse sits in
              between — a modern, lightweight app that shows CPU, memory,
              network speed, battery, and temperature right in the menu bar with
              customizable display styles (text, compact, or graph).
            </p>
          </div>
        </div>

        {/* Category 2: Monitoring Performance on Mac */}
        <div className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-white">
            Monitoring Performance on Your Mac
          </h2>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How do I check CPU usage on my Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Open Activity Monitor (press Cmd+Space, type &quot;Activity
              Monitor&quot;) and click the CPU tab. Sort by &quot;% CPU&quot; to
              see which apps consume the most. For always-visible monitoring, a
              menu bar app like Pulse shows per-core CPU load, system vs. user
              breakdown, and load averages at a glance.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How do I see which app is using the most memory on Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              In Activity Monitor, click the Memory tab and sort by the
              &quot;Memory&quot; column. The Memory Pressure graph at the bottom
              is the most useful indicator — green means healthy, yellow means
              your Mac is starting to struggle, and red means it&apos;s heavily
              using swap. Pulse displays memory pressure, app memory, wired, and
              compressed memory in the menu bar dropdown.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How can I monitor CPU temperature on my MacBook?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              macOS doesn&apos;t show temperature natively. On Intel Macs, you
              can use Terminal:{" "}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-xs text-indigo-300">
                sudo powermetrics --samplers smc
              </code>
              . On Apple Silicon (M1–M4), third-party apps are the only
              reliable option. Pulse, iStat Menus, and Stats all read
              temperature sensors and can alert you if your CPU gets too hot.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How do I monitor network speed on Mac in real time?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Activity Monitor&apos;s Network tab shows per-app bandwidth, but
              not total throughput. For real-time upload and download speeds in
              your menu bar, use a monitoring app. Pulse shows live network
              speed, your local IP, and public IP — click either to copy.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How do I check my Mac&apos;s battery health?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Go to Apple menu &rarr; System Settings &rarr; Battery &rarr;
              Battery Health. This shows your condition (Normal or Service
              Recommended) and maximum capacity. For more detail — cycle count,
              wattage, voltage, and degradation alerts — use CoconutBattery or
              Pulse, which tracks battery health continuously in the menu bar.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How do I see disk usage on Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Click the Apple menu &rarr; About This Mac &rarr; More Info
              &rarr; Storage. This shows a color-coded bar of what&apos;s using
              space. For real-time monitoring with free space warnings, Pulse
              shows disk usage per volume and alerts you when a drive is getting
              full.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How do I check GPU usage on Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Activity Monitor shows GPU usage per process under the
              &quot;GPU&quot; column (you may need to add it via View &rarr;
              Columns). For overall GPU utilization and VRAM usage, use a
              dedicated monitor. Pulse shows GPU load percentage and VRAM in the
              panel.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How can I see fan speed on my Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              macOS doesn&apos;t expose fan speed in any built-in tool. You need
              a third-party app like Macs Fan Control, TG Pro, or Pulse. Pulse
              shows current fan RPM alongside temperature sensors so you can
              correlate heat with fan response.
            </p>
          </div>
        </div>

        {/* Category 3: Understanding Mac Performance */}
        <div className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-white">
            Understanding Mac Performance
          </h2>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What does memory pressure mean on Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Memory Pressure shows how efficiently your Mac&apos;s RAM is
              handling demand. Green means plenty of free memory. Yellow means
              macOS is compressing memory to make room. Red means your Mac is
              swapping to disk, which causes significant slowdowns. If you see
              yellow or red frequently, you likely need to close apps or
              consider more RAM.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What is normal CPU temperature for a Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              At idle, most Macs sit between 35–55°C. Under moderate load,
              60–80°C is normal. During intensive tasks (video export, compiling
              code), temperatures can reach 90–100°C — macOS will throttle the
              CPU to prevent damage. Sustained temperatures above 95°C warrant
              investigation. A monitoring app helps you spot thermal issues
              before they cause throttling.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What is normal CPU usage on Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              When idle, CPU usage should be 5–15%. During normal app usage,
              20–40% is typical. If your CPU stays above 50% while idle, a
              background process is likely misbehaving — check Activity Monitor
              or your menu bar monitor to identify the culprit.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              Why is my Mac running hot and how do I fix it?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Common causes: resource-intensive apps (video editing, gaming,
              Xcode builds), too many browser tabs, blocked ventilation, dust
              buildup, or a runaway background process. First, check which
              process is consuming the most CPU. Close unnecessary apps, ensure
              air vents are clear, and restart if needed. A system monitor helps
              you identify the exact cause instantly.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              How much RAM do I actually need on my Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              8 GB handles web browsing, email, and light productivity. 16 GB
              is recommended for developers, designers, and anyone running
              multiple apps simultaneously. 32 GB+ is for video editors, data
              scientists, and virtual machine users. Check your Memory Pressure
              — if it&apos;s frequently yellow, you&apos;d benefit from more
              RAM.
            </p>
          </div>
        </div>

        {/* Category 4: About Pulse */}
        <div className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-white">About Pulse</h2>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              Is Pulse safe for my Mac?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Yes. Pulse uses only read-only macOS system APIs — it cannot
              modify, alter, or interfere with your system. It runs in the App
              Sandbox and is distributed through the Mac App Store, which means
              Apple has reviewed it for security and privacy compliance.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              Does Pulse work on Apple Silicon and Intel Macs?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Yes. Pulse is a universal binary that runs natively on both Apple
              Silicon (M1, M2, M3, M4) and Intel-based Macs. No Rosetta
              required.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="mb-1 font-medium text-white">
              What macOS version does Pulse require?
            </h3>
            <p className="text-sm leading-relaxed text-neutral-400">
              Pulse requires macOS 14.0 (Sonoma) or later. It&apos;s built with
              SwiftUI and takes advantage of modern macOS APIs for efficient,
              low-overhead monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-16 text-center">
        <div className="rounded-xl border border-white/10 bg-white/[0.02] px-8 py-12">
          <h2 className="mb-3 text-2xl font-light tracking-[0.15em] text-white">
            Take control of your Mac&apos;s performance
          </h2>
          <p className="mb-8 text-sm text-neutral-400">
            Available on the Mac App Store.
          </p>
          <a
            href="https://apps.apple.com/app/pulse-system-monitor/id6744194761"
            className="btn btn-primary"
          >
            GET PULSE
          </a>
        </div>
      </section>

      {/* Next article funnel */}
      <section className="mb-12">
        <Link
          href="/pulse/support"
          className="group flex items-center justify-between rounded-lg border border-white/10 p-5 transition-colors hover:border-white/25 hover:bg-white/[0.02]"
        >
          <div>
            <span className="mb-1 block text-xs tracking-widest text-indigo-400">
              Continue Reading
            </span>
            <span className="text-sm font-medium text-white">
              Pulse Support &amp; FAQ
            </span>
          </div>
          <span className="text-lg text-white/30 transition-transform group-hover:translate-x-1">
            &rarr;
          </span>
        </Link>
      </section>

      {/* Language switcher */}
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {[
          { code: "de", label: "Deutsch" },
          { code: "fr", label: "Francais" },
          { code: "es", label: "Espanol" },
          { code: "pt", label: "Portugues" },
          { code: "it", label: "Italiano" },
          { code: "nl", label: "Nederlands" },
          { code: "sv", label: "Svenska" },
          { code: "pl", label: "Polski" },
          { code: "tr", label: "Turkce" },
          { code: "ru", label: "Русский" },
          { code: "ja", label: "日本語" },
          { code: "ko", label: "한국어" },
          { code: "zh", label: "中文" },
          { code: "ar", label: "العربية" },
        ].map((l) => (
          <Link
            key={l.code}
            href={`/pulse/${l.code}`}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40 transition-colors hover:border-white/25 hover:text-white/70"
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex justify-center gap-6 text-xs text-neutral-500">
        <Link href="/pulse/support" className="hover:text-neutral-300">
          Support
        </Link>
        <Link href="/pulse/privacy" className="hover:text-neutral-300">
          Privacy Policy
        </Link>
        <Link href="/pulse/terms" className="hover:text-neutral-300">
          Terms of Service
        </Link>
      </div>
    </main>
  );
}
