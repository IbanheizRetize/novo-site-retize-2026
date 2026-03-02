"use client"

import { useState } from "react"
import { LocalizedLink } from "@/components/ui/localized-link"
import Image from "next/image"
import { useI18n } from "@/lib/i18n/context"
import { legalContent } from "@/lib/legal-content"
import { LanguageSelector } from "@/components/language-selector"
import type { Locale } from "@/lib/i18n/dictionaries"

/* ── Header ── */
function LegalHeader({ t }: { t: (k: string) => string }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: t("legal.header.home"), href: "/" },
    { label: t("legal.header.organizations"), href: "/organizacoes-esportivas" },
    { label: t("legal.header.brands"), href: "/marcas-anunciantes" },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-[#e5e5e5] bg-[#ffffff]/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <LocalizedLink href="/" className="flex-shrink-0">
          <Image src="/brand/retize-logo.png" alt="Retize" width={80} height={18} />
        </LocalizedLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <LocalizedLink
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#0f0f0f]/70 transition-colors hover:text-[#0f0f0f]"
            >
              {link.label}
            </LocalizedLink>
          ))}
          <LanguageSelector variant="dark" />
        </nav>

        {/* Mobile hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelector variant="dark" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-lg border border-[#e5e5e5]"
            aria-label="Menu"
          >
            <span className={`h-0.5 w-4 bg-[#0f0f0f] transition-all ${mobileOpen ? "translate-y-1 rotate-45" : ""}`} />
            <span className={`h-0.5 w-4 bg-[#0f0f0f] transition-all ${mobileOpen ? "-translate-y-1 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-[#e5e5e5] bg-[#ffffff] px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <LocalizedLink
              key={link.href}
              href={link.href}
              className="block py-2.5 text-sm font-medium text-[#0f0f0f]/70"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </LocalizedLink>
          ))}
        </div>
      )}
    </header>
  )
}

/* ── Main content ── */
export function LegalPageContent() {
  const { t, locale } = useI18n()
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy")

  const content = legalContent[locale as Locale] ?? legalContent["pt-BR"]
  const sections = activeTab === "privacy" ? content.privacy : content.terms

  return (
    <>
      <LegalHeader t={t} />

      <main className="bg-[#f7f7f8]">
        {/* Hero banner */}
        <div className="bg-[#0f0f0f] py-14 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <h1 className="text-balance text-3xl font-bold tracking-tight text-[#ffffff] md:text-4xl">
              {t("legal.page.title")}
            </h1>
            <p className="mt-2 text-sm text-[#ffffff]/50">{t("legal.lastUpdate")}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="sticky top-16 z-30 border-b border-[#e5e5e5] bg-[#ffffff]">
          <div className="mx-auto flex max-w-7xl px-4 lg:px-8">
            <button
              onClick={() => setActiveTab("privacy")}
              className={`relative px-5 py-3.5 text-sm font-semibold transition-colors ${
                activeTab === "privacy"
                  ? "text-[#4700d1]"
                  : "text-[#0f0f0f]/50 hover:text-[#0f0f0f]/80"
              }`}
            >
              {t("legal.tab.privacy")}
              {activeTab === "privacy" && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4700d1]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("terms")}
              className={`relative px-5 py-3.5 text-sm font-semibold transition-colors ${
                activeTab === "terms"
                  ? "text-[#4700d1]"
                  : "text-[#0f0f0f]/50 hover:text-[#0f0f0f]/80"
              }`}
            >
              {t("legal.tab.terms")}
              {activeTab === "terms" && (
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#4700d1]" />
              )}
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="rounded-2xl border border-[#e5e5e5] bg-[#ffffff] p-6 shadow-sm md:p-10">
            {sections.map((section, idx) => (
              <div key={idx} className={idx > 0 ? "mt-10 border-t border-[#e5e5e5] pt-10" : ""}>
                <h2 className="text-xl font-bold text-[#0f0f0f] md:text-2xl">{section.title}</h2>
                <div className="mt-4 flex flex-col gap-4">
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="text-sm leading-relaxed text-[#6b6b6b] md:text-base">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact info */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[#6b6b6b]">
              {"contato@retize.com.br | privacidade@retize.com.br"}
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
