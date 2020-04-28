# Exercice 4. AJAX avec Fetch : Listes dépendantes

Utilisez votre serveur Spring comme serveur d'API pour un front-end en HTML/JavaScript. Sur votre serveur Spring vous avez créé les Endpoints d'API CRUD (Create Read Update Delete) pour 3 entités :
* Pays;
* Régions;
* Villes.

Il s'agit ici d'utiliser l'API JavaScript native Fetch pour effectuer exactement le même exercice que celui précède ([c.f. Exercice 3](./exercice-3.md)) et que vous avez réalisé avec l'API JavaScript native XmlHttpRequest.

A partir d'un seul et unique document HTML.

*Vous pouvez vous aider de l'[exemple de client réalisé avec l'API Fetch](../exemples/clients/fetch.html) fourni. Pensez à adapter l'exemple à votre environnement, en particulier l'adresse IP de l'hôte.*

*Vous pouvez également consulter un exemple de [serveur REST basé sur Node JS (en pur natif) ici](../exemples/serveur-natif/vanilla-rest-server.js) (attention, pour les requêtes HTTP POST, il attend des données sous forme de query string) ou un exemple de [serveur REST basé sur Express JS ici](../exemples/serveur-express/express-rest-server.js) (pour les requêtes HTTP POST, il attend des données sous forme de json, attention, vous avez besoin d'une base de données)*

---

VirtuoWorks® - tous droits réservés©