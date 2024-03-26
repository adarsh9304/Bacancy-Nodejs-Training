const Cart = require('../models/Cart');
const Product = require('../models/Product');
const User = require('../models/User');

const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }

    const cartItems = await Cart.findAll({
      where: { cartHolderId: userId },
      include: [
        { model: User, as: 'cartHolder', attributes: { exclude: ['password'] } },
        { model: Product, as: 'cartItems' },
      ],
      raw: true,
    });

    return res.status(200).json({
      message: 'Cart items retrieved successfully.',
      data: cartItems,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to get cart items. Please try again later.',
      error: error.message,
    });
  }
};

const addItemToCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(400).json({
        message: 'Invalid Product! Please select a valid product.',
      });
    }

    const cartItem = await Cart.create({ cartItemsId: productId, cartHolderId: userId });

    return res.status(200).json({
      message: 'Item added to cart successfully.',
      data: cartItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to add item to cart. Please try again later.',
      error: error.message,
    });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }

    const cartItemId = req.params.id;
    const cartItem = await Cart.findByPk(cartItemId);

    if (!cartItem || cartItem.cartHolderId !== userId) {
      return res.status(403).json({
        message: 'You cannot remove this item from the cart.',
      });
    }

    await Cart.destroy({ where: { id: cartItemId } });

    return res.status(200).json({
      message: 'Item removed from cart successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to remove item from cart. Please try again later.',
      error: error.message,
    });
  }
};

module.exports = {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
};
