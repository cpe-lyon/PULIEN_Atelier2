# PULIEN_Atelier2
Atelier n°2 du module de WebDynamique - Microservices

## Contributeurs :
* Théo CLERE
* Maxime BROSSARD
* Sandro SPINA
* Ceif-Edine MAROUANI
* Julien BUC

## Travail réalisé

* Réalisation d'un serveur spring 
  * Authentification sommaire s'appuyant tout de même sur des tokens JWT
  * Plusieurs ressources accessible : Users, Card, CardInstances
  * Fonctionnalités: 
    * Création d’utilisateur et connexion
    * Achat/vente de cartes sur la plateforme

* Réalisation d'un front en React 
  * Ui de login/register
  * NavBar 
  * Page Market Place
  * Page Vitrine
  * Page d'inventaire des carte posseder par l'utilisateur connecté

 ## Introduction

Ce document décrit le fonctionnement et la structure d'une application web pour une plateforme d'achat et de vente de cartes. L'application permet aux utilisateurs de s'inscrire, de recevoir aléatoirement des cartes de jeu, de se connecter, et d'acheter ou de vendre des cartes. Elle est développée avec une architecture Web Javascript et des Web Services Full REST, en utilisant Spring Boot pour le backend et React.js pour le frontend.

## Fonctionnalités

    - Création d'utilisateur et connexion
    - Achat et vente de cartes sur la plateforme

## Structure du Projet

### Frontend

La partie front end à été réalisée en à l'aide du framework javascript React.
On peut la trouver dans ./front/src.

### Backend

### 1. Client

Le client est l'entité qui initie les requêtes vers l'application. Il appelle principalement la méthode addUser() pour ajouter un nouvel utilisateur.

### 2. AuthManager

Le AuthManager (gestionnaire d'authentification) est un composant intermédiaire qui facilite l'authentification et la gestion des utilisateurs.

### 3. UserManager

Le UserManager gère toutes les opérations liées aux utilisateurs :

    - addUser(password, id) : Ajoute un nouvel utilisateur.
    - getUser() : Récupère les informations d'un utilisateur.
    - isUser(password, id) : Vérifie si l'utilisateur existe.
    - deleteUser(password, id) : Supprime un utilisateur.

### 4. CardManager

Le CardManager gère les cartes associées aux utilisateurs :

    - addCard(userId) : Ajoute une carte à un utilisateur spécifique.
    - sellCard(cardId) : Met en vente une carte.
    - buyCard(cardId) : Achète une carte.

### 5. PersistenceManager

Le PersistenceManager est responsable de la persistance des données dans la base de données. Il reçoit les instructions pour écrire dans la base de données depuis le UserManager et le CardManager.
Processus de Fonctionnement

## Processus de Fonctionnement

### Lancement du projet

Afin de faire fonctionner le frontend, on doit tout d'abord faire un ```npm install``` puis un dans le dossier */front* un ```npm run dev```.
Ensuite il faut aller sur intellij et lancer la fonction ```cardmanagerapplication.java``` dans */src*.

### Inscription et Attribution de Cartes

1. Le Client appelle la méthode addUser() du AuthManager.
2. Le AuthManager fait appel au UserManager pour ajouter un nouvel utilisateur avec UserManager.addUser(password, id).
3. Le UserManager écrit les informations de l'utilisateur dans la base de données via le PersistenceManager.
4. Une fois l'utilisateur ajouté, le UserManager crée cinq cartes aléatoires pour l'utilisateur en appelant CardManager.addCard(userId) dans une boucle de 5 itérations.
5. Le CardManager écrit les informations de chaque carte dans la base de données via le PersistenceManager.
6. Le UserManager renvoie les informations de l'utilisateur créé au Client.

### Achat et Vente de Cartes

1. L'utilisateur authentifié peut acheter des cartes en appelant CardManager.buyCard(cardId).
2. Il peut vendre des cartes en appelant CardManager.sellCard(cardId).
3. Les transactions sont enregistrées dans la base de données via le PersistenceManager.

### Dépendances et Prérequis

    - Spring Boot 2.5+ : Framework Java pour le développement de l'application backend.
    - React.js 17+ : Bibliothèque JavaScript pour la création de l'interface utilisateur.
    - Java 8+ : L'application est développée en Java.
    - Base de données SQL : Utilisée pour la persistance des données utilisateur et carte.
    - Node.js : Pour exécuter le serveur de développement React.
    - Serveur Web : Pour déployer et exécuter l'application.
