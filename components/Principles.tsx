'use client'

import { useEffect, useRef } from 'react'

interface PrinciplesProps {
  lang: 'en' | 'es'
}

const content = {
  en: {
    label: 'Principles',
    cards: [
      { numeral: 'I',   title: 'Solid Fundamentals', body: 'Assets with robust technological and financial foundations.' },
      { numeral: 'II',  title: 'Innovation',          body: 'Advanced technology securing durable competitive advantage.' },
      { numeral: 'III', title: 'Entry Barriers',      body: 'Structural moats that guarantee long-term stability.' },
      { numeral: 'IV',  title: 'Sustained Growth',    body: 'Compounding returns that protect patrimony over time.' },
    ],
  },
  es: {
    label: 'Principios',
    cards: [
      { numeral: 'I',   title: 'Fundamentos Sólidos',  body: 'Activos con bases tecnológicas y financieras robustas.' },
      { numeral: 'II',  title: 'Innovación',            body: 'Tecnología avanzada que asegura ventajas competitivas duraderas.' },
      { numeral: 'III', title: 'Barreras de Entrada',   body: 'Fosos estructurales que garantizan estabilidad a largo plazo.' },
      { numeral: 'IV',  title: 'Crecimiento Sostenido', body: 'Retornos compuestos que protegen el patrimonio en el tiempo.' },
    ],
  },
}

export default function Principles({ lang }: PrinciplesProps) {
  const c = content[lang]
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="principles" className="section">
      <div className="container">
        <div ref={ref} className="fade-up">
          <p className="section-label">{c.label}</p>
          <div className="cards-grid">
            {c.cards.map((card) => (
              <div key={card.numeral} className="card">
                <p className="principle-numeral">{card.numeral}</p>
                <h3 className="card-title">{card.title}</h3>
                <p className="card-body">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
