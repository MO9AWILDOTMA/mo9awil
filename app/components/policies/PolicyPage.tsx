"use client"

import { useTranslation } from "react-i18next"

import type { PolicyDoc } from "@/lib/policies"

function pickLocale(lang: string) {
  return lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
}

export function PolicyPage({ policy }: { policy: PolicyDoc }) {
  const { i18n } = useTranslation()
  const locale = pickLocale(i18n.language)

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{policy.title[locale]}</h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{policy.lastUpdated[locale]}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 grid gap-10">
          <div className="grid gap-4">
            {policy.intro[locale].map((p, i) => (
              <p key={i} className="text-gray-700 dark:text-gray-200 leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="grid gap-8">
            {policy.sections.map((section, idx) => (
              <article key={idx} className="rounded-2xl border bg-card p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.heading[locale]}</h2>
                <div className="grid gap-3">
                  {section.body[locale].map((line, i) => (
                    <p key={i} className="text-gray-700 dark:text-gray-200 leading-relaxed">
                      {line}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

