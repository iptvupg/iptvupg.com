import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "IPTV UPG Privacy Policy. Learn how we collect, use, and protect your personal data when you use our IPTV streaming service.",
  alternates: {
    canonical: "https://www.iptvupg.com/privacy",
  },
  openGraph: {
    title: "Privacy Policy | IPTV UPG",
    description: "Learn how IPTV UPG collects, uses, and protects your personal data.",
    url: "https://www.iptvupg.com/privacy",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.iptvupg.com/privacy#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
        { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://www.iptvupg.com/privacy" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.iptvupg.com/privacy#webpage",
      "url": "https://www.iptvupg.com/privacy",
      "name": "Privacy Policy | IPTV UPG",
      "dateModified": "2026-04-06",
      "publisher": { "@id": "https://www.iptvupg.com/#organization" },
      "breadcrumb": { "@id": "https://www.iptvupg.com/privacy#breadcrumb" },
    },
  ],
};

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[800px]">
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            Privacy Policy
          </h1>
          <p className="mb-10 text-sm text-text-muted">
            Last updated: April 6, 2026
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* 1 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                1. Introduction
              </h2>
              <p>
                IPTV UPG (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;our&rdquo;) operates the website{" "}
                <strong className="text-text-primary">iptvupg.com</strong> and
                provides IPTV streaming subscription services. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your personal information when you visit our website or
                subscribe to our service.
              </p>
              <p className="mt-3">
                By accessing or using our service, you agree to the collection
                and use of information in accordance with this policy. If you
                do not agree, please discontinue use of our service.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                2. Information We Collect
              </h2>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                2.1 Personal Information
              </h3>
              <p>
                When you register, subscribe, or contact us, we may collect:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Full name and email address</li>
                <li>Phone number (if provided via WhatsApp or contact form)</li>
                <li>Payment information (processed securely by third-party payment processors)</li>
                <li>IP address and device information</li>
                <li>Account credentials (username and encrypted password)</li>
              </ul>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                2.2 Automatically Collected Information
              </h3>
              <p>
                When you browse our website, we may automatically collect:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Browser type, version, and language preferences</li>
                <li>Operating system and device type</li>
                <li>Pages visited, time spent, and referring URLs</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                3. How We Use Your Information
              </h2>
              <p>We use the collected information to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Provide, operate, and maintain our IPTV streaming service</li>
                <li>Process subscriptions, payments, and refunds</li>
                <li>Send account-related communications (activation, renewal reminders)</li>
                <li>Respond to customer support inquiries via email or WhatsApp</li>
                <li>Improve our website, service quality, and user experience</li>
                <li>Detect and prevent fraud, unauthorized access, or abuse</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do <strong className="text-text-primary">not</strong> sell,
                trade, or rent your personal information to third parties. We
                may share data with:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  <strong className="text-text-primary">Payment processors</strong>{" "}
                  — to securely process transactions (Visa, Mastercard, cryptocurrency providers)
                </li>
                <li>
                  <strong className="text-text-primary">Service providers</strong>{" "}
                  — who assist with hosting, analytics, and customer support
                </li>
                <li>
                  <strong className="text-text-primary">Legal authorities</strong>{" "}
                  — when required by law, subpoena, or to protect our rights
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                5. Cookies and Tracking
              </h2>
              <p>
                Our website uses cookies and similar technologies to enhance
                your browsing experience. Cookies help us remember your
                preferences, analyze site traffic, and improve our service.
              </p>
              <p className="mt-3">
                You can control cookie settings through your browser
                preferences. Disabling cookies may limit certain features of
                our website.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect
                your personal information, including SSL/TLS encryption for
                data transmission, encrypted password storage, and secure
                payment processing. However, no method of transmission over
                the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information for as long as your
                account is active or as needed to provide our services. If you
                request account deletion, we will remove your data within 30
                days, except where retention is required by law.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                8. Your Rights
              </h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Access, correct, or delete your personal data</li>
                <li>Withdraw consent for data processing</li>
                <li>Request a copy of your data in a portable format</li>
                <li>Object to or restrict certain data processing activities</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{" "}
                <a
                  href="mailto:support@iptvupg.com"
                  className="font-semibold text-accent hover:underline"
                >
                  support@iptvupg.com
                </a>
                .
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                9. Third-Party Links
              </h2>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices of
                these external sites. We encourage you to review their privacy
                policies before providing any personal information.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                10. Children&apos;s Privacy
              </h2>
              <p>
                Our service is not intended for individuals under the age of
                18. We do not knowingly collect personal information from
                children. If we become aware that a child has provided us with
                personal data, we will take steps to delete such information.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                11. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated &ldquo;Last
                updated&rdquo; date. Continued use of our service after
                changes constitutes acceptance of the revised policy.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                12. Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please
                contact us:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:support@iptvupg.com"
                    className="font-semibold text-accent hover:underline"
                  >
                    support@iptvupg.com
                  </a>
                </li>
                <li>Phone / WhatsApp: +44 7848 197761</li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
