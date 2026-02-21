"use client"

import { useState, useRef, useEffect } from "react"
import { useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/dictionaries"

const locales: { code: Locale; label: string; short: string }[] = [
  { code: "pt-BR", label: "Portugues", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Espanol", short: "ES" },
]

interface LanguageSelectorProps {
  variant?: "light" | "dark"
}

export function LanguageSelector({ variant = "dark" }: LanguageSelectorProps) {
  const { locale, setLocale } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const current = locales.find((l) => l.code === locale) ?? locales[0]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  const isLight = variant === "light"

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={`Language: ${current.label}`}
        className="flex h-8 w-8 items-center justify-center rounded-lg border text-xs font-bold transition-colors"
        style={{
          borderColor: isLight ? "rgba(255,255,255,0.3)" : "rgba(15,15,15,0.15)",
          color: isLight ? "#ffffff" : "#0f0f0f",
          backgroundColor: isLight ? "rgba(255,255,255,0.1)" : "rgba(15,15,15,0.05)",
        }}
      >
        {current.short}
      </button>

      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-1 overflow-hidden rounded-xl border shadow-lg"
          style={{
            backgroundColor: "#ffffff",
            borderColor: "#e5e5e5",
          }}
        >
          {locales.map((loc) => (
            <button
              key={loc.code}
              onClick={() => {
                setLocale(loc.code)
                setOpen(false)
              }}
              className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-[#f7f7f8]"
              style={{
                color: loc.code === locale ? "#4700d1" : "#0f0f0f",
                fontWeight: loc.code === locale ? 600 : 400,
              }}
            >
              <span className="w-6 text-center text-xs font-bold">{loc.short}</span>
              <span>{loc.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
