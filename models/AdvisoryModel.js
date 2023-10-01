const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Tour = require('./TourModel');

const Advisory = sequelize.define('Advisory', {
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
    tour_id: {
        type: DataTypes.INTEGER,
        defaultValue: null
    },
    solved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})
Tour.hasMany(Advisory, { foreignKey: 'tour_id' });
Advisory.belongsTo(Tour, { foreignKey: 'tour_id' });
module.exports = Advisory;
