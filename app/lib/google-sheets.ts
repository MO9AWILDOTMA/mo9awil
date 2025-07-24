import { google } from "googleapis"
import { JWT } from "google-auth-library"
import { QuoteFormData, SubmissionResponse } from "./types"

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID!
const keyFile = JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_SERVICE_ACCOUNT!.replace(/\\n/g, '\n'))
const SHEET_NAME = "Leads"

export async function submitQuoteForm(data: QuoteFormData): Promise<SubmissionResponse> {
  try {
    const client = new JWT({
      email: keyFile.client_email,
      key: keyFile.private_key,
      scopes: SCOPES,
    })

    const sheets = google.sheets({ version: "v4", auth: client })

    const timestamp = new Date().toISOString()
    const services = Array.isArray(data.services) ? data.services.join(", ") : data.services || "None"
    const language = data.language || "unknown"
    const timezone = data.timezone || "unknown"
    const status = "New"

    const row = [
      data.name || "",
      data.email || "",
      data.phone || "",
      services,
      data.message || "",
      status,
      language,
      timezone,
      timestamp,
    ]

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row],
      },
    })

    return {
      success: true,
      message: "Quote submitted successfully!",
      timestamp,
    }
  } catch (error: any) {
    console.error("Error submitting to Google Sheets:", error)
    return {
      success: false,
      message: "Error submitting quote request.",
      error: error.message,
    }
  }
}
