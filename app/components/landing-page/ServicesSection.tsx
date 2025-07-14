// components/landing-page/ServicesSection.tsx
"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Star } from "lucide-react"
import { Service } from "@/lib/types"

interface ServicesSectionProps {
  t: (key: string) => string
  services: Service[]
}

export function ServicesSection({ t, services }: ServicesSectionProps) {
  return (
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
  )
}