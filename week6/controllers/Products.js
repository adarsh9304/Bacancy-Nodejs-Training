const { Product } = require("../models/Order");
const {  User } = require("../models/User");


const getProducts = async (req, res) => {
  try {
    const products = await Product.find()
      .populate("productOwner", "-password")
      .lean();

    return res.status(200).json({
      message: "Products retrieved successfully.",
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve products. Please try again later.",
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const Id=req.params.id
    const product = await Product.findById(Id)
      .populate("productOwner", "-password")
      .lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      });
    }

    return res.status(200).json({
      message: "Product retrieved successfully.",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to retrieve product. Please try again later.",
    });
  }
};

const addProduct = async (req, res) => {
 
  try {
    const { productName , productPrice } = req.body;
   
    const userId=req.user._id
    if (!productName || !productPrice || !userId) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const newProduct = await Product.create({
      productOwner: userId,
      productName,
      productPrice
    });

    return res.status(201).json({
      message: "Product created successfully.",
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create product. Please try again later.",
      error: error.message
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productName, productPrice } = req.body;
    const Id = req.params.id;
    const userId = req.user._id;

    const product = await Product.findById(Id).lean();
  
    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      });
    }
  
    if (!productName || !productPrice) {
      return res.status(400).json({
        message: "Product name and product price are required.",
      });
    }
  
    const updatedProduct = await Product.findByIdAndUpdate(
      { _id: Id },
      { productOwner: userId, 
        productName, 
        productPrice },
      { new: true }
    );
  
    return res.status(200).json({
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update product. Please try again later.",
    });
  }
};


const removeProduct = async (req, res) => {
  try {

    const Id=req.params.id;
    const userId=req.user._id;

    const product = await Product.findById(Id).lean();

    if (!product) {
      return res.status(404).json({
        message: "Product not found.",
      });
    }
    await Product.deleteOne({ _id: Id });

    return res.status(200).json({
      message: "Product deleted successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete product. Please try again later.",
    });
  }
};


module.exports = {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
  removeProduct,
};
