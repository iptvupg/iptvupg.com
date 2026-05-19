import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What is IPTV? The Complete 2026 Guide to IPTV Services & Streaming",
  description:
    "What is IPTV? A plain-English guide to Internet Protocol Television — how it works, how it differs from cable and OTT streaming, the best IPTV services, devices, costs, and legality in 2026.",
  alternates: {
    canonical: "https://www.iptvupg.com/what-is-iptv",
    languages: {
      "en": "https://www.iptvupg.com/what-is-iptv",
      "x-default": "https://www.iptvupg.com/what-is-iptv",
    },
  },
  openGraph: {
    title: "What is IPTV? The Complete 2026 Guide to IPTV Services & Streaming",
    description:
      "Internet Protocol Television (IPTV) explained — how it works, devices, pricing, legality, and the best IPTV providers in 2026.",
    url: "https://www.iptvupg.com/what-is-iptv",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvupg.com/what-is-iptv#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "What is IPTV?", item: "https://www.iptvupg.com/what-is-iptv" },
  ],
};

const articleSchema = {
  "@type": "Article",
  "@id": "https://www.iptvupg.com/what-is-iptv#article",
  headline: "What is IPTV? The Complete 2026 Guide to IPTV Services & Streaming",
  datePublished: "2024-08-10",
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
  author: {
    "@id": "https://www.iptvupg.com/#organization",
  },
  publisher: {
    "@id": "https://www.iptvupg.com/#organization",
  },
  about: [
    { "@type": "Thing", name: "IPTV" },
    { "@type": "Thing", name: "Internet Protocol Television" },
    { "@type": "Thing", name: "IPTV service" },
    { "@type": "Thing", name: "IPTV subscription" },
    { "@type": "Thing", name: "Streaming media" },
  ],
  mainEntityOfPage: "https://www.iptvupg.com/what-is-iptv",
};

const definedTermSchema = {
  "@type": "DefinedTerm",
  "@id": "https://www.iptvupg.com/what-is-iptv#term",
  name: "IPTV",
  description:
    "IPTV (Internet Protocol Television) is the delivery of television programming — live channels, video on demand, and time-shifted media — over an internet protocol (IP) network instead of traditional terrestrial, satellite, or cable formats.",
  inDefinedTermSet: {
    "@type": "DefinedTermSet",
    name: "IPTV UPG Glossary",
    url: "https://www.iptvupg.com/what-is-iptv",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is IPTV in simple terms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV (Internet Protocol Television) is live TV and on-demand video delivered over your internet connection instead of through cable, satellite, or antenna. You watch it on a Smart TV, phone, Fire Stick, or Apple TV using an IPTV player app and credentials from an IPTV service provider.",
      },
    },
    {
      "@type": "Question",
      name: "How does IPTV work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An IPTV provider encodes live channels and video files into IP packets, stores them on streaming servers, and sends them on demand to your device. Your IPTV player decodes the packets and plays the channel — typically within 1–3 seconds of pressing the channel up button.",
      },
    },
    {
      "@type": "Question",
      name: "Is IPTV the same as streaming services like Netflix?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both use the internet, but they differ in scope. Netflix is an OTT (over-the-top) on-demand video service with a curated library. IPTV is a full television replacement — live channels, EPG (TV guide), news, sports, and on-demand — structured to replace a cable subscription, not just one streaming app.",
      },
    },
    {
      "@type": "Question",
      name: "Is IPTV legal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV is a legal streaming technology used by major broadcasters worldwide, including BT, AT&T U-verse, and Verizon Fios. The legality of any specific IPTV service depends on whether it is licensed to distribute the content it streams. Users are responsible for ensuring their use complies with applicable laws.",
      },
    },
    {
      "@type": "Question",
      name: "What devices support IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV runs on Smart TVs (Samsung, LG, Sony), Amazon Fire TV Stick, Apple TV, Roku, MAG and Formuler set-top boxes, Android phones and tablets, iPhone, iPad, Windows PC, and macOS. You install a free IPTV player app and log in with credentials from your provider.",
      },
    },
    {
      "@type": "Question",
      name: "What internet speed do I need for IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "5 Mbps for SD, 10 Mbps for HD (1080p), 25 Mbps for 4K/UHD, and 50 Mbps+ to stream two simultaneous 4K channels comfortably. Wired Ethernet is most stable; modern Wi-Fi 5/6 networks also work well.",
      },
    },
    {
      "@type": "Question",
      name: "How much does an IPTV subscription cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Reputable IPTV providers charge between $7.50 and $20 per month depending on plan length. IPTV UPG's annual plan works out to $7.50/month for 24,000+ channels — roughly 80–90% less than a traditional cable bill of $80–$120/month.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best IPTV service in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best IPTV service is one with a verified large channel catalog, true 4K streaming, anti-freeze adaptive bitrate, full EPG, multi-device support, 24/7 customer service, and a no-credit-card free trial. IPTV UPG meets all seven criteria with 24,000+ channels, 4.9/5 Trustpilot rating, and a free trial.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get an IPTV free trial before subscribing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IPTV UPG offers a no-credit-card IPTV free trial — full access to all 24,000+ channels, the 4K VOD library, and the EPG. Request via WhatsApp at +44 7848 197761; credentials arrive in minutes.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between IPTV, OTT, and VOD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IPTV is a full TV replacement — live channels + on-demand + EPG, often via subscription. OTT (over-the-top) is any video delivered over the internet bypassing traditional distributors (Netflix, Disney+). VOD (video on demand) is a feature, not a delivery method — you can have VOD on IPTV, OTT, and even cable.",
      },
    },
  ],
};

