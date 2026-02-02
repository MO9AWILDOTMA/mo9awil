export const WHATSAPP_PHONE = "212604627690"

export function getWhatsAppUrl(message?: string) {
  const baseUrl = `https://wa.me/${WHATSAPP_PHONE}`

  if (!message) return baseUrl

  return `${baseUrl}?text=${encodeURIComponent(message)}`
}

