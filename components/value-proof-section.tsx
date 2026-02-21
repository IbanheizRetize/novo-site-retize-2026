"use client"

import { useEffect, useRef, useState } from "react"
import { Building2, Globe, Users, Smartphone } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

function AnimatedNumber({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number
  prefix: string
  suffix: string
  inView: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [inView, value])

  return (
    <span className="whitespace-nowrap">
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

export function ValueProofSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [inView, setInView] = useState(false)
  const { t } = useI18n()

  const metrics = [
    {
      icon: Building2,
      value: 30,
      suffix: "",
      label: t("valueProof.metric1.label"),
      prefix: "",
    },
    {
      icon: Globe,
      value: 12,
      suffix: "",
      label: t("valueProof.metric2.label"),
      prefix: "",
    },
    {
      icon: Users,
      value: 8,
      suffix: t("valueProof.metric3.suffix"),
      label: t("valueProof.metric3.label"),
      prefix: "+",
    },
    {
      icon: Smartphone,
      value: 100,
      suffix: t("valueProof.metric4.suffix"),
      label: t("valueProof.metric4.label"),
      prefix: "+",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0f0f0f] py-20 lg:py-28"
    >
      {/* Subtle purple glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-[#4700d1]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-balance text-center text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl">
          {t("valueProof.title")}
        </h2>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4700d1]/20">
                <metric.icon className="h-7 w-7 text-[#4700d1]" aria-hidden="true" />
              </div>
              <p className="mt-4 text-3xl font-bold text-[#ffffff] md:text-4xl lg:text-5xl">
                <AnimatedNumber
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  inView={inView}
                />
              </p>
              <p className="mt-2 max-w-[180px] text-sm leading-snug text-[#ffffff]/60">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
