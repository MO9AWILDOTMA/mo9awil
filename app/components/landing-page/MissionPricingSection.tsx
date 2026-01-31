"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

import { useQuoteDialog } from "@/components/quote/QuoteDialogProvider"

const TIERS = [
  { id: "debutant", highlight: false },
  { id: "professionnel", highlight: true },
  { id: "entreprise", highlight: false },
] as const

export function MissionPricingSection() {
  const { t } = useTranslation()
  const { openQuote } = useQuoteDialog()

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-white text-blue-700 border-blue-200">{t("pricing.badge")}</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("pricing.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{t("pricing.description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TIERS.map((tier, index) => {
            const features = t(`pricing.${tier.id}.features`, { returnObjects: true }) as string[]
            return (
              <motion.article
                key={tier.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`rounded-2xl border bg-white dark:bg-gray-900/40 dark:border-white/10 p-6 shadow-sm ${
                  tier.highlight ? "ring-2 ring-blue-600" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{t(`pricing.${tier.id}.title`)}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{t(`pricing.${tier.id}.description`)}</p>
                  </div>
                  {tier.highlight ? (
                    <span className="text-xs font-semibold rounded-full bg-blue-50 text-blue-700 px-3 py-1">
                      {t("pricing.popular")}
                    </span>
                  ) : null}
                </div>

                <ul className="mt-5 grid gap-2 text-sm text-gray-700 dark:text-gray-200">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span aria-hidden>✅</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={openQuote}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  {t("pricing.get_started")}
                </Button>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
