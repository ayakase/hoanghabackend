require('dotenv').config();
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_SERVER,
    dialect: 'mysql',
    port: process.env.SQL_PORT
});

// const sequelize = new Sequelize('hoangha', 'admin', 'cNpa65Ly', {
//     host: 'mysql-146874-0.cloudclusters.net',
//     dialect: 'mysql',
//     port: 18583,
// });

module.exports = sequelize;


