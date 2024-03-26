const Product = require('../models/Product');
const User = require('../models/User');

const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });

    return res.status(200).json({
      message: 'Products retrieved successfully.',
      data: products,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to retrieve products. Please try again later.',
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    const product = await Product.findByPk(Id, {
      include: [{ model: User, attributes: { exclude: ['password'] } }],
    });

    if (!product) {
      return res.status(404).json({
        message: 'Product not found.',
      });
    }

    return res.status(200).json({
      message: 'Product retrieved successfully.',
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to retrieve product. Please try again later.',
    });
  }
};

const addProduct = async (req, res) => {
  try {
    const { productName, productPrice, userId } = req.body;

    if (!productName || !productPrice || !userId) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const newProduct = await Product.create({
      productOwner: userId,
      productName,
      productPrice,
    });

    return res.status(201).json({
      message: 'Product created successfully.',
      data: newProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to create product. Please try again later.',
      error: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { productName, productPrice } = req.body;
    const Id = req.params.id;
    const userId = req.user._id;

    const product = await Product.findByPk(Id);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found.',
      });
    }

    if (!productName || !productPrice) {
      return res.status(400).json({
        message: 'Product name and product price are required.',
      });
    }

    await Product.update(
      { productName, productPrice },
      { where: { id: Id, productOwner: userId } },
    );

    return res.status(200).json({
      message: 'Product updated successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to update product. Please try again later.',
    });
  }
};

const removeProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    const userId = req.user.id;

    const product = await Product.findByPk(Id);

    if (!product) {
      return res.status(404).json({
        message: 'Product not found.',
      });
    }

    await Product.destroy({ where: { id: Id, productOwner: userId } });

    return res.status(200).json({
      message: 'Product deleted successfully.',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to delete product. Please try again later.',
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
