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
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 50,
            width: 78,
            height: 78,
            borderRadius: 22,
            background: "linear-gradient(135deg, #92400e, #b45309)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 18px 35px rgba(146,64,14,0.25)",
          }}
        >
          <span
            style={{
              color: "white",
              fontWeight: 700,
              fontSize: 42,
              lineHeight: 1,
            }}
          >
            D
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "140px 70px 0",
            maxWidth: 950,
          }}
        >
          <span
            style={{
              fontSize: 24,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#b45309",
              fontWeight: 700,
            }}
          >
            Donat Premium Artisanal
          </span>
          <h1
            style={{
              margin: "18px 0 0",
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 800,
              color: "#78350f",
            }}
          >
            Donatku
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              fontSize: 34,
              lineHeight: 1.3,
              color: "#92400e",
              maxWidth: 880,
            }}
          >
            Donat premium dengan varian rasa lezat untuk daily treat, hadiah,
            dan pesanan acara.
          </p>
          <span
            style={{
              marginTop: 26,
              fontSize: 24,
              color: "#78350f",
              fontWeight: 700,
            }}
          >
            donat.alpiant.my.id
          </span>
        </div>
      </div>
    ),
    size
  );
}