const tldrRows: { metric: string; iptv: string; cable: string; ott: string }[] = [
  { metric: "Delivery method", iptv: "Internet (IP packets)", cable: "Coaxial / fiber cable", ott: "Internet (IP packets)" },
  { metric: "Live TV channels", iptv: "Yes — 24,000+ on top providers", cable: "Yes — 150–300 channels", ott: "Limited (some apps)" },
  { metric: "On-demand library", iptv: "120,000+ titles", cable: "Pay-per-view only", ott: "App-by-app silos" },
  { metric: "EPG (TV guide)", iptv: "Yes — full guide", cable: "Yes", ott: "No (per app)" },
  { metric: "Device flexibility", iptv: "Smart TV, phone, Fire TV, Apple TV, Roku", cable: "1 set-top box per room", ott: "Most devices" },
  { metric: "Equipment required", iptv: "None — uses existing devices", cable: "Cable box rental", ott: "None" },
  { metric: "Contract", iptv: "None — month-to-month or annual", cable: "12–24 months typical", ott: "Month-to-month" },
  { metric: "Typical cost", iptv: "$7.50–$20/month", cable: "$80–$120/month", ott: "$10–$25/month per app" },
  { metric: "Setup time", iptv: "Under 5 minutes", cable: "3–7 day install", ott: "Under 5 minutes" },
  { metric: "4K quality", iptv: "Yes — true UHD", cable: "Premium tier only", ott: "Yes (most)" },
];

const howItWorksSteps: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Content Acquisition", body: "An IPTV service provider licenses or aggregates live TV channels, on-demand films, and series from broadcasters, distributors, and content owners." },
  { n: "02", title: "Encoding & Compression", body: "Each channel is encoded into adaptive-bitrate formats (typically H.264 or H.265/HEVC) and packaged for IP delivery, so quality scales to your connection." },
  { n: "03", title: "CDN Distribution", body: "Encoded streams are pushed to a global Content Delivery Network — edge servers located near subscribers to keep latency low and avoid buffering." },
  { n: "04", title: "Authentication", body: "Your IPTV player app sends your subscription credentials to the provider's auth server. The server verifies your account and returns a personalized playlist (M3U) and EPG." },
  { n: "05", title: "Stream Delivery", body: "When you select a channel, your device requests the specific IP packets for that stream from the nearest CDN edge. Modern protocols (HLS, MPEG-DASH) chunk the video for smooth playback." },
  { n: "06", title: "Decoding & Playback", body: "Your IPTV player decodes the chunks in real time and renders them on screen. Adaptive bitrate keeps the picture stable even when your network briefly slows down." },
];

