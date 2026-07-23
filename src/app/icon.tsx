import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#005A96",
          color: "white",
          border: "5px solid #171D22",
          fontSize: "23px",
          fontWeight: 800,
          fontFamily: "Arial, sans-serif",
          letterSpacing: "-2px",
        }}
      >
        HS
      </div>
    ),
    size,
  );
}
