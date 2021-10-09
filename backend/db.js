const Pool = require("pg").Pool;
const pool = new Pool({
    user: "mindfull",
    password: "mindfull",
    host: "localhost",
    port: 5432,
    database: "mindfuldb"
});

pool.connect(() => {
    console.log('Server connected successfully');
})

module.exports = pool;