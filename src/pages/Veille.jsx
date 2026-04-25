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
  // --- 2024 ---
  {
    title: 'Next.js 15 : Le framework React passe à la vitesse supérieure',
    date: '22 octobre 2024',
    category: 'Développement Web',
    summary: 'Next.js 15 est sorti avec des améliorations majeures : support natif de React 19, nouveau compilateur Turbopack stable, et optimisation du cache par défaut. Le rendu hybride (SSR, SSG, ISR) est simplifié et les Server Actions gagnent en maturité. Ce framework devient incontournable pour le développement full-stack en React.',
    source: 'https://nextjs.org/blog/next-15',
    sourceName: 'Next.js Blog (Vercel)',
    tags: ['Next.js', 'React', 'Framework', 'Full-Stack']
  },
  {
    title: 'Python 3.13 : Un compilateur JIT pour doubler les performances',
    date: '8 octobre 2024',
    category: 'Développement',
    summary: 'Python 3.13 introduit un compilateur JIT (Just-In-Time) expérimental qui promet des gains de performance significatifs. Cette version apporte aussi une meilleure gestion des erreurs avec des messages plus précis, un interpréteur interactif amélioré et la suppression du GIL en option. Un tournant majeur pour le langage le plus populaire au monde.',
    source: 'https://www.programmez.com/actualites/python-313-plongee-au-coeur-du-jit-36866',
    sourceName: 'Programmez.com',
    tags: ['Python', 'Performance', 'JIT', 'Langage']
  },
  {
    title: 'Directive NIS2 : La cybersécurité devient une obligation légale en Europe',
    date: '18 novembre 2024',
    category: 'Cybersécurité',
    summary: 'La directive européenne NIS2 est entrée en vigueur en octobre 2024, élargissant les obligations de cybersécurité à plus de 100 000 entreprises en France. Les organisations des secteurs critiques (énergie, santé, transports) doivent désormais signaler les incidents sous 24h, mettre en place des politiques de gestion des risques et former leurs équipes. Des sanctions jusqu\'à 10 millions d\'euros en cas de non-conformité.',
    source: 'https://www.franceinfo.fr/replay-radio/nouveau-monde/cybersecurite-une-directive-europeenne-nis-2-en-vigueur-en-octobre-2024-fixe-des-obligations-a-30-000-entreprises-et-collectivites-francaises_6741925.html',
    sourceName: 'France Info',
    tags: ['NIS2', 'Cybersécurité', 'Europe', 'Conformité']
  },
  // --- 2025 ---
  {
    title: 'DeepSeek R1 : L\'IA open source chinoise qui secoue la Silicon Valley',
    date: '20 janvier 2025',
    category: 'Intelligence Artificielle',
    summary: 'DeepSeek R1, développé en Chine avec un budget 50 fois inférieur à ses concurrents américains, rivalise avec GPT-4 et Claude 3.5 sur les benchmarks de raisonnement. Son modèle est entièrement open source, ce qui remet en cause les investissements colossaux des géants tech. L\'action Nvidia a perdu 600 milliards de dollars de capitalisation en une seule journée après cette annonce.',
    source: 'https://www.lemondeinformatique.fr/actualites/lire-face-a-openai-o1-le-chinois-deepseek-degaine-son-llm-r1-95870.html',
    sourceName: 'Le Monde Informatique',
    tags: ['IA', 'DeepSeek', 'Open Source', 'LLM']
  },
  {
    title: 'Le "Vibe Coding" : programmer avec l\'IA sans écrire une ligne de code',
    date: '14 mars 2025',
    category: 'IA & Développement',
    summary: 'Andrej Karpathy (ex-Tesla, OpenAI) a popularisé le concept de "vibe coding" : décrire ce que l\'on veut à une IA et laisser l\'IA générer l\'intégralité du code. Des outils comme Cursor, Bolt et Lovable permettent de créer des applications complètes en quelques minutes. Cette approche soulève des questions sur l\'avenir du métier de développeur et sur la qualité du code produit.',
    source: 'https://www.journaldunet.com/developpeur/1543735-le-developpement-logiciel-entre-dans-une-nouvelle-ere-avec-le-vibe-coding/',
    sourceName: 'Journal du Net',
    tags: ['IA', 'Vibe Coding', 'Cursor', 'Productivité']
  },
  {
    title: 'Claude 3.7 Sonnet : Anthropic repousse les limites du raisonnement IA',
    date: '25 février 2025',
    category: 'Intelligence Artificielle',
    summary: 'Anthropic lance Claude 3.7 Sonnet avec un mode "pensée étendue" révolutionnaire : le modèle raisonne pas à pas avant de répondre, atteignant des performances record sur les benchmarks de mathématiques et de code. C\'est le premier modèle hybride alliant rapidité et raisonnement approfondi. Les développeurs l\'adoptent massivement pour automatiser des tâches complexes.',
    source: 'https://www.anthropic.com/news/claude-3-7-sonnet',
    sourceName: 'Anthropic',
    tags: ['Anthropic', 'Claude', 'IA', 'Raisonnement']
  },
  {
    title: 'Ransomware : Les cyberattaques contre les hôpitaux français en forte hausse',
    date: '9 septembre 2025',
    category: 'Cybersécurité',
    summary: 'L\'ANSSI (Agence Nationale de la Sécurité des Systèmes d\'Information) alerte sur une recrudescence des attaques par ransomware visant le secteur de la santé en France. Plusieurs hôpitaux ont vu leurs systèmes chiffrés, entraînant des reports d\'opérations et des fuites de données médicales. L\'ANSSI recommande la mise en place de sauvegardes hors ligne, la segmentation réseau et la formation des personnels.',
    source: 'https://korben.info/hacks-france-2025-bilan.html',
    sourceName: 'Korben',
    tags: ['Ransomware', 'Cybersécurité', 'ANSSI', 'Santé']
  },
  {
    title: 'TypeScript : Le langage qui s\'impose comme standard du développement web',
    date: '3 juin 2025',
    category: 'Développement Web',
    summary: 'TypeScript dépasse JavaScript en termes d\'adoption sur GitHub et dans les sondages Stack Overflow 2025. Le typage statique réduit jusqu\'à 40% les bugs en production selon une étude de l\'Université de Cambridge. Les frameworks majeurs (React, Vue, Angular, Next.js) sont désormais conçus nativement en TypeScript. Sa maîtrise devient un prérequis pour les offres d\'emploi développeur web.',
    source: 'https://www.blogdumoderateur.com/github-typescript-langage-utilise-plateforme-2025/',
    sourceName: 'Blog du Modérateur',
    tags: ['TypeScript', 'JavaScript', 'Développement', 'Stack Overflow']
  },
  // --- 2026 ---
  {
    title: 'Le Groupe Lazarus frappe à nouveau : 1,4 milliard de dollars volés',
    date: '24 février 2025',
    category: 'Cybersécurité',
    summary: 'Le groupe de hackers nord-coréen Lazarus a orchestré l\'une des plus grandes attaques de l\'histoire de la blockchain. En exploitant des failles dans les ponts cross-chain et les smart contracts de la plateforme Bybit, ils ont dérobé 1,5 milliard de dollars en Ethereum. Cette attaque révèle les vulnérabilités persistantes des protocoles DeFi et l\'urgence de renforcer les audits de sécurité des smart contracts.',
    source: 'https://zendata.security/2025/02/24/lazarus-group-steals-1-5-billion-from-bybit-the-largest-crypto-heist-in-history/',
    sourceName: 'Zendata Security',
    tags: ['Cybersécurité', 'Blockchain', 'Lazarus', 'Hack']
  },
  {
    title: 'GitHub Copilot en 2026 : De l\'autocomplétion à l\'agent développeur autonome',
    date: '18 mars 2026',
    category: 'IA & Développement',
    summary: 'GitHub Copilot ne se limite plus à l\'autocomplétion : son mode "Workspace" permet de confier une tâche complète (corriger un bug, implémenter une fonctionnalité) à un agent IA qui modifie plusieurs fichiers, exécute les tests et propose une pull request. Utilisé par plus de 15 millions de développeurs, il transforme profondément le rôle du développeur, qui devient davantage un chef d\'orchestre qu\'un codeur.',
    source: 'https://www.journaldunet.com/intelligence-artificielle/1530135-jonathan-carter-github/',
    sourceName: 'Journal du Net',
    tags: ['GitHub Copilot', 'IA', 'Agent', 'Productivité']
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
              Suivi des tendances et innovations en développement web et informatique — couvrant mes deux années de BTS (2024–2026)
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
