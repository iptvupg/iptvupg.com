"use client";

// Header — fixed nav, mobile drawer with aria-expanded, body scroll lock, Escape to close.
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll + close on Escape while mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKey);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled ? "bg-bg-primary/95" : "bg-bg-primary/85"
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-5" aria-label="Main navigation">
        <Link href="/" className="text-[22px] font-black tracking-[2px] text-text-primary">
          IPTV <span className="text-accent">UPG</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          <a href="/#packages" className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
            Plans
          </a>
          <Link href="/best-iptv-service" className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
            Why Us
          </Link>
          <Link href="/iptv-free-trial" className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
            Free Trial
          </Link>
          <Link href="/what-is-iptv" className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
            Guide
          </Link>
          <a href="/#reviews" className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
            Reviews
          </a>
          <a href="/#faq" className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-text-secondary transition-colors hover:text-accent">
            FAQ
          </a>
          <a
            href="https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-full border border-accent/60 bg-transparent px-5 text-sm font-semibold text-accent transition hover:border-accent hover:bg-accent hover:text-black"
          >
            Start Free Trial
          </a>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="block h-[2px] w-6 bg-text-primary transition-all" />
          <span className="block h-[2px] w-6 bg-text-primary transition-all" />
          <span className="block h-[2px] w-6 bg-text-primary transition-all" />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Main menu"
          className="fixed inset-0 z-50 flex flex-col bg-bg-primary md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="text-[22px] font-black tracking-[2px] text-text-primary"
              onClick={() => setMenuOpen(false)}
            >
              IPTV <span className="text-accent">UPG</span>
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              className="flex min-h-[44px] min-w-[44px] items-center justify-center text-text-primary"
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative block h-6 w-6">
                <span className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-text-primary" />
                <span className="absolute left-1/2 top-1/2 block h-[2px] w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-text-primary" />
              </span>
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            <a
              href="/#packages"
              className="text-lg font-medium text-text-secondary transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Plans
            </a>
            <Link
              href="/best-iptv-service"
              className="text-lg font-medium text-text-secondary transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </Link>
            <Link
              href="/iptv-free-trial"
              className="text-lg font-medium text-text-secondary transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Free Trial
            </Link>
            <Link
              href="/what-is-iptv"
              className="text-lg font-medium text-text-secondary transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Guide
            </Link>
            <a
              href="/#reviews"
              className="text-lg font-medium text-text-secondary transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              Reviews
            </a>
            <a
              href="/#faq"
              className="text-lg font-medium text-text-secondary transition-colors hover:text-accent"
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </a>
            <a
              href="https://wa.me/447848197761?text=Hi%2C%20I%20would%20like%20to%20request%20a%20free%20IPTV%20trial"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-8 py-3 text-base font-semibold text-black transition hover:opacity-90"
              onClick={() => setMenuOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
