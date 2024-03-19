const express = require('express');
const {
  getProducts, getProduct, addProduct, updateProduct, removeProduct,
} = require('../controllers/Products');
const { isLogin, isSeller } = require('../middleware/auth');

const router = express.Router();

router.get('/', isLogin, isSeller, getProducts);
router.get('/:id', isLogin, isSeller, getProduct);
router.post('/', isLogin, isSeller, addProduct);
router.put('/:id', isLogin, isSeller, updateProduct);
router.delete('/:id', isLogin, isSeller, removeProduct);

module.exports = router;
