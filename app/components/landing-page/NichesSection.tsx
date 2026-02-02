import Link from "next/link"
import { ArrowRight, HeartPulse, ShoppingBag, UtensilsCrossed } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const NICHES = [
  {
    href: "/niches/restaurants",
    title: "Restaurants",
    description: "Menu, horaires, localisation, avis et commandes/réservations sur WhatsApp.",
    icon: UtensilsCrossed,
    color: "from-orange-600 to-rose-500",
  },
  {
    href: "/niches/cliniques",
    title: "Cliniques & cabinets",
    description: "Services, médecins, confiance, rdv WhatsApp, et infos pratiques claires.",
    icon: HeartPulse,
    color: "from-emerald-600 to-teal-500",
  },
  {
    href: "/niches/ecommerce",
    title: "E-commerce",
    description: "Vitrine rapide, best sellers, tracking, support WhatsApp, prêt à scaler.",
    icon: ShoppingBag,
    color: "from-blue-600 to-indigo-600",
  },
] as const

export function NichesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
            Niches
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Des pages pensées pour votre activité
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des sections adaptées à vos clients, avec un parcours mobile simple et un CTA WhatsApp visible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {NICHES.map((niche) => {
            const Icon = niche.icon
            return (
              <Link
                key={niche.href}
                href={niche.href}
                className="group rounded-2xl border bg-white/70 dark:bg-gray-950/30 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div
                  className={`h-12 w-12 rounded-xl bg-gradient-to-br ${niche.color} flex items-center justify-center text-white`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{niche.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{niche.description}</p>
                <div className="mt-5">
                  <Button variant="outline" className="w-full justify-between group-hover:border-blue-300">
                    Voir la page <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

