import type { Metadata, Viewport } from 'next'
import { Suspense } from 'react'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n/context'
import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Retize | Monetizamos a paixao pelo esporte',
  description:
    'Estruturamos e ativamos dados de fas para transformar audiencia em receita sustentavel para clubes e marcas.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/images/retize-isotipo-source.jpg',
  },
}

export const viewport: Viewport = {
  themeColor: '#4700d1',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <Suspense>
          <I18nProvider>
            {children}
          </I18nProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
