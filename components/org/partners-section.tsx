"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

const entities: { name: string; logo?: string }[] = [
  { name: "CBV", logo: "/logos/cbv.png" },
  { name: "Grêmio", logo: "/logos/gremio.png" },
  { name: "São Paulo", logo: "/logos/sao-paulo.png" },
  { name: "Atlético MG", logo: "/logos/atletico-mg.png" },
  { name: "Vasco da Gama", logo: "/logos/vasco.png" },
  { name: "Imperial", logo: "/logos/imperial.png" },
  { name: "Sport Club do Recife", logo: "/logos/sport.png" },
  { name: "Coritiba FC", logo: "/logos/coritiba.png" },
  { name: "Vitória", logo: "/logos/vitoria.png" },
  { name: "Portuguesa", logo: "/logos/portuguesa.png" },
  { name: "LPF", logo: "/logos/lpf.png" },
  { name: "FPF", logo: "/logos/fpf.png" },
  { name: "Vila Nova", logo: "/logos/vila-nova.png" },
  { name: "Grande Prêmio", logo: "/logos/grande-premio.png" },
  { name: "Nosso Palestra", logo: "/logos/nosso-palestra.jpeg" },
  { name: "Máquina do Esporte", logo: "/logos/maquina.png" },
  { name: "Olimpíada Todo Dia", logo: "/logos/otd.jpg" },
  { name: "Filma Eu", logo: "/logos/filmaeu.png" },
  { name: "Agendei", logo: "/logos/agendei.png" },
  { name: "Paysandu", logo: "/logos/Paysandu.png" },
  { name: "Azuriz FC", logo: "/logos/Azuriz.png" },
  { name: "Magnus Futsal", logo: "/logos/magnus.png" },
  { name: "América RN", logo: "/logos/america-rn.png" },
  { name: "Avaí FC", logo: "/logos/avai.png" },
]

function getInitials(name: string): string {
  const parts = name.split(" ").filter((w) => w.length > 2 || name.split(" ").length <= 2)
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function PartnersSection() {
  const { t } = useI18n()

  return (
    <section id="clientes" className="bg-[#ffffff] pt-4 pb-20 lg:pt-4 lg:pb-28">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
            {t("org.partners.title")}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
          {entities.map((item) => (
            <div
              key={item.name}
              className="group relative flex aspect-square items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-5 transition-shadow hover:shadow-md"
            >
              {item.logo ? (
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="h-12 w-12 object-contain lg:h-16 lg:w-16"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00CCFF]/15 text-base font-bold text-[#0f0f0f]">
                  {getInitials(item.name)}
                </div>
              )}
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
            className="rounded-md bg-[#00CCFF] px-8 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            <a href="https://wa.me/5511930601050" target="_blank" rel="noopener noreferrer">
              {t("org.partners.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
