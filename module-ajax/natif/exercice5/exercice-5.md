# Exercice 5. AJAX avec XHR : Formulaires dépendants

Reprenez l'exercice sur les listes dépendantes avec XHR ([c.f. Exercice 3](./exercice-3.md)). Il s'agit ici d'ajouter un formulaire pour pouvoir ajouter, soit :
* un Pays;
* une Région;
* une Ville.

Il s'agit ici d'utiliser l'API JavaScript native XMLHttpRequest pour effectuer des requêtes HTTP vers les URLs permettant d'ajouter chacune de ces 3 entités.

A partir d'un seul et unique document HTML.

Votre objectif est :
* D'afficher un formulaire de création de __Pays__ en dessous de la liste de __Pays__ mais uniquement si aucun __Pays__ n'est sélectionné;
    * Si le formulaire est soumis, il doit entraîner la création d'un nouveau __Pays__ et l'actualisation de la liste de __Pays__.
* D'afficher un formulaire de création de __Région__ en dessous de la liste de __Régions__ mais uniquement si aucune __Région__ n'est sélectionnée ET qu'un __Pays__ est sélectionné;
    * Si le formulaire est soumis, il doit entraîner la création d'une nouvelle __Région__ pour ce __Pays__ et l'actualisation de la liste de __Régions__.
* D'afficher un formulaire de création de __Ville__ en dessous de la liste de __Villes__ mais uniquement si aucune __Ville__ n'est sélectionnée ET qu'un __Pays__ ET une __Région__ sont sélectionnés;
    * Si le formulaire est soumis, il doit entraîner la création d'une nouvelle __Ville__ pour cette __Région__ de ce __Pays__ et l'actualisation de la liste de __Villes__.

**Vous pouvez vous aider de l'[exemple de client réalisé avec l'API XMLHttpRequest](../exemples/clients/xhr.html) (abrégé en xhr) fourni. Pensez à adapter l'exemple à votre environnement, en particulier l'adresse IP de l'hôte.*

*Vous pouvez également consulter un exemple de [serveur REST basé sur Node JS (en pur natif) ici](../exemples/serveur-natif/vanilla-rest-server.js) (attention, pour les requêtes HTTP POST, il attend des données sous forme de query string) ou un exemple de [serveur REST basé sur Express JS ici](../exemples/serveur-express/express-rest-server.js) (pour les requêtes HTTP POST, il attend des données sous forme de json, attention, vous avez besoin d'une base de données)*

---

VirtuoWorks® - tous droits réservés©