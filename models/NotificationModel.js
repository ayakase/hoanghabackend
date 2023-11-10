const sequelize = require('../connect');
const { DataTypes } = require('sequelize');


const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    action: {
        type: DataTypes.STRING(225),
    },
})

module.exports = Notification;
