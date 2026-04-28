'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface NavProps {
  lang: 'en' | 'es'
}

const links = {
  en: [
    { label: 'About',      href: '#about' },
    { label: 'Services',   href: '#services' },
    { label: 'Principles', href: '#principles' },
    { label: 'Contact',    href: '#contact' },
  ],
  es: [
    { label: 'Nosotros',   href: '#about' },
    { label: 'Servicios',  href: '#services' },
    { label: 'Principios', href: '#principles' },
    { label: 'Contacto',   href: '#contact' },
  ],
}

export default function Nav({ lang }: NavProps) {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`nav-root${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <Link href={lang === 'en' ? '/' : '/es'} aria-label="Asher Capital">
            <Image
              src="/logo.png"
              alt="Asher Capital"
              width={140}
              height={56}
              className="nav-logo"
              priority
            />
          </Link>

          <div className="nav-links">
            {links[lang].map((l) => (
              <a key={l.label} href={l.href} className="nav-link">
                {l.label}
              </a>
            ))}
            <div className="lang-pill">
              <Link href="/" className={`lang-btn${lang === 'en' ? ' active' : ''}`}>EN</Link>
              <Link href="/es" className={`lang-btn${lang === 'es' ? ' active' : ''}`}>ES</Link>
            </div>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links[lang].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <div className="mobile-lang">
          <Link href="/"   className={`lang-btn${lang === 'en' ? ' active' : ''}`}>EN</Link>
          <Link href="/es" className={`lang-btn${lang === 'es' ? ' active' : ''}`}>ES</Link>
        </div>
      </div>
    </>
  )
}
