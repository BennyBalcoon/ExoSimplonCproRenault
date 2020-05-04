# L'opérateur de création `ajax`

---

## Présentation

* Vous codez dans les fichiers `exercice-02.html` et `exercice-02.js`;
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

Reprenez l'exercice précèdent. Ici nous allons remplacer la liste de sélection
d'adresses par un *champ d'autocompletion*. Un *champ d'autocompletion* est un
champ de saisie sous lequel, pour chaque lettre saisie, des choix s'affichent.
En cas de clic sur un des choix proposé, celui-ci s'affiche sous le champ.

Dans notre cas, non seulement le choix proposé  s'affichera sous le champ, mais
on créera également un `input` caché contenant l'identifiant du choix effectué.

Vous avez besoin pour cela d'un *endpoint* d'API auquel vous pouvez envoyer des
lettres et qui vous répond en vous renvoyant la liste des possibilités associées.
Probablement un *endpoint* d'API qui effectue une sélection `SELECT`  dans la
base de données avec l'opérateur `SQL` `LIKE`.

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
     nécessaires ainsi qu'un *champ de saisie d'adresse*.
     Identifiez ce formulaire.

* En ECMAScript :

  * Importez les opérateurs `fromEvent` et `ajax` de `RxJS`. Vous Utiliserez
    l'opérateur `fromEvent` (au lieu de la méthode native `.addEventListener()`
    pour gérer chaque évènements).

  * Au chargement du document :
    * Récupérez une référence au *formulaire de création d'adresses*. A la
      soumission de ce formulaire (évènement `submit`), et sans oublier
      d'empêcher le navigateur Internet de produire une requête HTTP lui-même
      à l'aide de la méthode `.preventDefault()` :
      * Utilisez l'opérateur `ajax()` pour envoyer la nouvelle adresse à votre
        serveur;
    * Lorsque l'évènement `keyup` survient sur le *champ de saisie d'adresse* :
      * Utilisez l'opérateur `ajax()` pour récupérer la liste des adresses
        correspondant à la saisie de l'utilisateur.
      * Une fois la réponse HTTP du serveur récupérée, vous allez ajouter un
        élément de type `div` immédiatement sous le *champ de saisie d'adresse*.
      * Dans cet élément, vous afficherez une liste `ul` `li` de chaque adresse
        retrouvée.
      * Au `click` sur 1 `li` correspondant à une adresse :
        * Créez un `input` caché dans le formulaire de *création de personnes*
          avec pour valeur l'identifiant de l'adresses cliquée et un `p`
          contenant le libellé complet de l'adresse.
        * Vous pouvez essayer d'aller plus loin en :
          * Faisant en sorte que si  l'utilisateur saisi à nouveau des valeur
            dans le *champ de saisie d'adresse* le `input` caché et le `p`
            soient supprimés du formulaire;
          * Qu'une croix (X) permette de supprimer le choix d'adresse du formulaire.
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