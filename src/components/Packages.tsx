import Link from "next/link";
import { CheckIcon, SmallReelIcon } from "./Icons";

const sharedFeatures = [
  "24,000+ Live Channels",
  "120,000+ Movies & Series",
  "HD & 4K Streaming Quality",
  "Premium Live Sports Coverage",
  "99.9% Server Uptime",
  "2 Device Connections",
  "24/7 Customer Support",
];

type Plan = {
  duration: string;
  period: string;
  price: number;
  perMonth: string | null;
  oldPrice: number | null;
  badge: string | null;
  saveLine: string | null;
  extraFeatures: string[];
  ctaLabel: string;
  slug: string;
  waMsg: string;
};

const plans: Plan[] = [
  {
    duration: "1 Month",
    period: "Billed once · No renewal",
    price: 16,
    perMonth: null,
    oldPrice: null,
    badge: null,
    saveLine: null,
    extraFeatures: [],
    ctaLabel: "Get 1-Month Plan",
    slug: "/1-month-iptv-subscription",
    waMsg: "Hi%2C%20I%20want%20to%20purchase%20a%201%20Month%20subscription%20(%2416)",
  },
  {
    duration: "3 Months",
    period: "Billed once · No renewal",
    price: 39,
    perMonth: "13.00",
    oldPrice: null,
    badge: null,
    saveLine: "Save 19% vs monthly",
    extraFeatures: [],
    ctaLabel: "Get 3-Month Plan",
    slug: "/3-months-iptv-subscription",
    waMsg: "Hi%2C%20I%20want%20to%20purchase%20a%203%20Months%20subscription%20(%2439)",
  },
  {
    duration: "6 Months",
    period: "Billed once · No renewal",
    price: 60,
    perMonth: "10.00",
    oldPrice: null,
    badge: null,
    saveLine: "Save 38% vs monthly",
    extraFeatures: [],
    ctaLabel: "Get 6-Month Plan",
    slug: "/6-months-iptv-subscription",
    waMsg: "Hi%2C%20I%20want%20to%20purchase%20a%206%20Months%20subscription%20(%2460)",
  },
  {
    duration: "12 Months",
    period: "Billed once · No renewal",
    price: 90,
    perMonth: "7.50",
    oldPrice: 192,
    badge: "BEST VALUE — 53% OFF",
    saveLine: "Save $102 vs monthly billing",
    extraFeatures: ["Priority Support", "7 bonus VIP channels"],
    ctaLabel: "Get Annual Plan",
    slug: "/12-months-iptv-subscription",
    waMsg: "Hi%2C%20I%20want%20to%20purchase%20a%2012%20Months%20subscription%20(%2490%20-%20Best%20Value)",
  },
];

