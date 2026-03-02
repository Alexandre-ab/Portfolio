import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/projects',  label: 'Projets',    num: '01', desc: 'Réalisations & compétences' },
  { to: '/about',     label: 'À propos',   num: '02', desc: 'Parcours & formation' },
  { to: '/contact',   label: 'Contact',    num: '03', desc: 'Discutons ensemble' },
  { to: '/entreprise',label: 'Entreprise', num: '04', desc: 'Ekium & alternance' },
  { to: '/veille',    label: 'Veille',     num: '05', desc: 'Tendances technologiques' },
  { to: '/synthèse',  label: 'Synthèse',   num: '06', desc: 'Tableau E5 — Session 2026' },
]

export default function Home() {
  return (
    <section className="hero-section">
      <div className="container">

        {/* ── Titre pleine largeur ────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(2rem, 7vw, 6.5rem)',
            fontWeight: 800,
            lineHeight: 0.92,
            letterSpacing: '-0.035em',
            color: 'var(--foreground)',
            marginBottom: '2.5rem',
            background: 'none',
            WebkitTextFillColor: 'var(--foreground)',
          }}>
            ALEXANDRE<br />BOUÉ
          </h1>
        </motion.div>

        {/* ── Infos + photo (sous le titre) ───────────────── */}
        <div className="home-hero-grid">

          {/* Colonne infos */}
          <motion.div
            style={{ minWidth: 0 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Trait + label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ width: '2.5rem', height: '2px', backgroundColor: 'var(--primary)', flexShrink: 0 }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--neutral-400)',
              }}>
                Développeur · BTS SIO SLAM · Session 2026
              </span>
            </div>

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--neutral-400)',
              marginBottom: '2.5rem',
            }}>
              Alternant @ Ekium · Lyon, France
            </p>

            {/* CTA CV */}
            <motion.a
              href="/images/BOUE Alexandre - CV Dev.pdf"
              download
              whileHover={{ x: 8 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                color: 'var(--foreground)',
                textDecoration: 'none',
                paddingBottom: '0.25rem',
                borderBottom: '2px solid var(--primary)',
              }}
            >
              ↓ Télécharger mon CV
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="profile-image-container"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="profile-image">
              <img
                src="/images/1730314601565.jpg"
                alt="Alexandre Boué"
                className="img-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* ── Séparateur animé ────────────────────────────── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '1px',
            backgroundColor: 'var(--foreground)',
            transformOrigin: 'left',
            opacity: 0.12,
          }}
        />

        {/* ── Liens numérotés ─────────────────────────────── */}
        <motion.div
          className="home-links-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.55 }}
        >
          {quickLinks.map((link, i) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.06, duration: 0.45, ease: 'easeOut' }}
              whileHover={{ x: 7 }}
            >
              <Link to={link.to} className="quick-link-card">
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--neutral-400)',
                  letterSpacing: '0.06em',
                  display: 'block',
                  marginBottom: '0.35rem',
                }}>
                  {link.num}
                </span>
                <span className="quick-link-title">{link.label} →</span>
                <span className="quick-link-text">{link.desc}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
