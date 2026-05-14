import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About IPTV UPG — Team, Infrastructure & Editorial Standards",
  description:
    "About IPTV UPG: an independent IPTV streaming service operating since 2019. 24,000+ live channels, 120,000+ on-demand titles, 4K streaming with anti-freeze adaptive bitrate. Editorial standards, infrastructure overview, contact, and refund policy.",
  alternates: {
    canonical: "https://www.iptvupg.com/about",
  },
  openGraph: {
    title: "About IPTV UPG — Team, Infrastructure & Editorial Standards",
    description:
      "About IPTV UPG: an independent IPTV streaming service operating since 2019. Editorial standards, infrastructure overview, refund policy, and how to contact the team.",
    url: "https://www.iptvupg.com/about",
    type: "website",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.iptvupg.com/about#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.iptvupg.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://www.iptvupg.com/about",
        },
      ],
    },
    {
      "@type": "AboutPage",
      "@id": "https://www.iptvupg.com/about#webpage",
      url: "https://www.iptvupg.com/about",
      name: "About IPTV UPG",
      description:
        "About IPTV UPG: an independent IPTV streaming service operating since 2019. Editorial standards, infrastructure overview, and contact details.",
      dateModified: "2026-05-14",
      isPartOf: { "@id": "https://www.iptvupg.com/#website" },
      breadcrumb: { "@id": "https://www.iptvupg.com/about#breadcrumb" },
      about: { "@id": "https://www.iptvupg.com/#organization" },
      mainEntity: { "@id": "https://www.iptvupg.com/#organization" },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[820px]">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
            <span className="font-mono">01</span>
            <span className="h-px w-8 bg-accent/40" />
            <span>About IPTV UPG</span>
          </div>
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black leading-[1.1]">
            About IPTV UPG — Team, Infrastructure &amp; Editorial Standards
          </h1>
          <p className="mb-10 text-sm text-text-muted">
            Independent IPTV streaming service · Operating since 2019 · Last updated 2026-05-14
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* WHAT WE ARE */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                What IPTV UPG Is
              </h2>
              <p>
                IPTV UPG is an independent IPTV (Internet Protocol Television) streaming service.
                The service operates a private CDN that aggregates 24,000+ live TV channels from
                190+ countries and a 120,000+ title on-demand library, all delivered in HD and
                4K/UHD via the M3U/Xtream Codes protocol. Subscribers receive credentials by email
                within 60 seconds of purchase and can stream on Smart TVs, streaming sticks,
                phones, tablets, and computers — no proprietary hardware required.
              </p>
              <p className="mt-3">
                The service has operated under the IPTV UPG brand since 2019. It is offered in
                English and Romanian, with subscribers in 40+ countries across North America,
                Europe, the Middle East, and Asia. Pricing starts at $7.50/month on the 12-month
                plan and is documented in full on the{" "}
                <Link href="/iptv-subscription" className="font-semibold text-accent hover:underline">
                  subscription plans page
                </Link>.
              </p>
            </section>

            {/* HOW THE SERVICE IS RUN */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                How the Service Is Run
              </h2>
              <p>
                IPTV UPG&apos;s engineering and support teams run streaming infrastructure
                end-to-end: channel ingestion, EPG (Electronic Program Guide) curation, anti-freeze
                CDN tuning, and customer onboarding. Server uptime is measured continuously by an
                independent monitoring stack — the 99.9% figure published on this site reflects the
                12-month rolling average from that monitor, not a marketing target. Channel start
                time, peak-hour stability, and stream-resume latency are tracked on the same
                dashboard.
              </p>
              <p className="mt-3">
                Customer support is staffed 24/7 via WhatsApp at{" "}
                <a
                  href="https://wa.me/447848197761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  +44 7848 197761
                </a>
                {" "}and via email at{" "}
                <a href="mailto:support@iptvupg.com" className="font-semibold text-accent hover:underline">
                  support@iptvupg.com
                </a>
                . Median response time on WhatsApp during 2026 has been under 5 minutes.
              </p>
            </section>

            {/* EDITORIAL STANDARDS */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Editorial Standards
              </h2>
              <p>
                Articles, setup guides, and subscription pages on iptvupg.com are written and
                maintained by the IPTV UPG editorial and engineering teams. Pricing figures,
                channel counts, uptime statistics, and device-compatibility claims are verified
                against production monitoring and customer-support records before publication.
                Pages are reviewed on a rolling schedule; the most recent review date appears in
                each article&apos;s schema metadata and in the visible byline.
              </p>
              <p className="mt-3">
                Where this site references external standards — IPTV protocols, codec
                specifications, broadcaster examples — the reference is linked directly to a
                primary source (e.g.,{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Internet_Protocol_television"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-accent hover:underline"
                >
                  Wikipedia: Internet Protocol Television
                </a>
                ). Corrections are welcomed at support@iptvupg.com and applied within two business
                days.
              </p>
            </section>

            {/* LEGAL & COMPLIANCE */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Legal &amp; Compliance Posture
              </h2>
              <p>
                IPTV UPG is an independent streaming service provider. We do not host, store, or
                distribute any third-party copyrighted content. All trademarks, logos, and brand
                names referenced on this website remain the property of their respective owners,
                and IPTV UPG is not affiliated with, endorsed by, or connected to any broadcaster
                or content provider. Users are responsible for ensuring that their use of the
                service complies with all applicable laws in their jurisdiction.
              </p>
              <p className="mt-3">
                Full legal documentation is published on the{" "}
                <Link href="/terms" className="font-semibold text-accent hover:underline">
                  Terms &amp; Conditions
                </Link>
                ,{" "}
                <Link href="/privacy" className="font-semibold text-accent hover:underline">
                  Privacy Policy
                </Link>
                ,{" "}
                <Link href="/dmca" className="font-semibold text-accent hover:underline">
                  DMCA Policy
                </Link>
                , and{" "}
                <Link href="/refund" className="font-semibold text-accent hover:underline">
                  Refund Policy
                </Link>{" "}
                pages. Copyright claims should be sent to the designated DMCA agent at{" "}
                <a href="mailto:dmca@iptvupg.com" className="font-semibold text-accent hover:underline">
                  dmca@iptvupg.com
                </a>
                .
              </p>
            </section>

            {/* GET IN TOUCH */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Get in Touch
              </h2>
              <p className="mb-6">
                Questions about a subscription, a setup issue, a refund request, or a media enquiry
                — the fastest channel is WhatsApp. Email is checked continuously during business
                hours.
              </p>
              <div className="grid gap-4 rounded-2xl border border-border bg-bg-card p-6 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-brand-whatsapp">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">WhatsApp (24/7)</div>
                    <a
                      href="https://wa.me/447848197761"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold transition-colors hover:text-brand-whatsapp"
                    >
                      +44 7848 197761
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Email</div>
                    <a
                      href="mailto:support@iptvupg.com"
                      className="text-sm font-semibold transition-colors hover:text-accent"
                    >
                      support@iptvupg.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx={12} cy={10} r={3} />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Registered Address</div>
                    <address className="text-sm font-semibold not-italic text-text-primary">
                      41 Midhurst Ave, Muswell Hill, London N10 3HR, United Kingdom
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 text-text-muted">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Operating Since</div>
                    <div className="text-sm font-semibold text-text-primary">2019</div>
                  </div>
                </div>
              </div>
            </section>

            {/* QUICK LINKS */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                More from IPTV UPG
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { href: "/what-is-iptv", label: "What is IPTV? A complete 2026 primer" },
                  { href: "/iptv-free-trial", label: "Free IPTV trial — test before paying" },
                  { href: "/iptv-subscription", label: "Subscription plans from $7.50/month" },
                  { href: "/best-iptv-service", label: "Best IPTV service in 2026 — methodology" },
                ].map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent"
                  >
                    {r.label} →
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
