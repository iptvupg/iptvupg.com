import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#08090a",
          borderRadius: 40,
          fontSize: 72,
          fontWeight: 900,
          color: "#c9a84c",
          fontFamily: "system-ui, sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        UPG
      </div>
    ),
    { ...size }
  );
}
