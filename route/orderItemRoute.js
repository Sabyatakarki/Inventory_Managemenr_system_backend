const express = require('express');
const orderItemController = require('../controllers/orderItemController');

const router = express.Router();

// OrderItem routes
router.post('/create', orderItemController.createOrderItem); // Create a new order item
router.get('/', orderItemController.getAllOrderItems); // Get all order items
router.get('/:id', orderItemController.getOrderItemById); // Get a single order item by ID
router.put('/:id', orderItemController.updateOrderItem); // Update an order item
router.delete('/:id', orderItemController.deleteOrderItem); // Delete an order item

module.exports = router;