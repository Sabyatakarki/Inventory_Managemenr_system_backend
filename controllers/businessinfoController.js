const BusinessInfo = require('../Model/businessinfo');

// Create a new business info record
const createBusinessInfo = async (req, res) => {
  try {
    const { name, address, contact, UserUserid } = req.body;

    const businessInfo = await BusinessInfo.create({
      name,
      address,
      contact,
      UserUserid,
    });

    res.status(201).json({ businessInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all business info records
const getAllBusinessInfos = async (req, res) => {
  try {
    const businessInfos = await BusinessInfo.findAll();
    res.status(200).json({ businessInfos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single business info record by ID
const getBusinessInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    const businessInfo = await BusinessInfo.findByPk(id);

    if (!businessInfo) {
      return res.status(404).json({ error: 'Business info record not found' });
    }

    res.status(200).json({ businessInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a business info record
const updateBusinessInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, address, contact, UserUserid } = req.body;

    const businessInfo = await BusinessInfo.findByPk(id);

    if (!businessInfo) {
      return res.status(404).json({ error: 'Business info record not found' });
    }

    await businessInfo.update({
      name,
      address,
      contact,
      UserUserid,
    });

    res.status(200).json({ businessInfo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a business info record
const deleteBusinessInfo = async (req, res) => {
  try {
    const { id } = req.params;
    const businessInfo = await BusinessInfo.findByPk(id);

    if (!businessInfo) {
      return res.status(404).json({ error: 'Business info record not found' });
    }

    await businessInfo.destroy();
    res.status(200).json({ message: 'Business info record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBusinessInfo,
  getAllBusinessInfos,
  getBusinessInfoById,
  updateBusinessInfo,
  deleteBusinessInfo,
};