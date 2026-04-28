import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Asher Capital — Gestión Patrimonial',
  description: 'Gestión patrimonial basada en calidad. Fundamentos sólidos, innovación y crecimiento sostenido.',
  icons: { icon: '/logo.png' },
  openGraph: {
    title: 'Asher Capital — Gestión Patrimonial',
    description: 'Gestión patrimonial basada en calidad. Fundamentos sólidos, innovación y crecimiento sostenido.',
    url: 'https://ashercapital.xyz/es',
    siteName: 'Asher Capital',
    locale: 'es_US',
    type: 'website',
  },
}

export default function EsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div lang="es">{children}</div>
}
