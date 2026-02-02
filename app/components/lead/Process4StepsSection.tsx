import { Compass, Layout, Rocket, Wrench } from "lucide-react"

import { Badge } from "@/components/ui/badge"

const STEPS = [
  {
    title: "1) Brief",
    description: "Objectif, offre, sections, contenu disponible, CTA WhatsApp.",
    icon: Compass,
    color: "from-blue-600 to-indigo-600",
  },
  {
    title: "2) Design",
    description: "Maquette mobile-first, structure claire, sections orientées conversion.",
    icon: Layout,
    color: "from-indigo-600 to-violet-600",
  },
  {
    title: "3) Dev + intégrations",
    description: "WhatsApp, Maps, analytics/tracking (si besoin), optimisation vitesse.",
    icon: Wrench,
    color: "from-emerald-600 to-teal-600",
  },
  {
    title: "4) Mise en ligne",
    description: "Vérification, SEO de base, support 7 jours après publication.",
    icon: Rocket,
    color: "from-orange-600 to-rose-500",
  },
] as const

export function Process4StepsSection() {
  return (
    <section className="py-14 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
            Process
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Un process simple en 4 étapes</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Clair, rapide, orienté résultats. On avance avec vous, sans complexité.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="rounded-2xl border bg-white/70 dark:bg-gray-950/30 dark:border-white/10 p-6 shadow-sm">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

