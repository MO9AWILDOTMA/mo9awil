import type { Metadata } from "next"

import { ContactPage } from "@/components/site/ContactPage"

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Mo9awil (Rabat) pour un projet web/app, branding, marketing ou automatisation IA.",
}

export default function Contact() {
  return <ContactPage />
}

