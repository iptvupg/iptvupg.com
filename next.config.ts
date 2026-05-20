import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Security ───��─────────────────────────────────────────────────
  poweredByHeader: false,
  compress: true,

  // ─── Image CDN (Vercel) ───────────────���───────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // ─── URL Normalization ────────────────────────────────────────────
  trailingSlash: false,

  // ─── 301 Redirects ──────────────���─────────────────────────────────
  async redirects() {
    return [
      // non-www → www (canonical domain consolidation)
      {
        source: "/:path*",
        has: [{ type: "host", value: "iptvupg.com" }],
        destination: "https://www.iptvupg.com/:path*",
        permanent: true,
      },
      // Country hub URL change
      {
        source: "/iptv-by-country",
        destination: "/countries",
        permanent: true,
      },
      {
        source: "/iptv-service-by-country",
        destination: "/countries",
        statusCode: 301,
      },
    ];
  },

  // ─── Security & Performance Headers ───────────────────────────────
  async headers() {
    return [
      // Global security headers
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          ...(process.env.NODE_ENV === "production"
            ? [
                {
                  key: "Content-Security-Policy",
                  value:
                    "default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://*.analytics.google.com https://www.googletagmanager.com; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
                },
              ]
            : []),
        ],
      },
      // Immutable cache for hashed static assets (production only)
      ...(process.env.NODE_ENV === "production"
        ? [
            {
              source: "/_next/static/(.*)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]
        : []),
      // Long cache for review images
      {
        source: "/reviews/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      // Cache static public assets
      {
        source:
          "/:file(favicon\\.ico|logo\\.png|og-image\\.png|apple-touch-icon\\.png)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=2592000, stale-while-revalidate=86400",
          },
        ],
      },
      // AI crawler-friendly headers for llms.txt and llms-full.txt
      {
        source: "/:file(llms\\.txt|llms-full\\.txt)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=3600",
          },
          { key: "Content-Type", value: "text/plain; charset=utf-8" },
        ],
      },
      // Cache legal HTML pages
      {
        source: "/(privacy|terms|refund|dmca)",
        headers: [
          {
            key: "Cache-Control",
            value:
              "public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
