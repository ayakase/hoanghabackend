const sequelize = require('../connect');
const { DataTypes } = require('sequelize');

const Passport = sequelize.define('Passport', {
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
    solved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Passport;
