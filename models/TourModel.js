const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Location = require('./LocationModel');
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
    slug: {
        type: DataTypes.STRING(255),
        unique: true,
    },
    images: {
        type: DataTypes.TEXT
    },
    tik_tok_id: {
        type: DataTypes.STRING(255)
    },
    schedule: {
        type: DataTypes.STRING(255),
    },
    location_id: {
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
    adult_price: {
        type: DataTypes.INTEGER(255),
    },
    teenager_price: {
        type: DataTypes.INTEGER(255),
    },
    child_price: {
        type: DataTypes.INTEGER(255),
    },
    infant_price: {
        type: DataTypes.INTEGER(255)
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
    order_count: {
        type: DataTypes.INTEGER(255),
        defaultValue: 0,
    },
    published: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    }
})
Location.hasMany(Tour, { foreignKey: 'location_id' });
Tour.belongsTo(Location, { foreignKey: 'location_id' });
module.exports = Tour;