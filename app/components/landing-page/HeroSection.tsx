// components/landing-page/HeroSection.tsx
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, Globe, Sparkles, Star, TrendingUp, Users, Laptop } from "lucide-react"
import { useTranslation } from "react-i18next"
import { getWhatsAppUrl } from "@/lib/whatsapp"

export function HeroSection() {
  const { t } = useTranslation()
  const whatsappHref = getWhatsAppUrl("Salam, je veux un devis pour mon projet")

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center space-x-2 mb-6">
              <Badge className="bg-green-100 text-green-700 border-green-200 dark:bg-green-950/30 dark:text-green-200 dark:border-green-900/50">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                {t("hero.badge_primary")}
              </Badge>
              <Badge variant="outline" className="border-blue-200 text-blue-700 dark:border-blue-900/50 dark:text-blue-200">
                <Star className="w-3 h-3 mr-1 fill-current" />
                {t("hero.badge_secondary")}
              </Badge>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {t("hero.main_title")}{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {t("hero.highlight")}
              </span>{" "}
              {t("hero.location")}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{t("hero.description")}</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t("hero.cta_primary")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-300 px-8 py-4 text-lg rounded-xl bg-transparent"
              >
                <Link href="/#exemples">
                  <Users className="mr-2 h-5 w-5" />
                  {t("hero.cta_secondary")}
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-sm text-gray-600">{t("hero.stats.businesses")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-1">FR/AR</div>
                <div className="text-sm text-gray-600">{t("hero.stats.success")}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">{t("hero.stats.support")}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative ml-12"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                      <Laptop className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Projet Digital</h3>
                      <p className="text-sm text-gray-500">Design → Dev → Launch</p>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-700">Active</Badge>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">UI/UX Design</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Développement</span>
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">SEO & mise en ligne</span>
                    <div className="w-5 h-5 border-2 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-blue-600">75%</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 z-20">
                <div className="flex items-center space-x-2">
                  <Globe className="h-5 w-5 text-cyan-500" />
                  <span className="text-sm font-medium">Website Ready</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 z-20">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-sm font-medium">Growth Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
