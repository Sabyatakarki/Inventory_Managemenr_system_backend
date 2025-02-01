const express = require('express');
const businessInfoController = require('../controllers/businessinfoController');

const router = express.Router();

// BusinessInfo routes
router.post('/create', businessInfoController.createBusinessInfo); // Create a new business info record
router.get('/', businessInfoController.getAllBusinessInfos); // Get all business info records
router.get('/:id', businessInfoController.getBusinessInfoById); // Get a single business info record by ID
router.put('/:id', businessInfoController.updateBusinessInfo); // Update a business info record
router.delete('/:id', businessInfoController.deleteBusinessInfo); // Delete a business info record

module.exports = router;