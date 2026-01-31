"use client"

import { useTranslation } from "react-i18next"
import { Badge } from "@/components/ui/badge"

export function PricingPage() {
  const { t } = useTranslation()

  return (
    <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
          {t("nav.pricing")}
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t("pricing.title")}</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">{t("pricing.description")}</p>
      </div>
    </section>
  )
}

