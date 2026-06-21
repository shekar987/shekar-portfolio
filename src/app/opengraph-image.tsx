import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soma Shekar Keesari — Backend Engineer · Full-Stack & AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#1a1916",
          color: "#f5f4f1",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header: avatar + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              border: "1px solid #4a4944",
              borderRadius: "8px",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            SK
          </div>
          <div style={{ fontSize: "24px", fontWeight: 500, color: "#a8a59f" }}>
            Soma Shekar Keesari
          </div>
        </div>

        {/* Headline + subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "68px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            <div>Backend engineer building</div>
            <div>full-stack &amp; AI products.</div>
          </div>
          <div style={{ display: "flex", fontSize: "28px", color: "#a8a59f", maxWidth: "900px" }}>
            2+ years on Spring Boot microservices. 10,000+ users shipped. MSc CS
            (AWS-accredited), University of East London.
          </div>
        </div>

        {/* Status: styled dot (no glyph) + label */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              width: "14px",
              height: "14px",
              borderRadius: "999px",
              backgroundColor: "#34d399",
            }}
          />
          <div style={{ display: "flex", fontSize: "22px", color: "#a8a59f" }}>
            London, UK. Open to work.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
