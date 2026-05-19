import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatIsIPTV from "@/components/WhatIsIPTV";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import DeviceSection from "@/components/DeviceSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://www.iptvupg.com",
    languages: {
      "en": "https://www.iptvupg.com",
      "x-default": "https://www.iptvupg.com",
    },
  },
};

/* ─────────────────────────────────────────────────────────────────────────────
   JSON-LD Structured Data — Consolidated @graph
   All schemas use https://schema.org (not http).
   All URLs are absolute. Dates are ISO 8601.
───────────────────────────────────────────────────────────────────────────── */

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    /* ── ORGANIZATION ──────────────────────────────────────────────────── */
    {
      "@type": "Organization",
      "@id": "https://www.iptvupg.com/#organization",
      name: "IPTV UPG",
      url: "https://www.iptvupg.com",
      logo: {
        "@type": "ImageObject",
        "@id": "https://www.iptvupg.com/#logo",
        url: "https://www.iptvupg.com/opengraph-image",
        width: 1200,
        height: 630,
        caption: "IPTV UPG — Best IPTV Service",
      },
      description:
        "IPTV UPG is a premium IPTV service provider offering IPTV subscription plans with 24,000+ live TV channels and 120,000+ movies in 4K/UHD quality. One of the best IPTV services with 99.9% uptime and instant activation.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+447848197761",
        contactType: "customer support",
        email: "support@iptvupg.com",
        availableLanguage: [
          { "@type": "Language", name: "English" },
          { "@type": "Language", name: "Romanian" },
        ],
      },
      sameAs: [
        "https://twitter.com/iptvupg",
        "https://instagram.com/iptvupg",
        "https://www.trustpilot.com/review/iptvupg.com",
        "https://www.youtube.com/@IPTVUPG",
        "https://www.facebook.com/iptvupg",
        "https://www.linkedin.com/company/iptvupg",
        "https://www.crunchbase.com/organization/iptv-upg",
      ],
    },

    /* ── WEBSITE ────────────────────────────────────────────────────────── */
    {
      "@type": "WebSite",
      "@id": "https://www.iptvupg.com/#website",
      name: "IPTV UPG",
      alternateName: "IPTVUPG",
      url: "https://www.iptvupg.com",
      publisher: {
        "@id": "https://www.iptvupg.com/#organization",
      },
    },

    /* ── SERVICE ─────────────────────────────────────────────────────────
       Reinforces "provider" nature beyond Product. Helps AI engines and
       Google understand IPTV UPG offers an ongoing service, not a SKU. */
    {
      "@type": "Service",
      "@id": "https://www.iptvupg.com/#service",
      name: "IPTV UPG Streaming Service",
      alternateName: "Best IPTV Service",
      description:
        "Premium IPTV streaming service delivering 24,000+ live TV channels and 120,000+ movies in 4K/UHD over internet protocol. 99.9% uptime, instant activation, free trial.",
      url: "https://www.iptvupg.com",
      provider: { "@id": "https://www.iptvupg.com/#organization" },
      serviceType: "Internet Protocol Television (IPTV)",
      category: "Streaming Service",
      areaServed: { "@type": "Place", name: "Worldwide" },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IPTV UPG Subscription Plans",
        itemListElement: [
          { "@type": "Offer", name: "1 Month IPTV Plan", price: "16.00", priceCurrency: "USD", url: "https://www.iptvupg.com/1-month-iptv-subscription" },
          { "@type": "Offer", name: "3 Month IPTV Plan", price: "39.00", priceCurrency: "USD", url: "https://www.iptvupg.com/3-months-iptv-subscription" },
          { "@type": "Offer", name: "6 Month IPTV Plan", price: "60.00", priceCurrency: "USD", url: "https://www.iptvupg.com/6-months-iptv-subscription" },
          { "@type": "Offer", name: "12 Month IPTV Plan", price: "90.00", priceCurrency: "USD", url: "https://www.iptvupg.com/12-months-iptv-subscription" },
        ],
      },
    },

    /* ── SPEAKABLE — voice-assistant paragraph selection ──────────────── */
    {
      "@type": "WebPage",
      "@id": "https://www.iptvupg.com/#webpage",
      url: "https://www.iptvupg.com",
      isPartOf: { "@id": "https://www.iptvupg.com/#website" },
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["h1", ".speakable"],
      },
    },

    /* ── BREADCRUMB ───────────────────────────────────────────────────── */
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.iptvupg.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.iptvupg.com",
        },
      ],
    },

    /* ── SITE NAVIGATION — helps Google generate sitelinks ─────────── */
    {
      "@type": "SiteNavigationElement",
      "@id": "https://www.iptvupg.com/#navigation",
      name: "Main Navigation",
      hasPart: [
        { "@type": "WebPage", name: "IPTV Free Trial", url: "https://www.iptvupg.com/iptv-free-trial" },
        { "@type": "WebPage", name: "1 Month IPTV Subscription", url: "https://www.iptvupg.com/1-month-iptv-subscription" },
        { "@type": "WebPage", name: "3 Months IPTV Subscription", url: "https://www.iptvupg.com/3-months-iptv-subscription" },
        { "@type": "WebPage", name: "6 Months IPTV Subscription", url: "https://www.iptvupg.com/6-months-iptv-subscription" },
        { "@type": "WebPage", name: "12 Months IPTV Subscription", url: "https://www.iptvupg.com/12-months-iptv-subscription" },
        { "@type": "WebPage", name: "IPTV on Android", url: "https://www.iptvupg.com/android-iptv" },
        { "@type": "WebPage", name: "IPTV on Fire TV Stick", url: "https://www.iptvupg.com/fire-tv-iptv" },
        { "@type": "WebPage", name: "IPTV on Samsung TV", url: "https://www.iptvupg.com/samsung-tv-iptv" },
        { "@type": "WebPage", name: "IPTV on Apple TV", url: "https://www.iptvupg.com/apple-tv-iptv" },
      ],
    },

    /* ── PRODUCT ────────────────────────────────────────────────────────── */
    {
      "@type": "Product",
      "@id": "https://www.iptvupg.com/#product",
      name: "IPTV UPG Subscription",
      sku: "IPTVUPG-SUB",
      description:
        "Premium IPTV subscription service with 24,000+ live TV channels and 120,000+ movies in 4K/UHD quality. Anti-freeze technology, 99.9% uptime, instant activation.",
      image: ["https://www.iptvupg.com/opengraph-image"],
      brand: {
        "@id": "https://www.iptvupg.com/#organization",
      },
      sameAs: "https://www.trustpilot.com/review/iptvupg.com",
      offers: [
        {
          "@type": "Offer",
          name: "1 Month Plan",
          price: "16.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.iptvupg.com/1-month-iptv-subscription",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://www.iptvupg.com/#organization",
          },
          hasMerchantReturnPolicy: {
            "@id": "https://www.iptvupg.com/refund#return-policy",
          },
        },
        {
          "@type": "Offer",
          name: "3 Month Plan",
          price: "39.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.iptvupg.com/3-months-iptv-subscription",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://www.iptvupg.com/#organization",
          },
          hasMerchantReturnPolicy: {
            "@id": "https://www.iptvupg.com/refund#return-policy",
          },
        },
        {
          "@type": "Offer",
          name: "6 Month Plan",
          price: "60.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.iptvupg.com/6-months-iptv-subscription",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://www.iptvupg.com/#organization",
          },
          hasMerchantReturnPolicy: {
            "@id": "https://www.iptvupg.com/refund#return-policy",
          },
        },
        {
          "@type": "Offer",
          name: "12 Month Plan",
          price: "90.00",
          priceCurrency: "USD",
          priceValidUntil: "2027-12-31",
          availability: "https://schema.org/InStock",
          url: "https://www.iptvupg.com/12-months-iptv-subscription",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@id": "https://www.iptvupg.com/#organization",
          },
          hasMerchantReturnPolicy: {
            "@id": "https://www.iptvupg.com/refund#return-policy",
          },
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        bestRating: "5",
        worstRating: "1",
        ratingCount: 6620,
        reviewCount: 6620,
      },
      review: [
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Oliver" },
          datePublished: "2026-03-15",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody:
            "It works well. As always you are the best.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Henry" },
          datePublished: "2026-03-18",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody: "GREAT! Thank you so much!",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Adeline" },
          datePublished: "2026-03-20",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody:
            "It's working perfectly at the moment.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Harper" },
          datePublished: "2026-03-22",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody:
            "I will definitely recommend your services.",
        },
        {
          "@type": "Review",
          author: { "@type": "Person", name: "Nicole" },
          datePublished: "2026-03-25",
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
            worstRating: "1",
          },
          reviewBody:
            "I recommend this service to everyone.",
        },
      ],
    },

    /* ── MERCHANT RETURN POLICY (referenced by all offers) ──────────── */
    {
      "@type": "MerchantReturnPolicy",
      "@id": "https://www.iptvupg.com/refund#return-policy",
      applicableCountry: ["US", "GB", "CA", "AU"],
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 7,
      returnFees: "https://schema.org/FreeReturn",
    },

    /* ── FAQPAGE ────────────────────────────────────────────────────── */
    /*
     * Commercial site — FAQPage does NOT produce rich results in Google
     * Search (restricted to government/healthcare since August 2023).
     * Retained for GEO value: AI systems (SGE, ChatGPT, Perplexity)
     * actively use FAQPage for structured answer extraction.
     */
    {
      "@type": "FAQPage",
      "@id": "https://www.iptvupg.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is IPTV and how does it differ from cable?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "IPTV (Internet Protocol Television) streams live TV channels and on-demand content over your internet connection instead of through coaxial cable or satellite. Unlike cable — which charges $80–$120/month for 150–300 channels — IPTV providers like IPTV UPG deliver 24,000+ channels starting at $7.50/month, in 4K, with no installation, no equipment rental, and no contract. You watch on devices you already own: Smart TV, Fire Stick, Apple TV, Roku, phone, or laptop. A full EPG (Electronic Program Guide) is included so you can browse channels exactly like cable.",
          },
        },
        {
          "@type": "Question",
          name: "What makes IPTV UPG the best IPTV service in 2026?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Three measurable advantages: (1) Channel count — 24,000+ live channels and 120,000+ on-demand titles, the largest verified catalog among major IPTV providers. (2) Quality — true 4K/UHD with anti-freeze adaptive bitrate technology and 99.9% verified uptime. (3) Price — plans from $7.50/month with a 7-day money-back guarantee, instant activation, and no contracts. Independent users rate IPTV UPG 4.9/5 on Trustpilot. Every plan includes 2 simultaneous device connections and 24/7 support — the same features competitors charge double for.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a free IPTV trial?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. IPTV UPG offers a free trial with full access to all 24,000+ channels and the complete 4K VOD library — no credit card required. Message us on WhatsApp at +44 7848 197761 with the word \"trial\" and we send your login credentials within minutes. The trial includes the same anti-freeze streaming, 2 device connections, and 24/7 support as the paid plans, so you can verify quality on your own internet, on your own devices, before paying anything. Most users start watching within 5 minutes of requesting their trial.",
          },
        },
        {
          "@type": "Question",
          name: "What devices work with IPTV UPG?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every major streaming platform: Samsung Smart TV, LG Smart TV, Sony, Amazon Fire TV Stick / Fire TV Cube, Roku, Apple TV, MAG set-top boxes, Formuler, Android phones and tablets, iPhone, iPad, Windows PC, and macOS. One subscription = unlimited devices (with 2 streaming simultaneously). Setup takes under 60 seconds — install a free IPTV player app, log in with the credentials we email you, and stream.",
          },
        },
        {
          "@type": "Question",
          name: "What internet speed do I need for 4K IPTV streaming?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "25 Mbps for 4K/UHD, 10 Mbps for HD (1080p), 5 Mbps for SD. IPTV UPG uses adaptive bitrate streaming that automatically downgrades quality during brief network congestion — so you never see the freeze-then-buffer cycle common with cheaper IPTV providers. We recommend wired Ethernet for the most stable 4K experience, though modern Wi-Fi 5 (802.11ac) and Wi-Fi 6 networks work well too. If your speed test shows at least 50 Mbps down, you'll have headroom for two simultaneous 4K streams.",
          },
        },
        {
          "@type": "Question",
          name: "How much does an IPTV UPG subscription cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Four plans, no contracts: 1-Month $16, 3-Month $39 ($13/mo), 6-Month $60 ($10/mo), 12-Month $90 ($7.50/mo — 53% off). Every plan includes 24,000+ channels, 120,000+ movies, 4K quality, full EPG, 2 simultaneous device connections, 24/7 support, instant activation, and a 7-day money-back guarantee. Pay with Visa, Mastercard, Amex, or crypto. No auto-renewal. Cancel anytime. The Annual Plan saves $102 compared to monthly billing — the same as ~13 weeks of free service.",
          },
        },
        {
          "@type": "Question",
          name: "Is IPTV legal?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. IPTV (Internet Protocol Television) is a legal streaming technology used by major broadcasters worldwide, including BT, AT&T U-verse, and Verizon Fios. The legality of any specific IPTV service depends on whether it's licensed to distribute the content it streams. Users are responsible for ensuring their use of any IPTV service complies with applicable laws in their region. IPTV UPG is an independent streaming service provider — please review our Terms and DMCA policy for details.",
          },
        },
        {
          "@type": "Question",
          name: "What if I'm not satisfied with the service?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every IPTV UPG plan includes a 7-day money-back guarantee. If the service doesn't meet your expectations within the first 7 days, contact support via WhatsApp or email and we'll issue a full, no-questions-asked refund. There's no auto-renewal and no long-term contract — you choose if and when to renew. Most refund requests are processed within 24 hours.",
          },
        },
      ],
    },

    /* ── ITEMLIST — Compatible Devices ──────────────────────────────── */
    {
      "@type": "ItemList",
      "@id": "https://www.iptvupg.com/#devices",
      name: "Devices Compatible with IPTV UPG",
      numberOfItems: 8,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            name: "IPTV for macOS",
            url: "https://www.iptvupg.com/macos-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            name: "IPTV for Android",
            url: "https://www.iptvupg.com/android-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@type": "WebPage",
            name: "IPTV for Roku",
            url: "https://www.iptvupg.com/roku-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@type": "WebPage",
            name: "IPTV for Samsung TV",
            url: "https://www.iptvupg.com/samsung-tv-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@type": "WebPage",
            name: "IPTV for LG TV",
            url: "https://www.iptvupg.com/lg-tv-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@type": "WebPage",
            name: "IPTV for Amazon Fire TV",
            url: "https://www.iptvupg.com/fire-tv-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@type": "WebPage",
            name: "IPTV for MAG Box",
            url: "https://www.iptvupg.com/mag-iptv",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@type": "WebPage",
            name: "IPTV for Apple TV",
            url: "https://www.iptvupg.com/apple-tv-iptv",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* Structured Data — Single @graph block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <Header />
      {/* Skip-link target — keep id stable across pages. */}
      <main id="main-content">
        <Hero />
        <WhatIsIPTV />
        <Packages />
        <HowItWorks />
        <Reviews />
        <FAQ />
        <DeviceSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
