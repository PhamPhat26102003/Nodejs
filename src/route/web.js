const express = require('express');
const route = express.Router();
const {handleGetHomePage, handleGetHomePage1} = require('../controller/homeController')

route.get('/', handleGetHomePage)
  
route.get('/home', handleGetHomePage1)

module.exports = route;