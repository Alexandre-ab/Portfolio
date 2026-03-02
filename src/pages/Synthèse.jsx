import { motion } from 'framer-motion'
import { useState } from 'react'

function Synthèse() {
  const [pdfError, setPdfError] = useState(false)
  // Encodage correct du chemin avec les caractères spéciaux
  const pdfPath = '/images/Tableau%20de%20synthese%20Epreuve%20E5%20-%20Alexandre%20Boue.pdf'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = 'Tableau_synthese_E5_Alexandre_Boue.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="gradient-bg section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="about-container"
        >
          <h1 className="section-title" style={{ marginBottom: '1rem' }}>
            Tableau de Synthèse - Épreuve E5
          </h1>
          <p style={{ color: 'var(--neutral-300)', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Synthèse des réalisations professionnelles - BTS SIO SLAM 2026
          </p>

          <div className="pdf-container" style={{
            marginTop: '2rem',
            backgroundColor: 'var(--card)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <button
                onClick={handleDownload}
                className="btn btn-primary"
                style={{ marginRight: '1rem', marginBottom: '0.5rem', minWidth: '220px' }}
              >
                ↓ Télécharger le PDF
              </button>
              <a
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ marginBottom: '0.5rem', minWidth: '220px' }}
              >
                Ouvrir dans un nouvel onglet ↗
              </a>
            </div>

            {!pdfError ? (
              <object
                data={pdfPath}
                type="application/pdf"
                style={{
                  width: '100%',
                  height: '900px',
                  border: 'none',
                  borderRadius: '5px'
                }}
                onError={() => setPdfError(true)}
              >
                <iframe
                  src={`${pdfPath}#view=FitH`}
                  style={{
                    width: '100%',
                    height: '900px',
                    border: 'none',
                    borderRadius: '5px'
                  }}
                  title="Tableau de synthèse Épreuve E5"
                  onError={() => setPdfError(true)}
                />
              </object>
            ) : (
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                backgroundColor: 'var(--background)',
                borderRadius: 'var(--radius-md)',
                border: '1px dashed var(--border)'
              }}>
                <p style={{ fontSize: '1rem', color: 'var(--neutral-500)', marginBottom: '1rem' }}>
                  Votre navigateur ne peut pas afficher le PDF directement
                </p>
                <p style={{ color: 'var(--neutral-400)', marginBottom: '1.5rem', fontSize: '0.875rem' }}>
                  Utilisez les boutons ci-dessus pour télécharger ou ouvrir le document
                </p>
                <a
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Ouvrir le document →
                </a>
              </div>
            )}
          </div>

          {/* Section attestations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ marginTop: '3rem' }}
          >
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              Attestations & Certificats
            </h2>
            <p style={{ color: 'var(--neutral-300)', marginBottom: '1.5rem', fontSize: '1rem' }}>
              Documents officiels exigés par le référentiel de l'épreuve E5 — Session 2026
            </p>
            <div className="grid grid-2 gap-4">
              <div className="card" style={{ borderLeft: '4px solid var(--secondary)' }}>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>
                  Certificat de travail — Ekium
                </h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Alternance en tant que technicien support et gestionnaire de parc logiciel — 2024/2026
                </p>
                <p style={{
                  color: 'var(--warning)',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  À ajouter : déposer le fichier dans <code>public/images/</code> et remplacer ce texte par un bouton de téléchargement
                </p>
              </div>

              <div className="card" style={{ borderLeft: '4px solid var(--primary-light)' }}>
                <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>
                  Attestation de formation — Nexa Digital School
                </h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  BTS SIO option SLAM — Lycée Nexa Digital School — 2024/2026
                </p>
                <p style={{
                  color: 'var(--warning)',
                  fontSize: '0.875rem',
                  fontStyle: 'italic',
                  padding: '0.5rem 0.75rem',
                  backgroundColor: 'rgba(245, 158, 11, 0.08)',
                  borderRadius: 'var(--radius-md)',
                }}>
                  À ajouter : déposer le fichier dans <code>public/images/</code> et remplacer ce texte par un bouton de téléchargement
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Synthèse