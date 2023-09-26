const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Tour = require('./TourModel');
const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    tour_id: {
        type: DataTypes.INTEGER,
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
    adult: {
        type: DataTypes.INTEGER
    },
    teenager: {
        type: DataTypes.INTEGER
    },
    children: {
        type: DataTypes.INTEGER
    },
    note: {
        type: DataTypes.STRING(255)
    },
    solved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
})
Tour.hasMany(Order, { foreignKey: 'tour_id' });
Order.belongsTo(Tour, { foreignKey: 'tour_id' });
module.exports = Order;
