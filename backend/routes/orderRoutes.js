// routes/orderRoutes.js
const express = require('express');
const Order = require('../models/order');
const User = require('../models/user');
const Product = require('../models/product');
const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
  const { userId, products } = req.body;

  // Validate user and products
  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });

  const productIds = products.map(p => p.productId);
  const validProducts = await Product.find({ _id: { $in: productIds } });
  if (validProducts.length !== productIds.length) {
    return res.status(404).json({ message: 'Some products not found' });
  }

  const newOrder = new Order({ userId, products });
  try {
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: 'Error creating order', error });
  }
});

// Get order details by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('userId products.productId');
    if (!order) return res.status(404).json({ message: 'Order not found' });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching order', error });
  }
});

// List all orders for a user
router.get('/users/:id', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.id }).populate('userId products.productId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching orders', error });
  }
});

module.exports = router;
