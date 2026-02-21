"use client"

import { useState, useRef, useEffect } from "react"
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
  Users,
  Wifi,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

/* ── Persona data categories (icons only, labels come from i18n) ─ */

const behaviorIcons = [User, TrendingUp, MapPin, Smartphone, BarChart3]
const sportIcons = [Trophy, ShoppingCart, TrendingUp, Heart, User]
const discoveryIcons = [Search, BarChart3, TrendingUp, User]

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

/* ── Social icons ─────────────────────────────────────────── */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.2a8.26 8.26 0 005.58 2.15V11.9a4.84 4.84 0 01-3.77-1.44V6.69h3.77z"/>
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  )
}

/* ── Phone Mockup ─────────────────────────────────────────── */

function PhoneMockup({ adPosition = "bottom", adLabel = "ADS" }: { adPosition?: "bottom" | "mid" | "full"; adLabel?: string }) {
  return (
    <div className="relative mx-auto w-[70px] border-2 border-[#333333] bg-[#1a1a1a] p-[2px] shadow-lg md:w-20">
      <div className="relative aspect-[9/16] overflow-hidden bg-[#ffffff]">
        {/* Status bar */}
        <div className="flex h-2 items-center justify-end bg-[#f0f0f0] px-1">
          <div className="h-0.5 w-2 rounded bg-[#999999]" />
        </div>
        {/* Content lines */}
        <div className="space-y-1 p-1.5">
          <div className="h-1 w-full rounded bg-[#e5e5e5]" />
          <div className="h-1 w-3/4 rounded bg-[#e5e5e5]" />
          <div className="h-1 w-full rounded bg-[#e5e5e5]" />
          <div className="h-1 w-1/2 rounded bg-[#e5e5e5]" />
        </div>
        {/* Ad block */}
        {adPosition === "bottom" && (
          <div className="absolute inset-x-[2px] bottom-1 flex h-5 items-center justify-center bg-[#FF6600]">
            <span className="text-[7px] font-bold text-[#ffffff]">{adLabel}</span>
          </div>
        )}
        {adPosition === "mid" && (
          <div className="absolute inset-x-[2px] top-1/2 flex h-6 -translate-y-1/2 items-center justify-center bg-[#FF6600]">
            <span className="text-[7px] font-bold text-[#ffffff]">{adLabel}</span>
          </div>
        )}
        {adPosition === "full" && (
          <div className="absolute inset-[2px] top-4 flex items-center justify-center bg-[#FF6600]">
            <span className="text-[9px] font-bold text-[#ffffff]">{adLabel}</span>
          </div>
        )}
      </div>
      {/* Home indicator */}
      <div className="mx-auto mt-[1px] h-[2px] w-4 rounded-full bg-[#555555]" />
    </div>
  )
}

/* ── Social Device ────────────────────────────────────────── */

function SocialDevice({ icon: SocialIcon, name, color }: { icon: React.ElementType; name: string; color: string }) {
  return (
    <div className="relative mx-auto w-[70px] border-2 border-[#333333] bg-[#1a1a1a] p-[2px] shadow-lg md:w-20">
      <div className="relative flex aspect-[9/16] flex-col items-center justify-center gap-2 bg-[#ffffff]">
        <SocialIcon className="h-7 w-7 md:h-8 md:w-8" style={{ color }} />
        <span className="text-[8px] font-bold" style={{ color }}>{name}</span>
      </div>
      <div className="mx-auto mt-[1px] h-[2px] w-4 rounded-full bg-[#555555]" />
    </div>
  )
}

/* ── TV Mockup ────────────────────────────────────────────── */

function TvMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="border-2 border-b-0 border-[#333333] bg-[#1a1a1a] p-1">
        <div className="relative aspect-video overflow-hidden bg-[#1a3a1a]">
          {/* Simulated football game */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2d5a2d] to-[#1a4a1a]" />
          {/* Field markings */}
          <div className="absolute inset-x-2 inset-y-1 border border-[#ffffff]/20" />
          <div className="absolute inset-y-1 left-1/2 w-px bg-[#ffffff]/15" />
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ffffff]/15" />
          {/* Players dots */}
          <div className="absolute left-[30%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#ff4444]" />
          <div className="absolute left-[35%] top-[55%] h-1.5 w-1.5 rounded-full bg-[#ff4444]" />
          <div className="absolute left-[45%] top-[40%] h-1.5 w-1.5 rounded-full bg-[#ff4444]" />
          <div className="absolute left-[55%] top-[50%] h-1.5 w-1.5 rounded-full bg-[#4444ff]" />
          <div className="absolute left-[60%] top-[35%] h-1.5 w-1.5 rounded-full bg-[#4444ff]" />
          <div className="absolute left-[70%] top-[55%] h-1.5 w-1.5 rounded-full bg-[#4444ff]" />
          {/* Ball */}
          <div className="absolute left-[50%] top-[45%] h-1 w-1 rounded-full bg-[#ffffff]" />
          {/* Score */}
          <div className="absolute right-1 top-1 rounded bg-[#000000]/60 px-1 py-0.5">
            <span className="text-[5px] font-bold text-[#ffffff]">1 - 0</span>
          </div>
          {/* L-bar overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#FF6600] px-1 flex items-center justify-center">
            <span className="text-[6px] font-bold text-[#ffffff]">ADS</span>
          </div>
          <div className="absolute bottom-4 left-0 top-0 w-6 bg-[#FF6600]/90 flex items-center justify-center">
            <span className="text-[5px] font-bold text-[#ffffff] [writing-mode:vertical-lr] rotate-180">ADS</span>
          </div>
        </div>
      </div>
      {/* Stand */}
      <div className="mx-auto h-2 w-2/3 bg-[#333333]" />
      <div className="mx-auto h-1 w-1/2 bg-[#444444]" />
    </div>
  )
}

/* ── Direct (App Mockup) ──────────────────────────────────── */

function DirectMockup() {
  return (
    <div className="flex items-end gap-3">
      <div className="relative mx-auto w-[70px] border-2 border-[#333333] bg-[#1a1a1a] p-[2px] shadow-lg md:w-20">
        <div className="relative aspect-[9/16] overflow-hidden bg-[#ffffff]">
          {/* Push banner at top */}
          <div className="flex h-5 items-center justify-center bg-[#FF6600]">
            <span className="text-[6px] font-bold text-[#ffffff]">ADS</span>
          </div>
          {/* App interface mockup */}
          <div className="space-y-1 p-1">
            {/* Header area */}
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-[#e5e5e5]" />
              <div className="h-1 w-6 rounded bg-[#e5e5e5]" />
            </div>
            {/* Nav pills */}
            <div className="flex gap-0.5">
              <div className="h-1.5 w-4 rounded-full bg-[#FF6600]/20" />
              <div className="h-1.5 w-4 rounded-full bg-[#e5e5e5]" />
              <div className="h-1.5 w-4 rounded-full bg-[#e5e5e5]" />
            </div>
            {/* Card */}
            <div className="rounded border border-[#f0f0f0] p-0.5">
              <div className="h-4 w-full rounded bg-[#f5f5f5]" />
              <div className="mt-0.5 h-0.5 w-full rounded bg-[#e5e5e5]" />
              <div className="mt-0.5 h-0.5 w-3/4 rounded bg-[#e5e5e5]" />
            </div>
            {/* Another card */}
            <div className="rounded border border-[#f0f0f0] p-0.5">
              <div className="h-3 w-full rounded bg-[#f5f5f5]" />
              <div className="mt-0.5 h-0.5 w-full rounded bg-[#e5e5e5]" />
            </div>
            {/* Bottom nav */}
            <div className="absolute inset-x-[2px] bottom-1 flex justify-around rounded bg-[#f5f5f5] py-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-[#cccccc]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#FF6600]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#cccccc]" />
              <div className="h-1.5 w-1.5 rounded-full bg-[#cccccc]" />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-[1px] h-[2px] w-4 rounded-full bg-[#555555]" />
      </div>
      {/* Email / notification mock */}
      <div className="w-[70px] md:w-20">
        {/* Push notification */}
        <div className="mb-1.5 rounded border border-[#e0e0e0] bg-[#ffffff] p-1.5 shadow-md">
          <div className="flex items-center gap-1">
            <div className="h-2 w-2 rounded-full bg-[#FF6600]" />
            <div className="h-0.5 w-8 rounded bg-[#e5e5e5]" />
          </div>
          <div className="mt-1 space-y-0.5">
            <div className="h-0.5 w-full rounded bg-[#e5e5e5]" />
            <div className="h-0.5 w-2/3 rounded bg-[#e5e5e5]" />
          </div>
        </div>
        {/* Email */}
        <div className="rounded border border-[#e0e0e0] bg-[#ffffff] p-1.5 shadow-md">
          <div className="h-1 w-full rounded bg-[#FF6600]/20" />
          <div className="mt-1 space-y-0.5">
            <div className="h-0.5 w-full rounded bg-[#e5e5e5]" />
            <div className="h-0.5 w-3/4 rounded bg-[#e5e5e5]" />
            <div className="mt-1 h-3 w-full rounded bg-[#FF6600]/30" />
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Offline Mockup ───────────────────────────────────────── */

function OfflineMockup() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3366]/15">
          <Trophy className="h-6 w-6 text-[#FF3366]" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3366]/15">
          <Users className="h-6 w-6 text-[#FF3366]" />
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF3366]/15">
          <Heart className="h-6 w-6 text-[#FF3366]" />
        </div>
      </div>
      <div className="h-20 w-32 rounded-lg bg-gradient-to-br from-[#FF3366]/20 to-[#FF6600]/10 p-2">
        <div className="flex h-full items-center justify-center rounded border border-dashed border-[#FF3366]/30">
          <MapPin className="h-5 w-5 text-[#FF3366]/50" />
        </div>
      </div>
    </div>
  )
}

