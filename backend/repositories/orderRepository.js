const Order = require('../models/orderModel');

class OrderRepository {
  async create(orderData) {
    const order = new Order(orderData);
    return await order.save();
  }

  async findById(id) {
    return await Order.findById(id).populate('products.productId');
  }
  async findAll() {
    return await Order.find();
  }

  async findByUserId(userId) {
    return await Order.find({ userId }).populate('products.productId');
  }
}

module.exports = new OrderRepository();
