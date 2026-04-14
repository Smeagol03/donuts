import { ImageResponse } from "next/og";

export const alt = "Donatku - Donat Premium Artisanal";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at 15% 20%, #fde68a 0%, transparent 28%), radial-gradient(circle at 85% 80%, #fdba74 0%, transparent 24%), linear-gradient(140deg, #fffbeb 0%, #fef3c7 48%, #ffedd5 100%)",
          color: "#78350f",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        {/* Background Patterns */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(180, 83, 9, 0.05)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -50,
            left: "10%",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(180, 83, 9, 0.03)",
          }}
        />

        {/* Hero Donut (Right Side) */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: "50%",
            transform: "translateY(-50%) rotate(15deg)",
            width: 450,
            height: 450,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))",
          }}
        >
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Donut Base */}
            <path
              d="M200 60C122.68 60 60 122.68 60 200C60 277.32 122.68 340 200 340C277.32 340 340 277.32 340 200C340 122.68 277.32 60 200 60ZM200 245C175.147 245 155 224.853 155 200C155 175.147 175.147 155 200 155C224.853 155 245 175.147 245 200C245 224.853 224.853 245 200 245Z"
              fill="#D4A373"
            />
            {/* Glaze */}
            <path
              d="M200 70C128.203 70 70 128.203 70 200C70 271.797 128.203 330 200 330C271.797 330 330 271.797 330 200C330 128.203 271.797 70 200 70ZM200 235C180.67 235 165 219.33 165 200C165 180.67 180.67 165 200 165C219.33 165 235 180.67 235 200C235 219.33 219.33 235 200 235Z"
              fill="#F472B6"
            />
            {/* Highlights on glaze */}
            <path
              d="M130 130C110 150 100 180 105 200"
              stroke="white"
              strokeWidth="12"
              strokeLinecap="round"
              opacity="0.3"
            />
            {/* Sprinkles */}
            <rect x="250" y="120" width="12" height="4" rx="2" fill="#FDE047" transform="rotate(45 250 120)" />
            <rect x="280" y="180" width="12" height="4" rx="2" fill="#60A5FA" transform="rotate(-20 280 180)" />
            <rect x="230" y="260" width="12" height="4" rx="2" fill="#4ADE80" transform="rotate(60 230 260)" />
            <rect x="150" y="290" width="12" height="4" rx="2" fill="#FDE047" transform="rotate(-45 150 290)" />
            <rect x="100" y="220" width="12" height="4" rx="2" fill="#60A5FA" transform="rotate(15 100 220)" />
            <rect x="120" y="140" width="12" height="4" rx="2" fill="#4ADE80" transform="rotate(-30 120 140)" />
            <rect x="180" y="90" width="12" height="4" rx="2" fill="#FDE047" transform="rotate(80 180 90)" />
          </svg>
        </div>

        {/* Content Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 80px",
            width: "60%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 18,
                background: "linear-gradient(135deg, #92400e, #b45309)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 10px 20px rgba(146,64,14,0.2)",
              }}
            >
              <span
                style={{
                  color: "white",
                  fontWeight: 800,
                  fontSize: 36,
                }}
              >
                D
              </span>
            </div>
            <span
              style={{
                fontSize: 32,
                fontWeight: 800,
                color: "#78350f",
                letterSpacing: "-0.02em",
              }}
            >
              Donatku
            </span>
          </div>

          <span
            style={{
              fontSize: 22,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#b45309",
              fontWeight: 700,
              marginBottom: 12,
            }}
          >
            Premium Artisanal
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 84,
              lineHeight: 1,
              fontWeight: 900,
              color: "#78350f",
              letterSpacing: "-0.04em",
            }}
          >
            Manisnya
            <br />
            Hari Ini.
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.4,
              color: "#92400e",
              maxWidth: 500,
              opacity: 0.9,
            }}
          >
            Donat premium dengan varian rasa lezat, dibuat fresh setiap hari.
          </p>
          
          <div style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#b45309" }} />
            <span
              style={{
                fontSize: 22,
                color: "#78350f",
                fontWeight: 700,
              }}
            >
              donat.alpiant.my.id
            </span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
