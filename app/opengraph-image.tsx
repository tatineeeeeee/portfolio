import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Justine Cesar Ocampo - Full-Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Accent orbs */}
        <div
          style={{
            position: "absolute",
            top: 80,
            left: 100,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(239, 68, 68, 0.15)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 80,
            right: 100,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(239, 68, 68, 0.1)",
            filter: "blur(80px)",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, transparent, #ef4444, transparent)",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "#f8fafc",
              letterSpacing: "-0.02em",
            }}
          >
            Justine Cesar Ocampo
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              color: "#ef4444",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Full-Stack Web Developer
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#94a3b8",
              marginTop: 12,
              display: "flex",
              gap: 24,
              alignItems: "center",
            }}
          >
            <span>Next.js</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>React</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>TypeScript</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>109+ Tests</span>
            <span style={{ color: "#475569" }}>|</span>
            <span>CI/CD</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
