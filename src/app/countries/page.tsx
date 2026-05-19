import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { COUNTRY_PAGES } from "@/data/country-pages";

// ISO code → /best-iptv-service-in-{slug} route, for tier-1 markets with
// hand-written detail pages. Built from the canonical data source so we never
// duplicate the slug list.
const COUNTRY_CODE_TO_SLUG = new Map(
  COUNTRY_PAGES.map((c) => [c.code, c.slug]),
);

const PAGE_URL = "https://www.iptvupg.com/countries";

export const metadata: Metadata = {
  title: "IPTV Service by Country — Local Channels in 100+ Countries",
  description:
    "IPTV UPG delivers native-language local channels plus international sports, news, and entertainment in 4K — one IPTV subscription, 100+ countries, every device. From $7.50/month.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "en": PAGE_URL,
      "x-default": PAGE_URL,
    },
  },
  openGraph: {
    title: "IPTV Service by Country — Local Channels, One Subscription",
    description:
      "Native-language local channels plus international sports, news, and entertainment in 4K — IPTV UPG covers 100+ countries on one login.",
    url: PAGE_URL,
    type: "website",
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   Country data
───────────────────────────────────────────────────────────────────────────── */

type Country = { name: string; code: string };

// ISO 3166-1 alpha-2 codes. Order roughly matches the brief; final render
// sorts alphabetically by display name.
const COUNTRIES: Country[] = [
  { name: "Afghanistan", code: "AF" },
  { name: "Albania", code: "AL" },
  { name: "Algeria", code: "DZ" },
  { name: "Andorra", code: "AD" },
  { name: "Angola", code: "AO" },
  { name: "Antigua and Barbuda", code: "AG" },
  { name: "Argentina", code: "AR" },
  { name: "Armenia", code: "AM" },
  { name: "Australia", code: "AU" },
  { name: "Austria", code: "AT" },
  { name: "Azerbaijan", code: "AZ" },
  { name: "Bahamas", code: "BS" },
  { name: "Bahrain", code: "BH" },
  { name: "Bangladesh", code: "BD" },
  { name: "Barbados", code: "BB" },
  { name: "Belarus", code: "BY" },
  { name: "Belgium", code: "BE" },
  { name: "Belize", code: "BZ" },
  { name: "Benin", code: "BJ" },
  { name: "Bhutan", code: "BT" },
  { name: "Bolivia", code: "BO" },
  { name: "Bosnia and Herzegovina", code: "BA" },
  { name: "Botswana", code: "BW" },
  { name: "Brazil", code: "BR" },
  { name: "Brunei", code: "BN" },
  { name: "Bulgaria", code: "BG" },
  { name: "Burkina Faso", code: "BF" },
  { name: "Burundi", code: "BI" },
  { name: "Cabo Verde", code: "CV" },
  { name: "Cambodia", code: "KH" },
  { name: "Cameroon", code: "CM" },
  { name: "Canada", code: "CA" },
  { name: "Cayman Islands", code: "KY" },
  { name: "Central African Republic", code: "CF" },
  { name: "Chad", code: "TD" },
  { name: "Chile", code: "CL" },
  { name: "China", code: "CN" },
  { name: "Colombia", code: "CO" },
  { name: "Comoros", code: "KM" },
  { name: "Cook Islands", code: "CK" },
  { name: "Costa Rica", code: "CR" },
  { name: "Cote d'Ivoire (Ivory Coast)", code: "CI" },
  { name: "Croatia", code: "HR" },
  { name: "Cuba", code: "CU" },
  { name: "Cyprus", code: "CY" },
  { name: "Czechia", code: "CZ" },
  { name: "Democratic Republic of the Congo", code: "CD" },
  { name: "Denmark", code: "DK" },
  { name: "Djibouti", code: "DJ" },
  { name: "Dominica", code: "DM" },
  { name: "Dominican Republic", code: "DO" },
  { name: "Ecuador", code: "EC" },
  { name: "Egypt", code: "EG" },
  { name: "El Salvador", code: "SV" },
  { name: "Equatorial Guinea", code: "GQ" },
  { name: "Eritrea", code: "ER" },
  { name: "Estonia", code: "EE" },
  { name: "Eswatini", code: "SZ" },
  { name: "Ethiopia", code: "ET" },
  { name: "Fiji", code: "FJ" },
  { name: "Finland", code: "FI" },
  { name: "France", code: "FR" },
  { name: "Gabon", code: "GA" },
  { name: "Gambia", code: "GM" },
  { name: "Georgia", code: "GE" },
  { name: "Germany", code: "DE" },
  { name: "Ghana", code: "GH" },
  { name: "Greece", code: "GR" },
  { name: "Grenada", code: "GD" },
  { name: "Guatemala", code: "GT" },
  { name: "Guinea", code: "GN" },
  { name: "Guinea-Bissau", code: "GW" },
  { name: "Guyana", code: "GY" },
  { name: "Haiti", code: "HT" },
  { name: "Holy See (Vatican)", code: "VA" },
  { name: "Honduras", code: "HN" },
  { name: "Hungary", code: "HU" },
  { name: "Iceland", code: "IS" },
  { name: "India", code: "IN" },
  { name: "Indonesia", code: "ID" },
  { name: "Iran", code: "IR" },
  { name: "Iraq", code: "IQ" },
  { name: "Ireland", code: "IE" },
  { name: "Israel", code: "IL" },
  { name: "Italy", code: "IT" },
  { name: "Jamaica", code: "JM" },
  { name: "Japan", code: "JP" },
  { name: "Jordan", code: "JO" },
  { name: "Kazakhstan", code: "KZ" },
  { name: "Kenya", code: "KE" },
  { name: "Kiribati", code: "KI" },
  { name: "Kosovo", code: "XK" },
  { name: "Kuwait", code: "KW" },
  { name: "Kyrgyzstan", code: "KG" },
  { name: "Laos", code: "LA" },
  { name: "Latvia", code: "LV" },
  { name: "Lebanon", code: "LB" },
  { name: "Lesotho", code: "LS" },
  { name: "Liberia", code: "LR" },
  { name: "Libya", code: "LY" },
  { name: "Liechtenstein", code: "LI" },
  { name: "Lithuania", code: "LT" },
  { name: "Luxembourg", code: "LU" },
  { name: "Madagascar", code: "MG" },
  { name: "Malawi", code: "MW" },
  { name: "Malaysia", code: "MY" },
  { name: "Maldives", code: "MV" },
  { name: "Mali", code: "ML" },
  { name: "Malta", code: "MT" },
  { name: "Marshall Islands", code: "MH" },
  { name: "Mauritania", code: "MR" },
  { name: "Mauritius", code: "MU" },
  { name: "Mexico", code: "MX" },
  { name: "Micronesia", code: "FM" },
  { name: "Moldova", code: "MD" },
  { name: "Monaco", code: "MC" },
  { name: "Mongolia", code: "MN" },
  { name: "Montenegro", code: "ME" },
  { name: "Morocco", code: "MA" },
  { name: "Mozambique", code: "MZ" },
  { name: "Myanmar", code: "MM" },
  { name: "Namibia", code: "NA" },
  { name: "Nauru", code: "NR" },
  { name: "Nepal", code: "NP" },
  { name: "Netherlands", code: "NL" },
  { name: "New Zealand", code: "NZ" },
  { name: "Nicaragua", code: "NI" },
  { name: "Niger", code: "NE" },
  { name: "Nigeria", code: "NG" },
  { name: "Niue", code: "NU" },
  { name: "North Macedonia", code: "MK" },
  { name: "Norway", code: "NO" },
  { name: "Oman", code: "OM" },
  { name: "Pakistan", code: "PK" },
  { name: "Palau", code: "PW" },
  { name: "Panama", code: "PA" },
  { name: "Papua New Guinea", code: "PG" },
  { name: "Paraguay", code: "PY" },
  { name: "Peru", code: "PE" },
  { name: "Philippines", code: "PH" },
  { name: "Poland", code: "PL" },
  { name: "Portugal", code: "PT" },
  { name: "Qatar", code: "QA" },
  { name: "Republic of the Congo", code: "CG" },
  { name: "Romania", code: "RO" },
  { name: "Russia", code: "RU" },
  { name: "Rwanda", code: "RW" },
  { name: "Saint Kitts and Nevis", code: "KN" },
  { name: "Saint Lucia", code: "LC" },
  { name: "Saint Vincent and the Grenadines", code: "VC" },
  { name: "Samoa", code: "WS" },
  { name: "San Marino", code: "SM" },
  { name: "Sao Tome and Principe", code: "ST" },
  { name: "Saudi Arabia", code: "SA" },
  { name: "Senegal", code: "SN" },
  { name: "Serbia", code: "RS" },
  { name: "Seychelles", code: "SC" },
  { name: "Sierra Leone", code: "SL" },
  { name: "Singapore", code: "SG" },
  { name: "Slovakia", code: "SK" },
  { name: "Slovenia", code: "SI" },
  { name: "Solomon Islands", code: "SB" },
  { name: "Somalia", code: "SO" },
  { name: "South Africa", code: "ZA" },
  { name: "South Korea", code: "KR" },
  { name: "South Sudan", code: "SS" },
  { name: "Spain", code: "ES" },
  { name: "Sri Lanka", code: "LK" },
  { name: "Sudan", code: "SD" },
  { name: "Suriname", code: "SR" },
  { name: "Sweden", code: "SE" },
  { name: "Switzerland", code: "CH" },
  { name: "Syria", code: "SY" },
  { name: "Tajikistan", code: "TJ" },
  { name: "Tanzania", code: "TZ" },
  { name: "Thailand", code: "TH" },
  { name: "Timor-Leste", code: "TL" },
  { name: "Togo", code: "TG" },
  { name: "Tonga", code: "TO" },
  { name: "Trinidad and Tobago", code: "TT" },
  { name: "Tunisia", code: "TN" },
  { name: "Turkey", code: "TR" },
  { name: "Turkmenistan", code: "TM" },
  { name: "Tuvalu", code: "TV" },
  { name: "Uganda", code: "UG" },
  { name: "Ukraine", code: "UA" },
  { name: "United Arab Emirates", code: "AE" },
  { name: "United Kingdom", code: "GB" },
  { name: "United States", code: "US" },
  { name: "Uruguay", code: "UY" },
  { name: "Uzbekistan", code: "UZ" },
  { name: "Vanuatu", code: "VU" },
  { name: "Venezuela", code: "VE" },
  { name: "Vietnam", code: "VN" },
  { name: "Yemen", code: "YE" },
  { name: "Zambia", code: "ZM" },
  { name: "Zimbabwe", code: "ZW" },
];

/**
 * Convert ISO-3166 alpha-2 country code to flag emoji using regional
 * indicator symbols. Falls back to a globe icon for non-standard codes.
 */
function codeToFlag(code: string): string {
  if (code === "XK") return "🇽🇰"; // Kosovo — partial recognition, render may vary
  if (!/^[A-Z]{2}$/.test(code)) return "🌐";
  const base = 0x1f1e6;
  return String.fromCodePoint(
    base + code.charCodeAt(0) - 65,
    base + code.charCodeAt(1) - 65,
  );
}

const sortedCountries = [...COUNTRIES].sort((a, b) => a.name.localeCompare(b.name));

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD — consolidated @graph
───────────────────────────────────────────────────────────────────────────── */

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "IPTV Service by Country", item: PAGE_URL },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": `${PAGE_URL}#service`,
  name: "IPTV UPG — global IPTV subscription",
  serviceType: "IPTV streaming subscription",
  provider: { "@id": "https://www.iptvupg.com/#organization" },
  description:
    "Native-language local channels plus international sports, news, and entertainment in 4K across 100+ countries.",
  areaServed: COUNTRIES.map((c) => ({ "@type": "Country", name: c.name })),
  offers: {
    "@type": "Offer",
    price: "7.50",
    priceCurrency: "USD",
    url: "https://www.iptvupg.com/12-months-iptv-subscription",
    availability: "https://schema.org/InStock",
  },
};

