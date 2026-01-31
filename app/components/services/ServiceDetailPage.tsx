"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useQuoteDialog } from "@/components/quote/QuoteDialogProvider"
import type { ServicePageData } from "@/lib/service-pages"

function pickLocale(lang: string) {
  return lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
}

export function ServiceDetailPage({ service }: { service: ServicePageData }) {
  const { t, i18n } = useTranslation()
  const { openQuote } = useQuoteDialog()
  const locale = pickLocale(i18n.language)

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link href="/services" className="text-sm text-blue-700 dark:text-blue-200 hover:underline">
              ← {t("nav.services")}
            </Link>
          </div>

          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            {t("nav.services")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{service.hero.title[locale]}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">{service.hero.subtitle[locale]}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={openQuote} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              {t("nav.get_quote")}
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">
                {t("portfolio.title")} →
              </Link>
            </Button>
            {service.id === "digital_marketing" ? (
              <Button asChild variant="outline" className="justify-between">
                <a href="https://agents.mo9awil.ma" target="_blank" rel="noreferrer">
                  {t("nav.ai_automation")} <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 grid gap-8">
            {service.sections.map((section, idx) => (
              <article key={idx} className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.heading[locale]}</h2>
                <ul className="grid gap-2 text-gray-700 dark:text-gray-200">
                  {section.bullets[locale].map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden>✅</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="grid gap-6">
            <article className="rounded-2xl border bg-card p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Tech</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech) => (
                  <Badge key={tech} variant="outline">
                    {tech}
                  </Badge>
                ))}
              </div>
            </article>
          </aside>
        </div>
      </section>
    </div>
  )
}

