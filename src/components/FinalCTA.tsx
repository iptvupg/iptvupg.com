export default function FinalCTA() {
  return (
    <section className="px-6 py-20" aria-label="Start your IPTV free trial">
      <div className="mx-auto max-w-[900px]">
        <div className="relative overflow-hidden rounded-[24px] border border-accent/30 bg-bg-card p-10 text-center shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08)_0%,transparent_70%)]" />

          <div className="relative">
            <h2 className="mx-auto mb-5 max-w-[680px] text-[clamp(26px,3.6vw,38px)] leading-[1.15] font-black">
              Ready to Cancel Cable? Start Your{" "}
              <span className="text-accent">Free IPTV Trial</span> Today
            </h2>

            <p className="mx-auto mb-8 max-w-[560px] text-[15px] leading-relaxed text-text-secondary">
              Join 12,000+ subscribers streaming 24,000+ channels in 4K — for less
              than a coffee per week. No credit card. No contract. No risk.
            </p>

            <div className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
              <a
                href="https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-xl bg-gradient-to-br from-accent to-accent-dark px-9 py-4 text-sm font-bold tracking-[2px] uppercase text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
              >
                Start Free Trial →
              </a>
              <a
                href="/12-months-iptv-subscription"
                className="rounded-xl border border-border-light px-9 py-4 text-sm font-bold tracking-[1px] uppercase text-text-primary transition-all hover:-translate-y-0.5 hover:border-accent/50"
              >
                View Annual Plan — $7.50/mo
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-text-muted">
              <span>✓ Activated in 60 seconds</span>
              <span>✓ Works on every device</span>
              <span>✓ 7-day money-back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
