import { Observable } from "rxjs";

// Créé un Observable
const journalLiberation = Observable.create(function(abonné){
  abonné.next("Journal du jour : vive la libérté !");
  abonné.next("Journal de demain : fin du confinemment ?");
  abonné.next("Journal du surlendemain : Pas sûr");
  abonné.error();
  abonné.next("Journal extraordinaire");
});


// Création d'un Observer / abonné
const pierre = {
  next: function(journal){
    console.log('Pierre a lu :', journal);
  },
  error: function(){
    console.log("Une erreur est survenue");
  },
  complete: function(){
    console.log("Fin de l'abonnement de Pierre.");
  }
};

// Ajout d'un Observer / abonné dans l'observable
journalLiberation.subscribe(pierre);

// Création ET ajout d'un Observer / abonné dans l'observable
journalLiberation.subscribe({
  next: function(journal){
    console.log('Marie a lu :', journal);
  }
});


const mouvementSouris = Observable.create(function(abonné){
  window.addEventListener("mousemove", function(evtSouris){
    abonné.next({
      x: evtSouris.clientX,
      y: evtSouris.clientY
    });
  });
});

mouvementSouris.subscribe(function(valeur){
  console.log("Coordonnées souris",valeur.x, valeur.y);
  //...
  //...
});
