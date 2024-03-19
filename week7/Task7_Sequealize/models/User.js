/* eslint-disable import/no-extraneous-dependencies */

const { DataTypes } = require('sequelize');
const Cart = require('./Cart');
const Order = require('./Order');
const Product = require('./Product');
const { sequelize } = require('../config/sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userEmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('Buyer', 'Seller', 'Admin'),
    allowNull: false,
  },
}, {
  timestamps: true,
});

User.hasMany(Cart, { foreignKey: 'cartHolderId' });
User.hasMany(Order, { foreignKey: 'buyerId' });
User.hasMany(Product, { foreignKey: 'productOwner' });

Cart.belongsTo(User, { foreignKey: 'cartHolderId' });
Order.belongsTo(User, { foreignKey: 'buyerId' });
Product.belongsTo(User, { foreignKey: 'productOwner' });

module.exports = User;
