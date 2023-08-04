const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
const db = require('./config/db');

const app = express();
// set dotenv path
dotenv.config({path:'./config/config.env'})
// call database function
db();

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// Parse application/json
app.use(bodyParser.json());

// global path
app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));


// set ejs view engine
app.set('view engine', 'ejs');
app.set('views', 'views');


//-- routers
const homeRouter = require('./route/homeRoute');
const csvRouter = require('./route/csvRoute');
app.use('/',homeRouter)
app.use('/csv',csvRouter)



module.exports = app;