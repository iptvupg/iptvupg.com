import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PAGE_URL = "https://www.iptvupg.com/6-months-iptv-subscription";
const WHATSAPP_BUY_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20want%20to%20purchase%20a%206%20Months%20subscription%20(%2460)";
const WHATSAPP_TRIAL_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial%20before%20the%206-month%20plan";

export const metadata: Metadata = {
  title: "6 Months IPTV Subscription 2026 — $10/mo Half-Year IPTV Plan ($60 Total)",
  description:
    "6-month IPTV subscription for $60 ($10/mo) — save 38% vs. monthly. 24,000+ live channels, 120,000+ 4K movies, anti-freeze streaming, 2 device connections, 7-day refund. Best mid-term IPTV plan for 2026.",
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: "6 Months IPTV Subscription — Half-Year Plan $60 ($10/mo)",
    description:
      "Half-year IPTV subscription with 24,000+ channels, 120,000+ 4K titles, priority support, and a 7-day money-back guarantee. Save 38% vs. monthly.",
    url: PAGE_URL,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "6 Months IPTV Subscription", item: PAGE_URL },
  ],
};

const productSchema = {
  "@type": "Product",
  "@id": `${PAGE_URL}#product`,
  name: "IPTV UPG 6 Months Subscription",
  sku: "IPTVUPG-SUB-6M",
  mpn: "IPTVUPG-6M-2026",
  category: "Streaming Subscription / IPTV Service",
  description:
    "6-month half-year IPTV subscription with 24,000+ live TV channels, 120,000+ on-demand movies and series in 4K/UHD, anti-freeze adaptive bitrate streaming, full EPG, 2 simultaneous device connections, and 24/7 support.",
  image: ["https://www.iptvupg.com/opengraph-image"],
  brand: { "@id": "https://www.iptvupg.com/#organization" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: 1840,
    reviewCount: 1840,
  },
  offers: {
    "@type": "Offer",
    price: "60.00",
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
  headline:
    "6 Months IPTV Subscription 2026 — Half-Year IPTV Plan Buying Guide ($60, $10/Month)",
  description:
    "Complete guide to the 6-month IPTV subscription: pricing math, who it's for, 8-week onboarding roadmap, KPIs, common pitfalls, and how the half-year plan compares to monthly, quarterly, and annual IPTV plans.",
  datePublished: "2026-05-01",
  dateModified: "2026-05-01",
  inLanguage: "en",
  isAccessibleForFree: true,
  about: [
    { "@type": "Thing", name: "IPTV Subscription" },
    { "@type": "Thing", name: "Half-Year IPTV Plan" },
    { "@type": "Thing", name: "6 Months IPTV" },
  ],
  mentions: [
    { "@type": "Thing", name: "Internet Protocol Television" },
    { "@type": "Thing", name: "Adaptive Bitrate Streaming" },
    { "@type": "Thing", name: "Electronic Program Guide" },
  ],
  author: {
    "@type": "Person",
    name: "Marc Whitfield",
    jobTitle: "Senior IPTV Subscription Editor",
    worksFor: { "@id": "https://www.iptvupg.com/#organization" },
    url: "https://www.iptvupg.com/about",
  },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  mainEntityOfPage: PAGE_URL,
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does the 6-month IPTV subscription cost in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The IPTV UPG 6-month half-year plan costs $60 total, which works out to $10 per month — a 38% saving compared to month-to-month billing at $16. Over 6 months, you save $36 vs. paying monthly, with no auto-renewal and no contract.",
      },
    },
    {
      "@type": "Question",
      name: "Is the 6-month IPTV plan a better value than monthly or annual billing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It's the best mid-term value: $10/mo beats month-to-month ($16) by 38% but stays cheaper than committing to a full year. Choose 6 months if you want meaningful savings without locking in 12 months. Choose annual ($7.50/mo) only if you're certain you'll stream for the full year.",
      },
    },
    {
      "@type": "Question",
      name: "What channels and content are included in the half-year IPTV plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All IPTV UPG plans include the identical catalog regardless of duration: 24,000+ live TV channels (US, UK, Canada, Europe, MENA, Asia, Africa, Latin America), 120,000+ on-demand movies and series, premium live sports (Premier League, NFL, NBA, MLB, NHL, UFC, F1), full EPG, and SD/HD/Full HD/4K UHD streams with anti-freeze adaptive bitrate technology.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get a refund on the 6-month IPTV subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The 6-month plan includes the same 7-day money-back guarantee as every IPTV UPG plan. If you're not satisfied within the first 7 days of activation, contact support via WhatsApp or email and we issue a full, no-questions-asked refund. There's no auto-renewal beyond the 6 months you pay for.",
      },
    },
    {
      "@type": "Question",
      name: "How many devices can I connect to the half-year IPTV plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Two simultaneous device connections per account, on an unlimited number of registered devices. You can install IPTV UPG on every TV, phone, tablet, Fire Stick, and computer in your home — only the count of streams playing at the same moment is capped at 2. Compatible with Smart TVs, Fire TV, Apple TV, Roku, MAG, Android, iOS, Windows, and macOS.",
      },
    },
    {
      "@type": "Question",
      name: "Can I upgrade from the 6-month plan to the 12-month plan later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Upgrade anytime by messaging IPTV UPG support on WhatsApp. The unused balance from your current 6-month plan is credited toward the upgrade — you only pay the price difference. Many subscribers start on 6 months to validate quality, then upgrade to annual at the $7.50/mo rate.",
      },
    },
    {
      "@type": "Question",
      name: "What internet speed do I need for the 6-month IPTV plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "25 Mbps for 4K/UHD streams, 10 Mbps for HD (1080p), and 5 Mbps for SD. Because every plan supports 2 simultaneous 4K streams, IPTV UPG recommends at least 50 Mbps down for the smoothest experience. Wired Ethernet is preferred for 4K stability; modern Wi-Fi 5 (802.11ac) and Wi-Fi 6 also work well.",
      },
    },
    {
      "@type": "Question",
      name: "How fast is activation after I order the 6-month subscription?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Activation is instant. After payment, IPTV UPG sends your M3U URL, Xtream Codes credentials, and EPG link by email within 60 seconds. Most subscribers are watching their first 4K channel in under 5 minutes from checkout — install a free IPTV player, paste the credentials, and stream.",
      },
    },
    {
      "@type": "Question",
      name: "Does the 6-month IPTV plan auto-renew?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. There is no auto-renewal on any IPTV UPG plan. Your 6 months end on the exact day they began. You decide whether to renew, switch to annual, or take a break — IPTV UPG will never charge your card without a new order. Set a calendar reminder for month 5 to avoid a service gap.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try the service before paying for 6 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Request a free IPTV trial before committing to the half-year plan — full access to all 24,000+ channels and the 4K VOD library, no credit card required. Message WhatsApp at +44 7848 197761 with the word 'trial' and credentials arrive within minutes. The trial uses the exact same servers as the paid 6-month plan.",
      },
    },
  ],
};

