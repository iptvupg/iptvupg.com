import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV on MAG Box: Portal URL Setup Guide 2026",
  description:
    "IPTV on MAG box setup for MAG 254, 322, 420, 424, and 524. Configure portal URL and stream 24,000+ channels in HD and 4K with IPTV UPG.",
  alternates: {
    canonical: "https://www.iptvupg.com/mag-iptv",
    languages: {
      "en": "https://www.iptvupg.com/mag-iptv",
      "x-default": "https://www.iptvupg.com/mag-iptv",
    },
  },
  openGraph: {
    title: "IPTV on MAG Box: Portal URL Setup Guide 2026",
    description: "IPTV on MAG box setup for MAG 254, 322, 420, 424, and 524. Configure portal URL and stream 24,000+ channels.",
    url: "https://www.iptvupg.com/mag-iptv",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvupg.com/mag-iptv#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "MAG Box IPTV Setup Guide", item: "https://www.iptvupg.com/mag-iptv" },
  ],
};

const techArticleSchema = {
  "@type": "TechArticle",
  "@id": "https://www.iptvupg.com/mag-iptv#article",
  headline: "IPTV on MAG Box: Portal URL Setup Guide 2026",
  description: "Complete setup guide for IPTV on MAG 254, MAG 322, MAG 420, MAG 424, and MAG 524 set-top boxes. Configure the portal URL and start streaming 24,000+ channels.",
  image: ["https://www.iptvupg.com/opengraph-image"],
  inLanguage: "en-US",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@id": "https://www.iptvupg.com/#organization" },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.iptvupg.com/mag-iptv",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a separate subscription for each MAG box?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Each MAG box has a unique MAC address, and IPTV subscriptions are bound to a specific MAC. If you have multiple MAG boxes in different rooms, each one requires its own IPTV UPG subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a MAG box with Wi-Fi instead of Ethernet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only MAG models with a W suffix (such as MAG 524w3) have built-in Wi-Fi. Standard MAG models require a wired Ethernet connection. If your MAG box does not have Wi-Fi and running an Ethernet cable is not feasible, you can use a powerline Ethernet adapter kit.",
      },
    },
    {
      "@type": "Question",
      name: "How do I update the firmware on my MAG box?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MAG boxes check for firmware updates automatically when connected to the internet. You can also manually trigger an update by going to Settings > System Settings > Software Update > Check for Update. Always keep your MAG firmware up to date.",
      },
    },
    {
      "@type": "Question",
      name: "What happens if I change my internet provider?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Changing your internet provider does not affect your IPTV subscription. The MAG box will connect to the portal from any internet connection. Simply plug the Ethernet cable into your new router, and the MAG box will work exactly as before.",
      },
    },
  ],
};

