import { NextResponse } from "next/server"
import { Resend } from "resend"

export const dynamic = "force-dynamic"

// ============================================================
// Lead capture endpoint — Copa do Mundo 2026 / Pacotes de Mídia
// Validates, sends email notification via Resend, and returns success.
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

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)

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

    const sourceLabel = body.source ?? "copa-2026-modal"

    // Log lead
    console.log("[Lead]", {
      name: body.name,
      company: body.company,
      email: body.email,
      phone: body.phone,
      source: sourceLabel,
      timestamp: new Date().toISOString(),
    })

    const { error } = await resend.emails.send({
      from: "Retize <do-no-reply@retize.com.br>",
      to: "contato@retize.com.br",
      subject: `Novo lead – ${sourceLabel} – ${body.company}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f7f8;border-radius:12px;">
          <h2 style="margin:0 0 16px;color:#0f0f0f;font-size:20px;">Novo lead – download de material</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-radius:8px 8px 0 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;width:140px;">Nome</td>
              <td style="padding:8px 12px;background:#ffffff;border-radius:8px 8px 0 0;border-bottom:1px solid #e5e5e5;color:#333;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;">Empresa</td>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;color:#333;">${body.company}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;">E-mail</td>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;color:#333;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;">Telefone</td>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;color:#333;">${body.phone}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-radius:0 0 8px 8px;font-weight:600;color:#0f0f0f;">Origem</td>
              <td style="padding:8px 12px;background:#ffffff;border-radius:0 0 8px 8px;color:#333;">${sourceLabel}</td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#9b9b9b;">
            Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("[Lead] Resend error:", error)
      return NextResponse.json({ ok: false, errors: [error.message] }, { status: 500 })
    }

    console.log("[Lead] Email sent:", { name: body.name, company: body.company, email: body.email, source: sourceLabel })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[Lead] Unexpected error:", err)
    return NextResponse.json(
      { ok: false, errors: ["Erro interno. Tente novamente."] },
      { status: 500 }
    )
  }
}
