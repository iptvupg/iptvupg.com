const steps = [
  {
    n: "01",
    title: "Pick Your Plan",
    body: "Select a subscription that fits your budget. Prices start at $7.50/month with the Annual Plan.",
  },
  {
    n: "02",
    title: "Get Instant Access",
    body: "Receive your IPTV credentials by email within 60 seconds. No waiting, no shipping.",
  },
  {
    n: "03",
    title: "Stream on Any Device",
    body: "Open your favorite IPTV player on Smart TV, phone, Fire Stick, or Apple TV — log in, and watch in 4K.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-20" id="how-it-works" aria-label="How IPTV UPG Works">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
            <span className="font-mono">03</span>
            <span className="h-px w-8 bg-accent/40" />
            <span>Setup in 60 Seconds</span>
          </div>
          <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-black">
            Start Streaming in 3 Simple Steps
          </h2>
          <p className="mx-auto max-w-[520px] text-[15px] text-text-secondary">
            Checkout to live sports in about five minutes. Nobody comes to your house.
          </p>
        </div>

        <div className="relative">
          {/* Journey thread — dotted gold line connecting the three steps (desktop) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[16.6%] right-[16.6%] top-[42px] hidden h-px bg-[linear-gradient(to_right,transparent,rgba(201,168,76,0.35)_15%,rgba(201,168,76,0.35)_85%,transparent)] sm:block"
            style={{ backgroundImage: "repeating-linear-gradient(to right, rgba(201,168,76,0.35) 0 4px, transparent 4px 10px)" }}
          />

          <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="group relative rounded-[20px] border border-border bg-bg-card p-7 shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-1 hover:border-accent/40"
              >
                {/* Step number chip — sits on the dotted journey line on desktop */}
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-bg-primary font-mono text-xs font-bold text-accent transition-colors group-hover:border-accent">
                    {s.n}
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-[3px] uppercase text-text-muted">
                    Step
                  </span>
                </div>
                <h3 className="mb-3 min-h-[2.4em] text-xl font-black leading-tight">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-secondary">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
