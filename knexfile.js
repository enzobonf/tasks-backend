// Update with your config settings.
require('dotenv').config();
console.log(process.env);

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'tasks',
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
