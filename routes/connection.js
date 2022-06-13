const dotenv = require('dotenv');
const env = dotenv.config().parsed
const { Pool } = require('pg')


// var knex = require('knex')({
//     client: 'mysql',
//     connection: {
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         host: process.env.DB_HOST,
//         database: process.env.DB_NAME
//     }
// });

var knex = require('knex')({
    client: 'pg',
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: {rejectUnauthorized: false},
    },
});

// var knex = new Pool({
//     // client: 'pg',
//     // connection: {
//         connectionString: process.env.DB_URL,
//         ssl: {rejectUnauthorized: false},
//     // },
// });




module.exports = knex