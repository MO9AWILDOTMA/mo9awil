"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import "./i18n"
import i18n from "i18next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"


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
      <Analytics />
       <head>
        {/* Meta Pixel Script */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1754239391876136');
            fbq('track', 'PageView');
          `}
        </Script>


      </head>
        {/* Noscript fallback */}
      <body className={inter.className}>
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1754239391876136&ev=PageView&noscript=1"
            />
          </noscript>
          {children}
      </body>
    </html>
  )
}

// export const metadata = {
//   generator: "v0.dev",
// }
