// Update with your config settings.
require('dotenv').config();

module.exports = {

  client: 'postgresql',
  connection: {
    host: process.env.dbHost,
    database: process.env.dbName,
    user:     process.env.dbUser,
    password: process.env.dbPassword
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }

};
