const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Payment = sequelize.define('Payments', {
    Paymentid: {
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
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Payment;