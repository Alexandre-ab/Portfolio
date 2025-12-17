// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const projects = [
  {
    title: 'Application de Gestion de Congés',
    period: 'Janvier 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application web pour la gestion des congés des employés.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    url: 'https://gestion-de-cong-s-asxt.vercel.app/',
    github: 'https://github.com/Alexandre-ab/Gestion-de-cong-s',
    image: '/images/conges.webp'
  },
  {
    title: 'Versus',
    period: 'Décembre 2024',
    context: 'Projet personnel',
    description: 'Création d\'un coach ia esport.',
    technologies: ['React', 'Redux', 'Stripe', 'Firebase', 'Node.js', 'Express'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Versus',
    image: '/images/placeholder-project.svg'
  },
  {
    title: 'Malware',
    period: 'Avril 2025',
    context: 'Projet personnel, Projet cybersécurité',
    description: 'Création d\'un malware avec un botnet.',
    technologies: ['Javascript'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Malware-',
    image: '/images/malware.png'
  },
  {
    title: 'Application Pokédex',
    period: 'Décembre 2024',
    context: 'Projet personnel',
    description: 'Création d\'une application Pokédex',
    technologies: ['C#', 'Windows Forms', 'SQL',],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Pokedex',
    image: '/images/pokedex.png'
  },
  {
    title: 'GSB',
    period: 'Avril 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application de gestion de stock pour une pharmacie.',
    technologies: ['JavaScript', 'MongoDB', 'HTML/CSS', 'React', 'Node.js', 'Express'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    github: 'https://github.com/Alexandre-ab/GSB-',
    image: '/images/GSB.png'
  },
  {
    title: 'Application de Gestion de Prescription  ',
    period: 'Janvier 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application bureau pour la gestion des prescriptions des patients.',
    technologies: ['C# ', 'Windows Forms', 'SQL',],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Gestion-de-prescription',
    image: '/images/Medecin.png'
  },
  {
    title: 'Bot shell windows',
    period: 'Juin 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'un bot shell windows.',
    technologies: [ 'Shell', 'Windows'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Bot-shell-windows',
    image: '/images/shell.avif'
  },
  {
    title: 'Script Batch pour Application Aveva',
    period: 'Juillet 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'un script batch pour l\'application Aveva.',
    technologies: [ 'Batch', 'Windows'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Script-batch-Aveva',
    image: '/images/aveva.png'
  },

  {
    title: 'Site web pour un salon de coiffure',
    period: 'Décembre 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'un site web pour un salon de coiffure.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma','React'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    github: 'https://github.com/RyukSylux/revealBarber/tree/main',
    image: '/images/hero-background.jpg'
  }
]

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          className="about-container"
        >
          {/* En-tête */}
          <motion.div variants={fadeIn} className="text-center mb-8">
            <h1 className="section-title">
              Mes Projets
            </h1>
            <p className="mb-4">
              Découvrez mes réalisations et les compétences mobilisées
            </p>
          </motion.div>

          {/* Grille de projets */}
          <div className="grid grid-3 gap-4">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="card"
              >
                {/* Image du projet */}
                <div className="aspect-video rounded-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="img-cover rounded-md"
                  />
                </div>

                {/* Contenu du projet */}
                <div className="card-content">
                  <h3 className="card-title">
                    {project.title}
                  </h3>
                  <p className="card-subtitle">
                    {project.period} • {project.context}
                  </p>
                  <p className="card-text">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">
                      Technologies utilisées
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
                    <h4 className="font-semibold mb-2">
                      Compétences SLAM mobilisées
                    </h4>
                    <div className="skill-tags">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="badge"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liens */}
                  <div className="flex justify-between">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-with-icon"
                    > 
                      <CodeBracketIcon className="icon" />
                      Code source
                    </a>
                    <a
                      href={project.url}
                      className="btn btn-outline btn-with-icon"
                    >
                      <ArrowTopRightOnSquareIcon className="icon" />
                      Voir le projet
                    </a>
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