const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const OrderItem = sequelize.define('OrderItems', {
    OrderItemid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    OrderOrderid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Orders',
            key: 'Orderid'
        }
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