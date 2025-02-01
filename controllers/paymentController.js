const Payment = require('../Model/payment');

// Create a new payment
const createPayment = async (req, res) => {
  try {
    const { OrderOrderid, date, amount, status } = req.body;

    const payment = await Payment.create({
      OrderOrderid,
      date,
      amount,
      status,
    });

    res.status(201).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all payments
const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.findAll();
    res.status(200).json({ payments });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single payment by ID
const getPaymentById = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    res.status(200).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a payment
const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const { OrderOrderid, date, amount, status } = req.body;

    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    await payment.update({
      OrderOrderid,
      date,
      amount,
      status,
    });

    res.status(200).json({ payment });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a payment
const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const payment = await Payment.findByPk(id);

    if (!payment) {
      return res.status(404).json({ error: 'Payment not found' });
    }

    await payment.destroy();
    res.status(200).json({ message: 'Payment deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPayment,
  getAllPayments,
  getPaymentById,
  updatePayment,
  deletePayment,
};