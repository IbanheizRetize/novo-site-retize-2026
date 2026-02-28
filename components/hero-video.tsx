"use client"

import { useState, useCallback, useEffect, useRef } from "react"
import { Building2, BarChart3, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const POSTER_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-hero-poster-1600.jpg"
const DESKTOP_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-hero-desktop-final.mp4"
const MOBILE_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-hero-mobile-final.mp4"

export function HeroVideo() {
  const { t } = useI18n()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  const handleCanPlay = useCallback(() => {
    setVideoReady(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const isMobile = window.innerWidth < 768
    video.src = isMobile ? MOBILE_URL : DESKTOP_URL
    video.load()
    video.play().catch(() => {})
  }, [])

  return (
    <section
      id="hero"
      className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden"
    >
      {/* Poster fallback - always visible behind video */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${POSTER_URL})` }}
        aria-hidden="true"
      />

      {/* Background Video - fades in when ready */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_URL}
        onCanPlay={handleCanPlay}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000]/70" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[#ffffff] md:text-5xl lg:text-6xl">
          {t("hero.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[#ffffff]/85 md:text-xl">
          {t("hero.subtitle")}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="w-[300px] justify-center rounded border-0 bg-gradient-to-r from-[#00CCFF] to-[#00a3cc] px-7 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#00CCFF]/30 transition-all hover:shadow-xl hover:shadow-[#00CCFF]/40 hover:brightness-110"
          >
            <a href="/organizacoes-esportivas">
              <Building2 className="mr-2 h-5 w-5" />
              {t("hero.btn.orgs")}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="w-[300px] justify-center rounded border-0 bg-gradient-to-r from-[#FF6600] to-[#ff8533] px-7 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/30 transition-all hover:shadow-xl hover:shadow-[#FF6600]/40 hover:brightness-110"
          >
            <a href="/marcas-anunciantes">
              <BarChart3 className="mr-2 h-5 w-5" />
              {t("hero.btn.brands")}
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#plataforma"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#ffffff]/70 transition-colors hover:text-[#ffffff]"
        aria-label={t("hero.scroll")}
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
