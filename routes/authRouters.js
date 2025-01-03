const express = require('express'); 
const authController = require('../constrollers/authController');

const authRouter = express.Router();

authRouter.post('/register',authController.register)

module.exports = authRouter;