import { ImageResponse } from "next/og"

export const runtime = "edge"
export const contentType = "image/png"
export const size = { width: 32, height: 32 }

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "#4700d1",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/retize_isotipo-negativa-fundos-coloridos-sjkL77wKQ5t3XmJfqeiZdVlUyEoEbv.jpg"
          width={32}
          height={32}
          style={{ objectFit: "cover" }}
        />
      </div>
    ),
    { ...size }
  )
}
