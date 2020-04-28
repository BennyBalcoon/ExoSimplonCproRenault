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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Les constructeurs devront être importés.\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar cart_1 = __webpack_require__(/*! ./cart */ \"./src/cart.ts\");\nvar gui_1 = __webpack_require__(/*! ./gui */ \"./src/gui.ts\");\nvar products_1 = __webpack_require__(/*! ./products */ \"./src/products.ts\");\nvar builder = new gui_1.default(new cart_1.default(), new products_1.default());\n// Initialisation de l'interface graphique.\nbuilder.initialize();\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/cart.ts":
/*!*********************!*\
  !*** ./src/cart.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// à exporter...\nvar CartManager = /** @class */ (function () {\n    function CartManager() {\n        this.cart = [];\n    }\n    CartManager.prototype.getCart = function () {\n        return this.cart;\n    };\n    CartManager.prototype.addItem = function (item) {\n        for (var i = 0; i < this.cart.length; i++) {\n            if (item === this.cart[i].item) {\n                this.cart[i].quantity++;\n                return;\n            }\n        }\n        this.cart.push({\n            quantity: 1,\n            item: item\n        });\n    };\n    CartManager.prototype.removeItem = function (item) {\n        for (var i = 0; i < this.cart.length; i++) {\n            this.cart.quantity = this.cart.quantity || 0;\n            if (item === this.cart[i].item) {\n                this.cart[i].quantity--;\n                if (this.cart[i].quantity < 1) {\n                    this.cart.splice(i, 1);\n                }\n            }\n        }\n    };\n    return CartManager;\n}());\n;\nexports.default = CartManager;\n\n\n//# sourceURL=webpack:///./src/cart.ts?");

/***/ }),

/***/ "./src/gui.ts":
/*!********************!*\
  !*** ./src/gui.ts ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// à exporter...\nvar GuiBuilder = /** @class */ (function () {\n    function GuiBuilder(cartManager, productsRepository) {\n        // @ts-ignore\n        this.containers = {};\n        this.cartManager = cartManager;\n        this.productsRepository = productsRepository;\n    }\n    GuiBuilder.prototype.showProductLine = function (theProduct) {\n        var _this = this;\n        var line = window.document.createElement(\"p\");\n        var product = window.document.createElement(\"span\");\n        product.appendChild(window.document.createTextNode(theProduct.name));\n        product.appendChild(window.document.createTextNode(\" Prix unitaire : \"));\n        product.appendChild(window.document.createTextNode(theProduct.price));\n        product.appendChild(window.document.createTextNode(\" Actions : \"));\n        line.appendChild(product);\n        var actions = window.document.createElement(\"span\");\n        var more = window.document.createElement(\"a\");\n        more.appendChild(window.document.createTextNode(\"Ajouter [ + ]\"));\n        actions.appendChild(more);\n        actions.appendChild(window.document.createTextNode(\"  \"));\n        var less = window.document.createElement(\"a\");\n        less.appendChild(window.document.createTextNode(\"Retirer [ - ]\"));\n        actions.appendChild(less);\n        actions.appendChild(window.document.createTextNode(\"  \"));\n        line.appendChild(actions);\n        more.addEventListener(\"click\", function () {\n            _this.cartManager.addItem(theProduct);\n            _this.showCart();\n        });\n        less.addEventListener(\"click\", function () {\n            _this.cartManager.removeItem(theProduct);\n            _this.showCart();\n        });\n        return line;\n    };\n    GuiBuilder.prototype.showProducts = function () {\n        if (this.containers.products) {\n            this.containers.products\n                .parentNode\n                .removeChild(this.containers.products);\n        }\n        this.containers.products = window.document.createElement(\"div\");\n        var line = window.document.createElement(\"p\");\n        line.appendChild(window.document.createTextNode(\"Produits :\"));\n        this.containers.products.appendChild(line);\n        var products = this.productsRepository.getProducts();\n        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {\n            var product = products_1[_i];\n            var line_1 = this.showProductLine(product);\n            this.containers.products.appendChild(line_1);\n        }\n        window.document.body.appendChild(this.containers.products);\n    };\n    GuiBuilder.prototype.showCart = function () {\n        var _this = this;\n        if (this.containers.cart) {\n            this.containers.cart\n                .parentNode\n                .removeChild(this.containers.cart);\n        }\n        this.containers.cart = window.document.createElement(\"div\");\n        this.containers.cart.id = \"cart\";\n        var line = window.document.createElement(\"p\");\n        line.appendChild(window.document.createTextNode(\"Panier :\"));\n        this.containers.cart.appendChild(line);\n        var cart = this.cartManager.getCart();\n        cart.forEach(function (inCart) {\n            var line = window.document.createElement(\"p\");\n            var product = window.document.createElement(\"span\");\n            product.appendChild(window.document.createTextNode(inCart.item.name));\n            product.appendChild(window.document.createTextNode(\" Quantité : \"));\n            product.appendChild(window.document.createTextNode(inCart.quantity));\n            product.appendChild(window.document.createTextNode(\" Prix total : \"));\n            product.appendChild(window.document.createTextNode(String(inCart.item.price * inCart.quantity)));\n            line.appendChild(product);\n            _this.containers.cart.appendChild(line);\n        });\n        window.document.body.appendChild(this.containers.cart);\n    };\n    GuiBuilder.prototype.show = function () {\n        this.showProducts();\n        this.showCart();\n    };\n    GuiBuilder.prototype.initialize = function () {\n        var _this = this;\n        if (window.document.body) {\n            this.show();\n        }\n        else {\n            window.document.addEventListener(\"DOMContentLoaded\", function () {\n                _this.show();\n            });\n        }\n    };\n    return GuiBuilder;\n}());\n;\nexports.default = GuiBuilder;\n\n\n//# sourceURL=webpack:///./src/gui.ts?");

/***/ }),

/***/ "./src/products.ts":
/*!*************************!*\
  !*** ./src/products.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n// à exporter...\nvar ProductsRepository = /** @class */ (function () {\n    function ProductsRepository() {\n        this.products = [{\n                id: 1,\n                name: \"Product 1\",\n                price: 100\n            }, {\n                id: 22,\n                name: \"Product 2\",\n                price: 140\n            }, {\n                id: 3,\n                name: \"Product 3\",\n                price: 125\n            }];\n    }\n    ProductsRepository.prototype.getProduct = function (id) {\n        for (var _i = 0, _a = this.products; _i < _a.length; _i++) {\n            var product = _a[_i];\n            if (id === product.id) {\n                return product;\n            }\n        }\n    };\n    ProductsRepository.prototype.getProducts = function () {\n        return this.products;\n    };\n    return ProductsRepository;\n}());\n;\nexports.default = ProductsRepository;\n\n\n//# sourceURL=webpack:///./src/products.ts?");

/***/ })

/******/ });