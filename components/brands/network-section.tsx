"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Share2,
  Tv,
  Mail,
  MapPin,
  Clapperboard,
  User,
  TrendingUp,
  Search,
  Trophy,
  ShoppingCart,
  Heart,
  BarChart3,
  Smartphone,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

/* ── Persona data categories ───────────────────────────────── */

const behaviorData = [
  { icon: User, label: "Demográfico" },
  { icon: TrendingUp, label: "Faixa de renda" },
  { icon: MapPin, label: "Cidade / Bairro" },
  { icon: Smartphone, label: "Dispositivo" },
  { icon: BarChart3, label: "Escolaridade" },
]

const sportData = [
  { icon: Trophy, label: "Presença em jogos" },
  { icon: ShoppingCart, label: "Preferências de consumo" },
  { icon: TrendingUp, label: "Frequência de compra" },
  { icon: Heart, label: "Hábitos e interesses" },
  { icon: User, label: "Perfil da entidade" },
]

const discoveryData = [
  { icon: Search, label: "Novas audiências" },
  { icon: BarChart3, label: "Segmentações comportamentais" },
  { icon: TrendingUp, label: "Insights proprietários" },
  { icon: User, label: "Dados 1st party" },
]

/* ── Channel definitions ───────────────────────────────────── */

const channels = [
  { key: "display", Icon: Monitor, color: "#FF6600" },
  { key: "social", Icon: Share2, color: "#9900FF" },
  { key: "tv", Icon: Tv, color: "#0066FF" },
  { key: "direct", Icon: Mail, color: "#00CC66" },
  { key: "offline", Icon: MapPin, color: "#FF3366" },
  { key: "branded", Icon: Clapperboard, color: "#FFAA00" },
] as const

/* ── Ecosystem orgs ────────────────────────────────────────── */

const ecosystemOrgs = [
  { name: "CBV", logo: "/logos/cbv.png" },
  { name: "Gremio", logo: "/logos/gremio.png" },
  { name: "Atletico MG", logo: "/logos/atletico-mg.png" },
  { name: "Sao Paulo", logo: "/logos/sao-paulo.png" },
  { name: "Vasco da Gama", logo: "/logos/vasco.png" },
  { name: "Imperial", logo: "/logos/imperial.png" },
]

/* ── Phone Mockup SVG ──────────────────────────────────────── */

function PhoneMockup({ adPosition = "bottom", className = "" }: { adPosition?: "bottom" | "mid" | "full"; className?: string }) {
  return (
    <div className={`relative mx-auto w-16 rounded-xl border-2 border-[#333333] bg-[#1a1a1a] p-1 shadow-lg md:w-20 ${className}`}>
      <div className="aspect-[9/16] overflow-hidden rounded-lg bg-[#ffffff]">
        {/* Status bar */}
        <div className="flex h-2 items-center justify-end bg-[#f0f0f0] px-1">
          <div className="h-0.5 w-2 rounded bg-[#999999]" />
        </div>
        {/* Content lines */}
        <div className="space-y-1 p-1.5">
          <div className="h-1 w-full rounded bg-[#e5e5e5]" />
          <div className="h-1 w-3/4 rounded bg-[#e5e5e5]" />
          <div className="h-1 w-full rounded bg-[#e5e5e5]" />
        </div>
        {/* Ad block */}
        {adPosition === "bottom" && (
          <div className="absolute inset-x-1 bottom-3 flex h-4 items-center justify-center rounded bg-[#FFD700]">
            <span className="text-[6px] font-bold text-[#0f0f0f]">Ad</span>
          </div>
        )}
        {adPosition === "mid" && (
          <div className="absolute inset-x-1 top-1/2 flex h-5 -translate-y-1/2 items-center justify-center rounded bg-[#FFD700]">
            <span className="text-[6px] font-bold text-[#0f0f0f]">Ad</span>
          </div>
        )}
        {adPosition === "full" && (
          <div className="absolute inset-1 top-4 flex items-center justify-center rounded bg-[#FFD700]">
            <span className="text-[8px] font-bold text-[#0f0f0f]">Ad</span>
          </div>
        )}
      </div>
      {/* Home indicator */}
      <div className="mx-auto mt-0.5 h-0.5 w-4 rounded-full bg-[#555555]" />
    </div>
  )
}

