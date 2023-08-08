const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'marcobelahouane',
  host: 'localhost',
  database: 'blog',
  port: 5432
})

module.exports = pool