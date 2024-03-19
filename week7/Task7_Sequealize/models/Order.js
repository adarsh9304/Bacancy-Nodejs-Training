/* eslint-disable import/no-extraneous-dependencies */

const { DataTypes } = require('sequelize');
const Product = require('./Product');
const { sequelize } = require('../config/sequelize');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
}, {
  timestamps: true,
});

Order.belongsToMany(Product, { through: 'OrderProduct' });

module.exports = Order;
