import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.iptvupg.com/12-months-iptv-subscription";
const WHATSAPP_BUY_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20want%20to%20purchase%20a%2012%20Months%20subscription%20(%2490%20-%20Best%20Value)";
const WHATSAPP_TRIAL_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial%20before%20I%20commit%20to%20the%2012-month%20plan";

export const metadata: Metadata = {
  title: "12 Months IPTV Subscription 2026 — $7.50/mo Annual IPTV Plan ($90/Year)",
  description:
    "Lock in the lowest IPTV subscription price for 2026: $90 for 12 months ($7.50/mo). 24,000+ live channels, 120,000+ 4K movies, 2 device connections, priority support, 7-day refund. Save 53% vs monthly billing.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "12 Months IPTV Subscription — Best Value Annual Plan $90/Year ($7.50/mo)",
    description:
      "Annual IPTV subscription with 24,000+ channels, 120,000+ 4K movies, priority support, and a 7-day money-back guarantee. Save 53% vs monthly.",
    url: PAGE_URL,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "12 Months IPTV Subscription", item: PAGE_URL },
  ],
};

const productSchema = {
  "@type": "Product",
  "@id": `${PAGE_URL}#product`,
  name: "IPTV UPG 12 Months Subscription",
  sku: "IPTVUPG-SUB-12M",
  mpn: "IPTVUPG-12M-2026",
  category: "Streaming Subscription / IPTV Service",
  description:
    "12-month annual IPTV subscription with 24,000+ live TV channels, 120,000+ on-demand movies and series in 4K/UHD, anti-freeze adaptive bitrate streaming, full EPG, 2 simultaneous device connections, and priority 24/7 support.",
  image: ["https://www.iptvupg.com/opengraph-image"],
  brand: { "@id": "https://www.iptvupg.com/#organization" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: 2380,
    reviewCount: 2380,
  },
  offers: {
    "@type": "Offer",
    price: "90.00",
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
    availability: "https://schema.org/InStock",
    itemCondition: "https://schema.org/NewCondition",
    url: PAGE_URL,
    seller: { "@id": "https://www.iptvupg.com/#organization" },
    hasMerchantReturnPolicy: { "@id": "https://www.iptvupg.com/refund#return-policy" },
  },
};

