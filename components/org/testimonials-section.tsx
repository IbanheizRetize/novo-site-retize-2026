"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useI18n } from "@/lib/i18n/context"

const DESKTOP_VISIBLE = 3

const testimonials = [
  {
    id: "debora",
    nameKey: "org.testimonials.3.name",
    roleKey: "org.testimonials.3.role",
    quoteKey: "org.testimonials.3.quote",
    video: "/depoimentos/debora.mp4",
    thumbnail: "/depoimentos/debora.png",
    initials: "DS",
    color: "#00cc88",
  },
  {
    id: "henrique",
    nameKey: "org.testimonials.4.name",
    roleKey: "org.testimonials.4.role",
    quoteKey: "org.testimonials.4.quote",
    photo: "/depoimentos/henrique.jpeg",
    initials: "HN",
    color: "#4700d1",
  },
  {
    id: "ricardo",
    nameKey: "org.testimonials.1.name",
    roleKey: "org.testimonials.1.role",
    quoteKey: "org.testimonials.1.quote",
    video: "/depoimentos/ricardo.mp4",
    thumbnail: "/depoimentos/ricardo.png",
    initials: "RB",
    color: "#00CCFF",
  },
  {
    id: "erich",
    nameKey: "org.testimonials.2.name",
    roleKey: "org.testimonials.2.role",
    quoteKey: "org.testimonials.2.quote",
    video: "/depoimentos/erich.mp4",
    thumbnail: "/depoimentos/erich.png",
    initials: "EB",
    color: "#FF0066",
  },
  {
    id: "daniel",
    nameKey: "org.testimonials.5.name",
    roleKey: "org.testimonials.5.role",
    quoteKey: "org.testimonials.5.quote",
    video: "/depoimentos/daniel.mp4",
    thumbnail: "/depoimentos/daniel.png",
    initials: "DG",
    color: "#FF6600",
  },
]

const desktopMax = testimonials.length - DESKTOP_VISIBLE // 2
const mobileMax = testimonials.length - 1 // 4

export function TestimonialsSection() {
  const { t } = useI18n()
  const [videoOpen, setVideoOpen] = useState<string | null>(null)
  const [desktopIdx, setDesktopIdx] = useState(0)
  const [mobileIdx, setMobileIdx] = useState(0)
  const touchStartX = useRef(0)

  return (
    <section id="depoimentos" className="bg-[#ffffff] py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("org.testimonials.title")}
        </h2>

        {/* ── Desktop carousel: 3 cards visible ── */}
        <div className="relative mt-12 hidden md:block">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${desktopIdx * (100 / DESKTOP_VISIBLE)}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="w-1/3 flex-shrink-0 px-3">
                  <TestimonialCard
                    item={item}
                    onPlay={() => item.video && setVideoOpen(item.video)}
                    t={t}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setDesktopIdx((i) => Math.max(0, i - 1))}
            disabled={desktopIdx === 0}
            className="absolute top-1/2 -left-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] opacity-50 transition-all hover:opacity-100 hover:bg-[#0f0f0f]/20 disabled:opacity-0"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setDesktopIdx((i) => Math.min(desktopMax, i + 1))}
            disabled={desktopIdx === desktopMax}
            className="absolute top-1/2 -right-5 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] opacity-50 transition-all hover:opacity-100 hover:bg-[#0f0f0f]/20 disabled:opacity-0"
            aria-label="Próximo"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex items-center justify-center gap-2">
            {Array.from({ length: desktopMax + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setDesktopIdx(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === desktopIdx ? "w-6 bg-[#00CCFF]" : "w-2 bg-[#0f0f0f]/20"
                }`}
                aria-label={`Grupo ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Mobile carousel: 1 card visible ── */}
        <div className="relative mt-10 md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - touchStartX.current
              if (delta > 50) setMobileIdx((i) => Math.max(0, i - 1))
              else if (delta < -50) setMobileIdx((i) => Math.min(mobileMax, i + 1))
            }}
          >
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
            >
              {testimonials.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard
                    item={item}
                    onPlay={() => item.video && setVideoOpen(item.video)}
                    t={t}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setMobileIdx((i) => Math.max(0, i - 1))}
              disabled={mobileIdx === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] opacity-50 transition-opacity hover:opacity-100 disabled:opacity-30"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === mobileIdx ? "w-6 bg-[#00CCFF]" : "w-2 bg-[#0f0f0f]/20"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setMobileIdx((i) => Math.min(mobileMax, i + 1))}
              disabled={mobileIdx === mobileMax}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] opacity-50 transition-opacity hover:opacity-100 disabled:opacity-30"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5511930601050"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#00CCFF] px-8 py-3 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            {t("org.testimonials.cta")}
          </a>
        </div>
      </div>

      {/* Video modal */}
      <Dialog open={!!videoOpen} onOpenChange={() => setVideoOpen(null)}>
        <DialogContent className="max-w-3xl border-0 bg-[#0a0a0a] p-0">
          <DialogTitle className="sr-only">{t("org.testimonials.watch")}</DialogTitle>
          <button
            onClick={() => setVideoOpen(null)}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]/20 text-[#ffffff] hover:bg-[#ffffff]/30"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          {videoOpen && (
            <video src={videoOpen} controls autoPlay className="aspect-video w-full rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function TestimonialCard({
  item,
  onPlay,
  t,
}: {
  item: (typeof testimonials)[0]
  onPlay: () => void
  t: (key: string) => string
}) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-6 transition-shadow hover:shadow-md">
      {"photo" in item && item.photo ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image src={item.photo} alt={t(item.nameKey)} fill className="object-cover object-top" />
        </div>
      ) : (
        <button
          onClick={onPlay}
          className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0f0f0f] to-[#2a2a2a]"
          aria-label={`${t("org.testimonials.watch")} - ${t(item.nameKey)}`}
        >
          {"thumbnail" in item && item.thumbnail && (
            <Image
              src={item.thumbnail}
              alt={t(item.nameKey)}
              fill
              className="object-cover object-top brightness-75 transition-all group-hover:brightness-60"
            />
          )}
          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110"
            style={{ backgroundColor: `${item.color}cc` }}
          >
            <Play className="ml-0.5 h-6 w-6 text-[#ffffff]" />
          </div>
          <span className="absolute bottom-2 left-2 rounded-md bg-[#000000]/60 px-2 py-0.5 text-xs text-[#ffffff]">
            {t("org.testimonials.watch")}
          </span>
        </button>
      )}

      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-[#ffffff]"
          style={{ backgroundColor: item.color }}
        >
          {item.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-[#0f0f0f]">{t(item.nameKey)}</p>
          <p className="text-xs text-[#6b6b6b]">{t(item.roleKey)}</p>
        </div>
      </div>

      <p className="mt-4 text-sm italic leading-relaxed text-[#6b6b6b]">
        {'"'}{t(item.quoteKey)}{'"'}
      </p>
    </div>
  )
}

