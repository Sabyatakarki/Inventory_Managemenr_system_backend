const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

// Inventory routes
router.post('/', inventoryController.createInventory);  // Create new inventory item
router.get('/', inventoryController.getAllInventories);  // Get all inventory items
router.get('/:id', inventoryController.getInventoryById);  // Get a specific inventory item by ID
router.put('/:id', inventoryController.updateInventory);  // Update an inventory item
router.delete('/:id', inventoryController.deleteInventory);  // Delete an inventory item

module.exports = router;
