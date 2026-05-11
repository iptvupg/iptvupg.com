import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "DMCA Policy",
  description:
    "IPTV UPG DMCA Policy. Learn how to file a copyright infringement notice or counter-notification under the Digital Millennium Copyright Act.",
  alternates: {
    canonical: "https://www.iptvupg.com/dmca",
  },
  openGraph: {
    title: "DMCA Policy | IPTV UPG",
    description: "IPTV UPG DMCA Policy. File a copyright infringement notice or counter-notification.",
    url: "https://www.iptvupg.com/dmca",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.iptvupg.com/dmca#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
        { "@type": "ListItem", position: 2, name: "DMCA Policy", item: "https://www.iptvupg.com/dmca" },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.iptvupg.com/dmca#webpage",
      "url": "https://www.iptvupg.com/dmca",
      "name": "DMCA Policy | IPTV UPG",
      "dateModified": "2026-04-06",
      "publisher": { "@id": "https://www.iptvupg.com/#organization" },
      "breadcrumb": { "@id": "https://www.iptvupg.com/dmca#breadcrumb" },
    },
  ],
};

export default function DMCAPolicy() {
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
            DMCA Policy
          </h1>
          <p className="mb-10 text-sm text-text-muted">
            Last updated: April 6, 2026
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* 1 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                1. Overview
              </h2>
              <p>
                IPTV UPG respects the intellectual property rights of others
                and expects its users to do the same. In accordance with the{" "}
                <strong className="text-text-primary">
                  Digital Millennium Copyright Act of 1998
                </strong>{" "}
                (DMCA), we will respond promptly to claims of copyright
                infringement committed using our service or on our website.
              </p>
              <p className="mt-3">
                If you believe that content available through IPTV UPG
                infringes your copyright, you may submit a takedown notice as
                described below.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                2. Filing a DMCA Takedown Notice
              </h2>
              <p>
                To file a valid DMCA takedown notice, please provide the
                following information in writing to our designated DMCA agent:
              </p>
              <ol className="mt-3 list-decimal space-y-3 pl-6">
                <li>
                  <strong className="text-text-primary">
                    Identification of the copyrighted work
                  </strong>{" "}
                  &mdash; a description of the copyrighted work that you claim
                  has been infringed, or a representative list if multiple
                  works are involved
                </li>
                <li>
                  <strong className="text-text-primary">
                    Identification of the infringing material
                  </strong>{" "}
                  &mdash; a description of the material you claim is infringing
                  and its location on our service, with sufficient detail to
                  allow us to locate it (e.g., URLs, channel names, or content
                  titles)
                </li>
                <li>
                  <strong className="text-text-primary">
                    Your contact information
                  </strong>{" "}
                  &mdash; including your full name, mailing address, telephone
                  number, and email address
                </li>
                <li>
                  <strong className="text-text-primary">
                    A statement of good faith
                  </strong>{" "}
                  &mdash; a statement that you have a good faith belief that
                  use of the material is not authorized by the copyright
                  owner, its agent, or the law
                </li>
                <li>
                  <strong className="text-text-primary">
                    A statement of accuracy
                  </strong>{" "}
                  &mdash; a statement, made under penalty of perjury, that the
                  information in your notice is accurate and that you are the
                  copyright owner or authorized to act on the copyright
                  owner&apos;s behalf
                </li>
                <li>
                  <strong className="text-text-primary">
                    Your signature
                  </strong>{" "}
                  &mdash; a physical or electronic signature of the copyright
                  owner or an authorized representative
                </li>
              </ol>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                3. DMCA Agent Contact Information
              </h2>
              <p>Send all DMCA takedown notices to:</p>
              <div className="mt-4 rounded-xl border border-border bg-bg-card p-6">
                <p className="font-semibold text-text-primary">
                  IPTV UPG &mdash; DMCA Agent
                </p>
                <ul className="mt-3 space-y-1.5">
                  <li>
                    Email:{" "}
                    <a
                      href="mailto:dmca@iptvupg.com"
                      className="font-semibold text-accent hover:underline"
                    >
                      dmca@iptvupg.com
                    </a>
                  </li>
                  <li>
                    Alternate email:{" "}
                    <a
                      href="mailto:support@iptvupg.com"
                      className="font-semibold text-accent hover:underline"
                    >
                      support@iptvupg.com
                    </a>
                  </li>
                  <li>Phone: +44 7848 197761</li>
                </ul>
              </div>
              <p className="mt-4">
                Please use &ldquo;DMCA Takedown Notice&rdquo; as the subject
                line of your email for prompt processing.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                4. Our Response to Valid Notices
              </h2>
              <p>
                Upon receiving a valid DMCA takedown notice, IPTV UPG will:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  Promptly remove or disable access to the allegedly infringing
                  content
                </li>
                <li>
                  Notify the content provider, subscriber, or user that the
                  material has been removed
                </li>
                <li>
                  Record the notice for our records in compliance with the DMCA
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                5. Counter-Notification
              </h2>
              <p>
                If you believe that material you posted was removed or disabled
                by mistake or misidentification, you may file a
                counter-notification. Your counter-notification must include:
              </p>
              <ol className="mt-3 list-decimal space-y-3 pl-6">
                <li>
                  Your full name, address, telephone number, and email address
                </li>
                <li>
                  Identification of the material that was removed and the
                  location where it previously appeared
                </li>
                <li>
                  A statement under penalty of perjury that you have a good
                  faith belief the material was removed as a result of mistake
                  or misidentification
                </li>
                <li>
                  A statement consenting to the jurisdiction of the federal
                  district court in your area (or, if outside the United
                  States, any judicial district in which IPTV UPG may be found)
                </li>
                <li>Your physical or electronic signature</li>
              </ol>
              <p className="mt-3">
                Send counter-notifications to our DMCA agent at the contact
                information listed above.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                6. Repeat Infringer Policy
              </h2>
              <p>
                In accordance with the DMCA, IPTV UPG maintains a policy of
                terminating the accounts of users who are determined to be
                repeat infringers. We may, in our sole discretion, limit
                access to the service or terminate the accounts of any users
                who infringe the intellectual property rights of others,
                whether or not there is any repeat infringement.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                7. Good Faith Warning
              </h2>
              <p>
                Please be aware that filing a false DMCA takedown notice may
                subject you to liability for damages, including costs and
                attorneys&apos; fees, as provided under Section 512(f) of the
                DMCA. If you are unsure whether the material infringes your
                copyright, we recommend consulting an attorney before filing a
                notice.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                8. Modifications
              </h2>
              <p>
                IPTV UPG reserves the right to modify this DMCA Policy at any
                time. Changes will be posted on this page with an updated date.
                Your continued use of the service constitutes acceptance of the
                revised policy.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                9. Contact Us
              </h2>
              <p>
                For DMCA-related inquiries:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li>
                  DMCA Agent:{" "}
                  <a
                    href="mailto:dmca@iptvupg.com"
                    className="font-semibold text-accent hover:underline"
                  >
                    dmca@iptvupg.com
                  </a>
                </li>
                <li>
                  General Support:{" "}
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
