import { google } from "googleapis"
import { JWT } from "google-auth-library"
import path from "path"
import { QuoteFormData, SubmissionResponse } from "./types"
import fs from "fs"

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"]
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID!
const SHEET_NAME = "Leads"

export async function submitQuoteForm(data: QuoteFormData): Promise<SubmissionResponse> {
  try {
    // Load service account credentials manually
    const keyPath = path.join(process.cwd(), "app", "lib", "mo9awil-3bfdbb5b4581.json")
    const keyFile = JSON.parse(fs.readFileSync(keyPath, "utf8"))

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
