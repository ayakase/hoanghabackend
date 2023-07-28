const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('dulich_hoangha', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;
