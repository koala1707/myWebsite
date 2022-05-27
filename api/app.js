const express = require('express')
var http = require('http')
const mysql = require('mysql')
var bodyParser = require('body-parser')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var cors = require('cors')
var app = express()





var surveyRouter = require('./routes/survey/survey');


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


//app.use(express.json());

app.use('/', surveyRouter);

// router.get("/hello", (req, res) => {
//     knex.select('*').from('test')
//     .then(data => res.send(data))
// })


// //httpProxy.createProxyServer({target:'http://localhost:8090'})
// app.listen(8090, function() {
//     console.log("running on port 8090")
// })

module.exports = app;