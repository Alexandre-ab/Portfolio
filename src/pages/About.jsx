import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const skills = [
  {
    category: 'Langages de programmation',
    items: ['JavaScript', 'TypeScript', 'HTML/CSS', 'PHP', 'SQL', 'Python']
  },
  {
    category: 'Frameworks & Bibliothèques',
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'Outils & Technologies',
    items: ['Git', 'Docker', 'VS Code', 'Figma', 'PostgreSQL', 'Cursor']
  },
  {
    category: 'Compétences comportementales',
    items: ['Travail en équipe', 'Autonomie', 'Adaptabilité', 'Rigueur', 'Communication']
  }
]

export default function About() {
  return (
    <section className="gradient-bg section">
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          className="about-container"
        >
          {/* En-tête */}
          <motion.div variants={fadeIn} className="text-center mb-8">
            <h1 className="hero-title">
              À propos de moi
            </h1>
            <p className="hero-text">
              Découvrez mon parcours et mes compétences
            </p>
          </motion.div>

          {/* Parcours */}
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="section-title">
              Parcours scolaire et professionnel
            </h2>
            <div className="grid grid-1 mb-4">
              <motion.div 
                className="card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="card-title">
                  BTS SIO SLAM
                </h3>
                <p className="card-subtitle">
                  Lycée Nexa Digital School • 2024-2026
                </p>
                <p className="card-text">
                  Formation en développement d'applications et solutions logicielles
                </p>
              </motion.div>
              <motion.div 
                className="card"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="card-title">
                  Ekium
                </h3>
                <p className="card-subtitle">
                  Alternance
                </p>
                <p className="card-text">
                  Ma mission est de gérer un parc de logiciels Métiers et de gérers l'assistance utilisateurs.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Présentation BTS SIO */}
          <motion.div variants={fadeIn} className="mb-8">
            <h2 className="section-title">
              Le BTS SIO SLAM
            </h2>
            <motion.div 
              className="card"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <p className="card-text">
                Le BTS SIO (Services Informatiques aux Organisations) option SLAM
                (Solutions Logicielles et Applications Métiers) forme des
                développeurs capables de créer des solutions logicielles adaptées
                aux besoins des entreprises.
              </p>
              <p className="card-text">
                Cette formation couvre l'ensemble du cycle de développement
                d'applications, de la conception à la maintenance, en passant par
                la programmation et les tests.
              </p>
            </motion.div>
          </motion.div>

          {/* Compétences */}
          <motion.div variants={fadeIn}>
            <h2 className="section-title">
              Compétences
            </h2>
            <div className="grid grid-2">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  className="card"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="card-title">
                    {skillGroup.category}
                  </h3>
                  <div className="skill-tags">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="badge"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 