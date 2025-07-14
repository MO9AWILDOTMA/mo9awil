// components/landing-page/Header.tsx
"use client"

import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { LanguageSwitcher } from "@/components/language-switcher"
import { NavLink } from "@/lib/types"

interface HeaderProps {
  navLinks: NavLink[]
  isQuoteModalOpen: boolean
  setIsQuoteModalOpen: (open: boolean) => void
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (open: boolean) => void
  scrollToSection: (href: string) => void
}

export function Header({
  navLinks,
  isQuoteModalOpen,
  setIsQuoteModalOpen,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Mo9awil
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA & Language */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  Get Quote
                </Button>
              </DialogTrigger>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-blue-600 font-medium text-left"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <LanguageSwitcher />
                <Dialog open={isQuoteModalOpen} onOpenChange={setIsQuoteModalOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600">
                      Get Quote
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}