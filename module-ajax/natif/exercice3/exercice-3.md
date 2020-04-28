# Exercice 3. AJAX avec XHR : Listes dépendantes

Utilisez votre serveur Spring comme serveur d'API pour un front-end en HTML/JavaScript. Sur votre serveur Spring vous avez créé les Endpoints d'API CRUD (Create Read Update Delete) pour 3 entités :
* Pays;
* Régions;
* Villes.

Il s'agit ici d'utiliser l'API JavaScript native XMLHttpRequest pour effectuer des requêtes HTTP vers les URLs permettant de lister chacune de ces 3 entités.

A partir d'un seul et unique document HTML.

Votre objectif est :

* D'afficher 3 listes de sélection (__Pays__, __Régions__, __Villes__) qui sont dépendantes les unes des autres. En effet, les choix proposés par la liste de sélection des __Régions__ dépend du choix du __Pays__. Et, les choix proposés par la liste de sélection des __Villes__ dépend du choix de la __Région__.
    * A tout moment, si l'utilisateur choisi un __Pays__, la liste des __Régions__ associées doit être affichée. Si il ne choisit pas de __Pays__, les autres listes de sélection (__Régions__ et __Villes__ ne s'affichent pas);
    * Si un __Pays__ est sélectionné, si l'utilisateur choisi une __Région__, la liste des __Villes__ associées doit être affichée. Si il ne choisit pas de __Régions__ la liste de sélection de __Villes__ ne s'affiche pas.

Ici on ne travaillera que sur des requêtes de type GET.

1. Vous devez créer un fichier HTML qui ne contient rien.

2. Au chargement du document :
    - Vous devez utiliser XMLHttpRequest pour envoyer une requête HTTP à un URL du serveur et récupérer une liste de __Pays__ au format `JSON`. Cette liste de valeurs doit alimenter une liste de sélection qui sera créée à l'occasion.
    - La liste de sélection contiendra des balises de type `option` de la forme `<option value="id">texte</option>` ou `id` est l'identifiant numérique d'une entité et `texte` son texte descriptif (nom, descriptif ou autre).

3. A la sélection d'un __Pays__ (évènement `change` sur la liste de sélection) :
    - Vous devez supprimer la liste de sélection de __Villes__, si elle existe puis;
    - Vous devez supprimer la liste de sélection de __Régions__, si elle existe puis;
    - Vous devez utiliser XMLHttpRequest pour envoyer une requête HTTP à un URL du serveur et récupérer une liste de __Régions__ au format `JSON`. Cette liste de valeurs doit alimenter une liste de sélection qui sera (à nouveau ?) créée à l'occasion.
    - Vous devez attacher à cette liste de sélection un gestionnaire d'évènement `change` pour gérer ce qui suit...

4. A la sélection d'une __Région__ (évènement `change` sur la liste de sélection) :
    - Vous devez supprimer la liste de sélection de __Villes__, si elle existe puis;
    - Vous devez utiliser XMLHttpRequest pour envoyer une requête HTTP à un URL du serveur et récupérer une liste de __Villes__ au format `JSON`. Cette liste de valeurs doit alimenter une liste de sélection qui sera (à nouveau ?) créée à l'occasion.

*Vous pouvez vous aider de l'[exemple de client réalisé avec l'API XMLHttpRequest](../exemples/clients/xhr.html) (abrégé en xhr) fourni. Pensez à adapter l'exemple à votre environnement, en particulier l'adresse IP de l'hôte.*

*Vous pouvez également consulter un exemple de [serveur REST basé sur Node JS (en pur natif) ici](../exemples/serveur-natif/vanilla-rest-server.js) (attention, pour les requêtes HTTP POST, il attend des données sous forme de query string) ou un exemple de [serveur REST basé sur Express JS ici](../exemples/serveur-express/express-rest-server.js) (pour les requêtes HTTP POST, il attend des données sous forme de json, attention, vous avez besoin d'une base de données)*

---

VirtuoWorks® - tous droits réservés©