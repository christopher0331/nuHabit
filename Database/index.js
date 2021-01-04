const { Pool } = require('pg');

const habitData = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'christopherhancock',
  password: 'password',
  database: 'nuhabit',
});

module.exports = habitData;

