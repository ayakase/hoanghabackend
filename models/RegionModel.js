const sequelize = require('../connect');
const { DataTypes } = require('sequelize');


const Region = sequelize.define('Region', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(225),
    },
    note: {
        type: DataTypes.STRING(255)
    }

})

module.exports = Region;
