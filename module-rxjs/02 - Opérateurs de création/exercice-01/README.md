# Les Opérateurs de création `from` et `fromEvent`

---

## Présentation

Vous allez travailler avec l'*Opérateur de création* `from` qui permet de créer un *Observable* à partir :
- d'un Array;
- d'un objet comparable à un Array, par exemple une Collection d'objets;
- d'une Promesse;
- d'un objet itérable, par exemple un objet doté de propriétés propres;
- ou d'un objet de type Observable.

Ci-après la [Documentation pour l'opérateur `from`](https://rxjs-dev.firebaseapp.com/api/index/function/from).

Puis vous utiliserez l'Opérateur de Création `fromEvent` qui permet de créer un *Observable* à partir :
- d'un objet de type élément HTML,
- d'une Collection d'objets de type élément HTML,
- ...

Et d'un nom d'évènement. En d'autres termes, cet opérateur offre la possibilité
de gérer les évènements selon le *Design Pattern* *Observable*.

Ci-après la [Documentation pour l'opérateur `fromEvent`](https://rxjs-dev.firebaseapp.com/api/index/function/fromEvent).

## Objectif

Il s'agit ici d'implémenter un mécanisme basique de "*Drag & Drop*". Vous devez
pouvoir cliquer sur un élément d'affichage et, en maintenant la pression sur le
clic, être en mesure de déplacer l'élément sur la zone d'affichage. Lorsque le
clic est relâché, l'élément doit rester à la dernière position à laquelle il
avait été positionné.

Par ailleurs, lorsque l'élément sera en cours déplacement, une indication (sous
la forme d'un changement temporaire de couleur d'un de ses sous éléments) sera
appliquée.

Vous allez devoir utiliser les évènements :

* `mousedown` : déclenché au clic de souris;
* `mousemove` : déclenché au déplacement du curseur de souris;
* `mouseup` : déclenché au relâchement du clic de souris;

Nous utiliserons RxJS pour mettre en œuvre le *Design Pattern Observable*.

---

## Enoncé :

* Commencez par créer 3 `div` dans votre document HTML;
* Chaque `div` contient une liste `ul`;
* Chaque liste `ul` contient 2 `li`;
* Chaque `li` contient un texte court de votre choix.

### Partie 1 : Opérateur `from` uniquement

En ECMAScript uniquement :

* Vous devez importer l'Opérateur `from` de `RxJS`;

* Au Chargement du document (évènement `DOMContentLoaded`) :

  * Vous devez récupérer tous les objets du DOM correspondant aux `div`;

  * En utilisant l'opérateur `from` sur la collection d'objets, créez un
    *Observable* et déclarez un *Observer* (ou *Subscriber* ou bien encore
    abonné) qui déclare (en utilisant la méthode native `addEventListener`) :

    * Un gestionnaire d'évènement `mousedown` pour l'élément fourni à
      l'*Observer*. Utilisez du débogage dans la console pour vérifier que
      le gestionnaire d'évènement est bien ajouté à élément ;

    * Un gestionnaire d'évènement `mouseup` pour l'élément fourni à
      l'*Observer*. Utilisez du débogage dans la console pour vérifier que
      le gestionnaire d'évènement est bien ajouté à élément ;

    * Un gestionnaire d'évènement `mousemove` pour la fenêtre (ou l'onglet).
      Utilisez du débogage dans la console pour vérifier que le gestionnaire
      d'évènement est bien ajouté à élément;

* Pour l'évènement `mousedown` :
  * Vous positionnerez l'élément `div` en `absolute`;
  * Vous devez récupérer tous les objets du DOM correspondants aux `li` contenus
    dans la `div`. A l'aide de l'Opérateur `from`, et donc pour chaque `li`,
    créez un *Observable* et déclarez un *Observer* (ou *Subscriber* ou bien
    encore abonné) qui remplacera la couleur du contenu du `li` par une couleur
    de votre choix.

* Pour l'évènement `mouseup` :
  * Vous positionnerez l'élément `div` en `fixed`;
  * Vous devez récupérer tous les objets du DOM correspondants aux `li` contenus
    dans la `div`. A l'aide de l'Opérateur `from`, et donc pour chaque `li`,
    créez un *Observable* et déclarez un *Observer* (ou *Subscriber* ou bien
    encore abonné) qui rétablira la couleur d'origine du contenu du `li`.

* Pour l'évènement `mousemove` :
  * Si et uniquement si la position de l'élément `div` est `absolute`, appliquez
    les coordonnées de la souris à l'élément `div` considéré.

### Partie 2 :

En ECMAScript uniquement :

* Vous devez importer l'Opérateur `fromEvent` de `RxJS`;
* Reprenez le code de la partie précédente et remplacer toutes les utilisations
  de la méthode native `addEventListener` par l'utilisation de la méthode
  `fromEvent` de `RxJS`.
---

VirtuoWorks® - tous droits réservés©
