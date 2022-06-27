var express = require('express');
var router = express.Router();
const knex = require('./connection');

// Skills bar information
router.get('/skills', function(req, res){
    knex('ability_list').then(data => res.send(JSON.stringify(data)))
})

//Details of achievement, volunteers and Interest
router.get('/details/:details_id', function(req, res) {
    console.log("others")
    knex('details')
    .where('details_id', req.params.details_id)
    .then(data => res.send(JSON.stringify(data)))
})


module.exports = router;