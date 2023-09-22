const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('dulich_hoangha', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// });


const sequelize = new Sequelize('sql12648187', 'sql12648187', 'IwHTtaCMPd', {
    host: 'sql12.freemysqlhosting.net',
    dialect: 'mysql',
});

module.exports = sequelize;


