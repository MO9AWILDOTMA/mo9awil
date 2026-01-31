import { google } from "googleapis";
import { JWT } from "google-auth-library";
import { QuoteFormData, SubmissionResponse } from "./types";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID!;
const SHEET_NAME = "Leads";
const NEWSLETTER_SHEET_NAME = "Newsletter";

function getServiceAccount() {
  const rawServiceAccountBase64 = process.env.GOOGLE_SERVICE_ACCOUNT;
  if (!rawServiceAccountBase64) {
    throw new Error("Server configuration error: Google Service Account Base64 not found.");
  }

  try {
    const decodedServiceAccount = Buffer.from(rawServiceAccountBase64, "base64").toString("utf8");
    return JSON.parse(decodedServiceAccount);
  } catch (parseError: any) {
    throw new Error(`Server configuration error: Invalid Google Service Account Base64. Error: ${parseError.message}`);
  }
}

function getSheetsClient() {
  const keyFile = getServiceAccount();
  const client = new JWT({
    email: keyFile.client_email,
    key: keyFile.private_key,
    scopes: SCOPES,
  });
  return google.sheets({ version: "v4", auth: client });
}

async function ensureSheetExists(sheets: ReturnType<typeof google.sheets>, sheetName: string) {
  const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
  const exists = spreadsheet.data.sheets?.some((s) => s.properties?.title === sheetName);
  if (exists) return;

  await sheets.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    requestBody: {
      requests: [{ addSheet: { properties: { title: sheetName } } }],
    },
  });
}

export async function submitQuoteForm(data: QuoteFormData): Promise<SubmissionResponse> {
  try {
    const sheets = getSheetsClient();
    await ensureSheetExists(sheets, SHEET_NAME);

    const timestamp = new Date().toISOString();
    const services = Array.isArray(data.services) ? data.services.join(", ") : data.services || "None";
    const language = data.language || "unknown";
    const timezone = data.timezone || "unknown";
    const status = "New";
    const pack = data.selectedPack || "";

    const row = [
      data.name || "",
      data.email || "",
      data.phone || "",
      pack,
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

export async function submitNewsletterSignup(email: string, meta?: { language?: string; timezone?: string }): Promise<SubmissionResponse> {
  try {
    const sheets = getSheetsClient();
    await ensureSheetExists(sheets, NEWSLETTER_SHEET_NAME);

    const timestamp = new Date().toISOString();
    const language = meta?.language || "unknown";
    const timezone = meta?.timezone || "unknown";

    const row = [email, language, timezone, timestamp];

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${NEWSLETTER_SHEET_NAME}!A1`,
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return { success: true, message: "Subscribed successfully!", timestamp };
  } catch (error: any) {
    console.error("SERVER ERROR: Full error during newsletter submission:", error);
    return {
      success: false,
      message: "Error subscribing to newsletter.",
      error: error.message,
    };
  }
}
