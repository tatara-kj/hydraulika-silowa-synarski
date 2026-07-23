import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Hydraulika Siłowa Seweryn Synarski — Lubinicko koło Świebodzina";
export const size = { width: 1200, height: 630 };
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
          background: "#171D22",
          color: "white",
          padding: "70px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "0",
            display: "flex",
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(#CDD4D9 1px, transparent 1px), linear-gradient(90deg, #CDD4D9 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid white",
                fontWeight: 800,
                fontSize: "24px",
              }}
            >
              HS
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 800, fontSize: "30px", letterSpacing: "1px" }}>HYDRAULIKA SIŁOWA</span>
              <span style={{ color: "#CDD4D9", fontSize: "18px", letterSpacing: "4px" }}>SEWERYN SYNARSKI</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", maxWidth: "960px" }}>
            <span style={{ color: "#9DD6FA", fontSize: "21px", fontWeight: 700, letterSpacing: "3px" }}>
              LUBINICKO / ŚWIEBODZIN
            </span>
            <span style={{ marginTop: "18px", fontSize: "66px", lineHeight: 1.02, fontWeight: 800 }}>
              Naprawa hydrauliki i siłowników hydraulicznych
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "22px" }}>
            <span style={{ color: "#CDD4D9" }}>Lubinicko 36B</span>
            <span style={{ background: "#006DB7", padding: "16px 24px", fontWeight: 800 }}>695 751 002</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
