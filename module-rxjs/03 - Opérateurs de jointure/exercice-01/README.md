# L'Opérateur de jointure `merge`

---

## Présentation

Vous allez travailler avec l'Opérateur de jointure `merge` qui permet de créer
un *Observable* à partir de plusieurs *Observables*.

Un *Observer* peut alors recevoir, __indépendamment__ et __successivement__,
chaque valeur émise par chacun des *Observables*. Chaque valeur émise par chaque *Observable* est reçue par chaque *Observer*.

Ci-après la [Documentation pour l'opérateur `merge`](https://rxjs-dev.firebaseapp.com/api/index/function/merge).

## Objectif

Vous devez créer un *piano*. Le *piano* sera représenté visuellement sous la
forme de `span` côte à côte. Chaque `span` sera identifié par la note qu'il
produit (`do`, `re`, `mi`, `fa`, `sol`, `la`, `si`) et correspondra donc à une
touche du *piano*.

Au __survol__ (`mouseover`) d'une touche du piano, on devra entendre le son
correspondant. Les sons sont fournis au format `wav` et sont dans le dossier
`sounds` fourni ( les sons sont sous licence Creative Commons - libres de
droits ). Pour cet exercice vous utiliserez les sons longs par exemple :
`do-stretched.wav` ).

Pour que le navigateur joue un son, il faut utiliser une balise `audio`
contenant une balise `source` indiquant l'URL du son à jouer. Lorsque le
navigateur Internet joue le son produit par une balise audio, il faut
attendre que le son ait fini d'être lu avant de pouvoir l'écouter à nouveau.

Or, lorsqu'on utilise un piano, le son produit par une touche dure beaucoup plus
longtemps que le temps nécessaire à la pression d'un touche. Donc, il faut créer
une balise audio qui joue le son à __chaque survol de touche__ et la supprimer
une fois que le son a été entièrement lu ( évènement `ended` de la balise
audio ).

Pour gérer les différents évènements vous utiliserez l'__Opérateur de création__
`fromEvent` et pour déclarer le code à exécuter en cas de __survol__ de
n'importe laquelle des touches du piano, vous utiliserez l'*Opérateur de jointure*
`merge`.

Attention, Chrome empêche la lecture automatique de sons par défaut. Les sons
doivent être coupés par défaut et l'utilisateur doit avoir interagi avec le
document (click ou autre) avant qu'une lecture soit possible.

## Enoncé

### Partie 1 : Opérateur `fromEvent` uniquement


* Commencez par créer 1 `div` qui contient un `span` correspondant à la touche
  pour jouer 1 note ( *do* par exemple ). Par défaut la `div` est en
  `display:none`. Créez un `p` au dessus de la `div` avec le texte
  `"cliquez ici pour jouer de la musique"` (on utilisera ce paragraphe pour
  forcer 1 interaction utilisateur avec le document de telle sorte que Chrome
  ne bloque pas la lecture des sons).

En ECMAScript uniquement :

* Vous devez importer l'*Opérateur* `fromEvent` de `RxJS`;

* Au Chargement du document (gérez l'évènement `DOMContentLoaded` avec `fromEvent`) :

  * Vous devez récupérer l'objet du DOM correspondant au `p`. Utilisez
    `fromEvent` pour faire en sorte qu'au click sur le `p`, la `div` contenant
    le `span` s'affiche;
  * Vous devez récupérer l'objet du DOM correspondant au `span`;
  * Au survol du `span` (gérez l'évènement `mouseover` avec `fromEvent`) et à
    l'aide des méthodes habituelles du DOM :
    * Créez l'objet correspondant à une balise `audio`;
    * Créez l'objet correspondant à une balise `source`;
    * Vous devez définir les propriétés suivantes de l'objet correspondant à la
      balise `source` :
      * La propriété `type` : le type mime du son à jouer
      * La propriété `muted` : avec pour valeur `muted` (sans quoi Chrome
        bloque la lecture du son, considérant qu'elle n'est pas contrôlée par
        l'utilisateur);
      * La propriété `src` : avec pour valeur l'URL du son à jouer.
    * Vous devez définir le gestionnaire d'évènement `ended` (à l'aide de
      `fromEvent`) sur l'objet correspondant à la balise `audio`. Ce
      gestionnaire supprime la balise `audio` du DOM après avoir joué le son.
    * Déclenchez la lecture du son à l'aide de la méthode `.play()` de l'objet
      correspondant à la balise `audio`.

### Partie 2 : Opérateurs `fromEvent` et `merge`

En ECMAScript uniquement :

* Vous devez importer les *Opérateurs* `fromEvent` et `merge` de `RxJS`;

* Reprenez le code précédent :
  * Créez 1 `span` par note de musique.
  * Au Chargement du document :
    * Vous devez récupérer chaque objet du DOM correspondant à chaque `span` (
      que vous identifierez individuellement différemment);
    * Utilisez `fromEvent` pour déclarer un *Observable* correspondant au survol
      de chaque objet du DOM correspondant à chaque `span`.
    * Utilisez `merge` pour obtenir une *Observable* correspondant au survol de
      n'importe lequel des objets du DOM correspondant aux `span`.
    * Déclarer __1 seul__ *Observer* qui produira la lecture de la note
      correspondant au `span` survolé en vous inspirant du code écrit
      en __Partie 1__.

---

VirtuoWorks® - tous droits réservés©