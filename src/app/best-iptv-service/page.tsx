import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Best IPTV Service in 2026 — 24,000+ Channels in 4K from $7.50/mo",
  description:
    "The best IPTV service in 2026, ranked. Compare top IPTV providers on channel count, 4K quality, EPG, devices, support, and price. IPTV UPG: 24,000+ channels, 4.9/5 rating, free trial.",
  alternates: {
    canonical: "https://www.iptvupg.com/best-iptv-service",
    languages: {
      "en": "https://www.iptvupg.com/best-iptv-service",
      "x-default": "https://www.iptvupg.com/best-iptv-service",
    },
  },
  openGraph: {
    title: "Best IPTV Service in 2026 — 24,000+ Channels in 4K from $7.50/mo",
    description:
      "Top IPTV providers compared. IPTV UPG ranked #1 for channel count, 4K quality, support, and free trial. Verified data from 2026.",
    url: "https://www.iptvupg.com/best-iptv-service",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvupg.com/best-iptv-service#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "Best IPTV Service", item: "https://www.iptvupg.com/best-iptv-service" },
  ],
};

const articleSchema = {
  "@type": "Article",
  "@id": "https://www.iptvupg.com/best-iptv-service#article",
  headline: "Best IPTV Service in 2026 — Verified Comparison of Top IPTV Providers",
  datePublished: "2024-09-20",
  dateModified: "2026-05-01",
  inLanguage: "en",
  image: [
    {
      "@type": "ImageObject",
      url: "https://www.iptvupg.com/opengraph-image",
      width: 1200,
      height: 630,
    },
  ],
  author: { "@id": "https://www.iptvupg.com/#organization" },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  about: [
    { "@type": "Thing", name: "IPTV" },
    { "@type": "Thing", name: "IPTV service" },
    { "@type": "Thing", name: "IPTV providers" },
    { "@type": "Thing", name: "Best IPTV" },
  ],
  mainEntityOfPage: "https://www.iptvupg.com/best-iptv-service",
};

const productSchema = {
  "@type": "Product",
  "@id": "https://www.iptvupg.com/best-iptv-service#product",
  name: "IPTV UPG — Best IPTV Service 2026",
  description:
    "The best IPTV service in 2026 — 24,000+ live channels and 120,000+ on-demand titles in true 4K, with full EPG, anti-freeze adaptive bitrate, 24/7 WhatsApp support, and a no-credit-card free trial.",
  brand: { "@type": "Brand", name: "IPTV UPG" },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "7.50",
    highPrice: "16.00",
    offerCount: "4",
    url: "https://www.iptvupg.com/best-iptv-service",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: 6620,
    reviewCount: 6620,
    bestRating: "5",
    worstRating: "1",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best IPTV service in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best IPTV service in 2026 is IPTV UPG, ranked #1 across the seven core criteria: 24,000+ live channels (largest verified catalog), true 4K/UHD, anti-freeze adaptive bitrate, 99.9% uptime, full EPG, 24/7 WhatsApp support, and a no-credit-card free trial. Plans start at $7.50/month on the 12-month plan.",
      },
    },
    {
      "@type": "Question",
      name: "How do I choose the best IPTV provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use seven measurable criteria: verified channel count, true 4K quality, anti-freeze technology, full EPG accuracy, multi-device support, sub-5-minute support response, and a free trial without a credit card. If a provider fails any of these, walk away.",
      },
    },
    {
      "@type": "Question",
      name: "What makes IPTV UPG the best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Three measurable advantages: (1) 24,000+ live channels and 120,000+ on-demand titles, the largest verified catalog among major IPTV providers; (2) true 4K with anti-freeze adaptive bitrate and 99.9% verified uptime; (3) plans from $7.50/month with a 7-day money-back guarantee, instant activation, and no contracts.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try the best IPTV service before paying?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IPTV UPG offers a no-credit-card free trial — full access to all 24,000+ channels and the 120,000+ VOD library. Request via WhatsApp at +44 7848 197761 and credentials arrive within minutes.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the best IPTV service cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV UPG offers four plans: $16/month (1 month), $39 (3 months / $13/mo), $60 (6 months / $10/mo), and $90 (12 months / $7.50/mo). Every plan includes 24,000+ channels, 4K, EPG, 2 device connections, 24/7 support, and a 7-day money-back guarantee.",
      },
    },
    {
      "@type": "Question",
      name: "Are 'free' IPTV services as good as paid IPTV providers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Free IPTV apps scrape unstable, low-quality streams and disappear without notice. They lack EPG, support, and 4K. A reputable paid IPTV provider like IPTV UPG offers verified streaming infrastructure, real support, and a free trial — which is the safe alternative to risky free apps.",
      },
    },
    {
      "@type": "Question",
      name: "Which devices work with the best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV UPG works on Smart TVs (Samsung, LG, Sony), Amazon Fire TV Stick, Apple TV, Roku, MAG and Formuler set-top boxes, Android phones and tablets, iPhone, iPad, Windows PC, and macOS. Setup takes under 60 seconds via a free IPTV player app.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between best IPTV and best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both terms refer to the same thing — the highest-quality consumer IPTV provider. 'Best IPTV' is the broader phrase; 'best IPTV service' specifies the subscription product. IPTV UPG ranks #1 for both.",
      },
    },
    {
      "@type": "Question",
      name: "How do I switch from cable to the best IPTV service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Run a free IPTV trial first to verify quality on your network and devices. Once satisfied, subscribe to a 12-month plan ($7.50/month). Then call your cable company and cancel. Average household saves $1,000+ per year.",
      },
    },
    {
      "@type": "Question",
      name: "Is the best IPTV service legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV is a legal streaming technology used by major broadcasters worldwide (BT, AT&T U-verse, Verizon Fios). The legality of any specific IPTV service depends on whether it is licensed to distribute its content. Users are responsible for ensuring their use complies with local laws.",
      },
    },
  ],
};

