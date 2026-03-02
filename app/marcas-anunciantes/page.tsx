import type { Metadata } from "next"
import { BrandsHeader } from "@/components/brands/brands-header"
import { BrandsHero } from "@/components/brands/brands-hero"
import { NetworkSection } from "@/components/brands/network-section"
import { ActivationSection } from "@/components/brands/activation-section"
import { TechSection } from "@/components/brands/tech-section"
import { BrandsCasesSection } from "@/components/brands/brands-cases-section"
import { BrandsPartnersSection } from "@/components/brands/brands-partners-section"
import { BrandsFooter } from "@/components/brands/brands-footer"

export const metadata: Metadata = {
  title: "Retize | Para Marcas Anunciantes",
  description:
    "Fale com seus clientes através do esporte. Usamos o esporte como um acelerador de jornadas para ativar sua marca de forma personalizada.",
}

export default function MarcasAnunciantesPage() {
  return (
    <>
      <BrandsHeader />
      <main>
        <BrandsHero />
        <NetworkSection />
        <ActivationSection />
        <TechSection />
        <BrandsCasesSection />
        <BrandsPartnersSection />
      </main>
      <BrandsFooter />
    </>
  )
}
