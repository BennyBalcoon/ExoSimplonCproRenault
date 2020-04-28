// Les constructeurs devront être importés.

// import CartManager from "./cart.js";
// import GuiBuilder from "./gui.js";
// import ProductsRepository from './products.js';

define(['cart', 'gui', 'products'], function() {

  const builder = new GuiBuilder(
    new CartManager(),
    new ProductsRepository()
  );
  // Initialisation de l'interface graphique.
  builder.initialize();
})
