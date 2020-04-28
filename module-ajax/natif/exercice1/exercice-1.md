# Exercice 1. AJAX avec XHR : Lister/Ajouter des adresses

Utilisez votre serveur Spring comme serveur d'API pour un front-end en HTML/JavaScript.

Vous utiliserez l'API JavaScript native XMLHttpRequest pour effectuer au moins :

* Une requête HTTP de type GET vers un URL de votre API
* Une requête HTTP de type POST vers un URL de votre API

A partir d'un seul et unique document HTML.

1. Vous devez créer un fichier HTML qui contient :
    - Une liste de sélection vide
    - Une zone identifiée vide pour un affichage (une `div` suffit)
    - Un formulaire de saisie pour une entité de votre serveur Spring (un formulaire avec plusieurs champs correspondant à la structure d'une entité).

2. Au chargement du document :
    - Vous devez utiliser XMLHttpRequest pour envoyer une requête HTTP à un URL du serveur et récupérer une liste de valeurs au format `JSON`. Cette liste de valeurs doit alimenter la liste de sélection.
    - La liste de sélection contiendra des balises de type `option` de la forme `<option value="id">texte</option>` ou `id` est l'identifiant numérique d'une entité et `texte` son texte descriptif (nom, descriptif ou autre).

3. A la soumission du formulaire :
    - Vous devez utiliser XMLHttpRequest pour envoyer les données saisies dans le formulaire à un URL. Cet URL est l'URL que vous avez prévu sur votre serveur pour enregistrer une entité.
    - Vous devez penser à empêcher le navigateur Internet d'envoyer lui même la requête HTTP en annulant son comportement par défaut lors de la capture de l'évènement de soumission (utilisez la méthode `preventDefault()` sur l'objet d'évènement).
    - Par ailleurs, avant d'envoyer la requête HTTP, vous devez récuperer les données du formulaire et les formatter telles qu'elles sont attendues par votre serveur (query string, json, ...).
    - Enfin, lorsque vous paramétrez la requête HTTP que vous allez envoyer, penser à ajouter dans les en-têtes de requête HTTP le type de données que vous vous apprêtez à envoyer (par exemple : `application/json`).

4. Après la soumission d'un formulaire :

    - Vous devez afficher un message sous le formulaire indiquant si la sauvegarde de données à réussi ou échoué.
    - Vous devez mettre à jour la liste de sélection. Pour mettre à jour la liste de sélection, vous devez re-effectuer les mêmes opération qu'à la partie 2 (au chargement du document).

*Vous pouvez vous aider de l'[exemple de client réalisé avec l'API XMLHttpRequest](../exemples/clients/xhr.html) (abrégé en xhr) fourni. Pensez à adapter l'exemple à votre environnement, en particulier l'adresse IP de l'hôte.*

*Vous pouvez également consulter un exemple de [serveur REST basé sur Node JS (en pur natif) ici](../exemples/serveur-natif/vanilla-rest-server.js) (attention, pour les requêtes HTTP POST, il attend des données sous forme de query string) ou un exemple de [serveur REST basé sur Express JS ici](../exemples/serveur-express/express-rest-server.js) (pour les requêtes HTTP POST, il attend des données sous forme de json, attention, vous avez besoin d'une base de données)*

---

VirtuoWorks® - tous droits réservés©