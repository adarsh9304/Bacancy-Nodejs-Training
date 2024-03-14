const express=require('express');
const { isLogin, isBuyer } = require('../middleware/auth');
const { getOrderHistory, processOrder } = require('../controllers/Order');
const router=express.Router();

router.get('/',isLogin, isBuyer , getOrderHistory);
router.post('/',isLogin,isBuyer,processOrder)

module.exports=router;
