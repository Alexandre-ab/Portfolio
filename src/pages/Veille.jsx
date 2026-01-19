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
    title: 'DeepSeek : L\'IA chinoise qui bouleverse le marché',
    date: '18 janvier 2026',
    category: 'Intelligence Artificielle',
    summary: 'DeepSeek, le nouveau modèle d\'IA développé en Chine, impressionne par ses performances et son coût réduit. Avec des capacités comparables à GPT-4 pour une fraction du prix, DeepSeek remet en question la domination des géants américains et ouvre de nouvelles perspectives pour la démocratisation de l\'IA.',
    source: 'https://www.lemondeinformatique.fr',
    sourceName: 'Le Monde Informatique',
    tags: ['IA', 'DeepSeek', 'Innovation']
  },
  {
    title: 'L\'IA s\'invite dans nos IDE : Révolution du développement',
    date: '15 janvier 2026',
    category: 'IA & Développement',
    summary: 'GitHub Copilot, Cursor, et d\'autres assistants IA transforment radicalement la façon dont les développeurs codent. L\'autocomplétion intelligente, la génération de code et la détection de bugs en temps réel permettent d\'augmenter la productivité de 30 à 40%. Les IDE deviennent de véritables partenaires de développement.',
    source: 'https://www.journaldunet.com',
    sourceName: 'Journal du Net',
    tags: ['IA', 'IDE', 'Productivité', 'GitHub Copilot']
  },
  {
    title: 'Le Groupe Lazarus frappe à nouveau : 1,4 milliard volé',
    date: '12 janvier 2026',
    category: 'Cybersécurité',
    summary: 'Le groupe de hackers nord-coréen Lazarus a orchestré l\'une des plus grandes attaques de l\'histoire de la blockchain. En exploitant des failles dans les ponts cross-chain et les smart contracts, ils ont dérobé 1,4 milliard de dollars en cryptomonnaies. Cette attaque révèle les vulnérabilités persistantes des protocoles DeFi.',
    source: 'https://korben.info',
    sourceName: 'Korben',
    tags: ['Cybersécurité', 'Blockchain', 'Lazarus', 'Hack']
  },
  {
    title: 'Vitalik Buterin : Le visionnaire derrière Ethereum',
    date: '10 janvier 2026',
    category: 'Blockchain',
    summary: 'À 31 ans, Vitalik Buterin continue d\'innover avec Ethereum 3.0. Retour sur le parcours du prodige russe-canadien qui a créé la deuxième plus grande cryptomonnaie à seulement 19 ans. Ses nouvelles propositions pour améliorer la scalabilité et réduire les frais de transaction pourraient révolutionner la blockchain.',
    source: 'https://www.01net.com',
    sourceName: '01net',
    tags: ['Ethereum', 'Vitalik Buterin', 'Blockchain', 'Web3']
  },
  {
    title: 'Bitcoin : 16 ans après le livre blanc de Satoshi Nakamoto',
    date: '8 janvier 2026',
    category: 'Cryptomonnaie',
    summary: 'Le 31 octobre 2008, Satoshi Nakamoto publiait le livre blanc du Bitcoin. Seize ans plus tard, cette révolution monétaire a transformé le paysage financier mondial. Analyse de l\'impact du document fondateur qui a introduit la première monnaie décentralisée et inspiré plus de 20 000 cryptomonnaies.',
    source: 'https://www.numerama.com',
    sourceName: 'Numerama',
    tags: ['Bitcoin', 'Satoshi Nakamoto', 'Cryptomonnaie', 'Histoire']
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

          {/* Section Méthodologie */}
          <motion.div variants={fadeIn} className="card" style={{ marginBottom: '2rem' }}>
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
                  <strong>Fréquence de veille :</strong> Je consacre environ 40 minutes par jour à ma veille technologique, 
                  répartie entre la lecture d'articles, le suivi de communautés et l'expérimentation de nouvelles technologies.
                </span>
              </p>
            </div>
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
        </motion.div>
      </div>
    </section>
  )
}