const articleSchema = {
  "@type": "Article",
  "@id": `${PAGE_URL}#article`,
  headline: "12 Months IPTV Subscription 2026 — Annual IPTV Plan Buying Guide ($90/Year, $7.50/Month)",
  description:
    "Complete buying guide for the 12-month IPTV subscription: pricing math, who it's for, 8-week onboarding roadmap, KPIs, common pitfalls, and how to lock in $7.50/month for a full year.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  inLanguage: "en",
  isAccessibleForFree: true,
  about: [
    { "@type": "Thing", name: "IPTV Subscription" },
    { "@type": "Thing", name: "Annual IPTV Plan" },
    { "@type": "Thing", name: "12 Months IPTV" },
  ],
  mentions: [
    { "@type": "Thing", name: "Internet Protocol Television" },
    { "@type": "Thing", name: "Adaptive Bitrate Streaming" },
    { "@type": "Thing", name: "Electronic Program Guide" },
  ],
  author: { "@id": "https://www.iptvupg.com/#organization" },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  mainEntityOfPage: PAGE_URL,
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the 12-month IPTV subscription cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IPTV UPG 12-month annual plan costs $90 for a full year of service, which works out to $7.50 per month — the lowest per-month price across all four IPTV UPG subscription tiers (1, 3, 6, and 12 months). Compared to month-to-month billing at $16, the annual plan saves $102 per year (53%).",
      },
    },
    {
      "@type": "Question",
      name: "Is a 12-month IPTV subscription worth it compared to monthly billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — for any user who streams more than 5 hours per week. The annual plan ($7.50/mo) costs less than half of the monthly plan ($16/mo), so the breakeven occurs after roughly 5.6 months of continuous use. Beyond that, every additional month is effectively free relative to monthly billing. Heavy streamers save the equivalent of 13 weeks of free service per year.",
      },
    },
    {
      "@type": "Question",
      name: "What channels and content are included in the annual IPTV plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All IPTV UPG plans include the same catalog regardless of duration: 24,000+ live TV channels (US, UK, Canada, Europe, MENA, Asia, Africa, Latin America), 120,000+ on-demand movies and series, premium live sports (top-tier football, US major-league sports, motorsport, and MMA), full EPG, and SD/HD/Full HD/4K UHD streams with anti-freeze adaptive bitrate technology.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a refund on the 12-month IPTV subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every IPTV UPG plan — including the 12-month annual subscription — comes with a 7-day money-back guarantee. If the service does not meet your expectations within the first 7 days, contact support via WhatsApp or email and we issue a full, no-questions-asked refund. There is no auto-renewal and no long-term contract beyond the 12 months you pay for.",
      },
    },
    {
      "@type": "Question",
      name: "How many devices can I connect to the 12-month IPTV plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two simultaneous device connections per account, on an unlimited number of registered devices. You can install IPTV UPG on every TV, phone, tablet, Fire Stick, and computer in your home — only the count of streams playing at the same moment is capped at 2. Compatible with Smart TVs, Fire TV, Apple TV, Roku, MAG, Android, iOS, Windows, and macOS.",
      },
    },
    {
      "@type": "Question",
      name: "Does the 12-month IPTV plan include priority support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Annual subscribers receive priority 24/7 support — your tickets are routed to a faster queue than shorter plans, with median first response under 5 minutes via WhatsApp. Priority support covers setup help, device migration, EPG troubleshooting, and any quality issue diagnosis.",
      },
    },
    {
      "@type": "Question",
      name: "What internet speed do I need for the annual IPTV subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "25 Mbps for 4K/UHD streams, 10 Mbps for HD (1080p), and 5 Mbps for SD. Because the annual plan supports 2 simultaneous 4K streams, IPTV UPG recommends at least 50 Mbps down for the smoothest experience. Wired Ethernet is preferred for 4K stability; modern Wi-Fi 5 (802.11ac) and Wi-Fi 6 also work well.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is activation after I pay for the 12-month plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Activation is instant. After payment, IPTV UPG sends your M3U URL, Xtream Codes credentials, and EPG link by email within 60 seconds. Most subscribers are watching their first 4K channel in under 5 minutes from checkout — install a free IPTV player, paste the credentials, and stream.",
      },
    },
    {
      "@type": "Question",
      name: "Will the price increase mid-year on my annual IPTV subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The $90 annual price is locked for the full 12 months you pay for. Even if IPTV UPG raises prices for new subscribers during your term, your account stays at $7.50 per month until renewal. There is no auto-renewal, so you have full control over what you pay next year.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try the service before paying for 12 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Request a free IPTV trial before committing to the annual plan — full access to all 24,000+ channels and the 4K VOD library, no credit card required. Message WhatsApp at +44 7848 197761 with the word 'trial' and credentials arrive within minutes. Trial users typically convert to the annual plan after 24 hours of testing on their own internet.",
      },
    },
  ],
};

const tldrRows: { plan: string; price: string; perMonth: string; saves: string; bestFor: string }[] = [
  { plan: "1 Month", price: "$16.00", perMonth: "$16.00", saves: "—", bestFor: "Trying paid service for the first time" },
  { plan: "3 Months", price: "$39.00", perMonth: "$13.00", saves: "19%", bestFor: "Sports season or short-term cord-cutting" },
  { plan: "6 Months", price: "$60.00", perMonth: "$10.00", saves: "38%", bestFor: "Half-year commitment, balanced budget" },
  { plan: "12 Months ★", price: "$90.00", perMonth: "$7.50", saves: "53%", bestFor: "Daily streamers, families, lowest cost/month" },
];

