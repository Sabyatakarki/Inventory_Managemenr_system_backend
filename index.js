// Initializations
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./Database/db");
const userRoute = require("./route/userRoute");
const productRoute = require('./route/productRoute');
const inventoryRoute = require('./route/inventoryRoute');
const orderRoute = require('./route/orderRoute');
const paymentRoute = require('./route/paymentRoute');
const orderItemRoute = require('./route/orderItemRoute')
const businessinfoRoute = require('./route/businessinfoRoute')

// Creating a server
const app = express();

// Creating a port
const PORT = 4000;

// Creating a middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users', userRoute);
app.use('/product', productRoute);
app.use('/inventory',inventoryRoute)
app.use('/order',orderRoute)
app.use('/payment',paymentRoute)
app.use('/orderItem',orderItemRoute)
app.use('/businessinfo',businessinfoRoute)

// Database sync and server startup
sequelize.sync()
  .then(() => {
    // Start the server after successful database sync
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Test routes
app.get('/test', (req, res) => {
  res.send('Get all users');
});

// Example route to update user
app.put('/user/:id', (req, res) => {
  res.send(`Update user ${req.params.id}`);
});

// Example route to delete user
app.delete('/user/:id', (req, res) => {
  res.send(`Delete user ${req.params.id}`);
});
