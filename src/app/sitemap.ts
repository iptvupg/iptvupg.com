import type { MetadataRoute } from "next";
import { INDEXABLE_COUNTRY_SLUGS } from "@/data/country-pages";

/**
 * XML sitemap.
 *
 * Notes:
 *  - `changeFrequency` and `priority` are intentionally omitted; Google has
 *    publicly confirmed both fields are ignored. Bing also does not use them.
 *  - `lastModified` is kept and dated to match each page's content-level
 *    `dateModified` (Article/WebPage schema) where applicable.
 *  - `/upload-reviews` is intentionally excluded (also blocked in robots.ts).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.iptvupg.com";

  // Editorial pillar pages — most recently revised content.
  const pillarLastMod = new Date("2026-05-01");
  // Commercial / device / legal pages — last refreshed in April.
  const standardLastMod = new Date("2026-04-06");

  return [
    // ── Homepage ─────────────────────────────────────────────────────
    { url: baseUrl, lastModified: pillarLastMod },

    // ── Editorial pillars (target high-volume informational + commercial queries)
    { url: `${baseUrl}/best-iptv-service`, lastModified: pillarLastMod },
    { url: `${baseUrl}/what-is-iptv`, lastModified: pillarLastMod },

    // ── Free trial
    { url: `${baseUrl}/iptv-free-trial`, lastModified: standardLastMod },

    // ── Subscription plans
    { url: `${baseUrl}/iptv-subscription`, lastModified: pillarLastMod },
    { url: `${baseUrl}/12-months-iptv-subscription`, lastModified: standardLastMod },
    { url: `${baseUrl}/6-months-iptv-subscription`, lastModified: standardLastMod },
    { url: `${baseUrl}/3-months-iptv-subscription`, lastModified: standardLastMod },
    { url: `${baseUrl}/1-month-iptv-subscription`, lastModified: standardLastMod },

    // ── Device landing pages
    { url: `${baseUrl}/macos-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/android-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/roku-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/samsung-tv-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/lg-tv-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/fire-tv-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/mag-iptv`, lastModified: standardLastMod },
    { url: `${baseUrl}/apple-tv-iptv`, lastModified: standardLastMod },

    // ── Country hub
    { url: `${baseUrl}/countries`, lastModified: pillarLastMod },

    // ── Per-country programmatic pages (only the entries whose copy has been
    //    DMCA-rewritten with safe category descriptors; the rest are
    //    `noindex` and intentionally absent from the sitemap until rewritten).
    ...INDEXABLE_COUNTRY_SLUGS.map((slug) => ({
      url: `${baseUrl}/best-iptv-service-in/${slug}`,
      lastModified: pillarLastMod,
    })),

    // ── Free tools
    { url: `${baseUrl}/m3u-xtream-converter`, lastModified: pillarLastMod },

    // ── About
    { url: `${baseUrl}/about`, lastModified: standardLastMod },

    // ── Legal
    { url: `${baseUrl}/privacy`, lastModified: standardLastMod },
    { url: `${baseUrl}/terms`, lastModified: standardLastMod },
    { url: `${baseUrl}/refund`, lastModified: standardLastMod },
    { url: `${baseUrl}/dmca`, lastModified: standardLastMod },
  ];
}
