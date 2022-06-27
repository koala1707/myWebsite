const express = require('express')
const http = require('http')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const timeout = require('connect-timeout')
const app = express()

var emailRouter = require('./routes/contact');
var repoRouter = require('./routes/github');
var myselfRouter = require('./routes/skills')

app.use(timeout('30s'))
//use dev format for log
app.use(logger('dev'))
// to recognize the incoming Request Object as a json object
app.use(bodyParser.json());
app.use(cors())
// to recognise the incoming Request Obejct as strings or arrays
app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
// serves static files (__dirname: returns the path of the folder where the current js file resides.)
// app.use(express.static(path.join(__dirname, 'resources')))




app.use('/email', emailRouter);
app.use('/repo', repoRouter);
app.use('/myself', myselfRouter);

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('resume/build'));
    app.get('*', (req, res) => {
        // const index = path.join(__dirname, 'resume','build', 'index.html');
        res.sendFile(path.resolve(__dirname, 'resume','build', 'index.html'));
    });
}


module.exports = app;