const sequelize = require('../connect');
const { DataTypes } = require('sequelize');
const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(255),
    },
    slug: {
        type: DataTypes.STRING(255),
        unique: true,
    },
    thumbnail: {
        type: DataTypes.STRING(255),
    },
    content: {
        type: DataTypes.TEXT,
    },
    tour_link: {
        type: DataTypes.STRING(255),
    },
    publish: {
        type: DataTypes.BOOLEAN(true)
    }
})
module.exports = Post;