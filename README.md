# Mo9awil — Agence Digitale (mo9awil.ma)

Mo9awil (مقاول) is a modern digital agency based in Rabat, Morocco, specializing in:

- Website & App Development
- Branding & Design (Image de Marque et Design)
- Digital Marketing (Marketing Digital)
- AI & Automation solutions (via `agents.mo9awil.ma` — external link only)

## Features

- Responsive, modern UI (Next.js + Tailwind CSS)
- Multilingual support (French / Arabic / English) + RTL support for Arabic
- Project inquiry / quote form connected to Google Sheets
- Newsletter subscription (Google Sheets)
- Optional live chat widget integration (Crisp via `NEXT_PUBLIC_CRISP_WEBSITE_ID`)

## Tech Stack

- Next.js (App Router)
- TypeScript + React
- TailwindCSS
- Framer Motion
- i18next + react-i18next
- Google Sheets API (Service Account)

## Getting Started

```bash
cd app
pnpm install
pnpm dev
```

Note: In this sandbox environment, binding to port `3000` may be blocked. Use `pnpm build` to validate compilation.

## Environment

- `NEXT_PUBLIC_SPREADSHEET_ID` (Google Sheet ID)
- `GOOGLE_SERVICE_ACCOUNT` (Base64-encoded service account JSON)
- Optional: `NEXT_PUBLIC_CRISP_WEBSITE_ID` (Crisp chat)
- Optional: `NEXT_PUBLIC_CALENDLY_URL` (booking link)

## Contact

- Email: `contact@mo9awil.com`
- Phone: `+212 530-306254`
- Location: Rabat, Morocco
