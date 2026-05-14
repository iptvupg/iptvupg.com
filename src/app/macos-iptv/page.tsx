import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV on Mac: macOS Setup Guide with IINA & VLC 2026",
  description:
    "IPTV on Mac setup using IINA, VLC, or GSE Smart IPTV. Stream 24,000+ live channels in 4K on any MacBook or iMac with IPTV UPG.",
  alternates: {
    canonical: "https://www.iptvupg.com/macos-iptv",
  },
  openGraph: {
    title: "IPTV on Mac: macOS Setup Guide with IINA & VLC 2026",
    description: "IPTV on Mac setup using IINA, VLC, or GSE Smart IPTV. 24,000+ live channels on any MacBook or iMac.",
    url: "https://www.iptvupg.com/macos-iptv",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvupg.com/macos-iptv#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "macOS IPTV Setup Guide", item: "https://www.iptvupg.com/macos-iptv" },
  ],
};

const techArticleSchema = {
  "@type": "TechArticle",
  "@id": "https://www.iptvupg.com/macos-iptv#article",
  headline: "IPTV on Mac: macOS Setup Guide with IINA & VLC 2026",
  description: "Step-by-step guide to setting up IPTV on macOS using IINA, VLC, and GSE Smart IPTV. Stream 24,000+ live channels on your Mac with IPTV UPG.",
  image: ["https://www.iptvupg.com/opengraph-image"],
  inLanguage: "en-US",
  proficiencyLevel: "Beginner",
  datePublished: "2026-04-06",
  dateModified: "2026-05-14",
  author: { "@id": "https://www.iptvupg.com/#organization" },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.iptvupg.com/macos-iptv",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  "@id": "https://www.iptvupg.com/macos-iptv#faq",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I watch IPTV in Picture-in-Picture mode on macOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. IINA and VLC both support macOS Picture-in-Picture. In IINA, right-click the video and select Picture in Picture. In VLC, use the Window menu. This lets you watch live TV in a floating window while working in other applications.",
      },
    },
    {
      "@type": "Question",
      name: "Does IPTV work on older Intel Macs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, IPTV works on Intel-based Macs running macOS 12 or later. However, 4K streams may cause high CPU usage on older models. If you experience lag on an Intel Mac, switch to HD-quality streams for smoother playback.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a way to record live TV on macOS?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "VLC has a built-in recording feature. During playback, go to Playback > Record. The stream will be saved to your default recording directory. Note that recording is intended for personal time-shifting use only and must comply with all applicable copyright laws.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AirPlay to stream IPTV from my Mac to Apple TV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. With macOS Screen Mirroring or AirPlay, you can send your IPTV stream from your Mac to any Apple TV on the same network. Click the Control Center icon in the menu bar, select Screen Mirroring, and choose your Apple TV.",
      },
    },
  ],
};

