const mysql=require("mysql2");
const pool = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'local_host',
    password: 'root',
})

module.exports = pool;