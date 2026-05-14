import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Packages from "@/components/Packages";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

const PAGE_URL = "https://www.iptvupg.com/iptv-subscription";
const WHATSAPP_TRIAL_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial%20before%20choosing%20a%20subscription%20plan";

export const metadata: Metadata = {
  title:
    "IPTV Subscription Plans 2026 — Best IPTV Service From $7.50/Month",
  description:
    "Compare IPTV UPG subscription plans for 2026: monthly $16, 3 months $39, 6 months $60, and 12 months $90 (best value, $7.50/mo). 24,000+ channels, 120,000+ 4K movies, 7-day money-back guarantee on every plan.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "IPTV Subscription Plans — Best IPTV Service From $7.50/Month",
    description:
      "Side-by-side comparison of every IPTV UPG subscription plan with per-month math, savings, and the right plan for each use case.",
    url: PAGE_URL,
    type: "website",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — Consolidated @graph
───────────────────────────────────────────────────────────────────────────── */

const plansData = [
  {
    name: "1 Month",
    sku: "IPTVUPG-SUB-1M",
    price: "16.00",
    url: "https://www.iptvupg.com/1-month-iptv-subscription",
    rating: 980,
  },
  {
    name: "3 Months",
    sku: "IPTVUPG-SUB-3M",
    price: "39.00",
    url: "https://www.iptvupg.com/3-months-iptv-subscription",
    rating: 1420,
  },
  {
    name: "6 Months",
    sku: "IPTVUPG-SUB-6M",
    price: "60.00",
    url: "https://www.iptvupg.com/6-months-iptv-subscription",
    rating: 1840,
  },
  {
    name: "12 Months",
    sku: "IPTVUPG-SUB-12M",
    price: "90.00",
    url: "https://www.iptvupg.com/12-months-iptv-subscription",
    rating: 2380,
  },
];

const faqs = [
  {
    q: "What is an IPTV subscription?",
    a: "An IPTV subscription is a paid service that delivers live TV channels and on-demand video over the internet instead of cable, satellite, or terrestrial signals. With IPTV UPG you subscribe by duration (1, 3, 6, or 12 months), receive activation credentials, install any free IPTV player on your device, and stream 24,000+ live channels and 120,000+ on-demand titles in HD and 4K.",
  },
  {
    q: "How much does an IPTV subscription cost?",
    a: "IPTV UPG subscription plans for 2026 are $16 for 1 month, $39 for 3 months ($13/mo), $60 for 6 months ($10/mo), and $90 for 12 months ($7.50/mo). The annual plan is the best value at 53% off the monthly rate, and every plan unlocks the same library and features.",
  },
  {
    q: "Which IPTV subscription plan is best for me?",
    a: "Choose the 1-month plan if you want to try IPTV without commitment. Pick the 3-month plan for seasonal sports or a single TV series run. The 6-month plan is the sweet spot for households that want strong savings without a year-long commitment. The 12-month plan delivers the lowest per-month price ($7.50) and bonus VIP channels — best for anyone confident IPTV UPG is their long-term streaming setup.",
  },
  {
    q: "Is there a free trial before I subscribe?",
    a: "Yes. Every visitor can request a free IPTV trial before paying. The trial gives full access to the live channel library and on-demand catalog so you can verify channel availability, stream quality on your specific device, and overall reliability on your home internet before choosing a paid subscription plan.",
  },
  {
    q: "What's included in every IPTV subscription plan?",
    a: "Every plan includes 24,000+ live channels, 120,000+ on-demand movies and series, HD and 4K streaming, anti-freeze adaptive bitrate, full EPG (electronic program guide), 2 simultaneous device connections, 24/7 support, instant activation, and a 7-day money-back guarantee. The 12-month plan adds priority support and 7 bonus VIP channels.",
  },
  {
    q: "Do IPTV subscriptions auto-renew?",
    a: "No. IPTV UPG plans are one-time purchases by duration — there is no auto-renewal and no recurring charge. When your plan ends you choose whether to renew, and you can switch durations at any renewal point.",
  },
  {
    q: "Can I get a refund if the subscription doesn't work for me?",
    a: "Yes. Every IPTV UPG subscription is backed by a 7-day money-back guarantee. If the service does not meet expectations within the first 7 days, contact support for a full refund — no questions asked.",
  },
  {
    q: "What devices work with the subscription?",
    a: "An IPTV UPG subscription works on Smart TVs (Samsung, LG, Sony), Amazon Fire TV Stick, Apple TV, Android TV boxes, Roku, MAG boxes, Windows and macOS computers, iOS and Android phones and tablets, and any other device that supports a standards-compliant IPTV player like IPTV Smarters Pro, TiviMate, or GSE Smart IPTV.",
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
        { "@type": "ListItem", position: 2, name: "IPTV Subscription Plans", item: PAGE_URL },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: "IPTV Subscription Plans — Best IPTV Service From $7.50/Month",
      description:
        "Compare every IPTV UPG subscription plan for 2026 with per-month math, savings, and the right plan for each viewer profile.",
      dateModified: "2026-05-11",
      breadcrumb: { "@id": `${PAGE_URL}#breadcrumb` },
      publisher: { "@id": "https://www.iptvupg.com/#organization" },
      mainEntity: {
        "@type": "ItemList",
        name: "IPTV UPG Subscription Plans",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: plansData.length,
        itemListElement: plansData.map((plan, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Product",
            name: `IPTV UPG ${plan.name} Subscription`,
            sku: plan.sku,
            url: plan.url,
            brand: { "@id": "https://www.iptvupg.com/#organization" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              bestRating: "5",
              worstRating: "1",
              ratingCount: plan.rating,
              reviewCount: plan.rating,
            },
            offers: {
              "@type": "Offer",
              price: plan.price,
              priceCurrency: "USD",
              priceValidUntil: "2027-12-31",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url: plan.url,
              seller: { "@id": "https://www.iptvupg.com/#organization" },
              hasMerchantReturnPolicy: {
                "@id": "https://www.iptvupg.com/refund#return-policy",
              },
            },
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${PAGE_URL}#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Comparison data
───────────────────────────────────────────────────────────────────────────── */

type Row = { plan: string; price: string; perMonth: string; save: string; bestFor: string; cta: string; href: string };

const comparisonRows: Row[] = [
  {
    plan: "1 Month",
    price: "$16",
    perMonth: "$16.00",
    save: "—",
    bestFor: "Risk-free trial of the full library",
    cta: "View Monthly Plan",
    href: "/1-month-iptv-subscription",
  },
  {
    plan: "3 Months",
    price: "$39",
    perMonth: "$13.00",
    save: "Save 19%",
    bestFor: "A sports season or a TV-series run",
    cta: "View 3-Month Plan",
    href: "/3-months-iptv-subscription",
  },
  {
    plan: "6 Months",
    price: "$60",
    perMonth: "$10.00",
    save: "Save 38%",
    bestFor: "Households on a mid-term budget",
    cta: "View 6-Month Plan",
    href: "/6-months-iptv-subscription",
  },
  {
    plan: "12 Months",
    price: "$90",
    perMonth: "$7.50",
    save: "Save 53% + VIP channels",
    bestFor: "Long-term subscribers, best value",
    cta: "View Annual Plan",
    href: "/12-months-iptv-subscription",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default function IPTVSubscriptionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="px-6 pt-32 pb-12 text-center">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">01</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>IPTV Subscription Plans</span>
            </div>
            <h1 className="mb-6 text-[clamp(28px,5vw,48px)] leading-[1.1] font-black">
              IPTV Subscription Plans for 2026 —{" "}
              <span className="text-accent">Best IPTV Service</span> From{" "}
              <span className="whitespace-nowrap text-accent">$7.50</span>/Month
            </h1>
            <p className="mx-auto mb-8 max-w-[700px] text-[15px] leading-relaxed text-text-secondary">
              IPTV UPG offers four no-contract{" "}
              <strong className="font-semibold text-text-primary">IPTV subscription plans</strong>{" "}
              built around a single library: 24,000+ live channels, 120,000+ on-demand
              movies and series in 4K, full EPG, anti-freeze streaming, and 2 simultaneous
              device connections. Every plan is a one-time purchase, ships with a 7-day
              money-back guarantee, and activates in under 60 seconds.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-gradient-to-br from-accent to-accent-dark px-8 py-3.5 text-sm font-bold tracking-[1.5px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all motion-safe:hover:-translate-y-0.5"
              >
                Try Free Before Subscribing
              </a>
              <a
                href="#plans"
                className="rounded-xl border border-border-light px-8 py-3.5 text-sm font-bold tracking-[1.5px] uppercase text-text-primary transition-all motion-safe:hover:-translate-y-0.5 hover:border-accent/50"
              >
                Compare All Plans
              </a>
            </div>
          </div>
        </section>

        {/* Reused Packages component renders all 4 plans with consistent UI */}
        <div id="plans">
          <Packages />
        </div>

        {/* Comparison table */}
        <section className="px-6 py-20" aria-label="IPTV subscription comparison table">
          <div className="mx-auto max-w-[1100px]">
            <div className="mb-10 text-center">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                <span className="font-mono">03</span>
                <span className="h-px w-8 bg-accent/40" />
                <span>Side-by-side comparison</span>
              </div>
              <h2 className="mb-4 text-[clamp(26px,3.6vw,38px)] font-black">
                IPTV Subscription Comparison — Price, Savings, Best For
              </h2>
              <p className="mx-auto max-w-[640px] text-[15px] text-text-secondary">
                Every plan unlocks the same channel and movie library. The only
                differences are price, per-month math, and the bonuses on the annual plan.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="border-b border-border bg-bg-card-hover/40 text-[11px] font-bold tracking-[1.5px] uppercase text-text-muted">
                  <tr>
                    <th scope="col" className="px-6 py-4">Plan</th>
                    <th scope="col" className="px-6 py-4">Price</th>
                    <th scope="col" className="px-6 py-4">Per Month</th>
                    <th scope="col" className="px-6 py-4">Savings</th>
                    <th scope="col" className="px-6 py-4">Best For</th>
                    <th scope="col" className="px-6 py-4 text-right">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map((row) => (
                    <tr key={row.plan} className="transition-colors hover:bg-bg-card-hover/30">
                      <td className="px-6 py-4 font-bold text-text-primary">{row.plan}</td>
                      <td className="px-6 py-4 font-semibold">{row.price}</td>
                      <td className="px-6 py-4 font-semibold text-accent">{row.perMonth}</td>
                      <td className="px-6 py-4 text-text-secondary">{row.save}</td>
                      <td className="px-6 py-4 text-text-secondary">{row.bestFor}</td>
                      <td className="px-6 py-4 text-right">
                        <Link
                          href={row.href}
                          className="text-xs font-bold tracking-[1.5px] uppercase text-accent transition-colors hover:text-text-primary"
                        >
                          {row.cta} →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Which plan should you choose? */}
        <section className="px-6 py-20" aria-label="Which IPTV subscription is right for you">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-10 text-center">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                <span className="font-mono">04</span>
                <span className="h-px w-8 bg-accent/40" />
                <span>Pick the right plan</span>
              </div>
              <h2 className="mb-4 text-[clamp(26px,3.6vw,38px)] font-black">
                Which IPTV Subscription Plan Should You Choose?
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Pick the 1 Month plan if…",
                  body: "You want a low-risk first month with the full library before committing. Best for switchers coming off cable who want to verify channel availability on their devices.",
                  href: "/1-month-iptv-subscription",
                  cta: "1-Month — $16",
                },
                {
                  title: "Pick the 3 Months plan if…",
                  body: "You're subscribing for a specific sports season, a TV-series finale, or a fixed-window event. Drops the per-month price to $13 with no contract.",
                  href: "/3-months-iptv-subscription",
                  cta: "3-Month — $39",
                },
                {
                  title: "Pick the 6 Months plan if…",
                  body: "You want strong savings without a full-year commitment. At $10/mo this is the household sweet spot for mid-term subscribers and shared family viewing.",
                  href: "/6-months-iptv-subscription",
                  cta: "6-Month — $60",
                },
                {
                  title: "Pick the 12 Months plan if…",
                  body: "You're confident this is your long-term streaming setup. Lowest price per month ($7.50), best total savings (53%), plus priority support and 7 bonus VIP channels.",
                  href: "/12-months-iptv-subscription",
                  cta: "Annual — $90 (Best Value)",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-border bg-bg-card p-7 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:border-accent/40"
                >
                  <h3 className="mb-3 text-lg font-bold text-text-primary">{card.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-text-secondary">{card.body}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[1.5px] uppercase text-accent transition-colors hover:text-text-primary"
                  >
                    {card.cta} →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="px-6 py-20" aria-label="IPTV subscription features">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-10 text-center">
              <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                <span className="font-mono">05</span>
                <span className="h-px w-8 bg-accent/40" />
                <span>What every plan includes</span>
              </div>
              <h2 className="mb-4 text-[clamp(26px,3.6vw,38px)] font-black">
                Every IPTV Subscription Includes the Full Library
              </h2>
              <p className="mx-auto max-w-[640px] text-[15px] text-text-secondary">
                There are no feature tiers. Whether you choose 1 month or 12 months, you
                get the same channels, the same 4K quality, and the same support — only
                the duration and per-month price change.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "24,000+ Live TV Channels (sports, news, entertainment, kids, international)",
                "120,000+ On-Demand Movies & Series in HD and 4K",
                "Anti-Freeze Adaptive Bitrate Streaming",
                "Full Electronic Program Guide (EPG)",
                "2 Simultaneous Device Connections",
                "Works on Smart TV, Fire TV, Apple TV, Roku, MAG, Android, iOS, Windows, macOS",
                "Instant Activation (under 60 seconds)",
                "24/7 Customer Support",
                "99.9% Server Uptime",
                "7-Day Money-Back Guarantee on Every Plan",
              ].map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-bg-card px-5 py-4 text-sm leading-relaxed text-text-secondary"
                >
                  <svg
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <FAQ />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
