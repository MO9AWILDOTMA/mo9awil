"use client"

import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/site/ThemeToggle"
import { useQuoteDialog } from "@/components/quote/QuoteDialogProvider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type NavItem = { href: string; label: string; external?: boolean }

function NavLink({ href, label, external }: NavItem) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
      </a>
    )
  }

  return (
    <Link href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
      {label}
    </Link>
  )
}

export function SiteHeader() {
  const { t } = useTranslation()
  const { openQuote } = useQuoteDialog()
  const [mobileOpen, setMobileOpen] = useState(false)

  const primaryNav: NavItem[] = [
    { href: "/", label: t("nav.home") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "/blog", label: t("nav.blog") },
    { href: "/about", label: t("nav.about") },
    { href: "/pricing", label: t("nav.pricing") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const serviceNav: NavItem[] = [
    { href: "/services/web-app-development", label: t("services.items.web_app_development.title") },
    { href: "/services/branding-design", label: t("services.items.branding_design.title") },
    { href: "/services/digital-marketing", label: t("services.items.digital_marketing.title") },
    { href: "https://agents.mo9awil.ma", label: t("nav.ai_automation"), external: true },
  ]

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
            <span className="text-white font-bold text-lg">M</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Mo9awil
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                {t("nav.services")} <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {serviceNav.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  {item.external ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href}>{item.label}</Link>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {primaryNav.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button onClick={openQuote} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
            {t("nav.get_quote")}
          </Button>
        </div>

        <button className="md:hidden p-2" onClick={() => setMobileOpen((v) => !v)} aria-label="Toggle menu">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="container mx-auto px-4 py-4 grid gap-4">
            <div className="grid gap-2">
              <div className="text-xs font-semibold text-muted-foreground">{t("nav.services")}</div>
              {serviceNav.map((item) => (
                <div key={item.href} onClick={() => setMobileOpen(false)}>
                  <NavLink {...item} />
                </div>
              ))}
            </div>

            <div className="grid gap-2">
              {primaryNav.map((item) => (
                <div key={item.href} onClick={() => setMobileOpen(false)}>
                  <NavLink {...item} />
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t">
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
              <Button size="sm" onClick={() => { openQuote(); setMobileOpen(false) }}>
                {t("nav.get_quote")}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
