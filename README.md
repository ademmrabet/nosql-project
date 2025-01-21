# nosql-project Mini projet

## Description
Ce projet est un mini-projet réalisé dans le cadre de mon cours de NoSQL. Il vise à améliorer nos compétences en MongoDB et Docker.
Voici les étapes principales du projet :
1. Création d'un conteneur MongoDB
2. Utilisation d'un fragment de données pour constituer ma base de données (*Inventory*), répartie en 4 collections : 
    1. **Keyboards**
    2. **Mouses**
    3. **Headsets**
    4. **Laptops**
3. Développement d'une application web avec React.js et Node.js :
    * Backend : un fichier `server.js` pour démarrer le serveur et Nodemon pour un refraîchissement auatomatique en cas de modification. J'ai également ajouté une connexion à la base de données via Mongoose et une route pour récupérer les données
    * Frontend : une application React avec un dossier **Services** (utilisation d'AXIOS pour récupérer les données) et un dossier **components** contenant : 
        * une table affichant les claviers.[^1]
        * Une page d'acceuil[^2] `LandingPage.js`avec une zone de texte permettant d'exécuter des requêtes MongoDB et d'afficher les résultats directement dans l'application.
        



https://github.com/user-attachments/assets/050c8d74-d66a-4579-899d-494f9e7ca530




        [^1]: Component that holds the Keyboard Table View.
        [^2]: Unable to run the queries please focus on tha.
>[!NOTE]
>LandingPage is still isn't working as expected there is an issue with fetching data :frowning_face:

## Technologies utilisées
- **React.JS**
- **Node.js**
- **ExpressJS**
- **Axios**
- **Nodemon**
- **Cors**
- **Docker**
- **MongoDB**
- **JSON**

## Installation et exécution
* pour exécuter ce projet sur votre ordineur :
    1. Rendez-vous sur **Github** et copiez le lien du dépot :
    `https://github.com/ademmrabet/nosql-project`
    2. Ouvrez l'invite de commandes (CMD) sur votre bureau et tapez :
    ```bash
    git clone https://github.com/ademmrabet/nosql-project
    ```
    3. Accédez au dossier cloné : 
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop> cd nosql-project
    ```
    4. Ouvrez le projet dans VSCode : 
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project> code .
    ```
    5. Installez les dépendances nécessaire : 
    * Pour le frontend :
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project\> cd frontend
    ```
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project\frontend> npm install
    ```

    * pour le Backend :
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project\frontend> cd ..
    ```
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project> cd backend
    ```
    ```bash
    C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project\backend> npm install
    ```
    6. Lancez l'application : 
        * Ouvrez un nouveau Terminal et démarrez le frontend :
        ```bash
        C:\Users\MAD500279\OneDrive - AFDB\Desktop> cd nosql-project/frontend
        ```
        ```bash
        C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project\frontend> npm start
        ```
        * Retournez au premier terminal et démarrez le backend :
        ```bash
        C:\Users\MAD500279\OneDrive - AFDB\Desktop\nosql-project\backend> nodemon server.js
        ```
        7. Profitez de l'application!

### Utilisation
>[!NOTE]
> Ce cas d'utilisation concerne les scripts shell pour l'instant ! Jusqu'à ce que le site soit complètement opérationnel, nous pouvons exécuter ces commandes dans l'interface utilisateur, donc assurez-vous d'avoir votre CMD en mode administrateur et profitez-en !
* Pour commencer, nous devons télécharger notre image de conteneur Docker à l'aide de :
```bash
docker pull mongo
```
<img width="446" alt="dockerpull" src="https://github.com/user-attachments/assets/d0b2e224-a1ed-4e71-a2ba-69f4fa31d238" />

* Ensuite, nous lancerons l'image Docker et créerons notre conteneur nommé my-container-MongoDB en utilisant :
```bash
docker run -d --name my-container-mongoDB -p 27017:27017 mongo mongod
```
<img width="685" alt="dockerrun" src="https://github.com/user-attachments/assets/316be754-fc04-4ce0-9835-82b47d28ea44" />

* Après cela, nous allons copier notre collection dans notre conteneur en suivant cette étape:
```bash
cd <PATH_TO_File>
:: pour moi c'est d'acceder à mon dossier backend ou se trouve les fichier JSON
docker cp laptops.json my-container-mongoDB:/tmp/
```
<img width="475" alt="dockercp" src="https://github.com/user-attachments/assets/a251d653-e970-4a4f-80c6-13baecfa7e46" />

* Maintenant, nous exécutons le shell Mongodb dans notre conteneur en utilisant :
```bash
docker exec -it my-container-mongoDB bash
```
<img width="503" alt="dockerexec" src="https://github.com/user-attachments/assets/9e14e4e3-17f5-4690-9cbf-b46629ba3584" />

* Utiliser la base de donner inventory pour créer les collections qui correspond aux fichiers JSON 
```bash
use inventory
db.createCollection("laptops")
```
<img width="206" alt="mongocreatecollection" src="https://github.com/user-attachments/assets/50d0e657-5922-48e8-8627-9da7dc45fe96" />

* finalement il faut importer les fichiers JSON qu'on a copié dans Docker container en utilisant mongoImport comme suit :
```bash
mongoimport --db inventory --collection laptops --file /tmp/laptops.json
```
<img width="444" alt="mongoimport" src="https://github.com/user-attachments/assets/f6ffd933-a6ee-4b1d-be13-cfd48e47d559" />

>[!NOTE]
>il faut toujour utiliser --jsonArray argument pour eviter l'erreur qui est presenté dans la capture d'écran
* Nous sommes prêts à écrire quelques commandes et à interroger notre base de données.

## QUERIES 
### Requêtes simples
* Trouver toutes les souris HP
```javascript
db.mouses.find({ type: "HP" })
```
<img width="371" alt="findtypeHP" src="https://github.com/user-attachments/assets/e0e1bbb9-204d-435a-8e57-90fda014ad59" />

* Trouver toutes les souris actuellement en stock
```javascript
db.mouses.find({ status: "in_stock" })
```
<img width="305" alt="findstatusInStock" src="https://github.com/user-attachments/assets/8e3ecd0e-a1d2-486d-9f07-6cfa5fb84f49" />

* compter le nombre total de souris distribuées
```javascript
db.mouses.countDocuments({ status: "distributed" })
```
<img width="368" alt="coundStatusDistributed" src="https://github.com/user-attachments/assets/48a6ae24-6eaa-45fc-8fde-17fb9c1ba149" />

* trouver les souris achetées à une date précise
```javascript
db.mouses.find({ buy_date: "10/01/2022" })
```
<img width="339" alt="findBuyDateSpecific" src="https://github.com/user-attachments/assets/48d2993f-e344-4429-8eeb-2a130a0aa16b" />

### Requêtes avancées
* Compter les souris par type
```javascript
db.mouses.aggregate([
  { $group: { _id: "$type", count: { $sum: 1 } } }
])
```

<img width="342" alt="aggregatebytype" src="https://github.com/user-attachments/assets/503e8f57-9dc0-48c3-996f-5c67457ebb83" />

* Trouver les dernières souris achetées (limite 5)
```javascript
db.mouses.find().sort({ buy_date: -1 }).limit(5)
```
<img width="364" alt="latestePurchased5" src="https://github.com/user-attachments/assets/12a09d1c-2bc3-413a-87cb-5debcfc45802" />

* Rechercher les souris distribuées dans une fourchette de dates spécifique
```javascript
db.mouses.find({
  distribution_date: {
    $gte: "01/01/2024",
    $lte: "03/31/2024"
  },
  status: "distributed"
})
```

<img width="379" alt="withinDtaeRangeDistro" src="https://github.com/user-attachments/assets/08bb6e7a-3dbe-4659-ba1a-5eeedbbaebdf" />

* Compter les souris par statut
```javascript
db.mouses.aggregate([
  { $group: { _id: "$status", total: { $sum: 1 } } }
])
```
<img width="401" alt="countbystatus" src="https://github.com/user-attachments/assets/a2a8ed1e-bee0-4d94-b593-31e03f873015" />

* Analyse de la distribution trimestrielle
```javascript
db.mouses.aggregate([
  {
    $match: { status: "distributed" }
  },
  {
    $addFields: {
      distDate: { $dateFromString: { dateString: "$distribution_date", format: "%m/%d/%Y" } }
    }
  },
  {
    $group: {
      _id: {
        year: { $year: "$distDate" },
        quarter: { $ceil: { $divide: [{ $month: "$distDate" }, 3] } }
      },
      totalDistributed: { $sum: 1 },
      byBrand: {
        $push: {
          type: "$type",
          barcode: "$barcode"
        }
      }
    }
  },
  {
    $sort: {
      "_id.year": 1,
      "_id.quarter": 1
    }
  }
])
```
<img width="293" alt="quarterlyDistributionAnlysis" src="https://github.com/user-attachments/assets/974a08a3-75d8-4b85-b1a6-2a7d2e23b1cc" />

* Trouver des souris présentant des schémas de distribution inhabituels (distribuées avant l'achat)
>[!NOTE]
>Les résultats présentés ici ont pour but de démontrer la fonctionnalité des requêtes en aidant à corriger les erreurs humaines commises lors de la saisie manuelle des données.
```javascript
db.mouses.find({
  $expr: {
    $gt: [
      { $dateFromString: { dateString: "$distribution_date", format: "%m/%d/%Y" } },
      { $dateFromString: { dateString: "$buy_date", format: "%m/%d/%Y" } }
    ]
  }
})
```
<img width="356" alt="humainError" src="https://github.com/user-attachments/assets/d03c25b0-faae-49d3-a0cc-a383992a7587" />


## Contribution
Pour contribuer à ce projet :
1. Forkez le repo
2. Apportez vos modifications
3. Envoyez une **pull request**. Si les modifications sont pertinentes, elles seront fusionnées.

   e-mail : adem.mrabet99@gmail.com

## Licence
>[!NOTE]
> Ce Projet n'a pas de licence particulière. Il s'agit simplement d'un projet académique pour rafraîchir mes connaissances.


