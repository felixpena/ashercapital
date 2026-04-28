import Image from 'next/image'

interface FooterProps {
  lang: 'en' | 'es'
}

const content = {
  en: { copy: '© 2025 Asher Capital LLC · New York',   domain: 'ashercapital.xyz' },
  es: { copy: '© 2025 Asher Capital LLC · Nueva York', domain: 'ashercapital.xyz' },
}

export default function Footer({ lang }: FooterProps) {
  const c = content[lang]
  return (
    <footer className="footer">
      <div className="footer-inner">
        <Image
          src="/logo.png"
          alt="Asher Capital"
          width={100}
          height={40}
          className="footer-logo-img"
        />
        <p className="footer-text">{c.copy}</p>
        <p className="footer-domain">{c.domain}</p>
      </div>
    </footer>
  )
}
