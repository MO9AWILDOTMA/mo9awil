import { MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getWhatsAppUrl } from "@/lib/whatsapp"

type WhatsAppButtonProps = {
  message?: string
  label?: string
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

export function WhatsAppButton({
  message,
  label = "Parler sur WhatsApp",
  className,
  size = "default",
  variant = "default",
}: WhatsAppButtonProps) {
  const href = getWhatsAppUrl(message)

  return (
    <Button asChild size={size} variant={variant} className={cn("gap-2", className)}>
      <a href={href} target="_blank" rel="noreferrer">
        <MessageCircle className="h-4 w-4" />
        <span>{label}</span>
      </a>
    </Button>
  )
}

