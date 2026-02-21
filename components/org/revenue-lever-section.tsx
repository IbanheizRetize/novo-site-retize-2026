"use client"

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
            <div
              key={lever.titleKey}
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

              {/* Dark overlay - dims on hover to reveal image more */}
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-70"
                style={{ backgroundColor: "#000000", opacity: 0.6 }}
                aria-hidden="true"
              />

              {/* Accent color overlay */}
              <div
                className="absolute inset-0 opacity-15 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-25"
                style={{ backgroundColor: lever.accent }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-center md:p-8">
                <h3 className="text-xl font-bold text-[#ffffff] transition-transform duration-300 group-hover:-translate-y-4 md:text-2xl">
                  {t(lever.titleKey)}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[#ffffff]/80 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {t(lever.descKey)}
                </p>
              </div>

              {/* Top accent line on hover */}
              <div
                className="absolute top-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: lever.accent }}
                aria-hidden="true"
              />
            </div>
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
