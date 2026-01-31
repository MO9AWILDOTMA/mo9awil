import type React from "react"
import "./globals.css"
import Script from "next/script"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Providers } from "./providers"
import { SiteHeader } from "@/components/site/SiteHeader"
import { SiteFooter } from "@/components/site/SiteFooter"
import { Toaster } from "@/components/ui/sonner"

export const metadata: Metadata = {
  title: {
    default: "Mo9awil — Agence Digitale au Maroc",
    template: "%s — Mo9awil",
  },
  description:
    "Mo9awil est une agence digitale à Rabat spécialisée en développement web/app, image de marque, marketing digital et automatisation IA (via agents.mo9awil.ma).",
  metadataBase: new URL("https://www.mo9awil.ma"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" dir="ltr" suppressHydrationWarning>
      <head>
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
      <body className="min-h-screen font-sans">
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1754239391876136&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Providers>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Toaster />
        </Providers>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
