// components/landing-page/PartnersSection.tsx
"use client"

import { motion } from "framer-motion"
import { Partner } from "@/lib/types"
import Image from "next/image"


interface PartnersSectionProps {
  t: (key: string) => string
  partners: Partner[]
}

export function PartnersSection({ t, partners }: PartnersSectionProps) {
  return (
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
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full h-full gap-8 items-center"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex cursor-pointer items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image width={900} height={1000}
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="max-h-12 h-full w-full object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}