/* ── Branded Content Mockup ───────────────────────────────── */

function BrandedMockup() {
  return (
    <div className="flex items-end gap-3">
      {/* Video device with ad overlay */}
      <div className="relative mx-auto w-[70px] border-2 border-[#333333] bg-[#1a1a1a] p-[2px] shadow-lg md:w-20">
        <div className="relative aspect-[9/16] overflow-hidden bg-[#1a1a2e]">
          {/* Video content placeholder */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a4a] to-[#1a1a2e]" />
          {/* Play button */}
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[#ffffff]/30">
              <div className="ml-0.5 h-0 w-0 border-l-[4px] border-t-[3px] border-b-[3px] border-l-[#ffffff] border-t-transparent border-b-transparent" />
            </div>
          </div>
          {/* Ad banner overlay on video */}
          <div className="absolute inset-x-[2px] bottom-6 flex h-5 items-center justify-center bg-[#FF6600]">
            <span className="text-[6px] font-bold text-[#ffffff]">ADS</span>
          </div>
          {/* Bottom bar */}
          <div className="absolute inset-x-0 bottom-0 bg-[#000000]/60 p-1">
            <div className="h-0.5 w-full rounded bg-[#ffffff]/40" />
            <div className="mt-0.5 h-0.5 w-2/3 rounded bg-[#ffffff]/25" />
          </div>
        </div>
        <div className="mx-auto mt-[1px] h-[2px] w-4 rounded-full bg-[#555555]" />
      </div>
      {/* Text content device with highlighted text */}
      <div className="relative mx-auto w-[70px] border-2 border-[#333333] bg-[#1a1a1a] p-[2px] shadow-lg md:w-20">
        <div className="relative aspect-[9/16] overflow-hidden bg-[#ffffff]">
          {/* Header */}
          <div className="flex h-3 items-center bg-[#f5f5f5] px-1">
            <div className="h-1 w-6 rounded bg-[#cccccc]" />
          </div>
          {/* Article content */}
          <div className="space-y-1 p-1.5">
            <div className="h-4 w-full rounded bg-[#f0f0f0]" />
            <div className="h-1 w-full rounded bg-[#e5e5e5]" />
            <div className="h-1 w-3/4 rounded bg-[#e5e5e5]" />
            {/* Highlighted text */}
            <div className="h-1 w-full rounded bg-[#FF6600]/40" />
            <div className="h-1 w-2/3 rounded bg-[#FF6600]/40" />
            {/* More text */}
            <div className="h-1 w-full rounded bg-[#e5e5e5]" />
            <div className="h-1 w-5/6 rounded bg-[#e5e5e5]" />
            <div className="h-1 w-full rounded bg-[#e5e5e5]" />
            {/* Another highlight */}
            <div className="h-1 w-4/5 rounded bg-[#FF6600]/40" />
            <div className="h-1 w-full rounded bg-[#e5e5e5]" />
            <div className="h-1 w-2/3 rounded bg-[#e5e5e5]" />
          </div>
        </div>
        <div className="mx-auto mt-[1px] h-[2px] w-4 rounded-full bg-[#555555]" />
      </div>
    </div>
  )
}

/* ── Channel Card ─────────────────────────────────────────── */

function ChannelCard({ channelKey, Icon, color }: { channelKey: string; Icon: React.ElementType; color: string }) {
  const { t } = useI18n()
  const formats = t(`brands.audiences.channels.${channelKey}.formats`).split(",")

  return (
    <div
      className="flex min-w-[85vw] max-w-[85vw] flex-shrink-0 flex-col overflow-hidden rounded-2xl bg-[#ffffff] shadow-lg transition-shadow hover:shadow-xl md:min-w-0 md:max-w-none md:flex-shrink"
      style={{ borderTop: `3px solid ${color}` }}
    >
      {/* Header bar */}
      <div className="flex items-center gap-3 px-5 py-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ backgroundColor: `${color}15` }}>
          <Icon className="h-5 w-5" style={{ color }} />
        </div>
        <h4 className="text-lg font-bold text-[#0f0f0f]">
          {t(`brands.audiences.channels.${channelKey}.title`)}
        </h4>
      </div>

      {/* Visual mockup area */}
      <div className="flex flex-1 items-center justify-center bg-[#f9f9fb] px-4 py-6">
        {channelKey === "display" && (
          <div className="flex items-end gap-2">
            <PhoneMockup adPosition="bottom" />
            <PhoneMockup adPosition="mid" />
            <PhoneMockup adPosition="full" />
          </div>
        )}
        {channelKey === "social" && (
          <div className="flex items-end justify-center gap-3">
            <SocialDevice icon={InstagramIcon} name="Instagram" color="#E1306C" />
            <SocialDevice icon={TiktokIcon} name="TikTok" color="#010101" />
            <SocialDevice icon={XIcon} name="X" color="#0f0f0f" />
          </div>
        )}
        {channelKey === "tv" && <TvMockup />}
        {channelKey === "direct" && <DirectMockup />}
        {channelKey === "offline" && <OfflineMockup />}
        {channelKey === "branded" && <BrandedMockup />}
      </div>

      {/* Format tags */}
      <div className="flex flex-wrap gap-1.5 border-t border-[#f0f0f0] px-4 py-3">
        {formats.map((f) => (
          <span
            key={f}
            className="rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{ borderColor: `${color}40`, color, backgroundColor: `${color}08` }}
          >
            {f}
          </span>
        ))}
      </div>

      {/* Description */}
      <div className="border-t border-[#f0f0f0] px-5 py-4">
        <p className="text-sm leading-relaxed text-[#555555]">
          {t(`brands.audiences.channels.${channelKey}.desc`)}
        </p>
      </div>
    </div>
  )
}

/* ── Main Section ─────────────────────────────────────────── */

export function NetworkSection() {
  const { t } = useI18n()
  const [channelSlide, setChannelSlide] = useState(0)
  const channelsSectionRef = useRef<HTMLDivElement>(null)
  const [isChannelsInView, setIsChannelsInView] = useState(false)

  useEffect(() => {
    const el = channelsSectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsChannelsInView(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="audiencias" className="overflow-hidden">
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

          {/* ── Desktop layout (unchanged) ── */}
          <div className="mt-16 hidden lg:flex lg:items-center lg:gap-0">
            {/* Left data — Behavior */}
            <div className="flex w-1/4 flex-col gap-3 items-end pr-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#FF6600]">
                {t("brands.audiences.persona.behavior")}
              </h3>
              <div className="flex flex-col items-end gap-2">
                {behaviorIcons.map((Ic, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-3 py-2">
                    <Ic className="h-3.5 w-3.5 text-[#FF6600]" />
                    <span className="text-xs text-[#ffffff]/80">{t(`brands.persona.behavior.${i + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Center — Persona image */}
            <div className="relative w-2/4">
              <div className="relative mx-auto aspect-square w-80 overflow-hidden rounded-full border-4 border-[#FF6600]/40 shadow-2xl shadow-[#FF6600]/20">
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
                  {discoveryIcons.map((Ic, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-3 py-2">
                      <Ic className="h-3.5 w-3.5 text-[#FFAA00]" />
                      <span className="text-xs text-[#ffffff]/80">{t(`brands.persona.discovery.${i + 1}`)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right data — Sport */}
            <div className="flex w-1/4 flex-col gap-3 items-start pl-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#9900FF]">
                {t("brands.audiences.persona.sport")}
              </h3>
              <div className="flex flex-col items-start gap-2">
                {sportIcons.map((Ic, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-3 py-2">
                    <Ic className="h-3.5 w-3.5 text-[#9900FF]" />
                    <span className="text-xs text-[#ffffff]/80">{t(`brands.persona.sport.${i + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Mobile layout ── */}
          <div className="mt-12 flex flex-col items-center lg:hidden">
            {/* Behavior + Sport combined above image */}
            <div className="mb-6 grid w-full grid-cols-2 gap-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#FF6600]">
                  {t("brands.audiences.persona.behavior")}
                </h3>
                {behaviorIcons.map((Ic, i) => (
                  <div key={i} className="flex h-9 items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-2.5">
                    <Ic className="h-3 w-3 flex-shrink-0 text-[#FF6600]" />
                    <span className="text-[11px] text-[#ffffff]/80">{t(`brands.persona.behavior.${i + 1}`)}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#9900FF]">
                  {t("brands.audiences.persona.sport")}
                </h3>
                {sportIcons.map((Ic, i) => (
                  <div key={i} className="flex h-9 items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-2.5">
                    <Ic className="h-3 w-3 flex-shrink-0 text-[#9900FF]" />
                    <span className="text-[11px] text-[#ffffff]/80">{i === 1 ? t("brands.persona.sport.2.short") : t(`brands.persona.sport.${i + 1}`)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Persona image */}
            <div className="relative mx-auto aspect-square w-56 overflow-hidden rounded-full border-4 border-[#FF6600]/40 shadow-2xl shadow-[#FF6600]/20 sm:w-64">
              <Image
                src="/images/brands-persona.jpg"
                alt="Fan persona"
                fill
                className="object-cover"
              />
            </div>

            {/* Discovery data below persona */}
            <div className="mt-6 flex flex-col items-center gap-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#FFAA00]">
                {t("brands.audiences.persona.discovery")}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {discoveryIcons.map((Ic, i) => (
                  <div key={i} className="flex items-center gap-2 rounded-lg border border-[#333333] bg-[#1a1a1a] px-2.5 py-1.5">
                    <Ic className="h-3 w-3 text-[#FFAA00]" />
                    <span className="text-[11px] text-[#ffffff]/80">{t(`brands.persona.discovery.${i + 1}`)}</span>
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
              className="mt-8 w-auto max-w-full rounded-md bg-[#FF6600] px-6 text-sm font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/30 transition-all hover:shadow-xl hover:brightness-110 md:px-8 md:text-base"
            >
              <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
                {t("brands.audiences.persona.cta")}
              </a>
            </Button>
          </div>

          {/* ── Network banner with logos + big numbers ── */}
          <div className="mt-20 overflow-hidden rounded-2xl border border-[#222222] bg-gradient-to-br from-[#141414] to-[#1a1a2e]">
            {/* Big numbers */}
            <div className="grid grid-cols-2 gap-px border-b border-[#222222] bg-[#222222]">
              <div className="flex flex-col items-center justify-center bg-[#141414] px-4 py-6 md:py-8">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-[#FF6600] md:h-6 md:w-6" />
                  <span className="text-2xl font-bold text-[#ffffff] md:text-4xl">+8M</span>
                </div>
                <p className="mt-1 text-center text-xs text-[#ffffff]/50 md:text-sm">pessoas identificadas</p>
              </div>
              <div className="flex flex-col items-center justify-center bg-[#141414] px-4 py-6 md:py-8">
                <div className="flex items-center gap-2">
                  <Wifi className="h-5 w-5 text-[#9900FF] md:h-6 md:w-6" />
                  <span className="text-2xl font-bold text-[#ffffff] md:text-4xl">+100M</span>
                </div>
                <p className="mt-1 text-center text-xs text-[#ffffff]/50 md:text-sm">dispositivos descobertos</p>
              </div>
            </div>
            {/* Logos grid */}
            <div className="px-6 py-8 md:px-10 md:py-10">
              <p className="mb-6 text-center text-xs font-bold uppercase tracking-widest text-[#FF6600]">
                Organizacoes da nossa network
              </p>
              <div className="grid grid-cols-3 gap-4 md:grid-cols-7 md:gap-6">
                {ecosystemOrgs.map((org) => (
                  <div key={org.name} className="group flex flex-col items-center gap-2">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#333333] bg-[#1a1a1a] p-2.5 shadow-md transition-all group-hover:border-[#FF6600]/50 group-hover:shadow-[#FF6600]/20 md:h-20 md:w-20 md:p-3">
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain brightness-0 invert transition-all group-hover:brightness-100 group-hover:invert-0"
                      />
                    </div>
                    <span className="text-center text-[10px] font-semibold text-[#ffffff]/50 transition-colors group-hover:text-[#FF6600]">
                      {org.name}
                    </span>
                  </div>
                ))}
                {/* +20 organizations */}
                <div className="col-span-full flex items-center justify-center md:col-span-1 md:flex-col md:gap-2">
                  <div className="flex items-center gap-2 rounded-2xl border border-dashed border-[#FF6600]/30 bg-[#FF6600]/5 px-4 py-3 md:h-20 md:w-20 md:flex-col md:justify-center md:gap-0 md:px-0 md:py-0">
                    <span className="text-sm font-bold text-[#FF6600]/70 md:text-[10px]">
                      {"+ 20"}
                    </span>
                    <span className="text-xs font-semibold text-[#ffffff]/50 md:text-center md:text-[8px]">
                      {"Organizações Esportivas"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── BLOCK 2: Channels & Activation Formats ─── */}
      <div id="canais" ref={channelsSectionRef} className="relative bg-[#f7f7f8] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h3 className="text-balance text-2xl font-bold tracking-tight text-[#0f0f0f] md:text-3xl lg:text-4xl">
              {t("brands.audiences.channels.title")}
            </h3>
          </div>

          {/* Desktop: 3x2 grid */}
          <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-3">
            {channels.map(({ key, Icon, color }) => (
              <ChannelCard key={key} channelKey={key} Icon={Icon} color={color} />
            ))}
          </div>

          {/* Mobile: translateX carousel with arrows + dots like Cases */}
          <div className="relative md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${channelSlide * 100}%)` }}
              >
                {channels.map(({ key, Icon, color }) => (
                  <div key={key} className="w-full flex-shrink-0 px-1">
                    <ChannelCard channelKey={key} Icon={Icon} color={color} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots pagination */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {channels.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setChannelSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === channelSlide ? "w-6 bg-[#FF6600]" : "w-2 bg-[#0f0f0f]/20"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Floating side arrows -- mobile only, visible when channels section is in viewport */}
        {isChannelsInView && (
          <>
            <button
              onClick={() => setChannelSlide(Math.max(0, channelSlide - 1))}
              disabled={channelSlide === 0}
              className="fixed top-1/2 left-2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] shadow-lg backdrop-blur-sm transition-opacity disabled:opacity-0 md:hidden"
              aria-label="Canal anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setChannelSlide(Math.min(channels.length - 1, channelSlide + 1))}
              disabled={channelSlide === channels.length - 1}
              className="fixed top-1/2 right-2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] shadow-lg backdrop-blur-sm transition-opacity disabled:opacity-0 md:hidden"
              aria-label="Proximo canal"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>
    </section>
  )
}
