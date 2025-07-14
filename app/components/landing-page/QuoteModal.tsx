// components/landing-page/QuoteModal.tsx
"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle, Sparkles } from "lucide-react"
import { FormData, Service } from '../../lib/types';


interface QuoteModalProps {
  isQuoteModalOpen: boolean
  setIsQuoteModalOpen: (open: boolean) => void
  setIsSubmitted: (open: boolean) => void
  isSubmitting: boolean
  isSubmitted: boolean
  formData: FormData
  setFormData: (data: FormData) => void
  services: Service[]
  handleServiceChange: (service: string, checked: boolean) => void
  handleSubmit: (e: React.FormEvent) => Promise<void>
  t: (key: string) => string
}

export function QuoteModal({
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  setIsSubmitted,
  isSubmitting,
  isSubmitted,
  formData,
  setFormData,
  services,
  handleServiceChange,
  handleSubmit,
  t,
}: QuoteModalProps) {
  return (
    <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-2">{t("quote.title")}</DialogTitle>
          <p className="text-gray-600 text-center">{t("quote.subtitle")}</p>
        </DialogHeader>

        <div className="mt-6">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">{t("quote.success.title")}</h3>
              <p className="text-gray-600">{t("quote.success.message")}</p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setIsQuoteModalOpen(false)
                }}
                className="mt-4"
              >
                {t("quote.success.close")}
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.form.name")}</label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{t("quote.form.email")}</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="rounded-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("quote.form.phone")}</label>
                <Input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("quote.form.package")}</label>
                <div className="grid grid-cols-1 gap-3">
                  {["starter", "professional", "enterprise"].map((pack) => (
                    <div key={pack} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50">
                      <input
                        type="radio"
                        id={pack}
                        name="selectedPack"
                        value={pack}
                        checked={formData.selectedPack === pack}
                        onChange={(e) => setFormData({ ...formData, selectedPack: e.target.value })}
                        className="w-4 h-4 text-blue-600"
                      />
                      <label htmlFor={pack} className="text-sm cursor-pointer font-medium">
                        {t(`pricing.${pack}.title`)} - {t(`pricing.${pack}.description`)}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-4">{t("quote.form.services")}</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-48 overflow-y-auto">
                  {services.map((service) => (
                    <div key={service.key} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                      <Checkbox
                        id={service.key}
                        checked={formData.services.includes(service.key)}
                        onCheckedChange={(checked) => handleServiceChange(service.key, checked as boolean)}
                      />
                      <div className="flex items-center space-x-2">
                        <service.icon className={`w-4 h-4 ${service.color}`} />
                        <label htmlFor={service.key} className="text-sm cursor-pointer">
                          {t(`services.items.${service.key}.title`)}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">{t("quote.form.message")}</label>
                <Textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t("quote.form.message_placeholder")}
                  className="rounded-lg"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg"
                size="lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t("quote.form.submitting")}
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    {t("quote.form.submit")}
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}