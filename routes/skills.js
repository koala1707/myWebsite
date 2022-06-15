var express = require('express');
var router = express.Router();
const knex = require('./connection');

router.get('/skills', function(req, res){
    console.log("ability_list")
    knex('ability_list').then(data => res.send(JSON.stringify(data)))
})


module.exports = router;