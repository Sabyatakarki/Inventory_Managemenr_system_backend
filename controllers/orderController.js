const Order = require('../Model/order');

// Create a new order
const createOrder = async (req, res) => {
  try {
    const { UserUserid, date, amount } = req.body;

    const order = await Order.create({
      UserUserid,
      date,
      amount,
    });

    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single order by ID
const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an order
const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { UserUserid, date, amount } = req.body;

    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    await order.update({
      UserUserid,
      date,
      amount,
    });

    res.status(200).json({ order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an order
const deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    await order.destroy();
    res.status(200).json({ message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};