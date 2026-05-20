import Link from "next/link";
import { ChevronDownIcon, CinemaChairIcon } from "./Icons";

const linkClass = "font-semibold text-accent hover:underline";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is IPTV and how does it differ from cable?",
    a: "IPTV (Internet Protocol Television) streams live TV and on-demand video over your internet connection, instead of through coaxial cable or satellite. Cable charges $80 to $120 a month for 150 to 300 channels. IPTV providers like IPTV UPG charge $7.50 a month for 24,000+ channels in 4K, with no install, no equipment rental, no contract. Watch on a device you already own (Smart TV, Fire Stick, Apple TV, Roku, phone, laptop). A full Electronic Program Guide is built in, so browsing channels feels like cable.",
  },
  {
    q: "What makes IPTV UPG the best IPTV service in 2026?",
    a: "Three numbers you can verify. Catalog: 24,000+ live channels and 120,000+ on-demand titles, the largest among the major IPTV suppliers we benchmarked through Q1 2026. Quality: IPTV 4K with adaptive bitrate and 99.9% uptime. Price: $7.50 a month with instant activation and a 7-day refund. Trustpilot rates IPTV UPG 4.9/5. Two devices and 24/7 support come standard with every plan, which most IPTV services charge extra for.",
  },
  {
    q: "Is there a free IPTV trial?",
    a: "Yes. IPTV UPG offers a free trial with full access to all 24,000+ channels and the complete 4K VOD library — no credit card required. Message us on WhatsApp at +44 7848 197761 with the word \"trial\" and we send your login credentials within minutes. The trial includes the same anti-freeze streaming, 2 device connections, and 24/7 support as the paid plans, so you can verify quality on your own internet, on your own devices, before paying anything. Most users start watching within 5 minutes of requesting their trial.",
  },
  {
    q: "What devices work with IPTV UPG?",
    a: (
      <>
        Every major streaming platform: <Link href="/samsung-tv-iptv" className={linkClass}>Samsung Smart TV</Link>, <Link href="/lg-tv-iptv" className={linkClass}>LG Smart TV</Link>, Sony, <Link href="/fire-tv-iptv" className={linkClass}>Amazon Fire TV Stick / Fire TV Cube</Link>, <Link href="/roku-iptv" className={linkClass}>Roku</Link>, <Link href="/apple-tv-iptv" className={linkClass}>Apple TV</Link>, <Link href="/mag-iptv" className={linkClass}>MAG set-top boxes</Link>, Formuler, <Link href="/android-iptv" className={linkClass}>Android phones and tablets</Link>, iPhone, iPad, Windows PC, and <Link href="/macos-iptv" className={linkClass}>macOS</Link>. One subscription = unlimited devices (with 2 streaming simultaneously). Setup takes under 60 seconds — install a free IPTV player app, log in with the credentials we email you, and stream.
      </>
    ),
  },
  {
    q: "What internet speed do I need for 4K IPTV streaming?",
    a: "25 Mbps for 4K/UHD, 10 Mbps for HD (1080p), 5 Mbps for SD. IPTV UPG uses adaptive bitrate streaming that automatically downgrades quality during brief network congestion — so you never see the freeze-then-buffer cycle common with cheaper IPTV providers. We recommend wired Ethernet for the most stable 4K experience, though modern Wi-Fi 5 (802.11ac) and Wi-Fi 6 networks work well too. If your speed test shows at least 50 Mbps down, you'll have headroom for two simultaneous 4K streams.",
  },
  {
    q: "How much does an IPTV UPG subscription cost?",
    a: "Four plans, no contracts: 1-Month $16, 3-Month $39 ($13/mo), 6-Month $60 ($10/mo), 12-Month $90 ($7.50/mo — 53% off). Every plan includes 24,000+ channels, 120,000+ movies, 4K quality, full EPG, 2 simultaneous device connections, 24/7 support, instant activation, and a 7-day money-back guarantee. Pay with Visa, Mastercard, Amex, or crypto. No auto-renewal. Cancel anytime. The Annual Plan saves $102 compared to monthly billing — the same as ~13 weeks of free service.",
  },
  {
    q: "Is IPTV legal?",
    a: "Yes. IPTV (Internet Protocol Television) is a legal streaming technology used by major broadcasters worldwide, including BT, AT&T U-verse, and Verizon Fios. The legality of any specific IPTV service depends on whether it's licensed to distribute the content it streams. Users are responsible for ensuring their use of any IPTV service complies with applicable laws in their region. IPTV UPG is an independent streaming service provider — please review our Terms and DMCA policy for details.",
  },
  {
    q: "What if I'm not satisfied with the service?",
    a: "Every IPTV UPG plan includes a 7-day money-back guarantee. If the service doesn't meet your expectations within the first 7 days, contact support via WhatsApp or email and we'll issue a full, no-questions-asked refund. There's no auto-renewal and no long-term contract — you choose if and when to renew. Most refund requests are processed within 24 hours.",
  },
];

export default function FAQ() {
  return (
    <section className="relative overflow-hidden px-6 py-20" id="faq">
      <div className="pointer-events-none absolute top-5 left-0 right-0 text-center text-[clamp(60px,10vw,140px)] font-black tracking-[20px] uppercase text-text-primary opacity-[0.02]">
        FAQ FAQ FAQ FAQ FAQ
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-16 flex flex-col gap-10 lg:flex-row">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
              <span className="font-mono">06</span>
              <span className="h-px w-8 bg-accent/40" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-[clamp(28px,4vw,42px)] leading-[1.15] font-black">
              IPTV FAQ —
              <br />
              <span className="text-accent">Everything You Need to Know</span> Before Subscribing
            </h2>
            <p className="mt-5 max-w-[420px] text-sm leading-relaxed text-text-secondary">
              Quick, honest answers about IPTV, our service, devices, pricing, and
              refunds. Can&apos;t find your question? WhatsApp us — we reply in
              under 5 minutes.
            </p>
          </div>
          <div className="hidden shrink-0 items-center justify-center lg:flex lg:w-[300px]">
            <CinemaChairIcon />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <details
              key={i}
              open={i < 2}
              className="group overflow-hidden rounded-2xl border border-border bg-bg-card shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all open:border-dashed open:border-border-light"
            >
              <summary className="flex w-full cursor-pointer items-center gap-4 px-6 py-5 text-left transition-colors hover:bg-bg-card-hover [&::-webkit-details-marker]:hidden list-none">
                <span className="min-w-[32px] text-sm font-bold text-text-muted group-open:text-accent">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <h3 className="flex-1 text-[15px] font-semibold">
                  {faq.q}
                </h3>
                <div className="text-text-muted transition-transform duration-300 group-open:rotate-180">
                  <ChevronDownIcon className="h-4 w-4" />
                </div>
              </summary>
              <div className="px-6 pb-6 pl-[72px] text-sm leading-relaxed text-text-secondary">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
