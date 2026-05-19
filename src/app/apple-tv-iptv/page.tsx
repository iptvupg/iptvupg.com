import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV on Apple TV: Setup Guide for 4K & HD 2026",
  description:
    "IPTV on Apple TV setup using GSE Smart IPTV, IPTV Smarters, or iPlayTV. Stream 24,000+ live channels in 4K on tvOS with IPTV UPG.",
  alternates: {
    canonical: "https://www.iptvupg.com/apple-tv-iptv",
    languages: {
      "en": "https://www.iptvupg.com/apple-tv-iptv",
      "x-default": "https://www.iptvupg.com/apple-tv-iptv",
    },
  },
  openGraph: {
    title: "IPTV on Apple TV: Setup Guide for 4K & HD 2026",
    description: "IPTV on Apple TV setup using GSE Smart IPTV, IPTV Smarters, or iPlayTV. 24,000+ channels in 4K.",
    url: "https://www.iptvupg.com/apple-tv-iptv",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvupg.com/apple-tv-iptv#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "Apple TV IPTV Setup Guide", item: "https://www.iptvupg.com/apple-tv-iptv" },
  ],
};

const techArticleSchema = {
  "@type": "TechArticle",
  "@id": "https://www.iptvupg.com/apple-tv-iptv#article",
  headline: "IPTV on Apple TV: Setup Guide for 4K & HD 2026",
  description: "Set up IPTV on Apple TV 4K and Apple TV HD using GSE Smart IPTV, IPTV Smarters, or iPlayTV. Stream 24,000+ live channels on tvOS with IPTV UPG.",
  image: ["https://www.iptvupg.com/opengraph-image"],
  inLanguage: "en-US",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@id": "https://www.iptvupg.com/#organization" },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.iptvupg.com/apple-tv-iptv",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does IPTV work on the Apple TV 3rd generation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The Apple TV 3rd generation does not have an App Store and cannot install third-party apps. You need the Apple TV HD (4th generation) or any Apple TV 4K to use IPTV apps. The Apple TV 3rd gen can only use AirPlay mirroring from an iPhone, iPad, or Mac running an IPTV app.",
      },
    },
    {
      "@type": "Question",
      name: "Is iPlayTV worth paying for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you want the most native-feeling IPTV experience on Apple TV, iPlayTV is worth the investment. Its live channel previews, picture-in-picture support, and tvOS-native design set it apart from free alternatives. However, GSE Smart IPTV and IPTV Smarters are both excellent free options.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use AirPlay to send IPTV from my iPhone to Apple TV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If you have an IPTV app running on your iPhone or iPad, you can AirPlay the video to your Apple TV. However, installing an IPTV app directly on the Apple TV provides a much better experience with native remote control support.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a VPN on Apple TV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Starting with tvOS 17, Apple TV supports native VPN apps from the App Store. Install your preferred VPN directly on the Apple TV, connect to a server, and then open your IPTV app. On older tvOS versions, you can configure a VPN on your router to cover all devices on the network.",
      },
    },
  ],
};

