import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon, InformationCircleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { projectsData } from '../data/projectsData'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const projects = projectsData

export default function Projects() {
  const [filter, setFilter] = useState('tous')
  
  const filteredProjects = filter === 'tous' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="section gradient-bg">
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          className="about-container"
        >
          {/* En-tête */}
          <motion.div variants={fadeIn} className="text-center mb-8">
            <h1 className="hero-title">
              Mes Projets
            </h1>
            <p className="hero-text">
              Découvrez mes réalisations et les compétences SLAM mobilisées
            </p>
          </motion.div>

          {/* Filtres */}
          <motion.div variants={fadeIn} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setFilter('tous')}
              className={filter === 'tous' ? 'btn btn-primary' : 'btn btn-outline'}
              style={{ minWidth: '150px' }}
            >
              📚 Tous les projets
            </button>
            <button
              onClick={() => setFilter('scolaire')}
              className={filter === 'scolaire' ? 'btn btn-primary' : 'btn btn-outline'}
              style={{ minWidth: '150px' }}
            >
              🎓 Projets scolaires
            </button>
            <button
              onClick={() => setFilter('entreprise')}
              className={filter === 'entreprise' ? 'btn btn-primary' : 'btn btn-outline'}
              style={{ minWidth: '150px' }}
            >
              💼 Projets entreprise
            </button>
            <button
              onClick={() => setFilter('personnel')}
              className={filter === 'personnel' ? 'btn btn-primary' : 'btn btn-outline'}
              style={{ minWidth: '150px' }}
            >
              👤 Projets personnels
            </button>
          </motion.div>

          {/* Statistiques */}
          <motion.div variants={fadeIn} className="grid grid-3 gap-4 mb-8">
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary-light)', marginBottom: '0.5rem' }}>
                {filteredProjects.length}
              </div>
              <div className="card-subtitle">Projets {filter === 'tous' ? 'réalisés' : filter === 'scolaire' ? 'scolaires' : 'entreprise'}</div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                {[...new Set(filteredProjects.flatMap(p => p.technologies))].length}
              </div>
              <div className="card-subtitle">Technologies maîtrisées</div>
            </div>
            <div className="card text-center">
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                {[...new Set(filteredProjects.flatMap(p => p.skills))].length}
              </div>
              <div className="card-subtitle">Compétences SLAM</div>
            </div>
          </motion.div>

          {/* Grille de projets */}
          <div className="grid grid-3 gap-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="card"
                style={{ position: 'relative' }}
              >
                {/* Image du projet */}
                <div className="aspect-video rounded-md" style={{ position: 'relative', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-cover rounded-md"
                    style={{ transition: 'transform 0.3s ease' }}
                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '1rem',
                    color: 'white'
                  }}>
                    <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                      {project.period}
                    </div>
                  </div>
                </div>

                {/* Contenu du projet */}
                <div className="card-content">
                  <div className="mb-3">
                    <h3 className="card-title" style={{ marginBottom: '0.5rem' }}>
                      {project.title}
                    </h3>
                    <p className="card-subtitle" style={{ marginBottom: '0.75rem' }}>
                      {project.context}
                    </p>
                    <p className="card-text">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--neutral-400)' }}>
                      Technologies
                    </h4>
                    <div className="skill-tags">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Compétences SLAM */}
                  <div className="mb-4">
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', marginBottom: '0.5rem', color: 'var(--neutral-400)' }}>
                      Compétences SLAM
                    </h4>
                    <div className="skill-tags">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="badge"
                          style={{ backgroundColor: 'var(--secondary)', color: 'white' }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liens */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link
                      to={`/projects/${project.id}`}
                      className="btn btn-outline btn-with-icon"
                      style={{ width: '100%' }}
                    >
                      <InformationCircleIcon className="icon" />
                      Voir les détails
                    </Link>
                    
                    <div className="flex justify-between gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-with-icon"
                        style={{ flex: 1 }}
                      > 
                        <CodeBracketIcon className="icon" />
                        Code
                      </a>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline btn-with-icon"
                          style={{ flex: 1 }}
                        >
                          <ArrowTopRightOnSquareIcon className="icon" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
