const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Inventory = sequelize.define('Inventories', {
    Inventoryid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Stocklevel: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    lastUpdated: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Inventory;