export default function Packages() {
  return (
    <section className="relative overflow-hidden px-6 py-20" id="packages">
      {/* Background text */}
      <div className="pointer-events-none absolute top-10 left-0 right-0 overflow-hidden text-center text-[clamp(60px,10vw,140px)] font-black tracking-[20px] uppercase text-text-primary opacity-[0.02]">
        TV PACKAGES TV PACKAGES
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold tracking-[3px] uppercase text-accent">
            <span className="font-mono">02</span>
            <span className="h-px w-8 bg-accent/40" />
            <span>Choose Your Plan</span>
          </div>
          <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-black">
            IPTV Subscription Plans — From $7.50/Month, Cancel Anytime
          </h2>
          <p className="mx-auto mb-4 max-w-[560px] text-[15px] text-text-secondary">
            Every IPTV subscription gets you the full library: 24,000+ channels,
            120,000+ movies in 4K, two devices at once, 24/7 support.
            <strong className="font-semibold text-text-primary"> The annual plan works out 53% cheaper per month.</strong>
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const isBest = plan.badge !== null;
            return (
              <div
                key={plan.duration}
                className={`relative flex flex-col rounded-[20px] border bg-bg-card p-8 shadow-[0_8px_40px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-1 ${
                  isBest
                    ? "border-accent bg-gradient-to-b from-accent/[0.04] to-bg-card ring-2 ring-accent/20"
                    : "border-border"
                }`}
              >
                {/* Torn edge top */}
                <div className="absolute -top-1.5 left-0 right-0 h-3 bg-[radial-gradient(circle_6px_at_12px_0,transparent_6px,var(--color-bg-card)_6px)] [background-size:24px_12px]" />
                {/* Torn edge bottom */}
                <div className="absolute -bottom-1.5 left-0 right-0 h-3 rotate-180 bg-[radial-gradient(circle_6px_at_12px_0,transparent_6px,var(--color-bg-card)_6px)] [background-size:24px_12px]" />

                {/* Badge */}
                {isBest && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-1 text-[10px] font-bold tracking-[1.5px] uppercase text-bg-primary shadow-[0_4px_16px_rgba(201,168,76,0.3)]">
                    {plan.badge}
                  </div>
                )}

                {/* Reel icon */}
                <div className="mb-4 flex justify-center opacity-20">
                  <SmallReelIcon className="h-10 w-10" />
                </div>

                {/* Duration */}
                <div className="mb-1 text-center text-sm font-bold tracking-[2px] uppercase text-text-secondary">
                  {plan.duration}
                </div>

                {/* Price — reserved height for old-price strikethrough so all cards align */}
                <div className="mb-1 flex flex-col items-center">
                  <span
                    aria-hidden={!plan.oldPrice}
                    className={`h-5 text-sm font-semibold text-text-muted ${plan.oldPrice ? "line-through" : "invisible"}`}
                  >
                    ${plan.oldPrice ?? plan.price}
                  </span>
                  <span className="text-[clamp(40px,8vw,56px)] leading-none font-black">
                    ${plan.price}
                  </span>
                </div>

                {/* Period */}
                <div className="mb-2 text-center text-xs text-text-secondary">
                  {plan.period}
                </div>

                {/* Per-month + Save line block — fixed height so feature lists align across all cards */}
                <div className="mb-4 flex min-h-[44px] flex-col items-center justify-start">
                  {plan.perMonth && (
                    <div className="text-center text-sm font-semibold text-accent">
                      Only ${plan.perMonth} / month
                    </div>
                  )}
                  {plan.saveLine && (
                    <div className="mt-1 text-center text-[11px] font-semibold tracking-wider uppercase text-text-secondary">
                      {plan.saveLine}
                    </div>
                  )}
                </div>

                {/* Features list — shared features in every plan, plus plan-unique extras highlighted in accent */}
                <ul className="mb-6 flex-1 space-y-2">
                  {sharedFeatures.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-text-secondary">
                      <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                  {plan.extraFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-[13px] font-semibold text-accent"
                    >
                      <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA — single primary action per card; WhatsApp demoted to text link */}
                <div className="space-y-2">
                  <Link
                    href={plan.slug}
                    className={`block w-full rounded-xl py-3.5 text-center text-[13px] font-bold tracking-[1.5px] uppercase transition-all hover:-translate-y-0.5 ${
                      isBest
                        ? "bg-gradient-to-br from-accent to-accent-dark text-bg-primary shadow-[0_8px_32px_rgba(201,168,76,0.25)] hover:shadow-[0_12px_40px_rgba(201,168,76,0.35)]"
                        : "border-2 border-border-light text-text-primary hover:border-text-primary"
                    }`}
                  >
                    {plan.ctaLabel}
                  </Link>
                  <a
                    href={`https://wa.me/447848197761?text=${plan.waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-[11px] font-medium text-text-secondary transition-colors hover:text-accent"
                  >
                    Prefer to chat? Order via WhatsApp →
                  </a>
                </div>

                {/* Guarantee */}
                <div className="mt-4 text-center">
                  <a
                    href="/refund"
                    className="text-[10px] font-medium tracking-wider uppercase text-text-secondary transition-colors hover:text-accent"
                  >
                    7-Day Money-Back Guarantee
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            Secure Payment
          </div>
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            SSL Encrypted
          </div>
          <span className="hidden h-4 w-px bg-border sm:inline-block" aria-hidden="true" />
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Crypto</span>
          <span>7-day refund</span>
        </div>
      </div>
    </section>
  );
}
