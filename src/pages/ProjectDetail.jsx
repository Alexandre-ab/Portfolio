import { useParams, useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { projectsData } from '../data/projectsData'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Référentiel des compétences SLAM
const competencesReferentiel = {
  'A1.1.1': 'Analyse du cahier des charges d\'un service à produire',
  'A1.1.2': 'Étude de l\'impact de l\'intégration d\'un service sur le système informatique',
  'A1.1.3': 'Étude des exigences liées à la qualité attendue d\'un service',
  'A1.2.1': 'Élaboration et présentation d\'un dossier de choix de solution technique',
  'A1.2.2': 'Rédaction des spécifications techniques de la solution retenue',
  'A1.2.3': 'Évaluation des indicateurs de suivi d\'un projet et justification des écarts',
  'A1.2.4': 'Définition des niveaux d\'habilitation associés à un service',
  'A1.2.5': 'Rédaction de la documentation d\'une solution',
  'A1.3.1': 'Test d\'intégration et d\'acceptation d\'un service',
  'A1.3.2': 'Définition et exploitation des indicateurs de qualité d\'un service',
  'A1.3.3': 'Gestion des versions d\'une solution',
  'A1.3.4': 'Mise en place d\'une organisation de travail collaboratif',
  'A1.4.1': 'Participation à un projet de conception d\'une solution applicative',
  'A1.4.2': 'Évaluation d\'un élément de solution applicative',
  'A1.4.3': 'Adaptation d\'une solution applicative aux évolutions de ses composants'
}

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projectsData.find(p => p.id === id)

  if (!project) {
    return (
      <section className="section gradient-bg">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title">Projet non trouvé</h1>
            <button onClick={() => navigate('/projects')} className="btn">
              Retour aux projets
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section gradient-bg">
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          className="about-container"
        >
          {/* Bouton retour */}
          <motion.button
            variants={fadeIn}
            onClick={() => navigate('/projects')}
            className="btn btn-outline"
            style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <ArrowLeftIcon style={{ width: '1.25rem', height: '1.25rem' }} />
            Retour aux projets
          </motion.button>

          {/* En-tête du projet */}
          <motion.div variants={fadeIn} className="mb-8">
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-subtitle">
              {project.period} • {project.context}
            </p>
          </motion.div>

          {/* Image principale */}
          <motion.div variants={fadeIn} className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="img-cover rounded-lg"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Description détaillée */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">Description du projet</h2>
            <p className="card-text">{project.detailedDescription}</p>
          </motion.div>

          {/* NOUVEAU: Choix technologiques justifiés */}
          {project.technicalChoices && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">💡 Choix technologiques justifiés</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--neutral-400)' }}>
                Chaque technologie a été sélectionnée pour des raisons précises, en fonction des besoins du projet et des contraintes techniques.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {project.technicalChoices.map((choice, index) => (
                  <div key={index} style={{ 
                    padding: '1.25rem', 
                    backgroundColor: 'rgba(124, 58, 237, 0.08)', 
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--primary)'
                  }}>
                    <h4 style={{ 
                      color: 'var(--primary-light)', 
                      marginBottom: '0.75rem',
                      fontSize: '1.125rem',
                      fontWeight: 600
                    }}>
                      🔧 {choice.technology}
                    </h4>
                    <p className="card-text" style={{ marginBottom: 0, lineHeight: '1.7' }}>
                      {choice.reason}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* NOUVEAU: Architecture technique */}
          {project.architecture && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">🏗️ Architecture technique</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
                {project.architecture.description}
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.architecture.layers.map((layer, index) => (
                  <div key={index} style={{ 
                    padding: '1.25rem', 
                    backgroundColor: 'rgba(20, 184, 166, 0.08)', 
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '4px solid var(--secondary)'
                  }}>
                    <h4 style={{ 
                      color: 'var(--secondary)', 
                      marginBottom: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: 600
                    }}>
                      📦 {layer.name}
                    </h4>
                    <p className="card-text" style={{ marginBottom: 0, fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {layer.role}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Fonctionnalités */}
          {project.features && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">✨ Fonctionnalités principales</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.features.map((feature, index) => (
                  <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-light)', fontSize: '1.2rem' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* NOUVEAU: Détails techniques approfondis */}
          {project.technicalDetails && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">⚙️ Détails techniques approfondis</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', fontStyle: 'italic', color: 'var(--neutral-400)' }}>
                Implémentation technique détaillée montrant la profondeur de la solution développée.
              </p>
              <div className="grid grid-2 gap-4">
                {Object.entries(project.technicalDetails).map(([key, value], index) => (
                  <div key={index} style={{ 
                    padding: '1.25rem', 
                    backgroundColor: 'rgba(244, 63, 94, 0.08)', 
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '3px solid var(--accent)'
                  }}>
                    <h4 style={{ 
                      color: 'var(--accent)', 
                      marginBottom: '0.75rem',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <p className="card-text" style={{ marginBottom: 0, fontSize: '0.9rem', lineHeight: '1.6' }}>
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Défis techniques */}
          {project.challenges && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">⚡ Défis techniques relevés</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontSize: '1.2rem' }}>⚡</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">🛠️ Technologies utilisées</h2>
            <div className="skill-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge" style={{ fontSize: '0.95rem', padding: '0.5rem 1rem' }}>
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* NOUVEAU: Évolutions futures */}
          {project.futureEnhancements && (
            <motion.div variants={fadeIn} className="card mb-8" style={{ 
              backgroundColor: 'rgba(124, 58, 237, 0.1)', 
              borderLeft: '4px solid var(--primary)' 
            }}>
              <h2 className="section-title">🚀 Évolutions futures envisagées</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', fontStyle: 'italic' }}>
                Ce projet possède un potentiel d'évolution important. Voici les fonctionnalités et améliorations que je prévois d'implémenter :
              </p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.futureEnhancements.map((enhancement, index) => (
                  <li key={index} className="card-text" style={{ 
                    marginBottom: '1rem', 
                    paddingLeft: '1.5rem', 
                    position: 'relative',
                    lineHeight: '1.6' 
                  }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-light)', fontWeight: 'bold' }}>→</span>
                    {enhancement}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Compétences SLAM */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">📚 Compétences SLAM mobilisées</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {project.skills.map((skill, index) => (
                <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)', fontWeight: 'bold' }}>{skill}</span>
                  <span style={{ marginLeft: '3rem', display: 'block' }}>
                    {competencesReferentiel[skill] || skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Liens */}
          <motion.div variants={fadeIn} className="flex gap-4" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              📂 Voir le code source
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                🌐 Voir le projet en ligne
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
