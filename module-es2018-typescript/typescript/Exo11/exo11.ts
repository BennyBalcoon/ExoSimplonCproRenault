interface Film {
    titre: string;
    realisateur: string;
    annee: number;
    genre: string[];
}

const film1: Film = {
    titre: 'Rocco et ses frères',
    realisateur: 'Luchino Visconti',
    annee: 1960,
    genre: ['Drame', 'Sport']
};

const film2: Film = {
    titre: 'Le hussard sur le toit',
    realisateur: 'Jean-Paul Rappeneau',
    annee: 1995,
    genre: ['Aventure', 'Cape et épée']
}

function ficheFilm(fiche: Film) {
    console.log(`${fiche.titre} a été réalisé par ${fiche.realisateur} en ${fiche.annee}. Il est de genre(s) ${fiche.genre.join(' et ')}.`);
}

ficheFilm(film1);
ficheFilm(film2);