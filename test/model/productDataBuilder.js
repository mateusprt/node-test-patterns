const Product = require('../../src/entities/product')

class ProductDataBuilder {

  constructor() {
    // o default são os dados corretos
    // o caso de sucesso!
    this.productData = {
      id: '001',
      name: 'Computer',
      price: 1000,
      category: 'eletronic'
    }
  }

  static aProduct() {
    return new ProductDataBuilder()
  }

  withInvalidId() {
    this.productData.id = '1'
    return this;
  }

  withInvalidName() {
    this.productData.name = 'abc123'
    return this;
  }

  withInvalidPrice() {
    this.productData.price = 2000
    return this;
  }

  withInvalidCategory() {
    this.productData.category = 'mechanic'
    return this;
  }

  build() {
    const product = new Product(this.productData)
    return product;
  }

}

module.exports = ProductDataBuilder;