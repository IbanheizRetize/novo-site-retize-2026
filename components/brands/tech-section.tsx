"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { Shield, Users, BarChart3, BrainCircuit, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const slides = [
  { src: "/prints/plataforma.png", tooltipKey: "platform.slide.analytics" },
  { src: "/prints/site-cdp.png", tooltipKey: "platform.slide.cdp" },
  { src: "/prints/site-crm.png", tooltipKey: "platform.slide.crm" },
  { src: "/prints/site-exposicao.png", tooltipKey: "platform.slide.track" },
]

const featureIcons = [Shield, Users, BarChart3, BrainCircuit]

export function TechSection() {
  const { t } = useI18n()
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (isHovered) return
    const timer = setInterval(next, 4000)
    return () => clearInterval(timer)
  }, [isHovered, next])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const features = featureIcons.map((icon, i) => ({
    icon,
    text: t(`brands.tech.feat.${i + 1}`),
  }))

  return (
    <section id="tecnologia" ref={sectionRef} className="relative overflow-hidden bg-[#0f0f0f] py-20 lg:py-28">
      {/* Subtle background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text content */}
          <div>
            <span className="inline-block rounded-full border border-[#FF6600]/30 bg-[#FF6600]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#FF6600]">
              {t("brands.tech.badge")}
            </span>

            <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl lg:text-5xl">
              {t("brands.tech.title")}
            </h2>

            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-[#ffffff]/60 md:text-lg">
              {t("brands.tech.description")}
            </p>

            <div className="mt-8 flex flex-col gap-3 lg:mt-6 lg:gap-2">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 rounded-lg border border-[#ffffff]/5 bg-[#ffffff]/[0.03] px-3 py-3 transition-all duration-500 lg:py-2.5 ${
                    isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6600]/15 lg:h-7 lg:w-7">
                    <feat.icon className="h-4 w-4 text-[#FF6600]" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium leading-snug text-[#ffffff]/90">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <Button
              asChild
              size="lg"
              className="mt-8 hidden rounded-full bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110 md:inline-flex"
            >
              <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                {t("brands.tech.cta")}
              </a>
            </Button>
          </div>

          {/* Right: Platform carousel */}
          <div className="lg:sticky lg:top-24">
            {/* Browser chrome */}
            <div
              className="overflow-hidden rounded-2xl border border-[#ffffff]/10 bg-[#1a1a1a] shadow-2xl"
              onMouseEnter={() => { setIsHovered(true) }}
              onMouseLeave={() => { setIsHovered(false) }}
            >
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-[#ffffff]/5 bg-[#111111] px-4 py-2.5">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="ml-4 flex-1 rounded-md bg-[#ffffff]/5 px-3 py-1">
                  <span className="text-[10px] text-[#ffffff]/30">app.retize.com.br</span>
                </div>
              </div>

              {/* Slide area */}
              <div className="relative">
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

                {/* Tooltip overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0f0f0f]/90 to-transparent px-4 pb-4 pt-10">
                  <p className="text-center text-sm font-medium text-[#ffffff]">
                    {t(slides[current].tooltipKey)}
                  </p>
                </div>

                {/* Side arrows */}
                <button
                  onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
                  className="absolute top-1/2 left-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] backdrop-blur-sm transition-colors hover:bg-[#0f0f0f]/80"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setCurrent((current + 1) % slides.length)}
                  className="absolute top-1/2 right-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] backdrop-blur-sm transition-colors hover:bg-[#0f0f0f]/80"
                  aria-label="Proximo"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Dots */}
            <div className="mt-5 flex items-center justify-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? "w-7 bg-[#FF6600]" : "w-2 bg-[#ffffff]/20"
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Mobile CTA - after slides */}
            <div className="mt-8 flex justify-center md:hidden">
              <Button
                asChild
                size="lg"
                className="w-full max-w-xs rounded-full bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110"
              >
                <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                  {t("brands.tech.cta")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