const phaseTimeline: { week: string; title: string; body: React.ReactNode }[] = [
  {
    week: "Week 1",
    title: "Understand the Landscape",
    body: "Read this guide. Learn the difference between IPTV, OTT, VOD, and free IPTV apps. Identify whether you want a full cable replacement, a sports add-on, or international channels.",
  },
  {
    week: "Week 2",
    title: "Audit Your Network",
    body: (
      <>
        Run <a href="https://www.speedtest.net/" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">Speedtest</a> on Wi-Fi and Ethernet during peak hours (7–10 PM). You need 25 Mbps stable for 4K. Upgrade your router (Wi-Fi 5/6) or run an Ethernet cable to your TV if necessary.
      </>
    ),
  },
  {
    week: "Week 3",
    title: "Shortlist 2–3 IPTV Providers",
    body: "Compare on the seven KPIs in section 7 below: channel count, 4K, anti-freeze tech, EPG accuracy, device support, support response, free trial. Discard anyone who refuses a trial.",
  },
  {
    week: "Week 4",
    title: "Run a Free Trial",
    body: (
      <>
        Request a <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">no-credit-card IPTV free trial</Link>. Test the channels you actually watch — your country&apos;s news, your favorite sports leagues, your kids&apos; cartoons. Verify EPG accuracy.
      </>
    ),
  },
  {
    week: "Week 5",
    title: "Stress Test During Prime Time",
    body: "Stream 4K sports at 8 PM on a Saturday. Run two simultaneous streams. Pause, rewind, and channel-surf. This is when cheap IPTV providers fail. Reputable ones don't.",
  },
  {
    week: "Week 6",
    title: "Subscribe & Cancel Cable",
    body: (
      <>
        If the trial passed: subscribe to a 12-month plan for the lowest per-month price (IPTV UPG&apos;s <Link href="/12-months-iptv-subscription" className="font-semibold text-accent hover:underline">Annual Plan is $7.50/month</Link>). Then call your cable company and cancel.
      </>
    ),
  },
  {
    week: "Week 7",
    title: "Optimize Your Setup",
    body: "Configure favorites, parental controls, and the EPG timezone. Pair your IPTV player with a universal remote. Train other household members.",
  },
  {
    week: "Week 8",
    title: "Measure Your Savings",
    body: "Cable was $100/month? You're now at $7.50/month. That's $1,110 saved per year — and you have 24,000+ channels instead of 200. Job done.",
  },
];

const players: { name: string; best: string; href: string; store: string }[] = [
  { name: "IPTV Smarters Pro", best: "All-round, beginner-friendly", href: "https://play.google.com/store/search?q=iptv%20smarters", store: "Google Play / App Store" },
  { name: "TiviMate", best: "Android TV, Fire TV", href: "https://play.google.com/store/search?q=tivimate", store: "Google Play" },
  { name: "GSE Smart IPTV", best: "iPhone, iPad, macOS", href: "https://apps.apple.com/", store: "App Store" },
  { name: "VLC Media Player", best: "Manual M3U playback on PC/Mac", href: "https://www.videolan.org/", store: "videolan.org" },
];

const externalRefs: { label: string; href: string; note: string }[] = [
  { label: "Wikipedia: Internet Protocol television", href: "https://en.wikipedia.org/wiki/Internet_Protocol_television", note: "Foundational reference on IPTV protocols and architecture" },
  { label: "ITU-T IPTV Standards", href: "https://www.itu.int/en/ITU-T/", note: "International Telecommunication Union — global IPTV standard-setting body" },
  { label: "Speedtest by Ookla", href: "https://www.speedtest.net/", note: "Measure your bandwidth before subscribing" },
  { label: "Fast.com (Netflix)", href: "https://fast.com/", note: "Second-opinion bandwidth tester" },
];

