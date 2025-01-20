# nosql-project Mini projet

### 1. Description
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

### Technologies utilisées
- **React.JS**
- **Node.js**
- **ExpressJS**
- **Axios**
- **Nodemon**
- **Cors**
- **Docker**
- **MongoDB**
- **JSON**

### Installation et exécution
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
<img width="446" alt="dockerpull" src="https://github.com/user-attachments/assets/f92217d9-5dba-4087-b07d-d579d288bb4b" />
<img width="685" alt="dockerrun" src="https://github.com/user-attachments/assets/2a2b0f28-a8ea-4fcf-a37e-3954af4640fc" />
<img width="737" alt="dockerps" src="https://github.com/user-attachments/assets/e93490c0-f93a-4c79-811f-ce5787fad1f3" />
<img width="358" alt="insterOne" src="https://github.com/user-attachments/assets/a56afcd8-fabd-4dce-a488-f610667e0ca0" />
<img width="290" alt="findAll" src="https://github.com/user-attachments/assets/48af4333-73eb-4db0-b68e-d42f43d366b4" />


### Contribution
Pour contribuer à ce projet :
    1. Forkez le repo
    2. Apportez vos modifications
    3. Envoyez une **pull request**. Si les modifications sont pertinentes, elles seront fusionnées.

### Licence
>[!NOTE]
> Ce Projet n'a pas de licence particulière. Il s'agit simplement d'un projet académique pour rafraîchir mes connaissances.


