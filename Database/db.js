const { Sequelize } = require("sequelize");

const sequelize= new Sequelize("Inventory_management_system_db","postgres","admin123",{

    host:'localhost',
    dialect:'postgres',
    port:5432,
    logging: false,

});

async function Inventory_management_system_dbConnection() {
    try{
        await sequelize.authenticate();
        console.log('DB connection successful.....................')
    }
    catch(error){
        console.log('DB connection failed.....................')
    }
    
}
Inventory_management_system_dbConnection()

module.exports = sequelize;