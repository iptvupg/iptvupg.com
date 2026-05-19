import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import M3UXtreamConverter from "@/components/M3UXtreamConverter";

const PAGE_URL = "https://www.iptvupg.com/m3u-xtream-converter";

export const metadata: Metadata = {
  title: "M3U ⇄ Xtream Codes Converter — Free IPTV Tool",
  description:
    "Convert M3U playlist URLs to Xtream Codes credentials (and back) in one click. Free, in-browser, no signup. Works with IPTV Smarters, TiviMate, IBO Player, Smart IPTV and any player that takes either format.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "M3U ⇄ Xtream Codes Converter — Free IPTV Tool",
    description:
      "Paste your M3U URL or Xtream credentials and convert between the two formats in one click. Works with IPTV Smarters, TiviMate, IBO Player, Smart IPTV.",
    url: PAGE_URL,
    type: "website",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "M3U ⇄ Xtream Codes Converter", item: PAGE_URL },
  ],
};

const webAppSchema = {
  "@type": "WebApplication",
  "@id": `${PAGE_URL}#webapp`,
  name: "M3U ⇄ Xtream Codes Converter",
  url: PAGE_URL,
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any (browser-based)",
  browserRequirements: "Requires JavaScript",
  description:
    "Free in-browser converter between M3U playlist URLs and Xtream Codes credentials. Works with IPTV Smarters, TiviMate, IBO Player, Smart IPTV, and any IPTV player that accepts either format.",
  isAccessibleForFree: true,
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  inLanguage: "en",
};

const howToSchema = {
  "@type": "HowTo",
  "@id": `${PAGE_URL}#howto`,
  name: "How to convert between M3U and Xtream Codes",
  description:
    "Convert any IPTV M3U playlist URL into Xtream Codes credentials (server, username, password) or build an M3U URL from existing Xtream credentials.",
  inLanguage: "en",
  totalTime: "PT30S",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose a conversion mode",
      text: "Pick M3U → Xtream to extract credentials from a playlist URL, or Xtream → M3U to build a playlist URL from a server URL, username, and password.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Paste your input",
      text: "Paste your full M3U URL or fill in your Xtream server URL (with port), username, and password.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Click Convert",
      text: "The converter parses the input in your browser and shows the result. Nothing is sent to a server.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Copy into your IPTV player",
      text: "Use the Copy buttons to paste the result into IPTV Smarters, TiviMate, IBO Player, Smart IPTV, or any compatible player.",
    },
  ],
};

const faqs: { q: string; a: string }[] = [
  {
    q: "What is the difference between an M3U playlist URL and Xtream Codes?",
    a: "An M3U URL is a single link that returns a full playlist of channels in the M3U/M3U8 format. Xtream Codes is a credential set — a server URL, username, and password — that an IPTV player uses to talk to a Stalker/Xtream backend via the get.php and player_api.php endpoints. Both point at the same content, just packaged differently.",
  },
  {
    q: "Is my playlist URL or password uploaded anywhere when I use this tool?",
    a: "No. The conversion runs entirely in your browser using JavaScript. The URL, server, username, and password you enter never leave your device — nothing is sent to IPTV UPG or any third party.",
  },
  {
    q: "Which IPTV players accept Xtream Codes credentials?",
    a: "Most modern IPTV players accept Xtream Codes natively: IPTV Smarters Pro, TiviMate (Premium), IBO Player, Smart IPTV, OTT Navigator, GSE Smart IPTV, Perfect Player, and Televizo. A few players (older Smart IPTV builds, basic web players) only support the M3U URL — for those, use the Xtream → M3U direction.",
  },
  {
    q: "My M3U URL has a different format. Why won't it convert?",
    a: "The converter recognises the two standard Xtream Codes shapes: /get.php?username=…&password=… (Xtream Codes API and clones) and /playlist/USER/PASS/m3u_plus (older panel exports). Some providers use proxied or one-off URLs that don't expose Xtream credentials at all — those can't be converted because the credentials simply aren't embedded in the URL.",
  },
  {
    q: "Do I need to subscribe to IPTV UPG to use this converter?",
    a: "No. The converter is a free public tool that works with any IPTV provider's credentials. If you'd like to try a service that ships clean Xtream Codes and an M3U URL on activation, IPTV UPG offers a 24-hour free trial.",
  },
];