const pitfalls: { n: string; title: string; body: string }[] = [
  { n: "01", title: "Confusing IPTV with 'free IPTV apps'", body: "Free IPTV apps scrape unstable, low-quality streams. A real IPTV service is a licensed subscription product with proper infrastructure, support, and a 4K catalog. Not the same thing." },
  { n: "02", title: "Picking a provider with no free trial", body: "If they refuse to let you test before paying, they are hiding something. Reputable IPTV providers — like IPTV UPG — offer a free trial because their service holds up to scrutiny." },
  { n: "03", title: "Believing 'lifetime IPTV' offers", body: "Servers cost money every month. A $30 'lifetime' subscription is a scam. The provider disappears in 6–12 weeks with your money. Always pay monthly or annually." },
  { n: "04", title: "Underestimating bandwidth needs", body: "4K IPTV requires 25 Mbps stable. If your speed dips during prime time, even the best IPTV service will buffer. Test your network first; don't blame the provider." },
  { n: "05", title: "Ignoring EPG quality", body: "A working stream without an accurate Electronic Program Guide is half a product. Always test the EPG for your timezone and your favorite channels during a free trial." },
  { n: "06", title: "Buying without checking device compatibility", body: "Verify your IPTV player works on your specific Smart TV model — especially for older Samsung/LG TVs (pre-2018). Use the trial to confirm before paying for a year." },
  { n: "07", title: "Skipping the 24/7 support test", body: "The moment something breaks, you'll want fast help. Send a test question to support before subscribing. Under 5 minutes (WhatsApp) is the standard set by IPTV UPG." },
];

const kpis: { kpi: string; pass: string; how: string }[] = [
  { kpi: "Channel start time", pass: "< 3 seconds", how: "Stopwatch from click to picture" },
  { kpi: "Channel catalog size", pass: "10,000+ live", how: "Browse during a free trial" },
  { kpi: "4K bitrate stability", pass: "< 1 buffer / 30 min", how: "Watch live sports for 30 min" },
  { kpi: "EPG accuracy", pass: "≥ 95% of channels", how: "Cross-check 20 channels against TV listings" },
  { kpi: "Multi-device support", pass: "≥ 2 simultaneous streams", how: "Stream Fire TV + phone at once" },
  { kpi: "Support response time", pass: "< 5 minutes", how: "Send a test WhatsApp" },
  { kpi: "Money-back guarantee", pass: "≥ 7 days, no questions", how: "Read the refund policy before paying" },
];

