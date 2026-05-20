export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 text-center">
      {/* Background video — muted, looping, auto-playing. Hidden when reduced-motion is preferred. */}
      <video
        aria-hidden="true"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
      >
        <source src="/hero-bg.webm" type="video/webm" />
      </video>
      {/* Scrim — darkens video so text remains legible. */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg-primary/40 via-bg-primary/20 to-bg-primary" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(201,168,76,0.04)_0%,transparent_60%)]" />

      <div className="relative mx-auto max-w-[800px]">
        {/* Rating badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card/60 px-4 py-2 backdrop-blur-sm">
          <div className="flex gap-0.5 text-accent">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm font-semibold text-text-primary">4.9/5</span>
          <a
            href="https://www.trustpilot.com/review/iptvupg.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-text-secondary underline-offset-2 transition-colors hover:text-accent hover:underline"
          >
            on Trustpilot
          </a>
        </div>

        <h1 className="mb-6 text-[clamp(28px,5vw,52px)] leading-[1.1] font-black">
          Best IPTV Service in 2026 —{" "}
          <span className="whitespace-nowrap">24,000+</span> Live Channels in
          4K, From{" "}
          <span className="whitespace-nowrap text-accent">$7.50</span>/Month
        </h1>

        <p className="speakable mx-auto mb-8 max-w-[680px] text-[15px] leading-relaxed text-text-secondary">
          <strong className="font-semibold text-text-primary">IPTV UPG</strong>{" "}
          is an <strong className="font-semibold text-text-primary">IPTV service</strong>{" "}
          streaming 24,000+ live channels and 120,000+ movies in 4K. One subscription
          covers every device. No cable box. No contract. You&apos;re watching in about
          a minute.
        </p>

        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-10 py-4 text-sm font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
          >
            Start Free Trial
          </a>
          <a
            href="#packages"
            className="rounded-xl border border-border-light px-10 py-4 text-sm font-bold tracking-[1px] uppercase text-text-primary transition-all motion-safe:hover:-translate-y-0.5 hover:border-accent/50"
          >
            View Plans &amp; Pricing
          </a>
        </div>

        <p className="text-xs text-text-muted">
          No credit card needed &bull; Activated in 60 seconds &bull; 7-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
