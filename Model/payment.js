const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Payment = sequelize.define('Payments', {
    Paymentid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Orderid: {
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
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Payment;