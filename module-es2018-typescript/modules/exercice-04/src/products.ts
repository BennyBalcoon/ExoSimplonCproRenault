// à exporter...
class ProductsRepository {
  products: any;

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

  getProduct (id: number) {
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

export default ProductsRepository;
