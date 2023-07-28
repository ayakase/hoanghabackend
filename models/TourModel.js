const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Tour = sequelize.define('Tour', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(255),
    },
    days: {
        type: DataTypes.INTEGER(255),
    },
    schedule: {
        type: DataTypes.STRING(255),
    },
    transportation: {
        type: DataTypes.STRING(255),
    },
    price: {
        type: DataTypes.INTEGER(255),
    }
})
module.exports = Tour;