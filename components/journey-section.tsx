"use client"

import { Cable, BarChart3, Zap, DollarSign } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function JourneySection() {
  const { t } = useI18n()

  const steps = [
    {
      icon: Cable,
      title: t("journey.step1.title"),
      description: t("journey.step1.desc"),
      step: "01",
    },
    {
      icon: BarChart3,
      title: t("journey.step2.title"),
      description: t("journey.step2.desc"),
      step: "02",
    },
    {
      icon: Zap,
      title: t("journey.step3.title"),
      description: t("journey.step3.desc"),
      step: "03",
    },
    {
      icon: DollarSign,
      title: t("journey.step4.title"),
      description: t("journey.step4.desc"),
      step: "04",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#0f0f0f] py-20 lg:py-28">
      {/* Subtle gradient accent */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "linear-gradient(135deg, #9900FF 0%, #000000 50%, #FF6600 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
        {/* Title + subtitle */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl">
            {t("journey.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#ffffff]/60">
            {t("journey.subtitle")}
          </p>
        </div>

        {/* Desktop layout */}
        <div className="relative mt-16 hidden lg:block" style={{ height: 520 }}>
          {/* SVG connector lines - full overlay, coordinates match icon centers */}
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            width="100%"
            height="100%"
            viewBox="0 0 1000 520"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Integration icon center (135,340) -> Measurement icon center (350,32) */}
            <path
              d="M135,340 C135,180 350,180 350,32"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="2"
              strokeDasharray="8,6"
              vectorEffect="non-scaling-stroke"
            />
            {/* Measurement icon center (350,32) -> Activation icon center (650,340) */}
            <path
              d="M350,32 C350,180 650,180 650,340"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="2"
              strokeDasharray="8,6"
              vectorEffect="non-scaling-stroke"
            />
            {/* Activation icon center (650,340) -> Monetization icon center (870,32) */}
            <path
              d="M650,340 C650,180 870,180 870,32"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="2"
              strokeDasharray="8,6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* Step 2 - Measurement: top row, center-left */}
          <div className="absolute z-10 flex w-[28%] flex-col items-center text-center" style={{ left: "21%", top: 0 }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ffffff]/20 bg-[#1a1a2e]">
              <BarChart3 className="h-7 w-7 text-[#ffffff]" />
            </div>
            <div className="mt-2 w-full rounded-xl bg-[#ffffff]/[0.08] px-5 py-3 backdrop-blur-sm" style={{ opacity: 0.85 }}>
              <h3 className="text-base font-bold tracking-wide text-[#ffffff]">
                {steps[1].title}
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#ffffff]/70">
                {steps[1].description}
              </p>
            </div>
          </div>

          {/* Step 4 - Monetization: top row, far right (+20px extra) */}
          <div className="absolute z-10 flex w-[28%] flex-col items-center text-center" style={{ right: "calc(1% - 20px)", top: 0 }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#FFCE00]/40 bg-[#1a1a2e]">
              <DollarSign className="h-7 w-7 text-[#FFCE00]" />
            </div>
            <div className="mt-2 w-full rounded-xl bg-[#ffffff]/[0.08] px-5 py-3 backdrop-blur-sm" style={{ opacity: 0.85 }}>
              <h3 className="text-base font-bold tracking-wide text-[#ffffff]">
                {steps[3].title}
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#ffffff]/70">
                {steps[3].description}
              </p>
            </div>
          </div>

          {/* Step 1 - Integration: bottom row, far left (-20px extra) */}
          <div className="absolute z-10 flex w-[28%] flex-col items-center text-center" style={{ left: "calc(1% - 20px)", bottom: 0 }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ffffff]/20 bg-[#1a1a2e]">
              <Cable className="h-7 w-7 text-[#ffffff]" />
            </div>
            <div className="mt-2 w-full rounded-xl bg-[#ffffff]/[0.08] px-5 py-3 backdrop-blur-sm" style={{ opacity: 0.85 }}>
              <h3 className="text-base font-bold tracking-wide text-[#ffffff]">
                {steps[0].title}
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#ffffff]/70">
                {steps[0].description}
              </p>
            </div>
          </div>

          {/* Step 3 - Activation: bottom row, center-right */}
          <div className="absolute z-10 flex w-[28%] flex-col items-center text-center" style={{ left: "51%", bottom: 0 }}>
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#ffffff]/20 bg-[#1a1a2e]">
              <Zap className="h-7 w-7 text-[#ffffff]" />
            </div>
            <div className="mt-2 w-full rounded-xl bg-[#ffffff]/[0.08] px-5 py-3 backdrop-blur-sm" style={{ opacity: 0.85 }}>
              <h3 className="text-base font-bold tracking-wide text-[#ffffff]">
                {steps[2].title}
              </h3>
              <p className="mt-1 text-[11px] leading-relaxed text-[#ffffff]/70">
                {steps[2].description}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: vertical stepper (unchanged) */}
        <div className="mt-12 flex flex-col gap-0 lg:hidden">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative flex gap-5 pb-10">
              {idx < steps.length - 1 && (
                <div
                  className="absolute left-6 w-[2px] bg-[#ffffff]/15"
                  style={{ top: "48px", height: "calc(100% - 48px)" }}
                  aria-hidden="true"
                />
              )}
              <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#ffffff]/20 bg-[#0f0f0f]">
                <step.icon className="h-5 w-5 text-[#ffffff]" aria-hidden="true" />
              </div>
              <div className="flex-1 rounded-xl bg-[#ffffff]/10 px-4 py-3 backdrop-blur-sm">
                <span className="text-xs font-bold uppercase tracking-widest text-[#4700d1]">
                  {t("journey.step")} {step.step}
                </span>
                <h3 className="mt-1 text-base font-bold text-[#ffffff]">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#ffffff]/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
