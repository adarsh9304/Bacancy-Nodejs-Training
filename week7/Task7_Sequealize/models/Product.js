/* eslint-disable import/no-extraneous-dependencies */

const { DataTypes } = require('sequelize');
const Cart = require('./Cart');
const { sequelize } = require('../config/sequelize');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
}, {
  timestamps: true,
});

Product.hasMany(Cart, { foreignKey: 'cartItemsId' });

Cart.belongsTo(Product, { foreignKey: 'cartItemsId' });

module.exports = Product;
