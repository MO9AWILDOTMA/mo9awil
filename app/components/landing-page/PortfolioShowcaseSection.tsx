"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"
import { useTranslation } from "react-i18next"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio"

export function PortfolioShowcaseSection() {
  const { t, i18n } = useTranslation()
  const locale = i18n.language.startsWith("ar") ? "ar" : i18n.language.startsWith("en") ? "en" : "fr"
  const projects = PORTFOLIO_PROJECTS.slice(0, 4)

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
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
              {t("portfolio.title")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              {t("portfolio.title")}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">{t("portfolio.subtitle")}</p>
          </div>

          <Button asChild variant="outline" className="justify-between md:w-auto">
            <Link href="/portfolio">
              {t("portfolio.view_all")} <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border bg-card shadow-sm overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[16/10] bg-muted">
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.shortDescription[locale]}</p>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button asChild variant="outline" className="justify-between">
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {t("portfolio.view_live")} <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild className="justify-between bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <Link href={`/portfolio/${project.slug}`}>
                      {t("portfolio.view_case")} <span aria-hidden>→</span>
                    </Link>
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

