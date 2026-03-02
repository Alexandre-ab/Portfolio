import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexandre-bou%C3%A9-834807220/', arrow: '↗' },
  { label: 'GitHub',   href: 'https://github.com/Alexandre-ab', arrow: '↗' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message de ${formData.name} — Portfolio`)
    const body    = encodeURIComponent(formData.message)
    window.location.href = `mailto:Alexandre.boue72@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <section className="gradient-bg section">
      <div className="container">
        <div className="about-container">

          {/* ── Titre ───────────────────────────────────── */}
          <motion.div {...fadeUp} style={{ marginBottom: '3.5rem' }}>
            <h1 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(2rem, 9vw, 7rem)',
              fontWeight: 800,
              lineHeight: 0.92,
              letterSpacing: '-0.035em',
              color: 'var(--foreground)',
              marginBottom: '1.5rem',
            }}>
              CONTACT
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--neutral-400)',
              }}>
                Une question · Un projet · Une opportunité
              </span>
            </div>
          </motion.div>

          {/* ── Grille info + formulaire ─────────────────── */}
          <div className="contact-grid">

            {/* ── Colonne info ─────────────────────────── */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
            >
              {/* Email */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--neutral-400)',
                  marginBottom: '0.5rem',
                }}>
                  Email
                </p>
                <a
                  href="mailto:Alexandre.boue72@gmail.com"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    color: 'var(--foreground)',
                    letterSpacing: '-0.01em',
                    borderBottom: '1px solid var(--border)',
                    paddingBottom: '0.15rem',
                    transition: 'color 0.2s, border-color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.borderColor = 'var(--primary)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--foreground)'; e.currentTarget.style.borderColor = 'var(--border)' }}
                >
                  Alexandre.boue72@gmail.com
                </a>
              </div>

              {/* Localisation */}
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--neutral-400)',
                  marginBottom: '0.5rem',
                }}>
                  Localisation
                </p>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--foreground)',
                  letterSpacing: '-0.01em',
                  marginBottom: 0,
                }}>
                  Lyon, France
                </p>
              </div>

              {/* Séparateur */}
              <div style={{ height: '1px', backgroundColor: 'var(--border)', marginBottom: '2rem' }} />

              {/* Liens */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {links.map(link => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.875rem 0',
                      borderBottom: '1px solid var(--border)',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      letterSpacing: '-0.02em',
                      color: 'var(--foreground)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--foreground)'}
                  >
                    <span>{link.label}</span>
                    <span style={{ fontSize: '1rem', opacity: 0.5 }}>{link.arrow}</span>
                  </motion.a>
                ))}

                {/* CV */}
                <motion.a
                  href="/images/BOUE Alexandre - CV Dev.pdf"
                  download
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.875rem 0',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    letterSpacing: '-0.02em',
                    color: 'var(--foreground)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--foreground)'}
                >
                  <span>Curriculum Vitæ</span>
                  <ArrowDownTrayIcon style={{ width: '1.125rem', height: '1.125rem', opacity: 0.5 }} />
                </motion.a>
              </div>
            </motion.div>

            {/* ── Formulaire ───────────────────────────── */}
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                {/* Nom */}
                <div>
                  <label htmlFor="name" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--neutral-400)',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}>
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Votre nom"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid var(--border)',
                      borderRadius: 0,
                      padding: '0.5rem 0',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--foreground)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--neutral-400)',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid var(--border)',
                      borderRadius: 0,
                      padding: '0.5rem 0',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--foreground)',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.65rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--neutral-400)',
                    display: 'block',
                    marginBottom: '0.75rem',
                  }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Votre message..."
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '2px solid var(--border)',
                      borderRadius: 0,
                      padding: '0.5rem 0',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--foreground)',
                      outline: 'none',
                      resize: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* Bouton */}
                <motion.button
                  type="submit"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  style={{
                    alignSelf: 'flex-start',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    background: 'none',
                    border: 'none',
                    padding: '0',
                    cursor: 'pointer',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    color: 'var(--foreground)',
                    paddingBottom: '0.25rem',
                    borderBottom: '2px solid var(--primary)',
                  }}
                >
                  {sent ? '✓ Message préparé' : 'Envoyer le message →'}
                </motion.button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