const faqs: { q: string; a: string }[] = [
  {
    q: "Do I need a different IPTV subscription for each country?",
    a: "No. One IPTV UPG subscription gives you the full global lineup — US sports and entertainment, UK and European broadcasters in native languages, Latin American channels, Arabic and MENA programming, Asian and African regional channels, plus international sports and news. The same login works on every device, in every country.",
  },
  {
    q: "How is country availability handled — is the service geo-restricted?",
    a: "IPTV UPG is delivered over the open internet. You can sign in from anywhere with a stable broadband connection (5 Mbps for HD, 25 Mbps for 4K). The channel lineup itself is the same global package regardless of where you log in; what changes is which channels are most relevant to you based on your language and viewing habits.",
  },
  {
    q: "Which devices work with IPTV UPG abroad?",
    a: "Any device that runs a compatible IPTV player: Android phones and tablets, Fire TV Stick, Apple TV (gen 4 and later), Samsung and LG smart TVs, MAG boxes, Nvidia Shield, Roku (via a sideloaded player), Windows and macOS computers, and iPhone/iPad. We provide an M3U URL and Xtream Codes credentials on activation so you can use IPTV Smarters, TiviMate, IBO Player, Smart IPTV or any compatible client.",
  },
  {
    q: "Are local sports and pay-TV channels included for my country?",
    a: "The full IPTV UPG package includes the international top-tier sports rights bundles plus the major free-to-air and pay-TV channels for each country. If you have a specific channel in mind, start the 24-hour free trial. The trial runs on the full live package so you can confirm the channel is present before subscribing.",
  },
  {
    q: "Can I use one IPTV UPG account if I travel between countries?",
    a: "Yes. The account is tied to your credentials, not a geographic location. Sign in from your home country, while travelling, or after relocating — your saved playlists, EPG, and subscription remain the same. We recommend using a single device per stream; multi-connection support is available on request.",
  },
  {
    q: "What is the lowest monthly price?",
    a: "The 12-month plan is $90 ($7.50 per month) — the cheapest per-month price in the IPTV UPG lineup. Shorter terms are also available: $16 monthly, $39 for 3 months ($13/month), and $60 for 6 months ($10/month). Every plan ships the same global channel lineup and a 7-day money-back guarantee.",
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
  "@graph": [breadcrumbSchema, serviceSchema, faqSchema],
};

/* ─────────────────────────────────────────────────────────────────────────────
   Region intro data
───────────────────────────────────────────────────────────────────────────── */

const regions: { title: string; copy: string; flags: string[] }[] = [
  {
    title: "North America lineup",
    copy:
      "Full US sports coverage, the major broadcast networks, regional news, the premium movie tier, and the cable-replacement entertainment package in 4K. One IPTV subscription replaces the cable bill for the average US household. The 7-day on-screen guide works on smart TVs and streaming sticks without extra setup.",
    flags: ["US", "CA"],
  },
  {
    title: "UK and European lineup",
    copy:
      "UK, German, French, Spanish, Italian, Nordic, and pan-European broadcaster families in 4K. National channels in their original audio plus the international sports and movie tier on the same login. The on-screen guide carries 7 days of programming for every channel.",
    flags: ["GB", "DE", "FR", "ES", "IT", "NL"],
  },
  {
    title: "Worldwide lineup",
    copy:
      "Canada, Latin America, the Middle East, North Africa, Asia, and sub-Saharan Africa. The major regional broadcaster families for each market alongside the full international package. Expat and diaspora households use the same single login wherever they live now.",
    flags: ["BR", "MX", "AR", "AE", "SA", "IN", "CN", "JP", "ZA"],
  },
];

export default function IPTVByCountryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[1100px]">
          {/* Hero */}
          <header className="mb-14 text-center">
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">100+ countries</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>One subscription</span>
            </div>
            <h1 className="mx-auto mb-5 max-w-[820px] text-[clamp(30px,4.5vw,48px)] font-black leading-[1.05]">
              IPTV Service by Country
              <span className="mt-3 block text-[clamp(15px,1.8vw,20px)] font-semibold text-text-secondary">
                Local Channels, One Subscription
              </span>
            </h1>
            <p className="mx-auto max-w-[720px] text-[15px] leading-relaxed text-text-secondary">
              IPTV UPG delivers a premium IPTV subscription in over 100 countries
              — native-language local channels plus international sports, news,
              and entertainment in 4K. One login, every device, from{" "}
              <strong className="text-text-primary">$7.50 / month</strong>. Find
              your country below to start.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/iptv-free-trial"
                className="inline-block rounded-full bg-accent px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90"
              >
                Start free 24-hour trial
              </Link>
              <Link
                href="/iptv-subscription"
                className="inline-block rounded-full border border-accent px-7 py-3 text-sm font-semibold text-accent transition hover:bg-accent/10"
              >
                Compare subscription plans
              </Link>
            </div>
          </header>

          {/* Region cards */}
          <section aria-label="IPTV regions" className="mb-16 grid gap-5 md:grid-cols-3">
            {regions.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-border bg-bg-card p-6 transition hover:border-accent/40"
              >
                <div
                  className="mb-3 text-3xl leading-none"
                  aria-hidden="true"
                >
                  {r.flags.map((c) => codeToFlag(c)).join(" ")}
                </div>
                <h2 className="mb-3 text-xl font-bold text-text-primary">{r.title}</h2>
                <p className="text-sm leading-relaxed text-text-secondary">{r.copy}</p>
              </div>
            ))}
          </section>

          {/* Country grid */}
          <section aria-label="Countries served" className="mb-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-bold text-text-primary">
                IPTV available in {COUNTRIES.length} countries
              </h2>
              <p className="text-xs uppercase tracking-[2px] text-text-muted">
                Alphabetical · {COUNTRIES.length} listed
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {sortedCountries.map((c) => {
                const slug = COUNTRY_CODE_TO_SLUG.get(c.code);
                const inner = (
                  <>
                    <span
                      className="text-lg leading-none"
                      role="img"
                      aria-label={`Flag of ${c.name}`}
                    >
                      {codeToFlag(c.code)}
                    </span>
                    <span className="truncate">{c.name}</span>
                    {slug && (
                      <span
                        aria-hidden="true"
                        className="ml-auto text-[10px] text-accent"
                      >
                        →
                      </span>
                    )}
                  </>
                );
                return slug ? (
                  <li key={c.code}>
                    <Link
                      href={`/best-iptv-service-in/${slug}`}
                      className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-3 py-2.5 text-sm text-text-primary transition hover:border-accent/40"
                    >
                      {inner}
                    </Link>
                  </li>
                ) : (
                  <li
                    key={c.code}
                    className="flex items-center gap-2 rounded-lg border border-border bg-bg-card px-3 py-2.5 text-sm text-text-secondary transition hover:border-accent/40 hover:text-text-primary"
                  >
                    {inner}
                  </li>
                );
              })}
            </ul>
            <p className="mt-5 text-xs text-text-muted">
              Channel lineup is the same global package on every login — country
              labels indicate where customers are actively subscribed, not
              geo-restrictions on the service itself.
            </p>
          </section>

          {/* What you actually get */}
          <section className="mb-16 rounded-2xl border border-border bg-bg-card p-8">
            <h2 className="mb-5 text-2xl font-bold text-text-primary">
              What's in the global package
            </h2>
            <div className="grid gap-6 text-sm leading-relaxed text-text-secondary md:grid-cols-3">
              <div>
                <h3 className="mb-2 text-base font-semibold text-text-primary">
                  24,000+ live channels
                </h3>
                <p>
                  Full lineup across SD, HD, FHD, and 4K — local broadcasters,
                  international news, sports tiers, kids, lifestyle, and music
                  channels for every region.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-text-primary">
                  120,000+ on-demand titles
                </h3>
                <p>
                  Movies and series in 4K with original audio plus multi-language
                  dubs and subtitles — Hollywood, Bollywood, K-drama, anime,
                  European cinema, and regional originals.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-text-primary">
                  7-day EPG, M3U + Xtream
                </h3>
                <p>
                  Standards-based delivery: a single M3U URL and Xtream Codes
                  credentials on activation, so any IPTV player on any device
                  works out of the box.
                </p>
              </div>
            </div>
          </section>

          {/* Setup guides cross-links */}
          <section className="mb-16">
            <h2 className="mb-5 text-2xl font-bold text-text-primary">
              Setup by device
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { href: "/android-iptv", label: "Android" },
                { href: "/fire-tv-iptv", label: "Fire TV Stick" },
                { href: "/samsung-tv-iptv", label: "Samsung TV" },
                { href: "/apple-tv-iptv", label: "Apple TV" },
                { href: "/lg-tv-iptv", label: "LG TV" },
                { href: "/roku-iptv", label: "Roku" },
                { href: "/mag-iptv", label: "MAG Box" },
                { href: "/macos-iptv", label: "macOS" },
              ].map((d) => (
                <Link
                  key={d.href}
                  href={d.href}
                  className="rounded-xl border border-border bg-bg-card px-4 py-3 text-center text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent"
                >
                  {d.label}
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="mb-5 text-2xl font-bold text-text-primary">
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

          {/* CTA */}
          <section className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-text-primary">
              Pick your country, pick your plan
            </h2>
            <p className="mx-auto max-w-[560px] text-sm leading-relaxed text-text-secondary">
              One login covers the global lineup. Start with a free 24-hour trial
              to confirm your local channels are in the package — then lock in
              $7.50/month with the annual plan.
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
