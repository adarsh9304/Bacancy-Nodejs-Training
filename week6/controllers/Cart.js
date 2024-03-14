// const { Cart }  = require("../models/Cart");
const Cart = require("../models/Cart");
const { Product } = require("../models/Order");
const   User  = require("../models/User");

const getCartItems = async (req, res) => {
  try {
    const userId = req.user._id;
    const client = await User.findById(userId).lean().explain();
    console.log(client)
    if (!client) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    
    const cartItems = await Cart.find({ cartHolder: userId })
      .populate('cartHolder', '-password')
      .populate('cartItems')
      .lean();
    
    return res.status(200).json({
      message: "Cart items geted successfully.",
      data: cartItems,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get cart items. Please try again later.",
      error: error.message,
    });
  }
};

const addItemToCart = async (req, res) => {

  try {
    const productId = req.params.id;
    const product = await Product.findById(productId).lean();
    console.log('product',product)

    if (!product) {
      return res.status(400).json({
        message: "Invalid Product! Please select a valid product.",
      });
    }
    
    const userId = req.user._id;
   
    const cartItem = await Cart.create({ cartItems: productId, cartHolder: userId });
    
    return res.status(200).json({
      message: "Item added to cart successfully.",
      data: cartItem,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to add item to cart. Please try again later.",
      error: error.message,
    });
  }
};

const removeItemFromCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const client = await User.findById(userId).lean();
    if (!client) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    
    const cartItemId = req.params.id;
    const cartItem = await Cart.findById(cartItemId).lean();

    if (!cartItem || cartItem.cartHolder.toString() !== userId.toString()) {
      return res.status(403).json({
        message: "You cannot remove this item from the cart.",
      });
    }
    
    const deletedCartItem = await Cart.deleteOne({ _id: cartItemId });

    return res.status(200).json({
      message: "Item removed from cart successfully.",
      data: { deleted_count: deletedCartItem.deletedCount },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to remove item from cart. Please try again later.",
      error: error.message,
    });
  }
};

module.exports= {
  getCartItems,
  addItemToCart,
  removeItemFromCart,
};
