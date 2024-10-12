const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrder);
router.get('/users/:id', orderController.getUserOrders);

module.exports = router;
