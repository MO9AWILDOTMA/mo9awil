"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EXAMPLES } from "@/lib/examples"

export function ExamplesSection() {
  return (
    <section id="exemples" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12"
        >
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 border-blue-200">
              Exemples
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Exemples de projets live
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Des pages rapides, mobile-first, orientées conversion (WhatsApp, SEO, performance).
            </p>
          </div>

          <Button asChild variant="outline" className="justify-between md:w-auto">
            <Link href="/portfolio">
              Voir plus <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXAMPLES.map((example, index) => (
            <motion.article
              key={example.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border bg-card shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              {example.imageSrc ? (
                <div className="relative aspect-[16/10] bg-muted">
                  <Image
                    src={example.imageSrc}
                    alt={example.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ) : null}

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{example.name}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{example.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {example.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs rounded-full bg-blue-50 text-blue-700 px-2.5 py-1 dark:bg-blue-950/40 dark:text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5">
                  <Button asChild className="justify-between w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <a href={example.href} target="_blank" rel="noreferrer">
                      Voir le site <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

