"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import "./i18n"
import i18n from "i18next"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLang] = useState("en")

  useEffect(() => {
    setLang(i18n.language || "en")
  }, [])

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

// export const metadata = {
//   generator: "v0.dev",
// }
