import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About IPTV UPG — Premium IPTV Streaming Service",
  description:
    "Learn about IPTV UPG: how we operate, our infrastructure, editorial standards, and the team behind 24,000+ live channels and 120,000+ movies in 4K.",
  alternates: {
    canonical: "https://www.iptvupg.com/about",
    languages: {
      "en": "https://www.iptvupg.com/about",
      "x-default": "https://www.iptvupg.com/about",
    },
  },
  openGraph: {
    title: "About IPTV UPG — Premium IPTV Streaming Service",
    description:
      "How IPTV UPG operates: infrastructure, editorial standards, contact, and jurisdiction.",
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
          name: "About Us",
          item: "https://www.iptvupg.com/about",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://www.iptvupg.com/about#webpage",
      url: "https://www.iptvupg.com/about",
      name: "About IPTV UPG — Premium IPTV Streaming Service",
      dateModified: "2026-05-19",
      isPartOf: { "@id": "https://www.iptvupg.com/#website" },
      publisher: { "@id": "https://www.iptvupg.com/#organization" },
      breadcrumb: { "@id": "https://www.iptvupg.com/about#breadcrumb" },
    },
    {
      "@type": "Person",
      "@id": "https://www.iptvupg.com/about#founder",
      name: "Bennett Prosacco",
      jobTitle: "Founder",
      worksFor: { "@id": "https://www.iptvupg.com/#organization" },
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
        <article className="mx-auto max-w-[800px]">
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            About IPTV UPG
          </h1>
          <p className="mb-10 text-sm text-text-muted">
            How we operate, what we publish, and how to reach us
          </p>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* Who we are */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Who We Are
              </h2>
              <p>
                IPTV UPG is a premium IPTV streaming service founded by{" "}
                <strong className="text-text-primary">Bennett Prosacco</strong>{" "}
                and operated from London, United Kingdom. We deliver 24,000+
                live channels and 120,000+ movies &amp; TV shows in 4K and HD
                quality to households across the United States, the United
                Kingdom, and Europe.
              </p>
              <p className="mt-3">
                We are an independent IPTV provider — not an affiliate, not a
                reseller, and not affiliated with any content owner, network,
                streaming platform, or device manufacturer mentioned on this
                site. All trademarks remain the property of their respective
                owners. Our role is to operate the subscription, the streaming
                infrastructure, and the support channels.
              </p>
            </section>

            {/* Infrastructure */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Infrastructure
              </h2>
              <p>
                IPTV UPG operates a multi-region streaming backend with
                adaptive-bitrate delivery and 24/7 monitoring. Channels are
                distributed across redundant edge nodes so that if one region
                degrades, your stream fails over silently. Our published
                operational benchmarks are:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-text-primary">99.9% uptime</strong>{" "}
                  &mdash; measured across the live channel backbone, rolling
                  90-day window.
                </li>
                <li>
                  <strong className="text-text-primary">~1.8s average channel start</strong>{" "}
                  &mdash; from selection in your player to first decoded frame
                  on a 25 Mbps connection.
                </li>
                <li>
                  <strong className="text-text-primary">Adaptive 4K / FHD / HD</strong>{" "}
                  &mdash; streams downshift gracefully on slow networks
                  instead of buffering.
                </li>
                <li>
                  <strong className="text-text-primary">2 simultaneous device connections</strong>{" "}
                  &mdash; included on every paid plan and on the free trial.
                </li>
              </ul>
            </section>

            {/* Editorial standards */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Editorial Standards
              </h2>
              <p>
                Every guide, comparison, and FAQ on iptvupg.com is written or
                reviewed by the IPTV UPG editorial team and dated with a
                publication or revision date. Where we cite figures &mdash;
                channel counts, uptime, start-up latency, plan pricing &mdash;
                those figures are taken from our own infrastructure and
                pricing systems, not from third-party marketing copy.
              </p>
              <p className="mt-3">
                If we get something wrong, email{" "}
                <a
                  href="mailto:support@iptvupg.com"
                  className="text-accent hover:underline"
                >
                  support@iptvupg.com
                </a>{" "}
                and we will correct it. Pages we revise carry an updated{" "}
                <em>dateModified</em> in their structured data so search
                engines and AI assistants can see the change.
              </p>
            </section>

            {/* Our mission */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Our Mission
              </h2>
              <p>
                We believe everyone deserves access to premium entertainment
                without the premium price tag. Our goal is to provide a
                seamless streaming experience with the widest content library,
                the most stable servers, and the friendliest support team in
                the industry &mdash; backed by a no-questions 24-hour free
                trial and a 7-day money-back guarantee on every paid plan.
              </p>
            </section>

            {/* Why choose us */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Why Choose IPTV UPG?
              </h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text-primary">
                      24,000+ Live Channels
                    </strong>{" "}
                    &mdash; Sports, news, entertainment, kids, and international
                    content from around the globe.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text-primary">
                      120,000+ Movies &amp; Shows
                    </strong>{" "}
                    &mdash; A massive on-demand library updated daily with the
                    latest releases.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text-primary">
                      4K &amp; HD Quality
                    </strong>{" "}
                    &mdash; Crystal-clear streaming on all your devices with
                    anti-freeze technology.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text-primary">
                      99.9% Uptime
                    </strong>{" "}
                    &mdash; Rock-solid servers so you never miss a moment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>
                    <strong className="text-text-primary">
                      24/7 Support
                    </strong>{" "}
                    &mdash; Our team is always ready to help via WhatsApp or
                    email.
                  </span>
                </li>
              </ul>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Get in Touch
              </h2>
              <p className="mb-6">
                Have questions or need help? Reach out to us anytime &mdash;
                we&rsquo;d love to hear from you.
              </p>
              <div className="space-y-4 rounded-2xl border border-border bg-bg-card p-6">
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
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx={12} cy={7} r={4} />
                    </svg>
                  </span>
                  <div>
                    <div className="text-[11px] text-text-muted">Founder</div>
                    <div className="text-sm font-semibold text-text-primary">
                      Bennett Prosacco
                    </div>
                  </div>
                </div>
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
                    <div className="text-[11px] text-text-muted">WhatsApp</div>
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
                    <div className="text-[11px] text-text-muted">
                      Email Address
                    </div>
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
                    <div className="text-[11px] text-text-muted">Address</div>
                    <address className="text-sm font-semibold not-italic text-text-primary">
                      41 Midhurst Ave, Muswell Hill, London N10 3HR, United
                      Kingdom
                    </address>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
