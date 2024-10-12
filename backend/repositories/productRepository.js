const Product = require('../models/productModel');

class ProductRepository {
  async create(productData) {
    const product = new Product(productData);
    return await product.save();
  }

  async findById(id) {
    return await Product.findById(id);
  }

  async findAll(page, limit) {
    const skip = (page - 1) * limit;
    return await Product.find().skip(skip).limit(limit);
  }

  async update(id, updateData) {
    return await Product.findByIdAndUpdate(id, updateData, { new: true });
  }

  async delete(id) {
    return await Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductRepository();
