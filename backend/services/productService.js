const productRepository = require('../repositories/productRepository');

class ProductService {
  async createProduct(productData) {
    const product = await productRepository.create(productData);
    return product;
  }

  async getProductById(id) {
    const product = await productRepository.findById(id);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  }

  async listProducts(page = 1, limit = 10) {
    return await productRepository.findAll(page, limit);
  }

  async updateProduct(id, updateData) {
    const updatedProduct = await productRepository.update(id, updateData);
    return updatedProduct;
  }

  async deleteProduct(id) {
    await productRepository.delete(id);
  }
}

module.exports = new ProductService();
