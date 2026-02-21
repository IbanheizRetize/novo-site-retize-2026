"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Database, TrendingUp, MonitorSmartphone, BrainCircuit } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const slides = [
  { src: "/prints/plataforma.png", tooltipKey: "platform.slide.analytics" },
  { src: "/prints/site-cdp.png", tooltipKey: "platform.slide.cdp" },
  { src: "/prints/site-crm.png", tooltipKey: "platform.slide.crm" },
  { src: "/prints/site-exposicao.png", tooltipKey: "platform.slide.track" },
]

export function PlatformSection() {
  const { t } = useI18n()
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isHovered, next])

  const features = [
    { icon: Database, text: t("platform.feat.1") },
    { icon: TrendingUp, text: t("platform.feat.2") },
    { icon: MonitorSmartphone, text: t("platform.feat.3") },
    { icon: BrainCircuit, text: t("platform.feat.4") },
  ]

  return (
    <section id="plataforma" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#4700d1]">
              {t("platform.badge")}
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
              {t("platform.title")}
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-[#6b6b6b]">
              {t("platform.description")}
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {features.map((feat) => (
                <div key={feat.text} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#4700d1]/10">
                    <feat.icon className="h-5 w-5 text-[#4700d1]" aria-hidden="true" />
                  </span>
                  <span className="pt-1.5 text-sm font-medium leading-snug text-[#0f0f0f]">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image carousel */}
          <div>
            <div
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
              onMouseEnter={() => { setIsHovered(true); setShowTooltip(true) }}
              onMouseLeave={() => { setIsHovered(false); setShowTooltip(false) }}
            >
              {/* Slides container */}
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div key={slide.src} className="w-full flex-shrink-0">
                    <Image
                      src={slide.src}
                      alt={t(slide.tooltipKey)}
                      width={1500}
                      height={750}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Tooltip on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 bg-[#0f0f0f]/85 px-4 py-3 backdrop-blur-sm transition-all duration-300 ${
                  showTooltip ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                }`}
              >
                <p className="text-center text-sm font-medium text-[#ffffff]">
                  {t(slides[current].tooltipKey)}
                </p>
              </div>

            </div>

            {/* Dots indicator */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full border border-[#cccccc] transition-all duration-300 ${
                    idx === current ? "w-6 bg-[#4700d1]" : "w-2 bg-[#d4d4d4]"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
