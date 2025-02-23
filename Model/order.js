const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Order = sequelize.define('Orders', {
    Orderid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = Order;