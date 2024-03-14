const Cart = require("../models/Cart");
const { Order, Product } = require("../models/Order");
const User = require("../models/User");

const processOrder = async (req, res) => {
  try {
    const userId =req.user._id ;
    const buyer = await User.findById(req.user._id).lean();

    if (!buyer) {
      return res.status(404).json({
        message: "User not found.",
      });
    }
    
    const userCart = await Cart.find({ cartHolder: userId});

    if (userCart.length === 0) {
      return res.status(400).json({
        message: "Empty Cart! Please add items to your cart before placing an order.",
      });
    }

    const cartItemIds = userCart.map(item => item.cartItems);
    
    const cartProducts = await Product.findByIds(cartItemIds);

    const order = new Order({
      products: cartProducts,
      buyer: userId
    });
    await order.save();

    await Cart.deleteMany({ cartHolder: userId });

    return res.status(201).json({
      message: "Order placed successfully.",
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to process order. Please try again later.",
      error: error.message,
    });
  }
};

const getOrderHistory = async (req, res) => {
  try {
    const userId=req.user._id 
    const buyer = await User.findById(userId).lean();
    if (!buyer) {
      return res.status(404).json({
        message: "User not found.",
      });
    }

    const orders = await Order.find({ buyer: userId });
    
    let totalAmount = 0;
    for (const order of orders) {
      for (const product of order.products) {
        totalAmount += product.productPrice;
      }
    }

    return res.status(200).json({
      message: "Order history retrieved successfully.",
      data: { orders, totalAmount },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve order history. Please try again later.",
      error: error.message,
    });
  }
};

module.exports = {
  processOrder,
  getOrderHistory,
};
