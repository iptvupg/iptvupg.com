import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "IPTV UPG Terms of Service. Read the terms and conditions governing your use of our IPTV streaming subscription service.",
  alternates: {
    canonical: "https://www.iptvupg.com/terms",
    languages: {
      "en": "https://www.iptvupg.com/terms",
      "x-default": "https://www.iptvupg.com/terms",
    },
  },
  openGraph: {
    title: "Terms of Service | IPTV UPG",
    description: "Terms and conditions governing your use of the IPTV UPG streaming service.",
    url: "https://www.iptvupg.com/terms",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.iptvupg.com/terms#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
        { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://www.iptvupg.com/terms" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.iptvupg.com/terms#webpage",
      "url": "https://www.iptvupg.com/terms",
      "name": "Terms of Service | IPTV UPG",
      "dateModified": "2026-04-06",
      "isPartOf": { "@id": "https://www.iptvupg.com/#website" },
      "publisher": { "@id": "https://www.iptvupg.com/#organization" },
      "breadcrumb": { "@id": "https://www.iptvupg.com/terms#breadcrumb" },
    },
  ],
};

export default function TermsOfService() {
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
            Terms of Service
          </h1>
          <p className="mb-10 text-sm text-text-muted">
            Last updated: April 6, 2026
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* 1 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the IPTV UPG website (
                <strong className="text-text-primary">iptvupg.com</strong>) and
                its services, you agree to be bound by these Terms of Service.
                If you do not agree to these terms, you must not use our
                service.
              </p>
              <p className="mt-3">
                We reserve the right to modify these terms at any time.
                Continued use of the service after modifications constitutes
                acceptance of the updated terms.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                2. Service Description
              </h2>
              <p>
                IPTV UPG provides Internet Protocol Television (IPTV)
                subscription services, including access to live TV channels,
                video-on-demand content, and electronic program guide (EPG)
                features. Our service is delivered over the internet and
                requires a compatible device and stable internet connection.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Access to 24,000+ live TV channels from 190+ countries</li>
                <li>120,000+ movies and TV series on demand</li>
                <li>HD and 4K/UHD streaming quality</li>
                <li>2 simultaneous device connections per subscription</li>
                <li>24/7 customer support</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                3. Account Registration
              </h2>
              <p>
                To use our service, you must create an account and provide
                accurate, complete information. You are responsible for:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activity that occurs under your account</li>
                <li>Notifying us immediately of any unauthorized access</li>
                <li>Ensuring your contact information remains up to date</li>
              </ul>
              <p className="mt-3">
                You must be at least 18 years old to create an account and
                subscribe to our service.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                4. Subscription Plans and Payment
              </h2>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                4.1 Pricing
              </h3>
              <p>
                IPTV UPG offers the following subscription plans:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">1 Month:</strong> $16.00</li>
                <li><strong className="text-text-primary">3 Months:</strong> $39.00 ($13.00/month)</li>
                <li><strong className="text-text-primary">6 Months:</strong> $60.00 ($10.00/month)</li>
                <li><strong className="text-text-primary">12 Months:</strong> $90.00 ($7.50/month)</li>
              </ul>
              <p className="mt-3">
                Prices are in US dollars and may be subject to change. Any
                price changes will not affect active subscriptions.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                4.2 Payment Methods
              </h3>
              <p>
                We accept Visa, Mastercard, and cryptocurrency payments. All
                transactions are processed securely through our authorized
                payment providers. You may also purchase subscriptions via
                WhatsApp at +44 7848 197761.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                4.3 Subscription Activation
              </h3>
              <p>
                Subscriptions are activated instantly upon successful payment.
                Login credentials are delivered via email within minutes.
                Your subscription period begins at the time of activation.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                5. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Share, resell, or redistribute your account credentials</li>
                <li>Use the service for any illegal purpose</li>
                <li>Attempt to reverse-engineer, decompile, or hack the service</li>
                <li>Record, redistribute, or publicly broadcast streamed content</li>
                <li>Use VPNs or proxies to circumvent geographic restrictions where prohibited</li>
                <li>Exceed the maximum number of simultaneous connections for your plan</li>
              </ul>
              <p className="mt-3">
                Violation of these terms may result in immediate account
                suspension or termination without refund.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                6. Service Availability
              </h2>
              <p>
                We strive to maintain 99.9% server uptime. However, we do not
                guarantee uninterrupted access to the service. Temporary
                interruptions may occur due to:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Scheduled maintenance (advance notice will be provided when possible)</li>
                <li>Server upgrades and infrastructure improvements</li>
                <li>Third-party service provider outages</li>
                <li>Force majeure events beyond our control</li>
              </ul>
              <p className="mt-3">
                Channel lineups, VOD libraries, and content availability are
                subject to change without prior notice.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                7. Refund Policy
              </h2>
              <p>
                All plans include a{" "}
                <strong className="text-text-primary">
                  7-day money-back guarantee
                </strong>
                . If you are unsatisfied with our service within the first 7
                days of your subscription, you may request a full refund. For
                complete details, please see our{" "}
                <a
                  href="/refund"
                  className="font-semibold text-accent hover:underline"
                >
                  Refund Policy
                </a>
                .
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                8. Intellectual Property
              </h2>
              <p>
                All content on the IPTV UPG website, including text, graphics,
                logos, icons, and software, is the property of IPTV UPG or its
                content providers and is protected by applicable copyright and
                trademark laws.
              </p>
              <p className="mt-3">
                The content streamed through our service is owned by the
                respective content providers and broadcasters. IPTV UPG does
                not claim ownership of any third-party content.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                9. DMCA Compliance
              </h2>
              <p>
                IPTV UPG respects the intellectual property rights of others.
                If you believe that content available through our service
                infringes your copyright, please refer to our{" "}
                <a
                  href="/dmca"
                  className="font-semibold text-accent hover:underline"
                >
                  DMCA Policy
                </a>{" "}
                for instructions on filing a takedown notice.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                10. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, IPTV UPG shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages arising from your use of the service,
                including but not limited to:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Loss of data, revenue, or profits</li>
                <li>Service interruptions or content unavailability</li>
                <li>Unauthorized access to your account</li>
                <li>Errors or inaccuracies in content</li>
              </ul>
              <p className="mt-3">
                Our total liability for any claim shall not exceed the amount
                you paid for the current subscription period.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                11. Account Termination
              </h2>
              <p>
                We reserve the right to suspend or terminate your account at
                any time for violation of these terms. You may cancel your
                subscription at any time by contacting our support team. Upon
                cancellation, your access will remain active until the end of
                the current billing period.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                12. Governing Law
              </h2>
              <p>
                These Terms of Service are governed by and construed in
                accordance with the laws of the State of Texas, United
                States, without regard to its conflict of law provisions.
                Any disputes arising from these terms shall be subject to
                the exclusive jurisdiction of the courts located in Dallas
                County, Texas, and shall be resolved through good-faith
                negotiation before pursuing legal remedies.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                13. Contact Us
              </h2>
              <p>
                For questions about these Terms of Service, contact us:
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
