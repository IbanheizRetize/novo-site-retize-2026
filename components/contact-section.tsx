"use client"

import { useState } from "react"
import { MessageCircle, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/lib/i18n/context"

const achievementKeys = [
  { key: "arenahub", logo: "/logos/arena-hub.png", logoClass: "h-6 w-6" },
  { key: "google", logo: "/logos/google-cloud.png", logoClass: "h-6 w-6" },
  { key: "ace", logo: "/logos/ace-ventures.png", logoClass: "h-6 w-6" },
  { key: "fanxp", logo: "/logos/euroleague.png", logoClass: "h-6 w-6" },
  { key: "cob", logo: "/logos/cob.png", logoClass: "h-6 w-6" },
  { key: "quartzo", logo: "/logos/funses.webp", logoClass: "h-9 w-9" },
]

type FormStatus = "idle" | "loading" | "success" | "error"

interface FormFields {
  name: string
  email: string
  company: string
  message: string
  newsletter: boolean
}

export function ContactSection() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [fields, setFields] = useState<FormFields>({
    name: "",
    email: "",
    company: "",
    message: "",
    newsletter: false,
  })
  const { t } = useI18n()

  const setField = <K extends keyof FormFields>(key: K, value: FormFields[K]) =>
    setFields((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      })

      const data = (await res.json()) as { ok: boolean; errors?: string[] }

      if (!res.ok || !data.ok) {
        setErrorMessage(data.errors?.[0] ?? t("contact.form.error"))
        setStatus("error")
      } else {
        setStatus("success")
      }
    } catch {
      setErrorMessage(t("contact.form.error"))
      setStatus("error")
    }
  }

  return (
    <section id="contato" className="bg-[#f7f7f8] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-balance text-center text-3xl font-bold tracking-tight text-[#0f0f0f] md:text-4xl">
          {t("contact.title")}
        </h2>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Left: Achievements */}
          <div className="flex flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 lg:p-8">
            <h3 className="mb-4 text-lg font-bold text-[#0f0f0f]">
              {t("contact.achievements.title")}
            </h3>

            <div className="grid flex-1 grid-cols-2 gap-3 md:grid-cols-3">
              {achievementKeys.map((item) => (
                <div
                  key={item.key}
                  className="flex flex-col items-center gap-2 rounded-xl border border-[#e5e5e5] bg-[#f7f7f8] p-4 text-center"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4700d1]/10">
                    {item.logo ? (
                      <img
                        src={item.logo}
                        alt={t(`contact.ach.${item.key}`)}
                        className={`${item.logoClass} object-contain`}
                        onError={(e) => {
                          const target = e.currentTarget
                          target.style.display = "none"
                        }}
                      />
                    ) : (
                      <span className="text-sm text-[#4700d1]">{"?"}</span>
                    )}
                  </div>
                  <p className="text-xs font-semibold leading-tight text-[#0f0f0f]">
                    {t(`contact.ach.${item.key}`)}
                  </p>
                  <p className="text-[10px] leading-snug text-[#6b6b6b]">
                    {t(`contact.ach.${item.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="mt-5 w-full rounded-full bg-[#4700d1] px-6 text-base font-semibold text-[#ffffff] hover:bg-[#3a00a8]"
            >
              <a href="https://calendly.com/nicolas-ibanheiz/retize-ads" target="_blank" rel="noopener noreferrer">{t("contact.achievements.cta")}</a>
            </Button>
          </div>

          {/* Right: Contact form */}
          <div className="flex flex-col rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 lg:p-8">
            <h3 className="text-lg font-bold text-[#0f0f0f]">{t("contact.form.title")}</h3>

            {status === "success" ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 py-8 text-center">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
                <p className="text-lg font-semibold text-[#0f0f0f]">
                  {t("contact.form.success.title")}
                </p>
                <p className="text-sm text-[#6b6b6b]">
                  {t("contact.form.success.desc")}
                </p>
                <button
                  onClick={() => {
                    setStatus("idle")
                    setFields({ name: "", email: "", company: "", message: "", newsletter: false })
                  }}
                  className="mt-2 text-sm font-medium text-[#4700d1] underline-offset-4 hover:underline"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex flex-1 flex-col gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-[#0f0f0f]">
                    {t("contact.form.name")}
                  </Label>
                  <Input
                    id="name"
                    required
                    value={fields.name}
                    onChange={(e) => setField("name", e.target.value)}
                    placeholder={t("contact.form.name.placeholder")}
                    className="mt-1 rounded-xl border-[#e5e5e5] bg-[#f7f7f8] text-[#0f0f0f] placeholder:text-[#6b6b6b]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-[#0f0f0f]">
                    {t("contact.form.email")}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={fields.email}
                    onChange={(e) => setField("email", e.target.value)}
                    placeholder={t("contact.form.email.placeholder")}
                    className="mt-1 rounded-xl border-[#e5e5e5] bg-[#f7f7f8] text-[#0f0f0f] placeholder:text-[#6b6b6b]/50"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-[#0f0f0f]">
                    {t("contact.form.company")}
                  </Label>
                  <Input
                    id="company"
                    value={fields.company}
                    onChange={(e) => setField("company", e.target.value)}
                    placeholder={t("contact.form.company.placeholder")}
                    className="mt-1 rounded-xl border-[#e5e5e5] bg-[#f7f7f8] text-[#0f0f0f] placeholder:text-[#6b6b6b]/50"
                  />
                </div>
                <div className="flex-1">
                  <Label htmlFor="message" className="text-sm font-medium text-[#0f0f0f]">
                    {t("contact.form.message")}
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={fields.message}
                    onChange={(e) => setField("message", e.target.value)}
                    placeholder={t("contact.form.message.placeholder")}
                    className="mt-1 resize-none rounded-xl border-[#e5e5e5] bg-[#f7f7f8] text-[#0f0f0f] placeholder:text-[#6b6b6b]/50"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="newsletter"
                    checked={fields.newsletter}
                    onCheckedChange={(checked) => setField("newsletter", !!checked)}
                  />
                  <Label htmlFor="newsletter" className="text-sm text-[#6b6b6b]">
                    {t("contact.form.newsletter")}
                  </Label>
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <span>{errorMessage || t("contact.form.error")}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-auto w-full rounded-full bg-[#4700d1] py-3 text-base font-semibold text-[#ffffff] hover:bg-[#3a00a8] disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      {t("contact.form.sending")}
                    </>
                  ) : (
                    t("contact.form.submit")
                  )}
                </Button>
              </form>
            )}

            {/* WhatsApp button */}
            <div className="mt-5 border-t border-[#e5e5e5] pt-5">
              <Button
                asChild
                variant="outline"
                className="w-full rounded-full border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
              >
                <a
                  href="https://wa.me/5511930601050"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t("contact.whatsapp")}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
