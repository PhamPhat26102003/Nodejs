const express = require('express');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoute = require('./route/web');
//Muon su dung file .env phai khai bao dong nay
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8888;
const hostName = process.env.HOST_NAME;

configViewEngine(app)

//Khai bao route
app.use('/', webRoute);

app.listen(port, hostName, () => {
  console.log(`Example app listening on port ${port}`)
})