const tldrRows: { plan: string; price: string; perMonth: string; saves: string; bestFor: string }[] = [
  { plan: "1 Month", price: "$16.00", perMonth: "$16.00", saves: "—", bestFor: "First paid month after the free trial" },
  { plan: "3 Months", price: "$39.00", perMonth: "$13.00", saves: "19%", bestFor: "Sports season or short-term cord-cutting" },
  { plan: "6 Months ★", price: "$60.00", perMonth: "$10.00", saves: "38%", bestFor: "Best mid-term balance — value + flexibility" },
  { plan: "12 Months", price: "$90.00", perMonth: "$7.50", saves: "53%", bestFor: "Year-long commitment, daily streamers" },
];

const roadmap: { week: string; title: string; body: string }[] = [
  {
    week: "Week 1",
    title: "Activate & Validate",
    body: "Pay $60, receive M3U + Xtream credentials within 60 seconds, install your IPTV player on Smart TV / Fire Stick / phone, and run your first 4K stream test on Wi-Fi and Ethernet. Audit aggressively — your 7-day refund window starts now.",
  },
  {
    week: "Week 2",
    title: "Curate Your Channel List",
    body: "Pin 30–50 daily favorites (sports, news, kids, premium movies). Configure EPG so the program guide loads automatically. Set parental controls if needed. Test premium sports channels during live events.",
  },
  {
    week: "Week 3",
    title: "Multi-Device Setup",
    body: "Install on Smart TV, Fire Stick, phone, and laptop. Test the 2 simultaneous streams cap by playing two channels in different rooms. Save your login somewhere safe — you'll need it for migrations and renewals.",
  },
  {
    week: "Week 4",
    title: "Cancel Cable / OTT Overlap",
    body: "With service validated, cancel cable, satellite, or duplicate OTT subscriptions you no longer need. Most users save an additional $80–$120/month — money that compounds with the $10/mo IPTV cost.",
  },
  {
    week: "Week 5",
    title: "Optimize Your Network",
    body: "Move TV streamers to Ethernet where possible, set 5 GHz Wi-Fi for tablets, and confirm 50 Mbps+ down on speedtest.net during peak hours. Update router firmware. This eliminates 90% of buffering complaints.",
  },
  {
    week: "Week 6",
    title: "Family Onboarding",
    body: "Train every household member on switching channels, accessing VOD, using EPG, and contacting WhatsApp support. The more people who actually use the service, the higher the per-month ROI.",
  },
  {
    week: "Week 7",
    title: "Mid-Plan Quality Audit",
    body: "Log buffer events, EPG mismatches, and any 4K issues over a representative week. Compare against KPIs in section 7. If service is exceeding expectations, start planning whether to renew at 6 months or upgrade to annual.",
  },
  {
    week: "Week 8",
    title: "Decide Renewal Path",
    body: "By month 2, you have data: total entertainment spend, hours watched, household satisfaction. Decide now whether your next term is another 6 months ($60) or the annual upgrade ($90, $7.50/mo). Set a renewal alert at month 5.",
  },
];

