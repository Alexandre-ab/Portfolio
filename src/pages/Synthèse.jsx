import { motion } from 'framer-motion'
import { useState } from 'react'

function Synthèse() {
  const [pdfError, setPdfError] = useState(false)
  // Encodage correct du chemin avec les caractères spéciaux
  const pdfPath = '/images/Pr%C3%A9sentation%20de%20l%E2%80%99entreprise.xlsx%20-%20Tableau%20de%20synth%C3%A8se%20%C3%89preuve%20E4.pdf'

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfPath
    link.download = 'Tableau_synthese_E4_Alexandre_Boue.pdf'
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
          <h1 className="section-title" style={{ color: 'white', marginBottom: '1rem' }}>
            Tableau de Synthèse - Épreuve E4
          </h1>
          <p style={{ color: 'var(--neutral-300)', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Synthèse des réalisations professionnelles - BTS SIO SLAM 2025
          </p>
          
          <div className="pdf-container" style={{ 
            marginTop: '2rem',
            backgroundColor: 'white',
            borderRadius: '10px',
            padding: '1.5rem',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
              <button 
                onClick={handleDownload}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  marginRight: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 10px rgba(124, 58, 237, 0.3)',
                  minWidth: '250px',
                  height: '48px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#6d28d9'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 15px rgba(124, 58, 237, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#7c3aed'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 10px rgba(124, 58, 237, 0.3)'
                }}
              >
                📥 Télécharger le PDF
              </button>
              <a 
                href={pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#7c3aed',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  marginRight: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '600',
                  fontSize: '1rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 10px rgba(124, 58, 237, 0.3)',
                  minWidth: '250px',
                  height: '48px'
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#6d28d9'
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 15px rgba(124, 58, 237, 0.4)'
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#7c3aed'
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 10px rgba(124, 58, 237, 0.3)'
                }}
              >
                🔗 Ouvrir dans un nouvel onglet
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
                  title="Tableau de synthèse Épreuve E4"
                  onError={() => setPdfError(true)}
                />
              </object>
            ) : (
              <div style={{
                padding: '3rem',
                textAlign: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '5px',
                border: '2px dashed #dee2e6'
              }}>
                <p style={{ fontSize: '1.2rem', color: '#495057', marginBottom: '1rem' }}>
                  📄 Votre navigateur ne peut pas afficher le PDF directement
                </p>
                <p style={{ color: '#6c757d', marginBottom: '1.5rem' }}>
                  Veuillez utiliser les boutons ci-dessus pour télécharger ou ouvrir le document
                </p>
                <a 
                  href={pdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 2rem',
                    backgroundColor: '#28a745',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '5px',
                    fontWeight: '600'
                  }}
                >
                  Voir le document
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Synthèse