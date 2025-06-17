import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const articles = [
  {
    title: 'React 19 : les nouvelles fonctionnalités révolutionnaires',
    date: '15 Janvier 2025',
    category: 'React',
    summary: 'Découverte des Server Components, des Actions et du nouveau compilateur React qui transforment le développement d\'applications web.',
    source: 'https://react.dev/blog/2024/12/05/react-19',
    sourceName: 'React Blog'
  },
  {
    title: 'L\'essor de l\'IA générative dans le développement logiciel',
    date: '10 Janvier 2025',
    category: 'Intelligence Artificielle',
    summary: 'Comment GitHub Copilot, Claude et ChatGPT révolutionnent la façon dont nous écrivons du code et automatisons les tâches de développement.',
    source: 'https://github.blog/2024-12-10-how-ai-is-transforming-software-development/',
    sourceName: 'GitHub Blog'
  },
  {
    title: 'Vite 6.0 : performances et nouvelles fonctionnalités',
    date: '8 Janvier 2025',
    category: 'Outils de développement',
    summary: 'La nouvelle version majeure de Vite apporte des améliorations significatives en termes de vitesse de build et de nouvelles APIs.',
    source: 'https://vitejs.dev/blog/announcing-vite6',
    sourceName: 'Vite.js'
  },
  {
    title: 'Cybersécurité 2025 : nouvelles menaces et défenses',
    date: '5 Janvier 2025',
    category: 'Cybersécurité',
    summary: 'Analyse des cyberattaques émergentes liées à l\'IA et des nouvelles stratégies de protection pour les applications web modernes.',
    source: 'https://owasp.org/www-project-top-ten/',
    sourceName: 'OWASP Foundation'
  },
  {
    title: 'TypeScript 5.6 et l\'avenir du typage statique',
    date: '2 Janvier 2025',
    category: 'TypeScript',
    summary: 'Les dernières améliorations de TypeScript et son impact croissant sur l\'écosystème JavaScript pour des applications plus robustes.',
    source: 'https://devblogs.microsoft.com/typescript/',
    sourceName: 'TypeScript Blog'
  }
]

export default function Veille() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {/* En-tête */}
          <motion.div variants={fadeIn} className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Veille Technologique
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Suivi des dernières tendances et innovations technologiques
            </p>
          </motion.div>

          {/* Articles */}
          <div className="space-y-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                variants={fadeIn}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-sm">
                      {article.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {article.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {article.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {article.summary}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Source : {article.sourceName}
                    </span>
                    <a
                      href={article.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 hover:text-primary-700"
                    >
                      Lire l'article
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Méthodologie */}
          <motion.div
            variants={fadeIn}
            className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ma Méthodologie de Veille
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                Pour maintenir une veille technologique efficace, je m'appuie sur
                plusieurs sources et outils :
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Newsletters spécialisées</li>
                <li>Réseaux sociaux professionnels (LinkedIn, Twitter)</li>
                <li>Blogs et sites d'actualités techniques</li>
                <li>Communautés de développeurs (GitHub, Stack Overflow)</li>
                <li>Podcasts et webinaires</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 