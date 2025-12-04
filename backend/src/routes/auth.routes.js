const express = require('express'); 
const authController = require('../controllers/auth.controller');


const routes = express.Router();

routes.post('/user/register', authController.registerUser);
routes.post('/user/login', authController.loginUser);




module.exports = routes;