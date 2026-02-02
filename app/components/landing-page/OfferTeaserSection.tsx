import Link from "next/link"
import { ArrowRight, Clock, Rocket, ShieldCheck, Wallet } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/cta/WhatsAppButton"

export function OfferTeaserSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white text-blue-700 border-blue-200 dark:bg-white/10 dark:text-white dark:border-white/10">
              Offre
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Landing page pro + WhatsApp en 7 jours
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Idéal pour restaurants, cliniques et commerces. Mobile-first, rapide, prête à convertir.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button asChild variant="outline" className="justify-between">
              <Link href="/offre/landing-7j">
                Découvrir l&apos;offre <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <WhatsAppButton
              message="Salam, je veux une landing page pro + WhatsApp en 7 jours."
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center dark:bg-blue-950/40 dark:text-blue-200">
                <Rocket className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">1 page pro (mobile-first)</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Sections clés (menu/services, horaires, adresse/Maps, galerie, avis) + CTA WhatsApp.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center dark:bg-indigo-950/40 dark:text-indigo-200">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">Délai clair</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Brief → design → dev → SEO/perf → mise en ligne + support.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="h-11 w-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center dark:bg-emerald-950/40 dark:text-emerald-200">
                <Wallet className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white">À partir de 2,500 MAD</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  Selon contenu, langues (FR/AR) et sections. SEO de base + performance inclus.
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4" />
                  <span>Mise en ligne + support 7 jours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

