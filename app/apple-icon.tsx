import { ImageResponse } from "next/og"

export const runtime = "edge"
export const contentType = "image/png"
export const size = { width: 180, height: 180 }

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#4700d1",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retize_isotipo-negativa-fundos-coloridos-sjkL77wKQ5t3XmJfqeiZdVlUyEoEbv.jpg"
          width={180}
          height={180}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  )
}
