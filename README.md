# Prototype Itinéraires Normands - Datathon Région Normandie édition 2024

## Description

Ce projet est un prototype d'application web développé pour être consulté sur mobile. Il propose des itinéraires de balade culturelle à proximité d'arrêts de bus, dans le but de mettre en valeur le territoire normand. L'application permet aux utilisateurs de découvrir des parcours culturels enrichis par des points d'intérêt (monuments, musées, sites historiques, etc.).

Le prototype inclut la page d'accueil, ainsi qu'une page détaillant l'itinéraire de la balade avec une carte interactive et les points d'intérêt à visiter. Les données sont actuellement stockées en local dans un fichier de données (simulant des réponses API), mais l'objectif futur est de connecter l'application à une véritable API pour une mise à jour dynamique des données.

## Fonctionnalités

- **Page d'accueil** : Présentation des itinéraires de balades culturelles disponibles.
- **Page de balade** : Affichage d'un itinéraire de balade avec une carte interactive (via iframe) et des points d'intérêt associés.
- **Affichage des points d'intérêt** : Chaque point d'intérêt est affiché avec son image (si disponible) et une description.
- **Responsive design** : L'application est optimisée pour une consultation sur mobile, avec une interface fluide et agréable.

## Structure du projet

Le projet est développé avec Angular, une plateforme moderne pour construire des applications web côté client. Les données de l'application sont actuellement en local dans un fichier `Data.ts` et seront potentiellement reliées à une API à l'avenir.

### Technologies utilisées :

- **Angular** : Framework JavaScript pour la création de l'application web.
- **PrimeNG** : Bibliothèque d'UI pour Angular, utilisée pour les composants d'interface (par exemple, cartes pour les points d'intérêt).
- **Tailwind CSS** : Framework de design utilitaire pour une mise en page rapide et réactive.
- **TypeScript** : Langage de programmation pour Angular, permettant une meilleure gestion du typage et de la logique de l'application.

## Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm (version 7 ou supérieure)

### Étapes d'installation

1. Clonez ce repository :

   ```bash
   git clone https://github.com/your-username/nom-du-repository.git
   ```

2. Installez les dépendances :

   ```bash
   cd nom-du-repository
   npm install
   ```

3. Démarrez l'application en mode développement :

   ```bash
   ng serve
   ```

4. Ouvrez votre navigateur et accédez à l'adresse suivante :
   ```
   http://localhost:4200
   ```

## Usage

L'application propose deux principales pages accessibles via la navigation :

1. **Page d'accueil** : Elle affiche une liste d'itinéraires de balades disponibles. Chaque balade est liée à un arrêt de bus.
2. **Page de la balade** : Cette page affiche les détails de la balade choisie, avec une carte intégrée pour montrer le parcours et les points d'intérêt associés. Chaque point d'intérêt peut inclure une image et une description.

### Données

Les données sont actuellement stockées localement dans le fichier `Data.ts`, mais dans une version future de l'application, celles-ci pourraient être récupérées à partir d'une API pour être plus dynamiques et maintenues à jour.

## Avenir du projet

L'objectif à moyen terme est de connecter l'application à une API, permettant ainsi de gérer dynamiquement les balades, arrêts de bus et points d'intérêt. L'API pourra fournir des itinéraires personnalisés, basés sur la géolocalisation des utilisateurs, et inclure davantage de points d'intérêt (musées, événements, restaurants, etc.).
