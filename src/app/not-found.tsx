import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="flex min-h-[60vh] flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="mb-4 text-7xl font-black text-accent">404</div>
        <h1 className="mb-3 text-2xl font-bold text-text-primary">
          Page Not Found
        </h1>
        <p className="mb-8 max-w-md text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex gap-4">
          <a
            href="/"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-bg-primary transition-all hover:bg-accent/90"
          >
            Go Home
          </a>
          <a
            href="/#packages"
            className="rounded-xl border border-border px-6 py-3 text-sm font-bold text-text-primary transition-all hover:border-accent/40 hover:bg-bg-card"
          >
            View Plans
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
