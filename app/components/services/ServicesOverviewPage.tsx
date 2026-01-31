"use client"

import Link from "next/link"
import { ArrowRight, Globe, Palette, TrendingUp, Sparkles, ExternalLink } from "lucide-react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ITEMS = [
  { id: "web_app_development", href: "/services/web-app-development", icon: Globe, color: "from-blue-600 to-cyan-500" },
  { id: "branding_design", href: "/services/branding-design", icon: Palette, color: "from-purple-600 to-pink-500" },
  { id: "digital_marketing", href: "/services/digital-marketing", icon: TrendingUp, color: "from-indigo-600 to-violet-500" },
  { id: "ai_automation", href: "https://agents.mo9awil.ma", icon: Sparkles, color: "from-teal-600 to-emerald-500", external: true },
] as const

export function ServicesOverviewPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Badge className="mb-4 bg-white/70 dark:bg-white/10 dark:text-white border-blue-200/70 dark:border-white/10">
            {t("nav.services")}
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{t("services.title")}</h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl">{t("services.subtitle")}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ITEMS.map((item, idx) => {
              const content = (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                    {item.id === "ai_automation" ? t("services.items.ai_automation.title") : t(`services.items.${item.id}.title`)}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {item.id === "ai_automation" ? t("services.items.ai_automation.description") : t(`services.items.${item.id}.description`)}
                  </p>
                  <div className="mt-5">
                    <Button variant="outline" className="w-full justify-between">
                      {t("services.cta.learn_more")}{" "}
                      {item.external ? <ExternalLink className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
                    </Button>
                  </div>
                </motion.div>
              )

              if (item.external) {
                return (
                  <a key={item.id} href={item.href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                )
              }

              return (
                <Link key={item.id} href={item.href}>
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

