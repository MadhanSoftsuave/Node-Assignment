const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'local_host',
    password: 'pass123',
    port: 5432,
    idleTimeoutMillis: 300
});
pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
module.exports = pool;