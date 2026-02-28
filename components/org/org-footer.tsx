"use client"

import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} x2={17.51} y1={6.5} y2={6.5} />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  )
}

function LinktreeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7.953 15.066l-.038-2.02 4.075-.02-.02-4.033h2.06l-.02 4.033 4.075.02-.038 2.02-4.037-.074-.02 4.99h-2.06l-.02-4.99-3.957.074zM7.953 8.652l-.038-2.02 4.075-.02-.02-2.592h2.06l-.02 2.592 4.075.02-.038 2.02-4.037-.074v.048l.037.026-4.094-.048v-.048l.037-.026 3.957.074z" />
    </svg>
  )
}

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/retize_oficial", Icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com/company/retize", Icon: LinkedInIcon },
  { label: "Linktree", href: "https://linktr.ee/retize", Icon: LinktreeIcon },
]

export function OrgFooter() {
  const { t } = useI18n()

  const solutionLinks = [
    { label: t("org.footer.clubs"), href: "/organizacoes-esportivas" },
    { label: t("org.footer.brands"), href: "/marcas-anunciantes" },
  ]

  return (
    <footer className="bg-[#1a1a1a] py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-2">
            <Image
              src="/brand/retize-logo.png"
              alt="Retize"
              width={90}
              height={20}
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p className="text-sm font-medium uppercase tracking-wider text-[#00CCFF]">
              Sports Media Network
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold text-[#ffffff]">{t("org.footer.solutions")}</h4>
            <nav className="mt-4 flex flex-col gap-3" aria-label={t("org.footer.solutions")}>
              {solutionLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#ffffff]/50 transition-colors hover:text-[#00CCFF]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#ffffff]">{t("org.footer.contact")}</h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="mailto:contato@retize.com.br"
                className="text-sm text-[#ffffff]/50 transition-colors hover:text-[#00CCFF]"
              >
                contato@retize.com.br
              </a>
              <a
                href="https://wa.me/5511930601050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#ffffff]/50 transition-colors hover:text-[#00CCFF]"
              >
                WhatsApp
              </a>
              <address className="mt-1 text-sm not-italic leading-snug text-[#ffffff]/50">
                {"Av. Francisco Matarazzo, 1705 - Agua Branca, Sao Paulo - SP, 05001-200"}
              </address>
            </div>

            <div className="mt-5 flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#ffffff]/20 text-[#ffffff]/50 transition-colors hover:border-[#00CCFF]/50 hover:text-[#00CCFF]"
                >
                  <link.Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#ffffff]/10 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-xs text-[#ffffff]/40">
              {t("org.footer.copyright")}
            </p>
            <nav className="flex gap-6 text-xs" aria-label="Links legais">
              <Link href="/legal" className="text-[#ffffff]/40 transition-colors hover:text-[#ffffff]/70">
                {t("org.footer.privacy")}
              </Link>
              <a
                href="https://www.privacidade.com.br/portal-de-privacidade?token=e9ef3022620a045a9d0220b162bdc3b5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffffff]/40 transition-colors hover:text-[#ffffff]/70"
              >
                {t("org.footer.privacyPortal")}
              </a>
              <Link href="/legal" className="text-[#ffffff]/40 transition-colors hover:text-[#ffffff]/70">
                {t("org.footer.terms")}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
