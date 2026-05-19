import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "IPTV on Firestick: Setup Guide for Fire TV Stick 2026",
  description:
    "IPTV on Firestick setup in minutes. Sideload TiviMate or IPTV Smarters on Fire TV Stick, 4K, 4K Max, and Cube. 24,000+ channels with IPTV UPG.",
  alternates: {
    canonical: "https://www.iptvupg.com/fire-tv-iptv",
    languages: {
      "en": "https://www.iptvupg.com/fire-tv-iptv",
      "x-default": "https://www.iptvupg.com/fire-tv-iptv",
    },
  },
  openGraph: {
    title: "IPTV on Firestick: Setup Guide for Fire TV Stick 2026",
    description: "IPTV on Firestick setup in minutes. Sideload TiviMate or IPTV Smarters on any Fire TV device.",
    url: "https://www.iptvupg.com/fire-tv-iptv",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://www.iptvupg.com/fire-tv-iptv#breadcrumb",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.iptvupg.com" },
    { "@type": "ListItem", position: 2, name: "Fire TV IPTV Setup Guide", item: "https://www.iptvupg.com/fire-tv-iptv" },
  ],
};

const techArticleSchema = {
  "@type": "TechArticle",
  "@id": "https://www.iptvupg.com/fire-tv-iptv#article",
  headline: "IPTV on Firestick: Setup Guide for Fire TV Stick 2026",
  description: "Step-by-step guide to installing IPTV on Amazon Fire TV Stick and Fire TV Cube. Use TiviMate, IPTV Smarters Pro, and Downloader to sideload apps. Stream 24,000+ channels.",
  image: ["https://www.iptvupg.com/opengraph-image"],
  inLanguage: "en-US",
  datePublished: "2026-04-06",
  dateModified: "2026-04-06",
  author: { "@id": "https://www.iptvupg.com/#organization" },
  publisher: { "@id": "https://www.iptvupg.com/#organization" },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.iptvupg.com/fire-tv-iptv",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which Fire TV Stick is best for IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Fire TV Stick 4K Max is the best option for IPTV. It has the fastest processor, supports Wi-Fi 6 for better wireless performance, and handles 4K HDR10+ and Dolby Vision content. The standard Fire TV Stick 4K is also an excellent choice. The Fire TV Stick Lite works fine for HD IPTV but lacks 4K output.",
      },
    },
    {
      "@type": "Question",
      name: "Is sideloading safe on Fire TV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sideloading is safe as long as you download APK files from trusted sources such as official developer websites. The Downloader app itself is an official Amazon App Store application and is widely used by millions of Fire TV owners. Always verify the source URL before downloading.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a VPN on Fire TV for IPTV?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Several VPN apps are available on the Amazon App Store for Fire TV, including ExpressVPN, NordVPN, and Surfshark. Install the VPN app, connect to a server, and then open your IPTV player. The VPN will encrypt your traffic and may improve streaming performance if your ISP throttles IPTV traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Can I connect a USB drive to Fire TV for recording?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Fire TV Cube and Fire TV Stick 4K Max support USB storage via OTG adapters. TiviMate Premium can record IPTV streams directly to a connected USB drive. The standard Fire TV Stick and Stick Lite do not support USB storage natively.",
      },
    },
  ],
};

