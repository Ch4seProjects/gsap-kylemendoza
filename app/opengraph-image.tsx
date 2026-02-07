import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kyle Dominic Mendoza — Front-End Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: 24,
          }}
        >
          Kyle Dominic Mendoza
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#9eff00",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          Front-End Developer
        </div>
      </div>
    ),
    { ...size }
  );
}
