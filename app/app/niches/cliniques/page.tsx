import type { Metadata } from "next"

import { NicheLandingPage } from "@/components/niches/NicheLandingPage"
import { NICHES } from "@/lib/niches"

const niche = NICHES.cliniques

export const metadata: Metadata = {
  title: "Cliniques",
  description: niche.description,
  openGraph: {
    title: "Cliniques — Landing page + WhatsApp",
    description: niche.description,
    url: "/niches/cliniques",
    type: "website",
  },
}

export default function CliniquesNichePage() {
  return <NicheLandingPage niche={niche} />
}

