const sequelize = require('../connect');
const { DataTypes } = require('sequelize');

const PlaneTicket = sequelize.define('PlaneTicket', {
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
    departure_location: {
        type: DataTypes.STRING(255)
    },
    arrival_location: {
        type: DataTypes.STRING(255),
    },
    departure_date: {
        type: DataTypes.DATE
    },
    arrival_date: {
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
    }
})

module.exports = PlaneTicket;
