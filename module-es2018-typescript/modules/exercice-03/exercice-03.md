# Exercice 03 : Un programme modulaire avec Webpack

---

[WebPack](https://webpack.js.org/) est un *bundler*. C'est un outil en ligne de commande qui permet de créer un seul fichier `.js` à partir de plusieurs fichiers `.js` ou, à l'aide d'extensions qu'on appelle *loaders*, à partir de fichiers en format `.ts`, et autre...

Mais ce n'est pas tout. Lorsque WebPack créé le *bundle*, il veille à conserver l'architecture modulaire du code source. En d'autres termes, le code généré préserve les modules déclarés et donc l'isolation entre les différentes variables des différents modules.

* Installez `webpack` et le `webpack-cli` (outil en ligne de commande);
* Créez un fichier de configuration `webpack.config.js` pour WebPack en vous aidant de la [documentation](https://webpack.js.org/concepts/configuration/) pour transformer en *bundle* les 4 fichiers JavaScript l'exercice00.
* Veillez à vous assurer que les 4 fichiers sont bien utilisés comme des modules à l'aide des mots-clés `import` et `export`.
* Utilisez `webpack` en ligne de commande pour générer le *bundle*. Dans votre document HTML vous utiliserez le *bundle* plutôt que les fichier `.js` source.

Le programme devra fonctionner comme l'original.

---

VirtuoWorks® - tous droits réservés©
