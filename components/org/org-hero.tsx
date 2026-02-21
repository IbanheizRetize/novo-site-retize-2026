"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OrgHero() {
  const handleScroll = () => {
    const el = document.querySelector("#alavancas")
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="org-hero"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden md:min-h-[70vh] lg:min-h-[80vh]"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 h-full w-1/2 opacity-20"
        style={{
          background: "radial-gradient(ellipse at top left, #00CCFF, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 h-full w-1/2 opacity-15"
        style={{
          background: "radial-gradient(ellipse at bottom right, #FF0066, transparent 60%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#000000]/45" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-[#ffffff] md:text-5xl lg:text-6xl">
          {"Plataforma de monetização do fã de esporte"}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-[#ffffff]/85 md:text-xl">
          {"Ajudamos organizações esportivas a construir a jornada de monetização do fã aumentando o potencial de receita recorrente."}
        </p>
        <Button
          size="lg"
          className="mt-8 rounded-md bg-[#00CCFF] px-8 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/30 transition-all hover:shadow-xl hover:shadow-[#00CCFF]/40 hover:brightness-110"
          onClick={handleScroll}
        >
          Saiba mais
        </Button>
      </div>

      {/* Scroll cue */}
      <button
        onClick={handleScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#ffffff]/70 transition-colors hover:text-[#ffffff]"
        aria-label="Rolar para baixo"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
