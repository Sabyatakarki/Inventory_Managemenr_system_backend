const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const BusinessInfo = sequelize.define('BusinessInfo', {
    Businessid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    contact: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Userid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = BusinessInfo;