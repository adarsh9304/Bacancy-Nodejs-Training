const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return res.status(200).json({
      message: 'Successfully Get Users',
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to get users',
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const Id = req.params.id;
    const user = await User.findByPk(Id, { attributes: { exclude: ['password'] } });
    if (!user) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
    return res.status(200).json({
      message: 'Successfully Get User',
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to get user',
      error: error.message,
    });
  }
};

const hashPassword = (password) => {
  const Rounds = 9;
  const hash = bcrypt.hashSync(password, Rounds);
  return hash;
};

const signupUser = async (req, res) => {
  try {
    const {
      password, userName, userEmail, role,
    } = req.body;

    if (!password || !userName || !userEmail || !role) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required',
      });
    }

    const hashedPassword = hashPassword(password);
    const newUser = await User.create({
      password: hashedPassword,
      userName,
      userEmail,
      role,
    });
    return res.status(201).json({
      message: 'Signup User Successful',
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to signup user',
      error: error.message,
    });
  }
};

const matchPassword = (password, hash) => {
  const result = bcrypt.compareSync(password, hash);
  if (!result) {
    throw new Error('Incorrect credentials');
  }
};

const loginUser = async (req, res) => {
  try {
    const { password, userEmail } = req.body;
    if (!password || !userEmail) {
      return res.status(400).json({
        message: 'Enter Proper Credential',
      });
    }
    const user = await User.findOne({ where: { userEmail } });
    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    matchPassword(password, user.password);

    const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '15d',
    });

    const data = { user, token };

    return res.status(200).json({
      message: 'Login User Successful',
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to login user',
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const Id = req.user._id;
    const [updatedCount, updatedUser] = await User.update(data, { where: { id: Id }, returning: true });
    if (updatedCount === 0) {
      return res.status(404).json({
        message: 'User not found.',
      });
    }
    return res.status(200).json({
      message: 'Update User Successful',
      data: updatedUser[0],
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to update user',
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user._id;

    const deletedCount = await User.destroy({ where: { id: userId } });

    if (deletedCount === 0) {
      return res.status(400).json({
        message: 'No User with the given ID',
      });
    }
    return res.status(200).json({
      message: 'Delete User Successful',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to delete user',
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  signupUser,
  loginUser,
  updateUser,
  deleteUser,
};