const tools: { name: string; href: string; ext?: boolean; note: string }[] = [
  { name: "Free IPTV Trial (test before 6 months)", href: "/iptv-free-trial", note: "Verify quality on your devices and ISP before committing $60 for half a year." },
  { name: "What is IPTV — full primer", href: "/what-is-iptv", note: "Understand IP television, codecs, and EPG before subscribing." },
  { name: "Best IPTV Service comparison", href: "/best-iptv-service", note: "12-metric ranking — see why IPTV UPG leads on quality and price." },
  { name: "Refund & 7-Day Money-Back Policy", href: "/refund", note: "Read the exact refund procedure that protects your $60 purchase." },
  { name: "1-Month IPTV Subscription", href: "/1-month-iptv-subscription", note: "Compare against month-to-month billing ($16/mo)." },
  { name: "3-Month IPTV Subscription", href: "/3-months-iptv-subscription", note: "Quarterly plan at $13/mo — shorter commitment, smaller savings." },
  { name: "12-Month IPTV Subscription", href: "/12-months-iptv-subscription", note: "Annual plan at $7.50/mo — best price if you're certain about a full year." },
  { name: "speedtest.net by Ookla", href: "https://www.speedtest.net/", ext: true, note: "Confirm 25+ Mbps for 4K and 50+ Mbps for two simultaneous streams." },
  { name: "fast.com (Netflix)", href: "https://fast.com/", ext: true, note: "Second-opinion download speed test during peak ISP hours." },
  { name: "DownDetector — ISP outage map", href: "https://downdetector.com/", ext: true, note: "Rule out ISP outages before contacting IPTV support." },
];

const pitfalls: string[] = [
  "Skipping the free trial — the trial reveals whether your specific ISP can sustain 4K, eliminating the #1 reason for refund requests on paid plans.",
  "Wasting the 7-day refund window — audit aggressively in week 1 (sports, 4K movies, EPG, multi-device); after day 7 the money-back guarantee expires.",
  "Paying month-to-month past month 5 — you cross the breakeven vs. the 6-month plan at month 4, so any ongoing monthly billing is wasted money.",
  "Choosing 6 months when annual makes more sense — if you're certain you'll stream for a full year, the annual plan is $30 cheaper over 12 months ($90 vs. two 6-month plans at $60 each = $120).",
  "Splitting across 3+ devices simultaneously — the plan supports 2 concurrent streams; a third device will fail to connect until one stream stops.",
  "Buying without confirming router/Wi-Fi capability — Wi-Fi 4 (802.11n) routers struggle with two 4K streams. Upgrade to Wi-Fi 5/6 or wire Ethernet first.",
  "Forgetting to cancel overlapping cable/OTT — savings compound only if you actually retire the legacy bills you replaced.",
  "Missing the renewal date — without auto-renewal, your service ends on the exact day you signed up. Set a calendar alert at month 5 to avoid a service gap.",
];