export default function MacOsIptv() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              breadcrumbSchema,
              techArticleSchema,
              {
                "@type": "Service",
                "@id": "https://www.iptvupg.com/macos-iptv#service",
                name: "IPTV UPG on macOS",
                serviceType: "IPTV Streaming Service",
                provider: { "@id": "https://www.iptvupg.com/#organization" },
                areaServed: ["US", "GB", "CA", "AU"],
                url: "https://www.iptvupg.com/macos-iptv",
                offers: {
                  "@type": "AggregateOffer",
                  priceCurrency: "USD",
                  lowPrice: "16.00",
                  highPrice: "90.00",
                  offerCount: 4,
                  url: "https://www.iptvupg.com/iptv-subscription",
                },
              },
              faqSchema,
            ],
          }),
        }}
      />
      <Header />
      <main id="main-content" className="px-6 pt-32 pb-20">
        <article className="mx-auto max-w-[800px]">
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-bg-card">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent"><path d="M0 14.727h.941v-2.453c0-.484.318-.835.771-.835.439 0 .71.276.71.722v2.566h.915V12.25c0-.48.31-.812.764-.812.46 0 .718.28.718.77v2.518h.94v-2.748c0-.801-.517-1.334-1.307-1.334-.578 0-1.054.31-1.247.805h-.023c-.147-.514-.552-.805-1.118-.805-.545 0-.968.306-1.142.771H.903v-.695H0v4.006zm7.82-.646c-.408 0-.68-.208-.68-.537 0-.318.26-.522.714-.552l.926-.057v.307c0 .483-.427.839-.96.839zm-.284.71c.514 0 1.017-.268 1.248-.703h.018v.639h.908v-2.76c0-.804-.647-1.33-1.64-1.33-1.021 0-1.66.537-1.701 1.285h.873c.06-.332.344-.548.79-.548.464 0 .748.242.748.662v.287l-1.058.06c-.976.061-1.524.488-1.524 1.199 0 .721.564 1.209 1.338 1.209zm6.305-2.642c-.065-.843-.719-1.512-1.777-1.512-1.164 0-1.92.805-1.92 2.087 0 1.3.756 2.082 1.928 2.082 1.005 0 1.697-.59 1.772-1.485h-.888c-.087.453-.397.725-.873.725-.597 0-.982-.483-.982-1.322 0-.824.381-1.323.975-1.323.502 0 .8.321.876.748h.889zm2.906-2.967c-1.591 0-2.589 1.085-2.589 2.82 0 1.735.998 2.816 2.59 2.816 1.586 0 2.584-1.081 2.584-2.816 0-1.735-.997-2.82-2.585-2.82zm0 .832c.971 0 1.591.77 1.591 1.988 0 1.213-.62 1.984-1.59 1.984-.976 0-1.592-.77-1.592-1.984 0-1.217.616-1.988 1.591-1.988zm2.982 3.178c.042 1.006.866 1.626 2.12 1.626 1.32 0 2.151-.65 2.151-1.686 0-.813-.469-1.27-1.576-1.523l-.627-.144c-.67-.158-.945-.37-.945-.733 0-.453.415-.756 1.032-.756.623 0 1.05.306 1.096.817h.93c-.023-.96-.817-1.61-2.019-1.61-1.187 0-2.03.653-2.03 1.62 0 .78.477 1.263 1.482 1.494l.707.166c.688.163.967.39.967.782 0 .454-.457.779-1.115.779-.665 0-1.167-.329-1.228-.832h-.945z" /></svg>
          </div>
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            How to Set Up IPTV on macOS — Complete Guide 2026
          </h1>
          <p className="mb-6 text-sm text-text-muted">
            Updated: April 6, 2026
          </p>
          <div className="mb-10 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-text-secondary">
            <strong className="text-text-primary">TL;DR:</strong> To watch IPTV on a Mac, install IINA (free, best quality), VLC (free, most compatible), or GSE Smart IPTV (M3U and Xtream support). Open your IPTV UPG M3U playlist URL in the player and start streaming 24,000+ channels. Works on any MacBook, iMac, Mac Mini, or Mac Pro running macOS 12 Monterey or later.
          </div>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* Intro */}
            <section>
              <p>
                macOS is one of the most versatile platforms for streaming IPTV content thanks to its powerful hardware, excellent display quality, and a wide selection of media players. Whether you own a MacBook Air, MacBook Pro, iMac, or Mac Mini, setting up IPTV takes just a few minutes once you know which app to use and how to configure it.
              </p>
              <p className="mt-3">
                In this guide, we walk you through every step of setting up IPTV UPG on your Mac. We cover three recommended players — IINA, VLC Media Player, and GSE Smart IPTV — along with system requirements, troubleshooting advice, and answers to frequently asked questions. By the end, you will be streaming over 24,000 live channels and 120,000 on-demand titles directly on your macOS device.
              </p>
            </section>

            {/* System Requirements */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                macOS System Requirements
              </h2>
              <p>
                Before you begin, make sure your Mac meets the following minimum requirements for smooth IPTV playback:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">Operating System:</strong> macOS 12 Monterey or later (macOS 14 Sonoma or macOS 15 Sequoia recommended)</li>
                <li><strong className="text-text-primary">Processor:</strong> Apple M1 chip or Intel Core i5 (2018 or newer)</li>
                <li><strong className="text-text-primary">RAM:</strong> 8 GB minimum</li>
                <li><strong className="text-text-primary">Internet Speed:</strong> 25 Mbps minimum for HD; 50 Mbps or higher recommended for 4K streams</li>
                <li><strong className="text-text-primary">Storage:</strong> At least 500 MB free for the IPTV application</li>
                <li><strong className="text-text-primary">Connection:</strong> Ethernet or a strong 5 GHz Wi-Fi connection for the best experience</li>
              </ul>
            </section>

            {/* Recommended Apps */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Recommended IPTV Apps for macOS
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                1. IINA — Best Native macOS Player
              </h3>
              <p>
                IINA is a free, open-source media player built specifically for macOS. It features a sleek native interface that follows Apple design guidelines, supports hardware-accelerated decoding on both Intel and Apple Silicon chips, and handles M3U playlists natively. IINA leverages mpv under the hood, meaning it supports virtually every video codec and streaming protocol you will encounter, including HLS and MPEG-TS streams commonly used by IPTV providers.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                2. VLC Media Player — Most Versatile Option
              </h3>
              <p>
                VLC has been a trusted media player for decades and remains one of the most reliable options for IPTV on macOS. It is completely free, supports every major video and audio format, and can open network streams directly via URL. VLC also offers advanced features such as stream recording, subtitle synchronization, and audio equalization. Its cross-platform nature means the setup process is virtually identical whether you are on macOS, Windows, or Linux.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                3. GSE Smart IPTV — Best for EPG and Playlist Management
              </h3>
              <p>
                GSE Smart IPTV is available on the Mac App Store and provides a dedicated IPTV experience with built-in electronic program guide (EPG) support, favorites management, and the ability to import multiple playlists. It supports M3U, Xtream Codes API, and JSON-format playlists. GSE is ideal for users who want an all-in-one solution with a more TV-like interface on their Mac.
              </p>
            </section>

            {/* Step-by-step Guide */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Step-by-Step Setup Instructions
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Step 1: Get Your IPTV UPG Subscription
              </h3>
              <p>
                Visit the{" "}
                <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  IPTV UPG order page
                </a>{" "}
                and choose a plan that fits your needs. After payment, you will receive an email containing your M3U playlist URL and, if applicable, your Xtream Codes login details (server URL, username, and password). Keep these credentials handy — you will need them in the next steps.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 2: Install Your Preferred IPTV Player
              </h3>
              <p>
                <strong className="text-text-primary">For IINA:</strong> Go to iina.io and download the latest release. Open the DMG file, drag IINA to your Applications folder, and launch it. On first launch, macOS may prompt you to confirm the app is from an identified developer — click Open to proceed.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">For VLC:</strong> Visit videolan.org and download VLC for macOS. Install it the same way — drag the app to Applications. VLC is notarized by Apple, so there should be no security prompts.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">For GSE Smart IPTV:</strong> Open the Mac App Store, search for GSE Smart IPTV, and click Get to install it. The app is free to download with optional in-app purchases.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 3: Add Your M3U Playlist
              </h3>
              <p>
                <strong className="text-text-primary">In IINA:</strong> Open IINA, go to File in the menu bar, and select Open URL. Paste your M3U playlist URL and click Open. IINA will parse the playlist and begin loading channel data.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">In VLC:</strong> Open VLC, go to File &gt; Open Network. Paste your M3U URL into the URL field and click Open. To save the playlist for future use, go to Media &gt; Save Playlist and choose a local directory.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">In GSE Smart IPTV:</strong> Launch the app, tap the hamburger menu in the upper-left corner, select Remote Playlists, then tap the plus (+) icon. Enter a name for the playlist (e.g., IPTV UPG), paste your M3U URL, and tap Add. Alternatively, select Xtream Codes API and enter your server URL, username, and password.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 4: Load the EPG (Electronic Program Guide)
              </h3>
              <p>
                If you received an EPG URL along with your subscription, add it in your player settings. In GSE Smart IPTV, go to Settings &gt; EPG Source and paste the URL. In VLC and IINA, EPG is not natively supported, but you can view programming schedules on the IPTV UPG web portal.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 5: Start Streaming
              </h3>
              <p>
                Your channel list should now be fully loaded. Browse by category — Sports, News, Entertainment, Movies, Kids — or use the search function to jump to a specific channel. Click any channel name to begin playback instantly.
              </p>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Troubleshooting macOS IPTV Issues
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Streams buffering or stuttering
              </h3>
              <p>
                Buffering on macOS is almost always a network issue. Switch from Wi-Fi to a wired Ethernet connection using a USB-C to Ethernet adapter if your Mac lacks a built-in port. Close bandwidth-heavy applications such as cloud sync tools (Dropbox, iCloud Drive) and torrent clients. In VLC, increase the network caching value under Preferences &gt; Input / Codecs &gt; Network caching (try 3000 ms). If you are on Apple Silicon, ensure your player is running natively rather than through Rosetta 2 for better performance.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Playlist fails to load or shows an error
              </h3>
              <p>
                Double-check that your M3U URL is correct and that your subscription is active. Try pasting the URL directly into Safari — if it starts downloading an M3U file, the link is valid. If the URL opens but the player still fails, the file may be too large for the player to parse in one pass. Try using the Xtream Codes API login method in GSE Smart IPTV instead, which loads channels on demand rather than all at once.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                No audio on certain channels
              </h3>
              <p>
                Some IPTV channels use AAC or AC3 audio codecs that require specific decoder support. In VLC, make sure the audio output module is set to your correct output device under Preferences &gt; Audio. In IINA, open Preferences &gt; Audio and confirm the output device matches your speakers or headphones. Restart the stream after making changes.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                macOS firewall blocking the stream
              </h3>
              <p>
                If streams fail to connect, check System Settings &gt; Network &gt; Firewall. Either turn off the firewall temporarily to test, or add your IPTV player to the list of allowed applications. Also make sure any third-party security software (such as Little Snitch or Lulu) is not blocking outgoing connections from the player.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Frequently Asked Questions About IPTV on macOS
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Can I watch IPTV in Picture-in-Picture mode on macOS?
              </h3>
              <p>
                Yes. IINA and VLC both support macOS Picture-in-Picture. In IINA, right-click the video and select Picture in Picture. In VLC, use the Window menu. This lets you watch live TV in a floating window while working in other applications.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Does IPTV work on older Intel Macs?
              </h3>
              <p>
                Yes, IPTV works on Intel-based Macs running macOS 12 or later. However, 4K streams may cause high CPU usage on older models. If you experience lag on an Intel Mac, switch to HD-quality streams for smoother playback.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Is there a way to record live TV on macOS?
              </h3>
              <p>
                VLC has a built-in recording feature. During playback, go to Playback &gt; Record. The stream will be saved to your default recording directory. Note that recording is intended for personal time-shifting use only and must comply with all applicable copyright laws.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Can I use AirPlay to stream IPTV from my Mac to Apple TV?
              </h3>
              <p>
                Absolutely. With macOS Screen Mirroring or AirPlay, you can send your IPTV stream from your Mac to any Apple TV on the same network. Click the Control Center icon in the menu bar, select Screen Mirroring, and choose your Apple TV. This is a great option if your Apple TV does not have a dedicated IPTV app installed.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Ready to Stream on Your Mac?
              </h2>
              <p>
                Get instant access to 24,000+ live channels and 120,000+ movies and series. IPTV UPG works perfectly on every Mac — MacBook, iMac, Mac Mini, and Mac Pro.
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
                <Link href="/apple-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Apple TV</Link>
                <Link href="/fire-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Fire TV Stick</Link>
                <Link href="/android-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Android</Link>
                <Link href="/roku-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Roku</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
