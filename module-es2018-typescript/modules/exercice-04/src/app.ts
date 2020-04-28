// Les constructeurs devront être importés.

import CartManager from "./cart";
import GuiBuilder from "./gui";
import ProductsRepository from './products';

const builder = new GuiBuilder(
  new CartManager(),
  new ProductsRepository()
);
// Initialisation de l'interface graphique.
builder.initialize();
