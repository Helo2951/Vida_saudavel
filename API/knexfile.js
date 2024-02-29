const path = require('path');
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'vida_saudavel'
    },
    migrations: {
      directory: path.resolve(__dirname, 'src', 'datavase', 'knex', 'migrations')
    },
    useNullAsDefault: true
  },
};