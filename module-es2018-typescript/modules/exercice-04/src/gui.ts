// à exporter...
 class GuiBuilder {

  containers: {
    cart: any;
    products: any;

  };
  cartManager: any;
  productsRepository: any;

  constructor (cartManager: any, productsRepository: any) {
    // @ts-ignore
    this.containers = {};
    this.cartManager = cartManager;
    this.productsRepository = productsRepository;
  }

  showProductLine (theProduct: any) {
    const line = window.document.createElement("p");

    const product = window.document.createElement("span");
    product.appendChild(
      window.document.createTextNode(theProduct.name)
    );
    product.appendChild(
      window.document.createTextNode(" Prix unitaire : ")
    );
    product.appendChild(
      window.document.createTextNode(theProduct.price)
    );
    product.appendChild(
      window.document.createTextNode(" Actions : ")
    );
    line.appendChild(product);

    const actions = window.document.createElement("span");

    const more = window.document.createElement("a");
    more.appendChild(
      window.document.createTextNode("Ajouter [ + ]")
    );
    actions.appendChild(more);
    actions.appendChild(
      window.document.createTextNode("  ")
    );

    const less = window.document.createElement("a");
    less.appendChild(
      window.document.createTextNode("Retirer [ - ]")
    );
    actions.appendChild(less);
    actions.appendChild(
      window.document.createTextNode("  ")
    );

    line.appendChild(actions);

    more.addEventListener("click", () => {
      this.cartManager.addItem(theProduct);
      this.showCart();
    });

    less.addEventListener("click", () => {
      this.cartManager.removeItem(theProduct);
      this.showCart();
    });

    return line;
  }

  showProducts () {
    if (this.containers.products) {
      this.containers.products
        .parentNode
        .removeChild(
          this.containers.products
        );
    }
    this.containers.products = window.document.createElement("div");
    const line = window.document.createElement("p");
    line.appendChild(
      window.document.createTextNode("Produits :")
    );
    this.containers.products.appendChild(line);

    const products = this.productsRepository.getProducts();
    for (const product of products) {
      const line = this.showProductLine(product);
      this.containers.products.appendChild(line);
    }

    window.document.body.appendChild(this.containers.products);
  }

  showCart () {
    if (this.containers.cart) {
      this.containers.cart
        .parentNode
        .removeChild(
          this.containers.cart
        );
    }
    this.containers.cart = window.document.createElement("div");
    this.containers.cart.id = "cart";
    const line = window.document.createElement("p");
    line.appendChild(
      window.document.createTextNode("Panier :")
    );
    this.containers.cart.appendChild(line);

    const cart = this.cartManager.getCart();
    cart.forEach((inCart: any) => {
      const line = window.document.createElement("p");

      const product = window.document.createElement("span");
      product.appendChild(
        window.document.createTextNode(inCart.item.name)
      );
      product.appendChild(
        window.document.createTextNode(" Quantité : ")
      );
      product.appendChild(
        window.document.createTextNode(inCart.quantity)
      );
      product.appendChild(
        window.document.createTextNode(" Prix total : ")
      );
      product.appendChild(
        window.document.createTextNode(String(inCart.item.price * inCart.quantity))
      );

      line.appendChild(product);
      this.containers.cart.appendChild(line);
    });

    window.document.body.appendChild(this.containers.cart);
  }

  show() {
    this.showProducts();
    this.showCart();
  }

  initialize () {
    if (window.document.body) {
      this.show();
    } else {
      window.document.addEventListener("DOMContentLoaded", () => {
        this.show();
      });
    }
  }
};

export default GuiBuilder;
