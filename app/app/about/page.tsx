import type { Metadata } from "next"

import { AboutPage } from "@/components/site/AboutPage"

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Mo9awil est une agence digitale à Rabat spécialisée en développement web/app, design, marketing digital et automatisation IA (via agents.mo9awil.ma).",
}

export default function About() {
  return <AboutPage />
}

