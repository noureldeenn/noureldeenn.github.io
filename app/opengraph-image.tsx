import { ImageResponse } from "next/og";
import { siteMeta } from "@/lib/meta";

export const dynamic = "force-static";
export const alt = siteMeta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(255, 90, 31, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 90, 31, 0.08) 0%, transparent 50%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#e8e4d9",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#ff5a1f",
              borderRadius: "9999px",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a8a39a",
              fontFamily: "monospace",
            }}
          >
            {`${siteMeta.location}  ·  Available Q3 2026`}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "96px",
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#e8e4d9",
            }}
          >
            {siteMeta.name}
          </div>
          <div
            style={{
              fontSize: "36px",
              lineHeight: 1.3,
              color: "#a8a39a",
              maxWidth: "900px",
              fontStyle: "italic",
              fontFamily: "serif",
            }}
          >
            Independent developer building Next.js apps, e-commerce, AI agents, and healthcare platforms.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: "22px",
            color: "#a8a39a",
            fontFamily: "monospace",
            borderTop: "1px solid #1f1d1a",
            paddingTop: "32px",
          }}
        >
          <div>nourbadr.netlify.app</div>
          <div style={{ display: "flex", gap: "32px" }}>
            <div>Next.js</div>
            <div style={{ color: "#ff5a1f" }}>·</div>
            <div>Shopify</div>
            <div style={{ color: "#ff5a1f" }}>·</div>
            <div>AI</div>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}