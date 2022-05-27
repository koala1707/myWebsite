const dotenv = require('dotenv');
const env = dotenv.config().parsed

var knex = require('knex')({
    client: 'mysql',
    connection: {
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        host: env.DB_HOST,
        database: 'PedQLSurveyDatabase'
    }
});




module.exports = knex