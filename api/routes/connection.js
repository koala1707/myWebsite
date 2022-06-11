const dotenv = require('dotenv');
const env = dotenv.config().parsed

var knex = require('knex')({
    client: 'mysql',
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: 'PedQLSurveyDatabase'
        // socketPath: '/tmp/mysql.sock'
    }
});




module.exports = knex