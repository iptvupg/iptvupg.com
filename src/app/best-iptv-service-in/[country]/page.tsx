import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  COUNTRY_PAGES_BY_SLUG,
  COUNTRY_PAGE_SLUGS,
  NOINDEX_COUNTRY_SLUGS,
  type CountryDetail,
} from "@/data/country-pages";

/* ─────────────────────────────────────────────────────────────────────────────
   Static generation
───────────────────────────────────────────────────────────────────────────── */

export const dynamicParams = false;

export function generateStaticParams() {
  return COUNTRY_PAGE_SLUGS.map((country) => ({ country }));
}

type RouteProps = {
  params: Promise<{ country: string }>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   Helpers
───────────────────────────────────────────────────────────────────────────── */

function pageUrl(slug: string) {
  return `https://www.iptvupg.com/best-iptv-service-in/${slug}`;
}

function codeToFlag(code: string): string {
  if (!/^[A-Z]{2}$/.test(code)) return "";
  const base = 0x1f1e6;
  return (
    String.fromCodePoint(base + (code.charCodeAt(0) - 65)) +
    String.fromCodePoint(base + (code.charCodeAt(1) - 65))
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Metadata
───────────────────────────────────────────────────────────────────────────── */

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { country } = await params;
  const data = COUNTRY_PAGES_BY_SLUG.get(country);
  if (!data) return {};

  const url = pageUrl(data.slug);
  const title = `Best IPTV Service in ${data.name} — Local Channels + Sports 2026`;
  const description = `Best IPTV service in ${data.name}: ${data.topBroadcasters.slice(0, 4).join(", ")} plus ${data.topSportsLeagues.slice(0, 2).join(" and ")} live in 4K. IPTV UPG from $7.50/month — no contract.`;
  const isNoindex = NOINDEX_COUNTRY_SLUGS.has(data.slug);

  return {
    title,
    description,
    // Defensive noindex on country entries whose body copy still names
    // trademarked broadcasters/leagues. Routes stay live so inbound links
    // resolve; search engines are told to skip them until rewrites land.
    ...(isNoindex && {
      robots: { index: false, follow: true },
    }),
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    openGraph: {
      title: `Best IPTV Service in ${data.name} — IPTV UPG`,
      description,
      url,
      type: "article",
    },
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD
───────────────────────────────────────────────────────────────────────────── */

function buildSchema(data: CountryDetail) {
  const url = pageUrl(data.slug);

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
      { "@type": "ListItem", position: 2, name: "Countries", item: "https://www.iptvupg.com/countries" },
      { "@type": "ListItem", position: 3, name: `IPTV in ${data.name}`, item: url },
    ],
  };

  const webpage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `Best IPTV Service in ${data.name} — IPTV UPG`,
    isPartOf: { "@id": "https://www.iptvupg.com/#website" },
    publisher: { "@id": "https://www.iptvupg.com/#organization" },
    breadcrumb: { "@id": `${url}#breadcrumb` },
    inLanguage: "en",
    datePublished: "2026-05-01",
    dateModified: "2026-05-20",
  };

  const service = {
    "@type": "Service",
    "@id": `${url}#service`,
    name: `IPTV UPG — IPTV Service in ${data.name}`,
    serviceType: "IPTV Streaming Service",
    description: `IPTV UPG delivers ${data.name}'s local broadcasters (${data.topBroadcasters.slice(0, 5).join(", ")}) plus ${data.topSportsLeagues.slice(0, 3).join(", ")} and 24,000+ international channels in 4K. Watch on any device — Fire TV, Apple TV, Android, iOS, Smart TV, MAG.`,
    provider: { "@id": "https://www.iptvupg.com/#organization" },
    areaServed: {
      "@type": "Country",
      name: data.name,
    },
    offers: {
      "@type": "Offer",
      price: "7.50",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://www.iptvupg.com/iptv-subscription",
    },
  };

  const faq = {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `Does IPTV UPG include local ${data.name} channels?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. IPTV UPG carries the major ${data.name} broadcasters including ${data.topBroadcasters.join(", ")} alongside the international entertainment, sports and news tiers — all on one login.`,
        },
      },
      {
        "@type": "Question",
        name: `Can I watch ${data.topSportsLeagues[0]} live with IPTV UPG?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. ${data.topSportsLeagues[0]} matches are carried live on the IPTV UPG sports tier, in the same quality as the home broadcaster. The wider lineup includes ${data.topSportsLeagues.slice(1, 4).join(", ")}.`,
        },
      },
      {
        "@type": "Question",
        name: `What does IPTV cost in ${data.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `IPTV UPG starts at $16/month month-to-month. The annual plan works out to $7.50/month ($90/year) — a 53% saving versus monthly billing. The same login works on every device you own.`,
        },
      },
      {
        "@type": "Question",
        name: `Is the IPTV UPG service in ${data.languages[0]}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes — ${data.languages.join(" and ")} channels and audio tracks are included natively. The subscriber dashboard and player apps also support ${data.languages[0]} interfaces.`,
        },
      },
      {
        "@type": "Question",
        name: `Will it work on my TV in ${data.name}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `IPTV UPG works on Samsung and LG Smart TVs (Tizen and webOS), Android TV boxes, Apple TV, Amazon Fire TV, Roku where IPTV apps are available, MAG boxes, plus phones, tablets and computers. One subscription covers 2 simultaneous streams.`,
        },
      },
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, breadcrumb, service, faq],
  };
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────────────────────── */

