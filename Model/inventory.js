const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Database/db");

const Inventory = sequelize.define("Inventories",{
  Inventoryid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  brandName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  orderItem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cost: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  supplier: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Stocklevel: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  lastUpdated: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Inventory;
