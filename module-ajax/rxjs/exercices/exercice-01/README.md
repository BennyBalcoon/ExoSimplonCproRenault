# L'opérateur de création `ajax`

---

## Présentation

* Vous codez dans les fichiers `exercice-01.html` et `exercice-01.js`;
* Pour pouvoir utiliser `RxJS` dans le fichier `.js`, nous utiliserons
  `webpack`. Pour installer `webpack` et le serveur de développement de
  `webpack` vous exécuterez la commande `npm i` (les dépendances listées dans
  le `package.json` seront alors installées);
* Pour démarrer le serveur de développement de `webpack` :
  * `npx webpack-dev-server --mode development`
  * ou `npm start` (le script `start` est paramétré dans le `package.json`)
  * ou vous pouvez écrire le chemin direct vers l'exécutable dans le dossier
    caché `.bin` du sous dossier `node_modules`. Par exemple :
    * `./node_modules/.bin/webpack-dev-server --mode development`
  * ou bien encore vous pouvez demander à `node` d'exécuter le code situé dans
    le dossier d'installation de `webpack`. Par exemple :
    * `node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --mode development`

## Objectif

L'objectif est de créer un __formulaire de création de *personnes*__. Mais pour
pouvoir créer une *personne*, vous devez lui assigner une *identifiant d'adresse*.
Donc, il faut donc au préalable créer des adresses en base de données. Vous
devez donc également créer un __formulaire de création d'*adresses*__.

Au chargement du document, vous afficherez dans le formulaire de création de
*personnes* une __liste de sélection__ contenant la __liste des adresses__ déjà
existantes en base de données.

Et, __à chaque création__ de nouvelle *adresse* via le formulaire de création
d'*adresses*, vous devrez __mettre à jour__ la liste de sélection d'*adresses* pour
pouvoir proposer ce __nouveau choix__ dans le formulaire de création de *personnes*.

Pour cet exercice vous utiliserez `RxJS` :
- Pour la gestion des évènements, vous utiliserez l'*opérateur de création*
  `fromEvent` qui permet de gérer les évènements selon le
  *Design Pattern Observable*;

- Pour les requêtes AJAX, vous utiliserez l'*opérateur de création* `ajax` qui
  permet de gérer les requêtes `ajax` selon le *Design Pattern Observable*.

## Enoncé

* En HTML :

  *  Créez un formulaire de création d'adresse avec tous les champs nécessaires.
     Identifiez ce formulaire.
  *  Créez un formulaire de création de personnes avec tous les champs
     nécessaires __à l'exception__ de la liste de sélection d'adresses.
     Identifiez ce formulaire.

* En ECMAScript :

  * Importez les opérateurs `fromEvent` et `ajax` de `RxJS`. Vous Utiliserez
    l'opérateur `fromEvent` (au lieu de la méthode native `.addEventListener()`
    pour gérer chaque évènements).

  * Au chargement du document :
    * Effectuez une requête AJAX à destination de votre serveur à l'aide de
      l'opérateur `ajax()` pour récupérer la liste des adresses en base de
      données.
    * Utilisez cette liste pour créer une liste sélection d'adresses qui, pour
      chaque adresse, créé une balise `option` ayant pour valeur l'identifiant
      de l'adresse et pour contenu le texte de l'adresse.
    * Positionnez cette liste de sélection sous élément `form` correspondant
      au *formulaire de création de personnes*
    * Récupérez une référence au *formulaire de création d'adresses*. A la
      soumission de ce formulaire (évènement `submit`), et sans oublier
      d'empêcher le navigateur Internet de produire une requête HTTP lui-même
      à l'aide de la méthode `.preventDefault()` :
      * Utilisez l'opérateur `ajax()` pour envoyer la nouvelle adresse à votre
        serveur;
      * Récupérez une référence à la liste de sélection d'adresses et mettez la
        à jour avec la nouvelle adresse ou recréez la complétement (au choix).
    * Récupérez une référence au *formulaire de création de personnes*. A la
      soumission de ce formulaire (évènement `submit`), et sans oublier
      d'empêcher le navigateur Internet de produire une requête HTTP lui-même
      à l'aide de la méthode `.preventDefault()` :
      * Utilisez l'opérateur `ajax()` pour envoyer la nouvelle personne à votre
        serveur;
      * Affichez un message indiquant que la sauvegarde a bien eu lieu sous le
        formulaire de création de personnes (pensez à vérifier que la personne
        est effectivement créée en base de données).

---

VirtuoWorks® - tous droits réservés©