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
          <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-black">
            What Is IPTV?
          </h2>
          <p className="text-xs text-text-muted">
            By the IPTV UPG Editorial Team · Last reviewed{" "}
            <time dateTime="2026-05-19">May 19, 2026</time>
          </p>
        </div>

        <div className="rounded-[20px] border border-border/60 bg-bg-card/40 p-7 sm:p-10">
          <p className="text-[15px] leading-relaxed text-text-secondary">
            <strong className="font-semibold text-text-primary">IPTV</strong>{" "}
            (Internet Protocol Television) is TV delivered over the internet, instead
            of cable, satellite, or an antenna. Modern{" "}
            <strong className="font-semibold text-text-primary">IPTV services</strong>{" "}
            like IPTV UPG give you the same live sports, news, movies, and international
            channels you&apos;d get from cable, in 4K on a device you already own
            (Smart TV, phone, Fire Stick, Apple TV). Most subscribers pay roughly{" "}
            <span className="font-semibold text-accent">80% less</span> than they used
            to. Subscribe, install a free IPTV player, log in, watch.
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
