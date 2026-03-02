"use client"

import Link from "next/link"
import { useState, useEffect, type ComponentProps } from "react"
import { useI18n } from "@/lib/i18n/context"
import { localeToParam } from "@/lib/i18n/context"

type LocalizedLinkProps = ComponentProps<typeof Link>

/**
 * A drop-in replacement for next/link that automatically appends the
 * current `?lang=` query parameter to cross-page hrefs so the locale
 * is preserved during navigation.
 *
 * Hash anchors (href starting with "#") are forwarded unchanged.
 *
 * The lang param is only injected after client-side mount to avoid
 * SSR/hydration mismatches (the server has no access to ?lang= in the URL).
 */
export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { locale } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const hrefStr = typeof href === "string" ? href : String(href)
  const paramVal = localeToParam(locale)

  // Before mount (SSR + first hydration render): use the plain href to match server output
  // Also skip for anchor links or pt-BR (default locale, no param needed)
  if (!mounted || hrefStr.startsWith("#") || !paramVal) {
    return <Link href={href} {...props} />
  }

  // Inject ?lang= into outgoing page hrefs
  const [path, existingQuery] = hrefStr.split("?")
  const params = new URLSearchParams(existingQuery ?? "")
  params.set("lang", paramVal)
  const localizedHref = `${path}?${params.toString()}`

  return <Link href={localizedHref} {...props} />
}
