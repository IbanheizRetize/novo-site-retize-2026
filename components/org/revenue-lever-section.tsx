"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const levers = [
  {
    titleKey: "org.levers.1.title",
    descKey: "org.levers.1.desc",
    image: "/images/lever-products.jpg",
    accent: "#00CCFF",
  },
  {
    titleKey: "org.levers.2.title",
    descKey: "org.levers.2.desc",
    image: "/images/lever-sponsorship.jpg",
    accent: "#FF0066",
  },
  {
    titleKey: "org.levers.3.title",
    descKey: "org.levers.3.desc",
    image: "/images/lever-fans.jpg",
    accent: "#00CCFF",
  },
  {
    titleKey: "org.levers.4.title",
    descKey: "org.levers.4.desc",
    image: "/images/lever-digital.jpg",
    accent: "#FF0066",
  },
]

function LeverCard({
  lever,
  t,
}: {
  lever: (typeof levers)[0]
  t: (key: string) => string
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mobileActive, setMobileActive] = useState(false)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    // Only auto-reveal on mobile via IntersectionObserver
    const mq = window.matchMedia("(max-width: 767px)")
    if (!mq.matches) return

    const observer = new IntersectionObserver(
      ([entry]) => setMobileActive(entry.isIntersecting),
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="group relative min-h-[280px] overflow-hidden rounded-2xl md:min-h-[320px]"
    >
      {/* Background image */}
      <Image
        src={lever.image}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 group-hover:opacity-70 ${
          mobileActive ? "opacity-70" : "opacity-60"
        }`}
        style={{ backgroundColor: "#000000" }}
        aria-hidden="true"
      />

      {/* Accent color overlay */}
      <div
        className={`absolute inset-0 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-25 ${
          mobileActive ? "opacity-25" : "opacity-15"
        }`}
        style={{ backgroundColor: lever.accent }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center md:p-8">
        <h3
          className={`text-xl font-bold text-[#ffffff] transition-transform duration-300 group-hover:-translate-y-4 md:text-2xl ${
            mobileActive ? "-translate-y-4" : ""
          }`}
        >
          {t(lever.titleKey)}
        </h3>
        <p
          className={`mt-3 max-w-md text-sm leading-relaxed text-[#ffffff] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
            mobileActive ? "translate-y-0 opacity-100" : "opacity-0"
          }`}
        >
          {t(lever.descKey)}
        </p>
      </div>

      {/* Top accent line */}
      <div
        className={`absolute top-0 left-0 h-1 transition-all duration-500 group-hover:w-full ${
          mobileActive ? "w-full" : "w-0"
        }`}
        style={{ backgroundColor: lever.accent }}
        aria-hidden="true"
      />
    </div>
  )
}

export function RevenueLeverSection() {
  const { t } = useI18n()

  return (
    <section id="alavancas" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("org.levers.title")}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
          {levers.map((lever) => (
            <LeverCard key={lever.titleKey} lever={lever} t={t} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-[#00CCFF] px-8 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/20 transition-all hover:shadow-xl hover:shadow-[#FF0066]/20 hover:brightness-110"
          >
            <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
              {t("org.levers.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
