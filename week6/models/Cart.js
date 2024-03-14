const mongoose=require('mongoose')
const cartSchema = new mongoose.Schema(
  {
    cartHolder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    cartItems: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model("Cart", cartSchema);
module.exports=Cart
