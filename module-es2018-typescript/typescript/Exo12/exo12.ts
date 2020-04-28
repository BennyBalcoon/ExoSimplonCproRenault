interface Recette {
    nom: string;
    personnes: number;
    type: string;
    ingredients?: string[];
    prix?: string;
}

const recette1: Recette = {
    nom: 'Spaghetti Carbonara',
    personnes: 3,
    type: 'plat',
    ingredients: ['Oeufs', 'Joue de cochon', 'parmesan']
}

const recette2: Recette = {
    nom: 'Guacamole',
    personnes: 4,
    type: 'apéritif',
    prix: 'bon marché'
}

const displayFood: HTMLParagraphElement = <HTMLParagraphElement>document.getElementById('miam');

const prixOuIngredients = function (param: Recette){
    if (param.ingredients && param.personnes>4) {
        displayFood.innerHTML = `Pour faire la recette de ${param.nom}, il faut: ${param.ingredients.join(' et ')}.`;
    } else if (param.prix) {
        displayFood.innerHTML = `La recette de ${param.nom} est ${param.prix}.`;
    } else {
        displayFood.innerHTML = `${param.nom}`;
    }
}

prixOuIngredients(recette1);
prixOuIngredients(recette2);