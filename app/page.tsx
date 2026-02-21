import { Header } from "@/components/header"
import { HeroVideo } from "@/components/hero-video"
import { PlatformSection } from "@/components/platform-section"
import { JourneySection } from "@/components/journey-section"
import { ClientsSection } from "@/components/clients-section"
import { ValueProofSection } from "@/components/value-proof-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroVideo />
        <PlatformSection />
        <JourneySection />
        <ClientsSection />
        <ValueProofSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
