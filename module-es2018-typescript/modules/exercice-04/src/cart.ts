// à exporter...
class CartManager {

  cart: any;

  constructor () {
    this.cart = [];
  }

  getCart () {
    return this.cart;
  }

  addItem (item: any) {
    for (let i = 0; i < this.cart.length; i++) {
      if (item === this.cart[i].item) {
        this.cart[i].quantity++;
        return;
      }
    }
    this.cart.push({
      quantity: 1,
      item: item
    });
  }

  removeItem (item: any) {
    for (let i = 0; i < this.cart.length; i++) {
      this.cart.quantity = this.cart.quantity || 0;
      if (item === this.cart[i].item) {
        this.cart[i].quantity--;
        if (this.cart[i].quantity < 1) {
          this.cart.splice(i, 1);
        }
      }
    }
  }

};

export default CartManager;
