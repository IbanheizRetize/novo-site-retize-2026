"use client"

import { useState } from "react"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

const testimonials = [
  {
    id: "ricardo",
    name: "Ricardo Bonetti",
    role: "COO Imperial eSports",
    quote:
      "Uma empresa extremamente dedicada, o atendimento sempre foi muito próximo, nos ajudando entender nossos problemas, expertise nesse mercado de análise de dados, com certeza vai nos trazer negócios.",
    video: "/videos/testimonial-1.mp4",
    initials: "RB",
    color: "#00CCFF",
  },
  {
    id: "erich",
    name: "Erich Beting",
    role: "CEO Máquina do Esporte",
    quote:
      "A gente conseguiu finalmente fazer com que a publicidade tivesse lógica dentro de aparição para público, tivesse uma boa entrega e além disso, a gente conta com profissionais que têm ajudado a gente no dia a dia.",
    video: "/videos/testimonial-2.mp4",
    initials: "EB",
    color: "#FF0066",
  },
  {
    id: "debora",
    name: "Débora Saldanha",
    role: "Head de Inovação, Clube Atlético Mineiro",
    quote:
      "Com a Retize, estruturamos um modelo de dados e engajamento no SuperApp do Galo que possibilita uma verdadeira hiper personalização, permitindo que marcas e parceiros conversem diretamente com os torcedores.",
    video: "/videos/testimonial-3.mp4",
    initials: "DS",
    color: "#00cc88",
  },
]

export function TestimonialsSection() {
  const [videoOpen, setVideoOpen] = useState<string | null>(null)
  const [mobileIdx, setMobileIdx] = useState(0)

  return (
    <section className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          Depoimentos
        </h2>

        {/* Desktop */}
        <div className="mt-12 hidden grid-cols-3 gap-6 md:grid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} t={t} onPlay={() => setVideoOpen(t.video)} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="relative mt-10 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300"
              style={{ transform: `translateX(-${mobileIdx * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div key={t.id} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard t={t} onPlay={() => setVideoOpen(t.video)} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setMobileIdx(Math.max(0, mobileIdx - 1))}
              disabled={mobileIdx === 0}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] disabled:opacity-30"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setMobileIdx(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === mobileIdx ? "w-6 bg-[#00CCFF]" : "w-2 bg-[#0f0f0f]/20"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setMobileIdx(Math.min(testimonials.length - 1, mobileIdx + 1))}
              disabled={mobileIdx === testimonials.length - 1}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f0f0f]/10 text-[#0f0f0f] disabled:opacity-30"
              aria-label="Próximo"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <a
            href="https://wa.me/5511972281050"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-[#00CCFF] px-8 py-3 text-base font-semibold text-[#0f0f0f] shadow-lg shadow-[#00CCFF]/20 transition-all hover:shadow-xl hover:brightness-110"
          >
            Solicite uma Demo
          </a>
        </div>
      </div>

      {/* Video modal */}
      <Dialog open={!!videoOpen} onOpenChange={() => setVideoOpen(null)}>
        <DialogContent className="max-w-3xl border-0 bg-[#0a0a0a] p-0">
          <DialogTitle className="sr-only">Depoimento em video</DialogTitle>
          <button
            onClick={() => setVideoOpen(null)}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#ffffff]/20 text-[#ffffff] hover:bg-[#ffffff]/30"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>
          {videoOpen && (
            <video
              src={videoOpen}
              controls
              autoPlay
              className="aspect-video w-full rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function TestimonialCard({
  t,
  onPlay,
}: {
  t: (typeof testimonials)[0]
  onPlay: () => void
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-[#e5e5e5] bg-[#f7f7f8] p-6 transition-shadow hover:shadow-md">
      {/* Video placeholder */}
      <button
        onClick={onPlay}
        className="group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-[#0f0f0f] to-[#2a2a2a]"
        aria-label={`Assistir depoimento de ${t.name}`}
      >
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${t.color}cc` }}
        >
          <Play className="ml-0.5 h-6 w-6 text-[#ffffff]" />
        </div>
        <span className="absolute bottom-2 left-2 rounded-md bg-[#000000]/60 px-2 py-0.5 text-xs text-[#ffffff]">
          Assistir
        </span>
      </button>

      {/* Person */}
      <div className="mt-5 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[#ffffff]"
          style={{ backgroundColor: t.color }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-sm font-bold text-[#0f0f0f]">{t.name}</p>
          <p className="text-xs text-[#6b6b6b]">{t.role}</p>
        </div>
      </div>

      {/* Quote */}
      <p className="mt-4 text-sm italic leading-relaxed text-[#6b6b6b]">
        {'"'}
        {t.quote}
        {'"'}
      </p>
    </div>
  )
}
