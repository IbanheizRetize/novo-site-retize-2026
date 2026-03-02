import type { Metadata } from "next"
import { OrgHeader } from "@/components/org/org-header"
import { OrgHero } from "@/components/org/org-hero"
import { RevenueLeverSection } from "@/components/org/revenue-lever-section"
import { PlatformDemoSection } from "@/components/org/platform-demo-section"
import { CasesSection } from "@/components/org/cases-section"
import { TestimonialsSection } from "@/components/org/testimonials-section"
import { PartnersSection } from "@/components/org/partners-section"
import { OrgFooter } from "@/components/org/org-footer"

export const metadata: Metadata = {
  title: "Retize | Para Organizações Esportivas",
  description:
    "Plataforma de monetização do fã de esporte. Ajudamos organizações esportivas a construir a jornada de monetização do fã aumentando o potencial de receita recorrente.",
}

export default function OrganizacoesEsportivasPage() {
  return (
    <>
      <OrgHeader />
      <main>
        <OrgHero />
        <RevenueLeverSection />
        <PlatformDemoSection />
        <CasesSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <OrgFooter />
    </>
  )
}
