import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PacksSection } from "@/components/lead/PacksSection"
import { Process4StepsSection } from "@/components/lead/Process4StepsSection"
import { WhatsAppButton } from "@/components/cta/WhatsAppButton"
import { WhatsAppStickyButton } from "@/components/cta/WhatsAppStickyButton"
import type { NicheConfig } from "@/lib/niches"

type NicheLandingPageProps = {
  niche: NicheConfig
}

export function NicheLandingPage({ niche }: NicheLandingPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            {niche.label}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{niche.h1}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">{niche.subtitle}</p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <WhatsAppButton
              message={niche.whatsappMessage}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
              size="lg"
            />
            <Button asChild size="lg" variant="outline" className="justify-between">
              <Link href="/offre/landing-7j">
                Voir l&apos;offre 7 jours <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Problèmes qu&apos;on règle</h2>
            <ul className="grid gap-3 text-gray-700 dark:text-gray-200">
              {niche.painPoints.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ce qu&apos;on livre</h2>
            <ul className="grid gap-3 text-gray-700 dark:text-gray-200">
              {niche.deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Sections recommandées</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl">
            Une structure claire, pensée mobile, pour répondre vite aux questions et pousser à l&apos;action.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {niche.exampleSections.map((section) => (
              <div key={section} className="rounded-xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-4">
                <div className="font-semibold text-gray-900 dark:text-white">{section}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Process4StepsSection />

      <PacksSection whatsappMessage={niche.whatsappMessage} />

      <section id="faq" className="py-14 scroll-mt-24">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">FAQ</h2>
            <Accordion type="single" collapsible className="w-full">
              {niche.faq.map((item) => (
                <AccordionItem key={item.question} value={item.question}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-gray-700 dark:text-gray-200">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Parler maintenant</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Dites-nous votre ville, votre activité et ce que vous voulez mettre en avant. On répond vite sur WhatsApp.
            </p>
            <div className="mt-5">
              <WhatsAppButton
                message={niche.whatsappMessage}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                size="lg"
              />
            </div>
            <p className="mt-3 text-xs text-muted-foreground">
              Astuce: envoyez votre menu/services + horaires + adresse + 5–10 photos.
            </p>
          </div>
        </div>
      </section>

      <WhatsAppStickyButton message={niche.whatsappMessage} />
    </div>
  )
}
