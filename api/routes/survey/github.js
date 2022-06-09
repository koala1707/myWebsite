var express = require('express');
var router = express.Router();
const knex = require('../connection');

router.get('/github-repo', function(req, res){
    knex('github').then(data => res.send(JSON.stringify(data)))
})


module.exports = router;