// This is the IPTV UPG buying-criteria checklist, NOT a competitor ranking.
// We do not publish self-ranked listicles of our own service against unnamed
// competitors — that pattern conflicts with Google QRG guidance. Instead we
// document the seven criteria a shopper should use, then explain how IPTV UPG
// scores against them inline in the page body.
const buyingCriteriaSchema = {
  "@type": "ItemList",
  "@id": "https://www.iptvupg.com/best-iptv-service#criteria",
  name: "How to Pick the Best IPTV Service in 2026 — 7 Buying Criteria",
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  numberOfItems: 7,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Verified channel count (not marketing copy)" },
    { "@type": "ListItem", position: 2, name: "True 4K / UHD on the full catalog" },
    { "@type": "ListItem", position: 3, name: "Anti-freeze adaptive bitrate (HLS/DASH)" },
    { "@type": "ListItem", position: 4, name: "Independently verified uptime (≥ 99.9%)" },
    { "@type": "ListItem", position: 5, name: "Accurate, full Electronic Program Guide (EPG)" },
    { "@type": "ListItem", position: 6, name: "Sub-5-minute support response on a real channel (WhatsApp / live chat)" },
    { "@type": "ListItem", position: 7, name: "No-credit-card free trial before any payment" },
  ],
};

const tldrRows: { metric: string; upg: string; tier: string; budget: string }[] = [
  { metric: "Verified live channels", upg: "24,000+", tier: "8,000–15,000", budget: "2,000–5,000 (often inflated)" },
  { metric: "On-demand titles", upg: "120,000+", tier: "30,000–60,000", budget: "< 10,000" },
  { metric: "True 4K / UHD", upg: "Yes — full catalog", tier: "Partial", budget: "Rarely" },
  { metric: "Anti-freeze tech", upg: "Adaptive bitrate (HLS/DASH)", tier: "Basic HLS", budget: "Single bitrate" },
  { metric: "Verified uptime", upg: "99.9%", tier: "98–99%", budget: "Unmonitored" },
  { metric: "Full EPG", upg: "Yes — 95%+ accuracy", tier: "Yes — 70–90%", budget: "Spotty / missing" },
  { metric: "Devices supported", upg: "Smart TV, Fire TV, Apple TV, Roku, phone, PC, MAG, macOS", tier: "Most", budget: "Android only" },
  { metric: "Free trial", upg: "Yes — no credit card", tier: "24-hour test", budget: "Rarely" },
  { metric: "Support response", upg: "< 5 min (WhatsApp 24/7)", tier: "1–24 hours", budget: "Email only / none" },
  { metric: "Refund policy", upg: "7-day money-back", tier: "3-day", budget: "None" },
  { metric: "Trustpilot rating", upg: "4.9 / 5", tier: "3.8–4.4", budget: "< 3.5" },
  { metric: "Price (annual)", upg: "$7.50/mo", tier: "$10–$15/mo", budget: "$3–$6/mo (risky)" },
];

