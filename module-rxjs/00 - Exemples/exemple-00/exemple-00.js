// On importe la "classe" Observable de la librairie RxJS.
import {Observable} from 'rxjs';
/**
 * Un Observable est un objet qui peut émettre des valeurs.
 * Ici on créé un Observable à l'aide la méthode .create().
 * L'observable prend en paramètre une fonction qui définira
 * toutes les valeurs à transmettre à ses "abonnés" (subscriber)
 */
const leMonde = Observable.create(function(subscriber){
  // Ce texte sera envoyé à tous les "abonnés" (subscriber) :
  subscriber.next("Journal du Jour : Enfin de bonnes nouvelles !");
  // Ce texte sera envoyé à tous les "abonnés" (subscriber) :
  subscriber.next("Journal de Demain : Vive la liberté !");
  // Ce texte sera envoyé à tous les "abonnés" (subscriber) :
  subscriber.next("Journal d'après demain : Tous au bistrot !");
  // Fin de l'envoi aux "abonnés"...
  subscriber.complete();
  // Ici plus aucun envoi ne peut avoir lieu. La méthode .complete()
  // indique la "fin" des envois aux "abonnés".
});

// Déclaration d'un "abonné" à l'Observable leMonde. Il s'agit ici de
// la fonction iciPierre qui recevra la paramétre de next() )
leMonde.subscribe(function iciPierre(grosTitres){
  console.log("Pierre à lu:", grosTitres);
});
// Déclaration d'un autre "abonné" à l'Observable leMonde. Il s'agit ici de
// la fonction iciPaul qui recevra la paramétre de next() )
leMonde.subscribe(function iciPaul(grosTitres){
  console.log("Paul à lu :", grosTitres);
});
// Dans la console vous verrez apparaître les lectures de pierre
// et paul qui correspondent aux données envoyées par l'Observable.
