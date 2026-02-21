"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const segments = [
  { label: "Futebol", icon: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zm-1 3l2 0 1 2-1 2h-2l-1-2z" },
  { label: "Games", icon: "" },
  { label: "Futsal", icon: "" },
  { label: "Basquete", icon: "" },
  { label: "Portais", icon: "" },
  { label: "Running", icon: "" },
  { label: "E-Sports", icon: "" },
  { label: "Automobilismo", icon: "" },
  { label: "Luta", icon: "" },
  { label: "Sports Game", icon: "" },
  { label: "Praticantes de Esporte", icon: "" },
  { label: "Esportes Olimpicos", icon: "" },
]

function ConstellationCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    const w = rect.width
    const h = rect.height

    // Generate node positions
    const nodes: { x: number; y: number; r: number; label: string }[] = []
    const positions = [
      [0.25, 0.12], [0.55, 0.08], [0.85, 0.1],
      [0.15, 0.32], [0.45, 0.28], [0.75, 0.25],
      [0.1, 0.55], [0.4, 0.5], [0.7, 0.48], [0.9, 0.45],
      [0.3, 0.75], [0.6, 0.72], [0.85, 0.7],
    ]

    positions.forEach(([px, py], i) => {
      nodes.push({
        x: (px ?? 0.5) * w,
        y: (py ?? 0.5) * h,
        r: 24 + Math.random() * 8,
        label: segments[i % segments.length].label,
      })
    })

    // Draw connections
    ctx.strokeStyle = "rgba(153, 0, 255, 0.15)"
    ctx.lineWidth = 1
    nodes.forEach((a, i) => {
      nodes.forEach((b, j) => {
        if (j <= i) return
        const dist = Math.hypot(a.x - b.x, a.y - b.y)
        if (dist < w * 0.35) {
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      })
    })

    // Draw nodes
    nodes.forEach((n) => {
      // Glow
      const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 1.8)
      grad.addColorStop(0, "rgba(255, 255, 255, 0.3)")
      grad.addColorStop(1, "rgba(255, 255, 255, 0)")
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r * 1.8, 0, Math.PI * 2)
      ctx.fill()

      // Circle
      ctx.fillStyle = "#ffffff"
      ctx.beginPath()
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
      ctx.fill()

      // Icon placeholder (a small purple dot)
      ctx.fillStyle = "#9900FF"
      ctx.beginPath()
      ctx.arc(n.x, n.y, 8, 0, Math.PI * 2)
      ctx.fill()

      // Label
      ctx.fillStyle = "#ffffff"
      ctx.font = "bold 10px Inter, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(n.label.toUpperCase(), n.x, n.y + n.r + 14)
    })

    // Connection dots
    ctx.fillStyle = "rgba(255, 102, 0, 0.6)"
    nodes.forEach((n) => {
      ctx.beginPath()
      ctx.arc(n.x, n.y, 3, 0, Math.PI * 2)
      ctx.fill()
    })
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  )
}

export function NetworkSection() {
  const { t } = useI18n()

  return (
    <section id="rede" className="bg-[#0f0f0f] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-wider text-[#ffffff] md:text-3xl lg:text-4xl">
          {t("brands.network.title")}
        </h2>

        <div className="mt-12 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Constellation */}
          <div
            className="relative w-full overflow-hidden rounded-2xl lg:w-1/2"
            style={{
              background: "linear-gradient(135deg, #1a3a5c 0%, #3d1a5c 50%, #5c3a1a 100%)",
              minHeight: 340,
            }}
          >
            <ConstellationCanvas />
          </div>

          {/* Text */}
          <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
            <p className="max-w-lg text-xl leading-relaxed text-[#ffffff]/90 md:text-2xl">
              {t("brands.network.text")}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-md bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110"
            >
              <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                {t("brands.network.cta")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
