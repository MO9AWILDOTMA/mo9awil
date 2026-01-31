import type { Metadata } from "next"

import { MissionPricingSection } from "@/components/landing-page/MissionPricingSection"
import { PricingPage } from "@/components/site/PricingPage"

export const metadata: Metadata = {
  title: "Mission et Prix",
  description: "Des packs clairs pour démarrer, puis un devis sur-mesure selon votre scope (design, marketing, IA).",
}

export default function Pricing() {
  return (
    <>
      <PricingPage />
      <MissionPricingSection />
    </>
  )
}

