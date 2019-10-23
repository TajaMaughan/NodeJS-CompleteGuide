require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', process.env.password, { dialect: 'mysql', host: 'localhost' });

module.exports = sequelize;