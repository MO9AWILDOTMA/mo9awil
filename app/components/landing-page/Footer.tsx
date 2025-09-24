// components/landing-page/Footer.tsx
"use client"

import { LanguageSwitcher } from "@/components/language-switcher"
import { NavLink } from "@/lib/types"

interface FooterProps {
  t: (key: string) => string
  year: number
  navLinks: NavLink[]
  scrollToSection: (href: string) => void
}

export function Footer({ t, year, navLinks, scrollToSection }: FooterProps) {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2760%27%20height=%2760%27%20viewBox=%270%200%2060%2060%27%3E%3Cg%20fill=%27%23ffffff%27%20fillOpacity=%270.05%27%3E%3Ccircle%20cx=%2730%27%20cy=%2730%27%20r=%272%27/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <div className="container mx-auto px-4 relative">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Mo9awil
                </span>
              </div>
              <p className="text-blue-100 mb-6 max-w-md leading-relaxed">{t("footer.description")}</p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">@</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.quick_links")}</h3>
              <ul className="space-y-3">
                {navLinks.slice(0, 4).map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-blue-100 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">{t("footer.contact")}</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-300 text-sm">📧</span>
                  </div>
                  <span className="text-blue-100">contact@mo9awil.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-300 text-sm">📞</span>
                  </div>
                  <span className="text-blue-100">+212 530-306254</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-300 text-sm">📍</span>
                  </div>
                  <span className="text-blue-100">Rabat, Morocco</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-100 text-sm">&copy; {year} Mo9awil.ma {t("footer.rights")}</div>
            <div className="flex items-center space-x-6">
                <div className="text-gray-500">
                    <LanguageSwitcher />
                </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  {t("footer.privacy")}
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  {t("footer.terms")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}