import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Soma Shekar Keesari — Full-Stack & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Python", "FastAPI", "React", "TypeScript", "Next.js", "AWS ×2", "Claude API", "RAG"];

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
          backgroundColor: "#0e0f12",
          backgroundImage:
            "radial-gradient(700px circle at 15% 0%, rgba(52,211,153,0.28), transparent 60%), radial-gradient(700px circle at 90% 20%, rgba(45,212,191,0.18), transparent 60%)",
          color: "#f4f4f5",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: "linear-gradient(120deg,#34d399,#2dd4bf)",
                color: "#0e0f12",
                fontSize: "22px",
                fontWeight: 800,
              }}
            >
              SK
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "26px", fontWeight: 600 }}>Soma Shekar Keesari</div>
              <div style={{ fontSize: "18px", color: "#a1a1aa" }}>Full-Stack Engineer · AI Engineer</div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid rgba(52,211,153,0.4)",
              background: "rgba(52,211,153,0.12)",
              borderRadius: "999px",
              padding: "8px 16px",
              fontSize: "18px",
              color: "#6ee7b7",
            }}
          >
            <div style={{ display: "flex", width: "10px", height: "10px", borderRadius: "999px", backgroundColor: "#34d399" }} />
            Immediately available · London, UK
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            <div>Full-stack AI engineer building</div>
            <div style={{ display: "flex", gap: "18px" }}>
              <span
                style={{
                  backgroundImage: "linear-gradient(120deg,#6ee7b7,#2dd4bf)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                agentic &amp; generative
              </span>
              <span>products.</span>
            </div>
          </div>
          <div style={{ display: "flex", fontSize: "26px", color: "#a1a1aa", maxWidth: "980px", lineHeight: 1.35 }}>
            2+ years on production Python / FastAPI + React systems at Brane Group. Now shipping
            end-to-end LLM products. MSc Computer Science, University of East London.
          </div>
        </div>

        {/* Stack chips */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {chips.map((c) => (
            <div
              key={c}
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                borderRadius: "8px",
                padding: "8px 14px",
                fontSize: "18px",
                color: "#d4d4d8",
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
