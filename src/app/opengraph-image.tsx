import { ImageResponse } from "next/og";

export const alt = "IPTV UPG — Best IPTV Subscription Service 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#08090a",
          color: "#f5f5f5",
          fontFamily: "system-ui, sans-serif",
          padding: 60,
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: "#c9a84c",
            display: "flex",
          }}
        />

        {/* Brand */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "#c9a84c",
            marginBottom: 20,
            letterSpacing: "-0.02em",
            display: "flex",
          }}
        >
          IPTV UPG
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 36,
            fontWeight: 600,
            marginBottom: 40,
            display: "flex",
          }}
        >
          Best IPTV Subscription Service 2026
        </div>

        {/* Stats */}
        <div
          style={{
            fontSize: 24,
            color: "#888888",
            display: "flex",
            gap: 32,
          }}
        >
          <span style={{ display: "flex" }}>24,000+ Channels</span>
          <span style={{ color: "#c9a84c", display: "flex" }}>&#x2022;</span>
          <span style={{ display: "flex" }}>120,000+ VOD</span>
          <span style={{ color: "#c9a84c", display: "flex" }}>&#x2022;</span>
          <span style={{ display: "flex" }}>4K Quality</span>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 6,
            backgroundColor: "#c9a84c",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
