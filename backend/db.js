const Pool = require("pg").Pool;
require('dotenv').config()
const pool = new Pool({
    user: USER_NAME,
    password: PASSWORD,
    host: HOST_NAME,
    port: PORT_NUMBER,
    database: DATABASE_NAME
});

pool.connect(() => {
    console.log('Server connected successfully');
})

module.exports = pool;