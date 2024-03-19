const express = require('express');
const {
  getUsers, getUser, loginUser, signupUser, updateUser, deleteUser,
} = require('../controllers/User');
const { isLogin, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', signupUser);

router.get('/', isLogin, isAdmin, getUsers);
router.get('/:id', isLogin, isAdmin, getUser);
router.put('/', isLogin, isAdmin, updateUser);
router.delete('/', isLogin, isAdmin, deleteUser);

module.exports = router;
