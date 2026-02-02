import type { Metadata } from "next"

import { NicheLandingPage } from "@/components/niches/NicheLandingPage"
import { NICHES } from "@/lib/niches"

const niche = NICHES.ecommerce

export const metadata: Metadata = {
  title: "E-commerce",
  description: niche.description,
  openGraph: {
    title: "E-commerce — Landing / vitrine + WhatsApp",
    description: niche.description,
    url: "/niches/ecommerce",
    type: "website",
  },
}

export default function EcommerceNichePage() {
  return <NicheLandingPage niche={niche} />
}

