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

Reprenez l'exercice précèdent. Ici nous n'afficherons pas le *formulaire de
création d'adresses* au début. Le *champ d'autocompletion* donnera en permanence
accès à une option du type *Votre adresse n'existe pas ? Créez en une nouvelle*.

Nous n'avons donc plus qu'1 seul formulaire sur le document.

Cette option s'affichera sous le champ à la suite des choix d'*autocomplétion*.
Si l'utilisateur clique sur ce choix, le champ d'*autocompletion* est masqué et
remplacé par l'ensemble des champs correspondant à la création d'adresse.

Vous avez besoin pour cela d'un *endpoint* d'API auquel vous pouvez envoyer des
données relatives à une *personne* __ET__ à son *adresse*. Si les données reçues
sont :
* 1 identifiant d'adresse, la *personne* est associée à cette *adresse* et la
  *personne* est créé en base de donnée;
* des données de personnes et des données associées à une adresse, l'*adresse*
  est créé en base de donnée __PUIS__ la *personne* est associée à cette
  *adresse* et la *personne* est créé en base de donnée;

Pour cet exercice vous utiliserez `RxJS` :
- Pour la gestion des évènements, vous utiliserez l'*opérateur de création*
  `fromEvent` qui permet de gérer les évènements selon le
  *Design Pattern Observable*;
- Pour les requêtes AJAX, vous utiliserez l'*opérateur de création* `ajax` qui
  permet de gérer les requêtes `ajax` selon le *Design Pattern Observable*.

## Enoncé

* En HTML :

  *  Créez un formulaire de création de personnes avec tous les champs
     nécessaires ainsi qu'un *champ de saisie d'adresse*.
     Identifiez ce formulaire.

* En ECMAScript :

  * Importez les opérateurs `fromEvent` et `ajax` de `RxJS`. Vous Utiliserez
    l'opérateur `fromEvent` (au lieu de la méthode native `.addEventListener()`
    pour gérer chaque évènements).

  * Au chargement du document :
    * Lorsque l'évènement `keyup` survient sur le *champ de saisie d'adresse* :
      * Utilisez l'opérateur `ajax()` pour récupérer la liste des adresses
        correspondant à la saisie de l'utilisateur.
      * Une fois la réponse HTTP du serveur récupérée, vous allez ajouter un
        élément de type `div` immédiatement sous le *champ de saisie d'adresse*.
      * Dans cet élément, vous afficherez une liste `ul` `li` de chaque adresse
        retrouvée __suivie d'une balise `a` contenant le texte
        *Votre adresse n'existe pas ? Créez en une nouvelle*
      * Au `click` sur 1 `li` correspondant à une adresse :
        * Créez un `input` caché dans le formulaire de *création de personnes*
          avec pour valeur l'identifiant de l'adresses cliquée et un `p`
          contenant le libellé complet de l'adresse.
        * Vous pouvez essayer d'aller plus loin en :
          * Faisant en sorte que si  l'utilisateur saisi à nouveau des valeur
            dans le *champ de saisie d'adresse* le `input` caché et le `p`
            soient supprimés du formulaire;
          * Qu'une croix (X) permette de supprimer le choix d'adresse du formulaire.
      * Au `click` sur le `a`, vous masquerez le champ de saisie d'adresses et
        vous afficherez à la place la liste des champs relatif à la création
        d'adresse (attention à utiliser `.preventDefault()` avec le `a` pour
        empêcher le navigateur de "*suivre* le lien").
    * Récupérez une référence au *formulaire de création de personnes*. A la
      soumission de ce formulaire (évènement `submit`), et sans oublier
      d'empêcher le navigateur Internet de produire une requête HTTP lui-même
      à l'aide de la méthode `.preventDefault()` :
      * Utilisez l'opérateur `ajax()` pour envoyer la nouvelle personne à votre
        serveur avec les données de la nouvelle adresse a créé
        __si les champs existent__;
      * Affichez un message indiquant que la sauvegarde a bien eu lieu sous le
        formulaire de création de personnes (pensez à vérifier que la personne
        est effectivement créée en base de données).

---

VirtuoWorks® - tous droits réservés©