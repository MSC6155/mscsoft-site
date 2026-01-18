# MSCsoft Premium Corporate Website (TR/EN)

Modern, minimal, premium corporate website starter for **mscsoft.com.tr**.

## Features
- Next.js (App Router) + TypeScript
- Tailwind CSS
- TR/EN routing via `/tr` and `/en`
- **Calendly popup** for "Toplantı Planla / Schedule a Meeting"
- **Quote form -> WhatsApp redirect** (pre-filled message)
- Click-to-call + email links

## Quick start
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Calendly
Update Calendly URL in:
- `src/config/site.ts` (`calendlyUrl`)

Set Calendly location to **Microsoft Teams** so each meeting generates a Teams link.

## Deploy (Vercel)
- Push to GitHub
- Import in Vercel
- Add domain `mscsoft.com.tr`

## Assets
- Logo: `public/logo.png`

