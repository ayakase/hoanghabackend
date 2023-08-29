const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dulich_hoangha', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});


// const sequelize = new Sequelize('sql12643151', 'sql12643151', 'LvnfZjqE6d', {
//     host: 'sql12.freemysqlhosting.net',
//     dialect: 'mysql',
// });

module.exports = sequelize;


