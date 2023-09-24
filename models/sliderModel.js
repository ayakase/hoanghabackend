const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Slider = sequelize.define('Slider', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    note: {
        type: DataTypes.STRING(255)
    },
    tour: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    solved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

})
module.exports = Advisory;
