const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Count = sequelize.define('Count', {
    id: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        primaryKey: true
    },
    count: {
        type: DataTypes.INTEGER,
    },
})
module.exports = Count;
