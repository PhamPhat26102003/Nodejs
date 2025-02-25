const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine')
//Muon su dung file .env phai khai bao dong nay
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;

configViewEngine(app)

//Khai bao route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/home', (req, res) => {
    // res.send('Hello World, my name is Pham Phat!')
    res.render('demo.ejs');
  })

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})