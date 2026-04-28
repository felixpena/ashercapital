'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'

interface ContactProps {
  lang: 'en' | 'es'
}

const content = {
  en: {
    label:         'Contact',
    h2:            'Begin the conversation.',
    text:          'Use the form to request a personalized advisory session. We respond within 24 hours.',
    locationLabel: 'Location',
    location:      '80 Broad Street, Manhattan · New York, NY',
    fields:        { name: 'Full Name', email: 'Email Address', message: 'Message' },
    button:        'Send Message →',
    success:       "Thank you. We'll be in touch within 24 hours.",
  },
  es: {
    label:         'Contacto',
    h2:            'Iniciemos la conversación.',
    text:          'Usa el formulario para solicitar una sesión de asesoría personalizada. Respondemos en menos de 24 horas.',
    locationLabel: 'Ubicación',
    location:      '80 Broad Street, Manhattan · Nueva York, NY',
    fields:        { name: 'Nombre Completo', email: 'Correo Electrónico', message: 'Mensaje' },
    button:        'Enviar Mensaje →',
    success:       'Gracias. Nos pondremos en contacto en menos de 24 horas.',
  },
}

export default function Contact({ lang }: ContactProps) {
  const c = content[lang]
  const ref       = useRef<HTMLDivElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [loading,   setLoading]   = useState(false)

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

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch('https://formspree.io/f/xpqkgvkl', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) { setSubmitted(true); form.reset() }
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section section-dark">
      <div className="container">
        <div ref={ref} className="fade-up">
          <p className="section-label">{c.label}</p>
          <div className="grid-2">
            <div>
              <h2 className="contact-h2">{c.h2}</h2>
              <p className="contact-text">{c.text}</p>
              <p className="contact-location-label">{c.locationLabel}</p>
              <p className="contact-location">{c.location}</p>
            </div>

            <div>
              {submitted ? (
                <p className="success-msg">{c.success}</p>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-field">
                    <label className="form-label" htmlFor={`name-${lang}`}>{c.fields.name}</label>
                    <input id={`name-${lang}`} name="name" type="text" required className="form-input" autoComplete="name" />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor={`email-${lang}`}>{c.fields.email}</label>
                    <input id={`email-${lang}`} name="email" type="email" required className="form-input" autoComplete="email" />
                  </div>
                  <div className="form-field">
                    <label className="form-label" htmlFor={`message-${lang}`}>{c.fields.message}</label>
                    <textarea id={`message-${lang}`} name="message" required className="form-textarea" />
                  </div>
                  <input type="hidden" name="_language" value={lang} />
                  <button type="submit" disabled={loading} className="submit-btn">
                    {loading ? '...' : c.button}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
