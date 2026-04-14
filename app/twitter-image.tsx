import { ImageResponse } from "next/og";

export const alt = "Donatku - Donat Premium Artisanal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(130deg, #fffbeb 0%, #fef3c7 46%, #fed7aa 100%)",
          color: "#78350f",
          fontFamily: "sans-serif",
          padding: "40px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 40,
            border: "2px solid rgba(146,64,14,0.1)",
            background: "rgba(255,255,255,0.6)",
            display: "flex",
            position: "relative",
            overflow: "hidden",
            padding: "60px",
          }}
        >
          {/* Decorative Donut (Left Side) */}
          <div
            style={{
              position: "absolute",
              left: -120,
              bottom: -120,
              width: 400,
              height: 400,
              opacity: 0.1,
              transform: "rotate(-15deg)",
            }}
          >
             <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M200 60C122.68 60 60 122.68 60 200C60 277.32 122.68 340 200 340C277.32 340 340 277.32 340 200C340 122.68 277.32 60 200 60ZM200 245C175.147 245 155 224.853 155 200C155 175.147 175.147 155 200 155C224.853 155 245 175.147 245 200C245 224.853 224.853 245 200 245Z" fill="#78350f" />
             </svg>
          </div>

          <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 18,
                  background: "linear-gradient(135deg, #92400e, #b45309)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: 800,
                  fontSize: 32,
                }}
              >
                D
              </div>
              <span style={{ fontSize: 48, fontWeight: 900, color: "#78350f", letterSpacing: "-0.04em" }}>Donatku</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 24, color: "#b45309", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Premium Artisanal
              </span>
              <h2 style={{ margin: 0, fontSize: 80, lineHeight: 1.05, fontWeight: 900, color: "#78350f", letterSpacing: "-0.05em" }}>
                Kelezatan Nyata<br />di Setiap Gigitan.
              </h2>
            </div>

            <p style={{ margin: 0, fontSize: 28, fontWeight: 700, color: "#92400e" }}>
              donat.alpiant.my.id
            </p>
          </div>

          {/* Large Hero Donut (Right Side) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 400,
            }}
          >
             <div style={{ transform: "rotate(10deg)", filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.12))" }}>
                <svg width="350" height="350" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M200 60C122.68 60 60 122.68 60 200C60 277.32 122.68 340 200 340C277.32 340 340 277.32 340 200C340 122.68 277.32 60 200 60ZM200 245C175.147 245 155 224.853 155 200C155 175.147 175.147 155 200 155C224.853 155 245 175.147 245 200C245 224.853 224.853 245 200 245Z" fill="#D4A373" />
                  <path d="M200 70C128.203 70 70 128.203 70 200C70 271.797 128.203 330 200 330C271.797 330 330 271.797 330 200C330 128.203 271.797 70 200 70ZM200 235C180.67 235 165 219.33 165 200C165 180.67 180.67 165 200 165C219.33 165 235 180.67 235 200C235 219.33 219.33 235 200 235Z" fill="#60A5FA" />
                  <path d="M130 130C110 150 100 180 105 200" stroke="white" strokeWidth="12" strokeLinecap="round" opacity="0.4" />
                  <rect x="250" y="120" width="12" height="4" rx="2" fill="white" transform="rotate(45 250 120)" />
                  <rect x="280" y="180" width="12" height="4" rx="2" fill="white" transform="rotate(-20 280 180)" />
                  <rect x="230" y="260" width="12" height="4" rx="2" fill="white" transform="rotate(60 230 260)" />
                </svg>
             </div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
