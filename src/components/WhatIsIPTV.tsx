import Link from "next/link";

export default function WhatIsIPTV() {
  return (
    <section className="px-6 py-20" id="what-is-iptv" aria-label="What is IPTV">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-8 text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
            <span className="font-mono">01</span>
            <span className="h-px w-8 bg-accent/40" />
            <span>What is IPTV?</span>
          </div>
          <h2 className="mb-4 text-[clamp(26px,3.6vw,38px)] font-black">
            What Is IPTV? A 30-Second Explainer
          </h2>
          <p className="text-xs text-text-muted">
            By the IPTV UPG Editorial Team · Last reviewed{" "}
            <time dateTime="2026-05-19">May 19, 2026</time>
          </p>
        </div>

        <div className="rounded-[20px] border border-border bg-bg-card p-7 shadow-[0_8px_40px_rgba(0,0,0,0.35)] sm:p-10">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            <strong className="font-semibold text-text-primary">IPTV</strong>{" "}
            (Internet Protocol Television) is a method of streaming live TV channels
            and on-demand video over the internet instead of through cable, satellite,
            or terrestrial signals. With the{" "}
            <strong className="font-semibold text-text-primary">best IPTV service</strong>{" "}
            of 2026 —{" "}
            <strong className="font-semibold text-text-primary">IPTV UPG</strong> — you
            get the same live sports, news, movies, and international channels you&apos;d
            get from cable, but delivered in 4K on any device (Smart TV, phone, Fire
            Stick, Apple TV) for up to{" "}
            <span className="font-semibold text-accent">80% less</span> than a
            traditional cable bill. Setup takes under a minute: subscribe, install a
            free IPTV player, log in, and start watching.
          </p>

          <div className="mt-7 border-t border-border pt-6">
            <h3 className="mb-2 text-[13px] font-bold tracking-[1.5px] uppercase text-accent">
              Q: Is IPTV the same as streaming?
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              IPTV is a type of streaming, but specialized for live TV broadcasts with
              full EPG, multi-channel switching, and channel-by-channel browsing — like
              cable, but over the internet.
            </p>
            <Link
              href="/what-is-iptv"
              className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[2px] uppercase text-accent transition-colors hover:text-text-primary"
            >
              Read the full IPTV guide
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
