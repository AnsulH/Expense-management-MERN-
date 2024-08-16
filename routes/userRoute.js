const express = require('express');
const {loginController,registerController} = require('../controllers/userContoller')

//router object
const router = express.Router();

//router 
//POST||Login
router.post('/login',loginController);

//POST||Register
router.post('/register',registerController);

module.exports = router;