const relatedArticles: { href: string; title: string; note: string }[] = [
  { href: "/iptv-free-trial", title: "IPTV Free Trial — Test 24,000+ Channels Free", note: "Try before you buy" },
  { href: "/best-iptv-service", title: "Best IPTV Service in 2026: Verified Comparison", note: "Provider rankings" },
  { href: "/12-months-iptv-subscription", title: "IPTV Subscription Plans — From $7.50/Month", note: "Pricing" },
  { href: "/fire-tv-iptv", title: "How to Set Up IPTV on Fire TV Stick", note: "Setup guide" },
  { href: "/samsung-tv-iptv", title: "How to Set Up IPTV on Samsung Smart TV", note: "Setup guide" },
  { href: "/apple-tv-iptv", title: "How to Set Up IPTV on Apple TV", note: "Setup guide" },
  { href: "/roku-iptv", title: "How to Set Up IPTV on Roku", note: "Setup guide" },
  { href: "/refund", title: "7-Day Money-Back Guarantee — Full Policy", note: "Policy" },
];

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is IPTV in simple terms?",
    a: "IPTV (Internet Protocol Television) is live TV and on-demand video delivered over your internet connection instead of through cable, satellite, or antenna. You watch it on a Smart TV, phone, Fire Stick, or Apple TV using an IPTV player app and credentials from an IPTV service provider.",
  },
  {
    q: "How does IPTV work?",
    a: "An IPTV provider encodes live channels and video files into IP packets, stores them on streaming servers, and sends them on demand to your device. Your IPTV player decodes the packets and plays the channel — typically within 1–3 seconds of pressing the channel-up button.",
  },
  {
    q: "Is IPTV the same as streaming services like Netflix?",
    a: "Both use the internet, but they differ in scope. Netflix is an OTT (over-the-top) on-demand video service with a curated library. IPTV is a full television replacement — live channels, EPG, news, sports, and on-demand — structured to replace a cable subscription, not just one streaming app.",
  },
  {
    q: "Is IPTV legal?",
    a: (
      <>
        IPTV is a legal streaming technology used by major broadcasters worldwide (BT, AT&amp;T U-verse, Verizon Fios). The legality of any specific IPTV service depends on whether it is licensed to distribute the content it streams. Review our <Link href="/terms" className="font-semibold text-accent hover:underline">Terms</Link> and <Link href="/dmca" className="font-semibold text-accent hover:underline">DMCA policy</Link>.
      </>
    ),
  },
  {
    q: "What devices support IPTV?",
    a: "IPTV runs on Smart TVs (Samsung, LG, Sony), Amazon Fire TV Stick, Apple TV, Roku, MAG and Formuler set-top boxes, Android phones and tablets, iPhone, iPad, Windows PC, and macOS. You install a free IPTV player app and log in with credentials from your provider.",
  },
  {
    q: "What internet speed do I need for IPTV?",
    a: (
      <ul className="mt-2 list-disc space-y-1 pl-5">
        <li><strong className="text-text-primary">5 Mbps</strong> — SD streaming</li>
        <li><strong className="text-text-primary">10 Mbps</strong> — HD (1080p)</li>
        <li><strong className="text-text-primary">25 Mbps</strong> — 4K / UHD</li>
        <li><strong className="text-text-primary">50 Mbps+</strong> — two simultaneous 4K streams</li>
      </ul>
    ),
  },
  {
    q: "How much does an IPTV subscription cost?",
    a: (
      <>
        Reputable IPTV providers charge between $7.50 and $20 per month depending on plan length. Compare every option on the <Link href="/iptv-subscription" className="font-semibold text-accent hover:underline">IPTV subscription plans page</Link> — IPTV UPG&apos;s <Link href="/12-months-iptv-subscription" className="font-semibold text-accent hover:underline">annual plan</Link> works out to $7.50/month for 24,000+ channels, roughly 80–90% less than a $80–$120/month cable bill.
      </>
    ),
  },
  {
    q: "What is the best IPTV service in 2026?",
    a: "The best IPTV service has a verified large catalog, true 4K, anti-freeze adaptive bitrate, full EPG, multi-device support, 24/7 support, and a no-credit-card free trial. IPTV UPG meets all seven criteria with 24,000+ channels and a 4.9/5 Trustpilot rating.",
  },
  {
    q: "Can I get an IPTV free trial before subscribing?",
    a: (
      <>
        Yes. <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">IPTV UPG offers a no-credit-card free trial</Link> — full access to all 24,000+ channels, the 4K VOD library, and the EPG. Request via WhatsApp at +44 7848 197761; credentials arrive in minutes.
      </>
    ),
  },
  {
    q: "What's the difference between IPTV, OTT, and VOD?",
    a: "IPTV is a full TV replacement — live channels + on-demand + EPG, typically subscription-based. OTT (over-the-top) is any video delivered over the internet bypassing traditional distributors (Netflix, Disney+). VOD (video on demand) is a feature, not a delivery method — IPTV, OTT, and even cable can offer VOD.",
  },
];

const WHATSAPP_TRIAL_URL =
  "https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial";

