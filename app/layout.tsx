import type { Metadata } from 'next'
import { Cormorant_Garamond, Libre_Baskerville } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const libreBaskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-baskerville',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Asher Capital — Wealth Management',
  description: 'Quality-driven wealth management. Solid fundamentals, innovation, and sustained growth.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'Asher Capital — Wealth Management',
    description: 'Quality-driven wealth management. Solid fundamentals, innovation, and sustained growth.',
    url: 'https://ashercapital.xyz',
    siteName: 'Asher Capital',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${libreBaskerville.variable}`}>
      <body>{children}</body>
    </html>
  )
}
