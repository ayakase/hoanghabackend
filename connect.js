const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dulich_hoangha', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});


// const sequelize = new Sequelize('freedb_dulich_hoangha', 'freedb_ayakase', 'nWNhJtexPs6!3mn', {
//     host: 'sql.freedb.tech',
//     dialect: 'mysql',
// });

module.exports = sequelize;


