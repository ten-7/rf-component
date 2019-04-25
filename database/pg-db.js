const { Pool } = require('pg');
require('dotenv').config({ path: '../.env' });

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  max:  process.env.POOL_MAX,
  database: process.env.DB,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
}

console.log(config);

const pool = new Pool(config);

