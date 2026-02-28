import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactPayload {
  name: string
  email: string
  company?: string
  message: string
  newsletter?: boolean
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload

    const errors: string[] = []
    if (!body.name?.trim()) errors.push("name is required")
    if (!body.email?.trim()) errors.push("email is required")
    else if (!validateEmail(body.email)) errors.push("invalid email")
    if (!body.message?.trim()) errors.push("message is required")

    if (errors.length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 })
    }

    const companyLabel = body.company?.trim() || "Não informado"

    const { error } = await resend.emails.send({
      from: "Retize <do-no-reply@retize.com.br>",
      to: "contato@retize.com.br",
      subject: `Lead do site - ${companyLabel}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f7f7f8;border-radius:12px;">
          <h2 style="margin:0 0 16px;color:#0f0f0f;font-size:20px;">Novo lead do site</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-radius:8px 8px 0 0;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;width:140px;">Nome</td>
              <td style="padding:8px 12px;background:#ffffff;border-radius:8px 8px 0 0;border-bottom:1px solid #e5e5e5;color:#333;">${body.name}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;">E-mail</td>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;color:#333;">${body.email}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;font-weight:600;color:#0f0f0f;">Empresa</td>
              <td style="padding:8px 12px;background:#ffffff;border-bottom:1px solid #e5e5e5;color:#333;">${companyLabel}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#ffffff;border-radius:0 0 8px 8px;font-weight:600;color:#0f0f0f;vertical-align:top;">Mensagem</td>
              <td style="padding:8px 12px;background:#ffffff;border-radius:0 0 8px 8px;color:#333;white-space:pre-wrap;">${body.message}</td>
            </tr>
          </table>
          <p style="margin:16px 0 0;font-size:12px;color:#9b9b9b;">
            Newsletter: ${body.newsletter ? "Sim" : "Não"} &nbsp;·&nbsp; Enviado em: ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
          </p>
        </div>
      `,
    })

    if (error) {
      console.error("[Contact] Resend error:", error)
      return NextResponse.json({ ok: false, errors: [error.message] }, { status: 500 })
    }

    console.log("[Contact] Email sent:", { name: body.name, company: companyLabel, email: body.email })
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[Contact] Unexpected error:", err)
    return NextResponse.json({ ok: false, errors: ["Erro interno. Tente novamente."] }, { status: 500 })
  }
}
