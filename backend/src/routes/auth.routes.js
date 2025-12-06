const express = require('express'); 
const authController = require('../controllers/auth.controller');


const routes = express.Router();

// user registration route
routes.post('/user/register', authController.registerUser);
routes.post('/user/login', authController.loginUser);
routes.post('/user/logout', authController.logoutUser);


// food partner registration route
routes.post('/food-partner/register', authController.registerFoodPartner);
routes.post('/food-partner/login', authController.loginFoodPartner);
routes.post('/food-partner/logout', authController.logoutFoodPartner);

module.exports = routes;