import type { Metadata } from "next"

import { PortfolioPage } from "@/components/portfolio/PortfolioPage"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Découvrez des projets web et e-commerce réalisés par Mo9awil (liens live + études de cas).",
}

export default function Portfolio() {
  return <PortfolioPage />
}

