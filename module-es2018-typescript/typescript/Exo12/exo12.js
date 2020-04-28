var recette1 = {
    nom: 'Spaghetti Carbonara',
    personnes: 3,
    type: 'plat',
    ingredients: ['Oeufs', 'Joue de cochon', 'parmesan']
};
var recette2 = {
    nom: 'Guacamole',
    personnes: 4,
    type: 'apéritif',
    prix: 'bon marché'
};
var displayFood = document.getElementById('miam');
var prixOuIngredients = function (param) {
    if (param.ingredients && param.personnes > 4) {
        displayFood.innerHTML = "Pour faire la recette de " + param.nom + ", il faut: " + param.ingredients.join(' et ') + ".";
    }
    else if (param.prix) {
        displayFood.innerHTML = "La recette de " + param.nom + " est " + param.prix + ".";
    }
    else {
        displayFood.innerHTML = "" + param.nom;
    }
};
prixOuIngredients(recette1);
prixOuIngredients(recette2);
