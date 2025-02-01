const express = require('express');
const paymentController = require('../controllers/paymentController');

const router = express.Router();

// Payment routes
router.post('/create', paymentController.createPayment); // Create a new payment
router.get('/', paymentController.getAllPayments); // Get all payments
router.get('/:id', paymentController.getPaymentById); // Get a single payment by ID
router.put('/:id', paymentController.updatePayment); // Update a payment
router.delete('/:id', paymentController.deletePayment); // Delete a payment

module.exports = router;