export default function WhatIsIptv() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [breadcrumbSchema, articleSchema, definedTermSchema, faqSchema],
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
              <span>The Complete 2026 Guide</span>
            </div>
            <h1 className="mb-5 text-[clamp(30px,5vw,52px)] leading-[1.1] font-black">
              What is IPTV?{" "}
              <span className="text-accent">Internet Protocol Television</span>{" "}
              Explained for 2026
            </h1>
            <p className="mx-auto mb-7 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              <strong className="font-semibold text-text-primary">IPTV</strong> (Internet Protocol Television) is the delivery of live TV channels and on-demand video over your internet connection — instead of cable, satellite, or antenna. This guide explains how IPTV works, how it compares to cable and OTT streaming, the best IPTV services and devices, what an IPTV subscription costs, and the legal status of IPTV in 2026.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href={WHATSAPP_TRIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-10 py-4 text-sm font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
              >
                Try IPTV Free
              </a>
              <a
                href="#tldr"
                className="rounded-xl border border-border-light px-10 py-4 text-sm font-bold tracking-[1px] uppercase text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                Read the TL;DR
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Updated May 2026 · Reviewed by the IPTV UPG Editorial Team
            </p>
          </header>

          {/* TL;DR */}
          <section id="tldr" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">02</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>The 30-Second Answer</span>
            </div>
            <h2 className="mb-4 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              IPTV vs. Cable vs. OTT Streaming — At a Glance
            </h2>
            <p className="mb-6 text-[15px] leading-relaxed text-text-secondary">
              <strong className="font-semibold text-text-primary">IPTV</strong> is internet-delivered TV that combines the live-channel structure of cable with the device flexibility of streaming. Unlike cable, IPTV needs no installer, no equipment rental, and no contract. Unlike OTT apps (Netflix, Disney+), IPTV gives you a full live-channel lineup with an EPG — like the TV guide you grew up with, but online.
            </p>
            <div className="overflow-x-auto rounded-[20px] border border-border bg-bg-card shadow-[0_8px_40px_rgba(0,0,0,0.35)]">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-bg-card-hover">
                    <th className="px-5 py-4 text-left font-semibold text-text-primary">Comparison</th>
                    <th className="px-5 py-4 text-left font-bold text-accent">IPTV</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">Traditional Cable</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">OTT Streaming</th>
                  </tr>
                </thead>
                <tbody>
                  {tldrRows.map((row, i) => (
                    <tr key={row.metric} className={i < tldrRows.length - 1 ? "border-b border-border" : ""}>
                      <td className="px-5 py-3.5 font-semibold text-text-primary">{row.metric}</td>
                      <td className="px-5 py-3.5 text-text-primary">{row.iptv}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{row.cable}</td>
                      <td className="px-5 py-3.5 text-text-secondary">{row.ott}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-sm italic leading-relaxed text-text-muted">
              IPTV is the only delivery model that gives you cable&apos;s live-channel structure plus streaming&apos;s device flexibility, at one-tenth the price.
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
              What is IPTV? The Complete Definition
            </h2>
            <div className="rounded-[20px] border border-border bg-bg-card p-7 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-9">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                <strong className="font-semibold text-text-primary">IPTV</strong> stands for <strong className="font-semibold text-text-primary">Internet Protocol Television</strong>. It is the delivery of television programming — live channels, video on demand, and time-shifted media — over an internet protocol (IP) network instead of traditional terrestrial, satellite, or coaxial cable formats. Major telcos (BT, AT&amp;T U-verse, Verizon Fios) use private-managed IPTV networks; consumer IPTV services like IPTV UPG use the public internet, which lets them deliver the same live-channel experience to any device, anywhere.
              </p>
              <div className="mt-6 rounded-xl border border-accent/30 bg-accent/5 p-5">
                <h3 className="mb-2 text-xs font-bold tracking-[1.5px] uppercase text-accent">
                  Definition (40-word AI-Overview block)
                </h3>
                <p className="text-sm leading-relaxed text-text-primary">
                  IPTV (Internet Protocol Television) is the delivery of live TV channels and on-demand video over an IP network — typically the internet — to any compatible device, replacing cable or satellite distribution while preserving the live-channel and EPG experience.
                </p>
              </div>
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold text-text-primary">
              Three forms of IPTV (and which one you&apos;ll actually use)
            </h3>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { term: "Live IPTV", desc: "Real-time broadcast of live channels — sports, news, concerts. The closest experience to cable. Powered by an EPG. This is what most consumer IPTV services deliver." },
                { term: "VOD (Video on Demand)", desc: "On-demand films and series. You press play whenever you want. Reputable IPTV services like IPTV UPG include 120,000+ VOD titles alongside live channels." },
                { term: "Time-shifted IPTV", desc: "Catch-up TV and rewind/pause-live features. Lets you watch broadcasts after they aired or rewind a live channel by minutes or hours." },
              ].map((item) => (
                <div key={item.term} className="rounded-xl border border-border bg-bg-card p-5">
                  <h4 className="mb-2 text-sm font-bold text-accent">{item.term}</h4>
                  <p className="text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="mt-10 mb-4 text-xl font-bold text-text-primary">
              Glossary — the entities you&apos;ll keep seeing
            </h3>
            <ul className="space-y-2 text-[15px] leading-relaxed text-text-secondary">
              <li><strong className="text-text-primary">IPTV service</strong> — A subscription product that aggregates and streams live channels and VOD over IP.</li>
              <li><strong className="text-text-primary">IPTV provider</strong> — The company operating the IPTV service (e.g., IPTV UPG).</li>
              <li><strong className="text-text-primary">IPTV subscription</strong> — Your paid plan that grants access to channels and VOD.</li>
              <li><strong className="text-text-primary">IPTV stream</strong> — A single live channel feed delivered to your device.</li>
              <li><strong className="text-text-primary">IPTV player</strong> — The app on your device that decodes and plays streams (IPTV Smarters, TiviMate).</li>
              <li><strong className="text-text-primary">M3U / M3U8</strong> — The playlist file format that lists every channel URL.</li>
              <li><strong className="text-text-primary">EPG</strong> — Electronic Program Guide; the on-screen TV schedule.</li>
              <li><strong className="text-text-primary">Xtream Codes API</strong> — A common protocol used by IPTV services to deliver credentials, the channel list, EPG, and VOD library through a single login.</li>
            </ul>
          </section>

          {/* How IPTV Works — Technical */}
          <section id="how-it-works" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">04</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>How IPTV Works</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              How IPTV Works in 6 Steps (No Engineering Degree Required)
            </h2>
            <p className="mb-8 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Behind every smooth 4K IPTV stream is a six-stage pipeline. Knowing how it works helps you spot quality differences between providers — and explains why a real IPTV service costs $7.50/month while &quot;free IPTV&quot; apps fall apart.
            </p>
            <div className="grid gap-5 md:grid-cols-2">
              {howItWorksSteps.map((step) => (
                <div key={step.n} className="rounded-xl border border-border bg-bg-card p-5 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:border-accent/40">
                  <div className="mb-2 font-mono text-[11px] font-semibold tracking-[3px] uppercase text-accent">
                    Step {step.n}
                  </div>
                  <h3 className="mb-2 text-base font-black text-text-primary">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-text-secondary">{step.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-[720px] text-sm leading-relaxed text-text-muted">
              <strong className="text-text-primary">In one sentence:</strong> a real IPTV service licenses content, encodes it into adaptive-bitrate streams, distributes via a global CDN, authenticates each user, and delivers low-latency packets that your IPTV player decodes in real time.
            </p>
          </section>

          {/* Phase-by-phase timeline (Weeks 1-8) */}
          <section id="timeline" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">05</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>8-Week Roadmap</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              From Cable Customer to IPTV Subscriber: An 8-Week Plan
            </h2>
            <p className="mb-8 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Switching to IPTV doesn&apos;t have to be a leap of faith. Follow this 8-week framework to evaluate, test, switch, and optimize — saving 80–90% on your TV bill without sacrificing quality.
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
              <span>Tools & References</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              IPTV Tools, Players & Authoritative References
            </h2>

            <h3 className="mb-4 text-xl font-bold text-text-primary">
              Free IPTV player apps
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
              Authoritative external references
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
              Internal IPTV UPG resources
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { href: "/iptv-free-trial", label: "Get a no-credit-card IPTV free trial" },
                { href: "/12-months-iptv-subscription", label: "Annual IPTV plan — $7.50/month" },
                { href: "/fire-tv-iptv", label: "Set up IPTV on Fire TV Stick" },
                { href: "/samsung-tv-iptv", label: "Set up IPTV on Samsung Smart TV" },
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
              7 Common IPTV Mistakes (and How to Avoid Each)
            </h2>
            <p className="mb-8 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Honest providers name the risks. Here are the seven most common ways people pick the wrong IPTV service — and how to make sure you don&apos;t.
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
              How to Judge an IPTV Service — 7 KPIs That Matter
            </h2>
            <p className="mb-6 max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              Use these numeric pass/fail criteria to compare any IPTV provider. If 6 of 7 pass, you&apos;ve found the best IPTV service for your household. If 4 or fewer pass, walk away.
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
                IPTV UPG&apos;s scorecard against the 7 KPIs
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { stat: "1.8s", label: "Avg channel start" },
                  { stat: "24,000+", label: "Live channels" },
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
                7 / 7 KPIs pass. <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">Verify it yourself with a free trial →</Link>
              </p>
            </div>
          </section>

          {/* Legality & Safety */}
          <section id="legality" className="mb-16">
            <div className="mb-6 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">09</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Legality & Safety</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Is IPTV Legal? A Plain-English Answer
            </h2>
            <div className="rounded-[20px] border border-border bg-bg-card p-7 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-9">
              <p className="text-[15px] leading-relaxed text-text-secondary">
                <strong className="font-semibold text-text-primary">IPTV the technology is fully legal</strong> — used by major broadcasters worldwide, including BT (UK), AT&amp;T U-verse (US), and Verizon Fios (US). Legality only becomes a question for a <em>specific IPTV service</em>, depending on whether it is licensed to distribute the content it streams. Two principles to apply:
              </p>
              <ol className="mt-4 list-decimal space-y-2 pl-6 text-[15px] leading-relaxed text-text-secondary">
                <li><strong className="text-text-primary">Choose providers that operate transparently.</strong> A legitimate IPTV provider has a public website, contactable support, a clear refund policy, and published Terms — IPTV UPG&apos;s <Link href="/terms" className="font-semibold text-accent hover:underline">Terms</Link> and <Link href="/dmca" className="font-semibold text-accent hover:underline">DMCA policy</Link> are open and audited.</li>
                <li><strong className="text-text-primary">Comply with local laws.</strong> Users are responsible for ensuring their use of any streaming service complies with the laws of their jurisdiction.</li>
              </ol>
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
                This guide is fact-checked against current IPTV protocols (HLS, MPEG-DASH, Xtream Codes API), 2026 channel-lineup data, and the working pricing of major IPTV providers. The IPTV UPG team has operated streaming infrastructure since 2019, serving subscribers across 40+ countries. Every numeric claim — 24,000+ channels, 99.9% uptime, $7.50/month, 1.8s start time — is verified against internal monitoring before publication.
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
              <span className="font-mono">10</span>
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
              <span className="font-mono">11</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>FAQ</span>
            </div>
            <h2 className="mb-5 text-[clamp(24px,3.4vw,34px)] font-black leading-tight">
              Frequently Asked Questions about IPTV
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
              Now You Know What IPTV Is — Try It Free
            </h2>
            <p className="mx-auto mb-7 max-w-[560px] text-[15px] leading-relaxed text-text-secondary">
              See for yourself why 6,000+ subscribers chose IPTV over cable. 24,000+ channels in 4K, no credit card needed, activated in minutes via WhatsApp.
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
                See Plans from $7.50/mo
              </Link>
            </div>
            <p className="mt-5 text-xs text-text-muted">
              7-day money-back guarantee on all paid plans ·{" "}
              <Link href="/refund" className="font-semibold text-accent hover:underline">Refund policy</Link>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
