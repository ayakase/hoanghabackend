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
    thumbnail: {
        type: DataTypes.STRING(255),
    },
    content: {
        type: DataTypes.STRING(255),
    },
    tour_link: {
        type: DataTypes.STRING(255),
    }
})
module.exports = Tour;