export default function AppleTvIptv() {
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent"><path d="M20.57 17.735h-1.815l-3.34-9.203h1.633l2.02 5.987c.075.231.273.9.586 2.012l.297-.997.33-1.006 2.094-6.004H24zm-5.344-.066a5.76 5.76 0 0 1-1.55.207c-1.23 0-1.84-.693-1.84-2.087V9.646h-1.063V8.532h1.121V7.081l1.476-.602v2.062h1.707v1.113H13.38v5.805c0 .446.074.75.214.932.14.182.396.264.75.264.207 0 .495-.041.883-.115zm-7.29-5.343c.017 1.764 1.55 2.358 1.567 2.366-.017.042-.248.842-.808 1.658-.487.71-.99 1.418-1.79 1.435-.783.016-1.03-.462-1.93-.462-.89 0-1.17.445-1.913.478-.758.025-1.344-.775-1.838-1.484-.998-1.451-1.765-4.098-.734-5.88.51-.89 1.426-1.451 2.416-1.46.75-.016 1.468.512 1.93.512.461 0 1.327-.627 2.234-.536.38.016 1.452.157 2.136 1.154-.058.033-1.278.743-1.27 2.219M6.468 7.988c.404-.495.685-1.18.61-1.864-.585.025-1.294.388-1.723.883-.38.437-.71 1.138-.619 1.806.652.05 1.328-.338 1.732-.825Z" /></svg>
          </div>
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            How to Set Up IPTV on Apple TV — Complete Guide 2026
          </h1>
          <p className="mb-6 text-sm text-text-muted">
            Updated: April 6, 2026
          </p>
          <div className="mb-10 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-text-secondary">
            <strong className="text-text-primary">TL;DR:</strong> To set up IPTV on Apple TV, download GSE Smart IPTV, IPTV Smarters, or iPlayTV from the App Store, add your IPTV UPG playlist via Xtream Codes or M3U URL, and start watching. Compatible with Apple TV 4K and Apple TV HD running tvOS 15 or later. Stream 24,000+ channels with full EPG support.
          </div>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* Intro */}
            <section>
              <p>
                Apple TV is a premium streaming device known for its polished tvOS interface, Siri voice control, and tight integration with the Apple ecosystem. While Apple does not make a dedicated IPTV app, the tvOS App Store hosts several excellent third-party IPTV players that work seamlessly with IPTV UPG. Apple TV hardware — particularly the Apple TV 4K — delivers outstanding video quality with support for 4K HDR, Dolby Vision, and Dolby Atmos, making it one of the best platforms for high-quality IPTV playback.
              </p>
              <p className="mt-3">
                In this guide, we walk through how to set up IPTV on both the Apple TV 4K (2021, 2022, and 2024 models) and the Apple TV HD. We cover three recommended apps — GSE Smart IPTV, IPTV Smarters, and iPlayTV — with detailed instructions for each. We also include system requirements, troubleshooting tips, and answers to frequently asked questions specific to the Apple TV platform.
              </p>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Apple TV System Requirements
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">Devices Supported:</strong> Apple TV HD (4th generation), Apple TV 4K (1st, 2nd, and 3rd generation)</li>
                <li><strong className="text-text-primary">Operating System:</strong> tvOS 16 or later (tvOS 18 recommended for the latest features)</li>
                <li><strong className="text-text-primary">Processor:</strong> A8 chip (Apple TV HD), A10X / A12 / A15 Bionic (Apple TV 4K models)</li>
                <li><strong className="text-text-primary">Internet Speed:</strong> 25 Mbps for HD, 50 Mbps for 4K HDR/Dolby Vision</li>
                <li><strong className="text-text-primary">Connection:</strong> Built-in Ethernet (Apple TV 4K 2022+) or Wi-Fi 6. Older 4K models require a USB-C to Ethernet adapter or Wi-Fi.</li>
                <li><strong className="text-text-primary">Apple ID:</strong> Required to download apps from the tvOS App Store</li>
                <li><strong className="text-text-primary">Storage:</strong> 32 GB or 64 GB internal storage (IPTV apps use minimal space)</li>
              </ul>
              <p className="mt-3">
                Note: The older Apple TV 3rd generation (the small black box without an App Store) does not support third-party apps and cannot run IPTV players. You need the Apple TV HD (4th gen) or any Apple TV 4K model.
              </p>
            </section>

            {/* Recommended Apps */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Recommended IPTV Apps for Apple TV
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                1. GSE Smart IPTV — Best All-Around IPTV Player
              </h3>
              <p>
                GSE Smart IPTV is a feature-rich IPTV player available directly on the tvOS App Store. It supports M3U playlists, Xtream Codes API, and JSON-format playlists. The app provides a full electronic program guide, favorites management, parental controls, and the ability to manage multiple playlists. Its interface adapts well to the Apple TV remote with swipe-based navigation. GSE Smart IPTV is free to download with optional in-app purchases to remove ads and unlock advanced features.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                2. IPTV Smarters — Best for Xtream Codes Login
              </h3>
              <p>
                IPTV Smarters is available on the tvOS App Store and offers a clean, Netflix-style interface organized into Live TV, Movies, Series, and Catch-Up sections. It supports direct Xtream Codes API login, so you simply enter your server URL, username, and password to get started. The app provides channel search, favorites, and multi-language support. It handles the Apple TV Siri Remote well, with responsive scrolling and intuitive menu navigation.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                3. iPlayTV — Best Native tvOS Experience
              </h3>
              <p>
                iPlayTV is a premium IPTV player designed exclusively for Apple TV. It offers a native tvOS experience with a channel grid, live preview thumbnails, picture-in-picture support, and a full EPG that looks and feels like a built-in Apple feature. iPlayTV supports M3U playlists and Xtream Codes connections. It is a paid app (one-time purchase) but is widely considered the most polished IPTV player on tvOS.
              </p>
            </section>

            {/* Setup Instructions */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Step-by-Step Setup with GSE Smart IPTV
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Step 1: Subscribe to IPTV UPG
              </h3>
              <p>
                Visit the{" "}
                <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  IPTV UPG order page
                </a>{" "}
                and pick a plan. After payment, check your email for your M3U URL and Xtream Codes credentials (server URL, username, password).
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 2: Install GSE Smart IPTV
              </h3>
              <p>
                On your Apple TV, navigate to the App Store from the Home screen. Use the search icon (magnifying glass) and type GSE Smart IPTV. Select the app from the results and click Get. If prompted, authenticate with your Apple ID or use Touch ID / Face ID on a paired iPhone. The app will download and appear on your Home screen.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 3: Add Your Playlist via Xtream Codes
              </h3>
              <p>
                Open GSE Smart IPTV. From the main menu, navigate to the Xtream Codes API section. Tap the + (Add) button. Enter a name for the connection (e.g., IPTV UPG). Fill in the server URL, username, and password from your IPTV UPG email. Tap Add or Save. The app will connect to the server and begin loading your channel list.
              </p>
              <p className="mt-3">
                Alternatively, to add an M3U playlist: from the main menu, go to Remote Playlists, tap the + button, enter a name, paste your M3U URL, and tap Add. The playlist will download and parse — this may take a minute for large playlists.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 4: Add the EPG
              </h3>
              <p>
                In GSE Smart IPTV, go to Settings (gear icon), then EPG Source. Tap Add EPG Source and paste the EPG URL provided in your IPTV UPG email. Save the setting. The app will download the program guide data, which populates alongside your channel list.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 5: Browse and Watch
              </h3>
              <p>
                Return to the main menu and select Live TV. Your channels will be organized by category — Sports, Entertainment, News, Movies, Kids, and more. Use the Siri Remote touchpad to swipe through channels and press the clickpad to select one. Playback begins immediately. Swipe down during playback to access audio tracks and subtitle options.
              </p>
            </section>

            {/* Alternative: IPTV Smarters */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Alternative Setup with IPTV Smarters
              </h2>
              <p>
                Install IPTV Smarters from the tvOS App Store. Open the app and choose Login with Xtream Codes API. Enter your connection name, server URL, username, and password. Tap Add User. The app will connect and present your content in organized sections: Live TV, Movies, Series, and Catch-Up. Navigate using the Siri Remote and click on any channel or title to begin playback. IPTV Smarters handles most video codecs natively and provides a smooth streaming experience on Apple TV hardware.
              </p>
            </section>

            {/* Alternative: iPlayTV */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Alternative Setup with iPlayTV
              </h2>
              <p>
                Purchase and install iPlayTV from the tvOS App Store. Open the app, go to Settings, and tap Add Playlist. Choose Xtream Codes API or M3U URL depending on your preference. Enter your IPTV UPG credentials and save. iPlayTV will download the channel list and EPG automatically. The main interface shows a channel grid with live preview thumbnails, making it easy to see what is airing at a glance. iPlayTV also supports Picture-in-Picture, so you can browse channels while watching a live stream in a corner of the screen.
              </p>
            </section>

            {/* Siri Remote Tips */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Using the Siri Remote for IPTV
              </h2>
              <p>
                The Apple TV Siri Remote works well with all three recommended IPTV apps. Here are some tips for navigating IPTV content efficiently:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">Swipe up/down:</strong> Scroll through channel lists or categories</li>
                <li><strong className="text-text-primary">Click the touchpad:</strong> Select a channel or confirm an action</li>
                <li><strong className="text-text-primary">Press Menu:</strong> Go back one screen or exit the current view</li>
                <li><strong className="text-text-primary">Press and hold the TV button:</strong> Return to the Home screen at any time</li>
                <li><strong className="text-text-primary">Swipe down during playback:</strong> Access audio tracks, subtitles, and stream info</li>
                <li><strong className="text-text-primary">Press Play/Pause:</strong> Toggle playback on live streams</li>
              </ul>
              <p className="mt-3">
                If you find the touchpad too sensitive for scrolling through long channel lists, go to Apple TV Settings &gt; Remotes and Devices &gt; Touch Surface Tracking and adjust the sensitivity to Slow.
              </p>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Troubleshooting Apple TV IPTV Issues
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                App cannot connect or shows a loading error
              </h3>
              <p>
                Verify that your Apple TV is connected to the internet by going to Settings &gt; Network. Check that your IPTV UPG subscription is active and that the credentials are entered correctly — server URLs and passwords are case-sensitive. Try restarting the Apple TV by going to Settings &gt; System &gt; Restart. If the app still cannot connect, try the M3U URL method instead of Xtream Codes, or vice versa, to isolate the issue.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Video stutters or buffers on 4K channels
              </h3>
              <p>
                Apple TV 4K supports 4K streaming, but your network must keep up. Use a wired Ethernet connection if possible — the 2022 and 2024 Apple TV 4K models have a built-in Ethernet port. If using Wi-Fi, ensure you are on the 5 GHz band and that the Apple TV is within good range of the router. In the IPTV app settings, try reducing the stream quality from 4K to 1080p to see if buffering stops. Close background apps on the Apple TV by double-clicking the TV button and swiping up on unused apps.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                No sound on certain channels
              </h3>
              <p>
                Some IPTV channels broadcast in Dolby Digital or AAC 5.1 surround sound. If your Apple TV is connected to TV speakers (not a soundbar or AV receiver), the surround audio may not decode properly. Go to Apple TV Settings &gt; Video and Audio &gt; Audio Format and change it from Auto to Stereo. This forces all audio to standard two-channel output, which works with any speaker setup.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Entering long URLs is tedious with the Siri Remote
              </h3>
              <p>
                Typing on the Apple TV on-screen keyboard can be frustrating. Use the Remote app on your iPhone to type text — when the Apple TV keyboard appears, the iPhone will offer a notification to type on the phone instead. You can also use Siri: press and hold the Siri button and dictate the URL character by character. Another option is to use the Xtream Codes API login method, which requires only a short server URL, username, and password — much less to type than a full M3U link.
              </p>
            </section>

            {/* Device-Specific Compatibility */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Apple TV Hardware Models &amp; tvOS Compatibility
              </h2>
              <p>
                Apple keeps the Apple TV lineup small, which makes compatibility predictable — but tvOS version and chip generation still affect which IPTV apps you can install and how smoothly 4K HEVC plays.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">Apple TV 4K (2022, A15 Bionic):</strong> Best in class — 4K Dolby Vision, HDR10+, HEVC 10-bit hardware decode. Plays every IPTV UPG stream including AV1 1080p VOD via software.</li>
                <li><strong className="text-text-primary">Apple TV 4K (2021, A12):</strong> Identical 4K capabilities; AV1 plays back on CPU and may stutter — prefer HEVC streams.</li>
                <li><strong className="text-text-primary">Apple TV 4K (2017, A10X):</strong> Still supported on tvOS 17/18; HEVC 4K solid, no AV1, no Dolby Vision Profile 8.1.</li>
                <li><strong className="text-text-primary">Apple TV HD (4th gen, A8):</strong> Capped at 1080p — fine for IPTV UPG&apos;s SD/HD live channel mix, drop to 720p in app settings if buffering occurs.</li>
              </ul>
              <p className="mt-3">
                <strong className="text-text-primary">tvOS version requirements:</strong> GSE Smart IPTV requires tvOS 14+; iPlayTV requires tvOS 13+; IPTV Smarters Pro requires tvOS 12+. If you are on tvOS 11 or earlier (rare), Apple no longer ships updates — upgrade the hardware. App Store IPTV apps in tvOS cannot sideload via Xcode without a paid Apple Developer account, so stick to App Store options or use AirPlay 2 from an iPhone running IPTV Smarters.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">Siri Remote quirks:</strong> The 2nd-gen Siri Remote (with the dedicated power button) works seamlessly with all three apps, but the original 1st-gen touch remote can mis-fire when scrubbing the EPG in GSE — use the Apple TV Remote in iOS Control Center for precise channel selection in busy guide views.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Frequently Asked Questions About IPTV on Apple TV
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Does IPTV work on the Apple TV 3rd generation?
              </h3>
              <p>
                No. The Apple TV 3rd generation does not have an App Store and cannot install third-party apps. You need the Apple TV HD (4th generation) or any Apple TV 4K to use IPTV apps. The Apple TV 3rd gen can only use AirPlay mirroring from an iPhone, iPad, or Mac running an IPTV app.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Is iPlayTV worth paying for?
              </h3>
              <p>
                If you want the most native-feeling IPTV experience on Apple TV, iPlayTV is worth the investment. Its live channel previews, picture-in-picture support, and tvOS-native design set it apart from free alternatives. However, GSE Smart IPTV and IPTV Smarters are both excellent free options that handle IPTV UPG content perfectly well.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Can I use AirPlay to send IPTV from my iPhone to Apple TV?
              </h3>
              <p>
                Yes. If you have an IPTV app running on your iPhone or iPad, you can AirPlay the video to your Apple TV. Open the IPTV app, start playing a channel, then tap the AirPlay icon and select your Apple TV. However, installing an IPTV app directly on the Apple TV provides a much better experience with native remote control support and no reliance on your phone staying awake.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Can I use a VPN on Apple TV?
              </h3>
              <p>
                Starting with tvOS 17, Apple TV supports native VPN apps from the App Store. Install your preferred VPN (ExpressVPN, NordVPN, Surfshark, etc.) directly on the Apple TV, connect to a server, and then open your IPTV app. On older tvOS versions without native VPN support, you can configure a VPN on your router to cover all devices on the network, including Apple TV.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Experience IPTV at Its Best on Apple TV
              </h2>
              <p>
                Apple TV 4K paired with IPTV UPG delivers stunning 4K HDR live TV, Dolby Atmos audio, and 24,000+ channels at your fingertips. Get started in minutes.
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
                <Link href="/macos-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">macOS</Link>
                <Link href="/fire-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Fire TV Stick</Link>
                <Link href="/roku-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Roku</Link>
                <Link href="/samsung-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Samsung TV</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
