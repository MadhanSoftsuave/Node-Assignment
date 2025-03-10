const { Pool } = require("pg");

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'local_host',
    password: 'postgres',
    port: 5432,
    idleTimeoutMillis: 300
});
async ()=>{
await
 pool.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
}
module.exports = pool;