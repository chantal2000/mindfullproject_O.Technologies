const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "namuhoranye2000",
    host: "localhost",
    port: 6200,
    database: "mindfulproject"
});

pool.connect(() => {
    console.log('Server connected successfully');
})

module.exports = pool;