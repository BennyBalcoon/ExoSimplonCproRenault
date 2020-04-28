# Exercices de découverte de RxJS

---

[RxJS](https://rxjs-dev.firebaseapp.com/) est une librairie pour faire de la [programmation reactive](https://fr.wikipedia.org/wiki/Programmation_r%C3%A9active) basée sur le [design pattern Observer](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript).

Nous allons utliser RxJS en ES6+ pour s'exercer à la programmation réactive.

Pour utiliser RxJS, il faut d'abord le __télécharger__ puis l'utiliser comme un __module ES6+__.

Pour pouvoir utiliser RxJS comme un __module ES6+__ nous allons utiliser un *bundler* : [webpack](https://webpack.js.org/) et pour faciliter la réalisation des exercices, nous utiliserons le [serveur de développement fourni par webpack](https://webpack.js.org/configuration/dev-server/).


Pour initialiser votre dossier de travail :
* A la racine de ce dossier se trouve un fichier [package.json](./package.json). Ce fichier contient toutes les dépendances citées précédemment. Utilisez votre terminal pour vous positionner à la racine de votre dossier de travail et utilisez `npm i` ou `npm install` pour installer les dépendences (`rxjs`, `webpack`, `webpack-cli`, `webpack-dev-server`).

* Vérifiez que vous avez, à la racine de votre dossier de travail, un dossier `node_modules` qui contient les dépendances requises pour travailler.

* Lorsque vous vous trouvez à la racine de chaque dossier d'exercices vous remarquerez la présence de plusieurs fichiers :

  * Un fichier `package.json` : Ce fichier contient un script `start` qui démarre un serveur de développement webpack. Pour l'utiliser, positionnez vous à la racine du dossier de l'exercice à l'aide de votre terminal. Puis lancer le script `start` en utilisant `npm start`.

  * Un fichier `webpack.config.js` qui est le fichier de configuration de webpack. Ce fichier est volontairement minimaliste. Il indique le chemin du fichier à modulariser/*bundler*. C'est le paramètre : `entry`. Et il indique le nom du fichier de sortie qui sera créé : `bundle.js`.

  * Un fichier `.html` : c'est la page qui sert de point d'entrée à l'exercice. Lorsque le serveur webpack est demarré on y accède à l'URL : `http://localhost:8080/[fichier].html` ou `[fichier]` est le nom du fichier. Vous remarquerez que ce fichier contient une balise script qui fait appel au fichier `bundle.js` créé par le serveur de développement webpack.

  * Un fichier `.js` : c'est notre fichier de travail, celui qui sera modularisé/*bundlé* par webpack. Dans ce fichier vous pouvez importer rxjs ou un de ses sous modules en utilisant le mot-clé `import`. Par exemple : `import {Observable} from 'rxjs';` pour importer la "classe" `Observable`.

### Exemple :

Pour valider, vérifier et observer le fonctionnement de RxJS, vous pouvez consulter l'[exemple](./00%20-%20Exemples/exemple-00) fourni.

Pensez à vous positionner, à l'aide de votre terminal, à la racine du dossier [exemple-00](./00%20-%20Exemples/exemple-00) et à démarrer le serveur de développement de webpack à l'aide de `npm start` pour tester l'exemple.

En cas de problème, n'hésitez pas à solliciter mon aide.

### Exercices

* [Exemples](./00%20-%20Exemples)
* [Observables génériques](./01%20-%20Observables%20génériques)
* (__NEW__ !) [Opérateurs de création](./02%20-%20Opérateurs%20de%20création)
* (__NEW__ !) [Opérateurs de jointure](./03%20-%20Opérateurs%20de%20jointure)
* (__A Venir__) Opérateurs de transformation(./04%20-%20Opérateurs%20de%20transformation)
* (__A Venir__) Opérateurs de filtrage
* (__A Venir__) Opérateurs multicanaux
* (__A Venir__) Opérateurs utilitaires et autres
* (__NEW__ !) Observables pour faire de l'AJAX : [__Voir module AJAX__](../module-ajax)

---

VirtuoWorks® - tous droits réservés©
