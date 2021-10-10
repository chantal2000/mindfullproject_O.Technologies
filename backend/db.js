const Pool = require("pg").Pool;
require('dotenv').config();
const db = require('./db')
const pool = new Pool({
    user: process.env.USER_NAME,
    password: process.env.PASSWORD,
    host: process.env.HOST_NAME,
    port: process.env.PORT_NUMBER,
    database: process.env.DATABASE_NAME,
});

pool.connect(() => {
    console.log('Server connected successfully');
})

module.exports = pool;