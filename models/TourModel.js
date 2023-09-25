const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Category = require('./CategoryModel');
const Tour = sequelize.define('Tour', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(255),
    },
    thumbnail: {
        type: DataTypes.STRING(255),
    },
    schedule: {
        type: DataTypes.STRING(255),
    },
    tourcategory: {
        type: DataTypes.INTEGER,
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
    recommend: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
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
Category.hasMany(Tour, { foreignKey: 'tourcategory' });
Tour.belongsTo(Category, { foreignKey: 'tourcategory' });
module.exports = Tour;