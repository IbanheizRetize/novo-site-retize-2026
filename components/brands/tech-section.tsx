"use client"

import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { Shield, Users, BarChart3, BrainCircuit, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"
import { trackExternalLinkClick, trackCarouselNavigate } from "@/lib/gtag"

const slides = [
  { src: "/prints/plataforma.png", tooltipKey: "platform.slide.analytics" },
  { src: "/prints/site-ads.png", tooltipKey: "platform.slide.ads" },
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
  const touchStartX = useRef(0)

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
        <div className="grid items-center gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
          {/* Left: Text content */}
          <div>
            <span className="inline-block rounded-full border border-[#FF6600]/30 bg-[#FF6600]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#FF6600]">
              {t("brands.tech.badge")}
            </span>

            <h2 className="mt-4 text-balance text-2xl font-bold tracking-tight text-[#ffffff] md:text-3xl lg:text-4xl">
              {t("brands.tech.title")}
            </h2>

            <p className="mt-3 max-w-lg text-pretty text-sm leading-relaxed text-[#ffffff]/60 lg:text-base">
              {t("brands.tech.description")}
            </p>

            <div className="mt-6 flex flex-col gap-2 lg:mt-5 lg:gap-1.5">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 rounded-lg border border-[#ffffff]/5 bg-[#ffffff]/[0.03] px-3 py-2 transition-all duration-500 ${
                    isInView ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-[#FF6600]/15">
                    <feat.icon className="h-3.5 w-3.5 text-[#FF6600]" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium leading-snug text-[#ffffff]/90 lg:text-sm">
                    {feat.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <Button
              asChild
              className="mt-6 hidden rounded-full bg-[#FF6600] px-6 py-2 text-sm font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110 md:inline-flex"
            >
              <a href="https://wa.me/5511930601050" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ link_url: "https://wa.me/5511930601050", link_text: "WhatsApp - Tech Section desktop" })}>
                {t("brands.tech.cta")}
              </a>
            </Button>
          </div>

          {/* Right: Platform carousel */}
          <div>
            {/* Platform carousel */}
            <div
              className="overflow-hidden rounded-2xl shadow-2xl"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
              onTouchEnd={(e) => {
                const delta = e.changedTouches[0].clientX - touchStartX.current
                if (delta > 50) {
                  const next = (current - 1 + slides.length) % slides.length
                  setCurrent(next)
                  trackCarouselNavigate({ carousel_id: "tech", slide_index: next, direction: "swipe_prev" })
                } else if (delta < -50) {
                  const next = (current + 1) % slides.length
                  setCurrent(next)
                  trackCarouselNavigate({ carousel_id: "tech", slide_index: next, direction: "swipe_next" })
                }
              }}
            >
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
                  onClick={() => {
                    const next = (current - 1 + slides.length) % slides.length
                    setCurrent(next)
                    trackCarouselNavigate({ carousel_id: "tech", slide_index: next, direction: "prev" })
                  }}
                  className="absolute top-1/2 left-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] backdrop-blur-sm opacity-40 transition-all hover:opacity-100 hover:bg-[#0f0f0f]/80"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => {
                    const next = (current + 1) % slides.length
                    setCurrent(next)
                    trackCarouselNavigate({ carousel_id: "tech", slide_index: next, direction: "next" })
                  }}
                  className="absolute top-1/2 right-3 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] backdrop-blur-sm opacity-40 transition-all hover:opacity-100 hover:bg-[#0f0f0f]/80"
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
                  onClick={() => {
                    setCurrent(idx)
                    trackCarouselNavigate({ carousel_id: "tech", slide_index: idx, direction: "dot" })
                  }}
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
                <a href="https://wa.me/5511930601050" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ link_url: "https://wa.me/5511930601050", link_text: "WhatsApp - Tech Section mobile" })}>
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
