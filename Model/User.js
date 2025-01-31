const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db')

const User = sequelize.define('User', {
    
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    Phone_number: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
});

module.exports = User;