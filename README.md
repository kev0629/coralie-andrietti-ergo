# Coralie Andrietti - Ergothérapeute

![Logo Coralie Andrietti](/public/pictures/logo-coralie-andrietti-ergotherapeute.svg)

Site vitrine et blog pour Coralie Andrietti, ergothérapeute.

## Aperçu

Ce projet est construit avec [Next.js](https://nextjs.org/) et utilise [Tailwind CSS](https://tailwindcss.com/) pour le style. Il a pour but de présenter l'activité de Coralie Andrietti, de fournir des informations sur l'ergothérapie et de publier des articles de blog.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org/) et [pnpm](https://pnpm.io/).

## Installation

1.  Clonez le dépôt :
    ```bash
    git clone https://github.com/votre-utilisateur/votre-repo.git
    ```
2.  Naviguez dans le dossier du projet :
    ```bash
    cd coralie-andrietti-ergo
    ```
3.  Installez les dépendances :
    ```bash
    pnpm install
    ```

## Lancement du serveur de développement

Pour lancer le serveur de développement, exécutez la commande suivante :

```bash
pnpm dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Scripts disponibles

Dans le fichier `package.json`, vous trouverez les scripts suivants :

-   `dev`: Lance l'application en mode développement.
-   `build`: Construit l'application pour la production.
-   `start`: Démarre un serveur de production.
-   `lint`: Lance l'analyseur de code [ESLint](https://eslint.org/).

## Technologies utilisées

-   [Next.js](https://nextjs.org/) - Le framework React pour la production.
-   [React](https://reactjs.org/) - Une bibliothèque JavaScript pour la construction d'interfaces utilisateur.
-   [TypeScript](https://www.typescriptlang.org/) - Un surensemble de JavaScript qui ajoute des types statiques.
-   [Tailwind CSS](https://tailwindcss.com/) - Un framework CSS "utility-first".
-   [pnpm](https://pnpm.io/) - Un gestionnaire de paquets rapide et efficace en termes d'espace disque.

## Structure du projet

```
.
├── components/      # Composants React réutilisables
├── pages/           # Pages de l'application et routes API
│   ├── api/         # Routes de l'API Next.js
│   └── News/        # Pages des articles de blog
├── public/          # Fichiers statiques (images, polices, etc.)
├── styles/          # Fichiers de style globaux
├── .env.example     # Exemple de fichier de variables d'environnement
├── next.config.js   # Fichier de configuration de Next.js
├── package.json     # Dépendances et scripts du projet
└── tsconfig.json    # Configuration de TypeScript
```

