"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

interface BrandCase {
  id: string
  titleKey: string
  challengeKey: string
  approachKeys: string[]
  resultKeys: string[]
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
    resultKeys: ["brands.cases.1.result.1", "brands.cases.1.result.2"],
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
    resultKeys: ["brands.cases.2.result.1", "brands.cases.2.result.2"],
  },
]

function CaseCard({ c, t }: { c: BrandCase; t: (k: string) => string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 shadow-sm transition-shadow hover:shadow-md">
      <h3 className="text-lg font-bold text-[#0f0f0f]">{t(c.titleKey)}</h3>

      <div className="mt-5">
        <span className="inline-block rounded-md bg-[#0f0f0f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {"Desafio"}
        </span>
        <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">{t(c.challengeKey)}</p>
      </div>

      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {"Abordagem"}
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
          {"Resultados"}
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
      <div className="mt-5 flex h-32 items-center justify-center rounded-xl border-2 border-dashed border-[#e5e5e5] bg-[#f7f7f8]">
        <span className="text-xs text-[#6b6b6b]/60">Imagem do case</span>
      </div>
    </div>
  )
}

export function BrandsCasesSection() {
  const { t } = useI18n()
  const [mobileIdx, setMobileIdx] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

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
          <div className="overflow-hidden">
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
                onClick={() => setMobileIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === mobileIdx ? "w-6 bg-[#FF6600]" : "w-2 bg-[#0f0f0f]/20"
                }`}
                aria-label={`Case ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            className="rounded-md bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            {t("brands.cases.cta")}
          </Button>
        </div>
      </div>

      {/* Floating side arrows -- mobile only */}
      {isInView && (
        <>
          <button
            onClick={() => setMobileIdx(Math.max(0, mobileIdx - 1))}
            disabled={mobileIdx === 0}
            className="fixed top-1/2 left-2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] shadow-lg backdrop-blur-sm transition-opacity disabled:opacity-0 md:hidden"
            aria-label="Case anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => setMobileIdx(Math.min(cases.length - 1, mobileIdx + 1))}
            disabled={mobileIdx === cases.length - 1}
            className="fixed top-1/2 right-2 z-40 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#0f0f0f]/60 text-[#ffffff] shadow-lg backdrop-blur-sm transition-opacity disabled:opacity-0 md:hidden"
            aria-label="Proximo case"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </section>
  )
}
