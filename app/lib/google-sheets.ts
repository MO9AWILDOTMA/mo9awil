// Google Sheets API integration for Mo9awil
export interface QuoteFormData {
  name: string
  email: string
  phone: string
  services: string[]
  message: string
}

export interface SubmissionResponse {
  success: boolean
  message: string
  timestamp?: string
  error?: string
}

export async function submitQuoteForm(data: QuoteFormData): Promise<SubmissionResponse> {
  try {
    const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL

    if (!googleSheetsUrl) {
      throw new Error("Google Sheets URL not configured")
    }

    const response = await fetch(googleSheetsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.error("Error submitting form:", error)
    return {
      success: false,
      message: "Failed to submit form. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

// Helper function to validate form data
export function validateQuoteForm(data: QuoteFormData): string[] {
  const errors: string[] = []

  if (!data.name.trim()) {
    errors.push("Name is required")
  }

  if (!data.email.trim()) {
    errors.push("Email is required")
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Please enter a valid email address")
  }

  if (!data.phone.trim()) {
    errors.push("Phone number is required")
  }

  if (data.services.length === 0) {
    errors.push("Please select at least one service")
  }

  return errors
}
