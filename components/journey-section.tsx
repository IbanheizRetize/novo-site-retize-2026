"use client"

import {
  ArrowDown,
  ArrowRight,
  Fingerprint,
  Layers3,
  RadioTower,
  Target,
  UsersRound,
  type LucideIcon,
} from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

type JourneyStep = {
  icon: LucideIcon
  title: string
  supportingTitle: string
  description: string
  color: string
  step: string
}

export function JourneySection() {
  const { t } = useI18n()

  const steps: JourneyStep[] = [
    {
      icon: Layers3,
      title: t("journey.step1.title"),
      supportingTitle: t("journey.step1.supportingTitle"),
      description: t("journey.step1.desc"),
      color: "#00CCFF",
      step: "01",
    },
    {
      icon: Fingerprint,
      title: t("journey.step2.title"),
      supportingTitle: t("journey.step2.supportingTitle"),
      description: t("journey.step2.desc"),
      color: "#6D28D9",
      step: "02",
    },
    {
      icon: UsersRound,
      title: t("journey.step3.title"),
      supportingTitle: t("journey.step3.supportingTitle"),
      description: t("journey.step3.desc"),
      color: "#9333EA",
      step: "03",
    },
    {
      icon: Target,
      title: t("journey.step4.title"),
      supportingTitle: t("journey.step4.supportingTitle"),
      description: t("journey.step4.desc"),
      color: "#F000B8",
      step: "04",
    },
    {
      icon: RadioTower,
      title: t("journey.step5.title"),
      supportingTitle: t("journey.step5.supportingTitle"),
      description: t("journey.step5.desc"),
      color: "#FF8A00",
      step: "05",
    },
  ]

  return (
    <section
      className="relative overflow-hidden bg-[#0f0f0f] py-20 lg:py-28"
      aria-labelledby="journey-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg, #00CCFF 0%, #4700D1 30%, #000000 52%, #F000B8 74%, #FF6600 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="journey-title"
            className="text-balance text-3xl font-bold tracking-tight text-white md:text-4xl"
          >
            {t("journey.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/60">
            {t("journey.subtitle")}
          </p>
        </div>

        <div className="mt-12 text-center lg:mt-16">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#9D72FF] md:text-base">
            {t("journey.maturity.title")}
          </h3>
        </div>

        <div className="relative mt-8 hidden lg:block">
          <ol className="relative grid grid-cols-5 gap-6 xl:gap-8">
            {steps.map((step, index) => (
              <li key={step.step} className="relative flex min-w-0">
                <div
                  className="relative z-10 flex w-full flex-col items-center rounded-2xl border bg-[#171717]/95 px-4 pb-5 pt-4 text-center backdrop-blur-sm xl:px-5"
                  style={{ borderColor: `${step.color}80` }}
                >
                  <span
                    className="absolute left-3 top-3 flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.step}
                  </span>
                  <div
                    className="flex h-16 w-16 items-center justify-center rounded-full border"
                    style={{
                      borderColor: `${step.color}70`,
                      backgroundColor: `${step.color}18`,
                      color: step.color,
                    }}
                  >
                    <step.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h4
                    className="mt-4 min-h-10 text-sm font-bold uppercase leading-tight tracking-wide"
                    style={{ color: step.color }}
                  >
                    {step.title}
                  </h4>
                  <p className="mt-4 min-h-12 text-sm font-semibold leading-snug text-white">
                    {step.supportingTitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-white/60">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className="pointer-events-none absolute left-full top-1/2 z-20 flex w-6 -translate-y-1/2 items-center justify-center xl:w-8"
                    style={{ color: step.color }}
                    aria-hidden="true"
                  >
                    <ArrowRight className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </div>

        <ol className="mt-8 flex flex-col lg:hidden">
          {steps.map((step, index) => (
            <li key={step.step} className="relative flex gap-4 pb-8 last:pb-0">
              {index < steps.length - 1 && (
                <>
                  <div
                    className="pointer-events-none absolute bottom-0 left-6 top-12 w-px -translate-x-1/2"
                    style={{ backgroundColor: `${step.color}70` }}
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 flex h-8 w-12 items-center justify-center"
                    style={{ color: step.color }}
                    aria-hidden="true"
                  >
                    <ArrowDown
                      className="h-5 w-5"
                      strokeWidth={2.5}
                    />
                  </div>
                </>
              )}
              <div
                className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border bg-[#171717]"
                style={{ borderColor: `${step.color}80`, color: step.color }}
              >
                <step.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div
                className="flex-1 rounded-2xl border bg-white/[0.06] px-4 py-4 backdrop-blur-sm"
                style={{ borderColor: `${step.color}55` }}
              >
                <span
                  className="text-xs font-bold uppercase tracking-[0.15em]"
                  style={{ color: step.color }}
                >
                  {t("journey.step")} {step.step}
                </span>
                <h4 className="mt-1 text-base font-bold uppercase text-white">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm font-semibold leading-snug text-white">
                  {step.supportingTitle}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto max-w-3xl">
          <div className="relative mx-auto h-12 w-6 text-[#9D72FF]" aria-hidden="true">
            <div className="absolute bottom-2 left-1/2 top-0 w-px -translate-x-1/2 bg-[#9D72FF]/60" />
            <ArrowDown
              className="absolute bottom-0 left-1/2 h-5 w-5 -translate-x-1/2"
              strokeWidth={2.5}
            />
          </div>
          <div className="text-center">
            <span className="inline-flex rounded-full border border-[#9D72FF]/60 bg-[#9D72FF]/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#B99BFF]">
              {t("journey.outcome.label")}
            </span>
            <p className="mt-3 rounded-2xl bg-[#17002F] px-6 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-black/20 md:text-base">
              {t("journey.outcome.value")}
            </p>
          </div>

          <div className="relative h-16" aria-hidden="true">
            <svg
              className="block h-full w-full"
              viewBox="0 0 100 64"
              preserveAspectRatio="none"
            >
              <path
                d="M50 0 V16"
                fill="none"
                stroke="rgba(255,255,255,0.28)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M50 16 H25 V52"
                fill="none"
                stroke="#6D28D9"
                strokeWidth="1.5"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M50 16 H75 V52"
                fill="none"
                stroke="#F000B8"
                strokeWidth="1.5"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <ArrowDown
              className="absolute bottom-0 left-1/4 h-5 w-5 -translate-x-1/2 text-[#6D28D9]"
              strokeWidth={2.5}
            />
            <ArrowDown
              className="absolute bottom-0 left-3/4 h-5 w-5 -translate-x-1/2 text-[#F000B8]"
              strokeWidth={2.5}
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-6">
            <div className="rounded-2xl border border-[#6D28D9]/70 bg-[#6D28D9]/10 px-3 py-5 text-center md:px-6">
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#A98BFF] md:text-base">
                {t("journey.revenue.b2c")}
              </h4>
            </div>
            <div className="rounded-2xl border border-[#F000B8]/70 bg-[#F000B8]/10 px-3 py-5 text-center md:px-6">
              <h4 className="text-sm font-bold uppercase tracking-wide text-[#FF72DC] md:text-base">
                {t("journey.revenue.b2b")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
