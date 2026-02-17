export const metadata = {
  title: "Terms of Service — Vault Apps",
  description:
    "Terms of service for BrowserVault, CameraVault, FitnessVault, GameVault, MailVault, MusicVault, TranslatorVault, and CalcVault.",
};

export default function VaultTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-2 text-lg text-neutral-300">Vault Apps</p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 17, 2026
      </p>

      <p className="mb-6">
        These Terms of Service (&quot;Terms&quot;) govern your use of
        BrowserVault, CameraVault, FitnessVault, GameVault, MailVault,
        MusicVault, TranslatorVault, and CalcVault (collectively, &quot;the
        Apps&quot;), published by Eduard Bruch. By downloading, installing, or
        using any of the Apps, you agree to these Terms.
      </p>

      {/* 1. Security Disclaimer */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Security Disclaimer
      </h2>
      <p className="mb-6 border-l-4 border-amber-500 pl-4 text-neutral-100">
        While the Apps use AES-256 encryption and industry-standard security
        practices to protect your data, <strong>no security system is
        impenetrable</strong>. We do not guarantee absolute security of your
        data. You acknowledge that no method of electronic storage is 100%
        secure, and we cannot guarantee the absolute safety of your content.
      </p>

      {/* 2. Data Loss */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Data Loss and Recovery
      </h2>
      <p className="mb-6 border-l-4 border-red-500 pl-4 text-neutral-100">
        All data is stored <strong>only on your device</strong>. If you
        uninstall the App, forget your PIN, reset your device, or lose your
        device, your encrypted data <strong>cannot be recovered</strong> — by
        you, by us, or by anyone else. You are solely responsible for
        maintaining any backups you may need. Eduard Bruch is not liable for
        any data loss resulting from device failure, uninstallation, PIN loss,
        or any other cause.
      </p>

      {/* 3. PIN Responsibility */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. PIN Responsibility
      </h2>
      <p className="mb-6">
        You are responsible for keeping your PIN confidential. We do not have
        access to your PIN and cannot reset it. If you share your PIN with
        others, you do so at your own risk.
      </p>

      {/* 4. Subscriptions */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Subscriptions and Payments
      </h2>
      <ul className="mb-6 list-disc pl-6 space-y-2">
        <li>
          Payment will be charged to your Apple ID account at confirmation of
          purchase.
        </li>
        <li>
          Subscription automatically renews unless canceled at least 24 hours
          before the end of the current period.
        </li>
        <li>
          Your account will be charged for renewal within 24 hours prior to the
          end of the current period at the rate of the selected plan.
        </li>
        <li>
          You can manage and cancel your subscriptions by going to your account
          settings on the App Store after purchase.
        </li>
        <li>
          Any unused portion of a free trial period, if offered, will be
          forfeited when you purchase a subscription.
        </li>
      </ul>

      {/* 5. Intellectual Property */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. Intellectual Property
      </h2>
      <p className="mb-6">
        All app designs, graphics, and software are the intellectual property of
        Eduard Bruch. Your personal content (photos, videos, notes) stored in
        the vault remains your property at all times.
      </p>

      {/* 6. Limitation of Liability */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by applicable law, Eduard Bruch shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, including but not limited to loss of data, loss of
        privacy, or loss of content stored in the vault. Your sole remedy for
        dissatisfaction with the Apps is to stop using them and uninstall them.
      </p>

      {/* 7. No Warranty */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The Apps are provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, either express or implied, including but
        not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement.
      </p>

      {/* 8. Prohibited Use */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Prohibited Use
      </h2>
      <p className="mb-6">
        You agree not to use the Apps for any unlawful purpose. You are solely
        responsible for the content you store in the vault. We do not monitor,
        review, or access your stored content.
      </p>

      {/* 9. Governing Law */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Governing Law
      </h2>
      <p className="mb-6">
        These Terms are governed by the laws of the Federal Republic of Germany.
        If you are a consumer within the European Union, you also benefit from
        mandatory consumer protection provisions in your country of residence.
        The place of jurisdiction is Hamburg, Germany, except where mandatory
        consumer protection law provides otherwise.
      </p>

      {/* 10. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Changes to These Terms
      </h2>
      <p className="mb-6">
        We may update these Terms from time to time. Continued use of the Apps
        after changes constitutes acceptance of the updated Terms.
      </p>

      {/* 11. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        11. Contact
      </h2>
      <p>
        For questions about these Terms, contact:{" "}
        <a
          href="mailto:support@eduardbruch.com"
          className="text-indigo-400 underline"
        >
          support@eduardbruch.com
        </a>
      </p>
    </main>
  );
}
