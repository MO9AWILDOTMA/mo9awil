"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Globe, Palette, TrendingUp, Sparkles, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const ICONS = {
  web_app_development: Globe,
  branding_design: Palette,
  digital_marketing: TrendingUp,
  ai_automation: Sparkles,
} as const

const CARDS = [
  { id: "web_app_development", color: "from-blue-600 to-cyan-500", href: "/services/web-app-development" },
  { id: "branding_design", color: "from-purple-600 to-pink-500", href: "/services/branding-design" },
  { id: "digital_marketing", color: "from-indigo-600 to-violet-500", href: "/services/digital-marketing" },
  { id: "ai_automation", color: "from-teal-600 to-emerald-500", href: "https://agents.mo9awil.ma", external: true },
] as const

export function ServicesSection() {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
            {t("nav.services")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("services.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card, index) => {
            const Icon = ICONS[card.id]
            const content = (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group h-full rounded-2xl border bg-white/70 dark:bg-gray-950/30 dark:border-white/10 p-6 shadow-sm hover:shadow-lg transition-all"
              >
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">
                  {t(`services.items.${card.id}.title`)}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t(`services.items.${card.id}.description`)}
                </p>

                <div className="mt-5">
                  <Button variant="outline" className="w-full justify-between group-hover:border-blue-300">
                    {t("services.cta.learn_more")} <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )

            if (card.external) {
              return (
                <a key={card.id} href={card.href} target="_blank" rel="noreferrer" className="block">
                  {content}
                </a>
              )
            }

            return (
              <Link key={card.id} href={card.href} className="block">
                {content}
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
