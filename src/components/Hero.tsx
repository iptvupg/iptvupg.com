import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-16 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center_top,rgba(201,168,76,0.04)_0%,transparent_60%)]" />

      {/* Decorative hero illustrations — responsive across all breakpoints.
          alt="" + aria-hidden so screen readers skip them. */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-10 top-24 opacity-10 sm:-left-4 sm:top-20 sm:opacity-15 lg:-left-2 lg:top-16 lg:opacity-20 xl:left-0">
        <Image src="/hero_l_mob.svg" alt="" width={320} height={400} className="h-auto w-[70px] sm:w-[160px] md:w-[200px] lg:w-[260px] xl:w-[320px]" loading="lazy" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute -right-10 top-24 opacity-10 sm:-right-4 sm:top-20 sm:opacity-15 lg:-right-2 lg:top-16 lg:opacity-20 xl:right-0">
        <Image src="/hero_r_mob.svg" alt="" width={280} height={400} className="h-auto w-[60px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[280px]" loading="lazy" />
      </div>

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
          <span className="text-xs text-text-secondary">Average Rating</span>
        </div>

        <h1 className="mb-6 text-[clamp(28px,5vw,52px)] leading-[1.1] font-black">
          Best IPTV Service in 2026 —{" "}
          <span className="whitespace-nowrap text-accent">24,000+</span> Live Channels in{" "}
          <span className="whitespace-nowrap text-accent">4K</span>, From{" "}
          <span className="whitespace-nowrap text-accent">$7.50</span>/Month
        </h1>

        <p className="mx-auto mb-8 max-w-[680px] text-[15px] leading-relaxed text-text-secondary">
          IPTV UPG is the <strong className="font-semibold text-text-primary">best IPTV service</strong>{" "}
          for 2026 — a premium IPTV subscription that streams 24,000+ live TV channels and
          120,000+ on-demand movies in 4K/UHD over your internet connection. No cable box,
          no contract, no buffering. Activated in under 60 seconds on any device you already own.
        </p>

        <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <a
            href="https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-10 py-4 text-sm font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all motion-safe:hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
          >
            Start Your Free Trial
          </a>
          <a
            href="#packages"
            className="rounded-xl border border-border-light px-10 py-4 text-sm font-bold tracking-[1px] uppercase text-text-primary transition-all motion-safe:hover:-translate-y-0.5 hover:border-accent/50"
          >
            View Plans &amp; Pricing
          </a>
        </div>

        <p className="mb-3 text-xs text-text-muted">
          No credit card needed &bull; Activated in 60 seconds &bull; 7-day money-back guarantee
        </p>

        <p className="mb-8 text-xs">
          <Link
            href="/best-iptv-service"
            className="font-semibold text-text-muted transition-colors hover:text-accent"
          >
            See why we&apos;re rated the best IPTV service in 2026 →
          </Link>
        </p>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
          {[
            { label: "99.9% Uptime — Verified", icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg> },
            { label: "Full EPG Included", icon: <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg> },
            { label: "True 4K HDR", icon: <span className="text-xs font-black">4K</span> },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent">
                {b.icon}
              </div>
              <span className="text-sm font-semibold">{b.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue — begins the journey */}
        <a
          href="#packages"
          className="group mt-12 inline-flex flex-col items-center gap-2 text-[11px] font-semibold tracking-[2px] uppercase text-text-muted transition-colors hover:text-accent sm:text-[10px] sm:tracking-[3px]"
        >
          <span>Choose your plan</span>
          <span className="flex h-9 w-[1px] overflow-hidden bg-border-light">
            <span className="h-3 w-full animate-[float_2.4s_ease-in-out_infinite] bg-accent" />
          </span>
        </a>
      </div>
    </section>
  );
}