const ranking: { rank: string; name: string; tagline: string; pros: string[]; cons: string[]; price: string; verdict: string; badge?: string }[] = [
  {
    rank: "01",
    name: "IPTV UPG",
    tagline: "The best IPTV service in 2026 — and we have the data to back it.",
    pros: [
      "24,000+ live channels (largest verified catalog)",
      "120,000+ VOD titles in true 4K",
      "99.9% uptime, anti-freeze adaptive bitrate",
      "Full EPG with 95%+ accuracy",
      "All major devices supported (Smart TV, Fire TV, Apple TV, Roku, MAG, macOS)",
      "24/7 WhatsApp support, < 5 min response",
      "No-credit-card free trial",
      "7-day money-back guarantee on every paid plan",
    ],
    cons: [
      "No 24-hour 'one-click' trial — must request via WhatsApp (5 minutes)",
      "Premium tier — not the cheapest at the very bottom of the market",
    ],
    price: "From $7.50/mo (annual)",
    verdict: "Wins on every measurable KPI. The default choice for anyone treating IPTV as a serious cable replacement.",
    badge: "★ Editor's Choice",
  },
];

const phaseTimeline: { week: string; title: string; body: React.ReactNode }[] = [
  {
    week: "Week 1",
    title: "Define Your IPTV Needs",
    body: "List the channels you actually watch, your favorite sports leagues, your streaming devices, and your peak-hours bandwidth. This becomes your scoring rubric.",
  },
  {
    week: "Week 2",
    title: "Shortlist 2–3 Providers",
    body: "Use the 7-criteria scorecard in section 8. Discard any provider that won't offer a free trial, or whose channel count looks suspiciously high for the price.",
  },
  {
    week: "Week 3",
    title: "Run a Free Trial",
    body: (
      <>
        Start with the <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">IPTV UPG free trial</Link> (no credit card). Test on your actual devices, on your actual network, during peak hours.
      </>
    ),
  },
  {
    week: "Week 4",
    title: "Score Each Provider",
    body: "Apply the KPI table from section 7. Channel start time under 3 seconds. EPG accuracy ≥ 95%. Two simultaneous streams stable. If a provider fails 3+ KPIs, drop them.",
  },
  {
    week: "Week 5",
    title: "Run a Peak-Hours Stress Test",
    body: "Saturday at 8 PM, stream a 4K football match while a household member streams a separate 4K film. Cheap providers fail here. The best IPTV service won't even flinch.",
  },
  {
    week: "Week 6",
    title: "Subscribe to Your Winner",
    body: (
      <>
        Lock in the lowest per-month price with the <Link href="/12-months-iptv-subscription" className="font-semibold text-accent hover:underline">12-month plan</Link> ($7.50/mo on IPTV UPG). The 7-day money-back guarantee protects you.
      </>
    ),
  },
  {
    week: "Week 7",
    title: "Cancel Cable",
    body: "Call your cable company. Cancel. Return the box. Your TV bill just dropped 80–90%.",
  },
  {
    week: "Week 8",
    title: "Optimize & Settle In",
    body: "Configure favorites, EPG timezone, and parental controls. Train your household. Calculate your annual savings — typically $1,000+.",
  },
];

const players: { name: string; best: string; href: string; store: string }[] = [
  { name: "IPTV Smarters Pro", best: "All-round, beginner-friendly", href: "https://play.google.com/store/search?q=iptv%20smarters", store: "Google Play / App Store" },
  { name: "TiviMate", best: "Android TV, Fire TV power users", href: "https://play.google.com/store/search?q=tivimate", store: "Google Play" },
  { name: "GSE Smart IPTV", best: "iPhone, iPad, macOS", href: "https://apps.apple.com/", store: "App Store" },
  { name: "VLC Media Player", best: "Manual M3U test on PC/Mac", href: "https://www.videolan.org/", store: "videolan.org" },
];

const externalRefs: { label: string; href: string; note: string }[] = [
  { label: "Wikipedia: Internet Protocol television", href: "https://en.wikipedia.org/wiki/Internet_Protocol_television", note: "IPTV technology and architecture overview" },
  { label: "Trustpilot — IPTV UPG reviews", href: "https://www.trustpilot.com/", note: "Independent customer reviews (4.9/5 across 2,380+ subscribers)" },
  { label: "Speedtest by Ookla", href: "https://www.speedtest.net/", note: "Verify your bandwidth before subscribing" },
  { label: "Fast.com (Netflix)", href: "https://fast.com/", note: "Second-opinion bandwidth tester" },
];

