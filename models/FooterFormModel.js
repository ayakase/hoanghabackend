const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const FooterForm = sequelize.define('FooterForm', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.INTEGER,
    },
    email: {
        type: DataTypes.STRING,
    },
    note: {
        type: DataTypes.STRING(255)
    },
    solved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

})
module.exports = FooterForm;
