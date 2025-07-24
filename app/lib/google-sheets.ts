import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { QuoteFormData, SubmissionResponse } from "./types";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID!;
const SHEET_NAME = "Leads";

export async function submitQuoteForm(data: QuoteFormData): Promise<SubmissionResponse> {
  try {
    const rawServiceAccountBase64 = process.env.GOOGLE_SERVICE_ACCOUNT;
    if (!rawServiceAccountBase64) {
      throw new Error("Server configuration error: Google Service Account Base64 not found.");
    }

    let keyFile;
    try {
        // Decode Base64 string back to JSON string
        const decodedServiceAccount = Buffer.from(rawServiceAccountBase64, 'base64').toString('utf8');
        
        // Parse the decoded JSON string
        keyFile = JSON.parse(decodedServiceAccount);

    } catch (parseError: any) {
        throw new Error(`Server configuration error: Invalid Google Service Account Base64. Error: ${parseError.message}`);
    }

    const client = new JWT({
      email: keyFile.client_email,
      key: keyFile.private_key, 
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: "v4", auth: client });

    const timestamp = new Date().toISOString();
    const services = Array.isArray(data.services) ? data.services.join(", ") : data.services || "None";
    const language = data.language || "unknown";
    const timezone = data.timezone || "unknown";
    const status = "New";

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
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [row],
      },
    });

    return {
      success: true,
      message: "Quote submitted successfully!",
      timestamp,
    };
  } catch (error: any) {
    console.error("SERVER ERROR: Full error during Google Sheets submission:", error);
    return {
      success: false,
      message: "Error submitting quote request.",
      error: error.message,
    };
  }
}