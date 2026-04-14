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
          background:
            "linear-gradient(130deg, #fffbeb 0%, #fef3c7 46%, #fed7aa 100%)",
          color: "#78350f",
          fontFamily: "sans-serif",
          padding: "56px 64px",
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: 32,
            border: "2px solid rgba(146,64,14,0.12)",
            background: "rgba(255,255,255,0.7)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "48px 52px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 16,
                background: "linear-gradient(135deg, #92400e, #b45309)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: 700,
                fontSize: 30,
              }}
            >
              D
            </div>
            <span style={{ fontSize: 42, fontWeight: 800 }}>Donatku</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 64,
                lineHeight: 1.06,
                fontWeight: 800,
              }}
            >
              Donat Premium Artisanal
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 30,
                lineHeight: 1.28,
                color: "#92400e",
              }}
            >
              Varian rasa lezat untuk harian, hampers, dan pesanan acara.
            </p>
          </div>

          <p style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>
            https://donat.alpiant.my.id
          </p>
        </div>
      </div>
    ),
    size
  );
}
