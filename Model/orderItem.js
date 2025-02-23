const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const OrderItem = sequelize.define('OrderItems', {
    OrderItemid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Orderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = OrderItem;