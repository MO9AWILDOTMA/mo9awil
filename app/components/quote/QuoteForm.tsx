"use client"

import type React from "react"
import { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"

import type { QuoteFormData } from "@/lib/types"
import { SERVICE_PILLARS } from "@/lib/services"

type Props = {
  onSuccess?: () => void
}

function estimateTimelineDays(selectedPack: string, servicesCount: number) {
  const base = selectedPack === "entreprise" ? 21 : selectedPack === "professionnel" ? 14 : 7
  return base + Math.max(0, servicesCount - 1) * 3
}

export function QuoteForm({ onSuccess }: Props) {
  const { t, i18n } = useTranslation()

  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    services: [],
    selectedPack: "professionnel",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const timeline = useMemo(() => {
    const days = estimateTimelineDays(formData.selectedPack || "", formData.services.length)
    return { min: Math.max(3, Math.round(days * 0.7)), max: Math.round(days * 1.3) }
  }, [formData.selectedPack, formData.services.length])

  const handleServiceToggle = (id: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: checked ? [...prev.services, id] : prev.services.filter((s) => s !== id),
    }))
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const payload = {
        ...formData,
        language: i18n.language || "unknown",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "unknown",
      }

      const response = await fetch("/api/submitQuote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const result = await response.json()

      if (!response.ok || !result?.success) {
        throw new Error(result?.message || "Submission failed")
      }

      toast.success(t("quote.success.title"), { description: t("quote.success.message") })
      setFormData({
        name: "",
        email: "",
        phone: "",
        services: [],
        selectedPack: "professionnel",
        message: "",
      })
      onSuccess?.()
    } catch (err: any) {
      toast.error(t("quote.error.title"), { description: err?.message || t("quote.error.message") })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate>
      <div className="grid gap-2 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="q-name">{t("quote.form.name")}</Label>
          <Input
            id="q-name"
            value={formData.name}
            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
            autoComplete="name"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="q-email">{t("quote.form.email")}</Label>
          <Input
            id="q-email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="q-phone">{t("quote.form.phone")}</Label>
        <Input
          id="q-phone"
          inputMode="tel"
          value={formData.phone}
          onChange={(e) => setFormData((p) => ({ ...p, phone: e.target.value }))}
          autoComplete="tel"
          required
        />
      </div>

      <div className="grid gap-3">
        <Label>{t("quote.form.package")}</Label>
        <RadioGroup
          value={formData.selectedPack || "professionnel"}
          onValueChange={(value) => setFormData((p) => ({ ...p, selectedPack: value }))}
          className="grid gap-3 sm:grid-cols-3"
        >
          {(["debutant", "professionnel", "entreprise"] as const).map((pack) => (
            <Label
              key={pack}
              className="flex cursor-pointer items-center gap-3 rounded-xl border p-3 hover:bg-accent"
            >
              <RadioGroupItem value={pack} />
              <span className="font-medium">{t(`pricing.${pack}.title`)}</span>
            </Label>
          ))}
        </RadioGroup>
        <p className="text-sm text-muted-foreground">
          {t("quote.estimate")}:{" "}
          <span className="font-medium">
            {timeline.min}–{timeline.max} {t("quote.days")}
          </span>
        </p>
      </div>

      <div className="grid gap-3">
        <Label>{t("quote.form.services")}</Label>
        <div className="grid gap-3 sm:grid-cols-2">
          {SERVICE_PILLARS.map((service) => (
            <Label
              key={service.id}
              className="flex cursor-pointer items-start gap-3 rounded-xl border p-3 hover:bg-accent"
            >
              <Checkbox
                checked={formData.services.includes(service.id)}
                onCheckedChange={(v) => handleServiceToggle(service.id, Boolean(v))}
              />
              <span className="grid gap-1">
                <span className="font-medium">{t(`services.items.${service.id}.title`)}</span>
                <span className="text-sm text-muted-foreground">{t(`services.items.${service.id}.description`)}</span>
              </span>
            </Label>
          ))}
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="q-message">{t("quote.form.message")}</Label>
        <Textarea
          id="q-message"
          value={formData.message}
          onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
          placeholder={t("quote.form.message_placeholder")}
          rows={4}
        />
      </div>

      <div className="grid gap-3 sm:flex sm:items-center sm:justify-between">
        <Button type="submit" disabled={isSubmitting} className="sm:w-auto">
          {isSubmitting ? t("quote.form.submitting") : t("quote.form.submit")}
        </Button>

        {process.env.NEXT_PUBLIC_CALENDLY_URL ? (
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-blue-600 hover:underline"
          >
            {t("quote.book_call")}
          </a>
        ) : null}
      </div>
    </form>
  )
}
