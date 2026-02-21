"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

const modules = [
  {
    id: "track",
    name: "Retize Track",
    tags: ["Mensure", "Descubra"],
    bullets: [
      "Mensure e valorize a exposição de mídia com visão computacional",
      "Relatórios transparentes para patrocinadores e insights por canal",
      "Conexão com redes sociais, YouTube e transmissões",
    ],
    video: "/videos/retize-track.mp4",
    poster: "",
  },
  {
    id: "survey",
    name: "Retize Survey",
    tags: ["Descubra", "Ative"],
    bullets: [
      "Pesquisas gamificadas para aumentar e enriquecer base",
      "Questionários rápidos e personalizados por objetivo de negócio",
      "Respostas viram audiência automaticamente",
    ],
    video: "/videos/retize-survey.mp4",
    poster: "",
  },
  {
    id: "analytics",
    name: "Retize Analytics",
    tags: ["Mensure", "Descubra"],
    bullets: [
      "Dashboards e análises com visão única do fã",
      "Filtros avançados e métricas por jornada",
      "Painéis personalizados no onboarding",
    ],
    video: "/videos/retize-analytics.mp4",
    poster: "",
  },
  {
    id: "cdp",
    name: "Retize CDP",
    tags: ["Descubra", "Ative"],
    bullets: [
      "Crie clusters de audiência direto na interface",
      "Use audiências em CRM e mídia display",
      "Performance alimenta a base central do fã",
    ],
    video: "/videos/retize-cdp.mp4",
    poster: "",
  },
  {
    id: "crm",
    name: "Retize CRM",
    tags: ["Ative", "Mensure"],
    bullets: [
      "Réguas de automação para objetivos de negócio",
      "Testes de comunicação por audiência (e-mail como chave)",
      "Templates criados rápido na plataforma",
    ],
    video: "/videos/retize-crm.mp4",
    poster: "",
  },
  {
    id: "ads",
    name: "Retize Ads",
    tags: ["Ative", "Mensure"],
    bullets: [
      "Gerenciador de campanhas em sites e apps",
      "Audiências 1st party prontas para ativação",
      "Parametrização para análise completa da jornada",
    ],
    video: "/videos/retize-ads.mp4",
    poster: "",
  },
]

const TAG_COLORS: Record<string, string> = {
  Mensure: "#00CCFF",
  Descubra: "#FF0066",
  Ative: "#00cc88",
}

export function PlatformDemoSection() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const goTo = useCallback(
    (idx: number) => {
      const next = (idx + modules.length) % modules.length
      setCurrent(next)
      setIsPlaying(false)
    },
    []
  )

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
    v.src = modules[current].video
    v.load()
    // On mobile don't autoplay
    const isMobile = window.innerWidth < 768
    if (!isMobile) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
    } else {
      setIsPlaying(false)
    }
  }, [current])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => {})
    } else {
      v.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setIsMuted(v.muted)
  }

  const mod = modules[current]

  return (
    <section id="plataforma" className="bg-[#0f0f0f] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl">
            {"Como a tecnologia Retize suporta a jornada de monetização"}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-[#ffffff]/60">
            {"Tecnologia modular adaptada para a necessidade de múltiplos segmentos esportivos"}
          </p>
        </div>

        {/* Module pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {modules.map((m, i) => (
            <button
              key={m.id}
              onClick={() => goTo(i)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all ${
                i === current
                  ? "bg-[#00CCFF] text-[#0f0f0f]"
                  : "bg-[#ffffff]/10 text-[#ffffff]/70 hover:bg-[#ffffff]/20"
              }`}
            >
              {m.name}
            </button>
          ))}
        </div>

        {/* Carousel area */}
        <div className="mt-10 flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:gap-12">
          {/* Video */}
          <div className="relative w-full overflow-hidden rounded-2xl bg-[#1a1a1a] lg:w-3/5">
            <div className="relative aspect-video">
              <video
                ref={videoRef}
                className="h-full w-full object-cover"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
              />
              {/* Overlay with play button when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center bg-[#000000]/40 transition-colors hover:bg-[#000000]/50"
                  aria-label="Reproduzir video"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00CCFF]/90">
                    <Play className="ml-1 h-7 w-7 text-[#0f0f0f]" />
                  </div>
                </button>
              )}
              {/* Controls */}
              {isPlaying && (
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <button
                    onClick={togglePlay}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000000]/60 text-[#ffffff] transition-colors hover:bg-[#000000]/80"
                    aria-label="Pausar"
                  >
                    <Pause className="h-4 w-4" />
                  </button>
                  <button
                    onClick={toggleMute}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000000]/60 text-[#ffffff] transition-colors hover:bg-[#000000]/80"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
              )}
            </div>

            {/* Nav arrows */}
            <div className="absolute top-1/2 left-3 -translate-y-1/2">
              <button
                onClick={() => goTo(current - 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000]/50 text-[#ffffff] transition-colors hover:bg-[#000000]/70"
                aria-label="Slide anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute top-1/2 right-3 -translate-y-1/2">
              <button
                onClick={() => goTo(current + 1)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000000]/50 text-[#ffffff] transition-colors hover:bg-[#000000]/70"
                aria-label="Próximo slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Module info */}
          <div className="flex w-full flex-col lg:w-2/5">
            <div className="flex flex-wrap gap-2">
              {mod.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-xs font-bold"
                  style={{
                    backgroundColor: `${TAG_COLORS[tag]}20`,
                    color: TAG_COLORS[tag],
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="mt-4 text-2xl font-bold text-[#ffffff]">{mod.name}</h3>
            <ul className="mt-5 flex flex-col gap-4">
              {mod.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full"
                    style={{ backgroundColor: TAG_COLORS[mod.tags[0]] }}
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-[#ffffff]/80">{b}</span>
                </li>
              ))}
            </ul>

            {/* Dots */}
            <div className="mt-8 flex gap-2">
              {modules.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-6 bg-[#00CCFF]" : "w-2 bg-[#ffffff]/30"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-md bg-[#00CCFF] px-8 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            <a href="https://wa.me/5511972281050" target="_blank" rel="noopener noreferrer">
              Solicite uma demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
