import type { Metadata } from "next"
import { LegalPageContent } from "@/components/legal/legal-page-content"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Retize | Informações Legais",
  description:
    "Política de Privacidade e Termos de Uso do site www.retize.com.br - Retize Sports Media Network",
}

export default function LegalPage() {
  return (
    <>
      <LegalPageContent />
      <SiteFooter />
    </>
  )
}
