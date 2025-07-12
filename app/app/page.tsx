"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  Calculator,
  FileText,
  Scale,
  MessageCircle,
  Globe,
  Smartphone,
  TrendingUp,
  Palette,
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Star,
  Sparkles,
  Rocket,
  Target,
  Award,
  Menu,
  X,
} from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { motion } from "framer-motion"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function LandingPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: [] as string[],
    selectedPack: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const year = new Date().getFullYear()

  const services = [
    {
      icon: Building2,
      key: "company_creation",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Globe,
      key: "website_creation",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50",
      borderColor: "border-cyan-200",
    },
    {
      icon: Calculator,
      key: "accounting",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: FileText,
      key: "invoicing",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: Scale,
      key: "legal_assistance",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
    {
      icon: MessageCircle,
      key: "legal_consultation",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Smartphone,
      key: "social_media",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      icon: TrendingUp,
      key: "digital_marketing",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
    },
    {
      icon: Palette,
      key: "branding",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
  ]

  const whyChooseUs = [
    { icon: CheckCircle, key: "transparent_pricing", color: "text-emerald-600" },
    { icon: Users, key: "local_experts", color: "text-blue-600" },
    { icon: Shield, key: "all_in_one", color: "text-purple-600" },
    { icon: Zap, key: "easy_to_use", color: "text-orange-600" },
  ]

  const howItWorks = [
    { step: 1, key: "select_services", icon: Target, color: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { step: 2, key: "fill_form", icon: FileText, color: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { step: 3, key: "we_handle", icon: Rocket, color: "bg-gradient-to-br from-green-500 to-green-600" },
    { step: 4, key: "you_grow", icon: Award, color: "bg-gradient-to-br from-orange-500 to-orange-600" },
  ]

  const partners = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "InnovateHub", logo: "/placeholder.svg?height=60&width=120" },
    { name: "StartupLab", logo: "/placeholder.svg?height=60&width=120" },
    { name: "BusinessPro", logo: "/placeholder.svg?height=60&width=120" },
    { name: "GrowthPartners", logo: "/placeholder.svg?height=60&width=120" },
    { name: "SuccessVentures", logo: "/placeholder.svg?height=60&width=120" },
  ]

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "#about", label: t("nav.about") },
    { href: "#how-it-works", label: t("nav.how_it_works") },
    { href: "#mission", label: t("nav.mission") },
    { href: "#partners", label: t("nav.partners") },
    { href: "#contact", label: t("nav.contact") },
  ]

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, service] : prev.services.filter((s) => s !== service),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        selectedPack: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Mo9awil
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA & Language */}
            <div className="hidden md:flex items-center space-x-4">
              <LanguageSwitcher />
              <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    Get Quote
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-600 hover:text-blue-600 font-medium text-left"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <LanguageSwitcher />
                  <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                    <DialogTrigger asChild>
                      <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                        Get Quote
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - New Design */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
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
                <Badge className="bg-green-100 text-green-700 border-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Trusted Platform
                </Badge>
                <Badge variant="outline" className="border-blue-200 text-blue-700">
                  <Star className="w-3 h-3 mr-1 fill-current" />
                  10+ Happy Clients
                </Badge>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t("hero.main_title")}{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {t("hero.highlight")}
                </span>{" "}
                {t("hero.location")}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">{t("hero.description")}</p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      {t("hero.cta_primary")}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                </Dialog>

              <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 hover:border-blue-300 px-8 py-4 text-lg rounded-xl bg-transparent"
                >
                  <Users className="mr-2 h-5 w-5" />
                  {t("hero.cta_secondary")}
                </Button>
                </DialogTrigger>
              </Dialog>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-sm text-gray-600">{t("hero.stats.businesses")}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-1">98%</div>
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
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Business Setup</h3>
                        <p className="text-sm text-gray-500">Complete in 3 days</p>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700">Active</Badge>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Legal Registration</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Tax Setup</span>
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Bank Account</span>
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
                    <span className="text-sm font-medium">Marketing Active</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t("partners.title")}</h2>
            <p className="text-gray-600">{t("partners.subtitle")}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
          >
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid - Enhanced */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              From legal setup to digital marketing, we've got you covered with professional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <Card
                  className={`h-full hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor} ${service.bgColor} backdrop-blur-sm`}
                >
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/50 to-transparent rounded-bl-3xl"></div>
                    <div
                      className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${service.bgColor} border-2 ${service.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{t(`services.items.${service.key}.title`)}</h3>
                    <p className="text-gray-600 leading-relaxed">{t(`services.items.${service.key}.description`)}</p>
                    {index === 1 && (
                      <Badge className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Mo9awil - Enhanced */}
      <section
        id="about"
        className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Entrepreneurs</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Join thousands of successful businesses that chose Mo9awil for their growth journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group-hover:scale-105">
                  <div className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-2xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                    <item.icon className={`h-8 w-8 text-white`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{t(`why_choose.items.${item.key}.title`)}</h3>
                  <p className="text-blue-100 leading-relaxed">{t(`why_choose.items.${item.key}.description`)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%3E%3Cg%20fill=%27%23ffffff%27%20fillOpacity=%270.1%27%3E%3Ccircle%20cx=%2730%27%20cy=%2730%27%20r=%272%27/%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
      </section>

      {/* How It Works */}
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
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get your business up and running in no time with our streamlined process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
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

                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Pricing Section */}
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
                        onClick={() => setFormData((prev) => ({ ...prev, selectedPack: "starter" }))}
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
                        onClick={() => setFormData((prev) => ({ ...prev, selectedPack: "professional" }))}
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
                        onClick={() => setFormData((prev) => ({ ...prev, selectedPack: "enterprise" }))}
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

      {/* CTA Section */}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Business Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful entrepreneurs who chose Mo9awil to build their dreams
            </p>

            <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </DialogTrigger>
            </Dialog>
          </motion.div>
        </div>
        <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%27100%27%20height=%27100%27%20viewBox=%270%200%20100%20100%27%3E%3Cpath%20fill=%27%23ffffff%27%20fillOpacity=%270.1%27%20d=%27M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm48%2025c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm-43-7c1.657%200%203-1.343%203-3s-1.343-3-3-3-3%201.343-3%203%201.343%203%203%203zm63%2031c0%200%200%200%200%200%27/%3E%3C/svg%3E")] opacity-20'></div>
      </section>

      {/* Quote Modal */}
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
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{t("quote.form.email")}</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
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
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
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
                          onChange={(e) => setFormData((prev) => ({ ...prev, selectedPack: e.target.value }))}
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
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
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

      {/* Fancy Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%3E%3Cg%20fill=%27%23ffffff%27%20fillOpacity=%270.05%27%3E%3Ccircle%20cx=%2730%27%20cy=%2730%27%20r=%272%27/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Mo9awil
                  </span>
                </div>
                <p className="text-blue-100 mb-6 max-w-md leading-relaxed">{t("footer.description")}</p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">@</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.quick_links")}</h3>
                <ul className="space-y-3">
                  {navLinks.slice(0, 4).map((link) => (
                    <li key={link.href}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-blue-100 hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.contact")}</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-300 text-sm">📧</span>
                    </div>
                    <span className="text-blue-100">contact@mo9awil.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-300 text-sm">📞</span>
                    </div>
                    <span className="text-blue-100">+212 530-306254</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-blue-300 text-sm">📍</span>
                    </div>
                    <span className="text-blue-100">Rabat, Morocco</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-100 text-sm">&copy; {year} Mo9awil. {t("footer.rights")}</div>
              <div className="flex items-center space-x-6">
                <LanguageSwitcher />
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {t("footer.privacy")}
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {t("footer.terms")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
