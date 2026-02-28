"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"

const orgs = [
  { name: "CBV", logo: "/logos/cbv.png" },
  { name: "Grêmio", logo: "/logos/gremio.png" },
  { name: "Atlético MG", logo: "/logos/atletico-mg.png" },
  { name: "São Paulo", logo: "/logos/sao-paulo.png" },
  { name: "Vasco da Gama", logo: "/logos/vasco.png" },
  { name: "Imperial", logo: "/logos/imperial.png" },
]

const brands = [
  { name: "Banco Carrefour", logo: "/logos/banco-carrefour.png" },
  { name: "Atacadão", logo: "/logos/atacadao.png" },
  { name: "Cielo", logo: "/logos/cielo.png" },
  { name: "Samsung", logo: "/logos/samsung.png" },
  { name: "Zamp", logo: "/logos/zamp.png" },
  { name: "Chiliz", logo: "/logos/chiliz.png" },
]

function LogoGrid({
  title,
  items,
}: {
  title: string
  items: { name: string; logo: string }[]
}) {
  return (
    <div>
      <h3 className="mb-6 text-center text-sm font-bold uppercase tracking-widest text-[#6b6b6b]">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="group relative flex aspect-square items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-5 transition-shadow hover:shadow-md"
          >
            <Image
              src={item.logo}
              alt={item.name}
              width={120}
              height={120}
              className="h-12 w-12 object-contain lg:h-16 lg:w-16"
            />
            <span className="pointer-events-none absolute inset-x-0 bottom-2 text-center text-[10px] font-semibold text-[#6b6b6b] opacity-0 transition-opacity group-hover:opacity-100">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ClientsSection() {
  const { t } = useI18n()

  return (
    <section id="clientes" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
            {t("clients.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[#6b6b6b]">
            {t("clients.subtitle")}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          <LogoGrid title={t("clients.orgs")} items={orgs} />
          <LogoGrid title={t("clients.brands")} items={brands} />
        </div>
      </div>
    </section>
  )
}
