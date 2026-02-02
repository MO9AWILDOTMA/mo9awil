import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { WhatsAppButton } from "@/components/cta/WhatsAppButton"

type PacksSectionProps = {
  whatsappMessage: string
}

const PACKS = [
  {
    id: "starter",
    title: "Pack Starter",
    price: "À partir de 2,500 MAD",
    description: "Pour lancer vite une page qui convertit sur mobile.",
    highlight: true,
    features: [
      "1 page pro (mobile-first)",
      "WhatsApp + message pré-rempli",
      "Sections essentielles (selon niche)",
      "SEO de base + performance",
      "Mise en ligne + support 7 jours",
    ],
  },
  {
    id: "pro",
    title: "Pack Pro",
    price: "Sur devis",
    description: "Pour aller plus loin (contenu, tracking, sections avancées).",
    highlight: false,
    features: [
      "Tout dans Starter",
      "Aide contenu (structure + copy)",
      "Tracking (Analytics/Pixel) si applicable",
      "Sections avancées (FAQ, offres, best sellers…)",
      "Optimisation conversion (itérations)",
    ],
  },
] as const

export function PacksSection({ whatsappMessage }: PacksSectionProps) {
  return (
    <section className="py-14 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-white text-blue-700 border-blue-200 dark:bg-white/10 dark:text-white dark:border-white/10">
            Packs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Starter ou Pro</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Deux options simples. On recommande de démarrer Starter, puis scaler selon les résultats.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PACKS.map((pack) => (
            <article
              key={pack.id}
              className={`rounded-2xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-6 shadow-sm ${
                pack.highlight ? "ring-2 ring-blue-600" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{pack.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{pack.description}</p>
                </div>
                {pack.highlight ? (
                  <span className="text-xs font-semibold rounded-full bg-blue-50 text-blue-700 px-3 py-1 dark:bg-blue-950/40 dark:text-blue-200">
                    Recommandé
                  </span>
                ) : null}
              </div>

              <div className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">{pack.price}</div>

              <ul className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-gray-200">
                {pack.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span aria-hidden>✅</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <WhatsAppButton
                  message={whatsappMessage}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                />
                <Button asChild variant="outline" className="justify-between">
                  <a href="#faq">Questions</a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

