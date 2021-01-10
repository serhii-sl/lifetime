const {db_user, db_password, db_host, db_port, db_name} = require('./config')

module.exports = require('knex')({
  client: 'pg',
  connection: {
    user: db_user,
    password: db_password,
    host: db_host,
    port: db_port,
    database: db_name
  }
});
