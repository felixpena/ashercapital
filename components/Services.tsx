'use client'

import { useEffect, useRef } from 'react'

interface ServicesProps {
  lang: 'en' | 'es'
}

const content = {
  en: {
    label: 'Services',
    cards: [
      { title: 'Portfolio Management',    body: 'Custom strategies aligned to your financial goals and risk profile.' },
      { title: 'Advisory',                body: 'Expert guidance on emerging assets with high growth potential.' },
      { title: 'Wealth Planning',         body: 'Strategic planning for sustainable multi-generational growth.' },
      { title: 'Entry Barrier Assets',    body: 'Curated investments with competitive moats that protect capital.' },
    ],
  },
  es: {
    label: 'Servicios',
    cards: [
      { title: 'Gestión de Portafolio',           body: 'Estrategias personalizadas alineadas a tus objetivos financieros y perfil de riesgo.' },
      { title: 'Consultoría',                     body: 'Asesoramiento experto en activos emergentes con alto potencial de crecimiento.' },
      { title: 'Planificación Patrimonial',       body: 'Planificación estratégica para un crecimiento sostenible multigeneracional.' },
      { title: 'Activos con Barreras de Entrada', body: 'Inversiones seleccionadas con ventajas competitivas que protegen el capital.' },
    ],
  },
}

export default function Services({ lang }: ServicesProps) {
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
    <section id="services" className="section section-dark">
      <div className="container">
        <div ref={ref} className="fade-up">
          <p className="section-label">{c.label}</p>
          <div className="cards-grid">
            {c.cards.map((card) => (
              <div key={card.title} className="card">
                <div className="card-gold-line" />
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
