const express=require('express');
const { isLogin, isBuyer } = require('../middleware/auth');
const { getCartItems, addItemToCart, removeItemFromCart } = require('../controllers/Cart');
const router=express.Router();

router.get('/',isLogin,isBuyer,getCartItems);
router.post('/:id',isLogin,isBuyer,addItemToCart);
router.delete('/:id',isLogin,isBuyer,removeItemFromCart)

module.exports=router;
