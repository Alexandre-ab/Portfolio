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
              <h2 className="section-title">Choix technologiques</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', color: 'var(--neutral-400)' }}>
                Chaque technologie a été sélectionnée pour des raisons précises, en fonction des besoins du projet et des contraintes techniques.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {project.technicalChoices.map((choice, index) => (
                  <div key={index} style={{
                    padding: '1.25rem',
                    backgroundColor: 'rgba(26, 63, 191, 0.05)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '3px solid var(--primary)'
                  }}>
                    <h4 style={{
                      color: 'var(--primary)',
                      marginBottom: '0.75rem',
                      fontSize: '1rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.03em',
                    }}>
                      {choice.technology}
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
              <h2 className="section-title">Architecture technique</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem' }}>
                {project.architecture.description}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.architecture.layers.map((layer, index) => (
                  <div key={index} style={{
                    padding: '1.25rem',
                    backgroundColor: 'rgba(26, 122, 74, 0.05)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '3px solid var(--secondary)'
                  }}>
                    <h4 style={{
                      color: 'var(--secondary)',
                      marginBottom: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.03em',
                    }}>
                      {layer.name}
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
              <h2 className="section-title">Fonctionnalités principales</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.features.map((feature, index) => (
                  <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 700 }}>→</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* NOUVEAU: Détails techniques approfondis */}
          {project.technicalDetails && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">Détails techniques</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', color: 'var(--neutral-400)' }}>
                Implémentation technique détaillée montrant la profondeur de la solution développée.
              </p>
              <div className="grid grid-2 gap-4">
                {Object.entries(project.technicalDetails).map(([key, value], index) => (
                  <div key={index} style={{
                    padding: '1.25rem',
                    backgroundColor: 'rgba(200, 54, 10, 0.05)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '3px solid var(--accent)'
                  }}>
                    <h4 style={{
                      color: 'var(--accent)',
                      marginBottom: '0.75rem',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em'
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
              <h2 className="section-title">Défis techniques</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 }}>—</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Difficultés rencontrées */}
          {project.difficulties && (
            <motion.div variants={fadeIn} className="card mb-8" style={{
              borderLeft: '4px solid #e07b39',
              backgroundColor: 'rgba(224, 123, 57, 0.04)'
            }}>
              <h2 className="section-title" style={{ color: '#e07b39' }}>Difficultés rencontrées</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', color: 'var(--neutral-400)', fontStyle: 'italic' }}>
                Ce que j'ai vraiment eu du mal à résoudre — sans filtre.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.difficulties.map((item, index) => (
                  <div key={index} style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(224, 123, 57, 0.06)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '2px solid rgba(224, 123, 57, 0.4)'
                  }}>
                    <p className="card-text" style={{ marginBottom: 0, lineHeight: '1.75' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Ce que j'ai appris */}
          {project.learnings && (
            <motion.div variants={fadeIn} className="card mb-8" style={{
              borderLeft: '4px solid var(--secondary)',
              backgroundColor: 'rgba(26, 122, 74, 0.04)'
            }}>
              <h2 className="section-title" style={{ color: 'var(--secondary)' }}>Ce que j'ai appris</h2>
              <p className="card-text" style={{ marginBottom: '1.5rem', color: 'var(--neutral-400)', fontStyle: 'italic' }}>
                Les vraies leçons tirées de ce projet — celles qui ont changé ma façon de coder.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {project.learnings.map((item, index) => (
                  <div key={index} style={{
                    padding: '1rem 1.25rem',
                    backgroundColor: 'rgba(26, 122, 74, 0.06)',
                    borderRadius: 'var(--radius-md)',
                    borderLeft: '2px solid rgba(26, 122, 74, 0.4)',
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: 'var(--secondary)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>↑</span>
                    <p className="card-text" style={{ marginBottom: 0, lineHeight: '1.75' }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">Technologies utilisées</h2>
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
              backgroundColor: 'rgba(26, 63, 191, 0.05)', 
              borderLeft: '4px solid var(--primary)' 
            }}>
              <h2 className="section-title">Évolutions futures</h2>
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
            <h2 className="section-title">Compétences SLAM mobilisées</h2>
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
              Code source ↗
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Voir en ligne ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
