# Exercices sur les opérateurs de jointure

---

RxJS contient plusieurs __fonctions__ qui permettent d'effectuer des opérations sur
les Observables. Appelle ces fonctions __Opérateurs__ (*Operators*).

Il existe 2 types principaux d'opérateurs :
- Les __Opérateurs de Création__ (*Creation Operators*) qui permettent de créer
  un *Observable* à partir d'une structures de données qui n'est pas un
  *Observable* (Objet, Tableau, Evènement, ...) ou de créer un *Observable* à
  partir de plusieurs *Observable* (jointures).

- Les __*Pipeable Operators*__ qui permettent de
  créer un *Observable* à partir d'un autre *Observable* mais qui transforment
  les valeurs émises par rapport à celles émises par l'*Observable* initial.

Pour savoir comment utiliser ces fonctions vous pouvez vous référer à :

* La [documentation concernant les __Opérateurs__ de RxJS](https://rxjs-dev.firebaseapp.com/guide/operators)
* L'[API concernant les __Opérateurs__](https://rxjs-dev.firebaseapp.com/api?type=function) filtrée pour n'afficher que les __function__.

Les exercices suivants visent à expérimenter certains __Opérateurs de Jointure__
qui sont des __Opérateurs de Création__ dont la particularité est de prendre
en paramètres d'autres *Observables*.

* [Exercice 1](./exercice-01) : Utiliser l'__Opérateur de Jointure__ `merge`.

* [Exercice 2](./exercice-02) : Utiliser l'__Opérateur de Jointure__ `zip`.

---

VirtuoWorks® - tous droits réservés©