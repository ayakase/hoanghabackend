const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Slider = sequelize.define('Slider', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
    },
    image_src: {
        type: DataTypes.STRING,
        defaultValue: 'https://res.cloudinary.com/dxkmteupm/image/upload/v1695811427/slider-place-holder/awdwsr7ea2zysv4e2tak.jpg'
    },
    tour_url: {
        type: DataTypes.STRING,
        defaultValue: ''
    }
})
module.exports = Slider;
