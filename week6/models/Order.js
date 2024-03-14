const mongoose=require('mongoose');

const productSchema = new mongoose.Schema(
  {
   productName: {
      type: String,
      required: true,
    },
    productOwner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productPrice: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);


const orderSchema = new mongoose.Schema({
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [productSchema],
});

const Product=mongoose.model('Product',productSchema)
const Order = mongoose.model("Order", orderSchema);

module.exports = {
  Product,
  Order
}
