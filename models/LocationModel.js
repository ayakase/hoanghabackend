const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Region = require('./RegionModel');


const Location = sequelize.define('Location', {
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
    region_id: {
        type: DataTypes.INTEGER,
    },
})
Region.hasMany(Location, { foreignKey: 'region_id' });
Location.belongsTo(Region, { foreignKey: 'region_id' });
module.exports = Location;