const roadmap: { week: string; title: string; body: string }[] = [
  {
    week: "Week 1",
    title: "Decide & Activate",
    body: "Confirm budget ($90/yr = $7.50/mo), pay via Visa, Mastercard, Amex, or crypto, and receive M3U + Xtream credentials within 60 seconds. Install your IPTV player and run your first 4K stream test on Wi-Fi and Ethernet.",
  },
  {
    week: "Week 2",
    title: "Build Your Channel List",
    body: "Curate favorites: pin 30–50 daily channels (sports, news, kids, premium movies). Configure EPG so the program guide loads automatically. Set parental controls if needed.",
  },
  {
    week: "Week 3",
    title: "Multi-Device Setup",
    body: "Install on Smart TV, Fire Stick, phone, and laptop. Test the 2 simultaneous streams cap by playing two channels in different rooms. Document your login somewhere safe (you'll need it for migrations).",
  },
  {
    week: "Week 4",
    title: "Validate Quality",
    body: "Track buffering events, 4K stability, and EPG accuracy across 7 days. If any channel underperforms, message priority support — annual subscribers get sub-5-minute first responses. Evaluate against your 7-day refund window.",
  },
  {
    week: "Week 5",
    title: "Cancel Cable / OTT Overlap",
    body: "With service validated, cancel cable, satellite, or duplicate OTT subscriptions you no longer need. Most users save an additional $80–$120/month here — money that compounds with the $90/year IPTV cost.",
  },
  {
    week: "Week 6",
    title: "Optimize Network",
    body: "Move TV streamers to Ethernet where possible, set 5 GHz Wi-Fi for tablets, and confirm 50 Mbps+ down on speedtest.net during peak hours. Update router firmware. This eliminates 90% of buffering complaints.",
  },
  {
    week: "Week 7",
    title: "Family Onboarding",
    body: "Train every household member on switching channels, accessing VOD, using EPG, and contacting WhatsApp support. Annual plans are a year-long commitment — making sure everyone uses the service maximizes ROI.",
  },
  {
    week: "Week 8",
    title: "Measure Annual ROI",
    body: "Calculate total entertainment spend before/after IPTV UPG. Most annual subscribers report $1,000+ saved over 12 months versus the cable + premium-OTT bundle they replaced. Set a calendar reminder for renewal at month 11.",
  },
];

const tools: { name: string; href: string; ext?: boolean; note: string }[] = [
  { name: "Free IPTV Trial (test before annual)", href: "/iptv-free-trial", note: "Verify quality on your own devices and ISP before committing 12 months." },
  { name: "What is IPTV — definition & primer", href: "/what-is-iptv", note: "Understand IP television technology, codecs, and EPG before subscribing." },
  { name: "Best IPTV Service comparison", href: "/best-iptv-service", note: "12-metric ranking that explains why annual plans dominate the value chart." },
  { name: "Refund & 7-Day Money-Back Policy", href: "/refund", note: "Read the exact refund procedure that protects your $90 purchase." },
  { name: "1-Month IPTV Subscription", href: "/1-month-iptv-subscription", note: "Compare against the most expensive per-month plan ($16)." },
  { name: "3-Month IPTV Subscription", href: "/3-months-iptv-subscription", note: "Mid-tier plan at $13/mo for season-length commitments." },
  { name: "6-Month IPTV Subscription", href: "/6-months-iptv-subscription", note: "Half-year plan at $10/mo — second-best value after annual." },
  { name: "speedtest.net by Ookla", href: "https://www.speedtest.net/", ext: true, note: "Confirm 25+ Mbps for 4K and 50+ Mbps for two simultaneous streams." },
  { name: "fast.com (Netflix)", href: "https://fast.com/", ext: true, note: "Second opinion on download speed during peak ISP hours." },
  { name: "DownDetector — ISP outage map", href: "https://downdetector.com/", ext: true, note: "Rule out ISP outages before contacting IPTV support." },
];

const pitfalls: string[] = [
  "Paying month-to-month for over 6 months — you cross the breakeven point at month 6 and lose money every month after that vs. the annual plan.",
  "Not requesting a free trial first — the trial reveals whether your specific ISP can sustain 4K, eliminating the #1 reason for refund requests.",
  "Skipping the 7-day refund window for testing — annual subscribers should run a full quality audit (sports, 4K movies, EPG, multi-device) inside the guarantee period, not after.",
  "Splitting across 3+ devices simultaneously — the plan supports 2 concurrent streams; a third device will fail to connect until one stream stops.",
  "Buying without confirming router/Wi-Fi capability — Wi-Fi 4 (802.11n) routers struggle with two 4K streams. Upgrade to Wi-Fi 5/6 or wire Ethernet first.",
  "Forgetting to cancel overlapping cable/OTT services — the savings only compound if you actually retire the legacy bills you replaced.",
  "Sharing credentials publicly — the 2-stream cap means a friend's playback will kick you off your own TV; keep credentials private.",
  "Ignoring the 11-month renewal reminder — without auto-renewal, your service ends on the exact day you signed up. Set a calendar alert at month 11 to avoid a service gap.",
];