/* ── Social Post Mockup ────────────────────────────────────── */

function SocialPostMockup({ format }: { format: string }) {
  const isVertical = format === "Story" || format === "Reel"
  return (
    <div className={`relative overflow-hidden rounded-lg border border-[#333333] bg-[#1a1a1a] ${isVertical ? "aspect-[9/16] w-12 md:w-14" : "aspect-square w-16 md:w-20"}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#9900FF]/30 to-[#FF6600]/30" />
      <div className="absolute inset-x-0 top-0 flex items-center gap-0.5 bg-[#000000]/50 px-1 py-0.5">
        <div className="h-1.5 w-1.5 rounded-full bg-[#ffffff]" />
        <div className="h-0.5 w-4 rounded bg-[#ffffff]/60" />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-[#000000]/40 px-1 py-0.5">
        <span className="text-[5px] font-bold text-[#ffffff]">{format}</span>
      </div>
    </div>
  )
}

/* ── TV Mockup ─────────────────────────────────────────────── */

function TvMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[180px]">
      <div className="rounded-t-lg border-2 border-b-0 border-[#333333] bg-[#1a1a1a] p-1">
        <div className="relative aspect-video overflow-hidden rounded-t bg-gradient-to-br from-[#0a3d0a] to-[#1a5a1a]">
          {/* Field lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-6 w-6 rounded-full border border-[#ffffff]/30" />
          </div>
          <div className="absolute inset-y-0 left-1/2 w-px bg-[#ffffff]/20" />
          {/* L-bar overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-[#FFD700]/90 px-1">
            <span className="text-[5px] font-bold text-[#0f0f0f]">Ad</span>
          </div>
          <div className="absolute bottom-3 left-0 top-0 w-4 bg-[#FFD700]/80 px-0.5 pt-1">
            <span className="text-[4px] font-bold text-[#0f0f0f]">Ad</span>
          </div>
        </div>
      </div>
      {/* Stand */}
      <div className="mx-auto h-1 w-2/3 rounded-b bg-[#333333]" />
      <div className="mx-auto h-0.5 w-1/2 bg-[#444444]" />
    </div>
  )
}

/* ── Channel Card (visual mockup inside) ───────────────────── */

function ChannelCard({ channelKey, Icon, color }: { channelKey: string; Icon: React.ElementType; color: string }) {
  const { t } = useI18n()
  const formats = t(`brands.audiences.channels.${channelKey}.formats`).split(",")

  return (
    <div className="flex min-w-[280px] flex-shrink-0 flex-col overflow-hidden rounded-2xl border border-[#222222] bg-[#1a1a1a] shadow-lg transition-shadow hover:shadow-xl md:min-w-0 md:flex-shrink">
      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-4" style={{ borderBottom: `2px solid ${color}` }}>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}20` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <h4 className="text-lg font-bold text-[#ffffff]">
          {t(`brands.audiences.channels.${channelKey}.title`)}
        </h4>
      </div>

      {/* Visual mockup area */}
      <div className="flex flex-1 items-center justify-center bg-[#111111] px-4 py-6">
        {channelKey === "display" && (
          <div className="flex items-end gap-2">
            <PhoneMockup adPosition="bottom" />
            <PhoneMockup adPosition="mid" className="translate-y-[-4px]" />
            <PhoneMockup adPosition="full" />
          </div>
        )}
        {channelKey === "social" && (
          <div className="flex items-end gap-2">
            <SocialPostMockup format="Feed" />
            <SocialPostMockup format="Story" />
            <SocialPostMockup format="Reel" />
            <SocialPostMockup format="Live" />
          </div>
        )}
        {channelKey === "tv" && <TvMockup />}
        {channelKey === "direct" && (
          <div className="flex items-end gap-2">
            <PhoneMockup adPosition="full" />
            <div className="relative w-16 md:w-20">
              {/* Notification popup */}
              <div className="mb-1 rounded-lg border border-[#333333] bg-[#ffffff] p-1.5 shadow-md">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-[#00CC66]" />
                  <div className="h-1 w-8 rounded bg-[#e5e5e5]" />
                </div>
                <div className="mt-1 space-y-0.5">
                  <div className="h-0.5 w-full rounded bg-[#e5e5e5]" />
                  <div className="h-0.5 w-2/3 rounded bg-[#e5e5e5]" />
                </div>
              </div>
              {/* Email mockup */}
              <div className="rounded-lg border border-[#333333] bg-[#ffffff] p-1.5 shadow-md">
                <div className="h-1 w-full rounded bg-[#00CC66]/30" />
                <div className="mt-1 space-y-0.5">
                  <div className="h-0.5 w-full rounded bg-[#e5e5e5]" />
                  <div className="h-0.5 w-3/4 rounded bg-[#e5e5e5]" />
                  <div className="h-3 w-full rounded bg-[#FFD700]/60" />
                </div>
              </div>
            </div>
          </div>
        )}
        {channelKey === "offline" && (
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF3366]/20">
                <Trophy className="h-5 w-5 text-[#FF3366]" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF3366]/20">
                <User className="h-5 w-5 text-[#FF3366]" />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF3366]/20">
                <Heart className="h-5 w-5 text-[#FF3366]" />
              </div>
            </div>
            <div className="h-16 w-28 rounded-lg bg-gradient-to-br from-[#FF3366]/30 to-[#FF6600]/20 p-2">
              <div className="flex h-full items-center justify-center rounded border border-dashed border-[#FF3366]/40">
                <MapPin className="h-4 w-4 text-[#FF3366]/60" />
              </div>
            </div>
          </div>
        )}
        {channelKey === "branded" && (
          <div className="flex items-end gap-2">
            <div className="relative aspect-[9/16] w-14 overflow-hidden rounded-lg border border-[#333333] bg-gradient-to-b from-[#FFAA00]/30 to-[#FF6600]/20 md:w-16">
              <div className="absolute inset-x-0 bottom-0 bg-[#000000]/60 p-1">
                <div className="h-0.5 w-full rounded bg-[#ffffff]/80" />
                <div className="mt-0.5 h-0.5 w-2/3 rounded bg-[#ffffff]/50" />
              </div>
              <div className="absolute left-1 top-1 rounded bg-[#FFAA00] px-1 py-0.5">
                <span className="text-[4px] font-bold text-[#0f0f0f]">Sponsored</span>
              </div>
            </div>
            <div className="relative aspect-[9/16] w-14 overflow-hidden rounded-lg border border-[#333333] bg-gradient-to-b from-[#9900FF]/30 to-[#FFAA00]/20 md:w-16">
              <div className="absolute inset-x-0 bottom-0 bg-[#000000]/60 p-1">
                <div className="h-0.5 w-full rounded bg-[#ffffff]/80" />
                <div className="mt-0.5 h-0.5 w-1/2 rounded bg-[#ffffff]/50" />
              </div>
              <div className="absolute left-1 top-1 rounded bg-[#9900FF] px-1 py-0.5">
                <span className="text-[4px] font-bold text-[#ffffff]">Collab</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Format tags */}
      <div className="flex flex-wrap gap-1.5 border-t border-[#222222] bg-[#141414] px-4 py-3">
        {formats.map((f) => (
          <span key={f} className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#ffffff]/90" style={{ backgroundColor: `${color}30`, color }}>
            {f}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="bg-[#f7f7f8] px-5 py-4">
        <p className="text-sm leading-relaxed text-[#3d3d3d]">
          {t(`brands.audiences.channels.${channelKey}.desc`)}
        </p>
      </div>
    </div>
  )
}

/* ── Main Section ──────────────────────────────────────────── */

export function NetworkSection() {
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
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" })
  }

  return (
    <section id="rede" className="overflow-hidden">
      {/* ─── BLOCK 1: Persona + Audience Intelligence ─── */}
      <div className="relative bg-[#0f0f0f] py-20 lg:py-28">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#FF6600]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl lg:text-5xl">
              {t("brands.audiences.title")}
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-[#ffffff]/70">
              {t("brands.audiences.subtitle")}
            </p>
          </div>

          {/* Persona layout */}
          <div className="mt-16 flex flex-col items-center gap-6 lg:flex-row lg:gap-0">
            {/* Left data — Behavior */}
            <div className="flex w-full flex-col gap-3 lg:w-1/4 lg:items-end lg:pr-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF6600]">
                {t("brands.audiences.persona.behavior")}
              </h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-end">
                {behaviorData.map(({ icon: Ic, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-3 py-2">
                    <Ic className="h-3.5 w-3.5 text-[#FF6600]" />
                    <span className="text-xs text-[#ffffff]/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — Persona image */}
            <div className="relative w-full lg:w-2/4">
              <div className="relative mx-auto aspect-square w-64 overflow-hidden rounded-full border-4 border-[#FF6600]/40 shadow-2xl shadow-[#FF6600]/20 md:w-72 lg:w-80">
                <Image
                  src="/images/brands-persona.jpg"
                  alt="Fan persona"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Discovery data below persona */}
              <div className="mt-6 flex flex-col items-center gap-3">
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#FFAA00]">
                  {t("brands.audiences.persona.discovery")}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {discoveryData.map(({ icon: Ic, label }) => (
                    <div key={label} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-3 py-2">
                      <Ic className="h-3.5 w-3.5 text-[#FFAA00]" />
                      <span className="text-xs text-[#ffffff]/80">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right data — Sport */}
            <div className="flex w-full flex-col gap-3 lg:w-1/4 lg:items-start lg:pl-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#9900FF]">
                {t("brands.audiences.persona.sport")}
              </h3>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
                {sportData.map(({ icon: Ic, label }) => (
                  <div key={label} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-3 py-2">
                    <Ic className="h-3.5 w-3.5 text-[#9900FF]" />
                    <span className="text-xs text-[#ffffff]/80">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text + CTA below persona */}
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-base leading-relaxed text-[#ffffff]/70 md:text-lg">
              {t("brands.audiences.persona.text")}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 rounded-md bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/30 transition-all hover:shadow-xl hover:brightness-110"
            >
              <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                {t("brands.audiences.persona.cta")}
              </a>
            </Button>
          </div>

          {/* ── Org logos (prominent banner) ── */}
          <div className="mt-20 rounded-2xl border border-[#222222] bg-[#141414] px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-6">
              <div className="flex-shrink-0 text-center md:max-w-[220px] md:text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF6600]">Network</p>
                <p className="mt-1 text-sm leading-relaxed text-[#ffffff]/60">
                  Conectamos sua marca ao ecossistema esportivo
                </p>
              </div>
              <div className="flex flex-1 flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-10">
                {ecosystemOrgs.map((org) => (
                  <div key={org.name} className="group flex flex-col items-center gap-2 transition-transform hover:scale-110">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#333333] bg-[#1a1a1a] p-2 shadow-md transition-all group-hover:border-[#FF6600]/50 group-hover:shadow-[#FF6600]/20 md:h-20 md:w-20 md:p-3">
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-[#ffffff]/50 transition-colors group-hover:text-[#FF6600]">
                      {org.name}
                    </span>
                  </div>
                ))}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-dashed border-[#333333] md:h-20 md:w-20">
                  <span className="text-xs text-[#ffffff]/30">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BLOCK 2: Channels & Activation Formats ─── */}
      <div className="bg-[#f7f7f8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="text-balance text-2xl font-bold tracking-tight text-[#0f0f0f] md:text-3xl lg:text-4xl">
              {t("brands.audiences.channels.title")}
            </h3>
          </div>

          {/* Desktop: 3x2 grid | Mobile: horizontal scroll */}
          {/* Desktop grid */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ key, Icon, color }) => (
              <ChannelCard key={key} channelKey={key} Icon={Icon} color={color} />
            ))}
          </div>

          {/* Mobile carousel */}
          <div className="relative md:hidden">
            {canLeft && (
              <button
                onClick={() => scroll(-1)}
                className="absolute -left-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffffff] text-[#0f0f0f] shadow-lg"
                aria-label="Anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            )}
            {canRight && (
              <button
                onClick={() => scroll(1)}
                className="absolute -right-1 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#ffffff] text-[#0f0f0f] shadow-lg"
                aria-label="Proximo"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            )}
            <div
              ref={scrollRef}
              className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-4"
            >
              {channels.map(({ key, Icon, color }) => (
                <ChannelCard key={key} channelKey={key} Icon={Icon} color={color} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
