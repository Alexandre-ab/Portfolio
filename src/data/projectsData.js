// Données des projets avec choix technologiques justifiés

export const projectsData = [
  {
    id: "gestion-conges",
    title: "Application de Gestion de Congés",
    period: "Janvier 2025",
    context: "Projet scolaire - BTS SIO",
    category: "scolaire",
    description: "Développement d'une application web pour la gestion des congés des employés.",
    detailedDescription: "Application complète de gestion des congés permettant aux employés de soumettre des demandes de congés, aux managers de les approuver ou rejeter, et aux RH de gérer l'ensemble du processus. Intègre un système de notifications en temps réel et un tableau de bord analytique pour visualiser les statistiques des congés.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "WebSocket"],
    skills: ["A1.1.1", "A1.1.2", "A1.2.3", "A1.3.1"],
    url: "https://gestion-de-cong-s-asxt.vercel.app/",
    github: "https://github.com/Alexandre-ab/Gestion-de-cong-s",
    image: "/images/conges.webp",
    featured: true,
    
    technicalChoices: [
      {
        technology: "React",
        reason: "Framework JavaScript moderne choisi pour sa capacité à créer des interfaces utilisateur dynamiques et réactives. Le système de composants réutilisables (formulaires, tableaux, modales) permet de maintenir une cohérence visuelle tout en facilitant la maintenance du code. Les hooks React (useState, useEffect, useContext) simplifient la gestion de l'état de l'application et permettent une architecture claire et maintenable."
      },
      {
        technology: "Node.js + Express",
        reason: "Stack JavaScript unifié (frontend/backend) qui facilite le partage de code, notamment pour la validation des données et les utilitaires de dates. Express offre un framework minimaliste mais puissant pour créer des API RESTful structurées. Node.js, avec son modèle événementiel non-bloquant, est particulièrement adapté pour gérer de multiples requêtes simultanées et les connexions WebSocket persistantes nécessaires aux notifications en temps réel."
      },
      {
        technology: "MongoDB",
        reason: "Base de données NoSQL flexible qui s'adapte parfaitement à l'évolution des besoins métier sans nécessiter de migrations complexes. Le format JSON natif facilite l'intégration avec Node.js et React, réduisant les conversions de données. La scalabilité horizontale de MongoDB permet de gérer une croissance importante du nombre d'utilisateurs. Les requêtes d'agrégation permettent de calculer efficacement les statistiques de congés."
      },
      {
        technology: "WebSocket (Socket.io)",
        reason: "Communication bidirectionnelle en temps réel indispensable pour les notifications instantanées. Permet d'informer immédiatement les managers des nouvelles demandes, les employés des validations/rejets, sans nécessiter de rechargement de page ou de polling côté client. Socket.io gère automatiquement les reconnexions et le fallback vers le long-polling si WebSocket n'est pas disponible."
      }
    ],
    
    architecture: {
      description: "Architecture client-serveur moderne avec séparation claire des responsabilités (principe MVC adapté)",
      layers: [
        {
          name: "Frontend React (SPA)",
          role: "Interface utilisateur responsive avec gestion de l'état local via hooks. Communication avec l'API REST pour les opérations CRUD et WebSocket pour les notifications temps réel. Routing côté client avec React Router pour une navigation fluide."
        },
        {
          name: "API REST Node.js/Express",
          role: "API RESTful suivant les standards REST (GET, POST, PUT, DELETE). Authentification JWT pour sécuriser les endpoints. Middleware de validation des données entrantes. Logique métier : calcul des soldes, vérification des chevauchements de congés, gestion des droits selon les rôles (RBAC)."
        },
        {
          name: "Base de données MongoDB",
          role: "Stockage persistant avec 4 collections principales : users (employés, managers, RH), leaves (demandes de congés), notifications (historique), settings (configuration entreprise). Indexes sur userId, status et dates pour optimiser les requêtes fréquentes."
        },
        {
          name: "Serveur WebSocket (Socket.io)",
          role: "Gestion des connexions persistantes par utilisateur. Émission d'événements ciblés (nouveauLeave, validationLeave, rejetLeave). Rooms pour grouper les utilisateurs par département et optimiser les broadcasts."
        }
      ]
    },
    
    technicalDetails: {
      "Authentification & Sécurité": "JWT (JSON Web Tokens) avec access tokens (15 min) et refresh tokens (7 jours) pour la sécurité. Tokens stockés en httpOnly cookies pour éviter les attaques XSS. Bcrypt pour le hachage des mots de passe (10 rounds). Helmet.js pour sécuriser les en-têtes HTTP. Rate limiting (100 requêtes/15min) pour prévenir les attaques DDoS.",
      "Autorisation (RBAC)": "Système de rôles basé sur 3 niveaux : Employé (soumettre/consulter ses congés), Manager (valider/rejeter pour son équipe), RH (gestion globale, paramétrage, exports). Middleware Express vérifiant les permissions sur chaque route protégée. Principe du moindre privilège appliqué.",
      "Base de données": "Modèles Mongoose avec validation stricte des schémas (types, required, enum). Hooks pre-save pour calculer automatiquement les soldes. Indexes composés sur {userId: 1, startDate: 1} et {status: 1, createdAt: -1} pour optimiser les requêtes de liste et recherche. Transactions MongoDB pour garantir la cohérence lors des opérations multiples.",
      "API RESTful": "Architecture REST standard : GET /api/leaves (liste), POST /api/leaves (création), PUT /api/leaves/:id (modification), DELETE /api/leaves/:id (suppression). Pagination avec skip/limit, filtrage par status/date, tri paramétrable. Réponses normalisées {success, data, message, pagination}. Gestion d'erreurs centralisée avec codes HTTP appropriés.",
      "Performance": "Lazy loading des composants React avec React.lazy() et Suspense. Code splitting automatique par route. Debouncing sur les champs de recherche (500ms). Cache côté client pour les données de référence (utilisateurs, départements). Pagination côté serveur pour limiter la charge.",
      "Déploiement": "Frontend hébergé sur Vercel avec CI/CD automatique depuis GitHub. Backend déployé sur Railway avec monitoring. Variables d'environnement sécurisées. CORS configuré pour autoriser uniquement le domaine frontend."
    },
    
    features: [
      "Système de demande de congés en ligne avec calendrier interactif",
      "Workflow d'approbation multi-niveaux (validation manager puis RH)",
      "Notifications en temps réel via WebSocket (nouveauté, validation, rejet)",
      "Tableau de bord analytique avec graphiques (congés par mois, par type, par département)",
      "Gestion automatique des soldes de congés (CP, RTT, congés exceptionnels)",
      "Export des données en PDF (planning d'équipe, historique individuel)",
      "Calendrier d'équipe pour visualiser les absences et éviter les conflits",
      "Système de commentaires entre employés et managers",
      "Paramétrage RH (soldes initiaux, types de congés, règles métier)"
    ],
    
    challenges: [
      "Mise en place d'un système de notifications en temps réel avec WebSocket tout en gérant les déconnexions/reconnexions",
      "Gestion fine des droits d'accès selon les rôles (employé, manager, RH) avec middleware Express personnalisé",
      "Optimisation des performances pour gérer un grand nombre d'utilisateurs (indexation MongoDB, pagination)",
      "Calcul automatique et fiable des soldes de congés avec prise en compte des jours fériés et weekends",
      "Gestion des conflits de dates (chevauchements) et validation business (solde suffisant, délai de prévenance)"
    ],

    difficulties: [
      "Les connexions WebSocket se coupaient silencieusement sans erreur visible côté client. J'ai passé deux jours à comprendre pourquoi, avant de réaliser qu'il fallait implémenter un heartbeat manuellement — rien dans la doc de Socket.io ne m'avait préparé à ça.",
      "Mon premier modèle de permissions était trop simple et ne couvrait pas les cas limites (un manager qui est aussi RH, un employé responsable d'un sous-service). J'ai dû refaire toute l'architecture des rôles à mi-projet, ce qui a coûté beaucoup de temps.",
      "J'avais clairement sous-estimé la complexité du backend : l'API m'a pris deux fois plus longtemps que prévu, et j'ai dû sabrer certaines fonctionnalités pour tenir les délais."
    ],

    learnings: [
      "Modéliser les données et les flux métier sur papier avant de coder évite des refactorisations coûteuses. J'ai appris ça à mes dépens à mi-projet.",
      "Le debugging WebSocket en production est un autre monde qu'en local. Les logs structurés et les outils réseau ne sont pas un luxe — ils sont indispensables.",
      "Un système RBAC mal pensé dès le départ est à la fois un risque de sécurité et un cauchemar à corriger. La modélisation des droits mérite autant d'attention que le code lui-même."
    ],

    futureEnhancements: [
      "Intégration avec des calendriers externes (Google Calendar, Outlook) pour synchroniser les congés",
      "Module de statistiques avancées avec graphiques interactifs (Chart.js ou Recharts) et prédictions IA",
      "Application mobile React Native pour soumettre et consulter des congés en déplacement",
      "Export automatique vers les logiciels de paie (format CSV, API)",
      "Intelligence artificielle pour prédire les périodes de forte demande et suggérer des dates alternatives",
      "Système de délégation temporaire de droits (manager remplacé pendant ses congés)",
      "Module de gestion des astreintes et heures supplémentaires"
    ]
  },

  {
    id: "versus",
    title: "Versus - Coach IA eSport",
    period: "Décembre 2024",
    context: "Projet personnel",
    category: "personnel",
    description: "Plateforme de coaching eSport propulsée par l'intelligence artificielle.",
    detailedDescription: "Plateforme innovante de coaching eSport utilisant l'intelligence artificielle pour analyser automatiquement les performances des joueurs et fournir des recommandations personnalisées basées sur des milliers de parties analysées. Intègre un système de paiement pour les analyses premium et un suivi de progression sur le long terme.",
    technologies: ["React", "Redux", "Stripe", "Firebase", "Node.js", "Express", "OpenAI API"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Versus",
    image: "/images/placeholder-project.svg",
    
    technicalChoices: [
      {
        technology: "React",
        reason: "Framework frontend moderne permettant de créer une interface utilisateur complexe et hautement performante. Idéal pour afficher en temps réel les analyses IA, les statistiques de jeu et les graphiques de progression. La composition de composants permet de créer des dashboards modulaires et réutilisables."
      },
      {
        technology: "Redux",
        reason: "Gestion d'état centralisée indispensable pour une application complexe. Permet de synchroniser les données entre les différents composants (profil joueur, analyses en cours, historique, abonnements, recommandations IA) sans prop drilling. Redux DevTools facilite considérablement le debugging. Les middleware Redux-Thunk gèrent les appels API asynchrones de manière élégante."
      },
      {
        technology: "Firebase (Auth + Firestore)",
        reason: "Solution Backend-as-a-Service offrant authentification OAuth (Google, Discord, Twitch), base de données temps réel (Firestore), et hosting. Réduit considérablement le temps de développement et les coûts d'infrastructure. Firestore permet de stocker les profils joueurs, historiques d'analyses et sessions avec synchronisation temps réel. Firebase Functions pour le backend serverless."
      },
      {
        technology: "Stripe",
        reason: "Leader mondial du paiement en ligne, offrant une API simple, sécurisée et bien documentée. Gère automatiquement la conformité PCI-DSS (aucune donnée bancaire stockée côté application). Support natif des abonnements récurrents pour le modèle de coaching mensuel. Webhooks pour synchroniser l'état des paiements avec Firestore."
      },
      {
        technology: "OpenAI API",
        reason: "Utilisation de modèles de machine learning avancés (GPT-4) pour analyser les replays de jeu et générer des recommandations en langage naturel. Traitement des données de performance (APM, précision, positionnement) pour identifier les points faibles et suggérer des axes d'amélioration. Fine-tuning possible sur des données spécifiques à chaque jeu eSport."
      }
    ],
    
    architecture: {
      description: "Architecture moderne serverless avec intégration IA et paiements sécurisés",
      layers: [
        {
          name: "Frontend React + Redux",
          role: "Single Page Application avec state management global. Composants pour dashboard, analyse IA, profil, abonnements. Visualisation des données avec bibliothèques de graphiques (Recharts). Routing dynamique basé sur le niveau d'abonnement."
        },
        {
          name: "Firebase Authentication",
          role: "Authentification multi-providers (Email/Password, Google, Discord, Twitch). Gestion sécurisée des sessions utilisateurs. Custom claims pour gérer les rôles (free, premium, pro). Tokens JWT automatiquement gérés."
        },
        {
          name: "Cloud Functions (Serverless)",
          role: "Backend serverless Node.js : traitement des webhooks Stripe, déclenchement des analyses IA via OpenAI API, génération de rapports PDF, envoi d'emails de notification. Auto-scaling automatique selon la charge."
        },
        {
          name: "Firestore (NoSQL Database)",
          role: "Base de données temps réel pour profils utilisateurs, historiques d'analyses, sessions de jeu, recommandations IA, abonnements. Structure en collections/documents optimisée pour les requêtes. Règles de sécurité Firestore pour l'accès aux données."
        },
        {
          name: "Moteur IA (OpenAI)",
          role: "Analyse des replays de jeu via API. Extraction des métriques clés (APM, K/D, précision, économie, positionnement). Scoring automatique de 0 à 100 sur chaque catégorie. Génération de recommandations personnalisées en langage naturel."
        }
      ]
    },
    
    technicalDetails: {
      "Intelligence Artificielle": "Intégration de l'API OpenAI (GPT-4) avec prompts engineering spécifiques pour l'analyse eSport. Extraction de métriques : APM (Actions Par Minute), précision de visée, positionnement stratégique, gestion de l'économie, timing des compétences. Algorithme de scoring propriétaire : agrégation pondérée des métriques en score global 0-100. Comparaison avec base de données de joueurs du même niveau (percentile).",
      "Système de Paiement": "Intégration complète Stripe : Checkout Session pour paiements one-shot (analyse unique), Stripe Billing pour abonnements récurrents (mensuel/annuel). Webhooks Stripe pour gérer les événements : paiement réussi → activation compte premium, échec → email relance, annulation → downgrade vers free. Customer Portal Stripe pour que les utilisateurs gèrent eux-mêmes leurs abonnements.",
      "Base de Données Temps Réel": "Firestore avec listeners temps réel : onSnapshot() pour mise à jour instantanée du profil après chaque analyse. Structure optimisée : collection users/{uid}/analyses/{analysisId} pour organiser les données. Indexes composés pour requêtes complexes (tri par date + filtre par jeu). Rules Firestore strictes : read/write uniquement si auth.uid == userId.",
      "Performance & Optimisation": "Lazy loading des routes React avec React.lazy() et Suspense. Code splitting automatique par route avec Webpack. Memoization des composants coûteux avec React.memo(). Images optimisées et lazy loaded. Cache des analyses récentes en localStorage. Debouncing des recherches (300ms).",
      "Sécurité": "Firebase Security Rules pour restreindre l'accès aux données sensibles. Validation côté serveur dans Cloud Functions avant toute écriture Firestore. Clés API (OpenAI, Stripe) stockées dans Firebase Environment Config (jamais côté client). Rate limiting sur les Cloud Functions (max 10 analyses/heure pour free tier)."
    },
    
    features: [
      "Analyse IA complète des performances de jeu en quelques secondes",
      "Recommandations personnalisées basées sur le niveau et le style de jeu",
      "Système de paiement sécurisé avec Stripe (one-shot ou abonnement)",
      "Authentification multi-providers (Google, Discord, Twitch)",
      "Dashboard de suivi de progression avec graphiques interactifs",
      "Historique complet des analyses avec évolution des scores",
      "Comparaison avec d'autres joueurs du même niveau (percentile)",
      "Suggestions d'exercices ciblés pour améliorer les points faibles",
      "Système de badges et achievements pour gamifier la progression"
    ],
    
    challenges: [
      "Intégration de l'IA OpenAI avec prompts engineering pour générer des analyses pertinentes et actionnables",
      "Mise en place du système de paiement Stripe avec gestion complète des webhooks et des états d'abonnement",
      "Gestion de l'état global complexe avec Redux (analyses, utilisateur, abonnements, UI) sans problèmes de performance",
      "Optimisation des coûts d'API OpenAI en cachant les analyses similaires et en limitant le nombre de tokens",
      "Sécurisation complète de l'application avec Firebase Rules et validation serveur"
    ],

    difficulties: [
      "Une erreur dans une boucle de test m'a généré plusieurs euros de frais OpenAI en quelques minutes. Ça m'a obligé à revoir toute ma stratégie de cache et à implémenter des limites de dépenses — une leçon douloureuse mais efficace.",
      "Intégrer les webhooks Stripe en local était une vraie galère : ngrok cassait le tunnel à chaque redémarrage, et déboguer les événements de paiement sans environnement stable prenait un temps fou.",
      "Redux m'a semblé sur-architecturé pour l'état du projet. J'ai passé plus de temps à gérer le boilerplate qu'à écrire de la logique métier, ce qui a soulevé la question : est-ce qu'on choisit les bons outils par habitude ou par réel besoin ?"
    ],

    learnings: [
      "Toujours estimer les coûts d'API avant de coder en production. Les LLM peuvent devenir très coûteux rapidement — le prototypage doit inclure des garde-fous budgétaires dès le début.",
      "Stripe est bien documenté, mais comprendre la différence entre les états d'un PaymentIntent et d'un abonnement récurrent demande du temps. Lire la doc en entier avant de coder évite des surprises.",
      "Firebase est excellent pour avancer vite, mais le vendor lock-in est réel. Il faut en avoir conscience avant de construire toute son architecture dessus."
    ],

    futureEnhancements: [
      "Support de nouveaux jeux eSport populaires (League of Legends, Valorant, CS:GO, Dota 2)",
      "Système de coaching en direct par visioconférence avec partage d'écran",
      "Marketplace pour connecter joueurs amateurs et coachs professionnels certifiés",
      "Module de prédiction de matchs avec IA basée sur l'historique des équipes",
      "Application mobile native (React Native) pour suivre sa progression en déplacement",
      "Mode Team Analysis pour analyser les performances d'une équipe complète",
      "Intégration avec Twitch pour analyser automatiquement les streams en direct"
    ]
  },

  {
    id: "malware",
    title: "Malware Éducatif",
    period: "Avril 2025",
    context: "Projet personnel - Cybersécurité",
    category: "personnel",
    description: "Étude approfondie des malwares et botnets dans un environnement contrôlé.",
    detailedDescription: "Projet éducatif de cybersécurité visant à comprendre en profondeur le fonctionnement des malwares, des botnets et des techniques d'attaque. Développé entièrement dans un environnement virtualisé isolé à des fins d'apprentissage et de sensibilisation. L'objectif est de mieux comprendre les menaces pour mieux s'en protéger.",
    technologies: ["JavaScript", "Node.js", "Cryptographie", "Réseau (TCP/WebSocket)", "Virtualisation"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Malware-",
    image: "/images/malware.png",
    
    technicalChoices: [
      {
        technology: "JavaScript (Node.js)",
        reason: "Langage multiplateforme permettant d'exécuter le malware sur Windows, Linux et macOS sans recompilation. La nature interprétée de JavaScript facilite l'obfuscation du code et rend le reverse engineering plus complexe. Node.js offre des APIs natives puissantes pour interagir avec le système de fichiers (fs), les processus (child_process), et le réseau (net, http). La large adoption de Node.js rend les exécutables moins suspects pour certains antivirus."
      },
      {
        technology: "Environnement Virtualisé (VirtualBox)",
        reason: "Impératif absolu pour des raisons éthiques, légales et de sécurité. L'environnement complètement isolé (sandbox) empêche toute propagation accidentelle sur des systèmes réels. Snapshots VirtualBox permettent de revenir à un état propre après chaque test. Réseau en mode Internal Network pour isoler les VMs du réseau réel tout en permettant la communication C&C entre VMs."
      },
      {
        technology: "Wireshark",
        reason: "Outil d'analyse réseau professionnel essentiel pour observer et comprendre les communications du botnet. Permet d'identifier les patterns de communication Command & Control, les protocoles utilisés, la fréquence des heartbeats. Capture de paquets pour analyser les données échangées et vérifier l'efficacité du chiffrement. Indispensable pour le reverse engineering de malwares réels."
      },
      {
        technology: "Cryptographie (crypto module Node.js)",
        reason: "Chiffrement AES-256 des communications entre bots et serveur C&C pour éviter la détection par analyse réseau (DPI - Deep Packet Inspection). Hachage SHA-256 pour vérifier l'intégrité des commandes reçues. Génération de clés uniques par bot pour limiter la compromission globale. Étude des techniques de chiffrement utilisées par les malwares modernes."
      }
    ],
    
    architecture: {
      description: "Architecture botnet classique Command & Control (C&C) à des fins strictement éducatives",
      layers: [
        {
          name: "Serveur C&C (Command & Control)",
          role: "Serveur central Node.js qui envoie les commandes aux bots infectés. Interface web d'administration pour visualiser les bots connectés, envoyer des commandes, consulter les logs. Collecte les informations des machines compromises (OS, IP, processus). Gestion de la persistance des connexions et des reconnexions."
        },
        {
          name: "Bot (Agent malveillant)",
          role: "Script Node.js autonome s'exécutant sur la machine cible. Se connecte automatiquement au serveur C&C au démarrage. Écoute les commandes (exécution de scripts, collecte d'infos système, téléchargement de fichiers). Envoie régulièrement des heartbeats pour signaler son état. Techniques de persistence étudiées : registre Windows, crontab Linux, LaunchAgents macOS."
        },
        {
          name: "Communication Chiffrée",
          role: "Canal de communication chiffré AES-256 entre C&C et bots. Protocole personnalisé sur TCP ou WebSocket. Chaque message contient : ID bot, timestamp, type de commande, payload chiffré, signature HMAC. Heartbeat toutes les 30 secondes pour maintenir la connexion et détecter les bots offline."
        },
        {
          name: "Module de Persistence",
          role: "Mécanismes pour que le bot survive aux redémarrages. Windows : clé Run dans HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run. Linux : crontab @reboot. Copie du bot dans AppData (Windows) ou ~/.config (Linux) avec nom anodin. Service Windows ou daemon Linux pour exécution en arrière-plan."
        }
      ]
    },
    
    technicalDetails: {
      "Techniques de Persistence": "Windows : ajout au registre HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run avec valeur pointant vers le bot. Création de tâches planifiées Windows Task Scheduler pour exécution automatique. Linux : ajout au crontab (@reboot) ou création de service systemd. macOS : LaunchAgents dans ~/Library/LaunchAgents/. Copie du bot dans répertoires système avec noms anodins (svchost.js, system-update.js).",
      "Obfuscation du Code": "Minification et uglification du code JavaScript avec Terser. Encodage des strings sensibles en Base64. Chiffrement des payloads avec clés dynamiques. Utilisation de packer (pkg) pour compiler le script Node.js en exécutable natif. Polymorphisme du code : modification automatique des signatures à chaque déploiement. Injection de code mort pour tromper l'analyse statique.",
      "Communication C&C": "Protocole de communication personnalisé : messages JSON chiffrés en AES-256-CBC. Structure : {botId, timestamp, command, args, signature}. Commandes supportées : EXEC (exécuter script), INFO (collecter infos système), DOWNLOAD (télécharger fichier), UPDATE (mettre à jour le bot), UNINSTALL (auto-suppression). Heartbeat toutes les 30s : {botId, status, uptime}. Fallback sur plusieurs domaines C&C si l'un est bloqué (Domain Generation Algorithm - DGA).",
      "Détection & Évasion": "Analyse des signatures antiviruses : test sur VirusTotal pour identifier les patterns détectés. Étude des heuristiques de détection comportementale. Techniques d'évasion : sleep aléatoire pour éviter l'analyse en sandbox, détection de VM (vérification de registre, processus suspects), anti-debugging (IsDebuggerPresent). Limitation volontaire des actions suspectes (pas de keylogger, pas de ransomware) pour rester sous le radar.",
      "Éthique & Légalité": "⚠️ AVERTISSEMENT : Ce projet est strictement éducatif et développé dans un environnement 100% isolé. Aucune utilisation malveillante. Aucun test sur systèmes réels non autorisés. Le but est de comprendre les menaces pour mieux les prévenir et développer des contre-mesures. Respect absolu de la loi et de l'éthique en cybersécurité."
    },
    
    features: [
      "Serveur Command & Control avec interface web d'administration",
      "Communication chiffrée AES-256 entre C&C et bots",
      "Système de heartbeat pour monitoring des bots actifs",
      "Collecte d'informations système (OS, IP, processus, utilisateur)",
      "Exécution de commandes à distance sur les bots",
      "Mécanismes de persistence multi-plateformes (Windows, Linux, macOS)",
      "Obfuscation avancée du code pour évasion antivirus",
      "Domain Generation Algorithm (DGA) pour fallback C&C",
      "Auto-suppression à distance (commande UNINSTALL)"
    ],
    
    challenges: [
      "Comprendre en profondeur les mécanismes de sécurité des OS modernes (Windows Defender, SELinux, Gatekeeper)",
      "Développer dans un environnement 100% sécurisé sans risque de propagation accidentelle",
      "Implémenter un système de communication C&C robuste avec gestion des déconnexions/reconnexions",
      "Documenter exhaustivement les vulnérabilités et techniques pour fins éducatives",
      "Maintenir une approche éthique tout au long du projet"
    ],

    difficulties: [
      "Configurer un réseau isolé entre plusieurs VMs — sans accès internet mais avec communication C&C interne — m'a demandé plusieurs tentatives. Les modes réseau VirtualBox (NAT, Bridge, Internal) ne sont pas intuitifs et j'ai fait plusieurs fausses routes.",
      "Tester les mécanismes de persistence signifiait que des fichiers 'malveillants' survivaient aux redémarrages. J'ai dû restaurer des snapshots propres plusieurs fois après des erreurs, ce qui rendait le cycle de test long et contraignant.",
      "Maintenir une rigueur éthique tout au long du projet était une contrainte mentale réelle : à chaque fonctionnalité développée, il fallait se demander si on restait bien dans le cadre éducatif, ce qui n'est pas toujours une ligne évidente."
    ],

    learnings: [
      "La cybersécurité offensive et défensive sont les deux faces de la même pièce. Pour bien défendre un système, il faut comprendre concrètement comment il peut être attaqué.",
      "L'isolation des environnements de test n'est pas optionnelle — même un projet éducatif peut causer des dommages si le périmètre n'est pas strictement contrôlé.",
      "Documenter chaque étape d'un projet sensible force une réflexion sur ce qu'on fait et pourquoi. Cette rigueur est ce qui distingue la recherche en sécurité d'une activité irresponsable."
    ],

    futureEnhancements: [
      "Module de détection et d'analyse de malwares réels (honeypot)",
      "Développement de signatures antivirus personnalisées",
      "Création d'un système IDS/IPS (Intrusion Detection/Prevention) pour détecter les botnets",
      "Analyse de malwares avancés (ransomware, rootkits) en environnement isolé",
      "Publication d'articles techniques et guides de prévention",
      "Participation à des CTF (Capture The Flag) en cybersécurité",
      "Contribution à des projets open-source de sécurité"
    ]
  },

  {
    id: "pokedex",
    title: "Application Pokédex",
    period: "Décembre 2024",
    context: "Projet personnel",
    category: "personnel",
    description: "Application desktop complète pour explorer l'univers Pokémon.",
    detailedDescription: "Application desktop Windows permettant de consulter les informations détaillées sur tous les Pokémon (9 générations, 1000+ Pokémon). Interface graphique moderne avec recherche avancée, filtres multiples et affichage des statistiques, types, évolutions et descriptions. Base de données SQL locale pour des performances optimales.",
    technologies: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "Entity Framework"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Pokedex",
    image: "/images/pokedex.png",
    
    technicalChoices: [
      {
        technology: "C# & .NET Framework",
        reason: "Langage orienté objet robuste et performant, idéal pour le développement d'applications Windows desktop. .NET Framework offre une large bibliothèque de classes pour gérer l'interface utilisateur, les données et la logique métier. Typage fort qui réduit les erreurs à l'exécution. Excellente intégration avec Visual Studio pour le debugging et le profiling. LINQ pour requêtes expressives sur les collections."
      },
      {
        technology: "Windows Forms",
        reason: "Framework GUI éprouvé pour créer rapidement des interfaces utilisateur Windows natives. Designer visuel intégré à Visual Studio pour disposition des contrôles en drag-and-drop. Large choix de contrôles (DataGridView, PictureBox, ComboBox) adaptés à l'affichage de données tabulaires et d'images. Event-driven architecture naturelle pour gérer les interactions utilisateur."
      },
      {
        technology: "SQL Server LocalDB",
        reason: "Base de données relationnelle légère parfaite pour applications desktop. Pas de serveur séparé à installer, déployable avec l'application. Support complet de SQL avec transactions, contraintes d'intégrité, indexes. Performances excellentes pour requêtes complexes avec JOINs (Pokémon ↔ Types ↔ Évolutions). SQL Server Management Studio pour conception et debugging."
      },
      {
        technology: "Entity Framework",
        reason: "ORM (Object-Relational Mapping) qui simplifie l'accès aux données en mappant les tables SQL sur des classes C#. Code-First ou Database-First selon les besoins. LINQ to Entities pour écrire des requêtes typées et vérifiées à la compilation. Migrations automatiques pour gérer l'évolution du schéma de base de données. Lazy loading et eager loading pour optimiser les performances."
      }
    ],
    
    architecture: {
      description: "Architecture en couches (3-tier) séparant présentation, logique métier et accès aux données",
      layers: [
        {
          name: "Couche Présentation (Windows Forms)",
          role: "Interfaces utilisateur : formulaire principal avec liste des Pokémon (DataGridView), formulaire détails avec onglets (infos, stats, évolutions), formulaire recherche avancée. Binding de données bidirectionnel entre contrôles et objets métier. Gestion des événements utilisateur (clic, sélection, filtrage)."
        },
        {
          name: "Couche Logique Métier (Business Layer)",
          role: "Classes métier : Pokemon, Type, Evolution, Stats. Logique de calcul : power level, match-ups types (efficacités), chaîne d'évolution complète. Validation des données avant persistance. Conversions et formatages (ex: convertir height en pieds/pouces). Design patterns : Repository, Singleton (pour cache)."
        },
        {
          name: "Couche Accès Données (Data Layer)",
          role: "DbContext Entity Framework avec DbSet<Pokemon>, DbSet<Type>, DbSet<Evolution>. Repositories pour encapsuler les requêtes LINQ. Gestion de la connexion et des transactions. Méthodes CRUD (Create, Read, Update, Delete). Requêtes optimisées avec Include() pour eager loading des relations."
        },
        {
          name: "Base de Données SQL Server",
          role: "Tables : Pokemon (PK: Id, colonnes: Name, Height, Weight, Generation...), Types (liaison many-to-many via table PokemonTypes), Evolutions (FK: FromPokemonId, ToPokemonId, Method). Indexes sur Name, Generation, Type pour recherches rapides. Contraintes d'intégrité référentielle."
        }
      ]
    },
    
    technicalDetails: {
      "Base de Données SQL": "Schéma relationnel normalisé (3NF). Table Pokemon : colonnes Id, Name, Generation, HP, Attack, Defense, Speed, Type1, Type2, Description, ImagePath. Relation many-to-many Pokemon ↔ Types via table junction PokemonTypes. Table Evolutions : FromPokemonId, ToPokemonId, Level, Method. Indexes clustered sur PK, non-clustered sur Name (recherche), Generation (filtre). Procédures stockées pour requêtes complexes (chaîne d'évolution).",
      "Optimisation Requêtes": "Entity Framework avec Eager Loading (.Include(p => p.Types)) pour éviter le problème N+1. Requêtes LINQ compilées pour performances. Pagination côté serveur avec Skip() et Take(). Cache en mémoire (Dictionary<int, Pokemon>) des Pokémon fréquemment consultés. Requêtes asynchrones (async/await) pour ne pas bloquer l'UI thread lors du chargement.",
      "Interface Utilisateur": "DataGridView avec colonnes personnalisées (image, nom, types, stats). Filtres dynamiques : ComboBox pour génération et type, TextBox avec recherche en temps réel (TextChanged event). Tri sur colonnes (clic header). Double-clic sur ligne pour ouvrir détails. PictureBox pour afficher l'image du Pokémon (chargement async). TabControl pour organiser infos/stats/évolutions. Palette de couleurs cohérente avec thème Pokémon.",
      "Gestion Images": "Images Pokémon stockées localement dans dossier Resources/Images/. Noms de fichiers : {PokemonId}.png (ex: 001.png pour Bulbizarre). Chargement asynchrone avec Image.FromFile() pour ne pas bloquer l'UI. Image placeholder si fichier manquant. Redimensionnement automatique selon taille PictureBox (SizeMode = Zoom).",
      "Patterns & Architecture": "Pattern Repository pour abstraction accès données. Interface IPokemonRepository avec implémentation PokemonRepository. Singleton pour classe Cache. Pattern Observer (events) pour notifier l'UI des changements. Separation of Concerns : UI ← Business Logic ← Data Access. Injection de dépendances manuelle (constructor injection)."
    },
    
    features: [
      "Base de données complète de 1000+ Pokémon sur 9 générations",
      "Système de recherche avancée par nom, numéro ou description",
      "Filtres multiples par type, génération, statistiques",
      "Affichage détaillé : stats, types, capacités, évolutions",
      "Graphiques radar pour visualiser les stats (HP, Attack, Defense...)",
      "Chaîne d'évolution complète avec méthodes et niveaux requis",
      "Tableau des efficacités types (forces/faiblesses)",
      "Interface utilisateur moderne et responsive",
      "Export de la liste en CSV/Excel",
      "Mode Comparaison pour comparer 2 Pokémon côte à côte"
    ],
    
    challenges: [
      "Conception d'un schéma de base de données normalisé gérant les relations complexes (types, évolutions)",
      "Optimisation des requêtes SQL et LINQ pour performances avec 1000+ entrées",
      "Création d'une interface utilisateur ergonomique et intuitive avec Windows Forms",
      "Gestion efficace du chargement des images pour éviter les ralentissements",
      "Implémentation de filtres et recherche en temps réel sans latence perceptible"
    ],

    difficulties: [
      "Venir du développement web JavaScript, passer à C# et Windows Forms a demandé un effort d'adaptation plus important que prévu. Ce n'est pas juste la syntaxe — c'est toute la façon de penser l'UI (event-driven vs déclaratif) qui est fondamentalement différente.",
      "Importer les données de 1000+ Pokémon avec leurs formes alternatives, Méga-évolutions et formes régionales était bien plus complexe que prévu. Chaque exception cassait mes parsers et il a fallu traiter des dizaines de cas particuliers manuellement.",
      "La relation many-to-many entre Pokémon et types, couplée aux chaînes d'évolution ramifiées (Évoli → 8 évolutions possibles), m'a donné du fil à retordre pour la normalisation SQL et les requêtes LINQ associées."
    ],

    learnings: [
      "La modélisation relationnelle exige une réflexion en amont très différente du NoSQL. Un schéma mal normalisé dès le début se paye à chaque requête complexe — et le corriger en cours de route est douloureux.",
      "Windows Forms est daté, mais apprendre ses contraintes m'a donné une meilleure compréhension de pourquoi les frameworks modernes ont évolué vers des approches déclaratives. Comprendre l'ancien aide à apprécier le nouveau.",
      "L'import de données depuis des sources externes n'est jamais trivial. Il faut systématiquement prévoir les cas d'exception et les données mal formées — le cas 'normal' est souvent minoritaire."
    ],

    futureEnhancements: [
      "Ajout des générations 9+ au fur et à mesure des nouvelles sorties",
      "Module Team Builder pour constituer et tester des équipes compétitives",
      "Calculateur de dégâts avec prise en compte des types, niveaux, natures",
      "Import/Export d'équipes au format Showdown",
      "Intégration API PokéAPI pour données toujours à jour",
      "Mode Pokédex interactif avec sons et animations",
      "Support multilingue (FR/EN/ES/JP)"
    ]
  },

  {
    id: "gsb",
    title: "GSB - Gestion Pharmaceutique",
    period: "Avril 2025",
    context: "Projet scolaire - BTS SIO",
    category: "scolaire",
    description: "Système complet de gestion de stock pour pharmacie.",
    detailedDescription: "Application web de gestion de stock pharmaceutique incluant le suivi en temps réel des médicaments, la gestion automatique des péremptions avec système d'alertes, et la génération de rapports pour l'inventaire. Respecte les normes pharmaceutiques et inclut un système de traçabilité complet.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "HTML/CSS", "JavaScript"],
    skills: ["A1.1.1", "A1.1.2", "A1.2.3", "A1.3.1"],
    github: "https://github.com/Alexandre-ab/GSB-",
    image: "/images/GSB.png",
    
    technicalChoices: [
      {
        technology: "React",
        reason: "Permet de créer une interface dynamique pour gérer en temps réel les stocks de médicaments. Les composants React facilitent l'affichage de listes filtrables et triables (table de médicaments avec recherche instantanée). Le state management local (useState, useContext) est suffisant pour cette application de taille moyenne. Les hooks useEffect permettent de rafraîchir automatiquement les alertes de péremption sans rechargement de page."
      },
      {
        technology: "Node.js + Express",
        reason: "Backend JavaScript cohérent avec le frontend React, permettant de partager des utilitaires (validation, formatage dates). Express structure l'API REST pour les opérations CRUD sur les médicaments de manière claire et maintenable. Middleware express-validator pour validation robuste des données entrantes. Node.js gère efficacement les requêtes concurrentes pour les mises à jour de stock en temps réel."
      },
      {
        technology: "MongoDB",
        reason: "Base NoSQL adaptée aux données pharmaceutiques avec schéma flexible. Permet d'ajouter facilement de nouveaux champs (numéro de lot, certifications, origine) sans migration complexe. Les agrégations MongoDB calculent efficacement les statistiques (stock total par catégorie, valeur inventaire). Index TTL (Time To Live) pour archiver automatiquement les entrées périmées après un délai réglementaire."
      },
      {
        technology: "Node-cron",
        reason: "Bibliothèque de planification de tâches pour exécuter automatiquement le scanner de péremptions chaque jour. Syntaxe cron classique (0 6 * * *) pour programmer l'exécution à 6h du matin. Légère et fiable, parfaite pour les tâches récurrentes comme la vérification des dates de péremption et la génération d'alertes automatiques."
      }
    ],
    
    architecture: {
      description: "Architecture MVC adaptée au domaine pharmaceutique avec système d'alertes automatisé et traçabilité complète",
      layers: [
        {
          name: "Frontend React",
          role: "Interfaces : dashboard avec indicateurs clés (stock bas, péremptions proches, valeur totale), liste des médicaments avec recherche/filtres avancés, formulaires d'entrée/sortie de stock avec scan code-barres, page alertes prioritaires, génération et export de rapports. Composants réutilisables : MedicineCard, AlertBanner, StockTable, ReportGenerator."
        },
        {
          name: "API REST Express",
          role: "Routes RESTful : GET /api/medicines (liste paginée), POST /api/medicines (ajout), PUT /api/medicines/:id/stock (mise à jour stock), GET /api/alerts (alertes actives), GET /api/reports (génération rapport). Middleware : validation des données (nom requis, quantité > 0, date péremption future), authentification JWT, logging détaillé. Cron job quotidien (6h) pour scanner péremptions et générer alertes."
        },
        {
          name: "Base de données MongoDB",
          role: "Collection Medicines : {name, category, quantity, minStock, expiryDate, batchNumber, supplier, price, cipCode}. Collection Alerts : {medicineId, type (low_stock/expiry), severity, date, resolved, resolvedBy}. Collection Transactions : {medicineId, type (in/out), quantity, date, user, reason} pour traçabilité complète et audit. Collection Reports : cache des rapports générés."
        },
        {
          name: "Système de Notifications",
          role: "Service d'envoi d'emails automatiques (Nodemailer) aux pharmaciens lors d'alertes critiques. Dashboard temps réel avec badge de notification. Logs d'audit complets pour conformité réglementaire. Export automatique hebdomadaire vers autorités sanitaires si requis."
        }
      ]
    },
    
    technicalDetails: {
      "Gestion Péremptions": "Cron job (node-cron) exécuté quotidiennement à 6h pour scanner toutes les dates de péremption. Alertes à 3 niveaux de priorité : 🟢 >3 mois (info préventive), 🟡 1-3 mois (warning à surveiller), 🔴 <1 mois (urgent, retrait immédiat). Calcul automatique avec moment.js ou date-fns. Notifications email automatiques aux pharmaciens responsables. Marquage automatique statut périmé dans base avec blocage des sorties de stock.",
      "Système Alertes Automatiques": "Deux types principaux : alerte stock bas (quantity < minStock personnalisé par médicament) et alerte péremption. Chaque alerte possède un statut (active/resolved/archived) et historique complet. Badge rouge sur icône cloche avec nombre d'alertes non résolues. Tri intelligent par priorité (urgence puis date). Résolution manuelle par pharmacien avec commentaire obligatoire (action prise, commande passée...). Dashboard statistiques : alertes par mois, taux de résolution, délai moyen.",
      "Génération Rapports PDF": "Export PDF professionnel avec bibliothèque pdfkit ou puppeteer : rapport inventaire complet (liste détaillée + valeur totale par catégorie), rapport péremptions à venir (3 mois), rapport mouvements (entrées/sorties sur période). Format réglementaire avec en-tête pharmacie, logo, date, signature électronique. Export CSV/Excel avec exceljs pour analyses externes (comptabilité, statistiques). Planification d'envoi automatique mensuel par email aux autorités.",
      "Traçabilité Complète": "Chaque mouvement de stock (entrée, sortie, ajustement, péremption) enregistré dans collection Transactions avec : timestamp précis, utilisateur responsable, quantité, raison/justification, numéro de lot concerné. Permet audit complet en cas de contrôle. Conformité aux normes pharmaceutiques (Bonnes Pratiques de Dispensation). Historique inaltérable (append-only) pour prévenir fraudes.",
      "Sécurité & Conformité": "Authentification obligatoire pour toutes les opérations. Rôles : pharmacien titulaire (tous droits), préparateur (lecture + sorties), stagiaire (lecture seule). Chiffrement des données sensibles (prix d'achat). Respect RGPD pour données patients si prescriptions. Sauvegardes automatiques quotidiennes. Logs d'accès détaillés (qui a accédé à quoi et quand)."
    },
    
    features: [
      "Gestion complète des stocks de médicaments avec codes CIP",
      "Alertes automatiques de péremption (3 niveaux : info, warning, urgent)",
      "Alertes de stock bas configurables par médicament",
      "Génération de rapports PDF (inventaire, péremptions, mouvements)",
      "Traçabilité complète : historique de toutes les entrées/sorties",
      "Dashboard avec indicateurs clés (valeur stock, alertes actives, statistiques)",
      "Recherche et filtres avancés (catégorie, fournisseur, état péremption)",
      "Système d'authentification avec rôles (pharmacien, préparateur, stagiaire)",
      "Export des données en CSV/Excel pour comptabilité",
      "Scanner code-barres pour saisie rapide"
    ],
    
    challenges: [
      "Gestion précise des dates de péremption avec alertes automatiques multiniveaux sans faux positifs",
      "Système d'alertes robuste et intelligent ne manquant aucun médicament à risque",
      "Génération de rapports PDF professionnels avec mise en page complexe conforme aux normes",
      "Traçabilité complète respectant les normes pharmaceutiques strictes (BPD, BPF)",
      "Performance optimale avec grands volumes (10000+ références, 100000+ transactions)"
    ],

    difficulties: [
      "Je n'avais aucune connaissance du secteur pharmaceutique avant ce projet. Comprendre les contraintes métier réelles (BPD, niveaux d'alerte réglementaires, traçabilité obligatoire) a demandé plusieurs heures de recherche avant d'écrire la moindre ligne de code.",
      "Les calculs de dates de péremption avec fuseaux horaires et cas limites (fin de mois, passage à l'heure d'été) avaient des comportements inattendus. Les bugs liés aux dates ont été les plus difficiles à reproduire et corriger.",
      "Générer des rapports PDF bien mis en page s'est révélé bien plus difficile qu'attendu. Les bibliothèques Node.js pour PDF ont une courbe d'apprentissage abrupte, et le rendu ne correspondait pas toujours aux maquettes."
    ],

    learnings: [
      "La recherche métier est une partie à part entière du développement. Livrer une application de gestion pharmaceutique sans comprendre les normes du secteur serait une erreur potentiellement grave.",
      "La logique de dates doit être testée exhaustivement avec des cas limites : fin de mois, années bissextiles, changement d'heure. Ne jamais sous-estimer les calculs temporels.",
      "Dans un domaine critique comme la santé, les faux négatifs sont inacceptables. Mieux vaut trop d'alertes qu'un médicament périmé qui passe entre les mailles — et concevoir pour ça change les priorités."
    ],

    futureEnhancements: [
      "Lecteur de codes-barres USB pour scan rapide des médicaments à l'entrée/sortie",
      "Prédiction IA des besoins de réapprovisionnement basée sur l'historique de consommation",
      "Intégration directe avec logiciels de caisse pour déduction automatique du stock à la vente",
      "Module de gestion des commandes fournisseurs avec suivi de livraison en temps réel",
      "Application mobile (React Native) pour inventaire terrain avec scan et photo",
      "Conformité complète aux normes GS1 et pharmacopée européenne",
      "Gestion multi-pharmacies pour les chaînes (synchronisation stocks, transferts inter-officines)",
      "Module de gestion des stupéfiants avec registre sécurisé et déclarations ANSM"
    ]
  },

  {
    id: "gestion-prescription",
    title: "Application de Gestion de Prescription",
    period: "Janvier 2025",
    context: "Projet scolaire - BTS SIO",
    category: "scolaire",
    description: "Application bureau pour gestion des prescriptions médicales.",
    detailedDescription: "Application médicale desktop permettant aux médecins de créer, modifier et gérer les prescriptions de leurs patients avec vérification automatique des interactions médicamenteuses dangereuses. Gestion complète des dossiers patients, historique médical et impression d'ordonnances sécurisées conformes à la réglementation française.",
    technologies: ["C#", ".NET Framework", "Windows Forms", "SQL Server", "Crystal Reports"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Gestion-de-prescription",
    image: "/images/Medecin.png",
    
    technicalChoices: [
      {
        technology: "C# & .NET Framework",
        reason: "Langage robuste et sécurisé, essentiel pour applications médicales manipulant des données sensibles. .NET Framework offre des bibliothèques cryptographiques natives pour chiffrement des données patients. Typage fort réduit drastiquement les erreurs qui pourraient avoir des conséquences graves en milieu médical. Excellente gestion de la mémoire et garbage collection automatique. Intégration native avec Active Directory pour authentification d'entreprise."
      },
      {
        technology: "Windows Forms",
        reason: "Framework desktop éprouvé, idéal pour applications médicales nécessitant performance et fiabilité. Interface 100% native Windows, familière aux professionnels de santé. Contrôles riches (ComboBox pour médicaments, DataGridView pour historique, RichTextBox pour notes médicales). Pas de connexion internet requise, crucial en cabinet médical. Impression locale directe des ordonnances."
      },
      {
        technology: "SQL Server",
        reason: "Base de données enterprise avec sécurité renforcée pour données médicales sensibles. Chiffrement transparent des données (TDE) disponible. Transactions ACID garantissant l'intégrité des prescriptions. Sauvegardes automatiques et point-in-time recovery. Gestion fine des permissions par utilisateur (médecin, secrétaire, remplaçant). Conformité RGPD facilitée avec Row-Level Security."
      },
      {
        technology: "Crystal Reports",
        reason: "Outil professionnel de génération de rapports pour créer des ordonnances conformes à la réglementation française. Templates personnalisables incluant en-tête médecin, logo cabinet, mentions légales obligatoires. Export PDF sécurisé avec signature électronique possible. Mise en page précise respectant les formats réglementaires (taille police minimale pour lisibilité pharmacien)."
      }
    ],
    
    architecture: {
      description: "Architecture desktop 3-tier sécurisée avec base de données médicale chiffrée et système de vérification d'interactions",
      layers: [
        {
          name: "Interface Windows Forms",
          role: "Formulaires : fiche patient (identité, antécédents, allergies), créateur de prescription (recherche médicaments, posologie, durée), historique consultations, gestionnaire d'ordonnances. Validation en temps réel des champs critiques (dosage, interactions). Interface adaptée : gros boutons, police lisible, raccourcis clavier pour rapidité."
        },
        {
          name: "Couche Métier (Business Logic)",
          role: "Classe Prescription avec méthodes de validation : vérification dosage maximal, détection interactions médicamenteuses (base de données Thériaque/Vidal), calcul quantité à délivrer selon durée traitement. Classe Patient avec gestion antécédents/allergies. Service d'impression d'ordonnances sécurisées. Règles métier : médicaments contre-indiqués par âge, grossesse, allergie."
        },
        {
          name: "Couche Accès Données (DAL)",
          role: "Repository pattern : PatientRepository, PrescriptionRepository, MedicamentRepository. ADO.NET ou Entity Framework pour requêtes SQL. Stored Procedures pour opérations complexes (recherche médicament par DCI, historique patient complet). Gestion connexions avec pooling. Transactions pour garantir cohérence (prescription + lignes médicaments)."
        },
        {
          name: "Base SQL Server Sécurisée",
          role: "Tables : Patients (chiffrées), Prescriptions, LignesPrescription, Medicaments (référentiel complet avec DCI, interactions connues), Medecins, AuditLog. Indexes optimisés pour recherches fréquentes (nom patient, date prescription). Triggers pour audit automatique. Backup automatique quotidien chiffré. Conformité RGPD : pseudonymisation, droit à l'oubli."
        }
      ]
    },
    
    technicalDetails: {
      "Sécurité & RGPD": "Chiffrement AES-256 des données patients au repos (SQL Server TDE). Authentification Windows (Active Directory) ou login sécurisé avec politique mot de passe stricte (12 caractères, complexité). Logs d'audit complets : qui a consulté/modifié quel dossier patient et quand (conformité article 32 RGPD). Masquage données sensibles sauf pour médecin traitant. Gestion des consentements patients pour partage données. Droit à l'oubli implémenté (anonymisation après délai légal 20 ans).",
      "Vérification Interactions Médicamenteuses": "Base de données locale des interactions médicamenteuses (import depuis Thériaque ou Vidal). Algorithme de détection : pour chaque nouveau médicament ajouté, vérification croisée avec médicaments déjà prescrits + traitements en cours patient. Classification interactions : contre-indication absolue (blocage), précaution d'emploi (warning), interaction mineure (info). Prise en compte allergies patients (alerte si prescription pénicilline → patient allergique). Vérification posologie max (adulte/enfant/personne âgée) avec calcul selon poids si nécessaire.",
      "Impression Ordonnances": "Template Crystal Reports conforme : en-tête avec identité médecin (nom, RPPS, adresse cabinet, téléphone), date/heure prescription, identité patient (nom, prénom, âge, sécurité sociale), liste médicaments (DCI + nom commercial, posologie claire, durée traitement, quantité). Mentions légales obligatoires (À renouveler ou Non renouvelable, Ordonnance sécurisée si stupéfiants). QR Code pour vérification authenticité. Impression sur papier sécurisé en cas de stupéfiants/psychotropes.",
      "Gestion Dossiers Patients": "Fiche patient complète : état civil, coordonnées, mutuelle, médecin traitant, antécédents médicaux (maladies chroniques, chirurgies), antécédents familiaux, allergies connues, traitements en cours (avec dates début/fin). Historique consultations chronologique avec motifs, diagnostics, examens prescrits. Recherche rapide patient (nom, prénom, date naissance, numéro sécurité sociale). Export dossier PDF pour transfert confrère (avec consentement patient).",
      "Conformité Réglementaire": "Respect de la réglementation française sur ordonnances : durée maximale traitement selon classe médicament (3 mois renouvellement possible, 28 jours stupéfiants, 7 jours hypnotiques). Chevauchement ordonnances détecté automatiquement. Mention obligatoire Tiers Payant si applicable. Numérotation séquentielle ordonnances pour traçabilité. Conservation électronique 10 ans minimum (Code Santé Publique). Déclaration pharmacovigilance facilitée si effet indésirable."
    },
    
    features: [
      "Création de prescriptions médicales avec assistant intelligent",
      "Gestion complète des dossiers patients (identité, antécédents, allergies)",
      "Historique complet des prescriptions et consultations",
      "Vérification automatique des interactions médicamenteuses dangereuses",
      "Alertes allergies (médicament contre-indiqué pour ce patient)",
      "Impression d'ordonnances conformes à la réglementation française",
      "Recherche rapide de médicaments par nom ou DCI",
      "Calcul automatique de quantité à délivrer selon durée traitement",
      "Export PDF sécurisé des ordonnances",
      "Système d'audit complet (RGPD)"
    ],
    
    challenges: [
      "Sécurité et confidentialité maximale des données médicales sensibles (conformité RGPD article 9)",
      "Vérification en temps réel des interactions médicamenteuses avec base de données à jour",
      "Interface optimisée pour professionnels de santé (rapidité, ergonomie, pas d'erreurs possibles)",
      "Gestion des cas complexes (polymédication, patients âgés, insuffisance rénale)",
      "Conformité stricte à la réglementation française sur les prescriptions"
    ],

    difficulties: [
      "La réglementation française sur les prescriptions médicales est dense et technique : durées de validité différentes selon la classe du médicament, ordonnances sécurisées pour les stupéfiants, règles de chevauchement. Plusieurs lectures de textes officiels ont été nécessaires pour comprendre ce que je devais implémenter.",
      "Crystal Reports avait une courbe d'apprentissage très frustrante. Les templates d'ordonnances devaient être précis — c'est une exigence réglementaire — mais le designer n'était pas intuitif et les exports PDF avaient régulièrement des artefacts de rendu inattendus.",
      "N'ayant pas accès à Vidal ou Thériaque, j'ai dû créer manuellement une base d'interactions médicamenteuses pour les tests. C'était chronophage, et la base était forcément limitée — ce qui posait la question de la fiabilité dans un vrai contexte médical."
    ],

    learnings: [
      "Les applications médicales ont une tolérance à l'erreur proche de zéro. Cela change fondamentalement l'approche : il vaut mieux bloquer une action douteuse que laisser une incohérence passer — quitte à frustrer l'utilisateur.",
      "Crystal Reports est un outil vieillissant. Cette expérience m'a appris l'importance de choisir des outils activement maintenus et bien documentés, surtout quand le rendu final a des contraintes réglementaires.",
      "Travailler sur un domaine réglementé m'a appris à lire des textes de loi et à les traduire en règles métier concrètes. C'est une compétence que les développeurs sous-estiment souvent."
    ],

    futureEnhancements: [
      "Intégration avec DMP (Dossier Médical Partagé) pour historique complet patient",
      "Télétransmission sécurisée vers pharmacies (e-prescription)",
      "Reconnaissance vocale pour dictée des consultations (gain de temps)",
      "Intelligence artificielle pour aide au diagnostic (suggestions basées sur symptômes)",
      "Intégration avec laboratoires d'analyses pour résultats automatiques",
      "Application mobile pour consultations à domicile",
      "Module de téléconsultation avec prescription en ligne sécurisée",
      "Alertes automatiques rappels vaccination selon calendrier vaccinal"
    ]
  },

  {
    id: "bot-shell",
    title: "Bot Shell Windows",
    period: "Juin 2025",
    context: "Projet scolaire - BTS SIO",
    category: "scolaire",
    description: "Bot automatisé en ligne de commande pour administration système.",
    detailedDescription: "Bot PowerShell avancé pour automatisation complète de tâches d'administration système Windows : nettoyage automatique, sauvegardes planifiées, maintenance préventive, gestion de fichiers, monitoring système. Conçu pour réduire drastiquement le temps passé sur les opérations répétitives et améliorer la fiabilité.",
    technologies: ["PowerShell 7", "Windows CMD", "Batch", "Task Scheduler", "WMI"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Bot-shell-windows",
    image: "/images/shell.avif",
    
    technicalChoices: [
      {
        technology: "PowerShell 7",
        reason: "Langage de scripting moderne et puissant, spécialement conçu pour l'administration système Windows. Syntaxe orientée objet permettant de manipuler facilement les objets Windows (.NET). Cmdlets riches pour toutes opérations système (Get-Process, Stop-Service, Copy-Item...). Pipeline puissant pour chaîner les commandes. Gestion native des erreurs avec try/catch. Cross-platform (Windows/Linux/macOS) avec PowerShell Core."
      },
      {
        technology: "Windows Task Scheduler",
        reason: "Planificateur de tâches natif Windows pour exécution automatique des scripts selon calendrier. Déclencheurs multiples : horaire fixe (tous les jours 2h du matin), au démarrage système, à la connexion utilisateur, sur événement système. Gestion des permissions : exécution en compte SYSTEM pour accès complet. Historique d'exécution et logs intégrés. Aucune installation tierce nécessaire."
      },
      {
        technology: "WMI (Windows Management Instrumentation)",
        reason: "Interface Windows permettant d'accéder à toutes les informations système : disques, processus, services, événements, matériel. PowerShell intègre cmdlets WMI (Get-WmiObject, Get-CimInstance) pour interroger facilement le système. Permet monitoring avancé : température CPU, espace disque, services critiques. Gestion à distance possible (administration de machines distantes sur réseau)."
      },
      {
        technology: "Modules PowerShell Personnalisés",
        reason: "Création de modules réutilisables (.psm1) pour fonctions courantes : Send-EmailNotification, Backup-Data, Clean-TempFiles. Import simple avec Import-Module. Facilite maintenance : une fonction = un fichier. Versionning Git pour suivre évolutions. Possibilité de publier sur PowerShell Gallery pour partage communauté."
      }
    ],
    
    architecture: {
      description: "Architecture modulaire avec scripts spécialisés orchestrés par Task Scheduler et système de logs centralisé",
      layers: [
        {
          name: "Scripts Principaux",
          role: "MaintenanceBot.ps1 (orchestrateur principal), CleanupBot.ps1 (nettoyage disques), BackupBot.ps1 (sauvegardes automatiques), MonitorBot.ps1 (surveillance système), UpdateBot.ps1 (mises à jour logicielles). Chaque script exécutable indépendamment ou appelé par orchestrateur. Paramètres configurables via fichier JSON externe."
        },
        {
          name: "Modules Fonctionnels",
          role: "Module Logging (Write-Log, Send-Alert), Module FileManager (Clean-TempFiles, Archive-OldFiles), Module SystemInfo (Get-DiskSpace, Get-ServiceStatus), Module Backup (Backup-ToNetwork, Verify-Backup). Fonctions réutilisables à travers tous les scripts. Tests unitaires avec Pester."
        },
        {
          name: "Configuration & Logs",
          role: "Fichier config.json : chemins de sauvegarde, seuils d'alerte (espace disque < 10%), emails destinataires, exclusions. Logs centralisés dans C:\\BotLogs\\ avec rotation automatique (un fichier par jour, archivage après 30 jours). Format structuré : timestamp, niveau (INFO/WARNING/ERROR), script source, message."
        },
        {
          name: "Task Scheduler",
          role: "Tâches planifiées Windows : maintenance quotidienne (2h du matin), sauvegarde hebdomadaire (dimanche 23h), monitoring continu (toutes les 15 minutes), nettoyage mensuel (1er du mois). Déclencheurs conditionnels : nettoyage si espace disque < 15%. Permissions élevées pour accès système complet."
        }
      ]
    },
    
    technicalDetails: {
      "Nettoyage Automatique": "Suppression fichiers temporaires (C:\\Windows\\Temp, %TEMP%, C:\\Users\\*\\AppData\\Local\\Temp). Vidage corbeille tous utilisateurs. Nettoyage cache navigateurs (Chrome, Firefox, Edge). Suppression logs anciens (>90 jours). Défragmentation SSD si fragmentation > 10%. Nettoyage Windows Update (dossier SoftwareDistribution). Vérification avant suppression : fichiers système protégés jamais supprimés. Gain espace moyen : 5-20 Go.",
      "Sauvegardes Planifiées": "Stratégie 3-2-1 : 3 copies, 2 supports différents, 1 hors site. Sauvegarde complète hebdomadaire + incrémentale quotidienne. Robocopy avec options /MIR (miroir), /XO (skip older), /R:3 (3 tentatives si erreur). Vérification intégrité avec checksum MD5. Compression archives (.7z) pour économiser espace. Rotation : garder 4 sauvegardes hebdomadaires + 12 mensuelles. Envoi email si sauvegarde échouée.",
      "Monitoring Système": "Surveillance continue : espace disque (alerte si < 10%), utilisation CPU (alerte si > 90% pendant 5 min), mémoire RAM disponible, services critiques (redémarrage automatique si arrêté), température CPU si capteur disponible. Event Log Windows : détection erreurs critiques (BSOD, disque défaillant). Envoi notifications email + SMS si critique. Dashboard HTML généré quotidiennement avec graphiques (Chart.js).",
      "Gestion Erreurs Robuste": "Try/Catch sur toutes opérations critiques. Erreurs non-bloquantes : log warning et continue. Erreurs bloquantes : log error, email admin, arrêt propre. Retry automatique (3 tentatives) pour opérations réseau (sauvegarde NAS). Timeout sur commandes longues (30 min max). Rollback automatique si sauvegarde corrompue. Mode dry-run (simulation sans modification) pour tester changements.",
      "Sécurité & Permissions": "Exécution en compte service dédié (pas Administrator pour limiter risques). Signature des scripts PowerShell (Set-ExecutionPolicy RemoteSigned). Pas de mots de passe en clair : utilisation Windows Credential Manager. Logs d'audit : qui a modifié quels scripts et quand. Protection contre injections : validation paramètres entrée. Isolation : scripts ne communiquent que via fichiers logs (pas de variables globales)."
    },
    
    features: [
      "Nettoyage automatique système (fichiers temporaires, cache, logs anciens)",
      "Sauvegardes planifiées avec vérification d'intégrité et rotation",
      "Monitoring temps réel : espace disque, CPU, RAM, services Windows",
      "Gestion automatisée de fichiers : tri, archivage, compression",
      "Alertes email/SMS si problème critique détecté",
      "Dashboard HTML généré avec statistiques système",
      "Scripts modulaires réutilisables et configurables",
      "Logs centralisés avec rotation automatique",
      "Gestion d'erreurs robuste avec retry automatique",
      "Compatibilité Windows 10/11 et Server 2016+"
    ],
    
    challenges: [
      "Gestion robuste des erreurs système imprévisibles sans bloquer l'exécution globale",
      "Compatibilité multi-versions Windows (10, 11, Server 2016/2019/2022)",
      "Sécurité maximale : éviter élévation de privilèges non nécessaire, pas de mots de passe en dur",
      "Performance : scripts légers ne consommant pas ressources système excessives",
      "Fiabilité : scripts doivent fonctionner 24/7 sans intervention humaine"
    ],

    difficulties: [
      "Les mêmes cmdlets PowerShell avaient des comportements différents selon la version de Windows — ce qui fonctionnait parfaitement sur ma machine échouait silencieusement sur Windows 11 Home ou Server 2019. Déboguer ça sans accès direct aux machines cibles était épuisant.",
      "Certaines opérations d'administration (suppression de fichiers verrouillés, arrêt de services système) nécessitaient des élévations de privilèges que le script ne gérait pas correctement au départ, générant des erreurs cryptiques sans message utile.",
      "Tester des scripts planifiés à 2h du matin via Task Scheduler était difficile : simuler l'exécution sans interface, sans session utilisateur active, révélait des bugs impossibles à reproduire en mode interactif."
    ],

    learnings: [
      "L'automatisation doit être conçue pour échouer proprement. Chaque script doit logger ses erreurs de façon claire et ne jamais bloquer silencieusement une tâche suivante — quand personne ne surveille, les logs sont la seule trace.",
      "Tester sur l'environnement cible réel est non-négociable pour l'administration système. Les différences entre versions Windows ne sont pas anecdotiques — elles cassent des scripts en production.",
      "La rigueur de documentation est différente en scripting système : quand le script tourne sans surveillance à 2h du matin, la lisibilité et les commentaires ne sont pas un luxe mais une nécessité opérationnelle."
    ],

    futureEnhancements: [
      "Interface GUI avec Windows Forms pour configuration visuelle (remplacer fichier JSON)",
      "Intégration avec Azure pour sauvegardes cloud automatiques",
      "Machine Learning pour prédire pannes matérielles (analyse patterns Event Log)",
      "Orchestration multi-machines : gestion centralisée de parc informatique complet",
      "Module de mise à jour logicielles automatique (Windows Update, applications tierces)",
      "API REST pour contrôle à distance via application mobile",
      "Intégration Slack/Teams pour notifications temps réel"
    ]
  },

  {
    id: "script-aveva",
    title: "Script Batch pour Application Aveva",
    period: "Juillet 2025",
    context: "Projet professionnel - Alternance Ekium",
    category: "entreprise",
    description: "Automatisation complète du déploiement Aveva pour gain de productivité.",
    detailedDescription: "Suite de scripts Batch et PowerShell pour automatiser entièrement l'installation, la configuration et la maintenance de l'application industrielle Aveva (logiciel de supervision SCADA). Réduction du temps de déploiement de 2 heures manuelles à 15 minutes automatiques. Déployé sur 50+ postes ingénieurs chez Ekium avec succès.",
    technologies: ["Batch", "PowerShell", "Windows Installer (MSI)", "Registry", "Group Policy"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Script-batch-Aveva",
    image: "/images/aveva.png",
    
    technicalChoices: [
      {
        technology: "Batch (.bat / .cmd)",
        reason: "Langage de scripting Windows simple et universel, fonctionnant sur toutes versions Windows sans installation préalable. Idéal pour orchestration de haut niveau : lancer installateurs, appeler scripts PowerShell, gérer flux d'exécution. Syntaxe légère pour tâches basiques (copie fichiers, création dossiers). Compatible avec tous environnements d'entreprise. Facilement déployable via GPO (Group Policy Objects) sur parc informatique."
      },
      {
        technology: "PowerShell",
        reason: "Utilisé pour tâches avancées que Batch ne peut gérer : modification registre Windows (paramètres Aveva), manipulation XML (fichiers config), gestion permissions NTFS, interrogation WMI (vérification prérequis matériels). Cmdlets riches permettant contrôle fin de l'environnement. Gestion d'erreurs structurée avec try/catch. Logs détaillés pour diagnostic en cas de problème."
      },
      {
        technology: "Windows Installer (MSI)",
        reason: "Format d'installation standard Microsoft utilisé par Aveva. Possibilité d'installation silencieuse avec paramètres : msiexec /i Aveva.msi /qn /norestart. Journalisation native avec /l*v log.txt pour diagnostic. Désinstallation propre possible. Gestion automatique des dépendances (.NET Framework, Visual C++ Redistributables). Rollback automatique si installation échoue."
      },
      {
        technology: "Registre Windows",
        reason: "Configuration Aveva stockée dans HKEY_LOCAL_MACHINE\\Software\\Aveva. Scripts modifient automatiquement : chemins projets par défaut, serveur de licences, paramètres réseau, options d'affichage. Utilisation de reg.exe (Batch) ou cmdlets PowerShell (Set-ItemProperty). Sauvegarde registre avant modification (reg export) pour rollback si besoin. Import templates standards pour configuration homogène sur tous postes."
      }
    ],
    
    architecture: {
      description: "Architecture de déploiement en 4 phases orchestrées par script maître avec vérifications à chaque étape",
      layers: [
        {
          name: "Script Maître (Install_Aveva.bat)",
          role: "Point d'entrée unique qui orchestre toute l'installation. Étapes : vérification prérequis (admin rights, espace disque, Windows version), phase installation (Aveva + dépendances), phase configuration (registre, licences, shortcuts), phase validation (lancer Aveva en mode test). Logs détaillés à chaque étape. Affichage progression avec pourcentages. Envoi email automatique si échec."
        },
        {
          name: "Module Installation (Install.ps1)",
          role: "Installation silencieuse Aveva avec msiexec /i /qn /norestart. Installation prérequis si manquants : .NET Framework 4.8, Visual C++ 2015-2022 Redistributable, SQL Server Compact. Vérification checksums SHA256 des fichiers avant installation (détection corruption téléchargement). Copie fichiers complémentaires (templates projets, bibliothèques symboles). Patience active : attend fin installation avec timeout 30 min."
        },
        {
          name: "Module Configuration (Config.ps1)",
          role: "Modification registre Windows pour paramètres Aveva : serveur licences (lmgrd.exe), chemins par défaut (projets, backups, exports), langue interface (FR), activation télémétrie (désactivée pour confidentialité). Import fichier config.xml pré-rempli. Création raccourcis bureau/menu démarrer. Association extensions fichiers (.agl, .app) avec Aveva. Configuration pare-feu Windows (autoriser ports Aveva)."
        },
        {
          name: "Module Validation & Maintenance",
          role: "Test automatique : lancement Aveva en mode batch, ouverture projet test, fermeture. Vérification tous services Windows Aveva démarrés. Test connexion serveur licences. Génération rapport installation (succès/échecs, warnings). Création point de restauration Windows avant installation. Script désinstallation propre inclus. Script mise à jour automatique pour nouvelles versions Aveva."
        }
      ]
    },
    
    technicalDetails: {
      "Installation Silencieuse": "Commande complète : msiexec /i %AVEVA_MSI% /qn /norestart /l*v %LOG_FILE% TARGETDIR=%INSTALL_DIR% ADDLOCAL=ALL. Paramètres : /qn (quiet no UI), /norestart (évite redémarrage automatique), /l*v (log verbeux), TARGETDIR (personnaliser répertoire installation). Vérification ERRORLEVEL après chaque msiexec : 0=succès, 1603=erreur fatale, 1641=succès avec redémarrage requis. Gestion retries : 3 tentatives si erreur réseau temporaire.",
      "Gestion Prérequis": "Vérification automatique avant installation : OS compatible (Windows 10 Pro/Enterprise, Server 2016+), droits administrateur (net session >nul 2>&1), espace disque suffisant (>10 Go sur C:), .NET Framework 4.8 installé, RAM minimale (8 Go). Si prérequis manquant : installation automatique si possible ou message clair à utilisateur. Check version Aveva déjà installée : désinstallation propre avant upgrade.",
      "Configuration Registre": "Import fichier .reg pré-configuré avec paramètres standards entreprise. Ou modification programmatique avec PowerShell : Set-ItemProperty -Path HKLM:\\Software\\Aveva -Name LicenseServer -Value serveur-licences.ekium.local. Sauvegarde registre Aveva avant toute modification : reg export HKLM\\Software\\Aveva backup_avant.reg. Variables d'environnement système : ajout %AVEVA_HOME% pointant vers installation, ajout au PATH pour exécutables Aveva.",
      "Logging & Diagnostic": "Log multi-niveaux : log maître (Install_Aveva.log), log MSI détaillé, log PowerShell (Start-Transcript). Format timestamp ISO8601, code couleur (vert=succès, jaune=warning, rouge=erreur). Log sauvegardé dans C:\\Logs\\Aveva\\[timestamp]. En cas d'erreur : copie automatique logs vers partage réseau pour analyse par admin. Email automatique envoyé avec logs attachés si échec critique. Dashboard web (optionnel) affichant statut déploiements sur parc.",
      "Déploiement Masse": "Script pensé pour déploiement via GPO (Group Policy) sur parc de 50+ postes : exécution au démarrage machine ou connexion utilisateur, détection si déjà installé (skip si version à jour), installation différée si utilisateur actif (pas de perturbation), rapports centralisés sur serveur. Alternative : déploiement via SCCM (System Center Configuration Manager) ou Intune. Package MST (transform) pour personnaliser MSI selon groupes utilisateurs (ingénieurs/techniciens)."
    },
    
    features: [
      "Installation silencieuse complète Aveva sans interaction utilisateur",
      "Vérification et installation automatique des prérequis (.NET, VC++ Redist)",
      "Configuration automatique : serveur licences, chemins, paramètres entreprise",
      "Création raccourcis bureau et associations fichiers",
      "Validation post-installation avec test automatique",
      "Logs détaillés pour diagnostic et audit",
      "Désinstallation propre incluse (uninstall.bat)",
      "Script de mise à jour vers nouvelles versions",
      "Réduction temps déploiement : 2h manuelles → 15min automatiques",
      "Déployable en masse via GPO sur parc informatique"
    ],
    
    challenges: [
      "Automatisation 100% sans aucune intervention manuelle (installation silencieuse vraie)",
      "Gestion robuste des erreurs d'installation diverses (espace disque, permissions, services Windows)",
      "Compatibilité avec multiples versions Windows (10, 11, Server 2016/2019/2022)",
      "Documentation technique exhaustive pour reprise par collègues",
      "Validation sur environnements variés (VMs, physiques, différentes configs matérielles)",
      "Gestion des licences flottantes Aveva (connexion serveur lmgrd)"
    ],

    difficulties: [
      "La documentation officielle Aveva pour le déploiement silencieux était propriétaire, peu détaillée et en anglais technique. J'ai dû reconstruire les bons paramètres MSI par essais-erreurs et en fouillant des forums spécialisés — il n'y avait pas de réponse directe disponible.",
      "Les 50 postes de production avaient des configurations bien plus diverses que mes VMs de test : anciennes versions d'Aveva partiellement désinstallées, polices GPO restrictives, chemins d'installation non standards. Le déploiement réel a révélé une dizaine de cas d'exception que je n'avais pas anticipés.",
      "C'était mon premier projet en contexte professionnel avec des contraintes réseau d'entreprise (proxy, pare-feu, GPO). Ce qui fonctionnait en VM ne fonctionnait pas forcément sur le réseau Ekium — et comprendre pourquoi demandait de naviguer dans des couches que je ne maîtrisais pas encore."
    ],

    learnings: [
      "Le déploiement en production est fondamentalement différent du développement. La diversité des environnements réels dépasse toujours ce qu'on a prévu en VM. Prévoir des mécanismes de rollback n'est pas de la paranoïa — c'est de la prudence.",
      "La documentation technique à destination des collègues est aussi importante que le code lui-même. Un script non documenté n'est pas réutilisable — il sera réécrit par le prochain, ou pire, il ne sera pas maintenu.",
      "Mon premier projet professionnel m'a appris que la communication avec les utilisateurs finaux est cruciale. Comprendre comment les ingénieurs utilisaient vraiment Aveva m'a aidé à anticiper des contraintes que je n'aurais jamais devinées depuis mon bureau."
    ],

    futureEnhancements: [
      "Interface GUI (Windows Forms) pour sélectionner options installation de manière visuelle",
      "Intégration avec Active Directory pour attribution automatique licences selon groupes",
      "Module de télémétrie pour statistiques utilisation Aveva (temps session, projets ouverts)",
      "Auto-update : détection nouvelle version Aveva et proposition mise à jour automatique",
      "Packaging Docker pour environnements de test isolés",
      "Support Linux (Aveva E3D fonctionne sur Linux) avec scripts Bash équivalents",
      "Dashboard web temps réel pour suivre statut déploiements sur parc (React + WebSocket)"
    ]
  },

  {
    id: "salon-coiffure",
    title: "Reveal Barber - Site Vitrine Premium",
    period: "Décembre 2025",
    context: "Projet scolaire - BTS SIO",
    category: "scolaire",
    description: "Site web vitrine moderne pour salon de coiffure haut de gamme.",
    detailedDescription: "Site web vitrine premium pour le salon de coiffure Reveal Barber. Design moderne et élégant reflétant le positionnement haut de gamme du salon. Galerie photo professionnelle des réalisations, système de réservation en ligne intégré avec calendrier interactif, présentation des services avec tarifs, section blog pour conseils capillaires et tendances. Optimisé SEO et performances pour référencement Google local.",
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "Figma", "Firebase"],
    skills: ["A1.1.1", "A1.1.2", "A1.2.3", "A1.3.1"],
    github: "https://github.com/RyukSylux/revealBarber/tree/main",
    image: "/images/revealLogo.png",
    
    technicalChoices: [
      {
        technology: "React",
        reason: "Framework moderne permettant de créer une SPA (Single Page Application) fluide et performante. Navigation instantanée entre pages sans rechargement. Composants réutilisables : ServiceCard, TestimonialCard, GalleryImage pour maintenance facilitée. Hooks (useState, useEffect) pour gestion formulaire de réservation. React Router pour URLs propres (/services, /galerie, /contact) améliorant SEO. Écosystème riche : nombreuses bibliothèques pour calendrier, galerie, animations."
      },
      {
        technology: "CSS3 + Animations",
        reason: "CSS moderne avec Flexbox et Grid pour layouts responsives adaptatifs. Animations fluides (transitions, transforms, keyframes) pour expérience utilisateur premium : hover effects sur boutons, parallax scrolling, fade-in au scroll. Variables CSS pour thème cohérent (couleurs marque, espacements). Mobile-first approach : design pensé d'abord pour mobile puis adapté desktop. Préprocesseur Sass optionnel pour organisation modulaire des styles."
      },
      {
        technology: "Figma",
        reason: "Outil de design professionnel pour maquettage avant développement. Création de wireframes et mockups haute fidélité validés par client. Définition de la charte graphique : palette couleurs (noir/or pour luxe), typographie (fonts élégantes), iconographie. Prototypage interactif pour tester UX. Exports optimisés pour web (SVG, PNG@2x). Collaboration avec équipe : commentaires, versionning design. Spécifications précises pour développeurs (espacements, tailles)."
      },
      {
        technology: "Firebase Hosting + Firestore",
        reason: "Hébergement rapide et fiable avec CDN global (temps chargement <1s). HTTPS automatique et gratuit. Firestore pour base de données : stockage rendez-vous, articles blog, avis clients. Authentification Firebase pour espace admin (gérer calendrier, publier articles blog). Cloud Functions pour envoi emails confirmation rendez-vous. Analytics intégré pour statistiques visiteurs. Coût quasi-nul pour petit site (<10k visiteurs/mois)."
      }
    ],
    
    architecture: {
      description: "Architecture SPA React avec Firebase backend pour système de réservation et gestion contenu",
      layers: [
        {
          name: "Frontend React (Pages)",
          role: "Home (hero section + présentation salon), Services (liste prestations avec tarifs, durées), Galerie (grid photos réalisations avec lightbox), À Propos (histoire salon, équipe barbiers), Blog (articles conseils coiffure), Réservation (calendrier interactif, sélection service/barbier/créneau), Contact (formulaire + carte Google Maps). Composants atomiques réutilisables. Routing React Router avec URLs SEO-friendly."
        },
        {
          name: "State Management",
          role: "Context API React pour état global : panier réservation (service choisi, date, barbier), authentification utilisateur, thème (light/dark si implémenté). LocalStorage pour persistance panier si utilisateur quitte site. Formulaires contrôlés avec validation en temps réel (Formik + Yup). Gestion erreurs avec toasts de notification (react-hot-toast)."
        },
        {
          name: "Backend Firebase",
          role: "Firestore collections : Appointments (rendez-vous avec statut pending/confirmed/completed), Services (prestations avec prix), Barbers (coiffeurs avec disponibilités), BlogPosts (articles), Reviews (avis clients). Cloud Functions : sendAppointmentEmail (confirmation), checkAvailability (vérifier créneaux libres), processPayment si paiement en ligne. Firebase Auth pour espace admin sécurisé."
        },
        {
          name: "Intégrations Tierces",
          role: "Google Maps API pour localisation salon avec directions. Google Calendar API (optionnel) pour sync rendez-vous avec agenda coiffeurs. Stripe (optionnel) pour paiement acompte en ligne. Instagram API pour afficher feed Instagram du salon. EmailJS ou SendGrid pour envoi emails automatiques. Google Analytics pour tracking visiteurs et conversions."
        }
      ]
    },
    
    technicalDetails: {
      "Design Responsive": "Approche mobile-first : design d'abord pour smartphone (80% visiteurs sur mobile) puis adaptation desktop. Breakpoints : 320px (mobile S), 768px (tablet), 1024px (desktop), 1440px (large desktop). Grid CSS pour galerie photos : 1 colonne mobile, 2 colonnes tablet, 3-4 colonnes desktop. Menu navigation : hamburger menu mobile, menu horizontal desktop. Images responsive avec srcset (résolution adaptée à écran). Touch-friendly : boutons min 44px pour facilité tactile.",
      "Système de Réservation": "Calendrier interactif (react-calendar ou FullCalendar) affichant créneaux disponibles. Workflow : 1) Sélection service (coupe homme 30€, barbe 20€...), 2) Choix barbier préféré (ou premier disponible), 3) Sélection date et heure, 4) Infos client (nom, tel, email), 5) Confirmation avec récapitulatif. Vérification disponibilité temps réel (query Firestore). Envoi email confirmation automatique. SMS rappel J-1 (Twilio). Espace client pour gérer/annuler rendez-vous.",
      "Galerie Photos Professionnelle": "Grid Masonry pour layout élégant (hauteurs variables). Lazy loading images (react-lazyload) pour performances : images chargées au scroll. Lightbox pour zoom (react-image-lightbox ou Photoswipe). Filtres catégories : Coupes Hommes, Barbe, Colorations, Afro. Optimisation images : compression avec TinyPNG, format WebP (fallback JPG), responsive images. Shooting photo professionnel avec photographe. Upload admin via interface Firebase.",
      "SEO & Performances": "Meta tags optimisés pour chaque page (title unique, description, Open Graph pour réseaux sociaux). Schema.org markup pour référencement local (LocalBusiness avec adresse, horaires, avis). Sitemap.xml généré automatiquement. Robots.txt configuré. Lighthouse score > 90/100. Code splitting React pour réduire bundle size. Compression Gzip/Brotli activée. CDN Firebase pour latence minimale. Lazy loading composants non critiques. Optimisation Google My Business pour recherches locales.",
      "Accessibilité (A11y)": "Contraste couleurs conforme WCAG 2.1 AA (ratio 4.5:1 minimum). Textes alternatifs sur toutes images. Navigation clavier complète (Tab, Enter). Labels formulaires explicites. Aria-labels pour lecteurs d'écran. Skip to content link. Focus visible sur éléments interactifs. Taille police ajustable. Tests avec NVDA/JAWS (screen readers)."
    },
    
    features: [
      "Design moderne et élégant reflétant positionnement haut de gamme",
      "Galerie photo professionnelle avec filtres et lightbox",
      "Système de réservation en ligne avec calendrier interactif",
      "Présentation détaillée des services avec tarifs et durées",
      "Section blog pour conseils capillaires et tendances coiffure",
      "Avis clients avec notation étoiles",
      "Intégration Google Maps pour localisation et itinéraire",
      "Feed Instagram intégré affichant dernières publications",
      "Formulaire de contact avec envoi email automatique",
      "Design 100% responsive optimisé mobile-first",
      "Espace admin pour gérer rendez-vous et publier articles"
    ],
    
    challenges: [
      "Design moderne et attractif reflétant l'identité visuelle du salon haut de gamme",
      "Système de réservation ergonomique et fiable évitant les doubles réservations",
      "Optimisation mobile-first impérative (80% visiteurs sur smartphone)",
      "Performances excellentes malgré nombreuses images (score Lighthouse >90)",
      "SEO local optimisé pour apparaître dans recherches Google Maps coiffeur à proximité"
    ],

    difficulties: [
      "Travailler en binôme avec RyukSylux a mis en évidence des problèmes de coordination que je n'avais jamais rencontrés en solo : conflits Git, conventions de nommage incohérentes, difficulté à se répartir les tâches sans empiéter sur le code de l'autre. Il a fallu établir des règles explicites à mi-parcours.",
      "Reproduire un design véritablement haut de gamme sans être graphiste était un défi constant. La frontière entre élégant et chargé est mince, et plusieurs versions du design ont été abandonnées avant d'arriver à quelque chose de satisfaisant — parfois après des heures de travail.",
      "Le système de réservation Firestore avait des race conditions : deux utilisateurs réservant le même créneau en même temps pouvaient aboutir à une double réservation. Implémenter des transactions atomiques Firestore pour résoudre ça a demandé une lecture approfondie de la documentation."
    ],

    learnings: [
      "Travailler en équipe demande une rigueur de communication que le code seul ne suffit pas à assurer. Définir les conventions de branche, se synchroniser régulièrement et faire des code reviews — même informelles — sont des habitudes que j'ai commencé à prendre sur ce projet.",
      "Le design UI/UX est un vrai métier. Même avec un bon framework CSS, obtenir un rendu premium nécessite une méthode : maquettes, itérations, retours. Le code vient en dernier.",
      "Firebase est excellent pour démarrer vite, mais la cohérence des données en production nécessite de comprendre les transactions et les règles de sécurité en profondeur — ce n'est pas qu'une base de données simplifiée."
    ],

    futureEnhancements: [
      "Programme de fidélité : carte virtuelle avec points cumulés (10ème coupe offerte)",
      "Paiement en ligne sécurisé d'acompte à la réservation (réduire no-shows)",
      "Application mobile PWA installable (notification push pour rappels rendez-vous)",
      "Chatbot intelligent pour réponses automatiques questions fréquentes (horaires, tarifs, localisation)",
      "Système de notation et avis après chaque prestation (feed-back qualité)",
      "Marketplace de produits capillaires : vente en ligne shampoings, cires, huiles utilisés au salon",
      "Programme de parrainage : réduction si client amène un ami",
      "Intégration TikTok pour afficher tutoriels coiffure viraux du salon"
    ]
  },

  {
    id: "reveal-barbershop",
    title: "Reveal Barbershop — Refonte Next.js",
    period: "Février 2026",
    context: "Projet personnel",
    category: "personnel",
    description: "Refonte complète du site Reveal Barbershop avec Next.js 16, TypeScript et Tailwind CSS v4.",
    detailedDescription: "Refonte intégrale du site vitrine du salon Reveal Barbershop (Bourgoin-Jallieu) avec une stack moderne : Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS v4 et Framer Motion v12. Remplacement de l'ancienne version React/Firebase par une architecture Next.js pour de meilleures performances SEO, un rendu serveur natif et une expérience utilisateur premium. Intègre Lenis pour le smooth scrolling, une intégration de réservation en ligne via Planity, et un scroll-spy sur le header via IntersectionObserver.",
    technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lenis"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Reveal-",
    image: "/images/revealLogo.png",

    technicalChoices: [
      {
        technology: "Next.js 16 (App Router)",
        reason: "Passage de React pur à Next.js pour bénéficier du rendu serveur (SSR/SSG) natif, indispensable pour le SEO local du salon. L'App Router de Next.js 16 simplifie la gestion des layouts, des métadonnées par page et du chargement optimisé des polices via next/font. Le rendu serveur génère des pages HTML complètes indexables par Google, contrairement à la SPA React précédente."
      },
      {
        technology: "TypeScript (strict mode)",
        reason: "Adoption du typage strict pour fiabiliser le code sur le long terme : détection d'erreurs à la compilation, autocomplétion précise dans VSCode, refactorisation plus sûre. Les alias de chemin TypeScript (@/*) nettoient les imports relatifs profonds. Sur un projet avec des composants animés complexes, le typage des props Framer Motion et des événements DOM évite de nombreuses erreurs silencieuses."
      },
      {
        technology: "Tailwind CSS v4",
        reason: "Utilisation de la toute dernière version de Tailwind (v4) avec configuration inline dans globals.css, supprimant le fichier tailwind.config.js traditionnel. Approche utility-first qui accélère le développement du design premium du salon. Les nouvelles fonctionnalités v4 (CSS variables natives, meilleure intégration PostCSS) permettent une personnalisation fine de la charte graphique sans couche CSS supplémentaire."
      },
      {
        technology: "Framer Motion v12 + Lenis",
        reason: "Framer Motion v12 avec whileInView pour animer les éléments à l'entrée dans le viewport, donnant l'impression de fluidité premium attendue pour un salon haut de gamme. Lenis assure un smooth scrolling natif et homogène sur tous navigateurs, remplaçant avantageusement les solutions CSS seules. La combinaison des deux crée une expérience de navigation élégante et différenciante."
      }
    ],

    architecture: {
      description: "Architecture Next.js App Router avec composants client, scroll-spy via IntersectionObserver et intégration Planity",
      layers: [
        {
          name: "App Router (src/app/)",
          role: "Structure de pages Next.js 16 avec layout racine gérant les métadonnées globales, le chargement des polices Google via next/font, et le wrapper Lenis pour le smooth scrolling. Chaque page exporte ses propres métadonnées pour le SEO (title, description, Open Graph). Routes : page d'accueil principale avec sections (Hero, Services, Galerie, À propos, Réservation, Contact)."
        },
        {
          name: "Composants (src/components/)",
          role: "Composants React client pour les sections du site : Header avec scroll-spy IntersectionObserver (détection section active au scroll), HeroSection avec animations Framer Motion, ServicesGrid, GalleryMasonry, BookingSection intégrant le widget Planity, Footer. Tous déclarés 'use client' pour les interactions et animations."
        },
        {
          name: "Scroll-Spy & Navigation",
          role: "Header intelligent utilisant IntersectionObserver pour suivre quelle section est visible à l'écran et mettre à jour le lien actif dans la navigation. Smooth scrolling vers les ancres via Lenis. Menu mobile full-screen avec animations de staggering Framer Motion sur les liens. Support prefers-reduced-motion pour l'accessibilité."
        },
        {
          name: "Intégration Planity",
          role: "Système de réservation en ligne externalisé via Planity (plateforme de prise de rendez-vous pour salons). Intégration du widget Planity dans la section dédiée, permettant aux clients de réserver directement depuis le site sans développement d'un back-end de gestion des créneaux. Simplification majeure de l'architecture par rapport à la version Firebase."
        }
      ]
    },

    technicalDetails: {
      "Next.js App Router": "Architecture moderne basée sur les Server Components par défaut, avec 'use client' explicite pour les composants nécessitant interactivité (animations, scroll events). Layout racine (layout.tsx) centralisant : balises <html> et <body>, chargement polices Google (next/font/google), metadata globale, provider Lenis. Génération statique des pages (SSG) pour performances maximales et indexation SEO complète.",
      "Tailwind CSS v4": "Configuration nouvelle génération sans fichier tailwind.config.js : thème entièrement défini en variables CSS dans globals.css avec @theme inline. Tokens de design : couleurs de la charte Reveal (noir, or, blanc cassé), espacements personnalisés, breakpoints adaptés. Purge automatique des classes non utilisées en production. Intégration PostCSS via @tailwindcss/postcss.",
      "Animations Framer Motion v12": "Utilisation de whileInView combiné à viewport={{ once: true }} pour déclencher les animations une seule fois à l'entrée dans le viewport. Variants pour orchestrer des animations coordonnées entre parent et enfants (staggerChildren). Transitions spring pour les interactions hover (scale, opacity). Respect de prefers-reduced-motion via useReducedMotion hook.",
      "Scroll-Spy IntersectionObserver": "Observer configuré avec rootMargin pour déclencher la mise à jour du lien actif légèrement avant que la section atteigne le haut du viewport. Gestion du cas edge (dernière section). Cleanup de l'observer dans le useEffect de React pour éviter les fuites mémoire. État actif synchronisé avec la navigation pour feedback visuel en temps réel.",
      "Performance & SEO": "Chargement optimisé des polices avec next/font (zéro layout shift, auto-hébergement). Images optimisées avec next/image (formats WebP/AVIF automatiques, lazy loading natif, dimensions déclarées). Metadata dynamique par page pour SEO local (LocalBusiness schema.org). Score Lighthouse visé > 95/100. Déploiement Vercel avec CDN global et compression Brotli automatique."
    },

    features: [
      "Design premium reflétant l'identité visuelle haut de gamme du salon",
      "Smooth scrolling fluide sur tous navigateurs via Lenis",
      "Navigation avec scroll-spy : lien actif mis à jour en temps réel au scroll",
      "Animations au scroll via Framer Motion (whileInView)",
      "Menu mobile full-screen avec animations de staggering",
      "Intégration réservation en ligne Planity (sans développement back-end)",
      "SEO local optimisé avec métadonnées structurées (schema.org LocalBusiness)",
      "TypeScript strict sur l'ensemble du projet",
      "Design 100% responsive mobile-first",
      "Support accessibilité (prefers-reduced-motion, navigation clavier)"
    ],

    challenges: [
      "Migration de l'architecture React SPA vers Next.js App Router avec la distinction Server/Client Components",
      "Intégration de Lenis avec Next.js sans conflit avec le routing côté client",
      "Tailwind CSS v4 très récent avec peu de ressources disponibles en ligne",
      "Implémentation d'un scroll-spy performant et précis via IntersectionObserver",
      "Cohérence des animations Framer Motion entre mobile et desktop avec gestion de l'accessibilité"
    ],

    difficulties: [
      "La frontière entre Server Components et Client Components dans Next.js App Router n'était pas intuitive au départ. J'ai eu des erreurs d'hydratation difficiles à diagnostiquer parce que j'utilisais des hooks React dans des composants non marqués 'use client'.",
      "Tailwind CSS v4 étant très récent, la documentation était parfois incomplète et plusieurs comportements avaient changé par rapport à la v3. J'ai dû tester par essais-erreurs certaines configurations que je n'aurais pas hésité à faire en v3.",
      "Faire cohabiter Lenis (smooth scrolling global) avec le scroll natif du navigateur et le routing Next.js a demandé plusieurs ajustements. Des conflits surgissaient notamment sur mobile et lors de la navigation entre sections via les ancres."
    ],

    learnings: [
      "Next.js App Router représente un vrai changement de paradigme par rapport à React pur. Comprendre quand utiliser Server vs Client Components est fondamental — pas juste pour les performances, mais pour éviter des bugs d'hydratation silencieux.",
      "Adopter TypeScript strict dès le début d'un projet coûte un peu de temps au démarrage mais en économise beaucoup ensuite. Les erreurs de type signalées pendant le développement évitent des bugs en production qui auraient été difficiles à tracer.",
      "Le choix de Planity pour la réservation était la bonne décision : externaliser les fonctionnalités complexes (gestion des créneaux, rappels SMS) à des services spécialisés permet de se concentrer sur ce qu'on fait vraiment — l'interface et l'expérience utilisateur."
    ],

    futureEnhancements: [
      "Ajout d'une galerie des réalisations avec système de catégories et lightbox",
      "Section blog/conseils capillaires pour améliorer le référencement naturel",
      "Intégration du feed Instagram du salon en temps réel",
      "Page de présentation de l'équipe avec photos et spécialités",
      "Module d'avis clients avec intégration Google Reviews",
      "PWA (Progressive Web App) pour installation sur mobile",
      "Internationalisation (i18n) pour clientèle anglophone"
    ]
  },

  {
    id: "julia",
    title: "Projet J — Application de Soutien Psychologique",
    period: "Janvier 2026",
    context: "Projet personnel",
    category: "personnel",
    description: "Application mobile de soutien thérapeutique combinant IA (Google Gemini) et supervision professionnelle.",
    detailedDescription: "Projet J est une application mobile de soutien psychologique qui combine l'intelligence artificielle et la supervision de professionnels de santé. Les patients peuvent engager des conversations thérapeutiques avec une IA (Google Gemini) depuis leur smartphone, tandis qu'un dashboard dédié permet aux thérapeutes de surveiller les échanges, détecter les niveaux de sévérité et intervenir si nécessaire. Le projet inclut un bouton SOS d'urgence, un historique des conversations, un système d'invitation patients et une génération de rapports de séance.",
    technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "MongoDB", "Google Gemini API", "NativeWind", "JWT"],
    skills: ["A1.1.1", "A1.2.2", "A1.3.2", "A1.4.1"],
    github: "https://github.com/Alexandre-ab/Julia",
    image: "/images/julia.svg",

    technicalChoices: [
      {
        technology: "React Native + Expo",
        reason: "Framework mobile multiplateforme permettant de cibler iOS et Android depuis une seule base de code TypeScript. Expo simplifie radicalement le setup, les builds et les mises à jour OTA sans passer par les stores. Expo Router apporte le file-based routing connu de Next.js à l'univers mobile. NativeWind adapte Tailwind CSS au monde React Native, permettant de styler les composants avec des classes utilitaires familières."
      },
      {
        technology: "Google Gemini API",
        reason: "LLM multimodal de Google choisi pour ses capacités conversationnelles en français et sa compréhension des nuances émotionnelles. L'API Gemini permet de configurer un contexte système précis pour orienter les réponses vers un rôle de soutien psychologique bienveillant, non directif et sans conseil médical. La détection automatique de la sévérité des échanges repose sur l'analyse sémantique du modèle."
      },
      {
        technology: "Node.js + Express + MongoDB",
        reason: "Stack JavaScript unifiée frontend/backend facilitant le partage de types TypeScript entre les deux couches. Express structure l'API REST avec une séparation claire controllers/services/middleware. MongoDB Atlas stocke les conversations, profils patients et rapports dans un format document flexible, adapté à des structures de données variables (messages, métadonnées de séance). Mongoose apporte la validation de schéma et les hooks pre/post save."
      },
      {
        technology: "JWT + sécurité (Helmet, CORS, rate limiting)",
        reason: "JWT pour l'authentification sans état côté serveur, avec tokens à durée de vie courte pour limiter l'exposition en cas de compromission. Helmet sécurise les en-têtes HTTP contre les attaques communes (XSS, clickjacking). Le rate limiting protège les endpoints sensibles (/chat, /auth) contre les abus. CORS configuré strictement pour n'accepter que les requêtes depuis l'application mobile. La sensibilité des données médicales a exigé une rigueur de sécurité maximale."
      }
    ],

    architecture: {
      description: "Architecture mobile full-stack avec séparation patient/professionnel, moteur IA central et système de détection de sévérité",
      layers: [
        {
          name: "Application Mobile (React Native / Expo)",
          role: "Deux espaces distincts selon le rôle : interface patient (authentification, démarrage de conversation, chat temps réel avec l'IA, historique des sessions, bouton SOS avec numéros d'urgence) et dashboard professionnel (liste de patients, suivi des conversations actives, indicateurs de sévérité, génération de rapports). Navigation gérée par Expo Router avec routes protégées selon le rôle JWT."
        },
        {
          name: "API REST (Node.js / Express)",
          role: "Endpoints organisés par domaine : /auth (login, register, invite, profil), /chat (démarrer session, envoyer message, terminer, historique), /professional (liste patients, profil détaillé, conversations actives, rapports). Middleware JWT sur toutes les routes protégées. Middleware de rôle (patient vs professionnel) sur les routes sensibles. Logs structurés via Winston pour audit et debugging."
        },
        {
          name: "Moteur IA (Google Gemini)",
          role: "Service centralisé côté backend qui gère les appels à l'API Gemini. Prompt système configuré pour un rôle de soutien bienveillant et non directif, avec instructions explicites sur les limites (ne pas diagnostiquer, ne pas prescrire, orienter vers un professionnel en cas de crise). Analyse sémantique de chaque message pour calculer un score de sévérité (faible / modéré / élevé) transmis au dashboard professionnel."
        },
        {
          name: "Base de données (MongoDB Atlas)",
          role: "Collections : Users (patients et professionnels avec rôle, profil, thérapeute assigné), Conversations (sessions avec liste de messages, score de sévérité global, statut actif/terminé), Messages (contenu, auteur, timestamp, score sévérité individuel), Reports (rapports générés par session avec résumé IA). Indexes sur userId, conversationId et createdAt pour requêtes performantes sur l'historique."
        }
      ]
    },

    technicalDetails: {
      "Détection de Sévérité": "Chaque message patient est analysé par Gemini avec un prompt de scoring retournant un niveau (1-faible, 2-modéré, 3-élevé) selon les signaux de détresse détectés. Le score est stocké avec le message et agrégé au niveau de la conversation (max des scores). Le dashboard professionnel affiche un indicateur coloré par patient permettant une priorisation rapide des interventions. En cas de sévérité 3, une alerte visuelle est déclenchée côté professionnel.",
      "Système de Chat Temps Réel": "Communication HTTP classique via Axios (polling ou requête à chaque envoi) plutôt que WebSocket pour simplifier l'architecture et la gestion d'état mobile. Chaque message est envoyé à l'API qui appelle Gemini, stocke la réponse en base et la retourne. Historique des conversations chargé à l'ouverture de chaque session. Gestion des états de chargement (indicateur de frappe IA) pour une UX fluide.",
      "Authentification & Rôles": "Deux types de comptes distincts : patient (créé via invitation du professionnel par token unique à usage unique) et professionnel (enregistrement direct avec validation). JWT avec payload incluant userId et role, vérifié par middleware Express sur chaque requête protégée. Refresh token pour prolonger la session sans ré-authentification. Isolation stricte des données : un patient ne peut voir que ses propres conversations.",
      "Génération de Rapports": "Après chaque session terminée, l'API génère automatiquement un rapport via Gemini : résumé des thèmes abordés, évolution de la sévérité au cours de la session, points d'attention pour le thérapeute. Le rapport est stocké en base et accessible depuis le dashboard. Format structuré (JSON → rendu mobile) permettant au professionnel de préparer ses séances en ayant un aperçu des échanges IA.",
      "Sécurité des Données Médicales": "Les données de santé étant particulièrement sensibles, plusieurs mesures ont été prises : chiffrement en transit (HTTPS obligatoire), pas de logs des contenus de messages (uniquement les métadonnées), rate limiting strict sur les endpoints de chat (10 req/min), MongoDB Atlas avec accès restreint par IP, variables d'environnement pour toutes les clés API (Gemini, JWT secret). Winston log uniquement les événements système, jamais le contenu des conversations."
    },

    features: [
      "Conversations thérapeutiques en temps réel avec IA (Google Gemini)",
      "Détection automatique du niveau de sévérité à chaque message",
      "Dashboard professionnel avec suivi en temps réel des patients",
      "Bouton SOS d'urgence avec numéros de crise directement accessibles",
      "Historique complet des conversations avec rejouer les sessions",
      "Génération automatique de rapports de séance",
      "Système d'invitation patients par token unique",
      "Authentification sécurisée avec rôles (patient / professionnel)",
      "Indicateurs visuels de sévérité pour priorisation clinique",
      "Architecture sécurisée adaptée aux données de santé sensibles"
    ],

    challenges: [
      "Conception d'une IA thérapeutique responsable : calibrer les instructions Gemini pour rester dans un rôle de soutien sans franchir les limites du conseil médical",
      "Sécurité renforcée pour des données de santé ultra-sensibles (conversations psychologiques)",
      "Détection de sévérité fiable sans faux négatifs dangereux (ne pas manquer une situation de crise)",
      "Architecture mobile full-stack cohérente entre React Native et l'API Express",
      "Gestion des deux rôles (patient/professionnel) avec isolation stricte des données"
    ],

    difficulties: [
      "Calibrer le prompt système de Gemini pour un usage thérapeutique a été un travail itératif long. Trop directif, l'IA semblait donner des conseils médicaux. Trop permissif, les réponses manquaient de structure bienveillante. Trouver le bon équilibre a demandé des dizaines de tests avec des scénarios variés.",
      "React Native avec NativeWind se comporte différemment de React web : certaines classes Tailwind ne sont pas supportées, le rendu sur iOS et Android diffère parfois subtilement, et déboguer sur émulateur sans device réel laisse des incertitudes sur le rendu final.",
      "La gestion de l'état de la conversation dans le chat (React useEffect provoquant des appels multiples à /chat/start) a causé des bugs difficiles à reproduire. C'est un problème connu resté partiellement non résolu faute de temps, mais qui ne bloque pas l'usage."
    ],

    learnings: [
      "Concevoir une IA pour un usage sensible (santé mentale) force à réfléchir à des questions éthiques que le développement classique n'aborde pas : que se passe-t-il si l'IA dit quelque chose de mal à quelqu'un en détresse ? Cette responsabilité a changé ma façon d'aborder le prompt engineering.",
      "React Native est un monde à part entière. La courbe d'apprentissage par rapport à React web est réelle — les concepts sont familiers mais les contraintes mobiles (performances, navigation, gestion du clavier, différences iOS/Android) nécessitent une adaptation constante.",
      "Sur un projet de santé, la documentation n'est pas optionnelle. Avoir écrit une documentation complète (/docs) dès le début a facilité la reprise du code et m'a forcé à clarifier des décisions d'architecture que j'aurais autrement laissées implicites."
    ],

    futureEnhancements: [
      "WebSocket pour un vrai temps réel (indicateur de frappe IA, notifications push)",
      "Chiffrement de bout en bout des messages dans la base de données",
      "Module de planification de séances entre patient et thérapeute",
      "Conformité RGPD complète avec droit à l'oubli et export des données",
      "Déploiement sur les stores App Store et Google Play",
      "Tests automatisés E2E avec Detox (React Native testing framework)",
      "Support multilingue pour étendre à d'autres pays francophones",
      "Tableau de bord analytique pour les professionnels (tendances, évolution du bien-être)"
    ]
  }
];

