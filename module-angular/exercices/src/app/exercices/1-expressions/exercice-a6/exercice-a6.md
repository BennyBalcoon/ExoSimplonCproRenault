# Angular : les expressions - Exercice 5 - la directive NgIf

## Préparation

Créez un nouveau composant nommé "exercice-a5" dans le dossier `src/app/exercices/1-expressions/`, en utilisant le [CLI Angular](https://angular.io/cli).

Pour afficher ce composant, ajoutez le sélecteur correspondant dans le template du composant principal (`src/app/app.component.html`).

## Introduction

La directive `NgIf` permet de supprimer ou insérer un élément du DOM. La directive `NgIf` prend une expression qui sera évaluée à une valeur booléenne : si la valeur obtenue est `false` le nœud DOM est supprimé, si la valeur obtenue est `true` le nœud DOM est inséré à l'endroit ou la directive est utilisée.

### Documentation

- [La directive `NgIf`](https://angular.io/api/common/NgIf)
- Guide : [Affichage conditionnel avec `NgIf`](https://angular.io/guide/displaying-data#conditional-display-with-ngif).
- Guide : [Les directives structurelles](https://angular.io/guide/structural-directives#structural-directives).

## Partie 1

Créez un formulaire avec une liste de sélection. Les différentes options sont :

- rouge;
- vert;
- bleu;
- rouge et vert;
- rouge et bleu;
- bleu et vert;
- rouge vert bleu.

## Partie 2

Créez 3 div auxquelles vous affecterez des propriétés de style de telle sorte qu'elles s'affichent sous la forme de 3 ronds de couleur (rouge, vert et bleu).

## Partie 3

Combinez la directive qui vous permet d'associer une valeur de formulaire à une propriété du composant, ainsi que l'utilisation de directive `NgIf` pour faire en sorte que lorsqu'on effectue un choix dans la liste de sélection on ne voit apparaître que les div qui correspondent au choix effectué.

Indication : Les expressions peuvent contenir des calculs logiques. Exemple : `{{ 1 && 0 }}` donne `false` alors que `{{ 1 || 0 }}` donne `true`.

---

VirtuoWorks® - tous droits réservés©