const faqSchema = {
  "@type": "FAQPage",
  "@id": `${PAGE_URL}#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [breadcrumbSchema, webAppSchema, howToSchema, faqSchema],
};

export default function M3UXtreamConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[820px]">
          <div className="mb-8 text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">TOOL</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Free IPTV Utility</span>
            </div>
            <h1 className="mb-4 text-[clamp(28px,4vw,44px)] font-black leading-[1.05]">
              M3U <span className="text-accent">⇄</span> Xtream Codes Converter
              <span className="mt-3 block text-[clamp(15px,1.8vw,20px)] font-semibold text-text-secondary">
                Free IPTV Tool
              </span>
            </h1>
            <p className="mx-auto max-w-[640px] text-[15px] leading-relaxed text-text-secondary">
              Paste your M3U playlist URL or Xtream Codes credentials and
              convert between the two formats in one click. Works with{" "}
              <strong className="text-text-primary">IPTV Smarters</strong>,{" "}
              <strong className="text-text-primary">TiviMate</strong>,{" "}
              <strong className="text-text-primary">IBO Player</strong>,{" "}
              <strong className="text-text-primary">Smart IPTV</strong> and any
              player that takes either format.
            </p>
          </div>

          <M3UXtreamConverter />

          {/* What it does */}
          <section className="mt-14">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              What this converter actually does
            </h2>
            <div className="space-y-3 text-[15px] leading-relaxed text-text-secondary">
              <p>
                Most IPTV providers ship two equivalent ways to log in:{" "}
                <strong className="text-text-primary">an M3U URL</strong> (one
                long link containing your credentials) and{" "}
                <strong className="text-text-primary">Xtream Codes</strong> (a
                server URL plus username and password). The two encode the same
                account — but different player apps prefer different formats.
              </p>
              <p>
                This tool extracts the host, port, username, and password from
                a standard M3U URL such as{" "}
                <code className="rounded bg-bg-card px-1.5 py-0.5 font-mono text-xs">
                  /get.php?username=…&amp;password=…
                </code>{" "}
                or{" "}
                <code className="rounded bg-bg-card px-1.5 py-0.5 font-mono text-xs">
                  /playlist/USER/PASS/m3u_plus
                </code>{" "}
                — and assembles either format in the other direction. Parsing
                happens entirely in your browser.
              </p>
            </div>
          </section>

          {/* Compatibility */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Player compatibility
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  name: "IPTV Smarters Pro",
                  note: "Accepts Xtream Codes natively (preferred) and M3U URL.",
                },
                {
                  name: "TiviMate",
                  note: "Premium supports Xtream Codes; free tier supports M3U URL.",
                },
                {
                  name: "IBO Player",
                  note: "Xtream Codes via portal MAC or M3U URL.",
                },
                {
                  name: "Smart IPTV (SIPTV)",
                  note: "Loads M3U URLs from the SIPTV portal.",
                },
                {
                  name: "OTT Navigator",
                  note: "Both Xtream Codes and M3U URL.",
                },
                {
                  name: "GSE Smart IPTV",
                  note: "Both Xtream Codes and M3U URL on iOS, Apple TV, Android.",
                },
                {
                  name: "Perfect Player",
                  note: "M3U URL with separate EPG URL.",
                },
                {
                  name: "Televizo",
                  note: "Xtream Codes login or M3U URL.",
                },
              ].map((p) => (
                <div
                  key={p.name}
                  className="rounded-xl border border-border bg-bg-card px-4 py-3"
                >
                  <div className="text-sm font-semibold text-text-primary">{p.name}</div>
                  <div className="mt-1 text-xs text-text-muted">{p.note}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold text-text-primary">
              Frequently asked questions
            </h2>
            <div className="flex flex-col gap-3">
              {faqs.map((f, i) => (
                <details
                  key={i}
                  className="group overflow-hidden rounded-xl border border-border bg-bg-card transition-all open:border-dashed open:border-border-light"
                >
                  <summary className="flex w-full cursor-pointer items-center gap-4 px-5 py-4 text-left hover:bg-bg-card-hover [&::-webkit-details-marker]:hidden list-none">
                    <span className="min-w-[28px] text-xs font-bold text-text-muted group-open:text-accent">
                      {String(i + 1).padStart(2, "0")}.
                    </span>
                    <h3 className="flex-1 text-sm font-semibold text-text-primary">{f.q}</h3>
                  </summary>
                  <div className="px-5 pb-5 pl-[60px] text-sm leading-relaxed text-text-secondary">
                    {f.a}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Cross-links */}
          <section className="mt-12">
            <h2 className="mb-4 text-lg font-bold text-text-primary">
              IPTV setup guides
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Link href="/android-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">
                Android
              </Link>
              <Link href="/fire-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">
                Fire TV Stick
              </Link>
              <Link href="/samsung-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">
                Samsung TV
              </Link>
              <Link href="/apple-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">
                Apple TV
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-text-primary">
              Need a clean Xtream Codes account to test?
            </h2>
            <p className="mx-auto max-w-[540px] text-sm leading-relaxed text-text-secondary">
              IPTV UPG ships both an M3U URL and Xtream Codes on activation — 24,000+ live channels in 4K.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/iptv-free-trial"
                className="inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Get a free 24-hour trial
              </Link>
              <Link
                href="/iptv-subscription"
                className="inline-block rounded-full border border-accent px-7 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
              >
                See subscription plans
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
