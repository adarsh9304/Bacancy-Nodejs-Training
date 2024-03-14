const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password").lean();
    return res.status(200).json({
      message: "Successfully Get Users",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get users",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const Id = req.params.id;
    const user = await User.findById(Id).select("-password").lean();
    return res.status(200).json({
      message: "Successfully Get User",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get user",
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
    const { password, userName, userEmail, role } = req.body;

    if (!password || !userName || !userEmail || !role) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const hashedPassword = hashPassword(password);
    const newUserData = {
      password:hashedPassword,
      userName,
      userEmail,
      role
    }
    const newUser = await User.create(newUserData);
    return res.status(201).json({
      message: "signup User Successful",
      data: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to signup user",
      error: error.message,
    });
  }
};

const matchPassword = (password, hash) => {
  const result = bcrypt.compareSync(password, hash);
  if (!result) {
    throw new Error("Incorrect credentials");
  }
};

const loginUser = async (req, res) => {
  try {
    const { password, userEmail } = req.body;
    if (!password || !userEmail) {
      return res.status(400).json({
        message: "Enter Proper Credential",
      });
    }
    const requiredUser = await User.findOne({ userEmail }).lean();

    matchPassword(password, requiredUser.password);

    const token = jwt.sign({ _id: requiredUser._id }, process.env.JWT_SECRET, {
      expiresIn: "15d",
    });

    const data = { requiredUser, token };

    return res.status(200).json({
      message: "Login User Successful",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to login user",
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const data = req.body;
    const Id = req.user._id;
    const updatedUser = await User.findOneAndUpdate({ _id: Id }, data, {
      new: true,
    }).select("-password");
    return res.status(200).json({
      message: "Update User Successful",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.user._id;

    const deletedUser = await User.findOneAndDelete({ _id: userId });

    if (!deletedUser) {
      return res.status(400).json({
        message: "No User with the given ID",
      });
    } else {
      return res.status(200).json({
        message: "Delete User Successful",
        data: { deletedUser },
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete user",
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
