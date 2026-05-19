import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      // Explicitly allow AI crawlers for GEO visibility
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      // Google-Extended controls inclusion in Google AI training data
      // (Gemini, Vertex AI generative APIs). Allow for AI citation visibility.
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      // Common Crawl — corpus source for many LLMs (Anthropic, Mistral, Meta).
      {
        userAgent: "CCBot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      // Apple Intelligence / Siri / Spotlight summaries.
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
      {
        userAgent: "Applebot-Extended",
        allow: "/",
        disallow: ["/api/", "/upload-reviews"],
      },
    ],
    sitemap: "https://www.iptvupg.com/sitemap.xml",
  };
}
