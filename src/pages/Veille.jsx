import { useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}


export default function Veille() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [Error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        setLoading(true)
        setError(null)

        const feeds = [
          { url: 'https://www.lemondeinformatique.fr/rss/rss.xml', category: 'Informatique' },
          { url: 'https://korben.info/feed', category: 'Tech & Sécurité' },
          { url: 'https://www.numerama.com/rss', category: 'Numérique' },
          { url: 'https://www.clubic.com/feed/', category: 'High-Tech' },
          { url: 'https://www.01net.com/rss/info/flux-rss/flux-toutes-les-actualites/', category: 'Actualités Tech' },
          { url: 'https://www.journaldunet.com/rss/', category: 'Web & Tech' }
        ]

        const fetchFeed = async ({ url, category }) => {
          const proxied = 'https://api.allorigins.win/get?url=' + encodeURIComponent(url)
          const res = await fetch(proxied)
          if (!res.ok) throw new Error('HTTP ' + res.status)
          const data = await res.json()
          return parseRSS(data.contents, category)
        }
        const [results] = await Promise.all([Promise.allSettled(feeds.map(fetchFeed)),
          new Promise(resolve => setTimeout(resolve, 2000))
        ])
        const items = results.flatMap(r => (r.status === 'fulfilled' ? r.value : []))

        // Tri par date décroissante + on garde les 10 plus récents
        const sorted = items
          .sort((a, b) => new Date(b.isoDate || 0) - new Date(a.isoDate || 0))
          .slice(0, 10)

        if (!cancelled && sorted.length) {
          setArticles(sorted)
        }
      } catch (error) {
        if (!cancelled) setError(error.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [])

  const parseRSS = (xmlString, category) => {
    const parser = new DOMParser()
    const xml = parser.parseFromString(xmlString, 'text/xml')
    const items = Array.from(xml.querySelectorAll('item'))

    const getText = (node, tag) => node.querySelector(tag)?.textContent?.trim() || ''

    return items.slice(0, 6).map(item => {
      const link = getText(item, 'link')
      const pubDate = getText(item, 'pubDate') || getText(item, 'updated') || ''
      const title = getText(item, 'title')
      const description = getText(item, 'description') || getText(item, 'content:encoded') || ''

      return {
        title,
        date: pubDate
          ? new Date(pubDate).toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' })
          : '',
        category,
        summary: description.replace(/<[^>]*>/g, '').slice(0, 220) + (description.length > 220 ? '…' : ''),
        source: link,
        sourceName: link ? new URL(link).hostname.replace(/^www\./, '') : category,
        isoDate: pubDate
      }
    })
  }

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

          {loading && (
  <motion.div variants={fadeIn} className="flex flex-col items-center justify-center py-20">
    {/* Spinner + Barre de progression */}
    <div className="relative mb-6">
      <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full"></div>
      <div className="absolute top-0 left-0 w-16 h-16 border-4 border-t-primary-600 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
    </div>
    
    {/* Barre de progression */}
    <div className="w-80 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
      <motion.div
        className="h-full bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        style={{ width: "50%" }}
      />
    </div>
    
    <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
      Récupération des derniers articles technologiques...
    </p>
  </motion.div>
)}

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