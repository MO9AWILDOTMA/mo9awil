// components/landing-page/WhyChooseUsSection.tsx
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"
import { WhyChooseUsItem } from "@/lib/types"

interface WhyChooseUsSectionProps {
  t: (key: string) => string
  whyChooseUs: WhyChooseUsItem[]
}

export function WhyChooseUsSection({ t, whyChooseUs }: WhyChooseUsSectionProps) {
  return (
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
  )
}