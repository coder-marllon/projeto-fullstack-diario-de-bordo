const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Entry = sequelize.define('Entry', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  favorite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Entry;