import type { Metadata } from "next"

import { NicheLandingPage } from "@/components/niches/NicheLandingPage"
import { NICHES } from "@/lib/niches"

const niche = NICHES.restaurants

export const metadata: Metadata = {
  title: "Restaurants",
  description: niche.description,
  openGraph: {
    title: "Restaurants — Landing page + WhatsApp",
    description: niche.description,
    url: "/niches/restaurants",
    type: "website",
  },
}

export default function RestaurantsNichePage() {
  return <NicheLandingPage niche={niche} />
}

