import Image from "next/image";

const whatsappScreenshots = [
  { image: "/reviews/review-1.webp", name: "Oliver", highlight: "It works well. As always you are the best", alt: "Best IPTV review from Oliver — top rated IPTV service customer feedback" },
  { image: "/reviews/review-2.webp", name: "Henry", highlight: "GREAT! Thank you so much!", alt: "IPTV reviews — Henry rates IPTV UPG as best IPTV provider" },
  { image: "/reviews/review-3.webp", name: "Adeline", highlight: "It\u2019s working perfectly at the moment", alt: "Top rated IPTV service review from Adeline — best IPTV streaming experience" },
  { image: "/reviews/review-4.webp", name: "Harper", highlight: "I will definitely recommend your services", alt: "Best IPTV provider review — Harper recommends IPTV UPG services" },
  { image: "/reviews/review-5.webp", name: "Nicole", highlight: "I recommend this service to everyone", alt: "IPTV review from Nicole — top rated IPTV subscription service recommendation" },
];

export default function Reviews() {
  return (
    <section className="px-6 py-20" id="reviews" aria-label="Customer Reviews">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
            <span className="font-mono">04</span>
            <span className="h-px w-8 bg-accent/40" />
            <span>Trusted by 12,000+ Customers</span>
          </div>
          <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-black">
            Why Customers Rate IPTV UPG the Best IPTV Service of 2026
          </h2>
          <p className="mx-auto mb-3 max-w-[560px] text-[15px] text-text-secondary">
            Real WhatsApp conversations from real subscribers in 47 countries. Every
            screenshot is verified — no stock photos, no paid testimonials.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Verified WhatsApp Conversations
          </div>
        </div>

        {/* WhatsApp Screenshot Gallery */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {whatsappScreenshots.map((s, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.35)]"
            >
              {/* Screenshot image */}
              <Image
                src={s.image}
                alt={s.alt}
                width={240}
                height={426}
                className="w-full object-cover"
                loading="lazy"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />

              {/* Bottom overlay with quote */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-3 pb-3 pt-12">
                <p className="text-xs leading-snug font-medium text-white/90 italic sm:text-[11px]">
                  &ldquo;{s.highlight}&rdquo;
                </p>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-white/70 sm:text-[10px]">{s.name}</span>
                  <div className="flex items-center gap-1">
                    <svg className="h-3 w-3 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-[10px] text-accent font-semibold">Verified</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trustpilot link */}
        <div className="mt-10 text-center">
          <a
            href="https://www.trustpilot.com/review/iptvupg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-text-primary"
          >
            Rated 4.9/5 on Trustpilot &mdash; See all reviews &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
