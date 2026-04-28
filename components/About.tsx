'use client'

import { useEffect, useRef } from 'react'

interface AboutProps {
  lang: 'en' | 'es'
}

const content = {
  en: {
    h2a:    'Disciplined capital.',
    h2b:    'Asymmetric returns.',
    p1:     'At Asher Capital, we specialize in patrimonial management grounded in asset quality — identifying investments with solid fundamentals, innovative technology, and structural entry barriers that ensure long-term stability.',
    p2:     'Our mission: personalized financial solutions that maximize patrimony while minimizing risk — across traditional markets and sovereign assets like Bitcoin.',
    quote:  '"The best investments are the ones nobody can easily replicate."',
    byline: 'Asher Even Teplizky · Chief Executive Officer',
  },
  es: {
    h2a:    'Capital disciplinado.',
    h2b:    'Retornos asimétricos.',
    p1:     'En Asher Capital nos especializamos en la gestión patrimonial basada en calidad de activos — identificando inversiones con fundamentos sólidos, tecnología innovadora y barreras de entrada estructurales que aseguran estabilidad a largo plazo.',
    p2:     'Nuestra misión: soluciones financieras personalizadas que maximizan el patrimonio minimizando el riesgo — en mercados tradicionales y activos soberanos como Bitcoin.',
    quote:  '"Las mejores inversiones son las que nadie puede replicar fácilmente."',
    byline: 'Asher Even Teplizky · Director Ejecutivo',
  },
}

export default function About({ lang }: AboutProps) {
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
    <section id="about" className="section">
      <div className="container">
        <p className="section-label">{lang === 'en' ? 'Who We Are' : 'Quiénes Somos'}</p>
        <div ref={ref} className="grid-2 fade-up">
          <div>
            <h2 className="about-h2">
              {c.h2a}<br />{c.h2b}
            </h2>
            <p className="about-p">{c.p1}</p>
            <p className="about-p">{c.p2}</p>
          </div>
          <div className="about-right">
            <blockquote className="about-quote">{c.quote}</blockquote>
            <p className="about-byline">{c.byline}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