export default async function CountryPage({ params }: RouteProps) {
  const { country } = await params;
  const data = COUNTRY_PAGES_BY_SLUG.get(country);
  if (!data) notFound();

  const url = pageUrl(data.slug);
  const flag = codeToFlag(data.code);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(data)) }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[820px]">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-text-muted">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/countries" className="hover:text-accent">Countries</Link>
            <span className="mx-2">/</span>
            <span className="text-text-secondary">{data.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg-card text-3xl">
            <span aria-hidden="true">{flag}</span>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[2px] text-accent">
            {data.region}
          </p>
          <h1 className="mb-4 text-[clamp(28px,4vw,44px)] font-black leading-[1.05]">
            Best IPTV Service in {data.name}
            <span className="mt-3 block text-[clamp(15px,1.8vw,20px)] font-semibold text-text-secondary">
              Local channels + {data.topSportsLeagues[0]} in 4K — one login
            </span>
          </h1>
          <p className="mb-6 text-sm text-text-muted">
            Updated: May 1, 2026
          </p>

          <div className="mb-10 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-text-secondary">
            <strong className="text-text-primary">TL;DR:</strong> IPTV UPG is the best IPTV service for {data.name} in 2026 — it bundles {data.topBroadcasters.slice(0, 4).join(", ")} and live {data.topSportsLeagues.slice(0, 2).join(" + ")} into one $7.50/month login, with 24,000+ international channels on top and 4K HDR streaming on every device.
          </div>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* Intro */}
            <section>
              <p>{data.intro}</p>
            </section>

            {/* Quick country facts */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                IPTV in {data.name} — at a glance
              </h2>
              <dl className="grid gap-3 sm:grid-cols-2">
                {[
                  { k: "Capital", v: data.capital },
                  { k: "Languages", v: data.languages.join(", ") },
                  { k: "Currency", v: `${data.currency.name} (${data.currency.code})` },
                  { k: "Region", v: data.region },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    className="flex items-center justify-between rounded-xl border border-border bg-bg-card px-4 py-3"
                  >
                    <dt className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
                      {k}
                    </dt>
                    <dd className="text-sm font-semibold text-text-primary">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>

            {/* Local channels */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Local {data.name} channels included
              </h2>
              <p className="mb-4">{data.channelHighlights}</p>
              <ul className="flex flex-wrap gap-2">
                {data.topBroadcasters.map((b) => (
                  <li
                    key={b}
                    className="rounded-full border border-border bg-bg-card px-3 py-1.5 text-xs font-semibold text-text-primary"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            {/* Sports */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Live sports for {data.name} fans
              </h2>
              <p className="mb-4">{data.sportsHighlights}</p>
              <ul className="flex flex-wrap gap-2">
                {data.topSportsLeagues.map((l) => (
                  <li
                    key={l}
                    className="rounded-full border border-accent/30 bg-accent/5 px-3 py-1.5 text-xs font-semibold text-accent"
                  >
                    {l}
                  </li>
                ))}
              </ul>
            </section>

            {/* Why IPTV UPG */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Why IPTV UPG is the best IPTV service in {data.name}
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-text-primary">One subscription, every screen.</strong>{" "}
                  Works on every device you own — Fire TV, Apple TV, Android, iOS, Samsung and LG Smart TVs, MAG box, and PC. 2 simultaneous streams per subscription.
                </li>
                <li>
                  <strong className="text-text-primary">4K HDR where available.</strong>{" "}
                  Premium tiers, sports and select event coverage stream in true 4K HDR with Dolby Audio.
                </li>
                <li>
                  <strong className="text-text-primary">Native {data.languages[0]} support.</strong>{" "}
                  Local broadcasters carry their original audio and EPG metadata — no auto-dub, no missing schedule data.
                </li>
                <li>
                  <strong className="text-text-primary">No contract.</strong>{" "}
                  Pay monthly, quarterly or yearly. Cancel any time. 24-hour free trial available before you commit.
                </li>
                <li>
                  <strong className="text-text-primary">Stable servers.</strong>{" "}
                  Anti-buffering CDN with edge nodes in {data.region} keeps {data.topSportsLeagues[0]} matches glitch-free even at peak prime time.
                </li>
              </ul>
            </section>

            {/* Pricing */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                IPTV UPG pricing in {data.name}
              </h2>
              <p>
                Pricing is billed in USD and is identical worldwide. From {data.name}, the rate works out roughly the same whether you pay in {data.currency.code} or with an international card.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { plan: "1 Month", price: "$16.00", href: "/1-month-iptv-subscription" },
                  { plan: "3 Months", price: "$39.00", href: "/3-months-iptv-subscription" },
                  { plan: "6 Months", price: "$60.00", href: "/6-months-iptv-subscription" },
                  { plan: "12 Months", price: "$90.00", href: "/12-months-iptv-subscription" },
                ].map((p) => (
                  <Link
                    key={p.plan}
                    href={p.href}
                    className="flex items-center justify-between rounded-xl border border-border bg-bg-card px-4 py-3 transition hover:border-accent/40"
                  >
                    <span className="text-sm font-semibold text-text-primary">{p.plan}</span>
                    <span className="text-sm font-bold text-accent">{p.price}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* Devices cross-links */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Set it up on your TV in {data.name}
              </h2>
              <p className="mb-4">
                IPTV UPG works on every major device sold in {data.name}. Pick your hardware:
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  { name: "Fire TV / Firestick", href: "/fire-tv-iptv" },
                  { name: "Apple TV", href: "/apple-tv-iptv" },
                  { name: "Android TV / Box", href: "/android-iptv" },
                  { name: "Samsung Smart TV", href: "/samsung-tv-iptv" },
                  { name: "LG Smart TV", href: "/lg-tv-iptv" },
                  { name: "Roku", href: "/roku-iptv" },
                  { name: "MAG box", href: "/mag-iptv" },
                  { name: "macOS", href: "/macos-iptv" },
                ].map((d) => (
                  <Link
                    key={d.href}
                    href={d.href}
                    className="rounded-lg border border-border bg-bg-card px-4 py-2.5 text-sm font-semibold text-text-primary transition hover:border-accent/40 hover:text-accent"
                  >
                    {d.name} →
                  </Link>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                IPTV in {data.name} — FAQ
              </h2>
              <div className="space-y-4">
                <details className="rounded-xl border border-border bg-bg-card p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-text-primary">
                    Does IPTV UPG include local {data.name} channels?
                  </summary>
                  <p className="mt-3 text-sm">
                    Yes. The major {data.name} broadcasters are carried natively: {data.topBroadcasters.join(", ")}. Channels keep their original audio language and EPG data.
                  </p>
                </details>
                <details className="rounded-xl border border-border bg-bg-card p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-text-primary">
                    Can I watch {data.topSportsLeagues[0]} live?
                  </summary>
                  <p className="mt-3 text-sm">
                    Yes — {data.topSportsLeagues[0]} is on the sports tier of IPTV UPG. The full sports lineup also covers {data.topSportsLeagues.slice(1, 4).join(", ")}.
                  </p>
                </details>
                <details className="rounded-xl border border-border bg-bg-card p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-text-primary">
                    How much does IPTV cost in {data.name}?
                  </summary>
                  <p className="mt-3 text-sm">
                    From $7.50/month on a 12-month plan, $15/month if you pay month-to-month. Pricing is in USD — your card handles the {data.currency.code} conversion automatically.
                  </p>
                </details>
                <details className="rounded-xl border border-border bg-bg-card p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-text-primary">
                    Will it work on my TV?
                  </summary>
                  <p className="mt-3 text-sm">
                    Yes. IPTV UPG works on Samsung Tizen and LG webOS Smart TVs, Android TV, Apple TV, Amazon Fire TV, MAG boxes, phones, tablets, and computers — anything sold in {data.name}'s consumer market.
                  </p>
                </details>
                <details className="rounded-xl border border-border bg-bg-card p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-text-primary">
                    Is there a free trial?
                  </summary>
                  <p className="mt-3 text-sm">
                    Yes — a 24-hour free trial is available so you can verify {data.topBroadcasters[0]}, {data.topSportsLeagues[0]} and your favourite channels actually load before you pay.{" "}
                    <Link href="/iptv-free-trial" className="font-semibold text-accent hover:underline">
                      Request your free trial →
                    </Link>
                  </p>
                </details>
              </div>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-accent/20 bg-accent/5 px-6 py-8 text-center">
              <h2 className="mb-3 text-xl font-bold text-text-primary">
                Start streaming {data.name} TV in 5 minutes
              </h2>
              <p className="mx-auto mb-6 max-w-[540px] text-sm leading-relaxed text-text-secondary">
                Pick a plan, get your login by email, install your favourite app, and watch {data.topBroadcasters[0]} + {data.topSportsLeagues[0]} live tonight.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/iptv-subscription"
                  className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                >
                  See subscription plans
                </Link>
                <Link
                  href="/iptv-free-trial"
                  className="rounded-xl border border-border px-6 py-3 text-sm font-semibold text-text-secondary transition hover:border-accent/40 hover:text-accent"
                >
                  Get a free trial
                </Link>
              </div>
            </section>

            {/* Back to hub */}
            <nav aria-label="Related" className="border-t border-border pt-6 text-sm">
              <Link href="/countries" className="font-semibold text-accent hover:underline">
                ← Back to all 197 countries
              </Link>
              <span className="mx-3 text-text-muted">·</span>
              <Link href="/best-iptv-service" className="text-text-secondary hover:text-accent">
                Best IPTV Service 2026 →
              </Link>
            </nav>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
