// src/lib/services.ts
export type ServicePillar = {
  id: "web_app_development" | "branding_design" | "digital_marketing" | "ai_automation"
  icon: string
}

export const SERVICE_PILLARS: ServicePillar[] = [
  { id: "web_app_development", icon: "globe" },
  { id: "branding_design", icon: "palette" },
  { id: "digital_marketing", icon: "trending-up" },
  { id: "ai_automation", icon: "sparkles" },
]
