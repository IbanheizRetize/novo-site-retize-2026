"use client"

import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const entities = [
  "CBV",
  "Grêmio",
  "São Paulo",
  "Atlético MG",
  "Vasco da Gama",
  "Imperial",
  "Sport Club do Recife",
  "Coritiba FC",
  "Vitória",
  "Portuguesa",
  "LPF",
  "FPF",
  "Vila Nova",
  "Grande Prêmio",
  "Nosso Palestra",
  "Máquina do Esporte",
  "Olimpíada Todo Dia",
  "Filma Eu",
  "Agendei",
  "Paysandu",
  "Azuriz FC",
  "Magnus Futsal",
]

function getInitials(name: string): string {
  const parts = name.split(" ").filter((w) => w.length > 2 || name.split(" ").length <= 2)
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

export function PartnersSection() {
  return (
    <section className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {"Quem joga com a Retize"}
        </h2>

        <TooltipProvider delayDuration={200}>
          <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
            {entities.map((name) => (
              <Tooltip key={name}>
                <TooltipTrigger asChild>
                  <div className="group flex aspect-square cursor-default items-center justify-center rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-4 transition-all hover:scale-105 hover:shadow-md">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#00CCFF]/15 text-base font-bold text-[#0f0f0f] transition-colors group-hover:bg-[#00CCFF]/25">
                      {getInitials(name)}
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-[#00CCFF] px-8 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
              Quero jogar junto
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
