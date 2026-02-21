"use client"

import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

export function BrandsHero() {
  const { t } = useI18n()

  const handleScroll = () => {
    const el = document.querySelector("#rede")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="brands-hero"
      className="relative flex h-dvh min-h-[600px] items-center overflow-hidden"
    >
      <Image
        src="/images/brands-hero-bg.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={85}
      />
      <div className="absolute inset-0 bg-[#000000]/55" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 h-full w-1/2 opacity-20"
        style={{ background: "radial-gradient(ellipse at top left, #FF6600, transparent 60%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-full w-1/2 opacity-15"
        style={{ background: "radial-gradient(ellipse at bottom right, #9900FF, transparent 60%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-5 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[#ffffff] sm:text-4xl md:text-5xl lg:text-6xl">
          {t("brands.hero.title")}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-[#ffffff]/85 sm:text-lg md:text-xl">
          {t("brands.hero.subtitle")}
        </p>
        <Button
          size="lg"
          className="mt-8 rounded-md bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/30 transition-all hover:shadow-xl hover:shadow-[#FF6600]/40 hover:brightness-110"
          onClick={handleScroll}
        >
          {t("brands.hero.cta")}
        </Button>
      </div>

      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#ffffff]/70 transition-colors hover:text-[#ffffff]"
        aria-label={t("brands.hero.scroll")}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
