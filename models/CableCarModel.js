const sequelize = require('../connect');
const { DataTypes } = require('sequelize');

const CableCar = sequelize.define('CableCar', {
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
    booking_date: {
        type: DataTypes.DATE
    },
    adult: {
        type: DataTypes.INTEGER(255)
    },
    children: {
        type: DataTypes.INTEGER(255)
    },
    infant: {
        type: DataTypes.INTEGER(255)
    },
    note: {
        type: DataTypes.STRING(255)
    },
    solved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = CableCar;
