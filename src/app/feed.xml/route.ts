const baseUrl = "https://www.iptvupg.com";
const ogImage = `${baseUrl}/opengraph-image`;

const pages = [
  {
    title: "What is IPTV? The Complete 2026 Guide",
    url: `${baseUrl}/what-is-iptv`,
    description: "Internet Protocol Television explained — how it works, devices, pricing, and legality in 2026.",
    date: "2026-05-01",
    category: "Guides",
    keywords: "what is iptv, iptv explained, iptv guide 2026",
  },
  {
    title: "Best IPTV Service in 2026 — Verified Comparison",
    url: `${baseUrl}/best-iptv-service`,
    description: "Seven buying criteria for picking the best IPTV service in 2026, plus how IPTV UPG scores against each.",
    date: "2026-05-01",
    category: "Guides",
    keywords: "best iptv service, best iptv, iptv comparison",
  },
  {
    title: "IPTV Subscription Plans — From $7.50/Month",
    url: `${baseUrl}/iptv-subscription`,
    description: "Compare IPTV UPG subscription plans by duration, price, and value. 24,000+ channels, 4K, 7-day money-back guarantee.",
    date: "2026-05-01",
    category: "Plans",
    keywords: "iptv subscription, iptv plans, iptv pricing",
  },
  {
    title: "IPTV Free Trial — Test 24,000+ Channels Before You Buy",
    url: `${baseUrl}/iptv-free-trial`,
    description: "Try IPTV UPG free for 24 hours. Full access to 24,000+ live channels and 120,000+ movies in 4K. No credit card required, instant activation.",
    date: "2026-05-19",
    category: "Plans",
    keywords: "iptv free trial, iptv test, free iptv, try iptv",
  },
  {
    title: "12 Months IPTV Subscription — Best Value Plan $90/Year",
    url: `${baseUrl}/12-months-iptv-subscription`,
    description: "Get the best value with a 12-month IPTV subscription for just $7.50/month. 24,000+ live channels, 120,000+ movies in 4K.",
    date: "2026-04-06",
    category: "Plans",
    keywords: "12 month iptv, yearly iptv subscription, best iptv deal",
  },
  {
    title: "6 Months IPTV Subscription — $10/Month, 24,000+ Channels",
    url: `${baseUrl}/6-months-iptv-subscription`,
    description: "Get 6 months of premium IPTV for $60 — only $10/month. Stream 24,000+ live channels and 120,000+ movies in 4K.",
    date: "2026-04-06",
    category: "Plans",
    keywords: "6 month iptv, iptv subscription, iptv 6 months",
  },
  {
    title: "3 Months IPTV Subscription — $13/Month, 24,000+ Channels",
    url: `${baseUrl}/3-months-iptv-subscription`,
    description: "Get 3 months of premium IPTV for $39 — only $13/month. Stream 24,000+ live channels and 120,000+ movies in 4K.",
    date: "2026-04-06",
    category: "Plans",
    keywords: "3 month iptv, quarterly iptv subscription",
  },
  {
    title: "1 Month IPTV Subscription — $16, 24,000+ Channels in 4K",
    url: `${baseUrl}/1-month-iptv-subscription`,
    description: "Try premium IPTV for 1 month at $16. Stream 24,000+ live channels and 120,000+ movies in 4K quality. No long-term commitment.",
    date: "2026-04-06",
    category: "Plans",
    keywords: "1 month iptv, monthly iptv, iptv no contract",
  },
  {
    title: "How to Set Up IPTV on Android — Complete Guide 2026",
    url: `${baseUrl}/android-iptv`,
    description: "Learn how to set up IPTV on any Android phone, tablet, or TV box using TiviMate, IPTV Smarters Pro, or Perfect Player.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "android iptv, iptv android setup, tivimate setup",
  },
  {
    title: "How to Set Up IPTV on Fire TV Stick — Complete Guide 2026",
    url: `${baseUrl}/fire-tv-iptv`,
    description: "Step-by-step guide to installing IPTV on Amazon Fire TV Stick and Fire TV Cube.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "firestick iptv, fire tv iptv setup, amazon fire tv iptv",
  },
  {
    title: "How to Set Up IPTV on Apple TV — Complete Guide 2026",
    url: `${baseUrl}/apple-tv-iptv`,
    description: "Set up IPTV on Apple TV 4K and Apple TV HD using GSE Smart IPTV, IPTV Smarters, or iPlayTV.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "apple tv iptv, iptv apple tv setup, tvos iptv",
  },
  {
    title: "How to Set Up IPTV on Samsung Smart TV — Complete Guide 2026",
    url: `${baseUrl}/samsung-tv-iptv`,
    description: "Set up IPTV on your Samsung Smart TV using Smart IPTV, IPTV Smarters, or SS IPTV.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "samsung tv iptv, iptv samsung setup, tizen iptv",
  },
  {
    title: "How to Set Up IPTV on LG Smart TV — Complete Guide 2026",
    url: `${baseUrl}/lg-tv-iptv`,
    description: "Complete guide to setting up IPTV on LG Smart TVs running webOS.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "lg tv iptv, iptv lg setup, webos iptv",
  },
  {
    title: "How to Set Up IPTV on Roku — Complete Guide 2026",
    url: `${baseUrl}/roku-iptv`,
    description: "Step-by-step guide to watching IPTV on Roku devices using sideloading and screen mirroring.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "roku iptv, iptv roku setup, roku screen mirroring iptv",
  },
  {
    title: "How to Set Up IPTV on MAG Box — Complete Guide 2026",
    url: `${baseUrl}/mag-iptv`,
    description: "Complete setup guide for IPTV on MAG 254, MAG 322, MAG 420, MAG 424, and MAG 524 set-top boxes.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "mag iptv, mag box setup, mag 254 iptv, stalker portal",
  },
  {
    title: "How to Set Up IPTV on macOS — Complete Guide 2026",
    url: `${baseUrl}/macos-iptv`,
    description: "Step-by-step guide to setting up IPTV on macOS using IINA, VLC, and GSE Smart IPTV.",
    date: "2026-04-06",
    category: "Setup Guides",
    keywords: "macos iptv, mac iptv setup, iina iptv, vlc iptv mac",
  },
];

