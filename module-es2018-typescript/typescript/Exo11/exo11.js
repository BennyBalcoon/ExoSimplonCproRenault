var film1 = {
    titre: 'Rocco et ses frères',
    realisateur: 'Luchino Visconti',
    annee: 1960,
    genre: ['Drame', 'Sport']
};
var film2 = {
    titre: 'Le hussard sur le toit',
    realisateur: 'Jean-Paul Rappeneau',
    annee: 1995,
    genre: ['Aventure', 'Cape et épée']
};
function ficheFilm(fiche) {
    console.log(fiche.titre + " a \u00E9t\u00E9 r\u00E9alis\u00E9 par " + fiche.realisateur + " en " + fiche.annee + ". Il est de genre(s) " + fiche.genre.join(' et ') + ".");
}
ficheFilm(film1);
ficheFilm(film2);
