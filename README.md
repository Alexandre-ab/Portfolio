# Portfolio BTS SIO SLAM

Ce projet est un portfolio professionnel développé dans le cadre du BTS SIO SLAM. Il présente mes compétences, projets et réalisations sous forme d'un site web moderne et interactif.

## Technologies utilisées

- React
- Tailwind CSS
- Framer Motion
- React Router
- Heroicons

## Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd portfolio-bts-sio
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Lancez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

Le site sera accessible à l'adresse `http://localhost:5173`

## Structure du projet

```
portfolio-bts-sio/
├── src/
│   ├── components/     # Composants réutilisables
│   ├── pages/         # Pages principales
│   ├── assets/        # Images et ressources statiques
│   ├── hooks/         # Hooks personnalisés
│   └── utils/         # Fonctions utilitaires
├── public/            # Fichiers publics
└── ...
```

## Fonctionnalités

- Design responsive et moderne
- Animations fluides avec Framer Motion
- Mode sombre/clair
- Navigation intuitive
- Formulaire de contact
- Présentation des projets
- Veille technologique
- Tableau de synthèse des compétences

## Personnalisation

1. Modifiez les informations personnelles dans les composants
2. Ajoutez vos propres projets dans `src/pages/Projects.jsx`
3. Personnalisez les couleurs dans `tailwind.config.js`
4. Ajoutez vos propres articles de veille dans `src/pages/Veille.jsx`

## Déploiement

Pour construire le projet pour la production :

```bash
npm run build
# ou
yarn build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
