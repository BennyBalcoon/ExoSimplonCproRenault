# Les Opérateurs de création `iif` et `range`

---

## Présentation

Vous allez travailler avec l'Opérateur de Création `iif` qui permet de créer un
*Observable* dépendant d'un condition. `iif` prend en argument une fonction qui
retourne un booléen (issus d'un test), ainsi que 2 *Observables* :
* Celui qui est utilisé si la fonction passée en argument retourne `true`;
* Celui qui est utilisé si la fonction passée en argument retourne `false`.

Pour créer ces 2 *Observables*, vous utiliserez la "classe" `Observable` de
`RxJS` comme vu dans les exercices précédents.

Ci-après la [Documentation pour l'opérateur `iif`](https://rxjs-dev.firebaseapp.com/api/index/function/iif).

Puis vous travaillerez avec l'Opérateur de Création `range` qui permet de créer
un *Observable* pour une suite ordonnée de valeurs numériques. Chaque valeur
sera transmise successivement aux *Observers*.

Ci-après la [Documentation pour l'opérateur `range`](https://rxjs-dev.firebaseapp.com/api/index/function/range).

## Objectif

Il s'agit ici d'un exercice purement abstrait pour illustrer l'utilisation de
ces 2 Opérateurs de Création. L'objectif est de créer 100 objets qui
représentent des robots. Chaque robot produira dans la console le texte
"Equipe Bleue" si son identifiant est pair ou "Equipe Rouge" si son identifiant
est impair.

## Enoncé

* En ECMAScript uniquement :
  * Vous devez importer la "classe" `Observable` ainsi que les opérateurs,
    `iif` et `range` de `RxJS`;

  * Créez une "classe" `Robot`. Cette "classe" définit les caractéristiques d'un
    robot. Un robot a :
    * 1 propriété propre : Son identifiant qui est une valeur numérique. C'est
      une propriété du constructeur, en d'autres termes, elle devra être fournie
      à la création d'un robot.
    * 2 méthodes dans son prototype : Une méthode `equipeBleue` qui retourne le
      texte `Equipe Bleue !` et une méthode `equipeRouge` qui retourne le texte
      `Equipe Rouge !`.
  * Créez un premier robot. l'identifiant de ce robot est une valeur aléatoire
    comprise entre 0 et 100.

### Partie I :

    * Utiliser l'Opérateur de Création `iif` ainsi que la "classe" `Observable`
      pour obtenir un *Observable* qui émet à ses *Observer* la valeur de retour
      de la méthode `equipeBleue` si son identifiant est pair, sinon, la valeur
      de retour de la méthode `equipeRouge`.
    * Déclarez un *Observer* (ou *Subscriber* ou bien encore abonné) qui affiche
      la valeur émise par l'*Observable* obtenu à l'aide de `iif` dans la
      console.

### Partie II :

    * Utiliser l'Opérateur de Création `range` pour créer 100 robots (avec pour
      chacun un identifiant aléatoire) et faites en sorte que chaque robot soit
      associé à un *Observable* et un *Observer* sur le même modèle que dans la
      partie précédente.
    * Assurez vous que chaque *Observer* affiche bien l'équipe du robot
      considéré dans la console.

---

VirtuoWorks® - tous droits réservés©