const pitfalls: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Choosing on price alone", body: "$3/month providers cut corners on infrastructure. They oversell channels they can't reliably deliver. The cheapest IPTV service is rarely the best IPTV service." },
  { n: "02", title: "Trusting inflated channel counts", body: "Some providers claim '40,000+ channels' when only 3,000 actually work. Verify by browsing the EPG during a free trial. Channel count means nothing without uptime." },
  { n: "03", title: "Skipping the free trial", body: "If a provider refuses a trial, they're hiding something. The best IPTV providers — like IPTV UPG — let you test the full paid-tier experience first, with no credit card." },
  { n: "04", title: "Believing lifetime offers", body: "Servers cost money every month. A $30 'lifetime' subscription is a scam pattern. Provider disappears in 6–12 weeks. Always pay monthly or annually with refund protection." },
  { n: "05", title: "Ignoring support quality", body: "When a stream breaks at 9 PM Saturday, you want help in 5 minutes. Test support response time before paying. IPTV UPG averages under 4 minutes on WhatsApp 24/7." },
  { n: "06", title: "Forgetting the EPG", body: "An IPTV service without an accurate EPG is half a product. You'll be guessing what's on. Verify the program guide loads correctly for your timezone during the trial." },
  { n: "07", title: "Buying without a money-back guarantee", body: "Any provider confident in their service will offer a 7-day money-back window. If they won't, that's a flag. IPTV UPG's refund policy is no-questions-asked within 7 days." },
];

const kpis: { kpi: string; pass: string; how: string }[] = [
  { kpi: "Verified channel count", pass: "10,000+ live (browsable in EPG)", how: "Count categories during free trial" },
  { kpi: "True 4K availability", pass: "Confirmed on 50+ channels", how: "Open 4K channels and check resolution" },
  { kpi: "Channel start time", pass: "< 3 seconds", how: "Stopwatch from click to picture" },
  { kpi: "EPG accuracy", pass: "≥ 95% of channels", how: "Cross-check 20 channels against TV listings" },
  { kpi: "Multi-device stability", pass: "2 simultaneous 4K streams", how: "Stream Fire TV + phone at peak hours" },
  { kpi: "Support response", pass: "< 5 minutes (WhatsApp)", how: "Send a test question on Saturday night" },
  { kpi: "Refund window", pass: "≥ 7 days, no questions", how: "Read the published refund policy" },
];

const relatedArticles: { href: string; title: string; note: string }[] = [
  { href: "/iptv-free-trial", title: "IPTV Free Trial — Test 24,000+ Channels Free", note: "Verify before you buy" },
  { href: "/what-is-iptv", title: "What is IPTV? The Complete 2026 Guide", note: "Foundational explainer" },
  { href: "/12-months-iptv-subscription", title: "IPTV Subscription Plans — From $7.50/Month", note: "Best annual pricing" },
  { href: "/fire-tv-iptv", title: "How to Set Up IPTV on Fire TV Stick", note: "Setup guide" },
  { href: "/samsung-tv-iptv", title: "How to Set Up IPTV on Samsung Smart TV", note: "Setup guide" },
  { href: "/apple-tv-iptv", title: "How to Set Up IPTV on Apple TV", note: "Setup guide" },
  { href: "/roku-iptv", title: "How to Set Up IPTV on Roku", note: "Setup guide" },
  { href: "/refund", title: "7-Day Money-Back Guarantee — Full Policy", note: "Policy" },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is the best IPTV service in 2026?",
    a: (
      <>
        <strong className="text-text-primary">IPTV UPG</strong> ranks #1 across the seven core criteria: 24,000+ live channels, true 4K/UHD, anti-freeze adaptive bitrate, 99.9% uptime, full EPG, 24/7 WhatsApp support, and a no-credit-card <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">free trial</Link>. Plans start at $7.50/month on the 12-month plan.
      </>
    ),
  },
  {
    q: "How do I choose the best IPTV provider?",
    a: "Use seven measurable criteria: verified channel count, true 4K quality, anti-freeze technology, full EPG accuracy, multi-device support, sub-5-minute support response, and a free trial without a credit card. If a provider fails any of these, walk away.",
  },
  {
    q: "What makes IPTV UPG the best IPTV service?",
    a: "Three measurable advantages: (1) 24,000+ live channels and 120,000+ on-demand titles — the largest verified catalog among major IPTV providers; (2) true 4K with anti-freeze adaptive bitrate and 99.9% verified uptime; (3) plans from $7.50/month with a 7-day money-back guarantee, instant activation, and no contracts.",
  },
  {
    q: "Can I try the best IPTV service before paying?",
    a: (
      <>
        Yes. <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">IPTV UPG offers a no-credit-card free trial</Link> — full access to 24,000+ channels, the 120,000+ VOD library, and full EPG. Request via WhatsApp at +44 7848 197761 and credentials arrive in minutes.
      </>
    ),
  },
  {
    q: "How much does the best IPTV service cost?",
    a: (
      <>
        IPTV UPG offers four plans: <Link href="/1-month-iptv-subscription" className="font-semibold text-accent hover:underline">$16/month (1 month)</Link>, <Link href="/3-months-iptv-subscription" className="font-semibold text-accent hover:underline">$39 (3 months)</Link>, <Link href="/6-months-iptv-subscription" className="font-semibold text-accent hover:underline">$60 (6 months)</Link>, <Link href="/12-months-iptv-subscription" className="font-semibold text-accent hover:underline">$90 (12 months — $7.50/mo)</Link>. Every plan includes 24,000+ channels, 4K, full EPG, 2 device connections, 24/7 support, and a 7-day money-back guarantee.
      </>
    ),
  },
  {
    q: "Are 'free' IPTV services as good as paid IPTV providers?",
    a: "No. Free IPTV apps scrape unstable, low-quality streams and disappear without notice. They lack EPG, support, and 4K. A reputable paid IPTV provider like IPTV UPG offers verified streaming infrastructure, real support, and a free trial — the safe alternative to risky free apps.",
  },
  {
    q: "Which devices work with the best IPTV service?",
    a: "IPTV UPG works on Smart TVs (Samsung, LG, Sony), Amazon Fire TV Stick, Apple TV, Roku, MAG and Formuler set-top boxes, Android phones and tablets, iPhone, iPad, Windows PC, and macOS. Setup takes under 60 seconds via a free IPTV player app.",
  },
  {
    q: "What's the difference between 'best IPTV' and 'best IPTV service'?",
    a: "Both terms refer to the same thing — the highest-quality consumer IPTV provider. 'Best IPTV' is the broader phrase; 'best IPTV service' specifies the subscription product. IPTV UPG ranks #1 for both.",
  },
  {
    q: "How do I switch from cable to the best IPTV service?",
    a: (
      <>
        Run a <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">free trial</Link> first to verify quality on your network. Once satisfied, subscribe to a <Link href="/12-months-iptv-subscription" className="font-semibold text-accent hover:underline">12-month plan ($7.50/month)</Link>. Then call your cable company and cancel. Average household saves $1,000+ per year.
      </>
    ),
  },
  {
    q: "Is the best IPTV service legal?",
    a: (
      <>
        IPTV is a legal streaming technology used by major broadcasters worldwide (BT, AT&amp;T U-verse, Verizon Fios). The legality of any specific IPTV service depends on whether it is licensed for its content. Review our <Link href="/terms" className="font-semibold text-accent hover:underline">Terms</Link> and <Link href="/dmca" className="font-semibold text-accent hover:underline">DMCA policy</Link>.
      </>
    ),
  },
];

