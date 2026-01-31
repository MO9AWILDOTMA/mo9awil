"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { toast } from "sonner"

import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SOCIAL = [
  { label: "Facebook", href: "https://www.facebook.com/mo9awil.ma" },
  { label: "Instagram", href: "https://www.instagram.com/mo9awil.ma" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/mo9awil" },
]

export function SiteFooter() {
  const { t, i18n } = useTranslation()
  const year = new Date().getFullYear()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch("/api/subscribeNewsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          language: i18n.language || "unknown",
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
        }),
      })
      const data = await res.json()
      if (!res.ok || !data?.success) throw new Error(data?.message || "Subscription failed")
      toast.success(t("footer.newsletter_success"))
      setEmail("")
    } catch (err: any) {
      toast.error(t("footer.newsletter_error"), { description: err?.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%3E%3Cg%20fill=%27%23ffffff%27%20fillOpacity=%270.05%27%3E%3Ccircle%20cx=%2730%27%20cy=%2730%27%20r=%272%27/%3E%3C/g%3E%3C/svg%3E')] opacity-20" />

      <div className="container mx-auto px-4 relative">
        <div className="py-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Mo9awil
              </span>
            </div>
            <p className="text-blue-100 max-w-md leading-relaxed">{t("footer.description")}</p>

            <div className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg bg-white/10 px-3 py-2 text-sm hover:bg-white/20 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-5">{t("footer.newsletter_title")}</h3>
            <p className="text-blue-100 text-sm mb-4">{t("footer.newsletter_description")}</p>
            <form onSubmit={onSubmit} className="flex gap-2">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("footer.newsletter_placeholder")}
                className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                required
              />
              <Button type="submit" disabled={loading} className="bg-white text-blue-700 hover:bg-gray-100">
                {t("footer.newsletter_button")}
              </Button>
            </form>
            <p className="mt-2 text-xs text-blue-200">{t("footer.newsletter_hint")}</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-5">{t("footer.quick_links")}</h3>
            <ul className="grid gap-2 text-sm">
              <li>
                <Link href="/portfolio" className="text-blue-100 hover:text-white transition-colors">
                  {t("nav.portfolio")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-100 hover:text-white transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-blue-100 hover:text-white transition-colors">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-blue-100 hover:text-white transition-colors">
                  {t("nav.pricing")}
                </Link>
              </li>
              <li>
                <a href="https://agents.mo9awil.ma" target="_blank" rel="noreferrer" className="text-blue-100 hover:text-white transition-colors">
                  {t("footer.agents_link")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-5">{t("footer.contact")}</h3>
            <div className="grid gap-3 text-sm text-blue-100">
              <div>contact@mo9awil.com</div>
              <div>+212 530-306254</div>
              <div>{t("footer.location")}</div>
            </div>

            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-100">
          <div>
            &copy; {year} Mo9awil.ma {t("footer.rights")}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/policies/privacy" className="hover:text-white transition-colors">
              {t("footer.privacy")}
            </Link>
            <Link href="/policies/terms" className="hover:text-white transition-colors">
              {t("footer.terms")}
            </Link>
            <Link href="/policies/cookies" className="hover:text-white transition-colors">
              {t("footer.cookies")}
            </Link>
            <Link href="/policies/refund" className="hover:text-white transition-colors">
              {t("footer.refund")}
            </Link>
            <Link href="/policies/data-protection" className="hover:text-white transition-colors">
              {t("footer.data_protection")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
