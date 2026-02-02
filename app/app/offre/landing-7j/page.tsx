import type { Metadata } from "next"

import { Landing7jOfferPage } from "@/components/offers/Landing7jOfferPage"

export const metadata: Metadata = {
  title: "Landing page en 7 jours",
  description: "Landing page pro + WhatsApp en 7 jours. Mobile-first, rapide, prête à convertir.",
  openGraph: {
    title: "Landing page pro + WhatsApp en 7 jours",
    description: "Mobile-first, rapide, prête à convertir. À partir de 2,500 MAD.",
    url: "/offre/landing-7j",
    type: "website",
  },
}

export default function Landing7jOfferRoute() {
  return <Landing7jOfferPage />
}

