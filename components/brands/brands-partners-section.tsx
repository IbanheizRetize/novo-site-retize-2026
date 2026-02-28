"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"
import { trackExternalLinkClick } from "@/lib/gtag"

const brands: { name: string; logo: string }[] = [
  { name: "Banco Carrefour",     logo: "/logos/banco-carrefour.png" },
  { name: "Atacadão",            logo: "/images/atacadao.png" },
  { name: "Cielo",               logo: "/logos/cielo.png" },
  { name: "Samsung",             logo: "/images/samsung.png" },
  { name: "Burger King",         logo: "/images/burger-king.png" },
  { name: "Piracanjuba",         logo: "/images/piracanjuba.png" },
  { name: "Unifecaf",            logo: "/images/unifecaf.png" },
  { name: "Chiliz",              logo: "/logos/chiliz.png" },
  { name: "Ministério da Saúde", logo: "/images/ministerio-da-saude.png" },
  { name: "Prosocks",            logo: "/images/prosocks.webp" },
  { name: "Apostar Bet",         logo: "/images/apostar.jpg" },
  { name: "Hot Beach",           logo: "/images/hotbeach.webp" },
]

export function BrandsPartnersSection() {
  const { t } = useI18n()

  return (
    <section id="clientes" className="bg-[#ffffff] pt-4 pb-20 lg:pt-4 lg:pb-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
            {t("brands.partners.title")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6">
          {brands.map((item) => (
            <div
              key={item.name}
              className="group relative flex aspect-square items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-5 transition-shadow hover:shadow-md"
            >
              <Image
                src={item.logo}
                alt={item.name}
                width={80}
                height={80}
                className="h-20 w-full object-contain"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[10px] font-semibold text-[#6b6b6b] opacity-0 transition-opacity group-hover:opacity-100">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-[#FF6600] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#FF6600]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            <a href="https://wa.me/5511930601050" target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ link_url: "https://wa.me/5511930601050", link_text: "WhatsApp - Brands Partners CTA" })}>
              {t("brands.partners.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
