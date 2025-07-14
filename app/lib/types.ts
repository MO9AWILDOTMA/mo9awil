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

export type FormData = {
  name: string
  email: string
  phone: string
  services: string[]
  selectedPack: string
  message: string
}