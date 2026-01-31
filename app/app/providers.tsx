"use client"

import type React from "react"
import { useEffect } from "react"
import { I18nextProvider } from "react-i18next"

import { ThemeProvider } from "@/components/theme-provider"
import i18n, { LANG_STORAGE_KEY } from "@/lib/i18n"
import { QuoteDialogProvider } from "@/components/quote/QuoteDialogProvider"
import { ChatWidget } from "@/components/chat/ChatWidget"

function setDocumentLanguage(lang: string) {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr"
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = window.localStorage.getItem(LANG_STORAGE_KEY)
    if (saved && saved !== i18n.language) {
      void i18n.changeLanguage(saved)
    }

    setDocumentLanguage(saved || i18n.language)

    const onLanguageChanged = (lng: string) => {
      window.localStorage.setItem(LANG_STORAGE_KEY, lng)
      setDocumentLanguage(lng)
    }

    i18n.on("languageChanged", onLanguageChanged)
    return () => {
      i18n.off("languageChanged", onLanguageChanged)
    }
  }, [])

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <I18nextProvider i18n={i18n}>
        <QuoteDialogProvider>
          {children}
          <ChatWidget />
        </QuoteDialogProvider>
      </I18nextProvider>
    </ThemeProvider>
  )
}
