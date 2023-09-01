const sequelize = require('../connect');
const { DataTypes } = require('sequelize');


const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(225),
    },
    note: {
        type: DataTypes.STRING(255)
    }

})

module.exports = Category;
