// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, ClockIcon, TagIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNewspaper, faUsers, faRss, faLightbulb } from '@fortawesome/free-solid-svg-icons'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const articles = [
  {
    title: 'L\'intelligence artificielle révolutionne le développement web',
    date: '15 janvier 2024',
    category: 'IA & Développement',
    summary: 'Les dernières avancées en IA permettent désormais de générer du code plus efficacement et de créer des interfaces utilisateur plus intuitives. Les développeurs peuvent désormais se concentrer sur la logique métier plutôt que sur le code répétitif.',
    source: 'https://www.lemondeinformatique.fr',
    sourceName: 'Le Monde Informatique',
    tags: ['IA', 'Développement', 'Productivité']
  },
  {
    title: 'Sécurité : Les nouvelles menaces du cloud computing',
    date: '12 janvier 2024',
    category: 'Cybersécurité',
    summary: 'Avec l\'adoption massive du cloud, de nouvelles vulnérabilités apparaissent. Les experts recommandent une approche de sécurité multicouche et une surveillance continue des accès et des données sensibles.',
    source: 'https://korben.info',
    sourceName: 'Korben',
    tags: ['Sécurité', 'Cloud', 'DevSecOps']
  },
  {
    title: 'React 19 : Les nouveautés à connaître',
    date: '10 janvier 2024',
    category: 'Framework',
    summary: 'La nouvelle version de React apporte des améliorations significatives en termes de performances et de développeur experience. Les hooks optimisés et le nouveau système de rendu promettent de meilleures performances.',
    source: 'https://www.journaldunet.com',
    sourceName: 'Journal du Net',
    tags: ['React', 'Frontend', 'JavaScript']
  },
  {
    title: 'Le développement mobile multiplateforme gagne du terrain',
    date: '8 janvier 2024',
    category: 'Mobile',
    summary: 'Les frameworks comme React Native et Flutter permettent désormais de créer des applications natives performantes pour iOS et Android avec un seul codebase. Les entreprises adoptent massivement cette approche pour réduire les coûts.',
    source: 'https://www.clubic.com',
    sourceName: 'Clubic',
    tags: ['Mobile', 'React Native', 'Flutter']
  },
  {
    title: 'Les tendances du développement frontend en 2024',
    date: '5 janvier 2024',
    category: 'Tendances',
    summary: 'Cette année, les développeurs frontend se tournent vers des frameworks plus légers, une meilleure accessibilité et des performances optimisées. Les Web Components et les Progressive Web Apps continuent leur ascension.',
    source: 'https://www.numerama.com',
    sourceName: 'Numerama',
    tags: ['Frontend', 'Web', 'Tendances']
  },
  {
    title: 'DevOps : L\'automatisation au cœur de la transformation',
    date: '3 janvier 2024',
    category: 'DevOps',
    summary: 'L\'automatisation des déploiements et des tests devient essentielle pour maintenir la qualité et la rapidité de livraison. Les outils CI/CD évoluent pour s\'adapter aux architectures cloud natives.',
    source: 'https://www.01net.com',
    sourceName: '01net',
    tags: ['DevOps', 'CI/CD', 'Automation']
  },
  {
    title: 'TypeScript : Le langage qui monte',
    date: '1 janvier 2024',
    category: 'Langage',
    summary: 'TypeScript continue de gagner en popularité auprès des développeurs JavaScript. La sécurité de type qu\'il apporte réduit significativement les bugs en production et améliore la maintenabilité du code.',
    source: 'https://www.journaldunet.com',
    sourceName: 'Journal du Net',
    tags: ['TypeScript', 'JavaScript', 'Backend']
  },
  {
    title: 'Les architectures microservices : avantages et défis',
    date: '28 décembre 2023',
    category: 'Architecture',
    summary: 'Les microservices permettent une meilleure scalabilité et indépendance des équipes, mais nécessitent une infrastructure robuste et une bonne gestion de la complexité. Retour d\'expérience sur les bonnes pratiques.',
    source: 'https://www.lemondeinformatique.fr',
    sourceName: 'Le Monde Informatique',
    tags: ['Microservices', 'Architecture', 'Scalabilité']
  }
]

export default function Veille() {
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
              Veille Technologique
            </h1>
            <p className="hero-text">
              Suivi des dernières tendances et innovations dans le domaine du développement web et de l'informatique
            </p>
          </motion.div>

          {/* Grille d'articles */}
          <div className="grid grid-2 gap-4 mb-8">
            {articles.map((article, index) => (
              <motion.article
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="card"
              >
                {/* En-tête de l'article */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1" style={{ color: 'var(--neutral-400)', fontSize: '0.875rem' }}>
                      <ClockIcon style={{ width: '1rem', height: '1rem' }} />
                      {article.date}
                    </div>
                  </div>

                  <h2 className="card-title" style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>
                    {article.title}
                  </h2>

                  <p className="card-text" style={{ marginBottom: '1rem' }}>
                    {article.summary}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-4" style={{ color: 'var(--neutral-400)', fontSize: '0.875rem' }}>
                    <TagIcon style={{ width: '1rem', height: '1rem' }} />
                    <span>Tags</span>
                  </div>
                  <div className="skill-tags">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer de l'article */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '1rem' }}>
                  <div className="flex items-center justify-between">
                    <span style={{ color: 'var(--neutral-400)', fontSize: '0.875rem' }}>
                      Source : {article.sourceName}
                    </span>
                    <a
                      href={article.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline btn-with-icon"
                      style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                    >
                      <ArrowTopRightOnSquareIcon className="icon" />
                      Lire l'article
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Section Méthodologie */}
          <motion.div variants={fadeIn} className="card">
            <h2 className="section-title">
              Ma Méthodologie de Veille
            </h2>
            
            <div className="mb-6">
              <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
                Sources d'information
              </h3>
              <div className="grid grid-2 gap-4">
                <div>
                  <h4 className="card-subtitle" style={{ color: 'var(--primary-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FontAwesomeIcon icon={faNewspaper} />
                    Sites spécialisés
                  </h4>
                  <ul className="card-text" style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                      Le Monde Informatique
                    </li>
                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                      Journal du Net
                    </li>
                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                      Korben.info
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="card-subtitle" style={{ color: 'var(--primary-light)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FontAwesomeIcon icon={faUsers} />
                    Communautés
                  </h4>
                  <ul className="card-text" style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                      GitHub
                    </li>
                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                      Stack Overflow
                    </li>
                    <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)' }}>•</span>
                      Dev.to
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="card-title" style={{ fontSize: '1.125rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FontAwesomeIcon icon={faRss} />
                Outils de veille
              </h3>
              <div className="skill-tags">
                <span className="badge">RSS Feeds</span>
                <span className="badge">Feedly</span>
                <span className="badge">LinkedIn</span>
                <span className="badge">Twitter</span>
                <span className="badge">Newsletters</span>
                <span className="badge">Podcasts</span>
                <span className="badge">YouTube</span>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(124, 58, 237, 0.1)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--primary)' }}>
              <p className="card-text" style={{ marginBottom: 0, display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <FontAwesomeIcon icon={faLightbulb} style={{ color: 'var(--primary)', marginTop: '0.2rem' }} />
                <span>
                  <strong>Fréquence de veille :</strong> Je consacre environ 1 heure par jour à ma veille technologique, 
                  répartie entre la lecture d'articles, le suivi de communautés et l'expérimentation de nouvelles technologies.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
