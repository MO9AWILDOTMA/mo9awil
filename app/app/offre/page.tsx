import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/cta/WhatsAppButton"

export const metadata: Metadata = {
  title: "Offres",
  description: "Des offres simples et rapides pour générer des leads (mobile-first, WhatsApp, SEO).",
  openGraph: {
    title: "Offres",
    description: "Des offres simples et rapides pour générer des leads (mobile-first, WhatsApp, SEO).",
    url: "/offre",
    type: "website",
  },
}

export default function OffrePage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            Offres
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">Des offres orientées conversion</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Objectif: générer des leads sans ads, avec une page rapide et un CTA WhatsApp clair.
          </p>

          <div className="mt-6">
            <WhatsAppButton
              message="Salam, je veux un devis pour mon projet."
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              size="lg"
            />
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Landing page pro + WhatsApp en 7 jours
            </h2>
            <p className="mt-3 text-gray-700 dark:text-gray-200">
              Idéal pour restaurants, cliniques et commerces. Mobile-first, rapide, prête à convertir.
            </p>
            <div className="mt-4 text-sm text-muted-foreground">
              À partir de <span className="font-semibold text-foreground">2,500 MAD</span>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild className="justify-between bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                <Link href="/offre/landing-7j">
                  Voir l&apos;offre <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href="/niches/restaurants">
                  Voir une niche <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Vous êtes un restaurant, une clinique, un shop ?</h2>
            <p className="mt-3 text-gray-700 dark:text-gray-200">
              On a des pages adaptées par niche (sections, FAQ, CTA WhatsApp).
            </p>
            <div className="mt-6 grid gap-3">
              <Button asChild variant="outline" className="justify-between">
                <Link href="/niches/restaurants">
                  Restaurants <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href="/niches/cliniques">
                  Cliniques <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="justify-between">
                <Link href="/niches/ecommerce">
                  E-commerce <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

