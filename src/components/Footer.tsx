import Link from "next/link";
import { MailIcon, AtIcon, TwitterIcon, InstagramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary px-6 pt-16 pb-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-10 flex flex-col gap-10 xl:flex-row xl:gap-16">
          {/* Brand */}
          <div className="shrink-0">
            <div className="text-2xl font-black tracking-[2px]">IPTV <span className="text-accent">UPG</span></div>
          </div>

          {/* Nav */}
          <nav className="grid grid-cols-1 gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="Footer navigation">
            <div>
              <h3 className="mb-3 text-xs font-bold tracking-wider uppercase text-text-muted">Plans</h3>
              <div className="flex flex-col gap-2">
                <Link href="/best-iptv-service" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Why Choose Us</Link>
                <Link href="/iptv-free-trial" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Free Trial</Link>
                <Link href="/iptv-subscription" className="text-sm text-text-secondary transition-colors hover:text-text-primary">All Subscription Plans</Link>
                <Link href="/1-month-iptv-subscription" className="text-sm text-text-secondary transition-colors hover:text-text-primary">1 Month — $16</Link>
                <Link href="/3-months-iptv-subscription" className="text-sm text-text-secondary transition-colors hover:text-text-primary">3 Months — $39</Link>
                <Link href="/6-months-iptv-subscription" className="text-sm text-text-secondary transition-colors hover:text-text-primary">6 Months — $60</Link>
                <Link href="/12-months-iptv-subscription" className="text-sm text-text-secondary transition-colors hover:text-text-primary">12 Months — $90</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-bold tracking-wider uppercase text-text-muted">Setup Guides</h3>
              <div className="flex flex-col gap-2">
                <Link href="/what-is-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">What is IPTV?</Link>
                <Link href="/android-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Android</Link>
                <Link href="/fire-tv-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Fire TV Stick</Link>
                <Link href="/apple-tv-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Apple TV</Link>
                <Link href="/samsung-tv-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Samsung TV</Link>
                <Link href="/lg-tv-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">LG TV</Link>
                <Link href="/roku-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Roku</Link>
                <Link href="/mag-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">MAG Box</Link>
                <Link href="/macos-iptv" className="text-sm text-text-secondary transition-colors hover:text-text-primary">macOS</Link>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-xs font-bold tracking-wider uppercase text-text-muted">Legal</h3>
              <div className="flex flex-col gap-2">
                <Link href="/refund" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Refund Policy</Link>
                <Link href="/terms" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Terms &amp; Conditions</Link>
                <Link href="/privacy" className="text-sm text-text-secondary transition-colors hover:text-text-primary">Privacy Policy</Link>
                <Link href="/dmca" className="text-sm text-text-secondary transition-colors hover:text-text-primary">DMCA</Link>
                <Link href="/about" className="text-sm text-text-secondary transition-colors hover:text-text-primary">About Us</Link>
                <a href="/#faq" className="text-sm text-text-secondary transition-colors hover:text-text-primary">FAQs</a>
              </div>
            </div>
          </nav>

          {/* Contact */}
          <div className="xl:ml-auto">
            <h3 className="mb-5 text-base font-bold tracking-wider uppercase">
              Contact Us
            </h3>
            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3.5 group">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card transition-all group-hover:border-brand-whatsapp/50 group-hover:bg-brand-whatsapp/10">
                  <svg className="h-[18px] w-[18px] text-brand-whatsapp" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" /></svg>
                </div>
                <div>
                  <div className="text-[11px] text-text-muted">WhatsApp</div>
                  <span className="text-sm font-semibold transition-colors group-hover:text-brand-whatsapp">+44 7848 197761</span>
                </div>
              </a>
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg-card">
                  <AtIcon className="h-[18px] w-[18px] text-text-secondary" />
                </div>
                <div>
                  <div className="text-[11px] text-text-muted">
                    Email Address
                  </div>
                  <a href="mailto:support@iptvupg.com" className="text-sm font-semibold transition-colors hover:text-accent">
                    support@iptvupg.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-4 border-t border-border pt-8">
          <div className="flex justify-center gap-4">
            <a
              href="https://twitter.com/iptvupg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow IPTV UPG on Twitter"
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-border bg-bg-card transition-all hover:border-accent/50 hover:bg-bg-card-hover"
            >
              <TwitterIcon className="h-[18px] w-[18px] text-text-secondary" />
            </a>
            <a
              href="https://instagram.com/iptvupg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow IPTV UPG on Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-border bg-bg-card transition-all hover:border-accent/50 hover:bg-bg-card-hover"
            >
              <InstagramIcon className="h-[18px] w-[18px] text-text-secondary" />
            </a>
          </div>
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} IPTV UPG. All rights reserved.
          </p>
          <p className="mt-2 max-w-[720px] text-center text-[11px] leading-relaxed text-text-muted">
            Disclaimer: IPTV UPG is an independent streaming service provider. We do not host, store, or distribute any copyrighted content. All trademarks, logos, and brand names referenced on this website are the property of their respective owners. IPTV UPG is not affiliated with, endorsed by, or connected to any broadcaster or content provider. Users are solely responsible for ensuring that their use of the service complies with all applicable laws in their jurisdiction. Content availability may vary by region and is subject to change without notice.
          </p>
        </div>
      </div>
    </footer>
  );
}
