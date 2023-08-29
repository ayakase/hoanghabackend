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
        type: DataTypes.TEXT('long'),
    },
    bonus: {
        type: DataTypes.TEXT('long'),
    },
    visa: {
        type: DataTypes.TEXT('long'),
    },
    detail: {
        type: DataTypes.TEXT('long'),
    },
    priceservice: {
        type: DataTypes.TEXT('long'),
    },
    guide: {
        type: DataTypes.TEXT('long'),
    },
})
module.exports = Tour;