"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const PDF_PACOTES_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-pacotes-patrocinio-digital.pdf"
const PDF_COPA_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-pacote-copa-do-mundo-2026"

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 11)
  if (digits.length <= 2) return digits.length ? `(${digits}` : ""
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

interface FormErrors {
  name?: string
  company?: string
  email?: string
  phone?: string
}

function LeadFormModal({
  open,
  onOpenChange,
  title,
  pdfUrl,
  source,
}: {
  open: boolean
  onOpenChange: (v: boolean) => void
  title: string
  pdfUrl: string
  source: string
}) {
  const { t } = useI18n()
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = (): boolean => {
    const e: FormErrors = {}
    if (!form.name.trim()) e.name = t("brands.modal.error.required")
    if (!form.company.trim()) e.company = t("brands.modal.error.required")
    if (!form.email.trim()) e.email = t("brands.modal.error.required")
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t("brands.modal.error.email")
    const phoneDigits = form.phone.replace(/\D/g, "")
    if (!phoneDigits) e.phone = t("brands.modal.error.required")
    else if (phoneDigits.length < 10) e.phone = t("brands.modal.error.phone")
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setSending(true)
    try {
      const res = await fetch("/api/leads/copa-2026", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          source,
        }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      window.open(pdfUrl, "_blank")
      setTimeout(() => {
        onOpenChange(false)
        setSuccess(false)
        setForm({ name: "", company: "", email: "", phone: "" })
      }, 3000)
    } catch {
      setErrors({ ...errors, name: t("brands.modal.error.generic") })
    } finally {
      setSending(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md border-[#e5e5e5] bg-[#ffffff] p-0">
        <DialogTitle className="sr-only">{title}</DialogTitle>
        <div className="relative p-6">
          <button
            onClick={() => onOpenChange(false)}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f7f8] text-[#6b6b6b] hover:bg-[#e5e5e5]"
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </button>

          <h3 className="text-xl font-bold text-[#0f0f0f]">{title}</h3>

          {success ? (
            <div className="mt-6 rounded-lg bg-[#00cc88]/10 p-4 text-center">
              <p className="font-medium text-[#00cc88]">{t("brands.modal.success")}</p>
            </div>
          ) : (
            <div className="mt-6 flex flex-col gap-4">
              <div>
                <label htmlFor={`lead-name-${source}`} className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                  {t("brands.modal.name")}
                </label>
                <input
                  id={`lead-name-${source}`}
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder={t("brands.modal.name.placeholder")}
                  className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                />
                {errors.name && <p className="mt-1 text-xs text-[#ff3333]">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor={`lead-company-${source}`} className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                  {t("brands.modal.company")}
                </label>
                <input
                  id={`lead-company-${source}`}
                  type="text"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder={t("brands.modal.company.placeholder")}
                  className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                />
                {errors.company && <p className="mt-1 text-xs text-[#ff3333]">{errors.company}</p>}
              </div>
              <div>
                <label htmlFor={`lead-email-${source}`} className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                  {t("brands.modal.email")}
                </label>
                <input
                  id={`lead-email-${source}`}
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder={t("brands.modal.email.placeholder")}
                  className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                />
                {errors.email && <p className="mt-1 text-xs text-[#ff3333]">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor={`lead-phone-${source}`} className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                  {t("brands.modal.phone")}
                </label>
                <input
                  id={`lead-phone-${source}`}
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                  placeholder={t("brands.modal.phone.placeholder")}
                  className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                />
                {errors.phone && <p className="mt-1 text-xs text-[#ff3333]">{errors.phone}</p>}
              </div>
              <Button
                className="mt-2 w-full rounded-lg bg-[#FF6600] py-3 text-base font-semibold text-[#ffffff] hover:brightness-110"
                onClick={handleSubmit}
                disabled={sending}
              >
                {sending ? t("brands.modal.sending") : t("brands.modal.submit")}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function ActivationSection() {
  const { t } = useI18n()
  const [pacotesModalOpen, setPacotesModalOpen] = useState(false)
  const [copaModalOpen, setCopaModalOpen] = useState(false)

  // Mobile auto-reveal
  const card1Ref = useRef<HTMLDivElement>(null)
  const card2Ref = useRef<HTMLDivElement>(null)
  const [card1Active, setCard1Active] = useState(false)
  const [card2Active, setCard2Active] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(max-width: 767px)")
    if (!mq.matches) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.target === card1Ref.current) setCard1Active(e.isIntersecting)
          if (e.target === card2Ref.current) setCard2Active(e.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )
    if (card1Ref.current) obs.observe(card1Ref.current)
    if (card2Ref.current) obs.observe(card2Ref.current)
    return () => obs.disconnect()
  }, [])

  const cards = [
    {
      ref: card1Ref,
      title: t("brands.activation.1.title"),
      desc: t("brands.activation.1.desc"),
      cta: t("brands.activation.1.cta"),
      image: "/images/brands-media-projects.jpg",
      onCta: () => setPacotesModalOpen(true),
      active: card1Active,
    },
    {
      ref: card2Ref,
      title: t("brands.activation.2.title"),
      desc: t("brands.activation.2.desc"),
      cta: t("brands.activation.2.cta"),
      image: "/images/brands-digital-sponsorship.jpg",
      onCta: () => setCopaModalOpen(true),
      active: card2Active,
    },
  ]

  return (
    <section id="ativacao" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("brands.activation.title")}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card, i) => (
            <div key={i} ref={card.ref}>
              <div className="group relative flex h-96 flex-col overflow-hidden rounded-2xl md:h-[28rem]">
                <Image src={card.image} alt="" fill className="object-cover" quality={75} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/50 to-[#000000]/20" />
                <div className="relative z-10 flex h-full flex-col p-6 pt-10 md:p-8 md:pt-12">
                  {/* Title */}
                  <h3
                    className={`text-3xl font-bold tracking-wide text-[#ffffff] transition-transform duration-300 group-hover:-translate-y-2 md:text-4xl ${
                      card.active ? "-translate-y-2" : ""
                    }`}
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-6 max-w-md text-base leading-relaxed text-[#ffffff] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:mt-8 md:text-lg ${
                      card.active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                  >
                    {card.desc}
                  </p>

                  {/* CTA pinned to bottom */}
                  <div className="mt-auto">
                    <Button
                      size="sm"
                      className={`rounded-md bg-[#FF6600] px-6 text-sm font-semibold text-[#ffffff] transition-all duration-300 hover:brightness-110 group-hover:translate-y-0 group-hover:opacity-100 ${
                        card.active ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                      onClick={card.onCta}
                    >
                      {card.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pacotes 2026 Modal */}
      <LeadFormModal
        open={pacotesModalOpen}
        onOpenChange={setPacotesModalOpen}
        title={t("brands.modal.pacotes.title")}
        pdfUrl={PDF_PACOTES_URL}
        source="pacotes-midia-2026"
      />

      {/* Copa 2026 Modal */}
      <LeadFormModal
        open={copaModalOpen}
        onOpenChange={setCopaModalOpen}
        title={t("brands.modal.title")}
        pdfUrl={PDF_COPA_URL}
        source="copa-2026-modal"
      />
    </section>
  )
}
