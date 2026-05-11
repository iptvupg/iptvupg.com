import { NextResponse } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/indexing"];
const INDEXING_API = "https://indexing.googleapis.com/v3/urlNotifications:publish";

// All indexable URLs
const ALL_URLS = [
  "https://www.iptvupg.com",
  "https://www.iptvupg.com/iptv-free-trial",
  "https://www.iptvupg.com/1-month-iptv-subscription",
  "https://www.iptvupg.com/3-months-iptv-subscription",
  "https://www.iptvupg.com/6-months-iptv-subscription",
  "https://www.iptvupg.com/12-months-iptv-subscription",
  "https://www.iptvupg.com/android-iptv",
  "https://www.iptvupg.com/fire-tv-iptv",
  "https://www.iptvupg.com/apple-tv-iptv",
  "https://www.iptvupg.com/samsung-tv-iptv",
  "https://www.iptvupg.com/lg-tv-iptv",
  "https://www.iptvupg.com/roku-iptv",
  "https://www.iptvupg.com/mag-iptv",
  "https://www.iptvupg.com/macos-iptv",
  "https://www.iptvupg.com/privacy",
  "https://www.iptvupg.com/terms",
  "https://www.iptvupg.com/refund",
  "https://www.iptvupg.com/dmca",
];

/**
 * Create a JWT and exchange it for a Google access token
 */
async function getAccessToken(): Promise<string> {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKeyPem = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !privateKeyPem) {
    throw new Error("Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY env vars");
  }

  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: email,
    scope: SCOPES.join(" "),
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };

  const encode = (obj: object) =>
    Buffer.from(JSON.stringify(obj)).toString("base64url");

  const unsignedToken = `${encode(header)}.${encode(payload)}`;

  // Import the private key and sign the JWT
  const key = await crypto.subtle.importKey(
    "pkcs8",
    pemToBuffer(privateKeyPem),
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    key,
    new TextEncoder().encode(unsignedToken)
  );

  const jwt = `${unsignedToken}.${Buffer.from(signature).toString("base64url")}`;

  // Exchange JWT for access token
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  const tokenData = await tokenRes.json();
  if (!tokenData.access_token) {
    throw new Error(`Token exchange failed: ${JSON.stringify(tokenData)}`);
  }

  return tokenData.access_token;
}

/**
 * Convert PEM private key to ArrayBuffer
 */
function pemToBuffer(pem: string): ArrayBuffer {
  const base64 = pem
    .replace("-----BEGIN PRIVATE KEY-----", "")
    .replace("-----END PRIVATE KEY-----", "")
    .replace(/\s/g, "");
  const binary = atob(base64);
  const buffer = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    buffer[i] = binary.charCodeAt(i);
  }
  return buffer.buffer;
}

/**
 * Submit a single URL to Google Indexing API
 */
async function submitUrl(
  url: string,
  type: "URL_UPDATED" | "URL_DELETED",
  accessToken: string
): Promise<{ url: string; success: boolean; status: number; response: unknown }> {
  const res = await fetch(INDEXING_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ url, type }),
  });

  const data = await res.json();
  return { url, success: res.ok, status: res.status, response: data };
}

/**
 * POST /api/google-indexing — Submit URLs to Google Indexing API
 * Body: { urls?: string[], type?: "URL_UPDATED" | "URL_DELETED" }
 */
export async function POST(request: Request) {
  try {
    let urls = ALL_URLS;
    let type: "URL_UPDATED" | "URL_DELETED" = "URL_UPDATED";

    try {
      const body = await request.json();
      if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
        urls = body.urls;
      }
      if (body.type === "URL_DELETED") {
        type = "URL_DELETED";
      }
    } catch {
      // No body — use defaults
    }

    const accessToken = await getAccessToken();

    const results = [];
    for (const url of urls) {
      const result = await submitUrl(url, type, accessToken);
      results.push(result);
      // Small delay to avoid rate limiting (200 requests/day limit)
      await new Promise((r) => setTimeout(r, 100));
    }

    const succeeded = results.filter((r) => r.success).length;
    const failed = results.filter((r) => !r.success).length;

    return NextResponse.json({
      success: failed === 0,
      type,
      total: urls.length,
      succeeded,
      failed,
      results,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}

/**
 * GET /api/google-indexing — Health check
 */
export async function GET() {
  const hasCredentials =
    !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL && !!process.env.GOOGLE_PRIVATE_KEY;

  return NextResponse.json({
    service: "Google Indexing API",
    configured: hasCredentials,
    serviceAccount: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "not set",
    totalUrls: ALL_URLS.length,
    dailyLimit: "200 requests/day",
    usage: "POST /api/google-indexing to submit all URLs as URL_UPDATED",
  });
}
