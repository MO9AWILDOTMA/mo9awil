"use client"

import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useQuoteDialog } from "@/components/quote/QuoteDialogProvider"

export function ContactPage() {
  const { t } = useTranslation()
  const { openQuote } = useQuoteDialog()

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            {t("nav.contact")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t("nav.contact")}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">{t("cta.description")}</p>

          <div className="mt-6">
            <Button onClick={openQuote} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              {t("nav.get_quote")}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("footer.contact")}</h2>
            <div className="grid gap-3 text-gray-700 dark:text-gray-200">
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div className="font-medium">contact@mo9awil.com</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Téléphone</div>
                <div className="font-medium">+212 530-306254</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Adresse</div>
                <div className="font-medium">{t("footer.location")}</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border bg-card p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t("nav.ai_automation")}</h2>
            <p className="text-gray-700 dark:text-gray-200 mb-4">
              {t("ai_section.description")}
            </p>
            <Button asChild variant="outline" className="justify-between">
              <a href="https://agents.mo9awil.ma" target="_blank" rel="noreferrer">
                {t("ai_section.cta")} →
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

