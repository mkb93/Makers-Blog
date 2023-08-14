const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER || 'julianfesting',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'blog',
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || ''
})

module.exports = pool