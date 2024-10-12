const productService = require('../services/productService');

class ProductController {
  async createProduct(req, res) {
    try {
      const product = await productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getProduct(req, res) {
    try {
      const product = await productService.getProductById(req.params.id);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async listProducts(req, res) {
    try {
      const { page, limit } = req.query;
      const products = await productService.listProducts(page, limit);
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedProduct = await productService.updateProduct(req.params.id, req.body);
      res.status(200).json(updatedProduct);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteProduct(req, res) {
    try {
      await productService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new ProductController();
