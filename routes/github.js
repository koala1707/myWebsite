var express = require('express');
var router = express.Router();
const knex = require('./connection');

router.get('/github-repo', function(req, res){
    // console.log("github")
    knex('github').then(data => res.send(JSON.stringify(data)))
})

// router.get('/', function (req, res){
//     console.log('/ error ')
// })


module.exports = router;