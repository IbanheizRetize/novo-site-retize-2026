"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useI18n } from "@/lib/i18n/context"

interface CaseData {
  id: string
  titleKey: string
  challengeKey: string
  approachKeys: string[]
  resultKeys: string[]
  badge?: string
  orgName: string
  orgLogo?: string
  partnerName?: string
  partnerLogo?: string
  caseImage?: string
}

const cases: CaseData[] = [
  {
    id: "enriquecimento",
    titleKey: "org.cases.1.title",
    challengeKey: "org.cases.1.challenge",
    approachKeys: ["org.cases.1.approach.1", "org.cases.1.approach.2", "org.cases.1.approach.3"],
    resultKeys: ["org.cases.1.result.1", "org.cases.1.result.2", "org.cases.1.result.3"],
    orgName: "Confederacao Brasileira de Volei",
    orgLogo: "/logos/cbv.png",
  },
  {
    id: "cupons",
    titleKey: "org.cases.2.title",
    challengeKey: "org.cases.2.challenge",
    approachKeys: ["org.cases.2.approach.1", "org.cases.2.approach.2", "org.cases.2.approach.3"],
    resultKeys: ["org.cases.2.result.1", "org.cases.2.result.2"],
    orgName: "Imperial",
    orgLogo: "/logos/imperial.png",
    partnerName: "O Burgues",
  },
  {
    id: "patrocinio",
    titleKey: "org.cases.3.title",
    challengeKey: "org.cases.3.challenge",
    approachKeys: ["org.cases.3.approach.1", "org.cases.3.approach.2", "org.cases.3.approach.3"],
    resultKeys: ["org.cases.3.result.1", "org.cases.3.result.2", "org.cases.3.result.3"],
    orgName: "Atletico MG",
    orgLogo: "/logos/atletico-mg.png",
    partnerName: "H2bet",
  },
  {
    id: "exposicao",
    titleKey: "org.cases.4.title",
    challengeKey: "org.cases.4.challenge",
    approachKeys: ["org.cases.4.approach.1", "org.cases.4.approach.2", "org.cases.4.approach.3"],
    resultKeys: ["org.cases.4.result.1", "org.cases.4.result.2", "org.cases.4.result.3"],
    badge: "org.cases.badge.ongoing",
    orgName: "Portuguesa de Desportos",
  },
]

function CaseCard({ c, t }: { c: CaseData; t: (key: string) => string }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Org logo + name */}
      <div className="flex items-center gap-3">
        {c.orgLogo && (
          <Image
            src={c.orgLogo}
            alt={c.orgName}
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
        )}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-[#0f0f0f]">{c.orgName}</span>
          {c.partnerName && (
            <>
              <span className="text-xs text-[#6b6b6b]">{"&"}</span>
              <span className="text-sm font-bold text-[#0f0f0f]">{c.partnerName}</span>
            </>
          )}
        </div>
        {c.badge && (
          <Badge variant="secondary" className="ml-auto whitespace-nowrap bg-[#FF0066]/10 text-xs text-[#FF0066]">
            {t(c.badge)}
          </Badge>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-[#0f0f0f]">{t(c.titleKey)}</h3>

      {/* Desafio */}
      <div className="mt-5">
        <span className="inline-block rounded-md bg-[#0f0f0f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {t("org.cases.label.challenge")}
        </span>
        <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">{t(c.challengeKey)}</p>
      </div>

      {/* Abordagem */}
      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {t("org.cases.label.approach")}
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {c.approachKeys.map((key) => (
            <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-[#6b6b6b]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00CCFF]" aria-hidden="true" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      {/* Resultados */}
      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          {t("org.cases.label.results")}
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {c.resultKeys.map((key) => (
            <li key={key} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#0f0f0f]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF0066]" aria-hidden="true" />
              {t(key)}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer to push image to the bottom */}
      <div className="flex-grow" />

      {/* Case image - always at bottom */}
      {c.caseImage ? (
        <div className="mt-5 overflow-hidden rounded-xl">
          <Image
            src={c.caseImage}
            alt={t(c.titleKey)}
            width={600}
            height={300}
            className="h-auto w-full object-cover"
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

export function CasesSection() {
  const { t } = useI18n()
  const [mobileIdx, setMobileIdx] = useState(0)

  return (
    <section id="cases" className="bg-[#f7f7f8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("org.cases.title")}
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

          {/* Mobile nav */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setMobileIdx(Math.max(0, mobileIdx - 1))}
              disabled={mobileIdx === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] disabled:opacity-30"
              aria-label="Case anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === mobileIdx ? "w-6 bg-[#00CCFF]" : "w-2 bg-[#0f0f0f]/20"
                  }`}
                  aria-label={`Case ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setMobileIdx(Math.min(cases.length - 1, mobileIdx + 1))}
              disabled={mobileIdx === cases.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] disabled:opacity-30"
              aria-label="Proximo case"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