const kpis: { name: string; target: string; why: string }[] = [
  { name: "Effective monthly cost", target: "$7.50/mo (vs. $16 monthly)", why: "Direct measure of plan ROI vs. month-to-month billing." },
  { name: "Total 12-month savings vs cable", target: "$960–$1,440/yr saved", why: "Average US cable bundle is $90–$130/mo; IPTV UPG annual is $7.50/mo." },
  { name: "Activation time", target: "Under 5 minutes", why: "Median time from checkout to first live channel playback." },
  { name: "4K stream uptime", target: "≥ 99.9% over 12 months", why: "Verified server uptime — the SLA you're paying for." },
  { name: "Buffer events per hour", target: "< 1 per hour", why: "On 50 Mbps+ wired connection, anti-freeze keeps interruptions rare." },
  { name: "Priority support response", target: "Median < 5 minutes", why: "Annual subscribers' tickets are tagged for the fast queue." },
  { name: "Refund eligibility window", target: "Days 1–7 after activation", why: "Hard cutoff for the money-back guarantee — audit aggressively in week 1." },
];

export default function TwelveMonthsSubscription() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [breadcrumbSchema, productSchema, articleSchema, faqSchema],
          }),
        }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[860px]">
          {/* HERO */}
          <header className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">01</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Annual IPTV Plan 2026</span>
            </div>
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-accent">
              ★ Best Value · Save 53%
            </span>
            <h1 className="mb-4 text-[clamp(28px,4.4vw,46px)] font-black leading-[1.1]">
              12 Months IPTV Subscription —{" "}
              <span className="text-accent">$7.50/Month</span> Locked for a Full Year
            </h1>
            <p className="mx-auto mb-8 max-w-[640px] text-[15px] leading-relaxed text-text-secondary">
              The lowest per-month IPTV subscription price for 2026. 24,000+ live channels, 120,000+ 4K
              movies and series, anti-freeze streaming, priority 24/7 support, 7-day money-back guarantee.
              No contract, no auto-renewal, instant activation in under 5 minutes.
            </p>
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="text-lg text-text-muted line-through">$192</span>
              <span className="text-[clamp(40px,6vw,60px)] font-black text-accent leading-none">$90</span>
              <span className="text-text-muted">/year</span>
            </div>
            <p className="mb-8 text-[15px] font-semibold text-text-secondary">
              Equivalent to <span className="text-accent">$7.50/month</span> · You save{" "}
              <span className="text-accent">$102/year</span> vs. monthly billing
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-black transition hover:opacity-90"
              >
                Get the Annual Plan — $90
              </a>
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-accent px-8 py-3.5 text-sm font-bold text-accent transition hover:bg-accent/10"
              >
                Try Free First (No Card)
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              4.9/5 · 2,380+ verified subscribers · 7-day refund · Activation in under 5 minutes
            </p>
          </header>

          {/* TL;DR TABLE */}
          <section className="mb-16" id="tldr">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">02</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>TL;DR — Plan Comparison</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              Why the 12-Month IPTV Subscription Wins on Price
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              The annual IPTV plan delivers the same 24,000+ channels and 4K library as every other tier —
              but at <strong className="font-semibold text-text-primary">$7.50/month</strong>, it&apos;s
              less than half the cost of monthly billing. Here&apos;s the math across all four IPTV UPG plans.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-bg-card">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-white/[0.03]">
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold text-text-primary">Plan</th>
                    <th className="px-4 py-3 text-center font-semibold text-text-primary">Total Price</th>
                    <th className="px-4 py-3 text-center font-semibold text-text-primary">Per Month</th>
                    <th className="px-4 py-3 text-center font-semibold text-text-primary">Saves vs. Monthly</th>
                    <th className="px-4 py-3 text-left font-semibold text-text-primary">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {tldrRows.map((row) => {
                    const isAnnual = row.plan.includes("12");
                    return (
                      <tr key={row.plan} className={`border-b border-border last:border-0 ${isAnnual ? "bg-accent/5" : ""}`}>
                        <td className={`px-4 py-3 ${isAnnual ? "font-bold text-accent" : ""}`}>{row.plan}</td>
                        <td className={`px-4 py-3 text-center ${isAnnual ? "font-bold text-accent" : ""}`}>{row.price}</td>
                        <td className={`px-4 py-3 text-center ${isAnnual ? "font-bold text-accent" : ""}`}>{row.perMonth}</td>
                        <td className={`px-4 py-3 text-center ${isAnnual ? "font-bold text-accent" : ""}`}>{row.saves}</td>
                        <td className="px-4 py-3 text-text-secondary">{row.bestFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Same 24,000+ channels, 120,000+ VOD titles, 4K, EPG, 2 device connections, and 7-day refund on every plan.
            </p>
          </section>

          {/* DEFINITION */}
          <section className="mb-16" id="what-is">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">03</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Definition</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              What Is a 12-Month IPTV Subscription?
            </h2>
            <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 px-6 py-5 text-[15px] leading-relaxed text-text-secondary">
              <strong className="text-text-primary">A 12-month IPTV subscription</strong> is an annual
              prepaid plan that grants uninterrupted access to a provider&apos;s full live TV and on-demand
              catalog over the internet for 365 days. With IPTV UPG, the annual plan covers 24,000+ live
              channels worldwide, 120,000+ 4K movies and series, full EPG, anti-freeze adaptive bitrate
              streaming, 2 simultaneous device connections, priority support, and a 7-day money-back guarantee
              — all for a one-time payment of $90 ($7.50/month).
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  h: "Annual prepaid",
                  b: "One $90 payment covers all 12 months. No monthly billing, no auto-renewal, no surprise charges.",
                },
                {
                  h: "Price-locked",
                  b: "Your $7.50/month rate is locked for the full year, even if IPTV UPG raises prices for new subscribers.",
                },
                {
                  h: "Same catalog",
                  b: "Annual plans get the identical channel and VOD library as monthly plans — only the price-per-month differs.",
                },
              ].map((c) => (
                <div key={c.h} className="rounded-xl border border-border bg-bg-card p-5">
                  <h3 className="mb-2 text-sm font-bold text-text-primary">{c.h}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{c.b}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ROADMAP */}
          <section className="mb-16" id="roadmap">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">04</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>8-Week Onboarding Roadmap</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              From Checkout to Maximum ROI in 8 Weeks
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              The annual plan is a year-long commitment. This phase-by-phase framework helps you validate
              quality inside the 7-day refund window, retire overlapping bills, and measure the real savings
              by week 8.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {roadmap.map((r) => (
                <div key={r.week} className="rounded-xl border border-border bg-bg-card p-5">
                  <div className="mb-2 font-mono text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                    {r.week}
                  </div>
                  <h3 className="mb-2 text-base font-bold text-text-primary">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{r.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TOOLS */}
          <section className="mb-16" id="tools">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">05</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Tools & Resources</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              Tools to Validate Your Annual IPTV Purchase
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Use these resources before and during your first week to confirm the annual plan is the right
              fit for your network, devices, and viewing habits.
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {tools.map((t) => (
                <a
                  key={t.name}
                  href={t.href}
                  {...(t.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="rounded-xl border border-border bg-bg-card p-5 transition hover:border-accent/40"
                >
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-sm font-bold text-text-primary">{t.name}</span>
                    {t.ext && <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">External</span>}
                  </div>
                  <p className="text-xs leading-relaxed text-text-secondary">{t.note}</p>
                </a>
              ))}
            </div>
          </section>

          {/* PITFALLS */}
          <section className="mb-16" id="pitfalls">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">06</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Common Pitfalls</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              8 Mistakes That Cost Annual IPTV Subscribers Money
            </h2>
            <ol className="space-y-3">
              {pitfalls.map((p, i) => (
                <li key={i} className="flex gap-4 rounded-xl border border-border bg-bg-card p-4">
                  <span className="flex-shrink-0 font-mono text-sm font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-text-secondary">{p}</span>
                </li>
              ))}
            </ol>
          </section>

          {/* KPIs */}
          <section className="mb-16" id="kpis">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">07</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Measurement & KPIs</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              How to Measure Annual Plan Value Over 12 Months
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Track these seven KPIs to quantify ROI and confirm the annual subscription is delivering on
              its $7.50/month promise. The numbers below are 2026 IPTV UPG benchmarks across 2,380+ verified
              annual subscribers.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border bg-bg-card">
              <table className="w-full border-collapse text-sm">
                <thead className="bg-white/[0.03]">
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-left font-semibold text-text-primary">KPI</th>
                    <th className="px-4 py-3 text-left font-semibold text-text-primary">Target / Benchmark</th>
                    <th className="px-4 py-3 text-left font-semibold text-text-primary">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {kpis.map((k) => (
                    <tr key={k.name} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-semibold text-text-primary">{k.name}</td>
                      <td className="px-4 py-3 text-accent">{k.target}</td>
                      <td className="px-4 py-3 text-text-secondary">{k.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* DEVICES + INCLUDED COMBO */}
          <section className="mb-16" id="included">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">08</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>What&apos;s Included</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              Everything Bundled in Your $90 Annual IPTV Plan
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "24,000+ live TV channels (US, UK, EU, MENA, LATAM, Asia)",
                "120,000+ on-demand movies & series (4K, HD, SD)",
                "Premium live sports: top-tier football, US major-league sports, motorsport, and MMA",
                "Full EPG (Electronic Program Guide) with 7-day forward listings",
                "Anti-freeze adaptive bitrate streaming technology",
                "2 simultaneous device connections (unlimited registered devices)",
                "Priority 24/7 support — median first response under 5 minutes",
                "Instant activation — credentials emailed in under 60 seconds",
                "7-day money-back guarantee, no questions asked",
                "No auto-renewal — you stay in control of next year's spend",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-border bg-bg-card px-4 py-3"
                >
                  <span className="mt-0.5 text-accent">&#10003;</span>
                  <span className="text-sm font-medium text-text-primary">{feature}</span>
                </div>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-lg font-bold text-text-primary">Compatible Devices</h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { name: "Android", href: "/android-iptv" },
                { name: "Fire TV Stick", href: "/fire-tv-iptv" },
                { name: "Apple TV", href: "/apple-tv-iptv" },
                { name: "Samsung TV", href: "/samsung-tv-iptv" },
                { name: "LG TV", href: "/lg-tv-iptv" },
                { name: "Roku", href: "/roku-iptv" },
                { name: "MAG Box", href: "/mag-iptv" },
                { name: "macOS", href: "/macos-iptv" },
              ].map((d) => (
                <Link
                  key={d.name}
                  href={d.href}
                  className="rounded-xl border border-border bg-bg-card px-4 py-3 text-center text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent"
                >
                  {d.name}
                </Link>
              ))}
            </div>
          </section>


          {/* DURATION-SPECIFIC */}
          <section className="mb-16" id="duration-specific">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">08.5</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Plan-specific notes</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              The 12-Month Plan vs Cable: A Year-One ROI Worksheet
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-text-secondary">
              <p className="mb-4">
                The 12-month IPTV plan is the only duration where
                the comparison against a traditional cable bill becomes
                stark. Here is a same-year cost breakdown for a typical
                US household replacing a 200-channel cable package:
              </p>
              <div className="my-5 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border-light text-left">
                      <th className="py-2 pr-4 font-semibold text-text-primary">Line item</th>
                      <th className="py-2 pr-4 font-semibold text-text-primary">Cable (typical US)</th>
                      <th className="py-2 font-semibold text-text-primary">IPTV UPG 12-mo</th>
                    </tr>
                  </thead>
                  <tbody className="text-text-secondary">
                    <tr className="border-b border-border"><td className="py-2 pr-4">Monthly subscription</td><td className="py-2 pr-4">$95</td><td className="py-2">$7.50</td></tr>
                    <tr className="border-b border-border"><td className="py-2 pr-4">Box / DVR rental</td><td className="py-2 pr-4">$15</td><td className="py-2">$0</td></tr>
                    <tr className="border-b border-border"><td className="py-2 pr-4">Sports add-on</td><td className="py-2 pr-4">$22</td><td className="py-2">included</td></tr>
                    <tr className="border-b border-border"><td className="py-2 pr-4">Regional fees / taxes</td><td className="py-2 pr-4">$18</td><td className="py-2">$0</td></tr>
                    <tr className="border-b border-border"><td className="py-2 pr-4">Installation (year 1)</td><td className="py-2 pr-4">$75</td><td className="py-2">$0</td></tr>
                    <tr><td className="py-2 pr-4 font-semibold text-text-primary">Year-one total</td><td className="py-2 pr-4 font-bold text-text-primary">$1,875</td><td className="py-2 font-bold text-accent">$90</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mb-4">
                Year-one savings: <strong className="text-text-primary">$1,785</strong>.
                Even discounting the cable numbers by 30% for promotional
                introductory pricing, the gap is still well over $1,200
                per year. The 12-month plan is the only IPTV UPG plan
                that pays for itself inside the first week of viewing
                versus a typical US cable bill.
              </p>
              <p>
                There is a softer benefit too: predictability. Twelve months
                of paid service means zero billing-day interruptions, zero
                renewal prompts on your TV mid-event, and a single line
                item you can move to direct annual budgeting. For households
                already certain they want IPTV, the only question is
                whether you can wait long enough to capitalize the saving.
              </p>
            </div>
          </section>

          {/* AUTHOR */}
          <section className="mb-16" id="author">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">09</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>About the Author</span>
            </div>
            <div className="rounded-2xl border border-border bg-bg-card p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/20 text-2xl font-black text-accent">
                  UPG
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-text-primary">IPTV UPG Editorial Team</h3>
                  <p className="mb-3 text-sm text-text-muted">
                    Editorial team at IPTV UPG · Reviewing annual streaming plans since 2019
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Our editorial team has audited 40+ IPTV providers and benchmarked 2,000+ annual subscriptions on
                    real-world ISPs across the US, UK, and Europe. We focus on the math behind long-term
                    plans — breakeven curves, refund-window auditing, and ROI measurement against cable +
                    OTT bundles. Reviewed by IPTV UPG&apos;s technical team for accuracy on{" "}
                    <span className="font-mono text-accent">2026-05-01</span>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16" id="faq">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">10</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>FAQ</span>
            </div>
            <h2 className="mb-6 text-[clamp(22px,3vw,30px)] font-black">
              Annual IPTV Subscription — Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqSchema.mainEntity.map((q, i) => (
                <details
                  key={i}
                  className="group rounded-2xl border border-border bg-bg-card open:border-dashed open:border-border-light"
                >
                  <summary className="flex cursor-pointer items-center gap-4 px-6 py-4 text-left list-none [&::-webkit-details-marker]:hidden">
                    <span className="min-w-[32px] font-mono text-xs font-bold text-text-muted group-open:text-accent">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="flex-1 text-sm font-semibold text-text-primary">{q.name}</h3>
                  </summary>
                  <div className="px-6 pb-5 pl-[72px] text-sm leading-relaxed text-text-secondary">
                    {q.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* RELATED */}
          <section className="mb-16" id="related">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">11</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Related Reading</span>
            </div>
            <h2 className="mb-6 text-[clamp(22px,3vw,30px)] font-black">Continue Researching IPTV</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "Free IPTV Trial — test before annual", href: "/iptv-free-trial", desc: "Verify quality on your devices and ISP before committing $90 for the year." },
                { title: "What is IPTV — full primer", href: "/what-is-iptv", desc: "Definition, technology, codecs, EPG, and how IPTV differs from cable and OTT." },
                { title: "Best IPTV Service 2026 — comparison", href: "/best-iptv-service", desc: "12-metric ranking explaining why annual plans dominate the value chart." },
                { title: "1-Month Plan ($16) for short-term needs", href: "/1-month-iptv-subscription", desc: "Compare against the most expensive per-month tier." },
                { title: "3-Month Plan ($39) for sports seasons", href: "/3-months-iptv-subscription", desc: "Mid-tier plan at $13/mo for season-length cord-cutting." },
                { title: "6-Month Plan ($60) — second-best value", href: "/6-months-iptv-subscription", desc: "Half-year commitment at $10/mo — closest alternative to the annual plan." },
              ].map((r) => (
                <Link
                  key={r.title}
                  href={r.href}
                  className="block rounded-xl border border-border bg-bg-card p-5 transition hover:border-accent/40"
                >
                  <div className="mb-1 text-sm font-bold text-text-primary">{r.title}</div>
                  <p className="text-xs leading-relaxed text-text-secondary">{r.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center" id="cta">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">12</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Lock In $7.50/Month</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              Get the Annual IPTV Plan — $90 for a Full Year
            </h2>
            <p className="mx-auto mb-6 max-w-[560px] text-sm leading-relaxed text-text-secondary">
              24,000+ channels, 120,000+ 4K movies, priority support, and a 7-day money-back guarantee.
              Activation in under 5 minutes. No contract, no auto-renewal.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-black transition hover:opacity-90"
              >
                Order 12-Month Plan — $90
              </a>
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border border-accent px-8 py-3.5 text-sm font-bold text-accent transition hover:bg-accent/10"
              >
                Try Free First
              </a>
            </div>
            <p className="mt-5 text-xs text-text-muted">
              Backed by our{" "}
              <Link href="/refund" className="text-accent hover:underline">
                7-day money-back guarantee
              </Link>
              . 4.9/5 from 2,380+ verified subscribers.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
