const express = require('express');
const route = express.Router;

route.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
route.get('/home', (req, res) => {
    // res.send('Hello World, my name is Pham Phat!')
    res.render('demo.ejs');
})

module.exports = route;