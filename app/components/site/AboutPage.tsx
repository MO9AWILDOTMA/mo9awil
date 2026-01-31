"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useQuoteDialog } from "@/components/quote/QuoteDialogProvider"

function pickLocale(lang: string) {
  return lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
}

const CONTENT = {
  fr: {
    title: "À Propos",
    intro:
      "Mo9awil est une agence digitale basée à Rabat. Nous aidons les entreprises à construire une présence moderne, performante et orientée résultats — du design à la mise en ligne.",
    bullets: [
      "5+ projets live (e‑commerce, corporate, hospitality, F&B, B2B)",
      "Stack moderne : Next.js, React, TypeScript, Tailwind",
      "Multilingue : FR/AR/EN",
      "Approche IA-first via agents.mo9awil.ma (lien externe)",
    ],
  },
  ar: {
    title: "حولنا",
    intro:
      "مو9اول وكالة رقمية في الرباط. نساعد الشركات على بناء حضور حديث وعالي الأداء موجّه للنتائج — من التصميم إلى الإطلاق.",
    bullets: ["أكثر من 5 مشاريع مباشرة", "تقنيات حديثة", "متعدد اللغات FR/AR/EN", "منهج IA-first عبر agents.mo9awil.ma (رابط خارجي)"],
  },
  en: {
    title: "About",
    intro:
      "Mo9awil is a digital agency in Rabat. We help businesses build modern, high-performance, results-driven experiences — from design to launch.",
    bullets: ["5+ live projects", "Modern stack", "FR/AR/EN multilingual", "AI-first via agents.mo9awil.ma (external)"],
  },
} as const

export function AboutPage() {
  const { t, i18n } = useTranslation()
  const { openQuote } = useQuoteDialog()
  const locale = pickLocale(i18n.language)
  const content = CONTENT[locale]

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            {t("nav.about")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{content.title}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">{content.intro}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={openQuote} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              {t("nav.get_quote")}
            </Button>
            <Button asChild variant="outline">
              <Link href="/portfolio">{t("portfolio.title")} →</Link>
            </Button>
            <Button asChild variant="outline">
              <a href="https://agents.mo9awil.ma" target="_blank" rel="noreferrer">
                {t("nav.ai_automation")} →
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {locale === "fr" ? "Ce qui nous différencie" : locale === "ar" ? "ما يميزنا" : "What sets us apart"}
            </h2>
            <ul className="grid gap-2 text-gray-700 dark:text-gray-200">
              {content.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span aria-hidden>✅</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

