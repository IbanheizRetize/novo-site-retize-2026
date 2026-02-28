export const GA_MEASUREMENT_ID = "G-8NX7K07YH0"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

/** Low-level wrapper — safe to call during SSR (no-ops silently). */
export function event(action: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return
  window.gtag("event", action, params)
}

// ─── Typed event helpers ─────────────────────────────────────────────────────

/** Contact form sent successfully. */
export function trackContactFormSubmit(params: { form_id: string }) {
  event("contact_form_submit", params)
}

/** Lead capture form sent (PDF gated). */
export function trackGenerateLead(params: { form_id: string }) {
  event("generate_lead", params)
}

/** PDF file opened after successful lead form submission. */
export function trackFileDownload(params: { file_name: string; link_text?: string }) {
  event("file_download", params)
}

/** Any anchor that opens an external URL. */
export function trackExternalLinkClick(params: { link_url: string; link_text: string }) {
  event("external_link_click", params)
}

/** Video play triggered by the user (or autoplay becoming ready). */
export function trackVideoPlay(params: { video_id: string }) {
  event("video_start", params)
}

/** Carousel arrow / dot / swipe navigation. */
export function trackCarouselNavigate(params: {
  carousel_id: string
  slide_index: number
  direction?: "prev" | "next" | "dot" | "swipe_prev" | "swipe_next"
}) {
  event("carousel_navigate", params)
}

/** User switched the UI language. */
export function trackLanguageChange(params: { from_locale: string; to_locale: string }) {
  event("language_change", params)
}

/** Internal CTA button clicked (navigation / scroll). */
export function trackCtaClick(params: { cta_id: string; cta_text?: string }) {
  event("cta_click", params)
}
