"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const PDF_PATROCINIO_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-hero-desktop-final.mp4"
const PDF_COPA_URL =
  "https://storage.googleapis.com/retize-prod-public/novo-site-retize/retize-hero-desktop-final.mp4"

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

function ActivationCard({
  title,
  desc,
  ctaLabel,
  image,
  onCta,
  mobileActive,
}: {
  title: string
  desc: string
  ctaLabel: string
  image: string
  onCta: () => void
  mobileActive: boolean
}) {
  return (
    <div className="group relative flex h-80 flex-col overflow-hidden rounded-2xl md:h-96">
      <Image src={image} alt="" fill className="object-cover" quality={75} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/80 via-[#000000]/50 to-[#000000]/30" />
      <div
        className={`relative z-10 flex h-full flex-col items-center justify-center p-6 text-center md:p-8 ${
          mobileActive ? "" : ""
        }`}
      >
        <h3
          className={`text-2xl font-bold tracking-wide text-[#ffffff] transition-transform duration-300 group-hover:-translate-y-4 md:text-3xl ${
            mobileActive ? "-translate-y-4" : ""
          }`}
        >
          {title}
        </h3>
        <p
          className={`mt-3 max-w-md text-sm leading-relaxed text-[#ffffff] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 ${
            mobileActive ? "translate-y-0 opacity-100" : "opacity-0"
          }`}
        >
          {desc}
        </p>
        <Button
          size="sm"
          className={`mt-4 rounded-md bg-[#FF6600] px-6 text-sm font-semibold text-[#ffffff] transition-all duration-300 hover:brightness-110 group-hover:translate-y-0 group-hover:opacity-100 ${
            mobileActive ? "translate-y-0 opacity-100" : "opacity-0"
          }`}
          onClick={onCta}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  )
}

export function ActivationSection() {
  const { t } = useI18n()
  const [modalOpen, setModalOpen] = useState(false)
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" })
  const [errors, setErrors] = useState<FormErrors>({})
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(false)

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
      { threshold: 0.6 }
    )
    if (card1Ref.current) obs.observe(card1Ref.current)
    if (card2Ref.current) obs.observe(card2Ref.current)
    return () => obs.disconnect()
  }, [])

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
          source: "copa-2026-modal",
        }),
      })
      if (!res.ok) throw new Error()
      setSuccess(true)
      window.open(PDF_COPA_URL, "_blank")
      setTimeout(() => {
        setModalOpen(false)
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
    <section id="ativacao" className="bg-[#ffffff] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("brands.activation.title")}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div ref={card1Ref}>
            <ActivationCard
              title={t("brands.activation.1.title")}
              desc={t("brands.activation.1.desc")}
              ctaLabel={t("brands.activation.1.cta")}
              image="/images/brands-media-projects.jpg"
              onCta={() => window.open(PDF_PATROCINIO_URL, "_blank")}
              mobileActive={card1Active}
            />
          </div>
          <div ref={card2Ref}>
            <ActivationCard
              title={t("brands.activation.2.title")}
              desc={t("brands.activation.2.desc")}
              ctaLabel={t("brands.activation.2.cta")}
              image="/images/brands-digital-sponsorship.jpg"
              onCta={() => setModalOpen(true)}
              mobileActive={card2Active}
            />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Button
            size="lg"
            className="rounded-md bg-[#9900FF] px-8 text-base font-semibold text-[#ffffff] shadow-lg shadow-[#9900FF]/20 transition-all hover:shadow-xl hover:brightness-110"
            onClick={() => window.open(PDF_PATROCINIO_URL, "_blank")}
          >
            {t("brands.activation.cta")}
          </Button>
        </div>
      </div>

      {/* Copa 2026 Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-md border-[#e5e5e5] bg-[#ffffff] p-0">
          <DialogTitle className="sr-only">{t("brands.modal.title")}</DialogTitle>
          <div className="relative p-6">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f7f8] text-[#6b6b6b] hover:bg-[#e5e5e5]"
              aria-label="Fechar"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="text-xl font-bold text-[#0f0f0f]">{t("brands.modal.title")}</h3>

            {success ? (
              <div className="mt-6 rounded-lg bg-[#00cc88]/10 p-4 text-center">
                <p className="font-medium text-[#00cc88]">{t("brands.modal.success")}</p>
              </div>
            ) : (
              <div className="mt-6 flex flex-col gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="lead-name" className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                    {t("brands.modal.name")}
                  </label>
                  <input
                    id="lead-name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={t("brands.modal.name.placeholder")}
                    className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                  />
                  {errors.name && <p className="mt-1 text-xs text-[#ff3333]">{errors.name}</p>}
                </div>
                {/* Company */}
                <div>
                  <label htmlFor="lead-company" className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                    {t("brands.modal.company")}
                  </label>
                  <input
                    id="lead-company"
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder={t("brands.modal.company.placeholder")}
                    className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                  />
                  {errors.company && <p className="mt-1 text-xs text-[#ff3333]">{errors.company}</p>}
                </div>
                {/* Email */}
                <div>
                  <label htmlFor="lead-email" className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                    {t("brands.modal.email")}
                  </label>
                  <input
                    id="lead-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder={t("brands.modal.email.placeholder")}
                    className="w-full rounded-lg border border-[#e5e5e5] bg-[#f7f7f8] px-4 py-2.5 text-sm text-[#0f0f0f] outline-none focus:border-[#FF6600] focus:ring-1 focus:ring-[#FF6600]"
                  />
                  {errors.email && <p className="mt-1 text-xs text-[#ff3333]">{errors.email}</p>}
                </div>
                {/* Phone */}
                <div>
                  <label htmlFor="lead-phone" className="mb-1 block text-sm font-medium text-[#0f0f0f]">
                    {t("brands.modal.phone")}
                  </label>
                  <input
                    id="lead-phone"
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
    </section>
  )
}
