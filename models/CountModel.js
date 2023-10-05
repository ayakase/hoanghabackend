const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Count = sequelize.define('Count', {
    count: {
        type: DataTypes.INTEGER,
    },
    
})
module.exports = Count;
