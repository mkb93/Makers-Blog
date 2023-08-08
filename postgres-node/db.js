const Pool = require('pg').Pool;

const pool = new Pool({
  user: process.env.DB_USER || 'marcobelahouane',
  host: process.env.DB_HOST || 'localhost',
  database: process.env.DB_NAME || 'blog',
  port: process.env.DB_PORT || 5432
})

module.exports = pool