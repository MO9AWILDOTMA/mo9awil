// components/landing-page/types.ts
import { LucideIcon } from "lucide-react"

export type Service = {
  icon: LucideIcon
  key: string
  color: string
  bgColor: string
  borderColor: string
}

export type WhyChooseUsItem = {
  icon: LucideIcon
  key: string
  color: string
}

export type HowItWorksStep = {
  step: number
  key: string
  icon: LucideIcon
  color: string
}

export type Partner = {
  name: string
  logo: string
}

export type NavLink = {
  href: string
  label: string
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  services: string[]
  selectedPack?: string
  message: string
  language?: string
  timezone?: string
}


export interface SubmissionResponse {
  success: boolean
  message: string
  timestamp?: string
  error?: string
}
