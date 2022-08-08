require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB, process.env.SQLUSER, process.env.SQLPASS, {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
  });

module.exports = sequelize;
