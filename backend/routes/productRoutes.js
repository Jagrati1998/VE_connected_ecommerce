const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware,productController.createProduct);
//  - page: Current page number (default: 1)
//  - limit: Number of products per page (default: 10)
router.get('/', authMiddleware,productController.listProducts);
router.get('/:id', authMiddleware,productController.getProduct);
router.put('/:id', authMiddleware,productController.updateProduct);
router.delete('/:id',authMiddleware, productController.deleteProduct);

module.exports = router;
