const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

// Inventory routes
router.post('/create', inventoryController.createInventory); // Create a new inventory record
router.get('/', inventoryController.getAllInventories); // Get all inventory records
router.get('/:id', inventoryController.getInventoryById); // Get a single inventory record by ID
router.put('/:id', inventoryController.updateInventory); // Update an inventory record
router.delete('/:id', inventoryController.deleteInventory); // Delete an inventory record

module.exports = router;