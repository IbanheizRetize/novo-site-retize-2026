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
  const map: Record<string, Locale> = { "pt-BR": "pt-BR", pt: "pt-BR", en: "en", es: "es" }
  return map[param.toLowerCase()] ?? map[param] ?? null
}

function localeToParam(locale: Locale): string {
  if (locale === "pt-BR") return "pt"
  return locale // "en" | "es"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const [locale, setLocaleState] = useState<Locale>("pt-BR")
  const [mounted, setMounted] = useState(false)

  // On mount, determine the locale from: 1) URL ?lang= param, 2) localStorage, 3) default pt-BR
  useEffect(() => {
    const urlLang = paramToLocale(searchParams.get("lang"))
    const storedLang = localStorage.getItem(STORAGE_KEY) as Locale | null

    if (urlLang && dictionaries[urlLang]) {
      setLocaleState(urlLang)
      localStorage.setItem(STORAGE_KEY, urlLang)
    } else if (storedLang && dictionaries[storedLang]) {
      setLocaleState(storedLang)
      // If there's a stored lang that is not pt-BR, sync the URL
      if (storedLang !== "pt-BR") {
        const params = new URLSearchParams(searchParams.toString())
        params.set("lang", localeToParam(storedLang))
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
      }
    }
    // else default pt-BR, no param needed
    setMounted(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // When the URL lang param changes externally (e.g. user edits URL), sync locale
  useEffect(() => {
    if (!mounted) return
    const urlLang = paramToLocale(searchParams.get("lang"))
    if (urlLang && dictionaries[urlLang] && urlLang !== locale) {
      setLocaleState(urlLang)
      localStorage.setItem(STORAGE_KEY, urlLang)
    }
  }, [searchParams, mounted, locale])

  const setLocale = useCallback(
    (newLocale: Locale) => {
      setLocaleState(newLocale)
      localStorage.setItem(STORAGE_KEY, newLocale)
      document.documentElement.lang = newLocale === "pt-BR" ? "pt-BR" : newLocale === "es" ? "es" : "en"

      // Update URL param
      const params = new URLSearchParams(searchParams.toString())
      if (newLocale === "pt-BR") {
        params.delete("lang")
      } else {
        params.set("lang", localeToParam(newLocale))
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

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: "pt-BR", setLocale, t: (key) => dictionaries["pt-BR"]?.[key] ?? key }}>
        {children}
      </I18nContext.Provider>
    )
  }

  return <I18nContext.Provider value={{ locale, setLocale, t }}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider")
  return ctx
}
