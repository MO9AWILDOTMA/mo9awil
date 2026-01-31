"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, Workflow, ShoppingCart, UtensilsCrossed, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const USE_CASE_ICONS = [ShoppingCart, UtensilsCrossed, Workflow, Bot] as const

export function AIAutomationSection() {
  const { t } = useTranslation()

  const useCases = [
    t("ai_section.use_cases.ecommerce"),
    t("ai_section.use_cases.restaurant"),
    t("ai_section.use_cases.ops"),
    t("ai_section.use_cases.content"),
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.20),transparent_45%)]" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <Badge className="mb-4 bg-white/15 text-white border-white/20">
            <Sparkles className="h-4 w-4 mr-2" />
            {t("nav.ai_automation")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("ai_section.title")}</h2>
          <p className="text-xl text-blue-100">{t("ai_section.description")}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((label, idx) => {
            const Icon = USE_CASE_ICONS[idx] || Bot
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/10 backdrop-blur p-6 text-white"
              >
                <div className="h-12 w-12 rounded-xl bg-white/15 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="font-semibold">{label}</p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-800 hover:bg-gray-100 rounded-xl px-8 py-4"
          >
            <a href="https://agents.mo9awil.ma" target="_blank" rel="noreferrer">
              {t("ai_section.cta")} <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

