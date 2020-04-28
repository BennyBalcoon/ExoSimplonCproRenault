# L'Opérateur de jointure `zip`

---

## Présentation

Vous allez travailler avec l'*Opérateur de jointure* `zip` qui permet de créer
un *Observable* à partir de plusieurs *Observables*.

Un *Observer* peut alors recevoir, __de façon combinée__ et __successivemment__,
chaque valeur émise par chacun des *Observables*. Si un *Observable* émet moins
de valeurs qu'un autre *Observable*, les valeurs émises par celui qui en émet le
plus ne seront pas émises tant qu'elle ne pourront pas être combinées avec de
nouvelles valeurs émises par celui qui en émet moins.

* Illustration  du fonctionnement (à l'aide d'un *Marble Diagram*) :

  *Observable A* : vA1 à vA4 sont des valeurs émises par A

  ------vA1------------vA2-------------vA3----------------------------> temps

  *Observable B* : vB1 à vB4 sont des valeurs émises par B

  -------------vB1------------vB2-------------vB3------------vB4------> temps

  *zip(A,B)*   : [vAx,vBx] sont des combinaisons de valeurs émises par zip(A,B)

  ----------[vA1,vB1]-------[vA2,vB2]-------[vA3,vB3]-----------------> temps

Vous remarquez que A n'émet pas de 4ème valeur alors que B si. L'*Observable*
obtenu à l'aide de `zip` ne produit donc pas de 4ème valeur tant que A ne
produit pas de 4ème valeur (pas de combinaison possible).

Ci-après la [Documentation pour l'opérateur `zip`](https://rxjs-dev.firebaseapp.com/api/index/function/zip).

## Objectif

Nous allons composer de la musique à l'aide du *piano* créé précédemment.

Il s'agit, dans premier temps, de pouvoir cliquer sur une série de notes (par
exemple : *do*, *re*, *mi*, *fa*, *sol*, *la*, *si*). Puis de re-jouer chaque
note à chaque pression d'une touche quelconque du clavier.

Puis dans un second temps, nous utiliserons l'*Opérateur de création* `interval`
[documenté ici](https://rxjs-dev.firebaseapp.com/api/index/function/interval)
pour créer un *Observable* qui émet des valeurs à intervalle de temps régulier.
Cet *Observable* nous permettra de rejouer automatiquement les notes sur
lesquelles on aura cliqué.

## Enoncé

### Partie 1 : Opérateurs `zip`, `merge`, `from` et `fromEvent`

En ECMAScript uniquement :

* Reprenez le code de l'exercice précédent;
* Vous devez importer les *Opérateurs* `from`, `fromEvent`, `merge` et `zip` de `RxJS`;
* Dans votre document HTML ajoutez un élément HTML de type `button` qui nous
  servira de bouton de lecture pour la séquence musicale;
* Vous allez modifier votre code de telle sorte qu'à chaque pression d'une note,
  celle-ci soit enregistrée dans un `Array`.
* Au clic sur le `button` (géré à l'aide de `fromEvent`), vous utiliserez
  l'opérateur `from` pour créer un observable à  partir de l'`Array`;
* Utilisez ensuite l'opérateur `zip` pour combiner l'observable obtenu à
  partir de l'`Array` avec un autre observable gérant les pressions de touches
  du clavier (observable `fromEvent` pour l'évènement `keypress` sur `window`).
* Lorsque `zip` émet ses valeurs (qui seront donc la combinaison de la note
  pressée et de l'objet d'évènement correspondant la touche du clavier pressée),
  exécutez un code qui permet de jouer la note (en vous inspirant de celui
  que vous avez déjà écrit).

### Partie 2 : Opérateurs `zip`, `merge`, `from`, `interval` et `fromEvent`

En ECMAScript uniquement :

* Reprenez le code de la __Partie 1__;
* Vous devez importer les *Opérateurs* `from`, `fromEvent`, `merge`, `interval` et `zip` de `RxJS`;
* Remplacer l'*Observable* qui gère la pression de touches du clavier par un
  *Observable* obtenu à l'aide de l'*Opérateur de création* `interval` (avec un
  délai d'émission entre chaque valeur de `300` *ms* par exemple).

---

VirtuoWorks® - tous droits réservés©