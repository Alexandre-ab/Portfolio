import { useParams, useNavigate } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Référentiel des compétences SLAM
const competencesReferentiel = {
  'A1.1.1': 'Analyse du cahier des charges d\'un service à produire',
  'A1.1.2': 'Étude de l\'impact de l\'intégration d\'un service sur le système informatique',
  'A1.1.3': 'Étude des exigences liées à la qualité attendue d\'un service',
  'A1.2.1': 'Élaboration et présentation d\'un dossier de choix de solution technique',
  'A1.2.2': 'Rédaction des spécifications techniques de la solution retenue',
  'A1.2.3': 'Évaluation des indicateurs de suivi d\'un projet et justification des écarts',
  'A1.2.4': 'Définition des niveaux d\'habilitation associés à un service',
  'A1.2.5': 'Rédaction de la documentation d\'une solution',
  'A1.3.1': 'Test d\'intégration et d\'acceptation d\'un service',
  'A1.3.2': 'Définition et exploitation des indicateurs de qualité d\'un service',
  'A1.3.3': 'Gestion des versions d\'une solution',
  'A1.3.4': 'Mise en place d\'une organisation de travail collaboratif',
  'A1.4.1': 'Participation à un projet de conception d\'une solution applicative',
  'A1.4.2': 'Évaluation d\'un élément de solution applicative',
  'A1.4.3': 'Adaptation d\'une solution applicative aux évolutions de ses composants'
}

