/* eslint-disable no-console */
const Cart = require('../models/Cart');
const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');

const processOrder = async (req, res) => {
  try {
    const cartHolderId = req.user._id;
    const buyer = await User.findByPk(cartHolderId);

    if (!buyer) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
    const userCart = await Cart.findAll({ where: { cartHolderId } });

    if (userCart.length === 0) {
      return res.status(400).json({
        message: 'Empty Cart! Please add items to your cart before placing an order.',
      });
    }
    const cartItemIds = userCart.map((item) => item.cartItemsId);

    const cartProducts = await Product.findAll({ where: { id: cartItemIds } });

    const order = await Order.create({
      buyerId: cartHolderId,
    });

    const addProductPromises = cartProducts.map((product) => order.addProduct(product));
    await Promise.all(addProductPromises);

    await Cart.destroy({ where: { cartHolderId } });

    return res.status(201).json({
      message: 'Order placed successfully.',
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to process order. Please try again later.',
      error: error.message,
    });
  }
};

const getOrderHistory = async (req, res) => {
  try {
    const userId = req.user._id;
    const buyer = await User.findByPk(userId);
    if (!buyer) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }

    const orders = await Order.findAll({ where: { buyerId: userId } });

    let totalAmount = 0;
    const productPromises = orders.map((order) => order.getProducts().then((products) => {
      products.forEach((product) => {
        totalAmount += product.productPrice;
      });
    }));
    await Promise.all(productPromises);

    return res.status(200).json({
      message: 'Order history retrieved successfully.',
      data: { orders, totalAmount },
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to retrieve order history. Please try again later.',
      error: error.message,
    });
  }
};

module.exports = {
  processOrder,
  getOrderHistory,
};
