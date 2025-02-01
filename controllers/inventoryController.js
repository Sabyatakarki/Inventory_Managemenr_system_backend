const Inventory = require('../Model/inventory');

// Create a new inventory record
const createInventory = async (req, res) => {
  try {
    const { Stocklevel, lastUpdated } = req.body;

    const inventory = await Inventory.create({
      Stocklevel,
      lastUpdated,
    });

    res.status(201).json({ inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all inventory records
const getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll();
    res.status(200).json({ inventories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single inventory record by ID
const getInventoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.status(404).json({ error: 'Inventory record not found' });
    }

    res.status(200).json({ inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an inventory record
const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const { Stocklevel, lastUpdated } = req.body;

    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.status(404).json({ error: 'Inventory record not found' });
    }

    await inventory.update({
      Stocklevel,
      lastUpdated,
    });

    res.status(200).json({ inventory });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an inventory record
const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.status(404).json({ error: 'Inventory record not found' });
    }

    await inventory.destroy();
    res.status(200).json({ message: 'Inventory record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createInventory,
  getAllInventories,
  getInventoryById,
  updateInventory,
  deleteInventory,
};