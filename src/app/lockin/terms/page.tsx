export const metadata = {
  title: "Terms of Service — Lock In!",
  description:
    "Terms of service for Lock In!, the website and app blocker for macOS. One-time purchase, no subscription.",
};

export default function LockInTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-2 text-lg text-neutral-300">Lock In! — Focus</p>
      <p className="mb-10 text-sm text-neutral-500">Last updated: August 18, 2026</p>

      <p className="mb-6">
        These terms govern your use of Lock In! (&quot;the App&quot;), a macOS
        application developed by Eduard Bruch. By downloading or using the App you
        agree to them.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        1. License Grant
      </h2>
      <p className="mb-6">
        Subject to these terms and the Mac App Store terms, you are granted a
        non-exclusive, non-transferable license to use the App on Apple devices
        you own or control. The App is licensed, not sold.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        2. What the App Does
      </h2>
      <p className="mb-4">
        Lock In! blocks websites and applications during timed focus sessions.
        Website blocking is performed by a macOS Network Extension content filter,
        which applies across every browser rather than a single one. The App also
        provides Pomodoro-style breaks, a strict mode, daily goals and focus
        statistics.
      </p>
      <p className="mb-6">
        The App is a productivity aid. It is <strong>not</strong> a parental
        control product, a security product, a VPN, an ad blocker, or a
        content-safety guarantee, and it must not be relied upon as any of those.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        3. Purchase and Payment
      </h2>
      <p className="mb-6">
        The App is a <strong>one-time purchase</strong>. There is no subscription
        and no recurring charge. All payments are processed by Apple through the
        Mac App Store and are subject to Apple&apos;s terms. Refunds are handled
        solely by Apple; we cannot issue them directly.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        4. System Requirements and Permissions
      </h2>
      <p className="mb-4">
        The App requires macOS 14.0 (Sonoma) or later. Website blocking requires
        you to approve a system extension in System Settings. If you decline or
        later disable that approval, website blocking will not function; app
        blocking continues to work.
      </p>
      <p className="mb-6">
        You are responsible for granting these permissions and may revoke them at
        any time in System Settings.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        5. Blocking Is Best-Effort, Not Absolute
      </h2>
      <p className="mb-4">
        This deserves to be stated plainly. The App blocks connections by
        identifying the destination host from DNS queries, TLS SNI, or HTTP host
        headers. It is effective for ordinary browsing, but it{" "}
        <strong>cannot guarantee that a determined user will not circumvent it</strong>.
        Blocking may not apply where, for example:
      </p>
      <ul className="mb-4 list-disc space-y-1 pl-6">
        <li>
          content is served from a domain that is not on your blocklist,
          including content delivery networks;
        </li>
        <li>
          a page has already been loaded and is served from the browser&apos;s
          cache, or an existing connection is reused;
        </li>
        <li>
          traffic is routed through a VPN, proxy, or an encrypted DNS service that
          the filter cannot inspect;
        </li>
        <li>
          the system extension is disabled in System Settings, or the App is
          removed.
        </li>
      </ul>
      <p className="mb-6">
        Strict mode makes a session harder to end early; it does not make the
        blocking technically unbypassable. Use the App as a tool to support your
        intentions, not as an enforcement mechanism you cannot defeat.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        6. Acceptable Use
      </h2>
      <p className="mb-6">
        You agree not to reverse-engineer, decompile, or redistribute the App
        except where such restriction is prohibited by law, and not to use it to
        restrict another person&apos;s device without their knowledge and
        consent.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">7. Privacy</h2>
      <p className="mb-6">
        The App collects no personal data and transmits nothing off your device.
        The content filter does not log or store your browsing. See the{" "}
        <a href="/lockin/privacy" className="text-indigo-400 underline">
          Privacy Policy
        </a>{" "}
        for a detailed description of what the filter can and cannot see.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        8. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The App is provided &quot;as is&quot; and &quot;as available&quot;,
        without warranty of any kind, express or implied, including merchantability,
        fitness for a particular purpose, and non-infringement. We do not warrant
        that the App will be uninterrupted, error-free, or that it will block any
        particular website or application in all circumstances. Your statutory
        rights as a consumer are not affected.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        9. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by law, we are not liable for indirect,
        incidental, special, or consequential damages, including lost productivity,
        lost data, or missed deadlines arising from the use of, or inability to
        use, the App — including any case where a website was blocked that you
        needed, or not blocked when you expected it to be. Liability for damages
        caused intentionally or by gross negligence, and liability under mandatory
        statutory provisions, remains unaffected.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        10. Third-Party Software
      </h2>
      <p className="mb-6">
        The App includes open-source components licensed under the MIT license.
        Their respective licenses continue to apply.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        11. Updates and Termination
      </h2>
      <p className="mb-6">
        Updates may be provided at our discretion and are subject to these terms.
        The license terminates automatically if you breach them; you may terminate
        at any time by deleting the App.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        12. Governing Law
      </h2>
      <p className="mb-6">
        These terms are governed by the laws of the Federal Republic of Germany,
        excluding its conflict-of-law rules. Mandatory consumer protection
        provisions of your country of residence remain unaffected.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">
        13. Changes to These Terms
      </h2>
      <p className="mb-6">
        These terms may be updated; the &quot;last updated&quot; date above
        reflects the current version. Continued use after a change constitutes
        acceptance.
      </p>

      <h2 className="mb-3 mt-8 text-xl font-semibold text-white">14. Contact</h2>
      <p className="mb-1">Eduard Bruch</p>
      <p className="mb-1">Kleinfeld 28c, 21149 Hamburg, Deutschland</p>
      <p className="mb-6">
        E-Mail:{" "}
        <a href="mailto:support@eduardbruch.com" className="text-indigo-400 underline">
          support@eduardbruch.com
        </a>
      </p>

      <p className="mt-12 text-sm text-neutral-500">
        <a href="/lockin" className="underline">
          ← Back to Lock In!
        </a>
      </p>
    </main>
  );
}