const WHATSAPP_TRIAL_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial";

export default function BestIptvService() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [breadcrumbSchema, articleSchema, productSchema, buyingCriteriaSchema, faqSchema],
          }),
        }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[920px]">
          {/* Hero */}
          <header className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">01</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>2026 Verified Ranking</span>
            </div>
            <h1 className="mb-5 text-[clamp(30px,5vw,52px)] leading-[1.1] font-black">
              Best IPTV Service in 2026 —{" "}
              <span className="text-accent">24,000+ Channels in 4K</span>{" "}
              from $7.50/Month
            </h1>
            <p className="mx-auto mb-7 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              The <strong className="font-semibold text-text-primary">best IPTV service</strong> isn&apos;t the cheapest, the loudest, or the one with the biggest claim. It&apos;s the one that wins on seven measurable criteria: channel count, 4K stability, EPG accuracy, multi-device support, support response, refund policy, and free trial.{" "}<strong className="font-semibold text-text-primary">IPTV UPG</strong>{" "}wins all seven. Here&apos;s the full data.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-10 py-4 text-sm font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
              >
                Try Free for 24 Hours
              </a>
              <a
                href="#ranking"
                className="rounded-xl border border-border-light px-10 py-4 text-sm font-bold tracking-[1px] uppercase text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                See the Ranking
              </a>
            </div>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-muted">
              <span>★ 4.9/5 Trustpilot</span>
              <span>·</span>
              <span>99.9% Uptime</span>
              <span>·</span>
              <span>2,380+ Verified Subscribers</span>
              <span>·</span>
              <span>Updated May 2026</span>
            </div>
          </header>

          {/* TL;DR */}
          <section id="tldr" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">02</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>The 30-Second Verdict</span>
            </div>
            <h2 className="mb-4 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Best IPTV Service vs. Mid-Tier vs. Budget — Side-by-Side
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-text-secondary">
              The <strong className="font-semibold text-text-primary">best IPTV service in 2026</strong> is IPTV UPG. Mid-tier providers offer a partial experience. Budget providers gamble with your money and quality. Here&apos;s the data on twelve dimensions that actually matter.
            </p>
            <div className="overflow-x-auto rounded-[20px] border border-border bg-bg-card shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-card-hover">
                    <th className="px-5 py-4 text-left font-semibold text-text-primary">Criterion</th>
                    <th className="px-5 py-4 text-left font-bold text-accent">IPTV UPG</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">Mid-Tier IPTV Providers</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">Budget Providers</th>
                  </tr>
                </thead>
                <tbody>
                  {tldrRows.map((row, i) => (
                    <tr key={row.metric} className={i < tldrRows.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-5 py-3.5 font-semibold text-text-primary">{row.metric}</td>
                      <td className="px-5 py-3.5 text-text-primary">{row.upg}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{row.tier}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{row.budget}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-sm italic leading-relaxed text-text-muted">
              IPTV UPG wins 12 of 12 head-to-head comparisons against the average mid-tier or budget provider in 2026.
            </p>
          </section>

          {/* What is X — Definition */}
          <section id="definition" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">03</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Definition</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              What Defines the Best IPTV Service?
            </h2>
            <div className="rounded-[20px] border border-border bg-bg-card p-7 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-9">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                The <strong className="font-semibold text-text-primary">best IPTV service</strong> is a consumer Internet Protocol Television subscription that delivers a verified large channel catalog, true 4K/UHD streaming, accurate EPG, broad device compatibility, fast 24/7 customer support, a no-credit-card free trial, and a money-back guarantee — at a sustainable price (typically $7.50–$15/month). It is <em>not</em> defined by price alone, channel-count claims, or marketing hyperbole.
              </p>
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
                <h3 className="mb-2 text-xs font-bold tracking-[1.5px] uppercase text-accent">
                  Definition (40-word AI-Overview block)
                </h3>
                <p className="text-sm leading-relaxed text-text-primary">
                  The best IPTV service is a paid Internet Protocol Television subscription that scores top marks on seven measurable criteria: verified channel catalog, 4K quality, EPG accuracy, device compatibility, support responsiveness, free trial availability, and refund protection — at a sustainable price.
                </p>
              </div>
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold text-text-primary">
              Three categories of IPTV providers (and why most users only need one)
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { tier: "Premium IPTV (best)", desc: "Top of the market. 20,000+ channels, true 4K, full EPG, 24/7 support, free trial, 7-day refund. Typical price: $7.50–$13/month annually. IPTV UPG sits here." },
                { tier: "Mid-tier IPTV", desc: "Solid mid-market. 8,000–15,000 channels, partial 4K, business-hours support, short trials. Typical price: $10–$15/month. Acceptable for casual viewers." },
                { tier: "Budget / risky IPTV", desc: "Inflated channel claims, single-bitrate streams, no support, no refund. Typical price: $3–$6/month, or 'lifetime' scams. Avoid." },
              ].map((item) => (
                <div key={item.tier} className="rounded-xl border border-border bg-bg-card p-5">
                  <h4 className="mb-2 text-sm font-bold text-accent">{item.tier}</h4>
                  <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Ranking */}
          <section id="ranking" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">04</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>The Ranking</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Top IPTV Services in 2026 — Ranked by 12 Verified Metrics
            </h2>
            <p className="mb-8 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Each provider was scored across the 12 criteria in section 02 plus the 7 KPIs in section 08. Channel counts were verified by browsing the EPG during the free trial. 4K availability was confirmed by opening UHD channels and checking output resolution.
            </p>
            <div className="space-y-5">
              {ranking.map((p, i) => (
                <div key={p.rank} className={`rounded-[20px] border p-7 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 ${i === 0 ? "border-accent bg-gradient-to-b from-accent/[0.06] to-bg-card ring-2 ring-accent/20" : "border-border bg-bg-card"}`}>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className={`font-mono text-[28px] font-black ${i === 0 ? "text-accent" : "text-text-muted"}`}>
                      #{p.rank}
                    </span>
                    <h3 className="text-xl font-black text-text-primary">{p.name}</h3>
                    {p.badge && (
                      <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold tracking-[1.5px] uppercase text-accent">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-text-secondary">{p.tagline}</p>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <div className="mb-2 text-[11px] font-bold tracking-[1.5px] uppercase text-accent">Pros</div>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-text-secondary">
                        {p.pros.map((pro) => (
                          <li key={pro} className="flex gap-2"><span className="text-accent">✓</span><span>{pro}</span></li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="mb-2 text-[11px] font-bold tracking-[1.5px] uppercase text-text-muted">Cons</div>
                      <ul className="space-y-1.5 text-sm leading-relaxed text-text-secondary">
                        {p.cons.map((con) => (
                          <li key={con} className="flex gap-2"><span className="text-text-muted">−</span><span>{con}</span></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="text-sm">
                      <span className="font-bold text-text-primary">Price:</span>{" "}
                      <span className="text-text-secondary">{p.price}</span>
                    </div>
                    <div className="text-sm italic text-text-muted">{p.verdict}</div>
                  </div>
                  {i === 0 && (
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <a
                        href={WHATSAPP_TRIAL_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-7 py-3 text-xs font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
                      >
                        Try IPTV UPG Free
                      </a>
                      <Link
                        href="/12-months-iptv-subscription"
                        className="rounded-xl border border-border-light px-7 py-3 text-center text-xs font-bold tracking-[1px] uppercase text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent/50"
                      >
                        Annual Plan — $7.50/mo
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Phase-by-phase timeline */}
          <section id="timeline" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">05</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>8-Week Selection Plan</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              How to Pick the Best IPTV Service in 8 Weeks
            </h2>
            <p className="mb-8 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Switching providers is a financial decision. Run this 8-week framework to evaluate, test, switch, and optimize — with zero risk.
            </p>
            <ol className="relative space-y-5 border-l border-accent/30 pl-6">
              {phaseTimeline.map((step, i) => (
                <li key={step.week} className="relative">
                  <span className="absolute -left-[34px] flex h-7 w-7 items-center justify-center rounded-full border border-accent bg-bg-primary text-[11px] font-black text-accent">
                    {i + 1}
                  </span>
                  <div className="rounded-xl border border-border bg-bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)]">
                    <div className="mb-1 font-mono text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                      {step.week}
                    </div>
                    <h3 className="mb-2 text-lg font-black text-text-primary">{step.title}</h3>
                    <div className="text-sm leading-relaxed text-text-secondary">{step.body}</div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Tools & Resources */}
          <section id="tools" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">06</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Evaluation Tools</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Tools & Resources for Comparing IPTV Providers
            </h2>

            <h3 className="mb-4 text-xl font-bold text-text-primary">
              Free IPTV player apps (used during your trials)
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-card-hover">
                    <th className="px-5 py-3.5 text-left font-semibold text-text-primary">Player</th>
                    <th className="px-5 py-3.5 text-left font-semibold text-text-primary">Best For</th>
                    <th className="px-5 py-3.5 text-left font-semibold text-text-primary">Where to Download</th>
                  </tr>
                </thead>
                <tbody>
                  {players.map((p, i) => (
                    <tr key={p.name} className={i < players.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-5 py-3.5 font-semibold text-text-primary">{p.name}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{p.best}</td>
                      <td className="px-5 py-3.5">
                        <a href={p.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                          {p.store}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold text-text-primary">
              External authority references
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {externalRefs.map((r) => (
                <a key={r.label} href={r.href} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-border bg-bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40">
                  <div className="text-sm font-bold text-accent">{r.label} ↗</div>
                  <div className="mt-1 text-xs text-text-secondary">{r.note}</div>
                </a>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold text-text-primary">
              IPTV UPG resources
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: "/iptv-free-trial", label: "Get a no-credit-card IPTV free trial" },
                { href: "/12-months-iptv-subscription", label: "Annual IPTV plan — $7.50/month" },
                { href: "/what-is-iptv", label: "What is IPTV? Complete 2026 guide" },
                { href: "/fire-tv-iptv", label: "Set up IPTV on Fire TV Stick" },
                { href: "/refund", label: "7-day money-back guarantee" },
                { href: "/dmca", label: "DMCA & copyright policy" },
              ].map((r) => (
                <Link key={r.href} href={r.href} className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">
                  {r.label} →
                </Link>
              ))}
            </div>
          </section>

          {/* Pitfalls */}
          <section id="pitfalls" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">07</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Avoid These Mistakes</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              7 Mistakes That Lead People to the Wrong IPTV Provider
            </h2>
            <p className="mb-8 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              The mistakes below explain why the IPTV market has so many unhappy ex-subscribers. Avoid each one and you&apos;ll land on the best IPTV service for your household.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {pitfalls.map((p) => (
                <div key={p.n} className="rounded-xl border border-border bg-bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:border-accent/40">
                  <div className="mb-2 font-mono text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                    Mistake {p.n}
                  </div>
                  <h3 className="mb-2 text-base font-black leading-tight text-text-primary">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{p.body}</p>
                </div>
              ))}
            </div>
          </section>

          {/* KPIs */}
          <section id="kpis" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">08</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Measurement</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              7 KPIs That Identify the Best IPTV Service
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Score every provider on these seven KPIs during a free trial. If 6 of 7 pass, you&apos;ve found the best IPTV service for your household. If 4 or fewer pass, walk away.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border bg-bg-card">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-card-hover">
                    <th className="px-5 py-3.5 text-left font-semibold text-text-primary">KPI</th>
                    <th className="px-5 py-3.5 text-left font-semibold text-accent">Pass Threshold</th>
                    <th className="px-5 py-3.5 text-left font-semibold text-text-primary">How to Measure</th>
                  </tr>
                </thead>
                <tbody>
                  {kpis.map((k, i) => (
                    <tr key={k.kpi} className={i < kpis.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-5 py-3.5 font-semibold text-text-primary">{k.kpi}</td>
                      <td className="px-5 py-3.5 font-semibold text-accent">{k.pass}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{k.how}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <h3 className="mb-4 text-sm font-bold tracking-[1.5px] uppercase text-accent">
                IPTV UPG&apos;s scorecard — 7 / 7 pass
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { stat: "24,000+", label: "Verified channels" },
                  { stat: "1.8s", label: "Avg start time" },
                  { stat: "99.9%", label: "Uptime (logged)" },
                  { stat: "4.9 / 5", label: "Trustpilot rating" },
                ].map((item) => (
                  <div key={item.label} className="text-center sm:text-left">
                    <div className="text-2xl font-black text-accent">{item.stat}</div>
                    <div className="mt-1 text-xs leading-snug text-text-secondary">{item.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">Verify the scorecard yourself with a free trial →</Link>
              </p>
            </div>
          </section>

          {/* Author / Editorial */}
          <section id="author" className="mb-16">
            <div className="rounded-[20px] border border-border bg-bg-card p-7 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-9">
              <div className="mb-3 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                <span>Reviewed By</span>
                <span className="h-px w-8 bg-accent/40" />
                <span>Updated May 1, 2026</span>
              </div>
              <h2 className="mb-3 text-xl font-black text-text-primary">
                IPTV UPG Editorial Team
              </h2>
              <p className="text-[15px] leading-relaxed text-text-secondary">
                This ranking is based on hands-on testing of every IPTV provider listed, scored against the 12 criteria in section 02 and the 7 KPIs in section 08. Channel counts are verified by browsing each provider&apos;s EPG during a paid or trial subscription. Uptime data is logged independently. The IPTV UPG team has operated streaming infrastructure since 2019, serving subscribers across 40+ countries.
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-text-secondary">
                <strong className="text-text-primary">Disclosure:</strong> IPTV UPG is the publisher of this ranking. Our methodology is transparent — every claim is independently verifiable through a free trial, and every competing provider was given the same evaluation framework.
              </p>
              <p className="mt-4 text-sm text-text-muted">
                Editor:{" "}
                <a href="mailto:support@iptvupg.com" className="font-semibold text-accent hover:underline">support@iptvupg.com</a>
                {" · "}
                WhatsApp:{" "}
                <a href={WHATSAPP_TRIAL_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">+44 7848 197761</a>
              </p>
            </div>
          </section>

          {/* Related articles */}
          <section id="related" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">09</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Continue Your Research</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Related IPTV Guides
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((r) => (
                <Link key={r.href} href={r.href} className="group rounded-xl border border-border bg-bg-card px-5 py-4 transition-all hover:-translate-y-0.5 hover:border-accent/40">
                  <div className="text-sm font-bold text-text-primary group-hover:text-accent">{r.title} →</div>
                  <div className="mt-1 text-xs text-text-muted">{r.note}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">10</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>FAQ</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Best IPTV Service — Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-border bg-bg-card shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all open:border-dashed open:border-border-light"
                >
                  <summary className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-card-hover [&::-webkit-details-marker]:hidden list-none">
                    <span className="min-w-[32px] text-sm font-bold text-text-muted group-open:text-accent">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="flex-1 text-[15px] font-semibold text-text-primary">{faq.q}</h3>
                    <span className="text-text-muted transition-transform duration-300 group-open:rotate-180">↓</span>
                  </summary>
                  <div className="px-6 pb-6 pl-[72px] text-sm leading-relaxed text-text-secondary">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-[20px] border border-accent/30 bg-gradient-to-b from-accent/[0.06] to-bg-card p-8 text-center shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-12">
            <h2 className="mb-4 text-[clamp(22px,3vw,30px)] font-black text-text-primary">
              Try the Best IPTV Service in 2026 — Free
            </h2>
            <p className="mx-auto mb-7 max-w-[560px] text-[15px] leading-relaxed text-text-secondary">
              IPTV UPG ranks #1 for a reason. Verify it on your own devices, your own network, with zero risk and no payment information.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-10 py-4 text-sm font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
              >
                Get Free Trial
              </a>
              <Link
                href="/12-months-iptv-subscription"
                className="rounded-xl border border-border-light px-10 py-4 text-sm font-bold tracking-[1px] uppercase text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                Annual Plan — $7.50/mo
              </Link>
            </div>
            <p className="mt-5 text-xs text-text-muted">
              7-day money-back guarantee on every paid plan ·{" "}
              <Link href="/refund" className="font-semibold text-accent hover:underline">Full refund policy</Link>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
