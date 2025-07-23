// app/api/submitQuote/route.ts
import { NextResponse } from "next/server"
import { submitQuoteForm } from "@/lib/google-sheets"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const result = await submitQuoteForm(body)

    return NextResponse.json(result, {
      status: result.success ? 200 : 500,
    })
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: "Error parsing form", error: error.message },
      { status: 500 }
    )
  }
}
