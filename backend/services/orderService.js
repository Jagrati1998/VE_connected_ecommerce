const orderRepository = require('../repositories/orderRepository');
const productRepository = require('../repositories/productRepository');

class OrderService {
  async createOrder(userId, products) {
    let totalPrice = 0;

    for (const product of products) {
      const foundProduct = await productRepository.findById(product.productId);
      if (!foundProduct || foundProduct.stock < product.quantity) {
        throw new Error('Product not available in sufficient quantity');
      }
      totalPrice += foundProduct.price * product.quantity;
    }

    const order = await orderRepository.create({
      userId,
      products,
      totalPrice
    });

    return order;
  }
  async listOrders() {
    return await orderRepository.findAll();
  }
  async getOrderById(id) {
    const order = await orderRepository.findById(id);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  }

  async getOrdersByUser(userId) {
    return await orderRepository.findByUserId(userId);
  }
}

module.exports = new OrderService();
