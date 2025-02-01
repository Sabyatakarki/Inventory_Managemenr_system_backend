const OrderItem = require('../Model/orderItem');

// Create a new order item
const createOrderItem = async (req, res) => {
  try {
    const { OrderOrderid, quantity, amount, date } = req.body;

    const orderItem = await OrderItem.create({
      OrderOrderid,
      quantity,
      amount,
      date,
    });

    res.status(201).json({ orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all order items
const getAllOrderItems = async (req, res) => {
  try {
    const orderItems = await OrderItem.findAll();
    res.status(200).json({ orderItems });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single order item by ID
const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const orderItem = await OrderItem.findByPk(id);

    if (!orderItem) {
      return res.status(404).json({ error: 'Order item not found' });
    }

    res.status(200).json({ orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an order item
const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { OrderOrderid, quantity, amount, date } = req.body;

    const orderItem = await OrderItem.findByPk(id);

    if (!orderItem) {
      return res.status(404).json({ error: 'Order item not found' });
    }

    await orderItem.update({
      OrderOrderid,
      quantity,
      amount,
      date,
    });

    res.status(200).json({ orderItem });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an order item
const deleteOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const orderItem = await OrderItem.findByPk(id);

    if (!orderItem) {
      return res.status(404).json({ error: 'Order item not found' });
    }

    await orderItem.destroy();
    res.status(200).json({ message: 'Order item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrderItem,
  getAllOrderItems,
  getOrderItemById,
  updateOrderItem,
  deleteOrderItem,
};