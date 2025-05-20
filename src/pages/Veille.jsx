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
    title: 'L\'impact de l\'IA sur le développement web',
    date: '15 Mars 2024',
    category: 'Intelligence Artificielle',
    summary: 'Analyse des dernières avancées en matière d\'IA générative et leur impact sur le développement web moderne.',
    source: 'https://example.com/ai-web-dev',
    sourceName: 'Tech Insights'
  },
  {
    title: 'Les tendances de la cybersécurité en 2024',
    date: '10 Mars 2024',
    category: 'Cybersécurité',
    summary: 'Panorama des nouvelles menaces et des solutions émergentes en matière de sécurité informatique.',
    source: 'https://example.com/cyber-trends',
    sourceName: 'Security Weekly'
  },
  {
    title: 'Le futur du développement web avec WebAssembly',
    date: '5 Mars 2024',
    category: 'Web Development',
    summary: 'Exploration des possibilités offertes par WebAssembly pour les applications web haute performance.',
    source: 'https://example.com/webassembly',
    sourceName: 'Web Dev Journal'
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