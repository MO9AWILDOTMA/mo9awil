// components/landing-page/MissionPricingSection.tsx
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Target, CheckCircle } from "lucide-react"
import { FormData } from "@/lib/types"

interface MissionPricingSectionProps {
  t: (key: string) => string
  isQuoteModalOpen: boolean
  setIsQuoteModalOpen: (open: boolean) => void
  formData: FormData
  setFormData: (data: FormData) => void
}

export function MissionPricingSection({
  t,
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  formData,
  setFormData,
}: MissionPricingSectionProps) {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
            <Target className="w-4 h-4 mr-2" />
            {t("mission.badge")}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{t("mission.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">{t("mission.description")}</p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Starter Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-gray-200 hover:border-blue-300 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("pricing.starter.title")}</h3>
                  <p className="text-gray-600">{t("pricing.starter.description")}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["feature1", "feature2", "feature3", "feature4"].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{t(`pricing.starter.features.${feature}`)}</span>
                    </li>
                  ))}
                </ul>
                <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-transparent"
                      variant="outline"
                      onClick={() => setFormData({ ...formData, selectedPack: "starter" })}
                    >
                      {t("pricing.get_started")}
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>

          {/* Professional Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-blue-500 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-center py-2 text-sm font-medium">
                {t("pricing.popular")}
              </div>
              <CardContent className="p-8 pt-12">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("pricing.professional.title")}</h3>
                  <p className="text-gray-600">{t("pricing.professional.description")}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["feature1", "feature2", "feature3", "feature4", "feature5", "feature6"].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{t(`pricing.professional.features.${feature}`)}</span>
                    </li>
                  ))}
                </ul>
                <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      onClick={() => setFormData({ ...formData, selectedPack: "professional" })}
                    >
                      {t("pricing.get_started")}
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enterprise Package */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-2 border-gray-200 hover:border-purple-300 transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{t("pricing.enterprise.title")}</h3>
                  <p className="text-gray-600">{t("pricing.enterprise.description")}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {["feature1", "feature2", "feature3", "feature4", "feature5"].map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-700">{t(`pricing.enterprise.features.${feature}`)}</span>
                    </li>
                  ))}
                </ul>
                <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600"
                      variant="outline"
                      onClick={() => setFormData({ ...formData, selectedPack: "enterprise" })}
                    >
                      {t("pricing.contact_us")}
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}