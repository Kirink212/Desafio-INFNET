const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Subject = sequelize.define('subject', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Subject;