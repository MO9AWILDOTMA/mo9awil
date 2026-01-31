import type { Metadata } from "next"

import { ServicesOverviewPage } from "@/components/services/ServicesOverviewPage"

export const metadata: Metadata = {
  title: "Services",
  description: "Développement web/app, image de marque, marketing digital et automatisation IA (via agents.mo9awil.ma).",
}

export default function Services() {
  return <ServicesOverviewPage />
}

