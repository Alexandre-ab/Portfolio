import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const projects = [
  {
    title: 'Application de Gestion de Bibliothèque',
    period: 'Janvier 2024',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application web pour la gestion d\'une bibliothèque avec authentification, gestion des emprunts et recherche de livres.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    github: 'https://github.com/username/project',
    image: '/project1.jpg'
  },
  {
    title: 'Site E-commerce',
    period: 'Décembre 2023',
    context: 'Projet personnel',
    description: 'Création d\'une plateforme e-commerce avec panier d\'achat, paiement en ligne et gestion des commandes.',
    technologies: ['React', 'Redux', 'Stripe', 'Firebase'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/username/project',
    image: '/project2.jpg'
  },
  // Ajoutez d'autres projets ici
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-6xl mx-auto"
        >
          {/* En-tête */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Mes Projets
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Découvrez mes réalisations et les compétences mobilisées
            </p>
          </motion.div>

          {/* Grille de projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Image du projet */}
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Contenu du projet */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {project.period} • {project.context}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Compétences SLAM */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Compétences SLAM mobilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liens */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700"
                    >
                      <CodeBracketIcon className="h-5 w-5 mr-1" />
                      Code source
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700"
                    >
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-1" />
                      Voir le projet
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
} 