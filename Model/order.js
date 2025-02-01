const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Order = sequelize.define('Orders', {
    Orderid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserUserid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'Userid'
        }
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