const projects = [
  {
    id: 'gestion-conges',
    title: 'Application de Gestion de Congés',
    period: 'Janvier 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application web pour la gestion des congés des employés.',
    detailedDescription: 'Application complète de gestion des congés permettant aux employés de soumettre des demandes de congés, aux managers de les approuver ou rejeter, et aux RH de gérer l\'ensemble du processus. Intègre un système de notifications en temps réel et un tableau de bord analytique.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    url: 'https://gestion-de-cong-s-asxt.vercel.app/',
    github: 'https://github.com/Alexandre-ab/Gestion-de-cong-s',
    image: '/images/conges.webp',
    features: [
      'Système de demande de congés en ligne',
      'Workflow d\'approbation multi-niveaux',
      'Notifications en temps réel',
      'Tableau de bord analytique',
      'Gestion des soldes de congés',
      'Export des données en PDF'
    ],
    challenges: [
      'Mise en place d\'un système de notifications en temps réel avec WebSocket',
      'Gestion des droits d\'accès selon les rôles (employé, manager, RH)',
      'Optimisation des performances pour gérer un grand nombre d\'utilisateurs'
    ]
  },
  {
    id: 'versus',
    title: 'Versus',
    period: 'Décembre 2024',
    context: 'Projet personnel',
    description: 'Création d\'un coach ia esport.',
    detailedDescription: 'Plateforme de coaching eSport utilisant l\'intelligence artificielle pour analyser les performances des joueurs et fournir des recommandations personnalisées.',
    technologies: ['React', 'Redux', 'Stripe', 'Firebase', 'Node.js', 'Express'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Versus',
    image: '/images/placeholder-project.svg',
    features: [
      'Analyse IA des performances de jeu',
      'Recommandations personnalisées',
      'Système de paiement intégré',
      'Authentification sécurisée',
      'Suivi de progression'
    ],
    challenges: [
      'Intégration de l\'IA pour l\'analyse des performances',
      'Mise en place du système de paiement Stripe',
      'Gestion de l\'état global avec Redux'
    ]
  },
  {
    id: 'malware',
    title: 'Malware',
    period: 'Avril 2025',
    context: 'Projet personnel, Projet cybersécurité',
    description: 'Création d\'un malware avec un botnet.',
    detailedDescription: 'Projet éducatif de cybersécurité visant à comprendre le fonctionnement des malwares et des botnets. Développé dans un environnement contrôlé à des fins d\'apprentissage.',
    technologies: ['Javascript'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Malware-',
    image: '/images/malware.png',
    features: [
      'Étude des techniques de propagation',
      'Analyse du comportement des botnets',
      'Environnement de test isolé',
      'Documentation des vulnérabilités'
    ],
    challenges: [
      'Comprendre les mécanismes de sécurité',
      'Développer dans un environnement sécurisé',
      'Documenter les risques et préventions'
    ]
  },
  {
    id: 'pokedex',
    title: 'Application Pokédex',
    period: 'Décembre 2024',
    context: 'Projet personnel',
    description: 'Création d\'une application Pokédex',
    detailedDescription: 'Application desktop complète permettant de consulter les informations détaillées sur tous les Pokémon.',
    technologies: ['C#', 'Windows Forms', 'SQL'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Pokedex',
    image: '/images/pokedex.png',
    features: [
      'Base de données complète des Pokémon',
      'Système de recherche avancé',
      'Filtres par type et génération',
      'Affichage des statistiques détaillées',
      'Interface utilisateur intuitive'
    ],
    challenges: [
      'Conception de la base de données SQL',
      'Optimisation des requêtes',
      'Création d\'une interface ergonomique'
    ]
  },
  {
    id: 'gsb',
    title: 'GSB',
    period: 'Avril 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application de gestion de stock pour une pharmacie.',
    detailedDescription: 'Système complet de gestion de stock pharmaceutique incluant le suivi des médicaments et la gestion des péremptions.',
    technologies: ['JavaScript', 'MongoDB', 'HTML/CSS', 'React', 'Node.js', 'Express'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    github: 'https://github.com/Alexandre-ab/GSB-',
    image: '/images/GSB.png',
    features: [
      'Gestion des stocks de médicaments',
      'Alertes de péremption',
      'Alertes de stock bas',
      'Génération de rapports',
      'Interface intuitive'
    ],
    challenges: [
      'Gestion des dates de péremption',
      'Système d\'alertes automatiques',
      'Génération de rapports PDF'
    ]
  },
  {
    id: 'gestion-prescription',
    title: 'Application de Gestion de Prescription',
    period: 'Janvier 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'une application bureau pour la gestion des prescriptions des patients.',
    detailedDescription: 'Application médicale permettant aux médecins de créer, modifier et gérer les prescriptions de leurs patients.',
    technologies: ['C#', 'Windows Forms', 'SQL'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Gestion-de-prescription',
    image: '/images/Medecin.png',
    features: [
      'Création de prescriptions',
      'Gestion des dossiers patients',
      'Historique des prescriptions',
      'Vérification des interactions médicamenteuses',
      'Impression des ordonnances'
    ],
    challenges: [
      'Sécurité des données médicales',
      'Vérification des interactions',
      'Interface adaptée aux professionnels de santé'
    ]
  },
  {
    id: 'bot-shell',
    title: 'Bot shell windows',
    period: 'Juin 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'un bot shell windows.',
    detailedDescription: 'Bot automatisé en ligne de commande Windows permettant d\'exécuter des tâches répétitives.',
    technologies: ['Shell', 'Windows'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Bot-shell-windows',
    image: '/images/shell.avif',
    features: [
      'Automatisation de tâches',
      'Gestion de fichiers système',
      'Scripts shell avancés',
      'Optimisation des opérations'
    ],
    challenges: [
      'Gestion des erreurs système',
      'Compatibilité Windows',
      'Sécurité des scripts'
    ]
  },
  {
    id: 'script-aveva',
    title: 'Script Batch pour Application Aveva',
    period: 'Juillet 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'un script batch pour l\'application Aveva.',
    detailedDescription: 'Script batch personnalisé pour automatiser les tâches liées à l\'application Aveva.',
    technologies: ['Batch', 'Windows'],
    skills: ['A1.1.1', 'A1.2.2', 'A1.3.2', 'A1.4.1'],
    github: 'https://github.com/Alexandre-ab/Script-batch-Aveva',
    image: '/images/aveva.png',
    features: [
      'Installation automatique',
      'Configuration des paramètres',
      'Maintenance du logiciel',
      'Réduction du temps de déploiement'
    ],
    challenges: [
      'Automatisation complète',
      'Gestion des erreurs',
      'Documentation du processus'
    ]
  },
  {
    id: 'salon-coiffure',
    title: 'Site web pour un salon de coiffure',
    period: 'Décembre 2025',
    context: 'Projet scolaire - BTS SIO',
    description: 'Développement d\'un site web pour un salon de coiffure.',
    detailedDescription: 'Site web moderne et responsive pour un salon de coiffure incluant une galerie de réalisations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Figma', 'React'],
    skills: ['A1.1.1', 'A1.1.2', 'A1.2.3', 'A1.3.1'],
    github: 'https://github.com/RyukSylux/revealBarber/tree/main',
    image: '/images/hero-background.jpg',
    features: [
      'Galerie de réalisations',
      'Système de prise de rendez-vous',
      'Présentation des services',
      'Section blog',
      'Design responsive'
    ],
    challenges: [
      'Design moderne et attractif',
      'Système de réservation',
      'Optimisation mobile'
    ]
  }
]

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <section className="section gradient-bg">
        <div className="container">
          <div className="text-center">
            <h1 className="hero-title">Projet non trouvé</h1>
            <button onClick={() => navigate('/projects')} className="btn">
              Retour aux projets
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="section gradient-bg">
      <div className="container">
        <motion.div
          initial="initial"
          animate="animate"
          className="about-container"
        >
          {/* Bouton retour */}
          <motion.button
            variants={fadeIn}
            onClick={() => navigate('/projects')}
            className="btn btn-outline"
            style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <ArrowLeftIcon style={{ width: '1.25rem', height: '1.25rem' }} />
            Retour aux projets
          </motion.button>

          {/* En-tête du projet */}
          <motion.div variants={fadeIn} className="mb-8">
            <h1 className="hero-title">{project.title}</h1>
            <p className="hero-subtitle">
              {project.period} • {project.context}
            </p>
          </motion.div>

          {/* Image principale */}
          <motion.div variants={fadeIn} className="mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="img-cover rounded-lg"
              style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }}
            />
          </motion.div>

          {/* Description détaillée */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">Description du projet</h2>
            <p className="card-text">{project.detailedDescription}</p>
          </motion.div>

          {/* Fonctionnalités */}
          {project.features && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">Fonctionnalités principales</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.features.map((feature, index) => (
                  <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--primary-light)' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Défis techniques */}
          {project.challenges && (
            <motion.div variants={fadeIn} className="card mb-8">
              <h2 className="section-title">Défis techniques</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>⚡</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Technologies */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">Technologies utilisées</h2>
            <div className="skill-tags">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Compétences SLAM */}
          <motion.div variants={fadeIn} className="card mb-8">
            <h2 className="section-title">Compétences SLAM mobilisées</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {project.skills.map((skill, index) => (
                <li key={index} className="card-text" style={{ marginBottom: '0.75rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--secondary)', fontWeight: 'bold' }}>{skill}</span>
                  <span style={{ marginLeft: '3rem', display: 'block' }}>
                    {competencesReferentiel[skill] || skill}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Liens */}
          <motion.div variants={fadeIn} className="flex gap-4" style={{ justifyContent: 'center' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Voir le code source
            </a>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Voir le projet en ligne
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

