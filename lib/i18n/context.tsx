"use client"

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { dictionaries, type Locale } from "./dictionaries"

interface I18nContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = "retize-lang"

/** Map short param values to our Locale type */
function paramToLocale(param: string | null): Locale | null {
  if (!param) return null
  const map: Record<string, Locale> = {
    "pt-BR": "pt-BR",
    "pt-br": "pt-BR",
    pt: "pt-BR",
    en: "en",
    es: "es",
  }
  return map[param.toLowerCase()] ?? null
}

function localeToParam(locale: Locale): string | null {
  if (locale === "pt-BR") return null // default, no param needed
  return locale // "en" | "es"
}

/** Determine the initial locale synchronously from URL or storage */
function getInitialLocale(searchParams: URLSearchParams): Locale {
  // 1) URL ?lang= takes priority
  const urlLang = paramToLocale(searchParams.get("lang"))
  if (urlLang && dictionaries[urlLang]) return urlLang

  // 2) localStorage (only in browser)
  if (typeof window !== "undefined") {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
      if (stored && dictionaries[stored]) return stored
    } catch {
      // ignore
    }
  }

  // 3) default
  return "pt-BR"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  // Determine initial locale synchronously so the first render already has the correct language
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale(searchParams))

  // Persist to localStorage on mount and sync html lang attribute
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, locale)
    document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : locale === "es" ? "es" : "en"
  }, [locale])

  // When URL ?lang= changes externally (user edits URL, browser back/forward), sync locale
  useEffect(() => {
    const urlLang = paramToLocale(searchParams.get("lang"))
    // If no lang param in URL, treat as pt-BR
    const target = urlLang && dictionaries[urlLang] ? urlLang : "pt-BR"
    if (target !== locale) {
      setLocaleState(target)
      localStorage.setItem(STORAGE_KEY, target)
    }
  }, [searchParams]) // intentionally omit locale to avoid loops

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale)
      localStorage.setItem(STORAGE_KEY, newLocale)
      document.documentElement.lang = newLocale === "pt-BR" ? "pt-BR" : newLocale === "es" ? "es" : "en"

      // Update URL param
      const params = new URLSearchParams(searchParams.toString())
      const paramVal = localeToParam(newLocale)
      if (paramVal) {
        params.set("lang", paramVal)
      } else {
        params.delete("lang")
      }
      const qs = params.toString()
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false })
    },
    [searchParams, pathname, router],
  )

  const t = useCallback(
    (key: string): string => {
      return dictionaries[locale]?.[key] ?? dictionaries["pt-BR"]?.[key] ?? key
    },
    [locale],
  )

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider")
  return ctx
}
