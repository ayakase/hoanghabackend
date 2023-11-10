const sequelize = require('../connect');
const { DataTypes } = require('sequelize');

const CarBook = sequelize.define('CarBook', {
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
    schedule: {
        type: DataTypes.STRING(255)
    },
    booking_date: {
        type: DataTypes.DATE
    },
    booking_days: {
        type: DataTypes.INTEGER(255)
    },
    car_type: {
        type: DataTypes.STRING(255)
    },
    note: {
        type: DataTypes.STRING(255)
    }
})

module.exports = CarBook;
