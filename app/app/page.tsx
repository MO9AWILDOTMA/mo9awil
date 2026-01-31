import { HeroSection } from "@/components/landing-page/HeroSection"
import { PartnersSection } from "@/components/landing-page/PartnersSection"
import { ServicesSection } from "@/components/landing-page/ServicesSection"
import { PortfolioShowcaseSection } from "@/components/landing-page/PortfolioShowcaseSection"
import { AIAutomationSection } from "@/components/landing-page/AIAutomationSection"
import { WhyChooseUsSection } from "@/components/landing-page/WhyChooseUsSection"
import { HowItWorksSection } from "@/components/landing-page/HowItWorksSection"
import { MissionPricingSection } from "@/components/landing-page/MissionPricingSection"
import { CTASection } from "@/components/landing-page/CTASection"

import type { Partner } from "@/lib/types"

const partners: Partner[] = [
  { name: "AZHotels", logo: "/images/az-logo.png" },
  { name: "Hyundai Maroc", logo: "/images/hyundai-logo.png" },
  { name: "Cinema Camera", logo: "/images/camera-logo.jpg" },
  { name: "ArtRoom", logo: "/images/artroom-logo.avif" },
  { name: "DadaSfia", logo: "/images/dada-sfia-logo.png" },
  { name: "FiduciaireAbdou", logo: "/images/fiduciaireabdou-logo.svg" },
  { name: "AK Technology", logo: "/images/ak-technology-logo.svg" },
  { name: "MetaSuper", logo: "/images/metasuper-logo.svg" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <PortfolioShowcaseSection />
      <AIAutomationSection />
      <PartnersSection partners={partners} />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <MissionPricingSection />
      <CTASection />
    </div>
  )
}
