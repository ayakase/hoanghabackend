const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('hoangha_travel', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// });


// const sequelize = new Sequelize('sql12648187', 'sql12648187', 'IwHTtaCMPd', {
//     host: 'sql12.freemysqlhosting.net',
//     dialect: 'mysql',
// });


const sequelize = new Sequelize('hoangha', 'admin', 'cNpa65Ly', {
    host: 'mysql-146874-0.cloudclusters.net',
    dialect: 'mysql',
    port: 18583,
});

module.exports = sequelize;


