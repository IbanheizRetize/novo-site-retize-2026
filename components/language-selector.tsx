"use client"

import { useState, useRef, useEffect } from "react"
import { useI18n } from "@/lib/i18n/context"
import type { Locale } from "@/lib/i18n/dictionaries"

/* ── Flag SVG components (round) ─────────────────────────── */

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <clipPath id="brClip"><circle cx="256" cy="256" r="256" /></clipPath>
      <g clipPath="url(#brClip)">
        <rect width="512" height="512" fill="#009739" />
        <polygon points="256,77 467,256 256,435 45,256" fill="#FEDD00" />
        <circle cx="256" cy="256" r="100" fill="#012169" />
        <path d="M156,236 Q256,296 356,236" fill="none" stroke="#ffffff" strokeWidth="14" />
      </g>
    </svg>
  )
}

function USAFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <clipPath id="usClip"><circle cx="256" cy="256" r="256" /></clipPath>
      <g clipPath="url(#usClip)">
        <rect width="512" height="512" fill="#ffffff" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <rect key={i} y={i * 78.7} width="512" height="39.4" fill="#B22234" />
        ))}
        <rect width="205" height="275" fill="#3C3B6E" />
        {/* Simplified stars pattern */}
        {[40, 80, 120, 160, 200].map((y) =>
          [20, 55, 90, 125, 160].map((x) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="6" fill="#ffffff" />
          ))
        )}
      </g>
    </svg>
  )
}

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className}>
      <clipPath id="esClip"><circle cx="256" cy="256" r="256" /></clipPath>
      <g clipPath="url(#esClip)">
        <rect width="512" height="512" fill="#FEDD00" />
        <rect width="512" height="128" fill="#AA151B" />
        <rect y="384" width="512" height="128" fill="#AA151B" />
      </g>
    </svg>
  )
}

const locales: { code: Locale; label: string; Flag: React.FC<{ className?: string }> }[] = [
  { code: "pt-BR", label: "Portugues", Flag: BrazilFlag },
  { code: "en", label: "English", Flag: USAFlag },
  { code: "es", label: "Espanol", Flag: SpainFlag },
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
        className="flex h-8 w-8 items-center justify-center rounded-full border transition-colors"
        style={{
          borderColor: isLight ? "rgba(255,255,255,0.3)" : "rgba(15,15,15,0.15)",
          backgroundColor: isLight ? "rgba(255,255,255,0.1)" : "rgba(15,15,15,0.05)",
        }}
      >
        <current.Flag className="h-5 w-5 rounded-full" />
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
              className="flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors hover:bg-[#f7f7f8]"
              style={{
                color: loc.code === locale ? "#FF6600" : "#0f0f0f",
                fontWeight: loc.code === locale ? 600 : 400,
              }}
            >
              <loc.Flag className="h-5 w-5 flex-shrink-0 rounded-full" />
              <span>{loc.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
