import { NextResponse } from "next/server";

const INDEXNOW_KEY = "10d2c7691e2d4a999408f5bb3e036ba7";
const HOST = "www.iptvupg.com";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

// All indexable URLs on the site
const ALL_URLS = [
  `https://${HOST}`,
  `https://${HOST}/iptv-free-trial`,
  `https://${HOST}/1-month-iptv-subscription`,
  `https://${HOST}/3-months-iptv-subscription`,
  `https://${HOST}/6-months-iptv-subscription`,
  `https://${HOST}/12-months-iptv-subscription`,
  `https://${HOST}/android-iptv`,
  `https://${HOST}/fire-tv-iptv`,
  `https://${HOST}/apple-tv-iptv`,
  `https://${HOST}/samsung-tv-iptv`,
  `https://${HOST}/lg-tv-iptv`,
  `https://${HOST}/roku-iptv`,
  `https://${HOST}/mag-iptv`,
  `https://${HOST}/macos-iptv`,
  `https://${HOST}/privacy`,
  `https://${HOST}/terms`,
  `https://${HOST}/refund`,
  `https://${HOST}/dmca`,
];

/**
 * POST /api/indexnow — Submit URLs to IndexNow (Bing, Yandex, Naver)
 * Body: { urls?: string[] } — optional, defaults to all site URLs
 *
 * Usage:
 *   curl -X POST https://www.iptvupg.com/api/indexnow
 *   curl -X POST https://www.iptvupg.com/api/indexnow -H "Content-Type: application/json" -d '{"urls":["https://www.iptvupg.com/"]}'
 */
export async function POST(request: Request) {
  try {
    let urls = ALL_URLS;

    // Allow submitting specific URLs
    try {
      const body = await request.json();
      if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
        urls = body.urls;
      }
    } catch {
      // No body or invalid JSON — use all URLs
    }

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList: urls,
    };

    // Submit to IndexNow API (Bing endpoint — distributes to all partners)
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: response.ok,
      status: response.status,
      urlsSubmitted: urls.length,
      urls,
      message: response.ok
        ? `Successfully submitted ${urls.length} URLs to IndexNow`
        : `IndexNow returned status ${response.status}`,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/indexnow — Health check + key info
 */
export async function GET() {
  return NextResponse.json({
    service: "IndexNow",
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    totalUrls: ALL_URLS.length,
    usage: "POST /api/indexnow to submit all URLs, or POST with {urls:[...]} for specific ones",
  });
}
