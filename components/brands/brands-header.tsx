"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { LanguageSelector } from "@/components/language-selector"
import { useI18n } from "@/lib/i18n/context"
import { trackExternalLinkClick } from "@/lib/gtag"

export function BrandsHeader() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: t("brands.header.orgs"), href: "/organizacoes-esportivas" },
    { label: t("brands.header.audiences"), href: "#audiencias" },
    { label: t("brands.header.channels"), href: "#canais" },
    { label: t("brands.header.packages"), href: "#ativacao" },
    { label: t("brands.header.technology"), href: "#tecnologia" },
    { label: t("brands.header.cases"), href: "#cases" },
    { label: t("brands.header.clients"), href: "#clientes" },
  ]

  const WA_URL = "https://wa.me/5511930601050?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20Retize!"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      if (el) {
        const offset = 80
        const top = el.getBoundingClientRect().top + window.scrollY - offset
        window.scrollTo({ top, behavior: "smooth" })
      }
    }
  }

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
        <Link href="/" className="flex-shrink-0" aria-label="Retize Home">
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
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
          {navItems.map((item) =>
            item.href.startsWith("#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                style={{
                  color: scrolled ? "#0f0f0f" : "#ffffff",
                  transition: "color 0.3s ease",
                }}
                className="cursor-pointer text-sm font-medium hover:opacity-80"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                style={{
                  color: scrolled ? "#0f0f0f" : "#ffffff",
                  transition: "color 0.3s ease",
                }}
                className="text-sm font-medium hover:opacity-80"
              >
                {item.label}
              </Link>
            )
          )}
          <Button asChild className="rounded-full bg-[#FF6600] px-5 text-sm font-semibold text-[#ffffff] hover:bg-[#e65c00]">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => trackExternalLinkClick({ link_url: WA_URL, link_text: "WhatsApp - Header desktop" })} className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.854L.057 23.882a.5.5 0 0 0 .612.612l6.083-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.99-1.365l-.358-.214-3.714.893.924-3.638-.233-.374A9.818 9.818 0 1 1 12 21.818z"/>
              </svg>
              {t("brands.header.cta")}
            </a>
          </Button>
          <LanguageSelector variant={scrolled ? "dark" : "light"} />
        </nav>

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
                {navItems.map((item) =>
                  item.href.startsWith("#") ? (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.href)}
                      className="cursor-pointer text-left text-base font-medium text-[#0f0f0f] transition-colors hover:text-[#FF6600]"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-base font-medium text-[#0f0f0f] transition-colors hover:text-[#FF6600]"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <Button asChild className="mt-2 w-full rounded-full bg-[#FF6600] text-[#ffffff] hover:bg-[#e65c00]">
                  <a href={WA_URL} target="_blank" rel="noopener noreferrer" onClick={() => { setMobileOpen(false); trackExternalLinkClick({ link_url: WA_URL, link_text: "WhatsApp - Header mobile" }) }} className="flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.854L.057 23.882a.5.5 0 0 0 .612.612l6.083-1.461A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-4.99-1.365l-.358-.214-3.714.893.924-3.638-.233-.374A9.818 9.818 0 1 1 12 21.818z"/>
                    </svg>
                    {t("brands.header.cta")}
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
