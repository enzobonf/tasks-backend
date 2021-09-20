// Update with your config settings.
require('dotenv').config();

module.exports = {

  client: 'postgresql',
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: true
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
