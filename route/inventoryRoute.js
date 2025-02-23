const express = require('express');
const inventoryController = require('../controllers/inventoryController');

const router = express.Router();

// Inventory routes
router.post('/create', inventoryController.createInventory); 
router.get('/', inventoryController.getAllInventories);
router.get('/:id', inventoryController.getInventoryById); 
router.put('/:id', inventoryController.updateInventory);
router.delete('/:id', inventoryController.deleteInventory);

module.exports = router;