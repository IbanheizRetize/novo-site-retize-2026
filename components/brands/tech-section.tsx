"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const screens = [
  { id: "home", label: "Dashboard Home" },
  { id: "analytics", label: "Analytics" },
  { id: "campaigns", label: "Campaigns" },
]

export function TechSection() {
  const { t } = useI18n()
  const [current, setCurrent] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const goTo = (idx: number) => {
    setCurrent((idx + screens.length) % screens.length)
  }

  // Auto-advance every 5s
  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % screens.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="tecnologia" className="bg-[#0f0f0f] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl">
          {t("brands.tech.title")}
        </h2>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left - Text cards */}
          <div className="flex w-full flex-col gap-6 lg:w-2/5">
            <div className="rounded-2xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-6">
              <p className="text-lg font-semibold leading-relaxed text-[#FF6600]">
                {t("brands.tech.card1")}
              </p>
            </div>
            <div className="rounded-2xl border border-[#ffffff]/10 bg-[#ffffff]/5 p-6">
              <p className="text-base leading-relaxed text-[#ffffff]/80">
                {t("brands.tech.card2")}
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="w-fit rounded-md bg-[#9900FF] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#9900FF]/20 transition-all hover:shadow-xl hover:brightness-110"
            >
              <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                {t("brands.tech.cta")}
              </a>
            </Button>
          </div>

          {/* Right - Screen carousel */}
          <div className="relative w-full lg:w-3/5">
            <div ref={carouselRef} className="relative overflow-hidden rounded-2xl border border-[#ffffff]/10 bg-[#1a1a1a]">
              <div className="aspect-video">
                <div
                  className="flex h-full transition-transform duration-500"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {screens.map((screen) => (
                    <div
                      key={screen.id}
                      className="flex h-full w-full flex-shrink-0 flex-col items-center justify-center"
                    >
                      <div className="mb-4 rounded-full bg-[#FF6600]/20 px-4 py-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#FF6600]">
                          {t("brands.tech.screen.title")}
                        </span>
                      </div>
                      <p className="max-w-xs px-4 text-center text-sm text-[#ffffff]/60">
                        {t("brands.tech.screen.desc")}
                      </p>
                      <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-[#9900FF] to-transparent" />
                      <p className="mt-2 text-xs font-semibold text-[#ffffff]/40">{screen.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={() => goTo(current - 1)}
                className="absolute top-1/2 left-3 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[#000000]/50 text-[#ffffff] transition-colors hover:bg-[#000000]/70"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => goTo(current + 1)}
                className="absolute top-1/2 right-3 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-[#000000]/50 text-[#ffffff] transition-colors hover:bg-[#000000]/70"
                aria-label="Proximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center gap-2">
              {screens.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === current ? "w-6 bg-[#FF6600]" : "w-2 bg-[#ffffff]/30"
                  }`}
                  aria-label={`Tela ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
