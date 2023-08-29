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
    schedule: {
        type: DataTypes.STRING(255),
    },
    tourcategory: {
        type: DataTypes.STRING(255),
    },
    tourtype: {
        type: DataTypes.STRING(255),
    },
    departure: {
        type: DataTypes.STRING(255),
    },
    days: {
        type: DataTypes.INTEGER(255),
    },
    ishottour: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    transportation: {
        type: DataTypes.STRING(255),
    },
    adultprice: {
        type: DataTypes.INTEGER(255),
    },
    youngprice: {
        type: DataTypes.INTEGER(255),
    },
    childprice: {
        type: DataTypes.INTEGER(255),
    },
    special: {
        type: DataTypes.STRING,
    },
    bonus: {
        type: DataTypes.STRING,
    },
    visa: {
        type: DataTypes.STRING,
    },
    detail: {
        type: DataTypes.STRING,
    },
    priceservice: {
        type: DataTypes.STRING,
    },
    guide: {
        type: DataTypes.STRING,
    },
})
module.exports = Tour;