export default function FireTvIptv() {
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
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent"><path d="M20.196 15.12c.265.337-.294 1.73-.542 2.353-.077.19.085.266.257.123 1.106-.926 1.39-2.867 1.166-3.149-.226-.277-2.16-.516-3.341.314-.183.127-.151.304.05.279.665-.08 2.147-.257 2.41.08m-.858.981c-2.064 1.523-5.056 2.333-7.632 2.333-3.611 0-6.862-1.334-9.322-3.555-.194-.176-.02-.414.21-.28 2.655 1.545 5.939 2.477 9.328 2.477 2.287 0 4.803-.476 7.115-1.458.348-.147.642.231.3.483m2.034-3.155a.388.388 0 0 1-.201-.04c-.041-.026-.087-.1-.133-.225l-1.734-4.355a1.79 1.79 0 0 0-.046-.117.266.266 0 0 1-.023-.108c0-.084.049-.128.146-.128h.58c.098 0 .165.014.205.04.04.026.082.102.127.226l1.344 3.823 1.343-3.823c.046-.124.089-.2.128-.226a.402.402 0 0 1 .205-.04h.54c.1 0 .148.044.148.128a.3.3 0 0 1-.025.108c-.016.04-.032.078-.044.117l-1.727 4.355c-.045.124-.09.199-.132.225a.388.388 0 0 1-.201.04zm-3.644.068c-.929 0-1.392-.463-1.392-1.392V8.739h-.706c-.13 0-.197-.066-.197-.196v-.246a.22.22 0 0 1 .045-.147c.03-.031.086-.055.171-.067l.717-.09.127-1.215c.013-.13.082-.196.207-.196h.41c.13 0 .196.066.196.196v1.196h1.276c.13 0 .195.065.195.197v.372c0 .13-.064.196-.195.196h-1.276v2.834c0 .243.055.411.162.51.108.098.293.147.555.147.124 0 .277-.016.46-.049.099-.02.164-.03.197-.03.052 0 .088.014.108.044.02.03.029.077.029.142v.266a.366.366 0 0 1-.04.19c-.026.043-.078.078-.157.103a3.018 3.018 0 0 1-.892.118m-4.665-2.976c.006-.052.011-.137.011-.255 0-.399-.094-.698-.28-.901-.186-.204-.46-.306-.818-.306-.412 0-.732.123-.962.369-.228.245-.36.61-.392 1.093zm-.942 3.07c-.803 0-1.411-.222-1.824-.667-.412-.444-.616-1.102-.616-1.972 0-.83.204-1.475.616-1.937.413-.46.988-.691 1.728-.691.62 0 1.098.176 1.432.524.332.351.5.846.5 1.487 0 .21-.017.422-.05.638-.014.077-.034.13-.064.156-.029.027-.077.04-.142.04h-3.08c.013.563.154.977.418 1.245.265.268.674.403 1.23.403.196 0 .385-.014.564-.04a5.04 5.04 0 0 0 .682-.166l.117-.035a.284.284 0 0 1 .09-.016c.085 0 .125.06.125.177v.276c0 .085-.012.144-.037.18a.441.441 0 0 1-.167.114 3.38 3.38 0 0 1-.701.205 4.236 4.236 0 0 1-.82.079m-5.424-.147c-.13 0-.195-.066-.195-.197v-4.58c0-.13.064-.195.195-.195h.432c.064 0 .116.012.153.039.036.025.06.076.072.146l.07.55c.176-.19.343-.34.499-.452a1.725 1.725 0 0 1 1.02-.323c.079 0 .158.003.235.01.112.014.168.072.168.176v.53c0 .117-.058.177-.178.177-.058 0-.114-.004-.17-.01a1.638 1.638 0 0 0-.18-.01c-.524 0-.973.157-1.346.47v3.472c0 .131-.066.197-.195.197zm-2.249 0c-.13 0-.196-.066-.196-.197v-4.58c0-.13.066-.195.196-.195h.579c.13 0 .195.064.195.195v4.58c0 .131-.065.197-.195.197zm.295-5.856c-.19 0-.339-.054-.447-.16a.581.581 0 0 1-.161-.428c0-.176.054-.318.16-.426.11-.109.257-.163.448-.163.189 0 .337.054.446.163.107.108.16.25.16.426a.581.581 0 0 1-.16.427.608.608 0 0 1-.446.161m-3.625 5.856c-.132 0-.197-.066-.197-.197v-4.01H.195c-.13 0-.195-.066-.195-.197v-.245c0-.065.014-.114.043-.147.03-.033.088-.055.173-.07l.705-.087v-.804c0-1.091.523-1.638 1.57-1.638.248 0 .51.036.784.109.072.019.122.047.152.088.029.038.044.107.044.205v.255c0 .124-.048.186-.148.186-.058 0-.14-.01-.248-.029-.11-.02-.23-.03-.369-.03-.3 0-.51.057-.633.172-.121.115-.181.303-.181.564v.903h1.324c.131 0 .197.064.197.195v.373c0 .13-.066.197-.197.197H1.892v4.01c0 .131-.065.197-.196.197Z" /></svg>
          </div>
          <h1 className="mb-3 text-[clamp(28px,4vw,42px)] font-black">
            How to Set Up IPTV on Fire TV Stick — Complete Guide 2026
          </h1>
          <p className="mb-6 text-sm text-text-muted">
            Updated: April 6, 2026
          </p>
          <div className="mb-10 rounded-xl border border-accent/20 bg-accent/5 px-5 py-4 text-sm leading-relaxed text-text-secondary">
            <strong className="text-text-primary">TL;DR:</strong> To set up IPTV on a Fire TV Stick, enable Developer Options, install the Downloader app, sideload TiviMate or IPTV Smarters Pro, and enter your IPTV UPG credentials. Works on Fire TV Stick Lite, 4K, 4K Max, and Fire TV Cube. Setup takes about 10 minutes and gives you access to 24,000+ channels in 4K.
          </div>

          <div className="space-y-10 text-[15px] leading-relaxed text-text-secondary">
            {/* Intro */}
            <section>
              <p>
                The Amazon Fire TV Stick is one of the most popular devices for IPTV streaming. It is affordable, powerful enough for 4K HDR playback, and runs a modified version of Android called Fire OS. This means you can install many Android IPTV apps on it — either directly from the Amazon App Store or by sideloading APK files. The compact form factor means you can plug it into any TV with an HDMI port and turn it into a full IPTV entertainment system.
              </p>
              <p className="mt-3">
                This guide covers setup for the Fire TV Stick Lite, Fire TV Stick 4K, Fire TV Stick 4K Max, and Fire TV Cube. We will walk through installing TiviMate and IPTV Smarters Pro using the Downloader app for sideloading, as well as direct Amazon App Store installation where available. Every step is explained for beginners, with advanced tips for experienced users.
              </p>
            </section>

            {/* Requirements */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Fire TV System Requirements
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">Devices Supported:</strong> Fire TV Stick Lite, Fire TV Stick (3rd Gen), Fire TV Stick 4K, Fire TV Stick 4K Max, Fire TV Cube (all generations)</li>
                <li><strong className="text-text-primary">Fire OS Version:</strong> Fire OS 7 or later (all current models ship with this)</li>
                <li><strong className="text-text-primary">Internet Speed:</strong> 20 Mbps minimum for HD; 50 Mbps recommended for 4K HDR</li>
                <li><strong className="text-text-primary">Storage:</strong> 8 GB internal (approximately 5 GB usable). IPTV apps use 50-150 MB each.</li>
                <li><strong className="text-text-primary">Connection:</strong> Wi-Fi 5 (802.11ac) or Wi-Fi 6 built-in. For the most stable streams, use the Amazon Ethernet Adapter for Fire TV (sold separately) to connect via wired Ethernet.</li>
                <li><strong className="text-text-primary">Amazon Account:</strong> Required to access the App Store and manage the device</li>
              </ul>
            </section>

            {/* Recommended Apps */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Recommended IPTV Apps for Fire TV
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                1. TiviMate — Best IPTV Experience on Fire TV
              </h3>
              <p>
                TiviMate delivers a cable-TV-like experience with a full-screen EPG, channel grouping, recording to USB drives, and catch-up TV. Its interface is designed for remote control navigation, making it feel native on Fire TV. TiviMate is not available on the Amazon App Store, so it must be sideloaded using the Downloader app. The free version supports one playlist, while TiviMate Premium adds multiple playlists, scheduled recordings, and UI customization.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                2. IPTV Smarters Pro — Easiest Xtream Codes Setup
              </h3>
              <p>
                IPTV Smarters Pro is available directly on the Amazon App Store for Fire TV, so no sideloading is needed. It features a modern interface with sections for Live TV, Movies, Series, and Catch-Up. Login is straightforward: enter your Xtream Codes server URL, username, and password. The app supports parental controls, multiple user profiles, and external player integration for advanced codec support.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                3. Downloader — Essential Sideloading Tool
              </h3>
              <p>
                Downloader is not an IPTV player itself, but it is essential for sideloading apps that are not in the Amazon App Store. Developed by AFTVnews, it is a trusted and widely used tool in the Fire TV community. With Downloader, you can enter a URL to download any APK file directly to your Fire TV, then install it with a few clicks. This is how you install TiviMate and other premium IPTV apps.
              </p>
            </section>

            {/* Setup Instructions */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Step-by-Step Setup Instructions
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Step 1: Subscribe to IPTV UPG
              </h3>
              <p>
                Go to the{" "}
                <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer" className="font-semibold text-accent hover:underline">
                  IPTV UPG order page
                </a>{" "}
                and choose your subscription. Check your email for the Xtream Codes login (server URL, username, password) and M3U URL.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 2: Enable Developer Options
              </h3>
              <p>
                On your Fire TV, navigate to Settings &gt; My Fire TV &gt; Developer Options. If you do not see Developer Options, go to Settings &gt; My Fire TV &gt; About and click on your Fire TV name seven times rapidly. Developer Options will then appear. Enable Apps from Unknown Sources (or Install Unknown Apps on newer Fire OS versions). This allows you to install APK files from outside the Amazon App Store.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 3: Install the Downloader App
              </h3>
              <p>
                From the Fire TV Home screen, go to Find &gt; Search and type Downloader. Select the orange Downloader app by AFTVnews and click Get / Download. Wait for the installation to finish. You will use this app to download IPTV player APKs.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 4: Sideload TiviMate
              </h3>
              <p>
                Open the Downloader app. In the URL field, type the download link for the TiviMate APK (available from the official TiviMate website — search for the latest version URL). Click Go. Downloader will download the APK file. When the download completes, a prompt will appear asking you to install the app — click Install. Once installed, click Done. You can delete the downloaded APK file to free up storage.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 5: Alternatively, Install IPTV Smarters from the App Store
              </h3>
              <p>
                If you prefer to skip sideloading, search for IPTV Smarters Pro in the Amazon App Store directly from your Fire TV. Click Get to install it. No developer options or Downloader needed for this method.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 6: Configure Your IPTV App
              </h3>
              <p>
                <strong className="text-text-primary">TiviMate:</strong> Open TiviMate from your apps list. On first launch, it will ask you to add a playlist. Select Xtream Codes and enter your server URL, username, and password. Click Next and wait for channels to load. The full EPG will populate after a few minutes.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">IPTV Smarters Pro:</strong> Open the app and select Login with Xtream Codes API. Enter a connection name (e.g., IPTV UPG), your server URL, username, and password. Click Add User. Content will load into Live TV, Movies, and Series categories.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Step 7: Start Streaming
              </h3>
              <p>
                Use the Fire TV remote to navigate through channel categories. In TiviMate, press the OK button to open the channel list, use Up/Down to scroll, and press OK to select a channel. Press the Left button during playback to open the mini EPG. In IPTV Smarters, navigate the on-screen menu with the directional pad and click any channel to start.
              </p>
            </section>

            {/* Troubleshooting */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Troubleshooting Fire TV IPTV Issues
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Sideloaded app does not appear on Home screen
              </h3>
              <p>
                Fire OS sometimes hides sideloaded apps from the main launcher. To find them, go to Settings &gt; Applications &gt; Manage Installed Applications and scroll to find TiviMate. Click it and select Launch Application. To add a shortcut to your Home screen, long-press the Home button on the remote and select Apps, then find the sideloaded app in the list and move it to your front row.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Buffering or low-quality playback
              </h3>
              <p>
                The Fire TV Stick relies on Wi-Fi, which can be inconsistent. For a stable connection, use the Amazon Ethernet Adapter (plugs into the micro-USB or USB-C port depending on your model). If Ethernet is not an option, move your router closer to the Fire TV or use a Wi-Fi mesh system. In TiviMate, increase the buffer size under Settings &gt; Player &gt; Buffer size to 3-5 seconds. Also close other apps running in the background by going to Settings &gt; Applications &gt; Manage Installed Applications and force-stopping unused apps.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                App crashes or displays an error on launch
              </h3>
              <p>
                Clear the app cache: Settings &gt; Applications &gt; Manage Installed Applications &gt; [App Name] &gt; Clear Cache. If the problem persists, uninstall and reinstall the app. For sideloaded apps, re-download the APK via Downloader and install the latest version. Also ensure your Fire OS is up to date: Settings &gt; My Fire TV &gt; About &gt; Check for Updates.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Fire TV running out of storage
              </h3>
              <p>
                Fire TV Sticks have limited internal storage (8 GB total, about 5 GB usable). If you run out of space, remove unused apps and clear cached data. After sideloading with Downloader, always delete the downloaded APK files — they remain in the Downloader folder and consume space. Go to Downloader &gt; Files to find and delete old APK downloads.
              </p>
            </section>

            {/* Device-Specific Compatibility */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Fire TV Hardware Models &amp; Fire OS Compatibility
              </h2>
              <p>
                Amazon ships several Fire TV variants, and they behave very differently when streaming IPTV in 4K. The chipset and Fire OS branch dictate which apps sideload cleanly and how reliably HEVC decodes.
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6">
                <li><strong className="text-text-primary">Fire TV Cube (3rd gen, 2022):</strong> Octa-core 2.2 GHz, 4K HDR10+, Dolby Vision, Wi-Fi 6E — the best Fire device for IPTV UPG, runs TiviMate flawlessly.</li>
                <li><strong className="text-text-primary">Fire TV Stick 4K Max (2nd gen, 2023):</strong> 2 GB RAM, Wi-Fi 6E — handles 4K live streams well; recommended for new buyers.</li>
                <li><strong className="text-text-primary">Fire TV Stick 4K (2018/2023):</strong> Capable of 4K but the 1.5 GB RAM 2018 model occasionally stutters on TiviMate with large EPG XML files — clear the EPG cache weekly.</li>
                <li><strong className="text-text-primary">Fire TV Stick (Lite / 3rd gen HD):</strong> 1080p only. Use IPTV Smarters Pro instead of TiviMate for less RAM pressure and force 720p/1080p streams in app settings.</li>
              </ul>
              <p className="mt-3">
                <strong className="text-text-primary">Fire OS version &amp; sideloading:</strong> Fire OS 7 (Android 9) and Fire OS 8 (Android 11) both support sideloading via the Downloader app. On Fire OS 8, you must first enable Install Unknown Apps from Settings → My Fire TV → Developer Options (the menu is hidden by default — tap the build number 7 times under About to reveal it). Use Downloader to fetch TiviMate&apos;s APK directly since it is removed from the Amazon Appstore.
              </p>
              <p className="mt-3">
                <strong className="text-text-primary">Disable Amazon overlays:</strong> Fire TV launches Amazon&apos;s home screen on every boot. Use the Launcher Manager method (sideload Wolf Launcher or Project Lemur) only if you accept the trade-offs — many users prefer leaving the default launcher and just opening TiviMate from Your Apps. Disable Featured Content under Settings → Preferences to free RAM and reduce ads while channel-surfing.
              </p>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Frequently Asked Questions About IPTV on Fire TV
              </h2>

              <h3 className="mb-2 text-base font-semibold text-text-primary">
                Which Fire TV Stick is best for IPTV?
              </h3>
              <p>
                The Fire TV Stick 4K Max is the best option for IPTV. It has the fastest processor, supports Wi-Fi 6 for better wireless performance, and handles 4K HDR10+ and Dolby Vision content. The standard Fire TV Stick 4K is also an excellent choice at a slightly lower price. The Fire TV Stick Lite works fine for HD IPTV but lacks 4K output.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Is sideloading safe on Fire TV?
              </h3>
              <p>
                Sideloading is safe as long as you download APK files from trusted sources such as official developer websites. The Downloader app itself is an official Amazon App Store application and is widely used by millions of Fire TV owners. Always verify the source URL before downloading and avoid APK files from unknown or suspicious websites.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Can I use a VPN on Fire TV for IPTV?
              </h3>
              <p>
                Yes. Several VPN apps are available on the Amazon App Store for Fire TV, including ExpressVPN, NordVPN, and Surfshark. Install the VPN app, connect to a server, and then open your IPTV player. The VPN will encrypt your traffic and may improve streaming performance if your ISP throttles IPTV traffic.
              </p>

              <h3 className="mb-2 mt-6 text-base font-semibold text-text-primary">
                Can I connect a USB drive to Fire TV for recording?
              </h3>
              <p>
                The Fire TV Cube and Fire TV Stick 4K Max support USB storage via OTG adapters. TiviMate Premium can record IPTV streams directly to a connected USB drive. The standard Fire TV Stick and Stick Lite do not support USB storage natively, so recording is not available on those models.
              </p>
            </section>

            {/* CTA */}
            <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center">
              <h2 className="mb-4 text-xl font-bold text-text-primary">
                Turn Your Fire TV Into a Live TV Machine
              </h2>
              <p>
                IPTV UPG delivers 24,000+ channels and 120,000+ on-demand titles to your Fire TV Stick or Cube. Setup takes under 10 minutes with our step-by-step guide.
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
                <Link href="/android-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Android</Link>
                <Link href="/samsung-tv-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Samsung TV</Link>
                <Link href="/roku-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">Roku</Link>
                <Link href="/mag-iptv" className="rounded-xl border border-border bg-bg-card px-4 py-3 text-sm font-medium text-text-secondary transition hover:border-accent/40 hover:text-accent">MAG Box</Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
