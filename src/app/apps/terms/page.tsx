export const metadata = {
  title: "Terms of Service — Health, Religious, Utility & Productivity Apps",
  description:
    "Terms of service for quit addiction apps, religious study apps, utility apps, PDF Scanner, and BabyBump by Eduard Bruch.",
};

export default function AppsTerms() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 text-neutral-200">
      <h1 className="mb-4 text-4xl font-bold text-white">Terms of Service</h1>
      <p className="mb-2 text-lg text-neutral-300">
        Health, Religious, Utility &amp; Productivity Apps
      </p>
      <p className="mb-10 text-sm text-neutral-500">
        Last updated: February 17, 2026
      </p>

      <p className="mb-6">
        These Terms of Service (&quot;Terms&quot;) govern your use of the
        following applications published by Eduard Bruch: Quit Vaping, Quit
        Nicotine Pouches, Quit Smoking Tracker, Quit Weed, Quit Porn, Bible
        Study, Quran Study, Gita Study, Torah Study, Dhamma Study, Guru Granth,
        Double Calculator, Unit Convert, Voice Recorder, QR Scanner,
        Teleprompter, PDF Scanner, and BabyBump (collectively, &quot;the
        Apps&quot;). By downloading, installing, or using any of the Apps, you
        agree to these Terms.
      </p>

      {/* 1. Health Disclaimer */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        1. Health and Medical Disclaimer
      </h2>
      <p className="mb-6 border-l-4 border-emerald-500 pl-4 text-neutral-100">
        <strong>
          The quit addiction apps (Quit Vaping, Quit Nicotine Pouches, Quit
          Smoking Tracker, Quit Weed, Quit Porn) and BabyBump do not provide
          medical advice.
        </strong>{" "}
        All content, tracking features, milestones, and information are for
        informational and motivational purposes only. They are not a substitute
        for professional medical advice, diagnosis, or treatment. Always seek
        the advice of a qualified healthcare provider with any questions you may
        have regarding a medical condition, addiction, or pregnancy. Never
        disregard professional medical advice or delay seeking it because of
        something you have seen in the Apps.
      </p>

      {/* 2. Religious Content */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        2. Religious Content
      </h2>
      <p className="mb-6">
        The religious study apps (Bible Study, Quran Study, Gita Study, Torah
        Study, Dhamma Study, Guru Granth) provide access to religious texts for
        personal study and reference. The texts are presented as-is from
        publicly available translations. We do not provide theological
        interpretation or religious advice.
      </p>

      {/* 3. Subscriptions */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        3. Subscriptions and Payments
      </h2>
      <p className="mb-4">
        Some Apps offer premium features through auto-renewable subscriptions or
        one-time purchases.
      </p>
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

      {/* 4. Intellectual Property */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        4. Intellectual Property
      </h2>
      <p className="mb-6">
        App designs, graphics, and software are the intellectual property of
        Eduard Bruch. Religious texts included in the religious study apps are
        sourced from public domain translations and are not claimed as
        intellectual property by us. Your personal data (notes, recordings,
        documents) remains your property.
      </p>

      {/* 5. User Content */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        5. User Content
      </h2>
      <p className="mb-6">
        Content you create (voice recordings, scanned documents, notes, journal
        entries) is stored on your device only. We have no access to your
        content. You are responsible for the content you create and store.
      </p>

      {/* 6. Limitation of Liability */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        6. Limitation of Liability
      </h2>
      <p className="mb-6">
        To the maximum extent permitted by applicable law, Eduard Bruch shall
        not be liable for any indirect, incidental, special, consequential, or
        punitive damages, or any loss of profits, revenues, data, or goodwill,
        resulting from your use of or inability to use the Apps. In particular,
        we are not liable for any health outcomes related to use of the quit
        addiction apps or BabyBump, which are informational tools only and not
        medical devices.
      </p>

      {/* 7. No Warranty */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        7. Disclaimer of Warranties
      </h2>
      <p className="mb-6">
        The Apps are provided &quot;as is&quot; and &quot;as available&quot;
        without warranties of any kind, either express or implied, including but
        not limited to implied warranties of merchantability, fitness for a
        particular purpose, and non-infringement. We do not warrant that the
        Apps will be uninterrupted, secure, or error-free, or that the content
        (including religious texts) is complete or accurate.
      </p>

      {/* 8. Governing Law */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        8. Governing Law
      </h2>
      <p className="mb-6">
        These Terms are governed by the laws of the Federal Republic of Germany.
        If you are a consumer within the European Union, you also benefit from
        mandatory consumer protection provisions in your country of residence.
        The place of jurisdiction is Hamburg, Germany, except where mandatory
        consumer protection law provides otherwise.
      </p>

      {/* 9. Changes */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        9. Changes to These Terms
      </h2>
      <p className="mb-6">
        We may update these Terms from time to time. Continued use of the Apps
        after changes constitutes acceptance of the updated Terms.
      </p>

      {/* 10. Contact */}
      <h2 className="mb-3 mt-10 text-xl font-semibold text-white">
        10. Contact
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
