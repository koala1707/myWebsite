const express = require('express')
const http = require('http')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const app = express()





var surveyRouter = require('./routes/survey/survey');
var surveyRouter = require('./routes/survey/contact');
var surveyRouter = require('./routes/survey/github');

//use dev format for log
app.use(logger('dev'))
// to recognize the incoming Request Object as a json object
app.use(bodyParser.json());
app.use(cors())
// to recognise the incoming Request Obejct as strings or arrays
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
// serves static files (__dirname: returns the path of the folder where the current js file resides.)
app.use(express.static(path.join(__dirname, 'resources')))


app.use('/', surveyRouter);


module.exports = app;