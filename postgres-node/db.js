const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'julianfesting',
  host: 'localhost',
  database: 'blog',
  port: 5432
})

module.exports = pool