export async function GET() {
  const items = pages
    .map(
      (page) => `    <item>
      <title><![CDATA[${page.title}]]></title>
      <link>${page.url}</link>
      <guid isPermaLink="true">${page.url}</guid>
      <description><![CDATA[${page.description}]]></description>
      <category>${page.category}</category>
      <pubDate>${new Date(page.date).toUTCString()}</pubDate>
      <media:content url="${ogImage}" medium="image" type="image/png" width="1200" height="630" />
      <media:thumbnail url="${ogImage}" width="1200" height="630" />
      <media:title type="plain"><![CDATA[${page.title}]]></media:title>
      <media:description type="plain"><![CDATA[${page.description}]]></media:description>
      <media:keywords>${page.keywords}</media:keywords>
      <media:credit role="author">IPTV UPG</media:credit>
      <media:copyright>IPTV UPG 2026</media:copyright>
      <media:rating scheme="urn:simple">nonadult</media:rating>
    </item>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>IPTV UPG — Best IPTV Service 2026</title>
    <link>${baseUrl}</link>
    <description>Premium IPTV subscription service with 24,000+ live channels and 120,000+ movies in 4K. Setup guides, subscription plans, and free trial.</description>
    <language>en-us</language>
    <copyright>IPTV UPG 2026. All rights reserved.</copyright>
    <managingEditor>support@iptvupg.com (IPTV UPG)</managingEditor>
    <webMaster>support@iptvupg.com (IPTV UPG)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>Technology</category>
    <category>Streaming</category>
    <category>IPTV</category>
    <generator>IPTV UPG / Next.js</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${ogImage}</url>
      <title>IPTV UPG</title>
      <link>${baseUrl}</link>
      <width>1200</width>
      <height>630</height>
    </image>
    <media:thumbnail url="${ogImage}" width="1200" height="630" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
