"use client"

import { ShoppingBag, Target, TrendingUp, Layers3 } from "lucide-react"
import { Button } from "@/components/ui/button"

const levers = [
  {
    icon: ShoppingBag,
    title: "Venda de produtos oficiais e licenciados",
    description:
      "Aumente conversão na loja e no matchday com segmentação por interesse, histórico de compra e comportamento. Ative vitrines, recomendações e campanhas personalizadas para cada perfil de torcedor.",
    accent: "#00CCFF",
  },
  {
    icon: Target,
    title: "Otimização de entrega de patrocínio",
    description:
      "Entregue valor real aos patrocinadores com mensuração, segmentação e relatórios por canal. Transforme ativos digitais em inventário inteligente e prove performance com dados.",
    accent: "#FF0066",
  },
  {
    icon: TrendingUp,
    title: "Aumento de receita recorrente com os fãs",
    description:
      "Crie estratégias para elevar ARPU e recorrência com jornadas de relacionamento. Identifique momentos certos para upsell, cross-sell e reengajamento em todos os canais.",
    accent: "#00CCFF",
  },
  {
    icon: Layers3,
    title: "Estruturação de novos produtos digitais de patrocínio",
    description:
      "Estruture ofertas digitais escaláveis com base em audiência, comportamento e contexto. Construa pacotes, ativações e experiências que aumentam demanda e ticket médio.",
    accent: "#FF0066",
  },
]

export function RevenueLeverSection() {
  return (
    <section id="alavancas" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {"Alavancas de receita"}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {levers.map((lever) => (
            <div
              key={lever.title}
              className="group relative overflow-hidden rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              {/* Subtle accent overlay */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse at bottom right, ${lever.accent}10, transparent 70%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${lever.accent}15` }}
                >
                  <lever.icon className="h-6 w-6" style={{ color: lever.accent }} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#0f0f0f]">{lever.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">{lever.description}</p>
              </div>
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
              Quero aumentar receita
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
