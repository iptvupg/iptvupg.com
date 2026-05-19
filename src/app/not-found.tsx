import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found (404) — IPTV UPG",
  description:
    "The page you're looking for couldn't be found. Browse our IPTV subscription plans, free trial, supported devices, or country pages to get back on track.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.iptvupg.com/404" },
};

const POPULAR_LINKS = [
  { href: "/iptv-free-trial", label: "Free Trial", sub: "Test before you pay" },
  { href: "/iptv-subscription", label: "Subscription Plans", sub: "From $16/mo" },
  { href: "/best-iptv-service", label: "Best IPTV Service", sub: "Why IPTV UPG" },
  { href: "/what-is-iptv", label: "What is IPTV?", sub: "Beginner's guide" },
] as const;

const DEVICE_LINKS = [
  { href: "/android-iptv", label: "Android" },
  { href: "/fire-tv-iptv", label: "Fire TV Stick" },
  { href: "/samsung-tv-iptv", label: "Samsung TV" },
  { href: "/lg-tv-iptv", label: "LG TV" },
  { href: "/apple-tv-iptv", label: "Apple TV" },
  { href: "/roku-iptv", label: "Roku" },
  { href: "/mag-iptv", label: "MAG Box" },
  { href: "/macos-iptv", label: "macOS" },
] as const;

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        id="main-content"
        className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 pt-32 pb-20 text-center"
      >
        <div
          aria-hidden="true"
          className="mb-4 text-7xl font-black tracking-tighter text-accent sm:text-8xl"
        >
          404
        </div>
        <h1 className="mb-3 text-2xl font-bold text-text-primary sm:text-3xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mb-8 max-w-xl text-balance text-text-secondary">
          The page may have moved, been renamed, or never existed. Pick one of
          the popular pages below — or jump straight to the free trial.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-bg-primary transition-all hover:bg-accent/90"
          >
            Go Home
          </Link>
          <Link
            href="/iptv-free-trial"
            className="rounded-xl border border-accent/40 px-6 py-3 text-sm font-bold text-accent transition-all hover:bg-accent/10"
          >
            Start Free Trial
          </Link>
          <Link
            href="/iptv-subscription"
            className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-text-primary transition-all hover:border-accent/40 hover:bg-bg-card"
          >
            View Plans
          </Link>
        </div>

        <section
          aria-labelledby="popular-heading"
          className="w-full max-w-2xl"
        >
          <h2
            id="popular-heading"
            className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary"
          >
            Popular pages
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {POPULAR_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-xl border border-border bg-bg-card p-4 text-left transition-all hover:border-accent/40 hover:bg-bg-card/80"
                >
                  <div className="font-bold text-text-primary">
                    {link.label}
                  </div>
                  <div className="text-sm text-text-secondary">{link.sub}</div>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section
          aria-labelledby="devices-heading"
          className="mt-10 w-full max-w-2xl"
        >
          <h2
            id="devices-heading"
            className="mb-4 text-sm font-bold uppercase tracking-wider text-text-secondary"
          >
            Setup guides by device
          </h2>
          <ul className="flex flex-wrap justify-center gap-2">
            {DEVICE_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-block rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary transition-all hover:border-accent/40 hover:text-text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
