"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/lib/i18n/context"
import { trackCtaClick } from "@/lib/gtag"
import { LocalizedLink } from "@/components/ui/localized-link"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useI18n()

  const navItems = [
    { label: t("header.nav.organizations"), href: "/organizacoes-esportivas" },
    { label: t("header.nav.advertisers"), href: "/marcas-anunciantes" },
    { label: t("header.nav.platform"), href: "#plataforma" },
    { label: t("header.nav.clients"), href: "#clientes" },
    { label: t("header.nav.contact"), href: "#contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
        transition: "background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease",
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex-shrink-0" aria-label="Retize Home">
          <Image
            src="/brand/retize-logo.png"
            alt="Retize"
            width={113}
            height={25}
            style={{
              filter: scrolled ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.3s ease",
            }}
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
          {navItems.map((item) => (
            <LocalizedLink
              key={item.href + item.label}
              href={item.href}
              style={{
                color: scrolled ? "#0f0f0f" : "#ffffff",
                transition: "color 0.3s ease",
              }}
              className="cursor-pointer text-sm font-medium hover:opacity-80"
            >
              {item.label}
            </LocalizedLink>
          ))}
          <Button
            asChild
            className="rounded-full bg-[#4700d1] px-5 text-sm font-semibold text-[#ffffff] hover:bg-[#3a00a8]"
          >
            <a href="#contato" onClick={() => trackCtaClick({ cta_id: "header_contact", cta_text: t("header.cta") })}>{t("header.cta")}</a>
          </Button>
          <LanguageSelector variant={scrolled ? "dark" : "light"} />
        </nav>

        {/* Mobile: language selector + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector variant={scrolled ? "dark" : "light"} />
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label={t("header.menu.open")}
                className="flex h-10 w-10 items-center justify-center rounded-md"
                style={{
                  color: scrolled ? "#0f0f0f" : "#ffffff",
                  transition: "color 0.3s ease",
                }}
                onTouchEnd={(e) => {
                  e.preventDefault()
                  setMobileOpen(true)
                }}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 bg-[#ffffff] p-6">
              <SheetTitle className="sr-only">{t("header.menu.title")}</SheetTitle>
              <div className="mb-8">
                <Image src="/brand/retize-logo.png" alt="Retize" width={90} height={20} />
              </div>
              <nav className="flex flex-col gap-5" aria-label="Menu mobile">
                {navItems.map((item) => (
                  <LocalizedLink
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-[#0f0f0f] transition-colors hover:text-[#4700d1]"
                  >
                    {item.label}
                  </LocalizedLink>
                ))}
                <Button
                  asChild
                  className="mt-2 w-full rounded-full bg-[#4700d1] text-[#ffffff] hover:bg-[#3a00a8]"
                >
                  <a href="#contato" onClick={() => { setMobileOpen(false); trackCtaClick({ cta_id: "header_contact_mobile", cta_text: t("header.cta") }) }}>
                    {t("header.cta")}
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