const kpis: { name: string; target: string; why: string }[] = [
  { name: "Effective monthly cost", target: "$10/mo (vs. $16 monthly)", why: "Direct measure of half-year plan ROI vs. month-to-month billing." },
  { name: "6-month savings vs. monthly billing", target: "$36 saved", why: "Difference between $96 (6 × $16) and $60 — pure margin you keep." },
  { name: "6-month savings vs. cable", target: "$480–$720 saved", why: "Average US cable bundle is $90–$130/mo; IPTV UPG half-year is $10/mo." },
  { name: "Activation time", target: "Under 5 minutes", why: "Median time from checkout to first live channel playback." },
  { name: "4K stream uptime", target: "≥ 99.9% over 6 months", why: "Verified server uptime — the SLA you're paying for." },
  { name: "Buffer events per hour", target: "< 1 per hour", why: "On 50 Mbps+ wired connection, anti-freeze keeps interruptions rare." },
  { name: "Refund eligibility window", target: "Days 1–7 after activation", why: "Hard cutoff for the money-back guarantee — audit aggressively in week 1." },
];

export default function SixMonthsSubscription() {
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
              <span>Half-Year IPTV Plan 2026</span>
            </div>
            <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-accent">
              ★ Most Popular · Save 38%
            </span>
            <h1 className="mb-4 text-[clamp(28px,4.4vw,46px)] font-black leading-[1.1]">
              6 Months IPTV Subscription —{" "}
              <span className="text-accent">$10/Month</span> Half-Year IPTV Plan
            </h1>
            <p className="mx-auto mb-8 max-w-[640px] text-[15px] leading-relaxed text-text-secondary">
              The best mid-term IPTV subscription value for 2026: 6 months for $60 ($10/mo). 24,000+
              live channels, 120,000+ 4K movies and series, anti-freeze streaming, 24/7 support,
              7-day money-back guarantee. No contract, no auto-renewal, instant activation.
            </p>
            <div className="mb-2 flex items-center justify-center gap-3">
              <span className="text-lg text-text-muted line-through">$96</span>
              <span className="text-[clamp(40px,6vw,60px)] font-black text-accent leading-none">$60</span>
              <span className="text-text-muted">/6 months</span>
            </div>
            <p className="mb-8 text-[15px] font-semibold text-text-secondary">
              Equivalent to <span className="text-accent">$10/month</span> · You save{" "}
              <span className="text-accent">$36</span> vs. monthly billing
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-black transition hover:opacity-90"
              >
                Get the 6-Month Plan — $60
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
              4.9/5 · 1,840+ verified subscribers · 7-day refund · Activation in under 5 minutes
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
              Why 6 Months Is the Sweet Spot for IPTV in 2026
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              The half-year plan is the best balance between IPTV subscription savings and commitment.
              At <strong className="font-semibold text-text-primary">$10/month</strong>, it&apos;s 38%
              cheaper than monthly billing — but you only commit to half a year. Here&apos;s the math
              across all four IPTV UPG plans.
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
                    const isHalfYear = row.plan.includes("6 Months");
                    return (
                      <tr key={row.plan} className={`border-b border-border last:border-0 ${isHalfYear ? "bg-accent/5" : ""}`}>
                        <td className={`px-4 py-3 ${isHalfYear ? "font-bold text-accent" : ""}`}>{row.plan}</td>
                        <td className={`px-4 py-3 text-center ${isHalfYear ? "font-bold text-accent" : ""}`}>{row.price}</td>
                        <td className={`px-4 py-3 text-center ${isHalfYear ? "font-bold text-accent" : ""}`}>{row.perMonth}</td>
                        <td className={`px-4 py-3 text-center ${isHalfYear ? "font-bold text-accent" : ""}`}>{row.saves}</td>
                        <td className="px-4 py-3 text-text-secondary">{row.bestFor}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Identical 24,000+ channels, 120,000+ VOD titles, 4K, EPG, 2 device connections, and 7-day refund on every plan.
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
              What Is a 6-Month IPTV Subscription?
            </h2>
            <div className="mb-6 rounded-xl border border-accent/20 bg-accent/5 px-6 py-5 text-[15px] leading-relaxed text-text-secondary">
              <strong className="text-text-primary">A 6-month IPTV subscription</strong> is a half-year
              prepaid plan that grants uninterrupted access to a provider&apos;s full live TV and
              on-demand catalog over the internet for 180 days. With IPTV UPG, the half-year plan
              covers 24,000+ live channels worldwide, 120,000+ 4K movies and series, full EPG,
              anti-freeze adaptive bitrate streaming, 2 simultaneous device connections, 24/7 support,
              and a 7-day money-back guarantee — all for a one-time payment of $60 ($10/month).
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                {
                  h: "Half-year prepaid",
                  b: "One $60 payment covers 6 months. No monthly billing, no auto-renewal, no surprise charges.",
                },
                {
                  h: "Mid-term commitment",
                  b: "Long enough to validate value, short enough to switch providers without losing money on unused months.",
                },
                {
                  h: "Same catalog as annual",
                  b: "Half-year subscribers get the identical channel and VOD library as annual — only the per-month price differs.",
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
              The 6-month plan covers the first 26 weeks of your IPTV journey. This phase-by-phase
              framework helps you validate quality inside the 7-day refund window, retire overlapping
              bills, and decide by week 8 whether to renew or upgrade to annual.
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
              Tools to Validate Your 6-Month IPTV Purchase
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Use these resources before and during your first week to confirm the half-year plan is
              the right fit for your network, devices, and viewing habits.
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
                    {t.ext && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-text-muted">
                        External
                      </span>
                    )}
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
              8 Mistakes That Cost Half-Year IPTV Subscribers Money
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
              How to Measure 6-Month IPTV Plan Value
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Track these seven KPIs across your 6 months to quantify ROI and decide your renewal
              path. The numbers below are 2026 IPTV UPG benchmarks across 1,840+ verified half-year
              subscribers.
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

          {/* INCLUDED + DEVICES */}
          <section className="mb-16" id="included">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">08</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>What&apos;s Included</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              Everything Bundled in Your $60 Half-Year IPTV Plan
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "24,000+ live TV channels (US, UK, EU, MENA, LATAM, Asia)",
                "120,000+ on-demand movies & series (4K, HD, SD)",
                "Premium live sports (NFL, NBA, MLB, NHL, UFC, F1, Premier League)",
                "Full EPG (Electronic Program Guide) with 7-day forward listings",
                "Anti-freeze adaptive bitrate streaming technology",
                "2 simultaneous device connections (unlimited registered devices)",
                "24/7 customer support via WhatsApp and email",
                "Instant activation — credentials emailed in under 60 seconds",
                "7-day money-back guarantee, no questions asked",
                "No auto-renewal — full control over your renewal decision",
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
                  MW
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-text-primary">Marc Whitfield</h3>
                  <p className="mb-3 text-sm text-text-muted">
                    Senior IPTV Subscription Editor · IPTV UPG · Reviewing IPTV plans since 2019
                  </p>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    Marc has audited 40+ IPTV providers and benchmarked 2,000+ subscriptions on
                    real-world ISPs across the US, UK, and Europe. His specialty is mid-term plan
                    economics — breakeven curves, refund-window auditing, and the renewal-vs-upgrade
                    decision at month 6. Reviewed by IPTV UPG&apos;s technical team for accuracy on{" "}
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
              Half-Year IPTV Subscription — Frequently Asked Questions
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
                { title: "Free IPTV Trial — test before paying", href: "/iptv-free-trial", desc: "Verify quality on your devices and ISP before committing $60 for half a year." },
                { title: "What is IPTV — full primer", href: "/what-is-iptv", desc: "Definition, technology, codecs, EPG, and how IPTV differs from cable and OTT." },
                { title: "Best IPTV Service 2026 — comparison", href: "/best-iptv-service", desc: "12-metric ranking and why IPTV UPG leads on quality and price." },
                { title: "1-Month Plan ($16) for short-term needs", href: "/1-month-iptv-subscription", desc: "Compare against the most expensive per-month tier." },
                { title: "3-Month Plan ($39) for sports seasons", href: "/3-months-iptv-subscription", desc: "Quarterly plan at $13/mo for season-length cord-cutting." },
                { title: "12-Month Plan ($90) — annual best value", href: "/12-months-iptv-subscription", desc: "Lock in $7.50/mo if you're committed for a full year." },
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
          <section
            className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 text-center"
            id="cta"
          >
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">12</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Lock In $10/Month</span>
            </div>
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black">
              Get the 6-Month IPTV Plan — $60 for Half a Year
            </h2>
            <p className="mx-auto mb-6 max-w-[560px] text-sm leading-relaxed text-text-secondary">
              24,000+ channels, 120,000+ 4K movies, 24/7 support, and a 7-day money-back guarantee.
              Activation in under 5 minutes. No contract, no auto-renewal.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-accent px-8 py-3.5 text-sm font-bold text-black transition hover:opacity-90"
              >
                Order 6-Month Plan — $60
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
              . 4.9/5 from 1,840+ verified subscribers.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
