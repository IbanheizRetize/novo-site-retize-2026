import { NextResponse } from "next/server"

// ============================================================
// Lead capture endpoint — Copa do Mundo 2026 package download
// Validates, logs, and returns success.
// Ready for future email-provider integration (Resend / SendGrid).
// ============================================================

interface LeadPayload {
  name: string
  company: string
  email: string
  phone: string
  source?: string
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "")
  return digits.length >= 10
}

// ---- Future: email service integration ----
// import { Resend } from "resend"
// const resend = new Resend(process.env.RESEND_API_KEY)
//
// async function sendLeadNotification(lead: LeadPayload) {
//   await resend.emails.send({
//     from: "leads@retize.com.br",
//     to: "comercial@retize.com.br",
//     subject: `Novo lead Copa 2026: ${lead.name}`,
//     html: `<p>${lead.name} — ${lead.company} — ${lead.email} — ${lead.phone}</p>`,
//   })
// }

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload

    // Server-side validation
    const errors: string[] = []
    if (!body.name?.trim()) errors.push("name is required")
    if (!body.company?.trim()) errors.push("company is required")
    if (!body.email?.trim()) errors.push("email is required")
    else if (!validateEmail(body.email)) errors.push("invalid email")
    if (!body.phone?.trim()) errors.push("phone is required")
    else if (!validatePhone(body.phone)) errors.push("invalid phone (min 10 digits)")

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 })
    }

    // Log lead (replace with DB/CRM integration later)
    console.log("[Lead Copa 2026]", {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      source: body.source ?? "copa-2026-modal",
      timestamp: new Date().toISOString(),
    })

    // Future: await sendLeadNotification(body)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { ok: false, errors: ["Invalid request body"] },
      { status: 400 }
    )
  }
}
