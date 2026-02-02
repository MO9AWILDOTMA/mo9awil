// components/landing-page/CTASection.tsx
"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useTranslation } from "react-i18next"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function CTASection() {
  const { t } = useTranslation()
  const whatsappHref = getWhatsAppUrl("Salam, je veux un devis pour mon projet")

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{t("cta.description")}</p>

          <Button
            size="lg"
            asChild
            className="bg-white cursor-pointer text-blue-700 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <a href={whatsappHref} target="_blank" rel="noreferrer">
              <Sparkles className="mr-2 h-5 w-5" />
              {t("cta.button")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </motion.div>
      </div>
      <div className='absolute pointer-events-none inset-0 bg-[url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%27%20height=%27100%27%20viewBox=%270%200%20100%20100%27%3E%3Cpath%20fill=%27%23ffffff%27%20fillOpacity=%270.1%27%20d=%27M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c0%200%200%200%200%200%27/%3E%3C/svg%3E")] opacity-20'></div>
    </section>
  )
}
