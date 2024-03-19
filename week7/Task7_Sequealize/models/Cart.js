/* eslint-disable import/no-extraneous-dependencies */

const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/sequelize');

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  timestamps: true,
});

module.exports = Cart;
