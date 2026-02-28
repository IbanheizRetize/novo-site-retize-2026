"use client"

import { useState, useRef, useEffect, forwardRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { useI18n } from "@/lib/i18n/context"
import { trackVideoPlay, trackCarouselNavigate } from "@/lib/gtag"

interface BrandCase {
  id: string
  titleKey: string
  challengeKey: string
  approachKeys: string[]
  resultKeys: string[]
  brandName?: string
  brandLogo?: string
  caseImage?: string
}

const cases: BrandCase[] = [
  {
    id: "carrefour",
    titleKey: "brands.cases.1.title",
    challengeKey: "brands.cases.1.challenge",
    approachKeys: [
      "brands.cases.1.approach.1",
      "brands.cases.1.approach.2",
      "brands.cases.1.approach.3",
    ],
    resultKeys: ["brands.cases.1.result.1", "brands.cases.1.result.2", "brands.cases.1.result.3"],
    brandName: "Banco Carrefour",
    brandLogo: "/logos/banco-carrefour.png",
    caseImage: "/images/case-banco-carrefour.png",
  },
  {
    id: "samsung",
    titleKey: "brands.cases.2.title",
    challengeKey: "brands.cases.2.challenge",
    approachKeys: [
      "brands.cases.2.approach.1",
      "brands.cases.2.approach.2",
      "brands.cases.2.approach.3",
    ],
    resultKeys: ["brands.cases.2.result.1", "brands.cases.2.result.2", "brands.cases.2.result.3"],
    brandName: "Samsung",
    brandLogo: "/images/samsung.png",
    caseImage: "/images/case-samsung.png",
  },
]

const brandTestimonials = [
  {
    id: "pedro",
    nameKey: "brands.testimonials.1.name",
    roleKey: "brands.testimonials.1.role",
    quoteKey: "brands.testimonials.1.quote",
    video: null as string | null,
    image: "/depoimentos/pedro-paiva.png",
    thumbnail: null as string | null,
    initials: "PP",
    color: "#FF6600",
    orgLogo: "/logos/banco-carrefour.png",
  },
  {
    id: "ricardo",
    nameKey: "brands.testimonials.2.name",
    roleKey: "brands.testimonials.2.role",
    quoteKey: "brands.testimonials.2.quote",
    video: "/depoimentos/ricardo.mp4" as string | null,
    image: null as string | null,
    thumbnail: "/depoimentos/ricardo.png" as string | null,
    initials: "RB",
    color: "#9900FF",
    orgLogo: "/logos/imperial.png",
  },
]

function CaseCard({ c, t }: { c: BrandCase; t: (k: string) => string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Brand logo + name */}
      {c.brandLogo && (
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={c.brandLogo}
            alt={c.brandName ?? ""}
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          {c.brandName && (
            <span className="text-sm font-bold text-[#0f0f0f]">{c.brandName}</span>
          )}
        </div>
      )}
      <h3 className="text-lg font-bold text-[#0f0f0f]">{t(c.titleKey)}</h3>

      <div className="mt-5">
        <span className="inline-block rounded-md bg-[#0f0f0f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {t("org.cases.label.challenge")}
        </span>
        <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">{t(c.challengeKey)}</p>
      </div>

      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {t("org.cases.label.approach")}
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {c.approachKeys.map((key) => (
            <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-[#6b6b6b]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF6600]" aria-hidden="true" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {t("org.cases.label.results")}
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {c.resultKeys.map((key) => (
            <li key={key} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#0f0f0f]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#9900FF]" aria-hidden="true" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-grow" />

      {/* Case image - always at bottom */}
      {c.caseImage ? (
        <div className="mt-5 h-32 overflow-hidden rounded-xl">
          <Image
            src={c.caseImage}
            alt={t(c.titleKey)}
            width={600}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div className="mt-5 flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-[#e5e5e5] bg-[#f7f7f8]">
          <span className="text-xs text-[#6b6b6b]/60">Imagem do case</span>
        </div>
      )}
    </div>
  )
}

export function BrandsCasesSection() {
  const { t } = useI18n()
  const [mobileIdx, setMobileIdx] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [testimonialsInView, setTestimonialsInView] = useState(false)
  const touchStartX = useRef(0)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = testimonialsRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setTestimonialsInView(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="cases" ref={sectionRef} className="relative bg-[#f7f7f8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("brands.cases.title")}
        </h2>

        {/* Desktop grid */}
        <div className="mt-12 hidden grid-cols-2 gap-6 md:grid">
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} t={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="relative mt-10 md:hidden">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
            onTouchEnd={(e) => {
              const delta = e.changedTouches[0].clientX - touchStartX.current
              if (delta > 50) {
                const next = Math.max(0, mobileIdx - 1)
                setMobileIdx(next)
                trackCarouselNavigate({ carousel_id: "cases_brands", slide_index: next, direction: "swipe_prev" })
              } else if (delta < -50) {
                const next = Math.min(cases.length - 1, mobileIdx + 1)
                setMobileIdx(next)
                trackCarouselNavigate({ carousel_id: "cases_brands", slide_index: next, direction: "swipe_next" })
              }
            }}
          >
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
            >
              {cases.map((c) => (
                <div key={c.id} className="w-full flex-shrink-0 px-1">
                  <CaseCard c={c} t={t} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setMobileIdx(i)
                  trackCarouselNavigate({ carousel_id: "cases_brands", slide_index: i, direction: "dot" })
                }}
                className={`h-2 rounded-full transition-all ${
                  i === mobileIdx ? "w-6 bg-[#FF6600]" : "w-2 bg-[#0f0f0f]/20"
                }`}
                aria-label={`Case ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials (home-style with video) */}
        <TestimonialsBlock ref={testimonialsRef} t={t} />
      </div>

      {/* Floating side arrows -- mobile only, hidden when testimonials are in view */}
      {isInView && !testimonialsInView && (
        <>
          <button
            onClick={() => {
              const next = Math.max(0, mobileIdx - 1)
              setMobileIdx(next)
              trackCarouselNavigate({ carousel_id: "cases_brands", slide_index: next, direction: "prev" })
            }}
            disabled={mobileIdx === 0}
            className="fixed top-1/2 left-2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] shadow-lg backdrop-blur-sm opacity-40 hover:opacity-100 transition-all disabled:opacity-0 md:hidden"
            aria-label="Case anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => {
              const next = Math.min(cases.length - 1, mobileIdx + 1)
              setMobileIdx(next)
              trackCarouselNavigate({ carousel_id: "cases_brands", slide_index: next, direction: "next" })
            }}
            disabled={mobileIdx === cases.length - 1}
            className="fixed top-1/2 right-2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] shadow-lg backdrop-blur-sm opacity-40 hover:opacity-100 transition-all disabled:opacity-0 md:hidden"
            aria-label="Proximo case"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          </>
        )}
    </section>
  )
}

/* ─── Testimonials Block (home-style with video) ─── */

const TestimonialsBlock = forwardRef<HTMLDivElement, { t: (k: string) => string }>(function TestimonialsBlock({ t }, ref) {
  const [videoOpen, setVideoOpen] = useState<string | null>(null)
  const [mobileIdx, setMobileIdx] = useState(0)
  const touchStartX = useRef(0)

  return (
    <div ref={ref} className="mt-16">
      <h3 className="text-balance text-center text-2xl font-bold tracking-tight text-[#0f0f0f] md:text-3xl">
        {t("brands.testimonials.title")}
      </h3>

      {/* Desktop */}
      <div className="mt-10 hidden grid-cols-2 gap-6 md:grid">
        {brandTestimonials.map((item) => (
          <TestimonialCard
            key={item.id}
            item={item}
            onPlay={() => {
              setVideoOpen(item.video)
              if (item.video) trackVideoPlay({ video_id: "testimonial_brands_" + item.id })
            }}
            t={t}
          />
        ))}
      </div>

      {/* Mobile carousel */}
      <div className="relative mt-8 md:hidden">
        <div
          className="overflow-hidden"
          onTouchStart={(e) => { touchStartX.current = e.touches[0].clientX }}
          onTouchEnd={(e) => {
            const delta = e.changedTouches[0].clientX - touchStartX.current
            if (delta > 50) {
              const next = Math.max(0, mobileIdx - 1)
              setMobileIdx(next)
              trackCarouselNavigate({ carousel_id: "testimonials_brands", slide_index: next, direction: "swipe_prev" })
            } else if (delta < -50) {
              const next = Math.min(brandTestimonials.length - 1, mobileIdx + 1)
              setMobileIdx(next)
              trackCarouselNavigate({ carousel_id: "testimonials_brands", slide_index: next, direction: "swipe_next" })
            }
          }}
        >
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
          >
            {brandTestimonials.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0 px-1">
                <TestimonialCard
                  item={item}
                  onPlay={() => {
                    setVideoOpen(item.video)
                    if (item.video) trackVideoPlay({ video_id: "testimonial_brands_" + item.id })
                  }}
                  t={t}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => {
              const next = Math.max(0, mobileIdx - 1)
              setMobileIdx(next)
              trackCarouselNavigate({ carousel_id: "testimonials_brands", slide_index: next, direction: "prev" })
            }}
            disabled={mobileIdx === 0}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] opacity-50 hover:opacity-100 transition-opacity disabled:opacity-30"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {brandTestimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setMobileIdx(i)
                  trackCarouselNavigate({ carousel_id: "testimonials_brands", slide_index: i, direction: "dot" })
                }}
                className={`h-2 rounded-full transition-all ${
                  i === mobileIdx ? "w-6 bg-[#FF6600]" : "w-2 bg-[#0f0f0f]/20"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => {
              const next = Math.min(brandTestimonials.length - 1, mobileIdx + 1)
              setMobileIdx(next)
              trackCarouselNavigate({ carousel_id: "testimonials_brands", slide_index: next, direction: "next" })
            }}
            disabled={mobileIdx === brandTestimonials.length - 1}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] opacity-50 hover:opacity-100 transition-opacity disabled:opacity-30"
            aria-label="Proximo"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Video modal */}
      <Dialog open={!!videoOpen} onOpenChange={() => setVideoOpen(null)}>
        <DialogContent className="max-w-3xl border-0 bg-[#0a0a0a] p-0">
          <DialogTitle className="sr-only">{"Video"}</DialogTitle>
          <button
            onClick={() => setVideoOpen(null)}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]/20 text-[#ffffff] hover:bg-[#ffffff]/30"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          {videoOpen && (
            <video
              src={videoOpen}
              controls
              autoPlay
              className="aspect-video w-full rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
})

function TestimonialCard({
  item,
  onPlay,
  t,
}: {
  item: (typeof brandTestimonials)[0]
  onPlay: () => void
  t: (key: string) => string
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 transition-shadow hover:shadow-md">
      {/* Video / image placeholder */}
      {item.video ? (
        <button
          onClick={onPlay}
          className="group/play relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0f0f0f] to-[#2a2a2a]"
          aria-label={`Assistir - ${t(item.nameKey)}`}
        >
          {item.thumbnail && (
            <Image
              src={item.thumbnail}
              alt={t(item.nameKey)}
              fill
              className="object-cover object-top brightness-75 transition-all group-hover/play:brightness-60"
            />
          )}
          <div
            className="relative flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover/play:scale-110"
            style={{ backgroundColor: `${item.color}cc` }}
          >
            <Play className="ml-0.5 h-6 w-6 text-[#ffffff]" />
          </div>
          <span className="absolute bottom-2 left-2 rounded-md bg-[#000000]/60 px-2 py-0.5 text-xs text-[#ffffff]">
            {"Assistir depoimento"}
          </span>
        </button>
      ) : item.image ? (
        <div className="relative aspect-video w-full overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={t(item.nameKey)}
            fill
            className="object-cover object-top"
          />
        </div>
      ) : null}

      {/* Person */}
      <div className="mt-5 flex items-center gap-3">
        {"orgLogo" in item && item.orgLogo ? (
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#ffffff] border border-[#e5e5e5] p-1.5">
            <Image src={item.orgLogo} alt={t(item.nameKey)} width={28} height={28} className="h-full w-full object-contain" />
          </div>
        ) : (
          <div
            className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[#ffffff]"
            style={{ backgroundColor: item.color }}
          >
            {item.initials}
          </div>
        )}
        <div>
          <p className="text-sm font-bold text-[#0f0f0f]">{t(item.nameKey)}</p>
          <p className="text-xs text-[#6b6b6b]">{t(item.roleKey)}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm italic leading-relaxed text-[#6b6b6b]">
        {'"'}
        {t(item.quoteKey)}
        {'"'}
      </p>
    </div>
  )
}
