"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const cases = [
  {
    id: "enriquecimento",
    title: "Enriquecimento de base de fãs identificados",
    logos: [],
    badge: null,
    desafio:
      "Ampliar a base de sócios-torcedores identificados e, ao mesmo tempo, compreender melhor o perfil dos torcedores, seus hábitos de consumo, interesse em produtos oficiais e barreiras para adesão a planos pagos.",
    abordagem: [
      "Survey integrado ao cadastro de sócio-torcedor, coletando informações estratégicas.",
      "Base para cruzar navegação e potencializar ofertas personalizadas, como upgrades de plano.",
      "Audiências instantâneas na Plataforma Retize, prontas para ações de ativação em site, e-mail e app.",
    ],
    resultados: [
      "Validação do preço atual dos planos de sócio.",
      "Base enriquecida com dados estratégicos e intenção de compra.",
      "Identificação dos motivadores de migração para planos pagos.",
    ],
  },
  {
    id: "cupons",
    title: "Fomento do uso de cupons de desconto",
    logos: ["O Burguês", "Imperial eSports"],
    badge: null,
    desafio:
      "Construir uma conexão da hamburgueria com o fã de e-sports além da simples oferta de cupons e aprender mais sobre os hábitos de consumo dos fãs para moldar serviço e o produto.",
    abordagem: [
      "Retize Survey para avaliar perfil de consumo e ingredientes favoritos dos fãs da Imperial.",
      "Coleta de dados da interface do fã com O Burguês, inclusive site da hamburgueria.",
      'Criação do "Combo goIMP", lanche personalizado para os fãs.',
    ],
    resultados: [
      "TOP 1 cupom mais usado da hamburgueria.",
      "Conexão real e significativa com o fã de e-sport.",
    ],
  },
  {
    id: "patrocinio",
    title: "Ativações personalizadas de patrocínio",
    logos: ["H2bet", "Atlético MG"],
    badge: null,
    desafio:
      "Criar jornada de conversão para fãs do Clube Atlético Mineiro com a nova patrocinadora master H2bet.",
    abordagem: [
      "Construção de audiências personalizadas com base no histórico digital do fã do Galo.",
      "Entrega de alto impacto para o torcedor Atleticano com banner em destaque no Aplicativo.",
      "Engajamento do fã em ações da H2bet com mensagens personalizadas em cada momento da jornada.",
    ],
    resultados: [
      "Taxa de cliques recorde para o segmento.",
      "Associação afetiva do fã com a marca.",
      "Análise completa da jornada do fã desde o super app até o canal da H2bet.",
    ],
  },
  {
    id: "exposicao",
    title: "Mensuração de exposição de mídia",
    logos: ["Série D"],
    badge: "Case em andamento",
    desafio:
      "Mensurar e valorar a exposição de mídia gerada para patrocinadores do clube durante o Campeonato Brasileiro Série D.",
    abordagem: [
      "Elaboração de cálculo personalizado de exposição de mídia por canal.",
      "Identificação dos melhores canais e momentos para exposição de cada patrocinador.",
      "Correlação das reações dos fãs nas redes sociais com as exposições de patrocinadores.",
    ],
    resultados: [
      "Lift de impacto das marcas dos patrocinadores.",
      "Análise completa da jornada do patrocinador em diversas transmissões.",
      "Análise e relatórios de ROAS.",
    ],
  },
]

function CaseCard({ c }: { c: (typeof cases)[0] }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 shadow-sm transition-shadow hover:shadow-md">
      {/* Top */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-wrap gap-2">
          {c.logos.map((logo) => (
            <span
              key={logo}
              className="rounded-full bg-[#f0f0f0] px-3 py-1 text-xs font-semibold text-[#0f0f0f]"
            >
              {logo}
            </span>
          ))}
        </div>
        {c.badge && (
          <Badge variant="secondary" className="whitespace-nowrap bg-[#FF0066]/10 text-xs text-[#FF0066]">
            {c.badge}
          </Badge>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-[#0f0f0f]">{c.title}</h3>

      {/* Desafio */}
      <div className="mt-5">
        <span className="inline-block rounded-md bg-[#0f0f0f] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          Desafio
        </span>
        <p className="mt-2 text-sm leading-relaxed text-[#6b6b6b]">{c.desafio}</p>
      </div>

      {/* Abordagem */}
      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          Abordagem
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {c.abordagem.map((a, i) => (
            <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-[#6b6b6b]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#00CCFF]" aria-hidden="true" />
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* Resultados */}
      <div className="mt-4">
        <span className="inline-block rounded-md bg-[#6b6b6b] px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#ffffff]">
          Resultados
        </span>
        <ul className="mt-2 flex flex-col gap-1.5">
          {c.resultados.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-sm font-medium leading-relaxed text-[#0f0f0f]">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FF0066]" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-auto pt-6">
        <Button
          asChild
          variant="outline"
          size="sm"
          className="w-full gap-2 rounded-full border-[#00CCFF] text-[#00CCFF] hover:bg-[#00CCFF]/10 hover:text-[#00CCFF]"
        >
          <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
            Solicite uma demo
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </Button>
      </div>
    </div>
  )
}

export function CasesSection() {
  const [mobileIdx, setMobileIdx] = useState(0)

  return (
    <section id="cases" className="bg-[#f7f7f8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          Cases
        </h2>

        {/* Desktop grid */}
        <div className="mt-12 hidden grid-cols-2 gap-6 md:grid">
          {cases.map((c) => (
            <CaseCard key={c.id} c={c} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="relative mt-10 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
            >
              {cases.map((c) => (
                <div key={c.id} className="w-full flex-shrink-0 px-1">
                  <CaseCard c={c} />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile nav */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setMobileIdx(Math.max(0, mobileIdx - 1))}
              disabled={mobileIdx === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] disabled:opacity-30"
              aria-label="Case anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === mobileIdx ? "w-6 bg-[#00CCFF]" : "w-2 bg-[#0f0f0f]/20"
                  }`}
                  aria-label={`Case ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setMobileIdx(Math.min(cases.length - 1, mobileIdx + 1))}
              disabled={mobileIdx === cases.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] disabled:opacity-30"
              aria-label="Próximo case"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
