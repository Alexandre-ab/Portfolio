import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1px solid var(--border-color)',
  borderRadius: 'var(--radius)',
  backgroundColor: 'var(--bg-color)',
  color: 'var(--text-color)',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s'
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: 'var(--bg-secondary)',
      paddingTop: '4rem',
      paddingBottom: '4rem'
    }}>
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          style={{
            maxWidth: '64rem',
            margin: '0 auto'
          }}
        >
          {/* En-tête */}
          <motion.div 
            variants={fadeIn} 
            className="text-center" 
            style={{ marginBottom: '4rem' }}
          >
            <h1 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: 'var(--text-color)',
              marginBottom: '1rem'
            }}>
              Contact
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'var(--text-light)'
            }}>
              N'hésitez pas à me contacter pour toute question ou opportunité
            </p>
          </motion.div>

          <div className="grid grid-cols-1" style={{
            gap: '2rem',
            '@media (min-width: 768px)': {
              gridTemplateColumns: 'repeat(2, 1fr)'
            }
          }}>
            {/* Formulaire de contact */}
            <motion.div variants={fadeIn}>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--text-color)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--text-color)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      color: 'var(--text-color)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  className="btn"
                  style={{
                    width: '100%',
                    padding: '0.75rem 1.5rem'
                  }}
                >
                  Envoyer le message
                </button>
              </form>
            </motion.div>

            {/* Informations de contact */}
            <motion.div variants={fadeIn} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="card">
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-color)',
                  marginBottom: '1rem'
                }}>
                  Informations de contact
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ color: 'var(--text-light)' }}>
                    Email : contact@example.com
                  </p>
                  <p style={{ color: 'var(--text-light)' }}>
                    Localisation : [Votre ville]
                  </p>
                </div>
              </div>

              <div className="card">
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-color)',
                  marginBottom: '1rem'
                }}>
                  Liens professionnels
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a
                    href="https://www.linkedin.com/in/alexandre-bou%C3%A9-834807220/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      transition: 'color 0.2s'
                    }}
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/Alexandre-ab"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      color: 'var(--primary-color)',
                      transition: 'color 0.2s'
                    }}
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div className="card">
                <h2 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  color: 'var(--text-color)',
                  marginBottom: '1rem'
                }}>
                  Télécharger mon CV
                </h2>
                <a
                  href="/cv.pdf"
                  download
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--primary-color)',
                    transition: 'color 0.2s'
                  }}
                >
                  <ArrowDownTrayIcon style={{ height: '1.25rem', width: '1.25rem', marginRight: '0.5rem' }} />
                  Télécharger le CV
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 