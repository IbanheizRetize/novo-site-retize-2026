"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Monitor, Share2, Tv, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

/* ── Persona data cards ────────────────────────────────────── */

const behaviorItems = [
  "Demográfico",
  "Faixa de renda",
  "Cidade / Bairro",
  "Dispositivo",
  "Escolaridade",
]

const sportItems = [
  "Presença e consumo em jogos",
  "Preferências de consumo",
  "Frequência de compra",
  "Hábitos e interesses",
  "Perfil da entidade",
]

const discoveryItems = [
  "Criação de novas audiências",
  "Segmentações comportamentais",
  "Insights proprietários",
  "Dados 1st party",
]

/* ── Channel cards ─────────────────────────────────────────── */

const channelKeys = [
  { key: "display", Icon: Monitor },
  { key: "social", Icon: Share2 },
  { key: "tv", Icon: Tv },
  { key: "messaging", Icon: MessageCircle },
] as const

/* ── Ecosystem orgs (same 6 from the home page) ───────────── */

const ecosystemOrgs = [
  { name: "CBV", logo: "/logos/cbv.png" },
  { name: "Grêmio", logo: "/logos/gremio.png" },
  { name: "Atlético MG", logo: "/logos/atletico-mg.png" },
  { name: "São Paulo", logo: "/logos/sao-paulo.png" },
  { name: "Vasco da Gama", logo: "/logos/vasco.png" },
  { name: "Imperial", logo: "/logos/imperial.png" },
]

/* ── Data Tag Component ────────────────────────────────────── */

function DataTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#e5e5e5] bg-[#ffffff] px-3 py-1.5 text-xs font-medium text-[#0f0f0f] shadow-sm">
      {label}
    </span>
  )
}

/* ── Channels Carousel ─────────────────────────────────────── */

function ChannelsCarousel() {
  const { t } = useI18n()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(true)

  const checkScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener("scroll", checkScroll, { passive: true })
    window.addEventListener("resize", checkScroll)
    return () => {
      el.removeEventListener("scroll", checkScroll)
      window.removeEventListener("resize", checkScroll)
    }
  }, [checkScroll])

  const scroll = (dir: -1 | 1) => {
    scrollRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <div className="relative">
      {/* Arrows */}
      {canLeft && (
        <button
          onClick={() => scroll(-1)}
          className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-[#ffffff] text-[#0f0f0f] shadow-md transition-colors hover:bg-[#f7f7f8]"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canRight && (
        <button
          onClick={() => scroll(1)}
          className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#e5e5e5] bg-[#ffffff] text-[#0f0f0f] shadow-md transition-colors hover:bg-[#f7f7f8]"
          aria-label="Próximo"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Cards */}
      <div
        ref={scrollRef}
        className="scrollbar-hide flex gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {channelKeys.map(({ key, Icon }) => (
          <div
            key={key}
            className="flex min-w-[280px] flex-shrink-0 flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 shadow-sm transition-shadow hover:shadow-md md:min-w-[300px]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF6600]/10">
              <Icon className="h-6 w-6 text-[#FF6600]" />
            </div>
            <h4 className="mt-4 text-lg font-bold text-[#0f0f0f]">
              {t(`brands.audiences.channels.${key}.title`)}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">
              {t(`brands.audiences.channels.${key}.desc`)}
            </p>
          </div>
        ))}
      </div>

      {/* Progress indicator */}
      <div className="mt-4 flex justify-center gap-1.5">
        {channelKeys.map((_, i) => (
          <div key={i} className="h-1 w-8 rounded-full bg-[#FF6600]/20" />
        ))}
      </div>
    </div>
  )
}

/* ── Main Section ──────────────────────────────────────────── */

export function NetworkSection() {
  const { t } = useI18n()

  return (
    <section id="rede" className="bg-[#fafafa]">
      {/* ─── Section header ─── */}
      <div className="bg-[#ffffff] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl lg:text-5xl">
              {t("brands.audiences.title")}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#6b6b6b]">
              {t("brands.audiences.subtitle")}
            </p>
          </div>

          {/* ─── BLOCK 1: Persona & Audience Intelligence ─── */}
          <div className="mt-16 flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            {/* Left — persona image + data cards */}
            <div className="relative w-full lg:w-1/2">
              <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl">
                <Image
                  src="/images/brands-persona.jpg"
                  alt="Fan persona"
                  fill
                  className="object-cover"
                />
                {/* Dark overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/70 via-transparent to-[#0f0f0f]/30" />

                {/* Data cards floating around */}
                {/* Top-left: Behavior */}
                <div className="absolute left-3 top-4 flex max-w-[160px] flex-col gap-1.5 rounded-xl bg-[#ffffff]/95 p-3 shadow-lg backdrop-blur-sm md:left-4 md:top-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6600]">
                    {t("brands.audiences.persona.behavior")}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {behaviorItems.map((item) => (
                      <DataTag key={item} label={item} />
                    ))}
                  </div>
                </div>

                {/* Right: Sport */}
                <div className="absolute right-3 top-1/3 flex max-w-[170px] flex-col gap-1.5 rounded-xl bg-[#ffffff]/95 p-3 shadow-lg backdrop-blur-sm md:right-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6600]">
                    {t("brands.audiences.persona.sport")}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {sportItems.map((item) => (
                      <DataTag key={item} label={item} />
                    ))}
                  </div>
                </div>

                {/* Bottom-left: Discoveries */}
                <div className="absolute bottom-4 left-3 flex max-w-[180px] flex-col gap-1.5 rounded-xl bg-[#ffffff]/95 p-3 shadow-lg backdrop-blur-sm md:bottom-6 md:left-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF6600]">
                    {t("brands.audiences.persona.discovery")}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {discoveryItems.map((item) => (
                      <DataTag key={item} label={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — text */}
            <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
              <p className="max-w-lg text-lg leading-relaxed text-[#3d3d3d] md:text-xl">
                {t("brands.audiences.persona.text")}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 rounded-md bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110"
              >
                <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                  {t("brands.audiences.persona.cta")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BLOCK 2: Channels & Activation Formats ─── */}
      <div className="bg-[#ffffff] pb-20 lg:pb-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h3 className="mb-10 text-center text-2xl font-bold tracking-tight text-[#0f0f0f] md:text-3xl">
            {t("brands.audiences.channels.title")}
          </h3>
          <ChannelsCarousel />
        </div>
      </div>

      {/* ─── BLOCK 3: Ecosystem Organizations ─── */}
      <div className="bg-[#f4f4f5] py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="text-xl font-bold tracking-tight text-[#0f0f0f] md:text-2xl">
              {t("brands.audiences.ecosystem.title")}
            </h3>
            <p className="mt-2 text-sm text-[#6b6b6b]">
              {t("brands.audiences.ecosystem.subtitle")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {ecosystemOrgs.map((org) => (
              <div
                key={org.name}
                className="group relative flex aspect-square items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-5 transition-all hover:shadow-md"
              >
                <Image
                  src={org.logo}
                  alt={org.name}
                  width={120}
                  height={120}
                  className="h-12 w-12 object-contain grayscale transition-all group-hover:grayscale-0 lg:h-16 lg:w-16"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[10px] font-semibold text-[#6b6b6b] opacity-0 transition-opacity group-hover:opacity-100">
                  {org.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
