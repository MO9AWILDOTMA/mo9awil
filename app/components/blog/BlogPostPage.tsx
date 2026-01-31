"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

import type { BlogPost } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"

function pickLocale(lang: string) {
  return lang.startsWith("ar") ? "ar" : lang.startsWith("en") ? "en" : "fr"
}

export function BlogPostPage({ post }: { post: BlogPost }) {
  const { t, i18n } = useTranslation()
  const locale = pickLocale(i18n.language)

  return (
    <div className="min-h-screen bg-background">
      <section className="py-14 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="text-sm text-blue-700 dark:text-blue-200 hover:underline">
            ← {t("nav.blog")}
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">{post.title[locale]}</h1>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{new Date(post.dateISO).toLocaleDateString()}</p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 max-w-3xl grid gap-4">
          {post.content[locale].map((p, i) => (
            <p key={i} className="text-gray-700 dark:text-gray-200 leading-relaxed">
              {p}
            </p>
          ))}
          <div className="pt-6">
            <Link href="/contact" className="text-blue-700 dark:text-blue-200 hover:underline">
              {t("cta.button")} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

