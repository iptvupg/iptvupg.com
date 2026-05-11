const baseUrl = "https://www.iptvupg.com";
const ogImage = `${baseUrl}/opengraph-image`;

const pages = [
  {
    title: "IPTV Free Trial — Test 24,000+ Channels Before You Buy",
    url: `${baseUrl}/iptv-free-trial`,
    summary: "Try IPTV UPG free. Full access to 24,000+ live channels and 120,000+ movies in 4K. No credit card required, instant activation.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "12 Months IPTV Subscription — Best Value Plan $90/Year",
    url: `${baseUrl}/12-months-iptv-subscription`,
    summary: "Get the best value with a 12-month IPTV subscription for just $7.50/month. 24,000+ live channels, 120,000+ movies in 4K.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "6 Months IPTV Subscription — $10/Month, 24,000+ Channels",
    url: `${baseUrl}/6-months-iptv-subscription`,
    summary: "Get 6 months of premium IPTV for $60 — only $10/month. Stream 24,000+ live channels and 120,000+ movies in 4K.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "3 Months IPTV Subscription — $13/Month, 24,000+ Channels",
    url: `${baseUrl}/3-months-iptv-subscription`,
    summary: "Get 3 months of premium IPTV for $39 — only $13/month. Stream 24,000+ live channels and 120,000+ movies in 4K.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "1 Month IPTV Subscription — $16, 24,000+ Channels in 4K",
    url: `${baseUrl}/1-month-iptv-subscription`,
    summary: "Try premium IPTV for 1 month at $16. Stream 24,000+ live channels and 120,000+ movies in 4K quality. No long-term commitment.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on Android — Complete Guide 2026",
    url: `${baseUrl}/android-iptv`,
    summary: "Learn how to set up IPTV on any Android phone, tablet, or TV box using TiviMate, IPTV Smarters Pro, or Perfect Player.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on Fire TV Stick — Complete Guide 2026",
    url: `${baseUrl}/fire-tv-iptv`,
    summary: "Step-by-step guide to installing IPTV on Amazon Fire TV Stick and Fire TV Cube.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on Apple TV — Complete Guide 2026",
    url: `${baseUrl}/apple-tv-iptv`,
    summary: "Set up IPTV on Apple TV 4K and Apple TV HD using GSE Smart IPTV, IPTV Smarters, or iPlayTV.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on Samsung Smart TV — Complete Guide 2026",
    url: `${baseUrl}/samsung-tv-iptv`,
    summary: "Set up IPTV on your Samsung Smart TV using Smart IPTV, IPTV Smarters, or SS IPTV.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on LG Smart TV — Complete Guide 2026",
    url: `${baseUrl}/lg-tv-iptv`,
    summary: "Complete guide to setting up IPTV on LG Smart TVs running webOS.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on Roku — Complete Guide 2026",
    url: `${baseUrl}/roku-iptv`,
    summary: "Step-by-step guide to watching IPTV on Roku devices using sideloading and screen mirroring.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on MAG Box — Complete Guide 2026",
    url: `${baseUrl}/mag-iptv`,
    summary: "Complete setup guide for IPTV on MAG 254, MAG 322, MAG 420, MAG 424, and MAG 524 set-top boxes.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
  {
    title: "How to Set Up IPTV on macOS — Complete Guide 2026",
    url: `${baseUrl}/macos-iptv`,
    summary: "Step-by-step guide to setting up IPTV on macOS using IINA, VLC, and GSE Smart IPTV.",
    created: "2026-04-06T00:00:00Z",
    modified: "2026-04-06T00:00:00Z",
  },
];

export async function GET() {
  const entries = pages
    .map(
      (page) => `  <entry>
    <title>${escapeXml(page.title)}</title>
    <link rel="alternate" type="text/html" href="${page.url}" />
    <id>${page.url}</id>
    <issued>${page.created}</issued>
    <modified>${page.modified}</modified>
    <summary type="text/plain">${escapeXml(page.summary)}</summary>
    <author>
      <name>IPTV UPG</name>
      <url>${baseUrl}</url>
      <email>support@iptvupg.com</email>
    </author>
  </entry>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<feed version="0.3" xmlns="http://purl.org/atom/ns#">
  <title>IPTV UPG — Best IPTV Service 2026</title>
  <link rel="alternate" type="text/html" href="${baseUrl}" />
  <link rel="self" type="application/atom+xml" href="${baseUrl}/atom.xml" />
  <tagline>Premium IPTV subscription service with 24,000+ live channels and 120,000+ movies in 4K. Setup guides, subscription plans, and free trial.</tagline>
  <id>${baseUrl}/atom.xml</id>
  <modified>${new Date().toISOString()}</modified>
  <generator url="${baseUrl}" version="1.0">IPTV UPG / Next.js</generator>
  <copyright>IPTV UPG 2026. All rights reserved.</copyright>
  <info>Atom 0.3 feed for IPTV UPG — premium IPTV service provider.</info>
  <author>
    <name>IPTV UPG</name>
    <url>${baseUrl}</url>
    <email>support@iptvupg.com</email>
  </author>
${entries}
</feed>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/atom+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
