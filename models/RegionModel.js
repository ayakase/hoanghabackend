const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Category = require('./CategoryModel');
const Region = sequelize.define('Region', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(225),
    },
    note: {
        type: DataTypes.STRING(255)
    },
    slug: {
        type: DataTypes.STRING(255),
        unique: true
    },
    category_id: {
        type: DataTypes.INTEGER,
    },
})
Category.hasMany(Region, { foreignKey: 'category_id' });
Region.belongsTo(Category, { foreignKey: 'category_id' });
module.exports = Region;
