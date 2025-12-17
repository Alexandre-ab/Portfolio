// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const articles = [
  {
    title: 'L\'intelligence artificielle révolutionne le développement web',
    date: '15 janvier 2024',
    category: 'Informatique',
    summary: 'Les dernières avancées en IA permettent désormais de générer du code plus efficacement et de créer des interfaces utilisateur plus intuitives. Les développeurs peuvent désormais se concentrer sur la logique métier plutôt que sur le code répétitif.',
    source: 'https://www.lemondeinformatique.fr',
    sourceName: 'lemondeinformatique.fr'
  },
  {
    title: 'Sécurité : Les nouvelles menaces du cloud computing',
    date: '12 janvier 2024',
    category: 'Tech & Sécurité',
    summary: 'Avec l\'adoption massive du cloud, de nouvelles vulnérabilités apparaissent. Les experts recommandent une approche de sécurité multicouche et une surveillance continue des accès et des données sensibles.',
    source: 'https://korben.info',
    sourceName: 'korben.info'
  },
  {
    title: 'React 19 : Les nouveautés à connaître',
    date: '10 janvier 2024',
    category: 'Web & Tech',
    summary: 'La nouvelle version de React apporte des améliorations significatives en termes de performances et de développeur experience. Les hooks optimisés et le nouveau système de rendu promettent de meilleures performances.',
    source: 'https://www.journaldunet.com',
    sourceName: 'journaldunet.com'
  },
  {
    title: 'Le développement mobile multiplateforme gagne du terrain',
    date: '8 janvier 2024',
    category: 'High-Tech',
    summary: 'Les frameworks comme React Native et Flutter permettent désormais de créer des applications natives performantes pour iOS et Android avec un seul codebase. Les entreprises adoptent massivement cette approche pour réduire les coûts de développement.',
    source: 'https://www.clubic.com',
    sourceName: 'clubic.com'
  },
  {
    title: 'Les tendances du développement frontend en 2024',
    date: '5 janvier 2024',
    category: 'Numérique',
    summary: 'Cette année, les développeurs frontend se tournent vers des frameworks plus légers, une meilleure accessibilité et des performances optimisées. Les Web Components et les Progressive Web Apps continuent leur ascension.',
    source: 'https://www.numerama.com',
    sourceName: 'numerama.com'
  },
  {
    title: 'DevOps : L\'automatisation au cœur de la transformation',
    date: '3 janvier 2024',
    category: 'Actualités Tech',
    summary: 'L\'automatisation des déploiements et des tests devient essentielle pour maintenir la qualité et la rapidité de livraison. Les outils CI/CD évoluent pour s\'adapter aux architectures cloud natives.',
    source: 'https://www.01net.com',
    sourceName: '01net.com'
  },
  {
    title: 'TypeScript : Le langage qui monte',
    date: '1 janvier 2024',
    category: 'Web & Tech',
    summary: 'TypeScript continue de gagner en popularité auprès des développeurs JavaScript. La sécurité de type qu\'il apporte réduit significativement les bugs en production et améliore la maintenabilité du code.',
    source: 'https://www.journaldunet.com',
    sourceName: 'journaldunet.com'
  },
  {
    title: 'Les architectures microservices : avantages et défis',
    date: '28 décembre 2023',
    category: 'Informatique',
    summary: 'Les microservices permettent une meilleure scalabilité et indépendance des équipes, mais nécessitent une infrastructure robuste et une bonne gestion de la complexité. Retour d\'expérience sur les bonnes pratiques.',
    source: 'https://www.lemondeinformatique.fr',
    sourceName: 'lemondeinformatique.fr'
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