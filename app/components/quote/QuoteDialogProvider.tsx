"use client"

import type React from "react"
import { createContext, useContext, useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { QuoteForm } from "@/components/quote/QuoteForm"

type QuoteDialogContextValue = {
  openQuote: () => void
  closeQuote: () => void
}

const QuoteDialogContext = createContext<QuoteDialogContextValue | null>(null)

export function useQuoteDialog() {
  const ctx = useContext(QuoteDialogContext)
  if (!ctx) throw new Error("useQuoteDialog must be used within QuoteDialogProvider")
  return ctx
}

export function QuoteDialogProvider({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const value = useMemo<QuoteDialogContextValue>(
    () => ({
      openQuote: () => setOpen(true),
      closeQuote: () => setOpen(false),
    }),
    [],
  )

  return (
    <QuoteDialogContext.Provider value={value}>
      {children}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{t("quote.title")}</DialogTitle>
            <DialogDescription>{t("quote.subtitle")}</DialogDescription>
          </DialogHeader>
          <QuoteForm onSuccess={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </QuoteDialogContext.Provider>
  )
}
