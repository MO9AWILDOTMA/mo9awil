import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, Clock, ExternalLink, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { WhatsAppButton } from "@/components/cta/WhatsAppButton"
import { WhatsAppStickyButton } from "@/components/cta/WhatsAppStickyButton"
import { PacksSection } from "@/components/lead/PacksSection"
import { Process4StepsSection } from "@/components/lead/Process4StepsSection"
import { EXAMPLES } from "@/lib/examples"

const TIMELINE = [
  { title: "Jour 1", description: "Brief + collecte des contenus (textes, photos, horaires, adresse)." },
  { title: "Jours 2–3", description: "Design + structure (mobile-first, sections, parcours)." },
  { title: "Jours 4–5", description: "Dev + intégrations (WhatsApp, Maps, Analytics selon besoin)." },
  { title: "Jour 6", description: "SEO de base + performance (vitesse, bonnes pratiques)." },
  { title: "Jour 7", description: "Mise en ligne + support (ajustements rapides)." },
] as const

const FAQ = [
  {
    q: "Vous gérez le contenu ?",
    a: "Oui. Vous pouvez fournir le contenu (menu/services, photos, infos), ou on vous aide à le structurer et le reformuler.",
  },
  {
    q: "Est-ce possible en FR/AR ?",
    a: "Oui (option). On peut livrer une version FR/AR selon votre contenu et votre cible.",
  },
  {
    q: "Hébergement ?",
    a: "Inclus ou guidé selon votre stack. On s’adapte à votre situation et on assure la mise en ligne.",
  },
] as const

export function Landing7jOfferPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            Offre
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Landing page pro + WhatsApp en 7 jours
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
            Idéal pour restaurants, cliniques et commerces. Mobile-first, rapide, prête à convertir.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton
              message="Salam, je veux une landing page pro + WhatsApp en 7 jours."
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              size="lg"
            />
            <Button asChild size="lg" variant="outline" className="justify-between">
              <Link href="/#exemples">
                Voir des exemples <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/70 dark:bg-white/10 px-4 py-2 text-sm text-gray-800 dark:text-gray-100 border border-blue-200/70 dark:border-white/10">
            <Clock className="h-4 w-4" />
            <span>
              <strong>À partir de 2,500 MAD</strong> (selon contenu + langues + sections)
            </span>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ce que vous obtenez</h2>
            <ul className="grid gap-3 text-gray-700 dark:text-gray-200">
              {[
                "1 page pro (mobile-first)",
                "Sections adaptées: menu / services / produits, horaires, adresse/Maps, galerie, avis",
                "Bouton WhatsApp (commander / réserver / prendre RDV) + message pré-rempli",
                "SEO de base + performance (vitesse, bonnes pratiques)",
                "Mise en ligne + support 7 jours",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Timeline (Jour 1–7)</h2>
            <div className="grid gap-3">
              {TIMELINE.map((step) => (
                <div key={step.title} className="rounded-xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-4">
                  <div className="font-semibold text-gray-900 dark:text-white">{step.title}</div>
                  <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Process4StepsSection />

      <PacksSection whatsappMessage="Salam, je veux l’offre Landing 7 jours (pack Starter ou Pro)." />

      <section className="py-14 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Exemples</h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300">
                Un aperçu de projets live. On peut adapter la structure selon votre niche.
              </p>
            </div>
            <Button asChild variant="outline" className="justify-between md:w-auto">
              <Link href="/portfolio">
                Voir le portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXAMPLES.map((example) => (
              <article
                key={example.slug}
                className="group rounded-2xl border bg-card shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
              >
                {example.imageSrc ? (
                  <div className="relative aspect-[16/10] bg-muted">
                    <Image
                      src={example.imageSrc}
                      alt={example.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                ) : null}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{example.name}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{example.description}</p>
                  <div className="mt-5">
                    <Button
                      asChild
                      className="justify-between w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      <a href={example.href} target="_blank" rel="noreferrer">
                        Voir le site <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-14 scroll-mt-24">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger>{item.q}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-200">{item.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <Badge className="mb-3 bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-900/40">
              Démarrer
            </Badge>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">On lance votre page en 7 jours</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Envoyez votre contenu (ou dites-nous ce que vous avez) — on structure, on design, on livre.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                message="Salam, je veux une landing page pro + WhatsApp en 7 jours."
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                size="lg"
              />
              <Button asChild size="lg" variant="outline" className="justify-between">
                <Link href="/niches/restaurants">
                  Voir une niche <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Réponse rapide sur WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppStickyButton message="Salam, je veux une landing page pro + WhatsApp en 7 jours." />
    </div>
  )
}
