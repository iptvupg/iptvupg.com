import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "IPTV UPG Refund Policy. 7-day money-back guarantee on all plans. Learn how to request a refund for your IPTV subscription.",
  alternates: {
    canonical: "https://www.iptvupg.com/refund",
  },
  openGraph: {
    title: "Refund Policy — 7-Day Money-Back Guarantee | IPTV UPG",
    description: "IPTV UPG 7-day money-back guarantee. Learn how to request a refund for your subscription.",
    url: "https://www.iptvupg.com/refund",
    type: "website",
  },
};

const refundSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.iptvupg.com/refund#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
        { "@type": "ListItem", position: 2, name: "Refund Policy", item: "https://www.iptvupg.com/refund" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.iptvupg.com/refund#webpage",
      "url": "https://www.iptvupg.com/refund",
      "name": "Refund Policy | IPTV UPG",
      "dateModified": "2026-04-06",
      "publisher": { "@id": "https://www.iptvupg.com/#organization" },
      "breadcrumb": { "@id": "https://www.iptvupg.com/refund#breadcrumb" },
    },
    {
      "@type": "MerchantReturnPolicy",
      "@id": "https://www.iptvupg.com/refund#return-policy",
      applicableCountry: ["US", "GB", "CA", "AU"],
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnFees: "https://schema.org/FreeReturn",
    },
  ],
};

export default function RefundPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(refundSchema) }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[800px]">
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            Refund Policy
          </h1>
          <p className="mb-10 text-sm text-text-muted">
            Last updated: April 6, 2026
          </p>

          {/* Guarantee Badge */}
          <div className="mb-10 rounded-2xl border border-accent/20 bg-accent/5 p-6 text-center">
            <div className="mb-2 text-2xl font-black text-accent">
              7-Day Money-Back Guarantee
            </div>
            <p className="text-sm text-text-secondary">
              All IPTV UPG subscription plans include a full 7-day money-back
              guarantee. No questions asked.
            </p>
          </div>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* 1 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                1. Our Guarantee
              </h2>
              <p>
                At IPTV UPG, we are confident in the quality of our streaming
                service. That&apos;s why every subscription plan comes with a{" "}
                <strong className="text-text-primary">
                  7-day money-back guarantee
                </strong>
                . If you are not completely satisfied with our service within
                the first 7 days of your subscription, you are entitled to a
                full refund.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                2. Eligibility for Refund
              </h2>
              <p>
                To be eligible for a refund, the following conditions must be
                met:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  The refund request is made within{" "}
                  <strong className="text-text-primary">7 calendar days</strong>{" "}
                  from the date of purchase
                </li>
                <li>The subscription was purchased directly through iptvupg.com or via our WhatsApp sales channel</li>
                <li>You have not previously received a refund for the same account</li>
                <li>The account has not been suspended for violation of our Terms of Service</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                3. Non-Refundable Situations
              </h2>
              <p>Refunds will not be issued in the following cases:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>Requests made after the 7-day guarantee period has expired</li>
                <li>Account termination due to Terms of Service violations (misuse, sharing credentials, illegal activity)</li>
                <li>Issues caused by your internet connection, device incompatibility, or third-party software</li>
                <li>Purchases made through unauthorized resellers or third-party websites</li>
                <li>Change of mind after the 7-day period</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                4. How to Request a Refund
              </h2>
              <p>
                To request a refund, follow these steps:
              </p>
              <ol className="mt-3 list-decimal space-y-3 pl-6">
                <li>
                  <strong className="text-text-primary">Contact our support team</strong>{" "}
                  via email at{" "}
                  <a
                    href="mailto:support@iptvupg.com"
                    className="font-semibold text-accent hover:underline"
                  >
                    support@iptvupg.com
                  </a>{" "}
                  or via WhatsApp at{" "}
                  <a
                    href="https://wa.me/447848197761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    +44 7848 197761
                  </a>
                </li>
                <li>
                  <strong className="text-text-primary">Include your account details</strong>{" "}
                  &mdash; provide the email address or username associated with
                  your subscription and your order/transaction ID
                </li>
                <li>
                  <strong className="text-text-primary">State your reason</strong>{" "}
                  &mdash; while not required for approval, your feedback helps
                  us improve our service
                </li>
              </ol>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                5. Refund Processing
              </h2>
              <p>
                Once your refund request is approved:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  <strong className="text-text-primary">Processing time:</strong>{" "}
                  Refunds are processed within 3&ndash;5 business days
                </li>
                <li>
                  <strong className="text-text-primary">Refund method:</strong>{" "}
                  Refunds are issued to the original payment method used at
                  purchase
                </li>
                <li>
                  <strong className="text-text-primary">Bank processing:</strong>{" "}
                  Depending on your bank or payment provider, it may take an
                  additional 5&ndash;10 business days for the refund to appear
                  in your account
                </li>
                <li>
                  <strong className="text-text-primary">Cryptocurrency payments:</strong>{" "}
                  Refunds for crypto payments are issued at the USD equivalent
                  value at the time of the original transaction
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                6. Service Access After Refund
              </h2>
              <p>
                Upon approval of your refund, your subscription will be
                deactivated immediately. You will no longer have access to
                live channels, VOD content, or any other features included in
                your plan.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                7. Partial Refunds
              </h2>
              <p>
                We do not offer partial refunds or pro-rated refunds for
                unused portions of a subscription after the 7-day guarantee
                period. All refund requests must be made within the eligible
                window.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                8. Disputes
              </h2>
              <p>
                If you have a payment dispute, we encourage you to contact our
                support team first before initiating a chargeback with your
                bank or credit card company. We are committed to resolving any
                issues promptly and fairly.
              </p>
              <p className="mt-3">
                Unauthorized chargebacks may result in permanent account
                suspension.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                9. Contact Us
              </h2>
              <p>
                For refund requests or questions about this policy:
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
                <li>
                  WhatsApp:{" "}
                  <a
                    href="https://wa.me/447848197761"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-accent hover:underline"
                  >
                    +44 7848 197761
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
