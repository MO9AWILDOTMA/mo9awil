// components/landing-page/HowItWorksSection.tsx
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Rocket, FileText, Palette, Megaphone } from "lucide-react"
import { useTranslation } from "react-i18next"

const STEPS = [
  { step: 1, key: "select_services", icon: FileText, color: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { step: 2, key: "fill_form", icon: Palette, color: "bg-gradient-to-br from-purple-500 to-purple-600" },
  { step: 3, key: "we_handle", icon: Rocket, color: "bg-gradient-to-br from-green-500 to-green-600" },
  { step: 4, key: "you_grow", icon: Megaphone, color: "bg-gradient-to-br from-orange-500 to-orange-600" },
] as const

export function HowItWorksSection() {
  const { t } = useTranslation()

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
            <Rocket className="w-4 h-4 mr-2" />
            {t("how_it_works.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">{t("how_it_works.title")}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">{t("how_it_works.subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center relative group"
            >
              <div className="relative">
                <div
                  className={`w-20 h-20 mx-auto mb-6 ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                  {step.step}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                {t(`how_it_works.steps.${step.key}.title`)}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t(`how_it_works.steps.${step.key}.description`)}
              </p>

              {index < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
