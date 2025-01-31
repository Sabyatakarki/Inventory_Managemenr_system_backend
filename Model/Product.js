const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../Database/db');

const Product = sequelize.define('product', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productName:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT, 
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false, // Description can be optional
    },
    productImage:{
        type:DataTypes.STRING,
        allowNull:true,
    },
});
module.exports = Product;
