const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../Database/db');

const Product = sequelize.define('Product', {
    ProductID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING(100), // VARCHAR(100)
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING(50), // VARCHAR(50)
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT, // TEXT
        allowNull: true, // Description can be optional
    },
    UnitPrice: {
        type: DataTypes.DECIMAL(10, 2), // DECIMAL(10, 2)
        allowNull: false,
    },
    QuantityAvailable: {
        type: DataTypes.INTEGER, // INT
        allowNull: false,
    },
    ExpirationDate: {
        type: DataTypes.DATE, // DATE
        allowNull: true, // Not all products might have an expiration date
    },
});

module.exports = Product;
