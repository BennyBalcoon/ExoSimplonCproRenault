/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart.js */ \"./src/cart.js\");\n/* harmony import */ var _gui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui.js */ \"./src/gui.js\");\n/* harmony import */ var _products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products.js */ \"./src/products.js\");\n// Les constructeurs devront être importés.\n\n\n\n\n\nconst builder = new _gui_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n  new _cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n  new _products_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]()\n);\n// Initialisation de l'interface graphique.\nbuilder.initialize();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/cart.js":
/*!*********************!*\
  !*** ./src/cart.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// à exporter...\nclass CartManager {\n\n  constructor () {\n    this.cart = [];\n  }\n\n  getCart () {\n    return this.cart;\n  }\n\n  addItem (item) {\n    for (let i = 0; i < this.cart.length; i++) {\n      if (item === this.cart[i].item) {\n        this.cart[i].quantity++;\n        return;\n      }\n    }\n    this.cart.push({\n      quantity: 1,\n      item: item\n    });\n  }\n\n  removeItem (item) {\n    for (let i = 0; i < this.cart.length; i++) {\n      this.cart.quantity = this.cart.quantity || 0;\n      if (item === this.cart[i].item) {\n        this.cart[i].quantity--;\n        if (this.cart[i].quantity < 1) {\n          this.cart.splice(i, 1);\n        }\n      }\n    }\n  }\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartManager);\n\n\n//# sourceURL=webpack:///./src/cart.js?");

/***/ }),

/***/ "./src/gui.js":
/*!********************!*\
  !*** ./src/gui.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// à exporter...\n class GuiBuilder {\n\n  constructor (cartManager, productsRepository) {\n    this.containers = {};\n    this.cartManager = cartManager;\n    this.productsRepository = productsRepository;\n  }\n\n  showProductLine (theProduct) {\n    const line = window.document.createElement(\"p\");\n\n    const product = window.document.createElement(\"span\");\n    product.appendChild(\n      window.document.createTextNode(theProduct.name)\n    );\n    product.appendChild(\n      window.document.createTextNode(\" Prix unitaire : \")\n    );\n    product.appendChild(\n      window.document.createTextNode(theProduct.price)\n    );\n    product.appendChild(\n      window.document.createTextNode(\" Actions : \")\n    );\n    line.appendChild(product);\n\n    const actions = window.document.createElement(\"span\");\n\n    const more = window.document.createElement(\"a\");\n    more.appendChild(\n      window.document.createTextNode(\"Ajouter [ + ]\")\n    );\n    actions.appendChild(more);\n    actions.appendChild(\n      window.document.createTextNode(\"  \")\n    );\n\n    const less = window.document.createElement(\"a\");\n    less.appendChild(\n      window.document.createTextNode(\"Retirer [ - ]\")\n    );\n    actions.appendChild(less);\n    actions.appendChild(\n      window.document.createTextNode(\"  \")\n    );\n\n    line.appendChild(actions);\n\n    more.addEventListener(\"click\", () => {\n      this.cartManager.addItem(theProduct);\n      this.showCart();\n    });\n\n    less.addEventListener(\"click\", () => {\n      this.cartManager.removeItem(theProduct);\n      this.showCart();\n    });\n\n    return line;\n  }\n\n  showProducts () {\n    if (this.containers.products) {\n      this.containers.products\n        .parentNode\n        .removeChild(\n          this.containers.products\n        );\n    }\n    this.containers.products = window.document.createElement(\"div\");\n    const line = window.document.createElement(\"p\");\n    line.appendChild(\n      window.document.createTextNode(\"Produits :\")\n    );\n    this.containers.products.appendChild(line);\n\n    const products = this.productsRepository.getProducts();\n    for (const product of products) {\n      const line = this.showProductLine(product);\n      this.containers.products.appendChild(line);\n    }\n\n    window.document.body.appendChild(this.containers.products);\n  }\n\n  showCart () {\n    if (this.containers.cart) {\n      this.containers.cart\n        .parentNode\n        .removeChild(\n          this.containers.cart\n        );\n    }\n    this.containers.cart = window.document.createElement(\"div\");\n    this.containers.cart.id = \"cart\";\n    const line = window.document.createElement(\"p\");\n    line.appendChild(\n      window.document.createTextNode(\"Panier :\")\n    );\n    this.containers.cart.appendChild(line);\n\n    const cart = this.cartManager.getCart();\n    cart.forEach((inCart) => {\n      const line = window.document.createElement(\"p\");\n\n      const product = window.document.createElement(\"span\");\n      product.appendChild(\n        window.document.createTextNode(inCart.item.name)\n      );\n      product.appendChild(\n        window.document.createTextNode(\" Quantité : \")\n      );\n      product.appendChild(\n        window.document.createTextNode(inCart.quantity)\n      );\n      product.appendChild(\n        window.document.createTextNode(\" Prix total : \")\n      );\n      product.appendChild(\n        window.document.createTextNode(inCart.item.price * inCart.quantity)\n      );\n\n      line.appendChild(product);\n      this.containers.cart.appendChild(line);\n    });\n\n    window.document.body.appendChild(this.containers.cart);\n  }\n\n  show() {\n    this.showProducts();\n    this.showCart();\n  }\n\n  initialize () {\n    if (window.document.body) {\n      this.show();\n    } else {\n      window.document.addEventListener(\"DOMContentLoaded\", () => {\n        this.show();\n      });\n    }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GuiBuilder);\n\n\n//# sourceURL=webpack:///./src/gui.js?");

/***/ }),

/***/ "./src/products.js":
/*!*************************!*\
  !*** ./src/products.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// à exporter...\nclass ProductsRepository {\n\n  constructor () {\n    this.products = [{\n      id: 1,\n      name: \"Product 1\",\n      price: 100\n    }, {\n      id: 22,\n      name: \"Product 2\",\n      price: 140\n    }, {\n      id: 3,\n      name: \"Product 3\",\n      price: 125\n    }];\n  }\n\n  getProduct (id) {\n    for (const product of this.products) {\n      if (id === product.id) {\n        return product;\n      }\n    }\n  }\n\n  getProducts () {\n    return this.products;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsRepository);\n\n\n//# sourceURL=webpack:///./src/products.js?");

/***/ })

/******/ });