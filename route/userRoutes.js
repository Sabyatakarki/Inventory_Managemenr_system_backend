const express= require('express')

const router = express.Router();

const userController = require('../controllers/userController')

router.post('/login',userController.loginUser);
router.get('/signup',userController.registerUser);

// const userController = require('../controller/userController');
// router.post('/create_test',userController.createTest);
// router.get('/show_test',userController.getTest);

// router.put('/:id',userController.updateUser);
// router.delete('/:id', userController.deleteUser);

module.exports=router;