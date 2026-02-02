export const WHATSAPP_PHONE = "212718965268"

export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`

  if (!message) return baseUrl

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}

