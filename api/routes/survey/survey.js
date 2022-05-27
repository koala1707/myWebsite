var express = require('express');
var router = express.Router();
const knex = require('../connection');
//var mysql = require('mysql')
//const dotenv = require('dotenv');
//const env = dotenv.config().parsed
//const knex = require('knex')

router.get('/test', function(req, res){
    //knex('test').then(data => console.log("api ",JSON.stringify(data)))
    //knex('test').then(data =>  {res.send(JSON.stringify(data))})
    knex('test').then(data => res.send(JSON.stringify(data)))
    //knex.select('*').from('test').then(data => res.send(data))

})

// var con = mysql.createConnection({
//     user: env.DB_USER,
//     password: env.DB_PASSWORD,
//     host: env.DB_HOST,
//     database: 'PedQLSurveyDatabase'
// })

// con.connect(error => {
//     // if(error) throw error;
//     console.log("Database")
// })

// router.get('/test', function(req, res){
//     con.query("SELECT * FROM test")
// })


// the instruction tells Node.js which functions, objects, strings, etc to export from a given file so other files are allowed to access the exported code.
// module.exports = router;
// module.exports = con;
module.exports = router;