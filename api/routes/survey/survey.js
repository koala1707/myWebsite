var express = require('express');
var router = express.Router();
const knex = require('../connection');
//var mysql = require('mysql')
//const dotenv = require('dotenv');
//const env = dotenv.config().parsed
//const knex = require('knex')

router.get('/test', function(req, res){
    knex('test').then(data => res.send(JSON.stringify(data)))
})


module.exports = router;