export default function MagIptv() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [breadcrumbSchema, techArticleSchema, faqSchema],
          }),
        }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[800px]">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-accent"><rect width="20" height="15" x="2" y="7" rx="2" ry="2" /><polyline points="17 2 12 7 7 2" /></svg>
          </div>
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            How to Set Up IPTV on MAG Box — Complete Guide 2026
          </h1>
          <p className="mb-6 text-sm text-text-muted">
            Updated: April 6, 2026
          </p>
          <div className="mb-10 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-text-secondary">
            <strong className="text-text-primary">TL;DR:</strong> To set up IPTV on a MAG box, go to Settings, enter System Settings, then Servers, and paste your IPTV UPG portal URL. Restart the device and channels load automatically. Works on MAG 254, 322, 420, 424, and 524. No app installation needed — the built-in Stalker middleware handles everything.
          </div>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* Intro */}
            <section>
              <p>
                MAG set-top boxes, manufactured by Infomir, are purpose-built devices designed exclusively for IPTV and OTT streaming. Unlike general-purpose streaming sticks and smart TVs, MAG boxes run a dedicated Linux-based firmware (Ministra / Stalker middleware) that connects to an IPTV portal URL — providing a seamless, TV-provider-like experience out of the box. There are no apps to install; you simply configure the portal address and your channel list loads automatically.
              </p>
              <p className="mt-3">
                This guide covers the setup process for all popular MAG models including the MAG 254, MAG 322, MAG 420, MAG 424, and MAG 524. Whether you are configuring a new MAG box for the first time or switching to IPTV UPG from another provider, the steps below will guide you through the entire process from unboxing to watching live TV.
              </p>
            </section>

            {/* Supported Models */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Supported MAG Models and Specifications
              </h2>
              <p>
                IPTV UPG works with all Infomir MAG boxes. Here is an overview of the most common models:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">MAG 254 / 256:</strong> Legacy models with MPEG-4 and H.264 support. Limited to SD and 720p HD. Still functional but no longer manufactured.</li>
                <li><strong className="text-text-primary">MAG 322 / 324:</strong> Mid-range boxes with a BCM75839 chipset, 512 MB RAM, HDMI 1.4 output. Supports full HD 1080p. Good for standard IPTV viewing.</li>
                <li><strong className="text-text-primary">MAG 420 / 424:</strong> ARM Cortex-A53 processor, 1 GB RAM, HEVC (H.265) support, HDMI 2.0 for 4K output at 30fps. Great for HD and some 4K content.</li>
                <li><strong className="text-text-primary">MAG 524 / 524w3:</strong> The flagship model with Broadcom chipset, 1 GB RAM, HEVC and VP9 decoding, 4K at 60fps via HDMI 2.1, Dolby Digital Plus audio, and optional dual-band Wi-Fi.</li>
              </ul>
              <p className="mt-3">
                For the best IPTV UPG experience with 4K channels, the MAG 524 is recommended. For HD streaming, any MAG 322 or later model will work perfectly.
              </p>
            </section>

            {/* What You Need */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                MAG Box System Requirements
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">MAG Box:</strong> Any supported model from the list above</li>
                <li><strong className="text-text-primary">HDMI Cable:</strong> Included with most MAG boxes; use HDMI 2.0+ for 4K models</li>
                <li><strong className="text-text-primary">Ethernet Cable:</strong> Wired connection is strongly recommended for MAG boxes. Wi-Fi is only available on W-series models (e.g., MAG 524w3).</li>
                <li><strong className="text-text-primary">Internet Speed:</strong> 20 Mbps minimum for HD, 50 Mbps for 4K</li>
                <li><strong className="text-text-primary">IPTV UPG Subscription:</strong> Active plan with a portal URL and MAC address registration</li>
                <li><strong className="text-text-primary">MAG Remote Control:</strong> Included with the device</li>
              </ul>
            </section>

            {/* Setup Instructions */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Step-by-Step MAG Box Setup
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Step 1: Subscribe and Register Your MAC Address
              </h3>
              <p>
                Visit the{" "}
                <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  IPTV UPG order page
                </a>{" "}
                and purchase a plan. When placing your order, you will need to provide your MAG box MAC address. The MAC address is printed on a sticker on the bottom of the device and starts with 00:1A:79 for Infomir devices. You can also find it by powering on the MAG box and checking Settings &gt; System Information. IPTV UPG will register this MAC address on the server and send you a portal URL via email.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 2: Connect the Hardware
              </h3>
              <p>
                Connect the MAG box to your TV using the HDMI cable. Plug an Ethernet cable from your router into the Ethernet port on the MAG box. Connect the power adapter and turn on the device. The MAG box will boot to the Infomir loading screen and then to the main portal interface or a setup screen.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 3: Access the Settings Menu
              </h3>
              <p>
                Using the MAG remote, press the Menu button or navigate to Settings on the main screen. Go to System Settings &gt; Servers &gt; Portals. You will see two fields: Portal 1 Name and Portal 1 URL (and optionally Portal 2 for a backup).
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 4: Enter the Portal URL
              </h3>
              <p>
                In the Portal 1 Name field, type IPTV UPG (or any name you prefer). In the Portal 1 URL field, carefully enter the portal URL exactly as provided in your IPTV UPG email. Use the on-screen keyboard or the number/letter buttons on the MAG remote. Make sure there are no extra spaces before or after the URL. Press OK or Save.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 5: Restart the MAG Box
              </h3>
              <p>
                After saving the portal URL, go back to System Settings and select Restart Portal or simply unplug the power cable, wait 10 seconds, and plug it back in. The device will reboot and connect to the IPTV UPG portal.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 6: Load Channels and Start Watching
              </h3>
              <p>
                Once the MAG box connects to the portal, it will automatically download the channel list and EPG data. You will see the familiar TV-guide-style interface with channel categories on the left and the program schedule on the right. Use the remote to browse categories, select a channel, and press OK to start playback. Channel switching is nearly instant on the MAG platform.
              </p>
            </section>

            {/* Inner Portal */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Understanding the MAG Portal System
              </h2>
              <p>
                MAG boxes use a middleware system (historically called Stalker, now rebranded as Ministra TV) that manages the connection between your device and the IPTV server. When you enter a portal URL, the MAG box sends its MAC address to the server for authentication. The server verifies that your MAC address is registered and active, then delivers the full channel list, EPG data, and VOD catalog to your device.
              </p>
              <p className="mt-3">
                This MAC-based authentication means you do not need a username or password — your device identity is the login. It also means that if you replace your MAG box, you must contact IPTV UPG support to register the new MAC address. Your subscription is tied to the MAC, not to an account login.
              </p>
              <p className="mt-3">
                Some MAG boxes support a second portal (Portal 2), which you can use as a backup server. If the primary portal goes down, the MAG box can switch to the backup automatically. Contact IPTV UPG support to get a backup portal URL if desired.
              </p>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Troubleshooting MAG Box IPTV Issues
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                MAG box shows &quot;Portal loading error&quot; or &quot;Server not available&quot;
              </h3>
              <p>
                This error means the MAG box cannot reach the portal server. First, verify your internet connection by checking if the Ethernet LED on the MAG box is lit. Go to Settings &gt; System Information &gt; Network and confirm the device has a valid IP address. If the network is fine, double-check the portal URL for typos — even one wrong character will cause the error. Also confirm with IPTV UPG that your MAC address has been registered on the server.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Channels freeze or buffer constantly
              </h3>
              <p>
                MAG boxes perform best on wired Ethernet connections. If you are using Wi-Fi (on W-series models), switch to Ethernet if possible. Check your internet speed using a speed test on another device — you need at least 20 Mbps for reliable HD streaming. If your speed is adequate, the issue may be server-side; try watching at a non-peak time or contact IPTV UPG support for a less congested server.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                No picture or audio on certain channels
              </h3>
              <p>
                Older MAG models (254, 256) do not support HEVC (H.265) decoding. If a channel uses HEVC encoding, it will not play on these devices. Switch to an SD or HD (H.264) version of the channel if available. On newer MAG models (420, 424, 524), ensure the HDMI output resolution matches your TV capabilities: go to Settings &gt; System Settings &gt; Video Output and select the correct resolution (1080p or 2160p).
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                MAG box is stuck on the Infomir boot screen
              </h3>
              <p>
                If the device freezes during boot, it may need a firmware update or factory reset. Hold the Menu button on the remote while powering on the device to access the BIOS/recovery menu. From there, you can reset to factory defaults. After the reset, you will need to re-enter your portal URL. If the problem persists, the firmware may need to be reflashed — contact Infomir support or IPTV UPG for guidance.
              </p>
            </section>

            {/* Device-Specific Compatibility */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                MAG Box Models &amp; Stalker Portal Compatibility
              </h2>
              <p>
                MAG boxes are purpose-built IPTV set-top boxes from Infomir — they don&apos;t run Android or any general OS. Instead, they use Stalker Portal authentication, which ties your account to the device&apos;s MAC address.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">MAG 254 (BCM7362 chip):</strong> 1080p only, no HEVC hardware decode — request H.264 streams from IPTV UPG support. End-of-life for new firmware but still functional.</li>
                <li><strong className="text-text-primary">MAG 322 / 322w1 (BCM7362):</strong> Identical capability to MAG 254 with built-in Wi-Fi on the w1 variant. Avoid for 4K accounts.</li>
                <li><strong className="text-text-primary">MAG 420 / 420w1 (Hisilicon Hi3798MV200):</strong> First 4K-capable MAG — HEVC 10-bit hardware decode, ideal for IPTV UPG 4K channels.</li>
                <li><strong className="text-text-primary">MAG 424 / 424w3 (Hisilicon Hi3798MV300):</strong> Adds Wi-Fi 5 and slightly faster UI rendering. Recommended buy if you want a dedicated IPTV box.</li>
                <li><strong className="text-text-primary">MAG 524 / 524w3:</strong> Newest generation with HDR10 and Dolby Audio passthrough — the best MAG for HDR-mastered VOD content.</li>
              </ul>
              <p className="mt-3">
                <strong className="text-text-primary">MAC address provisioning:</strong> MAG boxes authenticate by MAC, not credentials. After ordering, send IPTV UPG support your MAG&apos;s MAC address (Settings → System Settings → About → Device Information). They activate your portal and you simply reboot. Cloning MAC addresses to other devices violates the terms of service and may trigger account suspension — buy a real MAG box from an authorized reseller.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">Portal URL vs M3U:</strong> MAGs require a Stalker portal URL (typically <code className="rounded bg-bg-card px-1.5 py-0.5 font-mono text-xs">http://portal.iptvupg.com:8080/c/</code> — exact path provided in your activation email). They do not load M3U playlists natively. If you also want to use the account on a phone or laptop, IPTV UPG can issue a parallel M3U on request.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Frequently Asked Questions About IPTV on MAG Box
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Do I need a separate subscription for each MAG box?
              </h3>
              <p>
                Yes. Each MAG box has a unique MAC address, and IPTV subscriptions are bound to a specific MAC. If you have multiple MAG boxes in different rooms, each one requires its own IPTV UPG subscription. IPTV UPG plans include two simultaneous connections, but they are designed for two different devices.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Can I use a MAG box with Wi-Fi instead of Ethernet?
              </h3>
              <p>
                Only MAG models with a W suffix (such as MAG 524w3) have built-in Wi-Fi. Standard MAG models require a wired Ethernet connection. If your MAG box does not have Wi-Fi and running an Ethernet cable is not feasible, you can use a powerline Ethernet adapter kit to send the internet signal through your home electrical wiring to the MAG box location.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                How do I update the firmware on my MAG box?
              </h3>
              <p>
                MAG boxes check for firmware updates automatically when connected to the internet. You can also manually trigger an update by going to Settings &gt; System Settings &gt; Software Update &gt; Check for Update. Always keep your MAG firmware up to date to ensure compatibility with the latest streaming protocols and security patches.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                What happens if I change my internet provider?
              </h3>
              <p>
                Changing your internet provider does not affect your IPTV subscription. The MAG box will connect to the portal from any internet connection. Simply plug the Ethernet cable into your new router, and the MAG box will work exactly as before. No reconfiguration is needed as long as the portal URL and MAC registration remain the same.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Power Up Your MAG Box with IPTV UPG
              </h2>
              <p>
                MAG boxes paired with IPTV UPG deliver a premium cable-TV experience — 24,000+ channels, instant channel switching, and built-in EPG. Set up in 5 minutes.
              </p>
              <p className="mt-2 text-xs text-text-muted">
                All plans include a{" "}
                <Link href="/refund" className="text-accent hover:underline">7-day money-back guarantee</Link>.
              </p>
              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://wa.me/447848197761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  Order Now
                </a>
                <a
                  href="https://wa.me/447848197761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border border-accent px-8 py-3 font-semibold text-accent transition hover:bg-accent/10"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </section>

            {/* Subscription Plans */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-text-primary">
                IPTV Subscription Plans
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Link href="/iptv-free-trial" className="rounded-xl border border-accent/30 bg-accent/5 px-4 py-3 text-sm font-medium text-accent transition hover:bg-accent/10">Free Trial</Link>
                <Link href="/1-month-iptv-subscription" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">1 Month — $16</Link>
                <Link href="/6-months-iptv-subscription" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">6 Months — $60</Link>
                <Link href="/12-months-iptv-subscription" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">12 Months — $90</Link>
              </div>
            </section>

            {/* Related Device Guides */}
            <section>
              <h2 className="mb-4 text-lg font-bold text-text-primary">
                IPTV Setup Guides for Other Devices
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <Link href="/fire-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Fire TV Stick</Link>
                <Link href="/android-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Android</Link>
                <Link href="/samsung-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Samsung TV</Link>
                <Link href="/lg-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">LG TV</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
