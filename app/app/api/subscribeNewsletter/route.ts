import { NextResponse } from "next/server"
import { submitNewsletterSignup } from "@/lib/google-sheets"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const email = String(body?.email || "").trim()
    if (!email) {
      return NextResponse.json({ success: false, message: "Email is required." }, { status: 400 })
    }

    const language = String(body?.language || body?.lng || "unknown")
    const timezone = String(body?.timezone || "unknown")

    const result = await submitNewsletterSignup(email, { language, timezone })
    return NextResponse.json(result, { status: result.success ? 200 : 500 })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Error parsing request", error: error.message },
      { status: 500 },
    )
  }
}
