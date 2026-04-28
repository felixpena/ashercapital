import Image from 'next/image'

interface HeroProps {
  lang: 'en' | 'es'
}

const content = {
  en: {
    eyebrow: 'Wealth Management · New York',
    h1a:     'Sovereign Wealth.',
    h1b:     'Private by Design.',
    sub:     'Quality assets. Structural moats. Built for those who think in decades.',
    cta1:    'Request Advisory',
    cta2:    'Our Approach →',
  },
  es: {
    eyebrow: 'Gestión Patrimonial · Nueva York',
    h1a:     'Patrimonio Soberano.',
    h1b:     'Privado por Diseño.',
    sub:     'Activos de calidad. Barreras estructurales. Construido para quienes piensan en décadas.',
    cta1:    'Solicitar Asesoría',
    cta2:    'Nuestro Enfoque →',
  },
}

export default function Hero({ lang }: HeroProps) {
  const c = content[lang]

  return (
    <section className="hero">
      {/* Background image via Next.js Image — most reliable in Next.js */}
      <div className="hero-bg">
        <Image
          src="/3d-mockup.jpg"
          alt=""
          fill
          priority
          aria-hidden="true"
          style={{ objectFit: 'cover', objectPosition: 'center right' }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Ghost "A" watermark */}
      <svg
        className="hero-ghost"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="160"
          fontFamily="var(--font-display)"
          fontWeight="300"
          fill="#C9A96E"
        >
          A
        </text>
      </svg>

      <div className="hero-content">
        <p className="hero-eyebrow-text hero-eyebrow">{c.eyebrow}</p>

        <h1 className="hero-title hero-h1">
          {c.h1a}
          <span className="hero-title-italic">{c.h1b}</span>
        </h1>

        <p className="hero-subtitle hero-sub">{c.sub}</p>

        <div className="hero-cta-row hero-ctas">
          <a href="#contact" className="btn-primary">{c.cta1}</a>
          <a href="#about"   className="btn-ghost">{c.cta2}</a>
        </div>
      </div>
    </section>
  )
}
