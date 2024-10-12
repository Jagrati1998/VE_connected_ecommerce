const orderService = require('../services/orderService');

class OrderController {
  async createOrder(req, res) {
    try {
      const { userId, products } = req.body;
      const order = await orderService.createOrder(userId, products);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getOrder(req, res) {
    try {
      const order = await orderService.getOrderById(req.params.id);
      res.status(200).json(order);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async getUserOrders(req, res) {
    try {
      const orders = await orderService.getOrdersByUser(req.params.id);
      res.status(200).json(orders);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

module.exports = new OrderController();
