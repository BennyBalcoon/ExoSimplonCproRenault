// à exporter...
class ProductsRepository {

  constructor () {
    this.products = [{
      id: 1,
      name: "Product 1",
      price: 100
    }, {
      id: 22,
      name: "Product 2",
      price: 140
    }, {
      id: 3,
      name: "Product 3",
      price: 125
    }];
  }

  getProduct (id) {
    for (const product of this.products) {
      if (id === product.id) {
        return product;
      }
    }
  }

  getProducts () {
    return this.products;
  }
};

// export default ProductsRepository;
