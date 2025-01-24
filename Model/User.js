const { Sequelize, DataTypes } = require('sequelize');


const sequelize = require('../Database/db');



const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
     },
 
    username:{
        type:DataTypes.STRING,
        
        allownull:false,
     },
     
    password:{
        type: DataTypes.STRING, 
         
        unique:true,
     },

    Email: {

        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    Phone_Number: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false
    }
 
})

module.exports= User;