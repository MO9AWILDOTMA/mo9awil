import { MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { getWhatsAppUrl } from "@/lib/whatsapp"

type WhatsAppStickyButtonProps = {
  message?: string
  className?: string
  label?: string
}

export function WhatsAppStickyButton({
  message,
  className,
  label = "Parler sur WhatsApp",
}: WhatsAppStickyButtonProps) {
  const href = getWhatsAppUrl(message)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-3 text-white shadow-lg hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline text-sm font-semibold">{label}</span>
      <span className="sm:hidden text-sm font-semibold">WhatsApp</span>
    </a>
  )
}

