require('dotenv').config();
const { Pool } = require('pg');

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max:  process.env.POOL_MAX,
  database: process.env.DB,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
}

console.log(config.user, config.password)

const pool = new Pool(config);

pool.connect((err) => {
  if (err) console.log(err);
  else {
    console.log('success!');
  }
})

module.exports = pool;