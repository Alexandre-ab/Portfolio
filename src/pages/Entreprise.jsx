// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { BuildingOfficeIcon, UserGroupIcon, LightBulbIcon, ChartBarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

export default function Entreprise() {
  return (
    <section className="section gradient-bg">
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          className="about-container"
        >
          {/* En-tête avec image */}
          <motion.div variants={fadeIn} className="mb-8">
            <div className="card" style={{ overflow: 'hidden', padding: 0 }}>
              <div style={{ position: 'relative', height: '400px' }}>
                <img 
                  src="/images/Ekium.jpeg" 
                  alt="Ekium" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover' 
                  }}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                  padding: '3rem 2rem 2rem 2rem'
                }}>
                  <h1 className="hero-title" style={{ marginBottom: '0.5rem', color: 'white' }}>
                    Ekium
                  </h1>
                  <p className="hero-subtitle" style={{ marginBottom: '1rem' }}>
                    Leader de l'ingénierie industrielle au service de vos projets
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <span className="badge" style={{ backgroundColor: '#000000', color: 'white' }}>
                      Ingénierie industrielle
                    </span>
                    <span className="badge" style={{ backgroundColor: '#000000', color: 'white' }}>
                      Solutions Digitales
                    </span>
                    <span className="badge" style={{ backgroundColor: '#000000', color: 'white' }}>
                      Innovation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* À propos */}
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="section-title">
              À Propos d'Ekium
            </h2>
            <div className="card">
              <p className="card-text" style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                Ekium accompagne ses clients dans leur stratégie industrielle, la conception de leurs équipements et bâtiments, 
                la gestion de la construction, le pilotage de la production et la maintenance des installations.
              </p>
              <p className="card-text">
                L'un des enjeux du développement de notre société sur la scène internationale demeure sur son adaptation aux spécificités locales. 
                La société d'ingénierie et d'automation Ekium s'engage à garantir la même qualité de prestations, méthodes de gestion des projets 
                et la même qualité technique de conception.
              </p>
            </div>
          </motion.div>

          {/* Vision & Valeurs */}
          <motion.div variants={fadeIn} className="grid grid-2 gap-4 mb-8">
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <LightBulbIcon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                </div>
                <h3 className="card-title" style={{ marginBottom: 0 }}>
                  Vision
                </h3>
              </div>
              <p className="card-text">
                Ekium intervient dans la chaîne de valeur du cycle de vie de l'industrie. Notre expérience nous permet de proposer 
                des solutions innovantes dans des environnements industriels complexes et évolutifs.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--secondary)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <UsersIcon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
                </div>
                <h3 className="card-title" style={{ marginBottom: 0 }}>
                  Valeurs
                </h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>✓</span>
                  <strong>Excellence :</strong> Qualité irréprochable dans chaque projet
                </li>
                <li className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>✓</span>
                  <strong>Innovation :</strong> Technologies de pointe et solutions créatives
                </li>
                <li className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>✓</span>
                  <strong>Collaboration :</strong> Partenariat étroit avec nos clients
                </li>
                <li className="card-text" style={{ paddingLeft: '1.5rem', position: 'relative', marginBottom: 0 }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)' }}>✓</span>
                  <strong>Intégrité :</strong> Transparence et respect des engagements
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Missions */}
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="section-title">
              Missions de l'Entreprise
            </h2>
            <div className="grid grid-4 gap-4">
              <div className="card">
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(124, 58, 237, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <LightBulbIcon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--primary)' }} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  Conseil
                </h3>
                <p className="card-text" style={{ fontSize: '0.875rem' }}>
                  Accompagnement technique et méthodologique pour la conception et la réalisation des projets
                </p>
              </div>

              <div className="card">
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(20, 184, 166, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <BuildingOfficeIcon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--secondary)' }} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  Conception
                </h3>
                <p className="card-text" style={{ fontSize: '0.875rem' }}>
                  Réalisation de projets industriels dans les domaines de l'automatisation et des systèmes d'information
                </p>
              </div>

              <div className="card">
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(244, 63, 94, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <UserGroupIcon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--accent)' }} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  Accomplissement
                </h3>
                <p className="card-text" style={{ fontSize: '0.875rem' }}>
                  Accompagnement et assistance pour la mise en place des systèmes d'information et de l'automatisation
                </p>
              </div>

              <div className="card">
                <div style={{ 
                  width: '3rem', 
                  height: '3rem', 
                  borderRadius: '50%', 
                  backgroundColor: 'rgba(59, 130, 246, 0.1)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <ChartBarIcon style={{ width: '1.5rem', height: '1.5rem', color: 'var(--info)' }} />
                </div>
                <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>
                  Maintenance
                </h3>
                <p className="card-text" style={{ fontSize: '0.875rem' }}>
                  Maintenance et assistance pour la mise en place des systèmes d'information et de l'automatisation
                </p>
              </div>
            </div>
          </motion.div>

          {/* Domaines d'expertise */}
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="section-title">
              Domaines d'Expertise
            </h2>
            <div className="grid grid-1 gap-4">
              <div className="card">
                <h3 className="card-title" style={{ marginBottom: '1rem' }}>
                  Conception
                </h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Réalisation de projets industriels dans les domaines de l'automatisation, des systèmes d'information et des équipements spécifiques.
                </p>
                <div className="skill-tags">
                  <span className="badge">CAO/DAO</span>
                  <span className="badge">Modélisation 3D</span>
                  <span className="badge">Simulation</span>
                  <span className="badge">Ingénierie</span>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title" style={{ marginBottom: '1rem' }}>
                  Automatisation
                </h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Accompagnement et assistance pour la mise en place des systèmes d'information et de l'automatisation industrielle.
                </p>
                <div className="skill-tags">
                  <span className="badge">Automates</span>
                  <span className="badge">SCADA</span>
                  <span className="badge">IHM</span>
                  <span className="badge">Supervision</span>
                </div>
              </div>

              <div className="card">
                <h3 className="card-title" style={{ marginBottom: '1rem' }}>
                  Maintenance & Support
                </h3>
                <p className="card-text" style={{ marginBottom: '1rem' }}>
                  Maintenance préventive et corrective, assistance technique et formation des équipes sur site.
                </p>
                <div className="skill-tags">
                  <span className="badge">Support 24/7</span>
                  <span className="badge">Formation</span>
                  <span className="badge">Diagnostic</span>
                  <span className="badge">Optimisation</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mon rôle */}
          <motion.div variants={fadeIn} className="card" style={{ backgroundColor: 'rgba(124, 58, 237, 0.1)', borderLeft: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
              <div style={{ 
                width: '3rem', 
                height: '3rem', 
                borderRadius: '50%', 
                backgroundColor: 'var(--primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <MapPinIcon style={{ width: '1.5rem', height: '1.5rem', color: 'white' }} />
              </div>
              <div>
                <h3 className="card-title" style={{ marginBottom: '0.75rem' }}>
                  Mon Rôle en Alternance
                </h3>
                <p className="card-text" style={{ marginBottom: '0.75rem' }}>
                  En tant qu'alternant chez Ekium, ma mission principale est de gérer le parc de logiciels métiers et d'assurer l'assistance aux utilisateurs.
                </p>
                <div className="skill-tags">
                  <span className="badge">Gestion de parc logiciel</span>
                  <span className="badge">Support utilisateur</span>
                  <span className="badge">Déploiement d'applications</span>
                  <span className="badge">Documentation technique</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
