// const { Pool } = require("pg");
const mysql=require("mysql2");
const pool = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'local_host',
    password: 'root',
    //port: 3306,
    // idleTimeoutMillis: 300
})
// pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
module.exports = pool;