// app/page.tsx
"use client"

import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
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
  Users,
  Shield,
  Zap,
  Star,
  Sparkles,
  Rocket,
  Target,
  Award,
} from "lucide-react"
import { Header } from "@/components/landing-page/Header"
import { HeroSection } from "@/components/landing-page/HeroSection"
import { PartnersSection } from "@/components/landing-page/PartnersSection"
import { ServicesSection } from "@/components/landing-page/ServicesSection"
import { WhyChooseUsSection } from "@/components/landing-page/WhyChooseUsSection"
import { HowItWorksSection } from "@/components/landing-page/HowItWorksSection"
import { MissionPricingSection } from "@/components/landing-page/MissionPricingSection"
import { CTASection } from "@/components/landing-page/CTASection"
import { QuoteModal } from "@/components/landing-page/QuoteModal"
import { Footer } from "@/components/landing-page/Footer"
import { Service, WhyChooseUsItem, HowItWorksStep, Partner, NavLink, QuoteFormData as FormData } from "@/lib/types"
import { fbq } from "@/lib/fbPixel"

export default function LandingPage() {
  const { t, i18n } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    services: [],
    selectedPack: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const year = new Date().getFullYear()

  const services: Service[] = [
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

  const whyChooseUs: WhyChooseUsItem[] = [
    { icon: CheckCircle, key: "transparent_pricing", color: "text-emerald-600" },
    { icon: Users, key: "local_experts", color: "text-blue-600" },
    { icon: Shield, key: "all_in_one", color: "text-purple-600" },
    { icon: Zap, key: "easy_to_use", color: "text-orange-600" },
  ]

  const howItWorks: HowItWorksStep[] = [
    { step: 1, key: "select_services", icon: Target, color: "bg-gradient-to-br from-blue-500 to-blue-600" },
    { step: 2, key: "fill_form", icon: FileText, color: "bg-gradient-to-br from-purple-500 to-purple-600" },
    { step: 3, key: "we_handle", icon: Rocket, color: "bg-gradient-to-br from-green-500 to-green-600" },
    { step: 4, key: "you_grow", icon: Award, color: "bg-gradient-to-br from-orange-500 to-orange-600" },
  ]

  const partners: Partner[] = [
    { name: "AZHotels", logo: "/images/az-logo.png" },
    { name: "HyundaiMAroc", logo: "/images/hyundai-logo.png" },
    { name: "CinemaCamera", logo: "/images/camera-logo.jpg" },
    { name: "ArtRoom", logo: "/images/artroom-logo.avif" },
  ]

  const navLinks: NavLink[] = [
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
      const payload = {
        ...formData,
        language: i18n.language || "unknown",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
      }

      const response = await fetch("/api/submitQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: [],
          selectedPack: "",
          message: "",
        })
      fbq('trackCustom', 'ButtonClicked', {
        buttonName: 'Quote',
      });
      } else {
        console.error("Submit error:", result.message)
      }
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
      <Header
        navLinks={navLinks}
        isQuoteModalOpen={isQuoteModalOpen}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        scrollToSection={scrollToSection}
      />

      <HeroSection t={t} isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen} />

      <PartnersSection t={t} partners={partners} />

      <ServicesSection t={t} services={services} />

      <WhyChooseUsSection t={t} whyChooseUs={whyChooseUs} />

      <HowItWorksSection t={t} howItWorks={howItWorks} />

      <MissionPricingSection
        t={t}
        isQuoteModalOpen={isQuoteModalOpen}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
        formData={formData}
        setFormData={setFormData}
      />

      <CTASection isQuoteModalOpen={isQuoteModalOpen} setIsQuoteModalOpen={setIsQuoteModalOpen} />

      <QuoteModal
        isQuoteModalOpen={isQuoteModalOpen}
        setIsQuoteModalOpen={setIsQuoteModalOpen}
        setIsSubmitted={setIsSubmitted}
        isSubmitting={isSubmitting}
        isSubmitted={isSubmitted}
        formData={formData}
        setFormData={setFormData}
        services={services}
        handleServiceChange={handleServiceChange}
        handleSubmit={handleSubmit}
        t={t}
      />

      <Footer t={t} year={year} navLinks={navLinks} scrollToSection={scrollToSection} />
    </div>
  )
}